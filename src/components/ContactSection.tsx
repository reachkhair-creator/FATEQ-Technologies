import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  UploadCloud, 
  FileCheck, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building,
  Mail,
  User,
  Globe
} from 'lucide-react';
import { FateqLogo } from './FateqLogo';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
  onRequestAssessment?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = '',
  onRequestAssessment
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: 'United Arab Emirates',
    email: '',
    phone: '',
    tcVersion: 'Teamcenter 13 / 14',
    serviceRequired: initialService || 'Active Workspace',
    projectDescription: initialMessage || '',
    preferredContactMethod: 'WhatsApp'
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, projectDescription: initialMessage }));
    }
  }, [initialMessage]);

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const servicesList = [
    'Teamcenter Implementation',
    'Administration',
    'BMIDE',
    'Active Workspace',
    'ITK / SOA',
    'Workflow',
    'Integration',
    'Migration',
    'Upgrade',
    'PLM Governance',
    'Other'
  ];

  const countries = [
    'United Arab Emirates',
    'Kingdom of Saudi Arabia',
    'Qatar',
    'Oman',
    'Kuwait',
    'Bahrain',
    'Other International'
  ];

  const tcVersions = [
    'Teamcenter 10 / 11',
    'Teamcenter 12',
    'Teamcenter 13 / 14',
    'Teamcenter 2312 / 2406',
    'Greenfield / Not Yet Deployed',
    'Other / Unsure'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 15MB
      if (file.size > 15 * 1024 * 1024) {
        alert('File size exceeds 15MB limit. Please upload a smaller architectural document or zip.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and produce a clean confirmation
    setTimeout(() => {
      const ref = `FTQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Syed, I submitted a Teamcenter inquiry for ${formData.company || 'our company'}.
Service: ${formData.serviceRequired}
Version: ${formData.tcVersion}
Ref: ${referenceId || 'New Inquiry'}`;
    return `https://wa.me/971525582129?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 15 Heading & Direct Contact Overview */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Direct Technical Channel
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 font-heading">
            Let's Discuss Your Teamcenter Requirement
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out directly to technical founder Syed Abdul Hairu. Whether you need an emergency ITK fix, a structured BMIDE schema review, or complete Active Workspace deployment planning, we provide clear engineering feedback without sales friction.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Section 15: Clean Contact Card with Blue, Teal, and Violet Accents */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            
            {/* Contact Persona Lockup */}
            <div className="pb-5 border-b border-slate-200">
              <FateqLogo className="h-8 sm:h-9 w-auto mb-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                Founder &amp; Technical Contact
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                Syed Abdul Hairu
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Independent Teamcenter / PLM Technical Services
              </p>
            </div>

            {/* Clickable Mobile Phone & WhatsApp Links */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Direct Telephone (Click to Call)
                </span>
                <a
                  href="tel:+971525582129"
                  className="text-lg font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+971 52 558 2129</span>
                </a>
                <span className="text-[11px] text-slate-400">
                  UAE / Gulf Standard Time (GST · UTC+4)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col gap-1">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Instant WhatsApp Messaging
                </span>
                <a
                  href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-950 hover:underline flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Open WhatsApp with Syed Abdul Hairu</span>
                </a>
                <span className="text-[11px] text-emerald-700">
                  Typical response within 1 business hour
                </span>
              </div>
            </div>

            {/* CTA Buttons required by Section 15 */}
            <div className="pt-2 space-y-2.5">
              <a
                href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+971525582129"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Us (+971 52 558 2129)</span>
              </a>

              {onRequestAssessment && (
                <button
                  type="button"
                  onClick={onRequestAssessment}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request Technical Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Privacy & Non-Disclosure Assurance */}
            <div className="pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <p className="leading-snug">
                All engineering architecture diagrams, part schemas, and project scopes shared with FATEQ Technologies are held under strict technical confidentiality.
              </p>
            </div>

          </div>

          {/* Section 16: Complete Technical Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Technical Requirement Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Syed Abdul Hairu will review your Teamcenter requirement for <strong className="text-slate-900">{formData.company}</strong> and respond shortly.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs font-mono text-slate-700">
                  <span>Reference ID: </span>
                  <strong className="text-blue-700">{referenceId}</strong>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppPrefillUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>Follow Up on WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        country: 'United Arab Emirates',
                        email: '',
                        phone: '',
                        tcVersion: 'Teamcenter 13 / 14',
                        serviceRequired: 'Active Workspace',
                        projectDescription: '',
                        preferredContactMethod: 'WhatsApp'
                      });
                      setAttachedFile(null);
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project &amp; Environment Details
                  </span>
                  <span className="text-[11px] text-slate-400">
                    * Required fields
                  </span>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gulf HVAC Industries"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Country & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {countries.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp & Teamcenter Version */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Teamcenter Version
                    </label>
                    <select
                      value={formData.tcVersion}
                      onChange={(e) => setFormData({ ...formData, tcVersion: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {tcVersions.map(v => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Required Dropdown (Section 16 exact list) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    {servicesList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Description / Technical Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current setup, challenges, timeline, or scope (e.g., AWC 6.2 customization, BMIDE data model cleanup, or SAP BOM sync)..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center gap-4 text-xs text-slate-700">
                    {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                      <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContactMethod === method}
                          onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Optional Document Upload (Section 16 requirement) */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Architecture Diagram or Scope Document (Optional)
                  </label>
                  
                  {attachedFile ? (
                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50/60 border border-blue-200 text-xs">
                      <div className="flex items-center gap-2 text-blue-900 font-medium">
                        <FileCheck className="w-4 h-4 text-blue-600" />
                        <span className="truncate max-w-xs">{attachedFile.name}</span>
                        <span className="text-[11px] text-blue-600 font-mono">
                          ({(attachedFile.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAttachedFile(null)}
                        className="text-slate-400 hover:text-slate-700 p-1"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-400 bg-slate-50/50 hover:bg-blue-50/20 cursor-pointer transition-colors text-center">
                      <UploadCloud className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-xs font-medium text-slate-700">
                        Click to upload PDF, Word, or Image
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        PDF, DOCX, PNG, JPG or ZIP (Max 15MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Direct engineering review by Syed Abdul Hairu
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Technical Requirement'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
