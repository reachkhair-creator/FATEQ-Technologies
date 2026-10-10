import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Eye,
  FileCheck2,
  Calendar,
  Layers
} from 'lucide-react';
import { DocumentItem } from '../data/documentsData';

interface DocumentCardProps {
  document: DocumentItem;
  onPreview: (doc: DocumentItem) => void;
  onRequestDraft: (docTitle: string) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  onPreview,
  onRequestDraft
}) => {
  const isAvailable = document.status === 'available' && !!document.filePath;
  const isInPrep = document.status === 'in-preparation';

  return (
    <div className="group bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden relative">
      
      {/* Top Accent Strip */}
      <div className={`h-1 w-full ${isAvailable ? 'bg-teal-600' : 'bg-amber-400'}`} />

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        
        {/* Category & Status Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            <span>{document.categoryName.replace(/^[A-D]\.\s*/, '')}</span>
          </span>

          {isAvailable ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Available · PDF Ready</span>
            </span>
          ) : isInPrep ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
              <Clock className="w-3 h-3 text-amber-600" />
              <span>In Preparation</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500 border border-slate-200">
              <AlertCircle className="w-3 h-3 text-slate-400" />
              <span>Not Uploaded</span>
            </span>
          )}
        </div>

        {/* Title & Icon Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-700">
            {isAvailable ? (
              <FileCheck2 className="w-5 h-5" />
            ) : (
              <FileText className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-[15px] sm:text-base text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
              {document.title}
            </h3>
            {document.isIllustrativeSample && (
              <span className="inline-block mt-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50/80 px-1.5 py-0.2 rounded border border-blue-100">
                Illustrative Portfolio Sample
              </span>
            )}
          </div>
        </div>

        {/* Professional Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
          {document.description}
        </p>

        {/* Metadata Details Grid */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500 mb-4">
          <div className="flex items-center gap-1.5 truncate">
            <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate" title={document.type}>
              {document.type}
            </span>
          </div>

          <div className="flex items-center gap-1.5 truncate">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              {document.version || document.releaseDate || 'Q4 2026'}
            </span>
          </div>

          {document.pages && (
            <div className="text-[10px] text-slate-400">
              Length: <span className="font-medium text-slate-600">{document.pages} Pages</span>
            </div>
          )}

          {document.fileSize && (
            <div className="text-[10px] text-slate-400">
              Size: <span className="font-medium text-slate-600">{document.fileSize}</span>
            </div>
          )}
        </div>

      </div>

      {/* Card Action Controls */}
      <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onPreview(document)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          title="Inspect document summary, TOC, and metadata"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>

        <div className="flex items-center gap-2">
          {isAvailable ? (
            <>
              <a
                href={document.filePath!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-md font-semibold text-xs transition-colors cursor-pointer"
                title="View PDF document in new browser tab"
              >
                <ExternalLink className="w-3 h-3 text-slate-500" />
                <span>View</span>
              </a>

              <a
                href={document.filePath!}
                download={document.fileName || 'FATEQ_Document.pdf'}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#0A2F5A] hover:bg-blue-900 text-white rounded-md font-bold text-xs shadow-2xs transition-colors cursor-pointer"
                title={`Download ${document.fileName || 'PDF'}`}
              >
                <Download className="w-3 h-3" />
                <span>Download</span>
              </a>
            </>
          ) : (
            <button
              onClick={() => onRequestDraft(document.title)}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-md font-semibold text-xs transition-colors cursor-pointer"
              title="Request advance draft from Syed Abdul Hairu"
            >
              <span>Request Copy</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
