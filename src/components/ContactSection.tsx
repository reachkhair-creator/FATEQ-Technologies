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
  Mail,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { FateqLogo } from './FateqLogo';
import { FounderPortrait } from './FounderPortrait';

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
    tcVersion: 'Teamcenter 13 / 14 / 2606',
    serviceRequired: initialService || 'Teamcenter Administration and Support',
    projectDescription: initialMessage || '',
    preferredContactMethod: 'WhatsApp',
    consentAgreed: true,
    website_hp: '' // Honeypot field for spam bots
  });

  const [emailError, setEmailError] = useState('');
  const [copied, setCopied] = useState(false);

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
    'Teamcenter Administration and Support',
    'BMIDE and Teamcenter Customization',
    'Active Workspace Configuration & UI',
    'PLM, CAD, and ERP Integration',
    'Teamcenter Upgrade and Migration',
    'Teamcenter Maturity Assessment and Roadmap',
    'Offer A: Teamcenter Health Check (Assessment)',
    'Offer B: Teamcenter Issue Resolution (Troubleshooting)',
    'Offer C: Teamcenter Managed Support (Recurring)',
    'Other Technical Inquiry'
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
    'Teamcenter 2606 / Active Workspace',
    'Teamcenter 2312 / 2406',
    'Teamcenter 13 / 14',
    'Teamcenter 12',
    'Teamcenter 10 / 11 (Legacy)',
    'Greenfield / Not Yet Deployed',
    'Other / Unsure'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        alert('File size exceeds 15MB limit. Please upload a smaller architectural document or zip.');
        return;
      }
      setAttachedFile(file);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.website_hp) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    // Client-side email validation
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid business email address.');
      return;
    }
    setEmailError('');

    setIsSubmitting(true);

    const ref = `FTQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('fateq_inquiries') || '[]');
      existing.push({
        ref,
        date: new Date().toISOString(),
        ...formData,
        fileName: attachedFile ? attachedFile.name : null
      });
      localStorage.setItem('fateq_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const getInquirySummaryText = () => {
    return `[FATEQ Technologies Technical Inquiry: ${referenceId}]
Name: ${formData.name}
Company: ${formData.company} (${formData.country})
Email: ${formData.email}
Phone: ${formData.phone}
Target Platform: ${formData.tcVersion}
Service Requested: ${formData.serviceRequired}
Preferred Contact: ${formData.preferredContactMethod}

Technical Scope / Description:
${formData.projectDescription}`;
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(getInquirySummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`[FATEQ Inquiry ${referenceId}] ${formData.serviceRequired} - ${formData.company}`);
    const body = encodeURIComponent(getInquirySummaryText());
    return `mailto:reachkhair@gmail.com,info@fateqtechnologies.com?subject=${subject}&body=${body}`;
  };

  const getWhatsAppPrefillUrl = () => {
    const text = `Hello Syed, I submitted a Teamcenter requirement for ${formData.company || 'our company'}.
Ref: ${referenceId}
Service: ${formData.serviceRequired}
Version: ${formData.tcVersion}
Email: ${formData.email}

