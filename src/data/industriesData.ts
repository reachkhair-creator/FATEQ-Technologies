import { Industry } from '../types';

export const industriesData: Industry[] = [
  {
    id: 'hvac',
    name: 'HVAC & Air Conditioning Manufacturing',
    tagline: 'Specialized PLM architecture for modular chillers, air handling units (AHUs), coils, and ducting systems.',
    isFeatured: true, // Special visual emphasis as requested!
    accentColor: '#155EEF',
    image: '/src/assets/images/industry_hvac_engineering_1790443961095.jpg',
    description: 'HVAC engineering involves extreme variant complexity: every air handling unit and industrial chiller is engineered-to-order with custom dimensions, electrical panel schedules, refrigerant coil configurations, and acoustic specs. FATEQ Technologies structures modular 150% configurable BOMs in Teamcenter that dramatically shorten lead times.',
    keyChallenges: [
      'High variant complexity: custom coil circuits, fan configurations, and cabinet dimensions per project.',
      'Sheet metal flat pattern sync between 3D CAD and CNC punching/shearing machines.',
      'Discrepancies between thermodynamic engineering calculations and released production BOMs.'
    ],
    plmSolutions: [
      'Configurable Product Structure & Option/Variant rules in Teamcenter.',
      'Automated CAD generation of sheet metal flat patterns and DXF files upon sign-off.',
      'Integration of psychrometric calculation parameters into BMIDE item properties.'
    ],
    sampleDeliverables: [
      'Modular 150% Engineering BOM Templates for AHUs and Chillers',
      'Configured BMIDE Attributes for Thermodynamic & Electrical Ratings',
      'Automated DXF & STEP Exporter for CNC Plasma and Punching Integration'
    ]
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    tagline: 'Deep assembly hierarchy management, pneumatic/hydraulic routing, and heavy machinery lifecycle governance.',
    accentColor: '#0F9D8A',
    image: '/src/assets/images/industry_machinery_precision_1790443974004.jpg',
    description: 'Industrial equipment manufacturers build long-lifecycle machinery that requires strict serial-number effectivity, spare parts cataloging, and precise change management across mechanical, electrical, and hydraulic sub-systems.',
    keyChallenges: [
      'Managing massive multi-level assemblies with tens of thousands of components.',
      'Keeping mechanical CAD and electrical schematics synchronized under single revision locks.',
      'Tracking as-designed vs. as-built configurations across field installations.'
    ],
    plmSolutions: [
      'Teamcenter Multi-CAD Structure Manager with lightweight JT visualization.',
      'Mechatronics data integration linking electrical harness data to physical assemblies.',
      'As-Built and As-Maintained structure management for aftermarket spare parts.'
    ],
    sampleDeliverables: [
      'Lightweight JT Generation Pipeline for Multi-Level Assembly Visualization',
      'Serial-Number Effectivity & Engineering Change Notice (ECN) Workflows',
      'Standardized Hardware Classification Library (Fasteners, Bearings, Valves)'
    ]
  },
  {
    id: 'machinery-manufacturing',
    name: 'Machinery Manufacturing',
    tagline: 'High-precision tooling, bespoke automated machinery, and synchronized CAD-to-machining pipelines.',
    accentColor: '#7C3AED',
    description: 'Bespoke machinery builders deal with fast-track engineering where design and machining occur concurrently. FATEQ Technologies configures fast-track Teamcenter release states that feed CNC programmers without compromising quality governance.',
    keyChallenges: [
      'Concurrent engineering where long-lead raw forgings must be ordered before final assembly sign-off.',
      'Controlling toolpath CAM files and CNC setup sheets alongside CAD geometry.',
      'Frequent minor engineering tweaks on the assembly floor without formal tracking.'
    ],
    plmSolutions: [
      'Fast-track Preliminary Release workflows in Teamcenter for long-lead procurement.',
      'CAM dataset management attaching post-processed G-code directly to part revisions.',
      'Engineering Redlining tools in Active Workspace for shop floor feedback.'
    ],
    sampleDeliverables: [
      'Preliminary Procurement Release Workflow with Automatic Tagging',
      'CAM Toolpath & Setup Sheet Teamcenter Dataset Model',
      'Shop Floor Active Workspace View for Production Foremen'
    ]
  },
  {
    id: 'automotive-components',
    name: 'Automotive & Components',
    tagline: 'Rigorous Tier-1/Tier-2 supplier governance, PPAP compliance, and stringent change management.',
    accentColor: '#F97316',
    description: 'Automotive component suppliers face strict OEM delivery deadlines, relentless audit scrutiny, and zero-tolerance quality standards. We structure Teamcenter workflows to automate PPAP document packages and audit trails.',
    keyChallenges: [
      'Strict OEM customer milestone gates and rigorous PPAP documentation mandates.',
      'Managing complex variant matrices for left-hand vs. right-hand drive components.',
      'Traceable failure mode effects analysis (FMEA) linked to CAD geometry.'
    ],
    plmSolutions: [
      'Standardized PPAP and APQP milestone approval workflows in Teamcenter.',
      'Controlled supplier data exchange with automated ITAR/IP security boundaries.',
      'Bi-directional ERP item sync ensuring supplier batch numbers trace back to revisions.'
    ],
    sampleDeliverables: [
      'APQP / PPAP Electronic Sign-off & Document Assembly Matrix',
      'Automated Revision Effectivity Governance for OEM Tier-1 Deliverables',
      'Secure External Supplier Portal Access Rules in Active Workspace'
    ]
  },
  {
    id: 'sheet-metal',
    name: 'Sheet Metal & Fabrication',
    tagline: 'Parametric CAD modeling, bend allowances, nesting optimization, and laser/punch machine handoffs.',
    accentColor: '#06B6D4',
    description: 'Precision sheet metal fabrication demands absolute harmony between CAD models, unfolded flat patterns, bend deduction tables, and nesting software. We eliminate the costly errors that occur when drawings don’t match laser cutter code.',
    keyChallenges: [
      'Mismatches between folded 3D CAD models and 2D flat patterns sent to laser cutters.',
      'Material thickness and grade metadata missing from DXF/DWG machine inputs.',
      'Scrap rate inflation caused by engineering revisions not reaching nesting teams.'
    ],
    plmSolutions: [
      'Automated extraction of flat pattern DXF geometry directly inside Teamcenter.',
      'BMIDE property rules enforcing sheet thickness, material grade, and finish specs.',
      'Automated nesting queue feeds triggered upon Engineering Change Order release.'
    ],
    sampleDeliverables: [
      'Automated Sheet Metal Flat Pattern Dispatcher Translator',
      'Material Grade & Gauge Mandatory Attribute Validation Handlers',
      'Fabrication Shopfloor Drawing & DXF Viewer Configuration'
    ]
  },
  {
    id: 'manufacturing-smes',
    name: 'Engineering & Manufacturing SMEs',
    tagline: 'Practical, lean Teamcenter PLM deployment eliminating spreadsheet chaos without enterprise bloat.',
    accentColor: '#16A34A',
    description: 'Small and medium manufacturing enterprises need robust revision control, centralized drawing access, and automated part numbering without months of bureaucratic configuration. We provide rapid, lean Teamcenter setups.',
    keyChallenges: [
      'Drawings scattered across local hard drives, USB keys, and shared network folders.',
      'Over-engineered enterprise PLM templates that are too cumbersome for small teams.',
      'Limited in-house IT and PLM administration resources.'
    ],
    plmSolutions: [
      'Turnkey Rapid-Deployment Teamcenter templates with out-of-the-box best practices.',
      'Simplified Active Workspace user roles requiring minimal training.',
      'Fractional, on-demand Teamcenter administration and support by Syed Abdul Hairu.'
    ],
    sampleDeliverables: [
      'Lean BMIDE Data Model with Pre-Configured Fastener & Part Libraries',
      'Simplified 2-Step Release Workflow (Engineering Draft → Approved)',
      'Remote Administrator SLA Package for Day-to-Day Environment Care'
    ]
  }
];
