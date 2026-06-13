# Website Blueprint

## Purpose
Samriddhi is an enterprise architecture review portal for structured review, governance, and navigation of approved architecture artifacts. The website must privilege content clarity, diagram visibility, and reviewer efficiency over decorative presentation.

## Complete Site Hierarchy
- Home
- Executive Summary
- Architecture Vision
  - Problem Analysis
  - Stakeholder Analysis
  - Architecture Principles
  - Capability Map
- Architecture Definition
  - As-Is Architecture
  - To-Be Architecture
  - Data Architecture
  - Application Architecture
  - Integration Architecture
  - Technology Architecture
  - Security Architecture
- Architecture Governance
  - ADRs
  - Governance Model
  - Risk Register
  - Benefits Realisation Plan
- Implementation
  - Gap Analysis
  - Implementation Roadmap
  - Success Metrics

## Navigation Structure
- Top-level navigation follows the five primary areas above.
- Sidebar navigation should mirror the same hierarchy.
- Section order is fixed and must remain consistent across desktop and mobile.
- Document pages should expose previous and next navigation within the same architectural sequence.
- Home is the entry point and should orient the reviewer to the portal, not sell a product.

## Route Structure
- `/` -> Home
- `/executive-summary` -> Executive Summary
- `/architecture-vision/problem-analysis` -> Problem Analysis
- `/architecture-vision/stakeholder-analysis` -> Stakeholder Analysis
- `/architecture-vision/architecture-principles` -> Architecture Principles
- `/architecture-vision/capability-map` -> Capability Map
- `/architecture-definition/as-is-architecture` -> As-Is Architecture
- `/architecture-definition/to-be-architecture` -> To-Be Architecture
- `/architecture-definition/data-architecture` -> Data Architecture
- `/architecture-definition/application-architecture` -> Application Architecture
- `/architecture-definition/integration-architecture` -> Integration Architecture
- `/architecture-definition/technology-architecture` -> Technology Architecture
- `/architecture-definition/security-architecture` -> Security Architecture
- `/architecture-governance/adrs` -> ADRs
- `/architecture-governance/governance-model` -> Governance Model
- `/architecture-governance/risk-register` -> Risk Register
- `/architecture-governance/benefits-realisation-plan` -> Benefits Realisation Plan
- `/implementation/gap-analysis` -> Gap Analysis
- `/implementation/implementation-roadmap` -> Implementation Roadmap
- `/implementation/success-metrics` -> Success Metrics

## Content-to-Image Mapping
- `stakeholder_analysis.md` -> `stakeholder_interaction.jpeg`
- `problem_analysis.md` -> no diagram
- `principles.md` -> no diagram
- `Summary.md` -> no diagram
- `data_architecture.md` -> `data_arc.png`
- `application_architecture.md` -> `application_arc.png`
- `integration_architecture.md` -> `integration_arc.png`
- `technology_architecture.md` -> `technology_arc.png`
- `security_architecture.md` -> `security_arc.png`
- `ADR.md` -> no diagram
- `governance_model.md` -> no diagram
- `risk_register.md` -> no diagram
- `benifits_realisation_plan.md` -> no diagram
- `implementation_roadmap.md` -> no diagram
- `gap_analysis.md` -> no diagram
- `success_metrics.md` -> no diagram
- `Capability Map` -> `CapabilityMap.jpeg`
- `As-Is Architecture` -> `as_is_arc.png`
- `To-Be Architecture` -> `to_be_arc.png`
- `Business Architecture` -> `business_process.jpeg`

## Page Layout Standards
1. Page title
2. Metadata bar with document type, version, and status
3. Architecture diagram if available
4. Rendered markdown content
5. Previous and next navigation

Page rules:
- Diagram must appear before body content when available.
- Metadata must be visible above the content fold.
- Layout must stay consistent across all document pages.
- Markdown must render exactly as authored.
- No auto-generated summaries, paraphrases, or content rewrites.

## Component Architecture
- Layout components
  - `MainLayout`: global shell, metadata, responsive structure.
  - `Sidebar`: fixed navigation tree for desktop, collapsible for mobile.
  - `Header`: portal title, current section, quick controls.
- Navigation components
  - `SidebarNavigation`: hierarchy-aware menu rendering.
  - `Breadcrumbs`: page location and section context.
  - `PreviousNextNavigation`: linear review traversal.
