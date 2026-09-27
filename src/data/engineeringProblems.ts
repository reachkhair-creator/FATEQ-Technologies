import { EngineeringProblem } from '../types';

export const engineeringProblems: EngineeringProblem[] = [
  {
    id: 'disconnected-data',
    title: 'Disconnected Engineering Data',
    subtitle: 'CAD models, drawings, and ERP items drifting out of sync',
    accentColor: '#155EEF', // Blue
    iconName: 'Unlink',
    symptom: 'Designers work on local disks, procurement orders obsolete revision drawings, and shop floor assemblies fail due to misaligned BOMs.',
    rootCause: 'Lack of automated CAD dataset associations, manual BOM re-entry into ERP systems, and absent revision-lock mechanisms in Teamcenter.',
    technicalResolution: 'Enforce tight multi-CAD integration (NX/Solid Edge/Creo) with automated title-block mapping, bidirectional ERP synchronization, and strict revision effectivity rules.'
  },
  {
    id: 'slow-awc',
    title: 'Slow or Difficult Active Workspace Processes',
    subtitle: 'Complex navigation, sluggish page loads, and confusing UI layouts',
    accentColor: '#06B6D4', // Cyan
    iconName: 'Gauge',
    symptom: 'Engineers complain about 10+ second page loading times, endless clicks to approve changes, and cluttered command toolbars that overwhelm daily tasks.',
    rootCause: 'Unoptimized XML stylesheets, heavy unindexed Solr queries, poorly configured FMS caches, and one-size-fits-all default workspace layouts.',
    technicalResolution: 'Re-architect declarative ViewModels, streamline summary stylesheets to show only role-pertinent metadata, tune FMS FSC caching, and optimize Solr search indexing.'
  },
  {
    id: 'complex-bom',
    title: 'Complex BOM & Workflow Management',
    subtitle: 'Bottlenecked approvals, unclear change scope, and fragile revision histories',
    accentColor: '#0F9D8A', // Teal
    iconName: 'GitMerge',
    symptom: 'Engineering change orders (ECOs) take weeks to route through sign-offs; participants are manually chased down while production builds out-of-date revisions.',
    rootCause: 'Convoluted monolithic workflow templates lacking dynamic task assignment, missing automated dataset release checks, and undefined sign-off hierarchies.',
    technicalResolution: 'Implement lean, modular EPM workflows with dynamic participant routing, automated pre-release validation rule handlers, and background Dispatcher PDF/STEP generation.'
  },
  {
    id: 'legacy-migration',
    title: 'Legacy Teamcenter & Migration Challenges',
    subtitle: 'Fear of upgrading, outdated server tiers, and custom code lock-in',
    accentColor: '#F97316', // Orange
    iconName: 'History',
    symptom: 'Running on end-of-life Teamcenter versions (TC 10/11) because undocumented legacy ITK customizations and fear of schema corruption prevent upgrading.',
    rootCause: 'Deep monolithic customizations bypassing BMIDE best practices, fragmented legacy file vaults, and lack of automated sandbox regression testing.',
    technicalResolution: 'Perform deep customization delta audits, refactor ITK to modern safe APIs, consolidate BMIDE schema templates through intermediate steps, and execute zero-downtime cutovers.'
  }
];
