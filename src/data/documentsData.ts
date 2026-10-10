export type DocumentCategory = 
  | 'plm-assessment' 
  | 'case-studies' 
  | 'service-catalogue' 
  | 'templates';

export type DocumentStatus = 'available' | 'in-preparation' | 'not-uploaded';

export interface DocumentItem {
  id: string;
  title: string;
  category: DocumentCategory;
  categoryName: string;
  description: string;
  type: string;
  version?: string;
  releaseDate?: string;
  pages?: number;
  fileSize?: string;
  filePath: string | null;
  fileName: string | null;
  status: DocumentStatus;
  author: string;
  organization: string;
  isIllustrativeSample?: boolean;
  highlights?: string[];
  tableOfContents?: string[];
  tags: string[];
}

export interface CategoryMeta {
  id: DocumentCategory;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
}

export const documentCategories: CategoryMeta[] = [
  {
    id: 'plm-assessment',
    name: 'A. PLM Assessment & Roadmaps',
    shortName: 'Assessments & Roadmaps',
    description: 'Technical evaluations, maturity index scorecards, and modernization roadmaps across Teamcenter architectures.',
    iconName: 'Compass'
  },
  {
    id: 'case-studies',
    name: 'B. Technical Case Studies',
    shortName: 'Technical Case Studies',
    description: 'Engineering-to-manufacturing blueprints, CAD-to-ERP integrations, and multi-tier deployment architectures.',
    iconName: 'Cpu'
  },
  {
    id: 'service-catalogue',
    name: 'C. Consulting Service Catalogue',
    shortName: 'Service Catalogue',
    description: 'Structured advisory packages, scope boundaries, acceptance criteria, and delivery timelines for PLM engagements.',
    iconName: 'BookOpen'
  },
  {
    id: 'templates',
    name: 'D. Consulting Documentation Templates',
    shortName: 'Documentation Templates',
    description: 'Standardized Statements of Work (SOW), commercial governance schedules, and deliverable report structures.',
    iconName: 'FileCheck'
  }
];

