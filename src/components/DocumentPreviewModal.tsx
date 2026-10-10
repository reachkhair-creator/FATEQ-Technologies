import React from 'react';
import { X, FileText, Download, ExternalLink, Shield, CheckCircle2, Clock, AlertCircle, Send, MessageSquare } from 'lucide-react';
import { DocumentItem } from '../data/documentsData';

interface DocumentPreviewModalProps {
  document: DocumentItem | null;
  onClose: () => void;
  onRequestAdvanceCopy: (docTitle: string) => void;
}

export const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  document,
  onClose,
  onRequestAdvanceCopy
}) => {
  if (!document) return null;

  const isAvailable = document.status === 'available' && document.filePath;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A2F5A] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close document preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-200 border border-teal-400/30">
              <FileText className="w-3.5 h-3.5" />
              <span>{document.categoryName}</span>
            </span>

            {isAvailable ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Download ({document.fileSize})</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Clock className="w-3.5 h-3.5" />
                <span>In Preparation · Peer Review</span>
              </span>
            )}

            {document.isIllustrativeSample && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
                Illustrative Portfolio Sample
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {document.title}
          </h3>
          <p className="mt-1 text-xs text-slate-300">
            {document.type} {document.version && `· ${document.version}`} {document.releaseDate && `· ${document.releaseDate}`}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[calc(85vh-180px)] overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Executive Overview
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
              {document.description}
            </p>
          </div>

          {/* Key Technical Highlights */}
          {document.highlights && document.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Core Deliverable Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {document.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 bg-white border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents */}
          {document.tableOfContents && document.tableOfContents.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Document Table of Contents
              </h4>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 space-y-1.5">
                {document.tableOfContents.map((toc, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-slate-400 font-sans">{i + 1}.</span>
                    <span className="truncate">{toc.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Document Metadata Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50/80 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Author</span>
              <span className="font-semibold text-slate-800">{document.author}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Firm</span>
              <span className="font-semibold text-slate-800">{document.organization}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Page Count</span>
              <span className="font-semibold text-slate-800">{document.pages ? `${document.pages} Pages` : 'Drafting'}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">File Format</span>
              <span className="font-semibold text-slate-800">Adobe PDF</span>
            </div>
          </div>

          {/* Status Alert if in preparation */}
          {!isAvailable && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900">Document Currently in Final Peer Review</p>
                <p className="mt-0.5 text-amber-800 leading-relaxed">
                  This technical document is actively being authored and audited by Syed Abdul Hairu to reflect Siemens Teamcenter 2606 baseline standards. Enterprise clients may request an advance draft or customized scope preview.
                </p>
              </div>
            </div>
          )}

          {/* Legal Non-Affiliation Disclaimer */}
          <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-[11px] leading-relaxed text-slate-500 flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>FATEQ Technologies Disclaimer: </strong>
              FATEQ Technologies operates strictly as an independent technical services provider. Siemens, Teamcenter, Active Workspace, NX, and BMIDE are trademarks of Siemens Industry Software Inc. FATEQ Technologies is not owned, operated, authorized, endorsed, or affiliated with Siemens.
            </p>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {isAvailable ? 'Official release available for instant download' : 'Direct consulting engagement available on request'}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {isAvailable ? (
              <>
                <a
                  href={document.filePath!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                  <span>View in New Tab</span>
                </a>

                <a
                  href={document.filePath!}
                  download={document.fileName || 'FATEQ_Document.pdf'}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A2F5A] hover:bg-blue-900 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF ({document.fileSize})</span>
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onClose();
                    onRequestAdvanceCopy(document.title);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A2F5A] hover:bg-blue-900 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Advance Draft</span>
                </button>

                <a
                  href={`https://wa.me/971525582129?text=${encodeURIComponent(`Hello Syed, I am inquiring about the document "${document.title}" from FATEQ Technologies.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </>
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
