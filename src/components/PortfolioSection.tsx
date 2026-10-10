import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Filter,
  FileCheck,
  Send,
  MessageSquare,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { 
  documentRegistry, 
  documentCategories, 
  DocumentCategory, 
  DocumentItem 
} from '../data/documentsData';
import { DocumentCard } from './DocumentCard';
import { DocumentPreviewModal } from './DocumentPreviewModal';

interface PortfolioSectionProps {
  onRequestAssessment?: () => void;
  onContactForm?: (initialMessage?: string, initialService?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onRequestAssessment,
  onContactForm
}) => {
  const [activeCategory, setActiveCategory] = useState<DocumentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);

  // Dynamic Summary Counters from actual document registry
  const totalCount = documentRegistry.length;
  const availableCount = documentRegistry.filter(d => d.status === 'available').length;
  const inPrepCount = documentRegistry.filter(d => d.status === 'in-preparation' || d.status === 'not-uploaded').length;
  const categoryCount = documentCategories.length;

  // Filtered Documents
  const filteredDocuments = useMemo(() => {
    return documentRegistry.filter((doc) => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        doc.title.toLowerCase().includes(q) || 
        doc.description.toLowerCase().includes(q) ||
        doc.tags.some(t => t.toLowerCase().includes(q)) ||
        doc.type.toLowerCase().includes(q);
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleRequestDraft = (docTitle: string) => {
    if (onContactForm) {
      onContactForm(
        `Inquiry regarding advance copy and consulting engagement for document: "${docTitle}".`,
        'Documentation & Technical Advisory'
      );
    }
  };

  return (
    <section id="resources" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative">
      <div id="portfolio" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ------------------------------------------------------------- */}
        {/* 1. Page Heading & 2. Introduction                             */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Consulting Portfolio &amp; Technical Library</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Teamcenter PLM Consulting Portfolio
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive, transparent repository of technical assessments, solution architecture playbooks, packaged consulting catalogues, and governance templates prepared by <strong>Syed Abdul Hairu</strong> for <strong>FATEQ Technologies</strong>.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Every document is strictly grounded in Siemens Teamcenter 2606, Active Workspace declarative UI, BMIDE, and Active Integration Gateway standards. All live downloads provide authentic, full-length PDF deliverables.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. Summary Counters Calculated from Document Registry         */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                {totalCount}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Total Documents in Registry
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 leading-none">
                {availableCount}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Available · Instant Download
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 leading-none">
                {inPrepCount}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                In Preparation · Review
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 leading-none">
                {categoryCount}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Structured Practice Tracks
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. Category Navigation & Filter Controls                      */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#0A2F5A] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Documents ({totalCount})
              </button>

              {documentCategories.map((cat) => {
                const count = documentRegistry.filter(d => d.category === cat.id).length;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A2F5A] text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{cat.shortName}</span>
                    <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documents, topics, or tags..."
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Active Category Description Ribbon */}
          {activeCategory !== 'all' && (
            <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <span>
                <strong>Category Focus:</strong> {documentCategories.find(c => c.id === activeCategory)?.description}
              </span>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-blue-600 hover:underline font-semibold ml-2 cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 5. Responsive PDF Document Cards Grid                         */}
        {/* ------------------------------------------------------------- */}
        {filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredDocuments.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onPreview={(d) => setSelectedDocument(d)}
                onRequestDraft={handleRequestDraft}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200 mb-16">
            <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No Documents Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No technical documents matched your search query "{searchQuery}". Try clearing your search term or changing the category filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              Show All Documents
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 6. Tailored Assessment Request Banner                         */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-gradient-to-br from-[#0A2F5A] to-blue-900 rounded-2xl p-6 sm:p-10 text-white shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-teal-500/10 skew-x-12 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-400/20 text-teal-200 border border-teal-400/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Diagnostic Engagements</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              Need a Tailored Teamcenter Assessment for Your Enterprise?
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
              While our published documents offer rigorous architectural blueprints and methodology benchmarks, every manufacturing environment possesses unique BMIDE customizations, integration endpoints, and revision governance structures.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {onRequestAssessment && (
                <button
                  onClick={onRequestAssessment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A2F5A] hover:bg-slate-100 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Launch Interactive Maturity Navigator</span>
                </button>
              )}

              {onContactForm && (
                <button
                  onClick={() => onContactForm(
                    'Requesting a confidential preliminary discovery call regarding Teamcenter technical assessment and roadmap formulation.',
                    'Teamcenter PLM Maturity Assessment'
                  )}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Tailored Discovery Call</span>
                </button>
              )}

              <a
                href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20am%20interested%20in%20discussing%20a%20tailored%20Teamcenter%20PLM%20assessment%20with%20FATEQ%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+971 52 558 2129)</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Inspector for Details / Preview */}
      <DocumentPreviewModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
        onRequestAdvanceCopy={handleRequestDraft}
      />
    </section>
  );
};
