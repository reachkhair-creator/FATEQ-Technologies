export type ServiceCategory = 
  | 'implementation'
  | 'administration'
  | 'bmide'
  | 'active-workspace'
  | 'itk-soa'
  | 'workflows'
  | 'integration'
  | 'migration'
  | 'upgrade'
  | 'support'
  | 'governance';

export interface ServiceDetail {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  accentColor: string; // Tailwind hex or class reference
  badgeColor: string;
  iconName: string;
  challenge: string;
  whatWeDo: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  deliveryPhases: {
    step: string;
    title: string;
    description: string;
  }[];
  codeSnippet: {
    language: string;
    title: string;
    code: string;
    explanation: string;
  };
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  isFeatured?: boolean;
  accentColor: string;
  image?: string;
  description: string;
  keyChallenges: string[];
  plmSolutions: string[];
  sampleDeliverables: string[];
}

export interface EngineeringProblem {
  id: string;
  title: string;
  subtitle: string;
  accentColor: string;
  symptom: string;
  rootCause: string;
  technicalResolution: string;
  iconName: string;
}

export interface GCCRegion {
  country: string;
  flagCode: string;
  hubs: string[];
  focusSectors: string[];
  note: string;
}

export interface AssessmentState {
  currentVersion: string;
  deploymentType: string;
  primaryGoal: string;
  painPoints: string[];
  systemScope: string[];
}
