# Frontmatter Recommendations

## Purpose

This document defines the recommended metadata structure, navigation ordering, routing conventions, and image associations for all architecture artifacts within the Samriddhi Architecture Review Portal.

These recommendations are intended to support:

* Consistent navigation generation
* Content collection validation
* Diagram association
* Previous/Next document navigation
* Search indexing
* Architecture review workflows

No content files have been modified.

---

# Metadata Standard

All markdown documents should include the following frontmatter structure:

```yaml
---
title:
description:
order:
category:
image:
status:
version:
---
```

---

# Approved Category Values

The following values should be used consistently across all documents:

```text
executive-summary
architecture-vision
architecture-definition
architecture-governance
implementation
```

These values are intended for routing, navigation generation, filtering, and content grouping.

---

# Approved Status Values

```text
Draft
Review
Approved
```

Current project state recommendation:

```yaml
status: Review
```

for all architecture artifacts until formal approval is completed.

---

# Recommended Architecture Review Sequence

The architecture portal should present documents in the following order:

1. Executive Summary
2. Problem Analysis
3. Stakeholder Analysis
4. Architecture Principles
5. Capability Map
6. Business Architecture
7. As-Is Architecture
8. To-Be Architecture
9. Data Architecture
10. Application Architecture
11. Integration Architecture
12. Technology Architecture
13. Security Architecture
14. Architecture Decision Records
15. Governance Model
16. Risk Register
17. Benefits Realisation Plan
18. Gap Analysis
19. Implementation Roadmap
20. Success Metrics

This sequence should drive:

* Sidebar ordering
* Previous/Next navigation
* Search weighting
* Architecture review workflows

---

# Document Recommendations

## Summary.md

Recommended Frontmatter

```yaml
---
title: Executive Summary
description: Overview of the Samriddhi programme, business problem, target solution, and expected outcomes.
order: 1
category: executive-summary
status: Review
version: 1.0
---
```

Recommended Route

```text
/executive-summary
```

Image Association

```text
None
```

---

## problem_analysis.md

Recommended Frontmatter

```yaml
---
title: Problem Analysis
description: Analysis of current challenges in housing society governance and operations.
order: 2
category: architecture-vision
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-vision/problem-analysis
```

Image Association

```text
None
```

---

## stakeholder_analysis.md

Recommended Frontmatter

```yaml
---
title: Stakeholder Analysis
description: Stakeholder groups, interests, concerns, and engagement approach.
order: 3
category: architecture-vision
image: /images/stakeholder_interaction.jpeg
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-vision/stakeholder-analysis
```

Image Association

```text
stakeholder_interaction.jpeg
```

---

## principles.md

Recommended Frontmatter

```yaml
---
title: Architecture Principles
description: Guiding principles governing architecture decisions and implementation.
order: 4
category: architecture-vision
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-vision/architecture-principles
```

Image Association

```text
None
```

---

## capability_map.md

Recommended Frontmatter

```yaml
---
title: Capability Map
description: Business capability landscape for the Samriddhi platform.
order: 5
category: architecture-vision
image: /images/CapabilityMap.jpeg
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-vision/capability-map
```

Image Association

```text
CapabilityMap.jpeg
```

---

## business_architecture.md

Recommended Frontmatter

```yaml
---
title: Business Architecture
description: Business processes, operating model, and capability realization.
order: 6
category: architecture-definition
image: /images/business_process.jpeg
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-definition/business-architecture
```

Image Association

```text
business_process.jpeg
```

---

## as_is_architecture.md

Recommended Frontmatter

```yaml
---
title: As-Is Architecture
description: Current-state architecture assessment and baseline environment.
order: 7
category: architecture-definition
image: /images/as_is_arc.png
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-definition/as-is-architecture
```

Image Association

```text
as_is_arc.png
```

---

## to_be_architecture.md

Recommended Frontmatter

```yaml
---
title: To-Be Architecture
description: Target-state architecture vision for the Samriddhi platform.
order: 8
category: architecture-definition
image: /images/to_be_arc.png
status: Review
version: 1.0
---
```

Recommended Route

```text
/architecture-definition/to-be-architecture
```

Image Association

```text
to_be_arc.png
```

---

## data_architecture.md

Order: 9

Image:

```text
data_arc.png
```

Route:

```text
/architecture-definition/data-architecture
```

---

## application_architecture.md

Order: 10

Image:

```text
application_arc.png
```

Route:

```text
/architecture-definition/application-architecture
```

---

## integration_architecture.md

Order: 11

Image:

```text
integration_arc.png
```

Route:

```text
/architecture-definition/integration-architecture
```

---

## technology_architecture.md

Order: 12

Image:

```text
technology_arc.png
```

Route:

```text
/architecture-definition/technology-architecture
```

---

## security_architecture.md

Order: 13

Image:

```text
security_arc.png
```

Route:

```text
/architecture-definition/security-architecture
```

---

## ADR.md

Order: 14

Route:

```text
/architecture-governance/adrs
```

---

## governance_model.md

Order: 15

Route:

```text
/architecture-governance/governance-model
```

---

## risk_register.md

Order: 16

Route:

```text
/architecture-governance/risk-register
```

---

## benefits_realisation_plan.md

Order: 17

Route:

```text
/architecture-governance/benefits-realisation-plan
```

Notes:

* Rename file if currently named `benifits_realisation_plan.md`.

---

## gap_analysis.md

Order: 18

Route:

```text
/implementation/gap-analysis
```

---

## implementation_roadmap.md

Order: 19

Route:

```text
/implementation/implementation-roadmap
```

---

## success_metrics.md

Order: 20

Route:

```text
/implementation/success-metrics
```

---

# Missing Architecture Artifacts

The following documents should exist before implementation begins:

```text
capability_map.md
business_architecture.md
as_is_architecture.md
to_be_architecture.md
```

These artifacts are already represented in the navigation model and available image assets.

Creating these files will ensure consistency between:

* Content collections
* Navigation
* Routing
* Diagram associations
* Architecture review workflows

---

# Implementation Readiness

Before Astro page generation begins:

✓ Content collection configured

✓ Navigation structure approved

✓ Component architecture approved

✓ Design system approved

✓ Frontmatter added to all documents

✓ Missing architecture artifacts created

Only after these activities are completed should UI implementation begin.
