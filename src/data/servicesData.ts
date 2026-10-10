import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  // -------------------------------------------------------------------------
  // Service 1: Teamcenter Administration and Support
  // -------------------------------------------------------------------------
  {
    id: 'administration',
    title: 'Teamcenter Administration and Support',
    shortDesc: 'Production issue investigation, access governance, workflow troubleshooting, FSC cache maintenance, and ongoing operational support.',
    accentColor: '#1769AA',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    iconName: 'ShieldCheck',
    challenge: 'Enterprises experience sudden pool manager crashes, license checkout freezes, slow FSC file transfers between engineering branches, and uncoordinated access permissions that stall active product releases.',
    whatWeDo: [
      'Investigate critical production issues including pool manager lockups, FSC cache misses, and database index degradation.',
      'Administer organization structure: groups, roles, user hierarchies, volume assignments, and project-based Row-Level Security (RLS) ACLs.',
      'Troubleshoot stalled workflow handlers, un-release erroneous revisions, and audit TC_audit_manager security logs.',
      'Tune environment configurations across 4-tier pool managers, JBoss/Tomcat web tiers, and Dispatcher translation clusters.',
      'Provide structured ongoing support arrangements with clear escalation runbooks and operational handover documentation.'
    ],
    capabilities: [
      { title: 'Production Issue Investigation', description: 'Deep syslog root-cause analysis, POM query profiling, and automated crash recovery scripts.' },
      { title: 'Access & Organization Governance', description: 'Rule-based Access Control Lists (ACLs), role hierarchies, project security boundaries, and license utilization audits.' },
      { title: 'Workflow & Task Troubleshooting', description: 'Resolution of locked EPM handler processes, orphan targets, and automated escalation triggers.' },
      { title: 'FSC Volume & Cache Hygiene', description: 'Scheduled FSC cache purges, volume replication health checks, and ticket validation tuning.' },
      { title: 'Ongoing Support Arrangements', description: 'Dedicated technical hours for patch application, monthly system health audits, and administrator coaching.' }
    ],
    deliverables: [
      'Production Issue Investigation & Root-Cause Analysis (RCA) Reports',
      'Teamcenter Access Matrix & ACL Governance Runbook',
      'FSC Volume Cache Topology & Health Optimization Document',
      'Workflow Exception Handling & Recovery Procedures',
      'Monthly System Health Audit & Preventive Maintenance Logs'
    ],
    deliveryPhases: [
      { step: '01', title: 'Audit', description: 'Analyze server syslogs, pool manager logs, database slow queries, and active ACL hierarchies.' },
      { step: '02', title: 'Triage', description: 'Isolate immediate production blockers and configure emergency recovery parameters.' },
      { step: '03', title: 'Stabilize', description: 'Clean orphaned processes, optimize FSC ticket lifetimes, and rectify permission conflicts.' },
      { step: '04', title: 'Document', description: 'Author SOPs for daily maintenance, backup verification, and access administration.' },
      { step: '05', title: 'Support', description: 'Deliver proactive monitoring, monthly health checks, and rapid tier-3 technical escalation.' }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'tc_profilevars & FSC Cache Health Check Command',
      code: `# Verify FSC master status and volume ticket allocation
fsc_ping -s http://fms-master.internal:4544
list_users -u=infodba -p=****** -g=dba > active_users_audit.txt

# Audit and purge legacy audit log bloat
tc_purge_audit -u=infodba -p=****** -g=dba -delete -older_than=90 -volume=VOL_PROD

# Verify pool manager process responsiveness
bm_admin -u=infodba -p=****** -g=dba -status`,
      explanation: 'Standard system administration verification suite auditing pool manager allocation, FSC latency, and audit table maintenance.'
    }
  },

  // -------------------------------------------------------------------------
  // Service 2: BMIDE and Teamcenter Customization
  // -------------------------------------------------------------------------
  {
    id: 'bmide',
    title: 'BMIDE and Teamcenter Customization',
    shortDesc: 'Data model assessment, business objects, properties, LOVs, and customization governance—prioritizing out-of-the-box configuration over custom code.',
    accentColor: '#0B1930',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    iconName: 'Layers',
    challenge: 'Heavily customized environments suffer from brittle C++/ITK server scripts that fail during upgrades, undocumented BMIDE schema conflicts, and slow database queries caused by un-indexed custom properties.',
    whatWeDo: [
      'Assess existing data models to identify legacy ITK technical debt that can be safely refactored into standard BMIDE configurations.',
      'Configure custom Business Objects, item revision hierarchies, GRM relations, runtime properties, and compound properties.',
      'Implement List of Values (LOVs)—interdependent, range, and filter LOVs—alongside strict Naming Rules and Revision Rules.',
      'Enforce the OOTB-First Architecture Principle: reserve custom C++ ITK or Java SOA exclusively for capabilities unsupported by standard Teamcenter rules.',
      'Build automated BMIDE packaging scripts and Deployment Center update templates with zero-schema-conflict guarantees.'
    ],
    capabilities: [
      { title: 'OOTB vs Custom Code Assessment', description: 'Systematic evaluation of legacy ITK handlers to replace procedural code with declarative BMIDE rules and XRT stylesheets.' },
      { title: 'Business Object & Data Modeling', description: 'Hierarchical item types, form data models, dataset references, and CAD item specialization in BMIDE.' },
      { title: 'Rule & LOV Architecture', description: 'Interdependent LOVs, property validation rules, deep copy rules, and naming rules preventing manual entry errors.' },
      { title: 'Customization Risk Governance', description: 'Detailed upgrade-risk index rating every customization against Siemens target API deprecation lists.' },
      { title: 'Deployment Center Packaging', description: 'Zero-conflict template builds, delta updates, and multi-environment deployment automation.' }
    ],
    deliverables: [
      'BMIDE Data Model Specification Document (DMSD)',
      'Customization Complexity & Upgrade-Risk Register',
      'Configured BMIDE Project Template & Extension Files',
      'Refactored OOTB Replacement Matrix (retiring deprecated ITK code)',
      'Deployment Center Packaging & Verification Runbook'
    ],
    deliveryPhases: [
      { step: '01', title: 'Inventory', description: 'Catalog all existing BMIDE extensions, custom properties, C++ handlers, and RAC plugins.' },
      { step: '02', title: 'Evaluate', description: 'Score each customization against OOTB equivalents and flag upgrade risks.' },
      { step: '03', title: 'Model', description: 'Configure business objects, LOVs, compound properties, and validation rules in BMIDE.' },
      { step: '04', title: 'Package', description: 'Generate delta deployment templates and run pre-deployment dependency checks.' },
      { step: '05', title: 'Deploy', description: 'Install template updates via Deployment Center across DEV, QA, and Production.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'BMIDE Compound Property Definition (OOTB Configuration)',
      code: `<!-- BMIDE extension: Exposing Material Spec from Item to Revision without C++ code -->
<CompoundProperty name="f7_MaterialSpec" 
                  sourceTypeName="F7_EngItemRevision" 
                  targetTypeName="F7_MaterialItem" 
                  relationName="IMAN_reference">
  <SourceProperty name="f7_MaterialCode"/>
  <PropertyDescriptor displayName="Material Specification" 
                      isModifiable="false" 
                      isDisplayable="true"/>
</CompoundProperty>`,
      explanation: 'Declarative BMIDE compound property eliminating the need for custom ITK post-action property evaluation handlers.'
    }
  },

  // -------------------------------------------------------------------------
  // Service 3: Active Workspace
  // -------------------------------------------------------------------------
  {
    id: 'active-workspace',
    title: 'Active Workspace Configuration & UI',
    shortDesc: 'Declarative UI customization, XRT stylesheets, tile configuration, search & navigation, and rollout testing—distinguishing configuration from code.',
    accentColor: '#1769AA',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    iconName: 'LayoutGrid',
    challenge: 'Engineering teams struggle when migrating from legacy Rich Client (RAC) to Active Workspace due to cluttered page layouts, missing property stylesheets, slow search filters, and poor mobile/tablet adoption.',
    whatWeDo: [
      'Design role-tailored Active Workspace interfaces for Design Engineers, Approvers, Shop-Floor Technicians, and Sourcing Managers.',
      'Configure declarative XML Rendering Templates (XRT) for Summary, Overview, Edit, and Create views with clear column hierarchies.',
      'Configure search filters, dynamic category facets, and Solr / Elasticsearch indexing properties for instant part retrieval.',
      'Configure custom gateway tiles, command visibility rules, and tile groups mapped directly to business roles and group access.',
      'Clearly delineate configuration (XRT, preferences, tiles) from code-based UI extensions (web components, custom ViewModels) to preserve upgradeability.'
    ],
    capabilities: [
      { title: 'Declarative XRT Optimization', description: 'Clean Active Workspace stylesheets organizing CAD metadata, BOM tables, viewables, and revision histories.' },
      { title: 'Search & Facet Configuration', description: 'Solr/Elasticsearch schema indexing, saved searches, and dynamic filter categorization.' },
      { title: 'Tile & Command Architecture', description: 'Role-based tile hierarchies, command visibility conditions, and custom action routing.' },
      { title: 'Visualization & 3D JT Viewing', description: 'Embedded Active Workspace 3D viewer setup, markup tools, and cross-section inspection.' },
      { title: 'Rollout Readiness & UAT', description: 'Pilot rollout validation, browser compatibility benchmarking, and user adoption training.' }
    ],
    deliverables: [
      'Active Workspace User Experience (UX) Architecture Specification',
      'Role-Specific XRT Stylesheet Package (Summary, Create, Edit, View)',
      'Search Indexing & Filter Facet Configuration Matrix',
      'Gateway Tile & Command Visibility Rulebook',
      'Active Workspace Pilot Rollout & UAT Test Matrix'
    ],
    deliveryPhases: [
      { step: '01', title: 'Persona Mapping', description: 'Identify distinct engineering, shop-floor, and management user personas and tasks.' },
      { step: '02', title: 'Layout Design', description: 'Author responsive XRT stylesheets placing vital technical data in immediate view.' },
      { step: '03', title: 'Search Tuning', description: 'Configure index fields, range facets, and classification search filters.' },
      { step: '04', title: 'Testing', description: 'Validate performance across Edge, Chrome, and tablet browsers with concurrent authors.' },
      { step: '05', title: 'Deployment', description: 'Deploy stylesheets and tile definitions via Deployment Center to production.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'Active Workspace XRT Stylesheet — Declarative Overview Layout',
      code: `<!-- Active Workspace XRT Summary Stylesheet for Engineering Item Revision -->
<rendering xmlns="http://www.siemens.com/teamcenter/xrt/rendering">
  <header>
    <image source="thumbnail"/>
    <classification/>
  </header>
  <page titleKey="tc_xrt_Overview">
    <column width="50%">
      <section titleKey="tc_xrt_Properties">
        <property name="item_id" renderingHint="label"/>
        <property name="item_revision_id" renderingHint="label"/>
        <property name="release_status_list"/>
        <property name="f7_WeightCalculated"/>
      </section>
    </column>
    <column width="50%">
      <section titleKey="tc_xrt_PrimaryAttachments">
        <objectSet source="IMAN_specification.Dataset" defaultdisplay="thumbnailDisplay"/>
      </section>
    </column>
  </page>
</rendering>`,
      explanation: 'Modern declarative Active Workspace XML stylesheet organizing properties, CAD attachments, and thumbnail renderings without custom JavaScript.'
    }
  },

  // -------------------------------------------------------------------------
  // Service 4: PLM, CAD, and ERP Integration
  // -------------------------------------------------------------------------
  {
    id: 'integration',
    title: 'PLM, CAD, and ERP Integration',
    shortDesc: 'Seamless CAD-to-PLM data flow, bi-directional Teamcenter-to-ERP integration, automated EBOM synchronization, and interface error recovery.',
    accentColor: '#155EEF',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconName: 'Workflow',
    challenge: 'Disconnects between CAD models, Teamcenter EBOMs, and ERP Material Masters cause manual data entry errors, mismatched revisions on the shop floor, and expensive scrap.',
    whatWeDo: [
      'Configure robust CAD-to-Teamcenter data exchange for Siemens NX, SolidWorks, Creo, and CATIA with automated attribute mapping.',
      'Integrate Teamcenter with ERP (SAP, Oracle, Microsoft Dynamics) via Siemens Active Integration Gateway (AIG / T4S) or REST/SOA APIs.',
      'Establish automated 120% Master EBOM to Plant MBOM derivations with release gate verification prior to ERP transfer.',
      'Enforce pre-transfer validation rules checking mass properties, unit of measure (UOM), and ECLASS CST classifications.',
      'Implement asynchronous transaction queueing, automated retry routines, and proactive error notifications for PLM data stewards.'
    ],
    capabilities: [
      { title: 'CAD Attribute Synchronization', description: 'Bi-directional property mapping between CAD 3D models, drawing title blocks, and Teamcenter attributes.' },
      { title: 'Active Integration Gateway (AIG / T4S)', description: 'T4S mapping procedures (T4S_MAPPING_MATERIAL_MASTER, T4S_MAPPING_BOM_HEADER) for SAP ERP.' },
      { title: 'BOM Reconciliation & Integrity', description: 'Automated delta comparison flagging discrepancies between engineering CAD structures and manufacturing BOMs.' },
      { title: 'Interface Error Handling', description: 'Deadlock avoidance, dependency-ordered transfer queues, and visual error monitoring dashboards.' },
      { title: 'Digital Thread Continuity', description: 'Closed-loop engineering change orders (ECR/ECO) updating plant work orders in ERP and MOM.' }
    ],
    deliverables: [
      'CAD-to-PLM Attribute Mapping Specification (cad_to_tc_attribute_map.xsd)',
      'Teamcenter-to-ERP Interface Architecture Document (IAD)',
      'Active Integration Gateway (AIG / T4S) Mapping Script Package',
      'Pre-Transfer BOM Validation Rule Handler Configuration',
      'Integration Error Triage & Recovery Operating Manual'
    ],
    deliveryPhases: [
      { step: '01', title: 'Data Mapping', description: 'Define field-level attribute translation matrices between CAD, Teamcenter, and ERP.' },
      { step: '02', title: 'Validation Rules', description: 'Build workflow pre-flight handlers verifying status gates, mass properties, and classifications.' },
      { step: '03', title: 'Pipeline Setup', description: 'Configure middleware endpoints, RFC calls, and asynchronous retry queues.' },
      { step: '04', title: 'Integration Test', description: 'Execute end-to-end transfers of 500+ complex multi-level assemblies in staging.' },
      { step: '05', title: 'Go-Live', description: 'Activate event-triggered ERP transfers and train data stewards on queue monitoring.' }
    ],
    codeSnippet: {
      language: 'tcl',
      title: 'T4S Active Integration Gateway — Material Master Mapping Snippet',
      code: `# T4S TCL Mapping: Transfer Teamcenter Item Revision to SAP Material Master
proc ::T4S::CUSTOM::MAPPING::MaterialMaster_Custom {} {
  set ItemId       [::T4S::TC::MAPPING::getItemAttr "item_id"]
  set ItemRev      [::T4S::TC::MAPPING::getItemRevAttr "item_revision_id"]
  set MaterialType "ROH" ;# Default Raw Material
  
  # Map Teamcenter attributes to SAP MARA/MAKT fields
  set ::SAPDat(MATERIAL_GENERAL_DATA:MATNR) $ItemId
  set ::SAPDat(MATERIAL_GENERAL_DATA:MATL_TYPE) $MaterialType
  set ::SAPDat(MATERIAL_GENERAL_DATA:IND_SECTOR) "M"
  set ::SAPDat(MATERIAL_DESCRIPTION:MATL_DESC) [::T4S::TC::MAPPING::getItemRevAttr "object_name"]
  return "OK"
}`,
      explanation: 'Active Integration Gateway (T4S) mapping script transforming Teamcenter engineering revision metadata into structured SAP RFC structures.'
    }
  },

  // -------------------------------------------------------------------------
  // Service 5: Teamcenter Upgrade and Migration
  // -------------------------------------------------------------------------
  {
    id: 'upgrade',
    title: 'Teamcenter Upgrade and Migration',
    shortDesc: 'Upgrade readiness assessments, version compatibility review, custom code deprecation analysis, cutover runbooks, and stabilization.',
    accentColor: '#0B1930',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    iconName: 'RefreshCw',
    challenge: 'Upgrading major Teamcenter releases (e.g., from 11.x/12.x to modern Active Workspace 2606) carries immense risk of corrupted schemas, broken ITK scripts, lost volume files, and extended business downtime.',
    whatWeDo: [
      'Execute a technical Upgrade Readiness Assessment auditing database health, schema versions, and third-party CAD integrations.',
      'Inventory all custom C++/ITK server scripts, RAC plugins, and XML stylesheets against target release deprecation APIs.',
      'Formulate a 4-Environment Upgrade Gate Strategy (Dev -> QA -> UAT -> Production) with zero compilation errors at Gate 1.',
      'Validate CAD check-in/out, automated Dispatcher 3D JT translations, and ECR/ECO change workflows in a parallel test environment.',
      'Author and execute a weekend cutover runbook using Deployment Center 7-step lifecycle with a guaranteed dry-run rollback window under 2 hours.'
    ],
    capabilities: [
      { title: 'Upgrade Blocker Audit', description: 'UTF-8 database encoding check, BMIDE schema template audit, and unsupported software matrix review.' },
      { title: 'Custom Code Modernization', description: 'Refactoring deprecated ITK API calls and porting legacy RAC stylesheets to Active Workspace HTML5 XRT.' },
      { title: 'Deployment Center Automation', description: 'Automated 7-step deployment lifecycle execution scripts with HashiCorp Vault credential encryption.' },
      { title: 'Parallel Dry-Run Upgrades', description: 'Full mock upgrade rehearsals on sanitized database clones to verify execution timing and data integrity.' },
      { title: 'Post-Upgrade Stabilization', description: 'Hypercare support, index rebuild monitoring, and rapid resolution of post-cutover user issues.' }
    ],
    deliverables: [
      'Teamcenter Upgrade Readiness & Risk Evaluation Report',
      'Customization Modernization & API Compatibility Matrix',
      '4-Environment Deployment & Validation Strategy Plan',
      'Step-by-Step Weekend Production Cutover & Rollback Runbook',
      'Post-Upgrade Hypercare Support Plan & Knowledge Transfer'
    ],
    deliveryPhases: [
      { step: '01', title: 'Audit & Plan', description: 'Examine current schema, database encoding, integrations, and customize code inventory.' },
      { step: '02', title: 'Dev Consolidation', description: 'Execute BMIDE build and refactor custom C++ code against target release libraries.' },
      { step: '03', title: 'QA Dry-Run', description: 'Run full database upgrade dry-run, verifying volume links and Dispatcher translations.' },
      { step: '04', title: 'UAT Sign-off', description: 'Facilitate end-to-end user acceptance testing across CAD, BOM, and change workflows.' },
      { step: '05', title: 'Production Cutover', description: 'Execute weekend cutover runbook and deliver on-site/remote post-launch stabilization.' }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'Deployment Center 7-Step Lifecycle Upgrade Command',
      code: `# Execute Deployment Center unattended environment upgrade
deployment_center_cli.sh -action=apply_updates \\
  -environment=PROD_TC2606 \\
  -repository=/opt/tc_repo/releases/2606 \\
  -vault_credentials=vault://fateq/tc_admin \\
  -verify_backup=true \\
  -pre_upgrade_check=true \\
  -timeout=7200

# Verify POM schema upgrade integrity
install -u=infodba -p=****** -g=dba -check_schema_version`,
      explanation: 'Automated Deployment Center command string performing pre-upgrade validation, credential decryption, and atomic schema migration.'
    }
  },

  // -------------------------------------------------------------------------
  // Service 6: Teamcenter Maturity Assessment and Roadmap
  // -------------------------------------------------------------------------
  {
    id: 'maturity-assessment',
    title: 'Teamcenter Maturity Assessment and Roadmap',
    shortDesc: 'Current-state technical audits, 8-domain maturity scoring, technical risk registers, and phased 12-month modernization roadmaps.',
    accentColor: '#1769AA',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    iconName: 'Compass',
    challenge: 'Leadership lacks visibility into whether their multi-million dollar PLM investment is driving engineering velocity or accumulating dangerous technical debt that paralyzes operations.',
    whatWeDo: [
      'Conduct a thorough technical architecture and process audit across 8 core domains (Governance, PDM, BMIDE, ECO, Multi-BOM, Workflows, ERP Sync, Analytics).',
      'Score organizational maturity on the FATEQ 5-Level Maturity Framework (from Level 1 Ad-Hoc to Level 5 Optimized Digital Thread).',
      'Formulate a prioritized Technical Risk Register mapping vulnerabilities, business impacts, severity ratings, and mitigation actions.',
      'Develop a phased 12-Month Digital Roadmap featuring an immediate 90-day quick-win program to deliver rapid ROI.',
      'Deliver an executive-level presentation and comprehensive report ready for CIO, VP of Engineering, and steering committee review.'
    ],
    capabilities: [
      { title: '8-Domain Architecture Audit', description: 'Comprehensive baseline evaluation covering infrastructure, BMIDE models, workflows, and integrations.' },
      { title: '5-Level Maturity Scoring', description: 'Objective quantitative benchmarking comparing current baseline vs industry target baselines.' },
      { title: 'Technical Debt & Risk Register', description: 'Itemized inventory of upgrade blockers, unmanaged scripts, security deficits, and scrap drivers.' },
      { title: '90-Day Quick-Win Program', description: 'Targeted short-term improvements (XRT refactoring, mass property audit, OData dashboarding).' },
      { title: '12-Month Modernization Roadmap', description: 'Phased digital thread plan aligning technology upgrades with corporate capital expenditure budgets.' }
    ],
    deliverables: [
      'Comprehensive Teamcenter PLM Maturity Assessment Report (PDF)',
      '8-Domain Quantitative Maturity Scorecard & Spider Chart',
      'Prioritized Technical & Business Risk Register',
      '90-Day Quick-Win Implementation Schedule',
      '12-Month Executive Digital Transformation Roadmap'
    ],
    deliveryPhases: [
      { step: '01', title: 'Discovery', description: 'Conduct discovery interviews with engineering managers, IT leads, and CAD administrators.' },
      { step: '02', title: 'Technical Audit', description: 'Inspect BMIDE XML templates, syslog files, database indexes, and active workflow trees.' },
      { step: '03', title: 'Gap Scoring', description: 'Score each capability against the 5-level maturity rubric and quantify technical debt.' },
      { step: '04', title: 'Roadmap Design', description: 'Structure phased modernization milestones, technology dependencies, and ROI metrics.' },
      { step: '05', title: 'Executive Briefing', description: 'Deliver findings, risk register, and prioritized roadmap to executive leadership.' }
    ],
    codeSnippet: {
      language: 'json',
      title: 'Maturity Scoring Framework — 8 Architecture Domains',
      code: `{
  "assessmentBaseline": "FATEQ PLM Maturity Index v2026.1",
  "evaluatedDomains": {
    "1_governance_admin": { "weight": 0.15, "baselineScore": 2.2, "targetScore": 4.0 },
    "2_pdm_cad_integration": { "weight": 0.15, "baselineScore": 3.1, "targetScore": 4.2 },
    "3_bmide_data_model": { "weight": 0.15, "baselineScore": 2.0, "targetScore": 4.0 },
    "4_engineering_change": { "weight": 0.15, "baselineScore": 2.4, "targetScore": 4.0 },
    "5_multi_bom_alignment": { "weight": 0.15, "baselineScore": 1.8, "targetScore": 4.0 },
    "6_workflow_automation": { "weight": 0.10, "baselineScore": 2.8, "targetScore": 4.0 },
    "7_erp_mes_integration": { "weight": 0.10, "baselineScore": 1.5, "targetScore": 3.8 },
    "8_adoption_analytics": { "weight": 0.05, "baselineScore": 2.1, "targetScore": 4.0 }
  },
  "overallMaturityRating": 2.2,
  "target12MonthRating": 4.0
}`,
      explanation: 'Weighted domain scoring model utilized in FATEQ Technologies maturity evaluations to calculate enterprise readiness.'
    }
  }
];