Details: ${formData.projectDescription.substring(0, 160)}...`;
    return `https://wa.me/971525582129?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA]">
            Direct Technical Inquiry Channel
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1930] tracking-tight mt-1 font-heading">
            Discuss Your Teamcenter Challenge
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out directly to technical founder and principal architect <strong>Syed Abdul Hairu</strong>. Whether you need an emergency ITK fix, a structured BMIDE schema review, a full Active Workspace rollout, or ongoing support, we provide clear engineering feedback without sales friction.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Access */}
          <div className="lg:col-span-5 bg-[#F4F7FA] rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            
            {/* Contact Persona Lockup */}
            <div className="pb-5 border-b border-slate-200">
              <FateqLogo className="h-8 sm:h-9 w-auto mb-4" />
              <div className="flex items-center gap-3.5 mt-2">
                <FounderPortrait size="sm" showBadge={false} />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1769AA] font-bold block">
                    Founder &amp; Principal PLM Technical Specialist
                  </span>
                  <h3 className="text-lg font-extrabold text-[#0B1930] leading-tight">
                    Syed Abdul Hairu
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    FATEQ Technologies · UAE &amp; GCC
                  </p>
                </div>
              </div>
            </div>

            {/* Clickable Mobile Phone & WhatsApp Links */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Direct Telephone (Click to Call)
                </span>
                <a
                  href="tel:+971525582129"
                  className="text-lg font-mono font-bold text-[#1769AA] hover:text-[#0B1930] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#1769AA]" />
                  <span>+971 52 558 2129</span>
                </a>
                <span className="text-[11px] text-slate-400">
                  UAE / Gulf Standard Time (GST · UTC+4) · Available for GCC &amp; Global Calls
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

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col gap-1">
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                  Direct Email Contact
                </span>
                <a
                  href="mailto:reachkhair@gmail.com,info@fateqtechnologies.com"
                  className="text-sm font-semibold text-blue-950 hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>reachkhair@gmail.com</span>
                </a>
                <span className="text-[11px] text-blue-800">
                  Detailed RFPs, SOW requests, and architecture scopes
                </span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 space-y-2.5">
              <a
                href="https://wa.me/971525582129?text=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20Teamcenter%20PLM%20requirement%20with%20FATEQ%20Technologies."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>

              {onRequestAssessment && (
                <button
                  type="button"
                  onClick={onRequestAssessment}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#1769AA] hover:bg-[#0B1930] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Launch Interactive Maturity Navigator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Confidentiality & NDA Assurance */}
            <div className="pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <p className="leading-snug">
                All engineering architecture diagrams, part schemas, and project scopes shared with FATEQ Technologies are protected under strict professional confidentiality. Bilateral NDAs provided upon request.
              </p>
            </div>

          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1930] font-heading">
                  Technical Requirement Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Syed Abdul Hairu will review your Teamcenter requirement for <strong className="text-slate-900">{formData.company}</strong> and provide initial architectural feedback.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs font-mono text-slate-700">
                  <span>Inquiry Reference: </span>
                  <strong className="text-[#1769AA]">{referenceId}</strong>
                </div>

                {/* Instant Action Delivery Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppPrefillUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-xl transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>Send via WhatsApp (+971 52 558 2129)</span>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-blue-900 bg-blue-100 hover:bg-blue-200 rounded-xl transition-colors shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-blue-700" />
                    <span>Open in Email Client</span>
                  </a>
                </div>

                <div className="pt-2 flex items-center justify-center gap-4">
                  <button
                    onClick={handleCopyToClipboard}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary Text'}</span>
                  </button>

                  <span className="text-slate-300">|</span>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        country: 'United Arab Emirates',
                        email: '',
                        phone: '',
                        tcVersion: 'Teamcenter 13 / 14 / 2606',
                        serviceRequired: 'Teamcenter Administration and Support',
                        projectDescription: '',
                        preferredContactMethod: 'WhatsApp',
                        consentAgreed: true,
                        website_hp: ''
                      });
                      setAttachedFile(null);
                    }}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

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
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gulf Manufacturing & Engineering"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Country & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Country / Region *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors cursor-pointer"
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
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (emailError) setEmailError('');
                      }}
                      className={`w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] transition-colors ${
                        emailError ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {emailError && (
                      <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{emailError}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone & Teamcenter Version */}
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
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Teamcenter Version
                    </label>
                    <select
                      value={formData.tcVersion}
                      onChange={(e) => setFormData({ ...formData, tcVersion: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors cursor-pointer"
                    >
                      {tcVersions.map(v => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Required Dropdown (Includes 6 Core Services + Commercial Offers) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors cursor-pointer"
                  >
                    {servicesList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Problem Description / Technical Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current setup, technical bottlenecks, timeline, or scope (e.g., Active Workspace XRT refactoring, BMIDE data model cleanup, CAD-to-SAP BOM sync, or 11.x upgrade planning)..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs text-slate-900 bg-slate-50/50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1769AA] focus:border-transparent transition-colors resize-y"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center gap-5 text-xs text-slate-700">
                    {['WhatsApp', 'Email', 'Phone Call'].map((method) => (
                      <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContactMethod === method}
                          onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                          className="text-[#1769AA] focus:ring-[#1769AA]"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Optional Architecture File Upload */}
                <div className="pt-1">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Architecture Diagram, Scope Document or Log Snippet (Optional)
                  </label>
                  
                  {attachedFile ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
                      <div className="flex items-center gap-2 text-blue-900 font-medium truncate">
                        <FileCheck className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="truncate max-w-xs">{attachedFile.name}</span>
                        <span className="text-[11px] text-blue-600 font-mono shrink-0">
                          ({(attachedFile.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAttachedFile(null)}
                        className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-3.5 border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-400 bg-slate-50/50 hover:bg-blue-50/20 cursor-pointer transition-colors text-center">
                      <UploadCloud className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-xs font-medium text-slate-700">
                        Click to attach PDF, Word, or Image
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        PDF, DOCX, PNG, JPG, XML or ZIP (Max 15MB)
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.xml,.txt,.log"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600">
                    <input
                      type="checkbox"
                      checked={formData.consentAgreed}
                      onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                      className="mt-0.5 text-[#1769AA] focus:ring-[#1769AA] rounded"
                      required
                    />
                    <span>
                      I agree that FATEQ Technologies may contact me regarding this technical inquiry. All information is held in strict professional confidentiality.
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Direct review by Syed Abdul Hairu
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consentAgreed}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#1769AA] hover:bg-[#0B1930] rounded-xl shadow-xs hover:shadow transition-all disabled:opacity-50 cursor-pointer"
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
