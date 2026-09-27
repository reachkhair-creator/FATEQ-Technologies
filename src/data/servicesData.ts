import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'implementation',
    title: 'Teamcenter Implementation',
    shortDesc: 'Architecture design, server tier sizing, four-tier setup, client deployment, and production cutover.',
    accentColor: '#155EEF', // Deep Blue
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    iconName: 'Server',
    challenge: 'Engineering teams often struggle with poorly planned Teamcenter rollouts that result in slow server performance, broken network topologies, misaligned data models, and low user adoption.',
    whatWeDo: [
      'Architect resilient 2-tier and 4-tier Teamcenter deployment topologies tailored to local and distributed multi-site engineering teams.',
      'Configure Teamcenter Enterprise Server, FMS (File Management System) caches, and Web Application Servers (Tomcat, JBoss, or WebLogic).',
      'Deploy Active Workspace Client (AWC) gateway, microservices, and indexing pools for high-availability search.',
      'Execute pilot validation, user acceptance testing (UAT), and zero-unplanned-downtime production cutover strategies.'
    ],
    capabilities: [
      { title: 'Multi-Tier Sizing & Topology', description: 'Calculated memory, CPU, and network bandwidth allocation across Enterprise Server, Web Tier, and Database.' },
      { title: 'FMS Cache Optimization', description: 'Distributed volume servers and FSC caches configured for rapid CAD assembly downloads in multi-site hubs.' },
      { title: 'Active Workspace Gateway', description: 'Declarative framework server hosting, microservice routing, and Solr / Elasticsearch cluster indexing.' },
      { title: 'Environment Staging', description: 'Isolated DEV, TEST, STAGE, and PROD synchronization protocols with automated deployment scripts.' }
    ],
    deliverables: [
      'Teamcenter Technical Architecture Document (TAD)',
      'Hardware & Server Sizing Specification Matrix',
      'Configured Web Tier, FSC, and Enterprise Server Instances',
      'Automated Environment Synchronization Runbooks',
      'Pilot Environment Sign-off & Production Cutover Plan'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Review site network latency, CAD dataset sizes, concurrent user profiles, and storage tier requirements.' },
      { step: '02', title: 'Design', description: 'Formulate four-tier architecture topology, security boundaries, and volume server replication rules.' },
      { step: '03', title: 'Configure', description: 'Install database schemas, Enterprise Server pool managers, FMS FSC tiers, and AWC microservices.' },
      { step: '04', title: 'Validate', description: 'Execute stress testing, CAD check-in/out benchmarks, and user acceptance scripts in staging.' },
      { step: '05', title: 'Deploy', description: 'Perform production cutover, verify volume integrity, and monitor live pool manager health.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'fmsmaster.xml — Distributed FSC Configuration',
      code: `<?xml version="1.0" encoding="utf-8"?>
<fmsconfig version="1.0">
  <!-- FMS Server Cache for GCC Engineering Hub -->
  <fsc id="FSC_DXB_PROD_01" 
       address="http://fms-cache.fateq-local.internal:4544" 
       islocal="true" 
       priority="10">
    <volume id="VOL_CAD_01" 
            rootdir="/tc_volumes/vol_cad_01" 
            assigned="true"/>
    <transientvolume id="TRANS_DXB_01" 
                     rootdir="/tc_transient/dxb" 
                     assigned="true"/>
  </fsc>
</fmsconfig>`,
      explanation: 'Optimized FMS cache configuration ensuring localized transient routing and fast CAD binary streaming without roundtrip latency.'
    }
  },
  {
    id: 'bmide',
    title: 'BMIDE & Data Modeling',
    shortDesc: 'Business object modeling, custom item types, property derivations, LOVs, naming rules, and GRM rules.',
    accentColor: '#7C3AED', // Violet
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    iconName: 'Database',
    challenge: 'Unstructured Teamcenter data models lead to dirty metadata, orphaned datasets, broken revision histories, and difficult future upgrades caused by improper schema modifications.',
    whatWeDo: [
      'Design clean, maintainable BMIDE templates adhering to Siemens best-practice object hierarchy without corrupting out-of-the-box base classes.',
      'Configure custom Item and ItemRevision subtypes with tailored property descriptors, runtime properties, and compound properties.',
      'Implement dynamic Lists of Values (LOVs), condition-based naming rules, revision naming schemes, and Deep Copy Rules (DCR).',
      'Establish Generic Relationship Management (GRM) rules preventing engineers from attaching invalid dataset types or conflicting CAD models.'
    ],
    capabilities: [
      { title: 'Object & Schema Hierarchy', description: 'Subtyping Item, ItemRevision, Dataset, and Folder with strict property encapsulation.' },
      { title: 'Dynamic & Cascading LOVs', description: 'Context-dependent dropdowns tied to product lines, materials, and manufacturing categories.' },
      { title: 'Deep Copy Rules (DCR)', description: 'Deterministic rules governing dataset cloning, reference preservation, or detachment on revision.' },
      { title: 'Package Packaging & Hotfixes', description: 'Deterministic packaging of BMIDE project templates for delta deployments without schema downtime.' }
    ],
    deliverables: [
      'BMIDE Schema Architecture & Data Model Specification',
      'Tested BMIDE Project Template & Extension Files',
      'Deep Copy Rules & GRM Matrix Document',
      'Delta Packaging & Deployment Package (.zip) for Production',
      'Data Dictionary for Engineering & Quality Teams'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Analyze existing CAD item revisions, document structures, part classification, and attribute dictionaries.' },
      { step: '02', title: 'Design', description: 'Draft object inheritance hierarchy, property naming schemes, and revision control rules.' },
      { step: '03', title: 'Configure', description: 'Build BMIDE extensions, define LOVs, property constants, and compile the template in DEV.' },
      { step: '04', title: 'Validate', description: 'Run BMIDE schema validation, verify test migrations, and confirm backward compatibility.' },
      { step: '05', title: 'Deploy', description: 'Package live template updates, deploy to staging/production using TEM (Teamcenter Environment Manager).' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'custom_data_model.xml — BMIDE Property Rule Definition',
      code: `<!-- BMIDE Subtype with Compound Property and Naming Rule -->
<BusinessObjectType name="FTQ_HVACComponentRevision" 
                    parentTypeName="ItemRevision">
  <PropertyDescriptor name="ftq_cooling_capacity_kw" 
                      uiName="Cooling Capacity (kW)" 
                      valueType="PROP_double">
    <PropertyRule condition="isReleased == false" 
                  isEnabled="true" 
                  isRequired="true"/>
  </PropertyDescriptor>
  <CompoundProperty name="ftq_parent_equipment_id" 
                    sourceAttribute="items_tag.item_id" 
                    uiName="Assembly Reference"/>
</BusinessObjectType>`,
      explanation: 'Clean BMIDE XML definition establishing typed attributes, conditional mandatory validation, and compound property linkage.'
    }
  },
  {
    id: 'active-workspace',
    title: 'Active Workspace (AWC)',
    shortDesc: 'Declarative UI customization, custom stylesheets, command bars, table views, tiles, and user experience tuning.',
    accentColor: '#06B6D4', // Cyan
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    iconName: 'Layout',
    challenge: 'Active Workspace can feel cluttered, non-intuitive, or sluggish when loaded with default settings, causing engineers to avoid the web client and revert to legacy desktop tools.',
    whatWeDo: [
      'Build clean, role-tailored Active Workspace interfaces with zero clutter, focused command bars, and optimized visual layouts.',
      'Develop custom declarative UI views, ViewModel JSON architectures, reusable web components, and customized summary stylesheets (XML).',
      'Configure role-based workspace tiles, quick-search filters, saved queries, and contextual action buttons.',
      'Optimize AWC gateway response times, indexing queues, and client-side rendering performance.'
    ],
    capabilities: [
      { title: 'Declarative ViewModels', description: 'Creating modular AWC components using JSON declarative patterns for commands and data tables.' },
      { title: 'XML Rendering Stylesheets', description: 'Redesigning Item, Revision, and Change Notice overview pages with intuitive tabbed panels.' },
      { title: 'Custom Commands & Tools', description: 'Adding custom toolbar actions, contextual menus, and multi-selection batch operations.' },
      { title: 'Search & Solr Tuning', description: 'Structuring faceted search filters and keyword indexes for instant retrieval across millions of parts.' }
    ],
    deliverables: [
      'Role-Specific Active Workspace Layout Configuration',
      'Custom XML Summary & Overview Stylesheets',
      'Declarative JSON Extension Modules & Custom Commands',
      'Faceted Search Filter Tuning & Saved Queries',
      'AWC Performance Tuning Report & Best Practices Guide'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Audit current AWC usage, identify pain points in navigation, page load latencies, and command clutter.' },
      { step: '02', title: 'Design', description: 'Mock up simplified XML layouts, table columns, and streamlined command placements for each role.' },
      { step: '03', title: 'Configure', description: 'Implement declarative ViewModels, custom commands, and import updated XML stylesheets into Teamcenter.' },
      { step: '04', title: 'Validate', description: 'Verify rendering across desktop browsers, test permission-based visibility, and measure load speeds.' },
      { step: '05', title: 'Deploy', description: 'Publish tiles to user workspaces, update client cache policies, and roll out to engineering teams.' }
    ],
    codeSnippet: {
      language: 'json',
      title: 'customSummaryViewModel.json — AWC Declarative Action',
      code: `{
  "schemaVersion": "1.0.0",
  "actions": {
    "launchBOMCompare": {
      "actionType": "JSFunction",
      "method": "executeBOMComparison",
      "inputData": {
        "primaryRevision": "{{ctx.selected}}",
        "baselineRevision": "{{data.baselineRevision}}"
      },
      "deps": "js/ftqBOMCompareService"
    }
  },
  "data": {
    "sectionTitle": "Engineering BOM Reconciliation"
  }
}`,
      explanation: 'Declarative AWC ViewModel hook integrating a custom engineering comparison routine seamlessly into the Active Workspace action bar.'
    }
  },
  {
    id: 'itk-soa',
    title: 'ITK & SOA Customization',
    shortDesc: 'Server-side C/C++ ITK extensions, custom handlers, REST/SOAP SOA services, and automated batch utilities.',
    accentColor: '#0F9D8A', // Teal
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'Code',
    challenge: 'Out-of-the-box Teamcenter functionality rarely accommodates complex proprietary engineering calculations, automated validation logic, or strict company approval gates.',
    whatWeDo: [
      'Develop robust ITK (Integration Toolkit) rule handlers, action handlers, and post-actions using safe memory-managed modern C/C++.',
      'Construct high-performance Teamcenter SOA services for external web apps, mobile viewers, and third-party enterprise integrations.',
      'Build standalone batch command-line utilities for bulk metadata cleanup, automated PDF generation, and scheduled health audits.',
      'Refactor fragile legacy ITK code to maintain compatibility with new Teamcenter releases.'
    ],
    capabilities: [
      { title: 'Workflow Rule & Action Handlers', description: 'Custom server logic validating mandatory dataset presence, attribute syntax, and signatory roles.' },
      { title: 'SOA REST & Java Client Services', description: 'Service-Oriented Architecture endpoints exposing Teamcenter query, check-in, and release APIs.' },
      { title: 'Batch Command-Line Utilities', description: 'Headless executables utilizing ITK for high-throughput batch updates and volume validations.' },
      { title: 'Safe API Migration & Refactoring', description: 'Replacing deprecated ITK functions with thread-safe modern APIs ready for Teamcenter upgrades.' }
    ],
    deliverables: [
      'Compiled, Tested ITK Dynamic Shared Libraries (.dll / .so)',
      'Documented C++ Source Code & Build Toolchains (CMake / VS)',
      'Custom SOA Service Library & WSDL/OpenAPI Specs',
      'Automated Batch Utilities with CLI Documentation',
      'Memory Leak & Performance Profiling Verification Logs'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Review functional requirements, edge conditions, concurrency requirements, and target TC API versions.' },
      { step: '02', title: 'Design', description: 'Define ITK handler arguments, error code mappings, transactional rollbacks, and memory boundaries.' },
      { step: '03', title: 'Configure', description: 'Implement C++ ITK logic, write unit tests against Teamcenter test server, and verify error traps.' },
      { step: '04', title: 'Validate', description: 'Run high-concurrency simulation, check for memory leaks using Valgrind/CRT, and verify rollbacks.' },
      { step: '05', title: 'Deploy', description: 'Register handler libraries in BMIDE, configure Teamcenter preferences, and deploy shared binaries.' }
    ],
    codeSnippet: {
      language: 'cpp',
      title: 'FTQ_validate_cad_dataset.cpp — ITK Rule Handler',
      code: `#include <tc/tc_startup.h>
#include <epm/epm.h>
#include <tccore/item.h>

// Validates that all modified CAD revisions contain a released 3D STEP dataset
extern "C" DLLAPI int FTQ_validate_cad_dataset(EPM_rule_message_t msg) {
  int ifail = ITK_ok;
  tag_t root_task = NULLTAG;
  int target_count = 0;
  tag_t *target_objects = NULL;

  ifail = EPM_ask_root_task(msg.task, &root_task);
  ifail = EPM_ask_attachments(root_task, EPM_target_attachment, 
                              &target_count, &target_objects);
  
  for (int i = 0; i < target_count; i++) {
    // Traverse target items, verify UGMASTER or STEP dataset existence
    logical has_step = false;
    // ... verified via ITEM_ask_revision_named_references ...
    if (!has_step) {
      EMH_store_error_s1(EMH_severity_error, 91001, "Missing Mandatory 3D STEP Export");
      MEM_free(target_objects);
      return EPM_nogo;
    }
  }
  MEM_free(target_objects);
  return EPM_go;
}`,
      explanation: 'Production ITK workflow rule handler guaranteeing engineering deliverables exist prior to stage advancement.'
    }
  },
  {
    id: 'workflows',
    title: 'Workflow Automation',
    shortDesc: 'Engineering change management (ECN/ECR/ECO), automated release gates, multi-stage approvals, and audit trails.',
    accentColor: '#0F9D8A', // Teal
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    iconName: 'GitBranch',
    challenge: 'Engineering approvals often grind to a halt because of convoluted, poorly designed workflow trees that lack error handling, dynamic assignment, or clear audit visibility.',
    whatWeDo: [
      'Design streamlined Engineering Change Workflows (ECR, ECO, ECN) aligned with actual manufacturing shop-floor cadence.',
      'Configure automated validation gates preventing premature status releases before CAD checks or simulation sign-offs pass.',
      'Implement dynamic participant assignment based on product line, cost threshold, or plant location.',
      'Automate background tasks: PDF/STEP translation triggers, ERP staging notifications, and watermarking.'
    ],
    capabilities: [
      { title: 'Change Management (CMII Compliant)', description: 'Problem Reports (PR), Change Requests (CR), and Change Notices (CN) with tracked impacts.' },
      { title: 'Automated Status Progression', description: 'Precise release status assignment (In Work, Review, Released, Obsolete) across datasets.' },
      { title: 'Dispatcher Translation Triggers', description: 'Auto-spawning neutral formats (PDF, STEP, DXF) upon successful drawing sign-off.' },
      { title: 'Audit Trail & Compliance Logging', description: 'Deterministic sign-off logging with timestamped digital approval records.' }
    ],
    deliverables: [
      'Visual Workflow Process Maps & Sign-Off Matrices',
      'Configured Teamcenter Process Templates in Workflow Designer',
      'Automated Dispatcher Translation Request Profiles',
      'Task In-Box Custom Views & Notification Rules',
      'Change Management Standard Operating Procedure (SOP)'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Map out the existing manual sign-off path, identify common approval bottlenecks, and define role rules.' },
      { step: '02', title: 'Design', description: 'Diagram lean workflow branches, error fallback paths, and automated system task sequences.' },
      { step: '03', title: 'Configure', description: 'Create workflow templates in Process Designer, link action/rule handlers, and define access control.' },
      { step: '04', title: 'Validate', description: 'Simulate concurrent user sign-offs, test rejection loops, and verify status application.' },
      { step: '05', title: 'Deploy', description: 'Publish verified workflow templates to production and train key approvers.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'Workflow_Release_Definition.xml — Process Handler Rules',
      code: `<!-- Teamcenter Workflow Template Action Trigger -->
<EPMTaskTemplate name="Engineering Sign-Off Gate" taskType="EPM_ReviewTask">
  <RuleHandler name="EPM-check-dataset-status" execution="Pre">
    <Argument name="-type" value="UGPART"/>
    <Argument name="-relation" value="IMAN_specification"/>
  </RuleHandler>
  <ActionHandler name="TIE-export-to-dispatcher" execution="Post">
    <Argument name="-service" value="generate_step_and_pdf"/>
    <Argument name="-priority" value="HIGH"/>
  </ActionHandler>
</EPMTaskTemplate>`,
      explanation: 'Workflow task definition enforcing prerequisite CAD checks and dispatching asynchronous background translations upon sign-off.'
    }
  },
  {
    id: 'integration',
    title: 'CAD / ERP Integration',
    shortDesc: 'Data exchange between Teamcenter, multi-CAD tools (NX, Solid Edge, CATIA, Creo), and ERP systems (SAP, Oracle, Dynamics).',
    accentColor: '#F97316', // Orange
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    iconName: 'Layers',
    challenge: 'Engineering and Operations frequently operate in silos, causing costly procurement mistakes due to manual BOM re-keying from Teamcenter into ERP systems.',
    whatWeDo: [
      'Bridge engineering PLM with enterprise ERP platforms (SAP, Oracle, Microsoft Dynamics 365, Infor, Epicor).',
      'Automate bidirectional item master synchronization, revision tracking, and engineering change notices.',
      'Implement multi-CAD integration connectors ensuring consistent attribute mapping across NX, Solid Edge, CATIA, and Creo.',
      'Synchronize Engineering Bill of Materials (EBOM) to Manufacturing Bill of Materials (MBOM) with discrepancy reconciliation.'
    ],
    capabilities: [
      { title: 'ERP Item & BOM Gateway', description: 'Automated REST/OData/IDoc pipelines transferring released parts and multi-level BOMs to ERP.' },
      { title: 'EBOM to MBOM Alignment', description: 'Managing manufacturing consumables, phantom assemblies, and plant-specific routings.' },
      { title: 'Multi-CAD Attribute Mapping', description: 'Bi-directional title block sync, mass property extraction, and JT generation.' },
      { title: 'Error Staging & Dead-Letter Queue', description: 'Resilient middleware queues ensuring no ERP transaction is silently dropped on network failure.' }
    ],
    deliverables: [
      'Teamcenter-to-ERP Interface Control Document (ICD)',
      'Data Mapping Specification (Item, Attribute, BOM, Revision)',
      'Configured Middleware Connectors or T4S / T4EA Integration Pipelines',
      'Discrepancy Logging & Reconciliation Dashboard',
      'Integration Testing Test Cases & Runbook'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Audit part numbering schemes, ERP unit-of-measure conventions, and BOM synchronization triggers.' },
      { step: '02', title: 'Design', description: 'Draft interface control document (ICD) with field-by-field schema mapping and error handling.' },
      { step: '03', title: 'Configure', description: 'Set up integration middleware, payload transformers, and secure API transport channels.' },
      { step: '04', title: 'Validate', description: 'Conduct end-to-end integration tests: item creation, revision push, and complex multi-level BOM sync.' },
      { step: '05', title: 'Deploy', description: 'Enable production integration listeners, set up alert triggers, and verify live queue reconciliation.' }
    ],
    codeSnippet: {
      language: 'json',
      title: 'erp_bom_payload.json — Teamcenter to ERP Sync Schema',
      code: `{
  "transactionId": "FTQ-ERP-SYNC-2026-90412",
  "eventType": "ITEM_RELEASE_ECO",
  "timestamp": "2026-09-26T14:30:00Z",
  "header": {
    "itemNumber": "FTQ-AHU-4500-REV-C",
    "ecoNumber": "ECO-2026-0045",
    "materialType": "FERT",
    "baseUOM": "EA",
    "grossWeightKg": 1420.50
  },
  "bomItems": [
    {
      "pos": "0010",
      "componentNumber": "FTQ-COIL-DX-02",
      "quantity": 2,
      "uom": "EA",
      "findNumber": "10"
    }
  ]
}`,
      explanation: 'Normalized JSON schema dispatched to enterprise ERP upon final Teamcenter engineering release.'
    }
  },
  {
    id: 'migration',
    title: 'Data Migration',
    shortDesc: 'Legacy PLM/PDM assessment, attribute mapping, deduplication, CAD dataset transformation, and controlled data loading.',
    accentColor: '#F97316', // Orange
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    iconName: 'RefreshCw',
    challenge: 'Data migrations fail or stall when engineering records contain duplicate part numbers, orphaned CAD assemblies, missing drawing sheets, or corrupted legacy file revisions.',
    whatWeDo: [
      'Extract, sanitize, and validate legacy engineering data from SmarTeam, Windchill, SolidWorks PDM, network file drives, or legacy databases.',
      'Develop automated cleansing scripts detecting broken assembly links, circular references, and missing referenced files before migration.',
      'Map legacy metadata to target Teamcenter BMIDE schemas with full revision history preservation.',
      'Execute high-speed automated loading using ips_data_upload, plmxml_import, or Teamcenter Bulk Loader.'
    ],
    capabilities: [
      { title: 'Legacy Data Audit & Cleansing', description: 'Automated scanning for duplicate filenames, orphaned drawings, and broken CAD relationships.' },
      { title: 'Schema & Attribute Mapping', description: 'Transformation rules converting old classification hierarchies into standard Teamcenter classes.' },
      { title: 'High-Volume Bulk Loading', description: 'Multi-threaded batch insertion using PLMXML, TcRA, and native binary volume import.' },
      { title: '100% Verification & Checksums', description: 'Cryptographic SHA-256 validation comparing source CAD models with Teamcenter volume blobs.' }
    ],
    deliverables: [
      'Legacy Data Cleansing & Reconciliation Audit Report',
      'Target-to-Source Attribute Mapping Matrix',
      'Automated ETL Transformation Scripts & Migration Pipelines',
      'Dry-Run Verification Metrics & Issue Log',
      'Final Migration Sign-Off Certificate & Volume Checksums'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Scan legacy repositories, catalog CAD formats, analyze revision patterns, and identify broken dependencies.' },
      { step: '02', title: 'Design', description: 'Construct data transformation mapping scripts, handling legacy numbering and attribute conversions.' },
      { step: '03', title: 'Configure', description: 'Run test extraction batches into staging sandbox; refine validation filters and conversion tools.' },
      { step: '04', title: 'Validate', description: 'Perform full dry run migration; execute CAD open-and-save integrity checks on sample assemblies.' },
      { step: '05', title: 'Deploy', description: 'Conduct scheduled cutover batch load; lock legacy source and verify production dataset health.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'migration_plmxml_template.xml — PLMXML Load Definition',
      code: `<?xml version="1.0" encoding="utf-8"?>
<PLMXML xmlns="http://www.plmxml.org/Schemas/PLMXMLSchema" 
        schemaVersion="6.0" 
        author="FATEQ Data Migration Engine">
  <Header id="id1" traverseRootRefs="id2"/>
  <ProductRevision id="id2" 
                   productId="FTQ-CHILLER-01" 
                   revision="A" 
                   name="Industrial Chiller Assembly">
    <UserData id="id3">
      <UserValue title="Legacy_Part_Source" value="SMARTEAM_ARCHIVE"/>
      <UserValue title="Migrated_Timestamp" value="2026-09-26"/>
    </UserData>
  </ProductRevision>
</PLMXML>`,
      explanation: 'Engineered PLMXML batch schema ensuring clean provenance tracking for all legacy datasets transferred into Teamcenter.'
    }
  },
  {
    id: 'upgrade',
    title: 'Teamcenter Upgrade',
    shortDesc: 'Upgrade assessment, BMIDE delta review, compatibility testing, custom code refactoring, and zero-downtime execution.',
    accentColor: '#F97316', // Orange
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    iconName: 'ArrowUpCircle',
    challenge: 'Upgrading Teamcenter is often delayed for years out of fear that mission-critical customizations, CAD integrations, or database schemas will break on the new version.',
    whatWeDo: [
      'Perform thorough technical readiness assessments evaluating database compatibility, hardware sizing, and customization footprint.',
      'Refactor custom ITK and SOA libraries to replace deprecated functions with modern, thread-safe Teamcenter APIs.',
      'Migrate BMIDE data model templates through intermediate schema versions with automated validation.',
      'Execute dry runs in isolated sandbox environments with regression testing before production weekend cutover.'
    ],
    capabilities: [
      { title: 'Customization Impact Analysis', description: 'Inventorying every custom handler, script, and stylesheet against target release deprecation lists.' },
      { title: 'BMIDE Schema Upgrade Path', description: 'Step-wise upgrade of BMIDE templates through major milestone releases without data corruption.' },
      { title: 'AWC Modernization', description: 'Migrating legacy AWC 4.x/5.x stylesheets and commands into modern declarative components.' },
      { title: 'Weekend Cutover Strategy', description: 'Detailed minute-by-minute execution runbook with deterministic rollback checkpoints.' }
    ],
    deliverables: [
      'Comprehensive Upgrade Impact Assessment Report',
      'Refactored & Recompiled Custom Code Packages (ITK/SOA)',
      'Upgraded & Consolidated BMIDE Templates',
      'Step-by-Step Production Cutover Checklist',
      'Post-Upgrade Verification & Acceptance Sign-off'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Audit current environment (OS, DB, TC patch, CAD versions) and catalog all active customizations.' },
      { step: '02', title: 'Design', description: 'Determine direct vs. two-step upgrade path; formulate code refactoring plan and sandbox milestones.' },
      { step: '03', title: 'Configure', description: 'Build test sandbox; recompile ITK/SOA libraries, upgrade database schema, and test BMIDE deployment.' },
      { step: '04', title: 'Validate', description: 'Run full regression testing: CAD check-in, workflow triggers, ERP integrations, and AWC UI checks.' },
      { step: '05', title: 'Deploy', description: 'Execute production upgrade during maintenance window using validated runbook and verify system health.' }
    ],
    codeSnippet: {
      language: 'shell',
      title: 'upgrade_bmide_validation.sh — Automated Template Checker',
      code: `#!/bin/bash
# FATEQ Upgrade Automation Tool: Verify BMIDE delta and schema invariants
echo "[FATEQ] Validating BMIDE template against target Teamcenter release..."
$TC_ROOT/bin/bmide_validateschema -u=infodba -p=****** -g=dba \
  -model_file=$TC_DATA/model/ftq_extensions.xml \
  -log_file=/var/log/fateq_bmide_upgrade_check.log

if [ $? -eq 0 ]; then
  echo "[FATEQ] BMIDE Schema validated successfully. 0 breaking incompatibilities."
else
  echo "[FATEQ] ERROR: Schema delta requires manual conflict resolution."
fi`,
      explanation: 'Automated script verifying zero schema conflicts and template compliance ahead of live database upgrade.'
    }
  },
  {
    id: 'administration',
    title: 'Teamcenter Administration',
    shortDesc: 'Organization setup, access control (ACL), license monitoring, FSC pool maintenance, and system health checks.',
    accentColor: '#16A34A', // Green
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'ShieldCheck',
    challenge: 'Without dedicated, proactive PLM administration, Teamcenter environments suffer from creeping permission bloat, stalled background dispatcher jobs, and runaway disk usage.',
    whatWeDo: [
      'Structure and maintain Teamcenter Organization (users, groups, roles, and volume assignments).',
      'Design clear Access Control Lists (Rule Tree ACL) enforcing intellectual property protection and confidentiality.',
      'Manage Teamcenter licenses (named user vs. concurrent) and configure license server alerts.',
      'Monitor and tune Server Pool Managers, FSC cache servers, Dispatcher queues, and database indexes.'
    ],
    capabilities: [
      { title: 'Rule Tree ACL Architecture', description: 'Configuring precise access rights based on user role, project membership, and release status.' },
      { title: 'Dispatcher Queue Management', description: 'Balancing translation servers and troubleshooting stalled PDF/STEP conversion tasks.' },
      { title: 'Volume & Storage Grooming', description: 'Identifying unreferenced datasets, managing transient volumes, and monitoring disk thresholds.' },
      { title: 'Pool Manager Tuning', description: 'Optimizing active server process pools to handle morning login surges without memory exhaustion.' }
    ],
    deliverables: [
      'Access Manager Rule Tree Audit Document',
      'Organization Structure & Role Hierarchy Map',
      'Dispatcher & FMS Maintenance Runbooks',
      'Weekly/Monthly System Health Check Checklist',
      'Disaster Recovery & Backup Verification Protocol'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Audit current organization hierarchy, orphan user accounts, Rule Tree ACL depth, and pool health.' },
      { step: '02', title: 'Design', description: 'Streamline groups and roles; draft consolidated ACL rules to eliminate conflicting permissions.' },
      { step: '03', title: 'Configure', description: 'Implement cleaned ACLs in AM (Access Manager), tune pool manager limits, and clean dispatcher queues.' },
      { step: '04', title: 'Validate', description: 'Conduct permissions dry run with test users; confirm restricted project files cannot be accessed.' },
      { step: '05', title: 'Deploy', description: 'Apply changes to production, set up monitoring alerts, and deliver administrative maintenance procedures.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'AccessManager_RuleTree.xml — Project Boundary Rule',
      code: `<!-- Access Control: Restrict unreleased engineering parts to project team -->
<RuleTree>
  <Rule name="Confidential HVAC Engineering Project" order="100">
    <Condition criteria="Project" value="PROJ_CHILLER_V4"/>
    <SubRule>
      <Condition criteria="ReleaseStatus" value="Null"/>
      <Grant role="Lead Engineer" privileges="Read,Write,Delete,Change_Owner"/>
      <Grant role="Shopfloor Manufacturing" privileges="None"/>
      <Deny role="World" privileges="All"/>
    </SubRule>
  </Rule>
</RuleTree>`,
      explanation: 'Granular Access Manager Rule Tree protecting sensitive pre-release engineering intellectual property.'
    }
  },
  {
    id: 'support',
    title: 'Managed Support',
    shortDesc: 'Tier-2 and Tier-3 technical support, root-cause troubleshooting, environment patching, and user assistance.',
    accentColor: '#16A34A', // Green
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
    iconName: 'LifeBuoy',
    challenge: 'Engineering teams lose valuable design hours when Teamcenter client freezes, CAD check-in locks, or workflow errors take days to resolve through generic IT support.',
    whatWeDo: [
      'Provide direct, specialist Tier-2 and Tier-3 Teamcenter support directly by Syed Abdul Hairu and PLM engineering specialists.',
      'Resolve complex CAD check-in/checkout locks, corrupted dataset relationships, and stalled workflow tasks.',
      'Perform regular patch updates, hotfix deployments, and client configuration rollouts.',
      'Conduct regular preventive environment maintenance, log reviews, and database index defragmentation.'
    ],
    capabilities: [
      { title: 'Direct Specialist Access', description: 'No generic helpdesks; direct communication with experienced Teamcenter technical specialists.' },
      { title: 'Rapid Incident Resolution', description: 'Root-cause diagnosis for pool crashes, volume access faults, and CAD translator timeouts.' },
      { title: 'Scheduled Patching & Hotfixes', description: 'Applying Siemens patch releases with minimal operational disruption to engineering schedules.' },
      { title: 'Proactive System Diagnostics', description: 'Continuous log auditing to catch memory leaks, bad queries, and network drops before failure.' }
    ],
    deliverables: [
      'Guaranteed Response SLAs for Critical Incidents',
      'Monthly Engineering Health & Incident Summary Reports',
      'Root-Cause Analysis (RCA) Documents for Complex Failures',
      'Preventive Maintenance & Patch Application Schedule',
      'Direct WhatsApp & Phone Engineering Hotline'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Review current ticket history, frequent user errors, infrastructure monitoring gaps, and support bottlenecks.' },
      { step: '02', title: 'Design', description: 'Establish escalation pathways, SLA targets, and dedicated communication channels (phone, WhatsApp, portal).' },
      { step: '03', title: 'Configure', description: 'Set up remote diagnostic access, log parsing utilities, and standardized incident resolution templates.' },
      { step: '04', title: 'Validate', description: 'Conduct mock incident walkthroughs; verify remote connectivity and rapid diagnostics.' },
      { step: '05', title: 'Deploy', description: 'Begin live support coverage, weekly maintenance syncs, and proactive environment monitoring.' }
    ],
    codeSnippet: {
      language: 'shell',
      title: 'tc_health_diagnostic.sh — Automated Diagnostic Suite',
      code: `#!/bin/bash
# FATEQ Managed Support Health Monitor
echo "[FATEQ DIAGNOSTIC] Auditing Teamcenter Enterprise Pool Manager..."
$TC_ROOT/pool_manager/confs/mgr status
echo "[FATEQ DIAGNOSTIC] Checking Volume FSC Heartbeats..."
curl -s -f http://localhost:4544/fms/fsc_status > /dev/null
if [ $? -eq 0 ]; then
  echo "FSC Health: OK"
else
  echo "FSC Health: FAILED - Alerting On-Duty Specialist"
fi`,
      explanation: 'Continuous monitoring script verifying core Teamcenter daemon and volume cache health.'
    }
  },
  {
    id: 'governance',
    title: 'PLM Governance & Data Standards',
    shortDesc: 'Part numbering conventions, CAD modeling guidelines, revision policies, release discipline, and compliance.',
    accentColor: '#16A34A', // Green
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconName: 'FileCheck',
    challenge: 'Without strict PLM governance, every engineering department creates parts, revisions, and CAD assemblies differently, creating massive data chaos and preventing reuse.',
    whatWeDo: [
      'Formulate pragmatic, standard operating procedures (SOPs) for part classification, naming rules, and revision control.',
      'Establish CAD modeling and assembly structure guidelines ensuring seamless downstream reuse in manufacturing and ERP.',
      'Define engineering change management policies ensuring every modification has clear business justification and traceable approval.',
      'Train engineering leads, CAD designers, and PLM administrators on governance discipline and standard workflows.'
    ],
    capabilities: [
      { title: 'Unified Part Numbering', description: 'Designing non-significant or semi-significant numbering schemas with automated sequence enforcement.' },
      { title: 'Revision & Effectivity Policies', description: 'Defining clear rules on form-fit-function changes (new revision vs. new part number).' },
      { title: 'CAD Data Standards', description: 'Enforcing model quality, coordinate system standards, layer naming, and drawing title block parameters.' },
      { title: 'Compliance & Audit Preparedness', description: 'Ensuring PLM processes meet ISO 9001 and industry-specific traceability requirements.' }
    ],
    deliverables: [
      'Enterprise PLM Governance Policy & Charter',
      'Engineering Part Numbering & Classification Standard',
      'CAD Modeling & Assembly Best Practices Handbook',
      'Engineering Change Management Governance Guide',
      'Staff Training Workshops & Assessment Material'
    ],
    deliveryPhases: [
      { step: '01', title: 'Assess', description: 'Audit existing part naming inconsistencies, duplicate part rates, and CAD assembly modeling variations.' },
      { step: '02', title: 'Design', description: 'Draft unified part numbering rules, revision policies, and CAD modeling conventions with engineering heads.' },
      { step: '03', title: 'Configure', description: 'Encode rules directly into BMIDE naming rules, validation handlers, and AWC input masks.' },
      { step: '04', title: 'Validate', description: 'Pilot new governance standards on a sample project; gather feedback and refine documentation.' },
      { step: '05', title: 'Deploy', description: 'Issue official governance guidelines, deliver hands-on team training, and implement periodic audits.' }
    ],
    codeSnippet: {
      language: 'xml',
      title: 'NamingRule_Definition.xml — Standardized Part Schema',
      code: `<!-- Automated Naming Rule enforcing classification and sequence -->
<NamingRule name="FTQ_Standard_Part_Rule">
  <FormatPattern>
    <PatternElement type="Constant" value="FTQ-"/>
    <PatternElement type="Attribute" value="ftq_product_code"/>
    <PatternElement type="Constant" value="-"/>
    <PatternElement type="AutoNumber" length="6" initial="100001"/>
  </FormatPattern>
  <RevFormatPattern>
    <PatternElement type="Alphabetical" length="1" initial="A"/>
  </RevFormatPattern>
</NamingRule>`,
      explanation: 'Deterministic Teamcenter naming rule eliminating manual part numbering errors and enforcing company-wide naming standards.'
    }
  }
];