- Architecture content components
  - `ArchitecturePage`: page scaffold for document views.
  - `MetadataBar`: title, category, version, status.
  - `DiagramViewer`: renders and enlarges approved diagrams.
  - `MarkdownRenderer`: renders markdown without editorial changes.
- Shared UI components
  - `Card`: reusable content container.
  - `Badge`: compact metadata label.
  - `Section`: structured content group.
  - `Divider`: subtle separation between content blocks.

## User Journey
1. User lands on Home and understands the portal scope.
2. User enters Executive Summary to orient on programme intent.
3. User moves into Architecture Vision to understand problems, stakeholders, principles, and capability framing.
4. User reviews Architecture Definition pages and inspects diagrams before reading the detail.
5. User checks Governance artifacts for decision, risk, and control context.
6. User reviews Implementation pages to understand delivery sequencing and readiness.
7. User navigates forward and backward through related pages during review sessions.

## Desktop-First Review Workflow
- Primary workflow is desktop review with a persistent left navigation panel.
- Diagrams should be easy to inspect, enlarge, and compare.
- Content pages should use wide readable line lengths and strong section separation.
- The interface should support quick switching between governance and architecture views.
- Mobile support is secondary and should preserve access to content without changing the review model.

----------------

## Architecture Review Principles

The website is an architecture repository and review workspace.

The purpose of the portal is to support:

* Architecture review
* Executive review
* Governance review
* Architecture decision validation
* Implementation planning

The portal is not intended to function as:

* A marketing website
* A product landing page
* A SaaS application
* A public knowledge base

Every design and implementation decision should prioritize architecture understanding over visual presentation.

---

## Architecture Artifact Standards

All architecture artifacts must follow a consistent presentation model.

Required structure:

1. Title
2. Metadata
3. Diagram (if available)
4. Content
5. Previous / Next Navigation

Optional elements:

* Breadcrumbs
* Table of Contents
* Related Artifacts

No architecture page should introduce custom layouts that differ from the approved structure.

Consistency is more important than visual variation.

---

## Diagram Governance

Architecture diagrams are authoritative architecture artifacts.

Requirements:

* Diagrams must be displayed using original image assets.
* Diagram images must never be modified automatically.
* Diagram dimensions should preserve readability.
* Fullscreen viewing must be supported.
* Zooming must be supported.
* Architecture content must not be rendered before associated diagrams.

When a diagram exists, the diagram becomes the primary artifact on the page.

---

## Metadata Governance

Document metadata shall be treated as a first-class architectural asset.

Metadata must drive:

* Navigation ordering
* Route generation
* Previous / Next navigation
* Search indexing
* Document status visibility

Metadata should never be duplicated across multiple sources.

The markdown frontmatter is the single source of truth.

---

## Content Governance

All markdown files are approved architecture artifacts.

The website must:

* Render content exactly as authored.
* Preserve heading hierarchy.
* Preserve lists.
* Preserve tables.
* Preserve architecture terminology.

The website must not:

* Rewrite content.
* Summarize content.
* Expand content.
* Generate architecture interpretations.
* Infer missing information.

Any architecture content changes must occur in the markdown source files.

---

## Search and Discovery Principles

Architecture discovery should support three workflows:

### Sequential Review

Reviewers move through documents using:

* Sidebar navigation
* Previous / Next navigation
* Breadcrumbs

---

### Domain Review

Reviewers focus on a specific architecture domain:

* Data Architecture
* Application Architecture
* Integration Architecture
* Technology Architecture
* Security Architecture

Navigation should allow rapid movement within a domain.

---

### Topic Discovery

Reviewers search for:

* NCRID
* Blockchain
* Kafka
* Municipal Integration
* Governance Controls
* Security Controls

Search should surface matching architecture artifacts without generating alternative content.

---

## Future Expansion Strategy

The portal should be designed to support future architecture artifacts without structural redesign.

Future additions may include:

* Architecture Principles Repository
* Requirements Catalog
* Architecture Standards Catalog
* Architecture Compliance Assessments
* Solution Architecture Views
* Deployment Architecture Views

Navigation, metadata, and content rendering should remain scalable as the repository grows.

---

## Implementation Approval Criteria

The implementation phase may begin when:

✓ Frontmatter has been added to all markdown documents.

✓ Content collection validation succeeds.

✓ Missing architecture artifacts have been created.

✓ Navigation metadata is complete.

✓ Diagram mappings have been validated.

✓ Route generation strategy has been approved.

Only after these activities are completed should Astro page generation and UI implementation begin.
