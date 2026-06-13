export type NavigationSection =
  | 'Home'
  | 'Executive Summary'
  | 'Architecture Vision'
  | 'Architecture Definition'
  | 'Architecture Governance'
  | 'Implementation';

export type NavigationDocument = {
  fileKey: string;
  title: string;
  route: string;
  section: Exclude<NavigationSection, 'Home'>;
};

export const NAVIGATION_TREE: Array<{
  label: NavigationSection;
  route: string;
  items?: Array<{ title: string; route: string }>;
}> = [
  { label: 'Home', route: '/' },
  { label: 'Executive Summary', route: '/executive-summary' },
  {
    label: 'Architecture Vision',
    route: '/architecture-vision',
    items: [
      { title: 'Problem Analysis', route: '/architecture-vision/problem-analysis' },
      { title: 'Stakeholder Analysis', route: '/architecture-vision/stakeholder-analysis' },
      { title: 'Architecture Principles', route: '/architecture-vision/architecture-principles' },
      { title: 'Capability Map', route: '/architecture-vision/capability-map' },
    ],
  },
  {
    label: 'Architecture Definition',
    route: '/architecture-definition',
    items: [
      { title: 'Business Architecture', route: '/architecture-definition/business-architecture' },
      { title: 'As-Is Architecture', route: '/architecture-definition/as-is-architecture' },
      { title: 'To-Be Architecture', route: '/architecture-definition/to-be-architecture' },
      { title: 'Data Architecture', route: '/architecture-definition/data-architecture' },
      { title: 'Application Architecture', route: '/architecture-definition/application-architecture' },
      { title: 'Integration Architecture', route: '/architecture-definition/integration-architecture' },
      { title: 'Technology Architecture', route: '/architecture-definition/technology-architecture' },
      { title: 'Security Architecture', route: '/architecture-definition/security-architecture' },
    ],
  },
  {
    label: 'Architecture Governance',
    route: '/architecture-governance',
    items: [
      { title: 'Architecture Decision Records', route: '/architecture-governance/adrs' },
      { title: 'Governance Model', route: '/architecture-governance/governance-model' },
      { title: 'Risk Register', route: '/architecture-governance/risk-register' },
      { title: 'Benefits Realisation Plan', route: '/architecture-governance/benefits-realisation-plan' },
    ],
  },
  {
    label: 'Implementation',
    route: '/implementation',
    items: [
      { title: 'Gap Analysis', route: '/implementation/gap-analysis' },
      { title: 'Implementation Roadmap', route: '/implementation/implementation-roadmap' },
      { title: 'Success Metrics', route: '/implementation/success-metrics' },
    ],
  },
];

export const NAVIGATION_DOCUMENTS: NavigationDocument[] = [
  { fileKey: 'summary', title: 'Executive Summary', route: '/executive-summary', section: 'Executive Summary' },
  { fileKey: 'problem_analysis', title: 'Problem Analysis', route: '/architecture-vision/problem-analysis', section: 'Architecture Vision' },
  { fileKey: 'stakeholder_analysis', title: 'Stakeholder Analysis', route: '/architecture-vision/stakeholder-analysis', section: 'Architecture Vision' },
  { fileKey: 'principles', title: 'Architecture Principles', route: '/architecture-vision/architecture-principles', section: 'Architecture Vision' },
  { fileKey: 'capability_map', title: 'Capability Map', route: '/architecture-vision/capability-map', section: 'Architecture Vision' },
  { fileKey: 'business_architecture', title: 'Business Architecture', route: '/architecture-definition/business-architecture', section: 'Architecture Definition' },
  { fileKey: 'as_is_architecture', title: 'As-Is Architecture', route: '/architecture-definition/as-is-architecture', section: 'Architecture Definition' },
  { fileKey: 'to_be_architecture', title: 'To-Be Architecture', route: '/architecture-definition/to-be-architecture', section: 'Architecture Definition' },
  { fileKey: 'data_architecture', title: 'Data Architecture', route: '/architecture-definition/data-architecture', section: 'Architecture Definition' },
  { fileKey: 'application_architecture', title: 'Application Architecture', route: '/architecture-definition/application-architecture', section: 'Architecture Definition' },
  { fileKey: 'integration_architecture', title: 'Integration Architecture', route: '/architecture-definition/integration-architecture', section: 'Architecture Definition' },
  { fileKey: 'technology_architecture', title: 'Technology Architecture', route: '/architecture-definition/technology-architecture', section: 'Architecture Definition' },
  { fileKey: 'security_architecture', title: 'Security Architecture', route: '/architecture-definition/security-architecture', section: 'Architecture Definition' },
  { fileKey: 'ADR', title: 'Architecture Decision Records', route: '/architecture-governance/adrs', section: 'Architecture Governance' },
  { fileKey: 'governance_model', title: 'Governance Model', route: '/architecture-governance/governance-model', section: 'Architecture Governance' },
  { fileKey: 'risk_register', title: 'Risk Register', route: '/architecture-governance/risk-register', section: 'Architecture Governance' },
  { fileKey: 'benefits_realisation_plan', title: 'Benefits Realisation Plan', route: '/architecture-governance/benefits-realisation-plan', section: 'Architecture Governance' },
  { fileKey: 'gap_analysis', title: 'Gap Analysis', route: '/implementation/gap-analysis', section: 'Implementation' },
  { fileKey: 'implementation_roadmap', title: 'Implementation Roadmap', route: '/implementation/implementation-roadmap', section: 'Implementation' },
  { fileKey: 'success_metrics', title: 'Success Metrics', route: '/implementation/success-metrics', section: 'Implementation' },
];

export const SECTION_ROUTES: Record<Exclude<NavigationSection, 'Home'>, string> = {
  'Executive Summary': '/executive-summary',
  'Architecture Vision': '/architecture-vision',
  'Architecture Definition': '/architecture-definition',
  'Architecture Governance': '/architecture-governance',
  'Implementation': '/implementation',
};

export function getNavigationDocumentByFileKey(fileKey: string) {
  return NAVIGATION_DOCUMENTS.find((document) => document.fileKey.toLowerCase() === fileKey.toLowerCase());
}

export function getNavigationDocumentByTitle(title: string) {
  return NAVIGATION_DOCUMENTS.find((document) => document.title === title);
}

export function getNavigationDocumentByRoute(route: string) {
  return NAVIGATION_DOCUMENTS.find((document) => document.route === route);
}

export function getNavigationIndex(title: string) {
  return NAVIGATION_DOCUMENTS.findIndex((document) => document.title === title);
}

export function getBreadcrumbSection(title: string, fallback: string) {
  return getNavigationDocumentByTitle(title)?.section ?? fallback;
}

export function getSectionRoute(section: Exclude<NavigationSection, 'Home'>) {
  return SECTION_ROUTES[section];
}

export function getDocumentsBySection(section: Exclude<NavigationSection, 'Home'>) {
  return NAVIGATION_DOCUMENTS.filter((document) => document.section === section);
}

export function getPreviousNext(title: string) {
  const currentIndex = getNavigationIndex(title);

  return {
    previous: currentIndex > 0 ? NAVIGATION_DOCUMENTS[currentIndex - 1] : null,
    next: currentIndex >= 0 && currentIndex < NAVIGATION_DOCUMENTS.length - 1 ? NAVIGATION_DOCUMENTS[currentIndex + 1] : null,
  };
}