export const documentRegistry: DocumentItem[] = [
  // -------------------------------------------------------------------------
  // CATEGORY A: PLM Assessment & Roadmaps
  // -------------------------------------------------------------------------
  {
    id: 'plm-maturity-roadmap',
    title: 'Teamcenter PLM Maturity Assessment and Improvement Roadmap',
    category: 'plm-assessment',
    categoryName: 'PLM Assessment & Roadmaps',
    description: 'Comprehensive technical evaluation, 5-level maturity scoring across 8 core domains, technical risk register, and a phased 12-month modernization blueprint with 90-day quick wins.',
    type: 'Assessment & Modernization Blueprint',
    version: 'v1.0 Final Baseline',
    releaseDate: 'October 2026',
    pages: 6,
    fileSize: '59 KB',
    filePath: '/documents/FATEQ_Teamcenter_PLM_Maturity_Assessment_and_Improvement_Roadmap.pdf',
    fileName: 'FATEQ_Teamcenter_PLM_Maturity_Assessment_and_Improvement_Roadmap.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      'Evaluation across 8 core domains: Governance, PDM, BMIDE, ECO, Multi-BOM, Workflows, ERP Sync, Analytics',
      '5-Level PLM Maturity Framework with comparative baseline vs target scores (Level 2.2 to Level 4.0)',
      'Prioritized technical risk register covering customization debt, scrap, and security controls',
      'Phased 12-Month Modernization Roadmap with 90-day quick-win milestones and KPI target metrics'
    ],
    tableOfContents: [
      '1. Fictional Company Background, Scope & Assumptions',
      '2. PLM Assessment Methodology & 5-Level Maturity Model',
      '3. Detailed Findings, Domain Scoring & Gap Analysis',
      '4. Technical & Business Risk Register with Corrective Actions',
      '5. Recommended Target State & 12-Month Prioritized Roadmap',
      '6. Measurable KPIs & Program Success Criteria',
      '7. Technical Dependencies, Assumptions & Constraints',
      '8. Consulting Deliverables, Disclaimer & Quality Control Checklist'
    ],
    tags: ['Teamcenter 2606', 'Maturity Index', 'BMIDE Schema', 'EBOM-MBOM', 'Risk Register']
  },
  {
    id: 'technical-health-check',
    title: 'Teamcenter Technical Health Check and Upgrade Readiness Assessment',
    category: 'plm-assessment',
    categoryName: 'PLM Assessment & Roadmaps',
    description: 'Diagnostic audit evaluating server topology, FMS/FSC client cache volume hit ratios, database indexing, and custom ITK script deprecation to ensure zero-downtime platform upgrades.',
    type: 'System Health Audit & Readiness Report',
    version: 'v0.9 Draft in Review',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      'FSC volume cache topology and remote branch network latency benchmarks',
      'Database character set UTF-8 verification for Active Workspace compatibility',
      'Audit of legacy C++/ITK server handlers against target API deprecation lists',
      'Automated syslog parsing and POM slow-query indexing recommendations'
    ],
    tags: ['Health Check', 'Upgrade Blocker Audit', 'FSC Caching', 'ITK Deprecation']
  },
  {
    id: 'digital-thread-roadmap',
    title: 'Engineering-to-Manufacturing Digital Thread and Governance Roadmap',
    category: 'plm-assessment',
    categoryName: 'PLM Assessment & Roadmaps',
    description: 'Strategic architecture bridging 3D CAD authoring (NX/Solid Edge), 120% Master EBOM structures, Easy Plan MBOM derivation, and closed-loop ERP/MES production feedback.',
    type: 'Strategic Architecture Blueprint',
    version: 'v0.8 In Drafting',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      'End-to-end digital thread definition across CAD, PLM, ERP, MES, and Service',
      'Easy Plan Manufacturing Process Planning (MPP) integration blueprint',
      'Automated secondary viewable generation (JT, 3D PDF, DXF) on release gates',
      'Scope 3 product carbon footprinting integration via Makersite Cloud'
    ],
    tags: ['Digital Thread', 'Easy Plan', 'EBOM-to-MBOM', 'Industry 4.0']
  },

  // -------------------------------------------------------------------------
  // CATEGORY B: Technical Case Studies
  // -------------------------------------------------------------------------
  {
    id: 'cad-erp-integration',
    title: 'CAD-to-ERP Integration and BOM Data Integrity',
    category: 'case-studies',
    categoryName: 'Technical Case Studies',
    description: 'Technical case study and solution architecture playbook on connecting Siemens NX, Teamcenter 2606, Active Integration Gateway (AIG / T4S), and SAP ERP with zero duplicate material creation.',
    type: 'Solution Architecture Playbook & Case Study',
    version: 'v1.0 Reference Baseline',
    releaseDate: 'October 2026',
    pages: 5,
    fileSize: '45 KB',
    filePath: '/documents/FATEQ_Case_Study_CAD_to_ERP_Integration_and_BOM_Data_Integrity.pdf',
    fileName: 'FATEQ_Case_Study_CAD_to_ERP_Integration_and_BOM_Data_Integrity.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      'Event-driven integration triggered upon Teamcenter TCM Released status gate',
      'Detailed attribute mapping framework between NX properties, BMIDE, and SAP MATNR',
      'Pre-transfer workflow release gates enforcing 5-level mass precedence and ECLASS CST classification',
      'Asynchronous AIG queue handling with automated retry and exception escalation'
    ],
    tableOfContents: [
      '1. Executive Summary',
      '2. Business Problem & As-Is Operational Baseline',
      '3. Project Scope & Technical Objectives',
      '4. Technical Architecture & Data Pipeline',
      '5. Technical Challenges & Root Cause Analysis',
      '6. Detailed Solution Design & Mapping Framework',
      '7. Implementation Phases & Teamcenter Components Used',
      '8. Testing, Verification & Acceptance Criteria',
      '9. Key Performance Indicators & Business Outcomes',
      '10. Risk Register & Mitigation Strategy',
      '11. Lessons Learned & Strategic Recommendations',
      '12. Quality Control & Mandatory Disclaimer'
    ],
    tags: ['NX CAD', 'AIG / T4S', 'SAP ERP', 'BOM Data Integrity', 'Active Integration Gateway']
  },
  {
    id: 'teamcenter-deployment-case-study',
    title: 'Teamcenter Deployment and Implementation',
    category: 'case-studies',
    categoryName: 'Technical Case Studies',
    description: 'Enterprise deployment methodology documenting 4-tier server infrastructure, Dispatcher server farm clustering, Active Workspace declarative UI rollout, and HashiCorp Vault secrets management.',
    type: 'Implementation Methodology Playbook',
    version: 'v0.9 In Peer Review',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      '4-tier high-availability infrastructure topology for multi-site enterprise environments',
      'Deployment Center 7-step automated lifecycle execution runbooks',
      'Active Workspace custom tile and declarative stylesheet deployment',
      'Centralized secret encryption and zero-trust database credential management'
    ],
    tags: ['Deployment Center', '4-Tier Architecture', 'Active Workspace', 'High Availability']
  },
  {
    id: 'upgrade-technical-readiness-case-study',
    title: 'Teamcenter Upgrade and Technical Readiness Assessment',
    category: 'case-studies',
    categoryName: 'Technical Case Studies',
    description: 'Step-by-step case study detailing technical risk auditing and execution strategies for transitioning legacy Teamcenter installations (11.x/12.x RAC) to modern Active Workspace 2606.',
    type: 'Upgrade Execution Case Study',
    version: 'v0.9 In Peer Review',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: true,
    highlights: [
      'Refactoring legacy custom C++ ITK handlers into out-of-the-box BMIDE business objects',
      'Migration of legacy RAC XML stylesheets to Active Workspace HTML5 XRT definitions',
      '4-environment gate validation strategy (Dev, QA, UAT, Production)',
      'Weekend cutover runbook guaranteeing less than 12 hours of total production downtime'
    ],
    tags: ['Teamcenter Upgrade', 'RAC to AWC', 'ITK Refactoring', 'Weekend Cutover']
  },

  // -------------------------------------------------------------------------
  // CATEGORY C: Consulting Service Catalogue
  // -------------------------------------------------------------------------
  {
    id: 'service-catalogue-plm-maturity',
    title: 'Teamcenter PLM Maturity Assessment',
    category: 'service-catalogue',
    categoryName: 'Consulting Service Catalogue',
    description: '3–4 week comprehensive diagnostic engagement evaluating enterprise Teamcenter governance, PDM data modeling, change management, and adoption barriers with a prioritized 12-month roadmap.',
    type: 'Advisory Package Specification',
    version: 'Version 2026.1 (Initial Offering)',
    releaseDate: 'October 2026',
    pages: 8,
    fileSize: '57 KB',
    filePath: '/documents/FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    fileName: 'FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      'Duration: 3 to 4 Calendar Weeks (~40 consultant hours)',
      'Primary Deliverables: Maturity Scoring Report, Gap Analysis Matrix, and 12-Month Digital Roadmap',
      'Covers 5 core domains: Governance & Admin, PDM & CAD, BMIDE, Engineering Change, EBOM/MBOM',
      'Clear engagement boundaries distinguishing in-scope advisory activities from exclusions'
    ],
    tableOfContents: [
      '1.1 Service Overview & Business Problem',
      '1.2 Ideal Client Profile & Engagement Triggers',
      'In-Scope Focus vs Out-of-Scope Exclusions',
      'FATEQ 5-Level PLM Maturity Framework',
      'Key Deliverables & Acceptance Criteria',
      'Engagement Duration & Boundaries'
    ],
    tags: ['Service Catalogue', 'Maturity Audit', 'Fixed Duration', 'Advisory Scope']
  },
  {
    id: 'service-catalogue-upgrade-readiness',
    title: 'Teamcenter Upgrade Readiness Assessment',
    category: 'service-catalogue',
    categoryName: 'Consulting Service Catalogue',
    description: '2–3 week specialized technical risk audit evaluating BMIDE project templates, custom C++ ITK handlers, Active Workspace stylesheets, and database encoding to ensure risk-free cutover.',
    type: 'Technical Audit Package Specification',
    version: 'Version 2026.1 (Initial Offering)',
    releaseDate: 'October 2026',
    pages: 8,
    fileSize: '57 KB',
    filePath: '/documents/FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    fileName: 'FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      'Duration: 2 to 3 Calendar Weeks (~35 consultant hours)',
      'Primary Deliverables: Upgrade Readiness Report, Go/No-Go Decision Matrix, Cutover & Rollback Strategy',
      '4-Environment Upgrade Gate Strategy (Dev -> QA -> UAT -> Production)',
      'Detailed audit of custom code, RAC stylesheets, and CAD/ERP integration matrices'
    ],
    tableOfContents: [
      '2.1 Service Overview & Technical Need',
      '2.2 Ideal Client Profile & Engagement Triggers',
      'Technical Audit Domain & Risk Criteria',
      'FATEQ 4-Environment Upgrade Gate Strategy',
      'Deliverable Assets & Acceptance Criteria',
      'Cutover & Rollback Strategy Runbook'
    ],
    tags: ['Service Catalogue', 'Upgrade Audit', 'Go/No-Go Gate', 'Cutover Strategy']
  },
  {
    id: 'service-catalogue-plm-governance',
    title: 'PLM Governance and Process Improvement',
    category: 'service-catalogue',
    categoryName: 'Consulting Service Catalogue',
    description: '4–6 week process re-engineering engagement establishing engineering data governance, 100% EBOM accuracy, closed-loop change control (ECR/ECO), and automated Dispatcher release rules.',
    type: 'Process Engineering Package Specification',
    version: 'Version 2026.1 (Initial Offering)',
    releaseDate: 'October 2026',
    pages: 8,
    fileSize: '57 KB',
    filePath: '/documents/FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    fileName: 'FATEQ_Teamcenter_PLM_Professional_Service_Catalogue.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      'Duration: 4 to 6 Calendar Weeks (~60 consultant hours)',
      'Primary Deliverables: PLM Governance Operating Manual, Workflow Designer Specifications, RACI Matrix',
      'Target KPIs: EBOM accuracy >99.0%, change cycle reduction to <10 days, 100% drawing control',
      'Phased rollout across Data Cleansing, ECR/ECO, Dispatcher Automation, and MBOM Handover'
    ],
    tableOfContents: [
      '3.1 Service Overview & Business Problem',
      '3.2 Ideal Client Profile & Engagement Triggers',
      'As-Is Deficit vs Proposed To-Be Controls',
      'Phased Process Improvement Timeline & Target KPIs',
      'Governance Deliverables & Acceptance Criteria',
      'RACI Responsibility Matrix'
    ],
    tags: ['Service Catalogue', 'Process Governance', 'Change Control', 'RACI Matrix']
  },

  // -------------------------------------------------------------------------
  // CATEGORY D: Consulting Documentation Templates
  // -------------------------------------------------------------------------
  {
    id: 'sow-template',
    title: 'Statement of Work (SOW) Template',
    category: 'templates',
    categoryName: 'Consulting Documentation Templates',
    description: 'Professional Services Agreement and Technical Deliverables Schedule establishing legally binding project governance, in-scope vs out-of-scope boundaries, WBS, deliverables, and payment milestones.',
    type: 'Contractual Agreement & Schedule Template',
    version: 'v1.0 Approved Baseline',
    releaseDate: 'October 2026',
    pages: 5,
    fileSize: '50 KB',
    filePath: '/documents/FATEQ_Statement_of_Work_SOW_Template.pdf',
    fileName: 'FATEQ_Statement_of_Work_SOW_Template.pdf',
    status: 'available',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      '10 Core Contractual Sections: Document Control, Scope Boundaries, WBS, Deliverables, Payment Milestones',
      'Explicit In-Scope vs Out-of-Scope boundary clauses preventing scope creep',
      'Structured 4-Phase Work Breakdown Structure with milestone acceptance criteria',
      'Standard technical consulting terms, warranty coverage, limitation of liability, and signature blocks'
    ],
    tableOfContents: [
      '1. Document Control & Revision History',
      '2. Executive Summary & Project Objectives',
      '3. Project Scope & Boundaries (In-Scope vs Out-of-Scope)',
      '4. Work Breakdown Structure (WBS) & Technical Tasks',
      '5. Key Deliverables & Formal Acceptance Criteria (DEL-01 to DEL-05)',
      '6. Schedule, Commercial References & Payment Milestones (M1 to M4)',
      '7. Client Inputs, Responsibilities & Project Dependencies',
      '8. Project Governance & Change Control Procedure',
      '9. Terms, Warranties & Flagged Legal Clauses',
      '10. Authorization, Signatures & Execution Block',
      '11. FATEQ Quality Control & Template Readiness Checklist'
    ],
    tags: ['SOW Template', 'Legal Governance', 'Commercial Milestones', 'Acceptance Criteria']
  },
  {
    id: 'consulting-proposal-template',
    title: 'Consulting Proposal Template',
    category: 'templates',
    categoryName: 'Consulting Documentation Templates',
    description: 'Standardized client proposal structure detailing executive background, engagement objectives, technical approach, consultant staffing models, commercial estimates, and value realization metrics.',
    type: 'Commercial Proposal Template',
    version: 'v0.9 In Internal Review',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      'Executive summary structure tailored for enterprise CIO and VP Engineering sponsors',
      'Technical architecture discovery methodology and consultant resource allocation matrix',
      'Commercial pricing models (Fixed-Fee milestone schedule vs T&M rate cards)',
      'Standard risk disclosures and independent consulting governance terms'
    ],
    tags: ['Proposal Template', 'Commercial Framework', 'Client Pitch', 'Staffing Model']
  },
  {
    id: 'assessment-report-template',
    title: 'Teamcenter PLM Assessment Report Template',
    category: 'templates',
    categoryName: 'Consulting Documentation Templates',
    description: 'Executive-ready diagnostic deliverable template comprising 8-domain assessment scorecards, root-cause findings registers, technical risk matrices, and 12-month visual Gantt chart layouts.',
    type: 'Deliverable Deck & Report Template',
    version: 'v0.9 In Drafting',
    releaseDate: 'Scheduled Q4 2026',
    filePath: null,
    fileName: null,
    status: 'in-preparation',
    author: 'Syed Abdul Hairu, Principal PLM Architect',
    organization: 'FATEQ Technologies',
    isIllustrativeSample: false,
    highlights: [
      'Standardized scoring rubrics across 8 Teamcenter architecture domains',
      'Pre-formatted risk registers with severity ratings and mitigation actions',
      'Executive presentation template with visual maturity benchmark charts',
      'Actionable 90-day quick-win and 12-month phased roadmap slide structures'
    ],
    tags: ['Assessment Template', 'Deliverable Deck', 'Maturity Scoring', 'Executive Report']
  }
];

export interface CapabilityEvidenceArea {
  id: string;
  title: string;
  description: string;
  requiredDocuments: string[];
  status: 'Complete' | 'In Progress';
  icon: string;
  details: string;
}

export const capabilityEvidenceAreas: CapabilityEvidenceArea[] = [
  {
    id: 'evidence-assessment',
    title: 'Assessment and Roadmap Development',
    description: 'Methodology-driven diagnostic auditing, 5-level maturity scoring across 8 domains, risk registers, and actionable 12-month modernization roadmaps.',
    requiredDocuments: ['plm-maturity-roadmap'],
    status: 'Complete',
    icon: 'Compass',
    details: 'Verified by our published Teamcenter PLM Maturity Assessment & 12-Month Digital Roadmap (v1.0 Final Baseline). Evaluates technical debt, BMIDE schemas, and ECO cycle times against industry benchmarks.'
  },
  {
    id: 'evidence-case-studies',
    title: 'Technical Project Case Studies',
    description: 'Production-tested integration blueprints, event-driven data flows, attribute transformation schemas, and asynchronous queue error recovery.',
    requiredDocuments: ['cad-erp-integration'],
    status: 'Complete',
    icon: 'Cpu',
    details: 'Verified by our published CAD-to-ERP Digital Thread Integration Case Study (Siemens NX to Teamcenter 2606 AIG to SAP ERP). Validates 99.8% transactional accuracy and zero duplicate parts.'
  },
  {
    id: 'evidence-service-catalogue',
    title: 'Clearly Defined Consulting Services',
    description: 'Formalized advisory packages with defined business problems, target profiles, in-scope vs out-of-scope boundaries, deliverables, and timelines.',
    requiredDocuments: [
      'service-catalogue-plm-maturity',
      'service-catalogue-upgrade-readiness',
      'service-catalogue-plm-governance'
    ],
    status: 'Complete',
    icon: 'BookOpen',
    details: 'Verified by our published Teamcenter PLM Professional Service Catalogue (Version 2026.1). Features comprehensive specifications across Maturity Audits, Upgrade Readiness, and Process Governance.'
  },
  {
    id: 'evidence-templates',
    title: 'Proposal, SOW, and Assessment-Report Templates',
    description: 'Standardized consulting contractual governance, legally structured Statements of Work (SOW), scope boundary definitions, and formal acceptance criteria.',
    requiredDocuments: ['sow-template', 'consulting-proposal-template', 'assessment-report-template'],
    status: 'In Progress',
    icon: 'FileCheck',
    details: 'Statement of Work (SOW) Template (v1.0 Approved Baseline) is verified and available. Commercial Proposal and Assessment Report templates are currently in final drafting and review.'
  }
];
