

Principle 1 — Evidence-First Operations

Architecture Domain: Business Architecture | Data Architecture

---

Statement

Every operational event, incident, decision, and transaction within the Samriddhi ecosystem must generate timestamped, geo-tagged, and immutable evidence at the point of origination. No incident lifecycle shall be considered complete without a verifiable evidence record. Evidence creation is a first-class architectural concern, not a secondary logging function.

---

Rationale

The Samriddhi problem analysis identifies that 43% of insurance claims are rejected due to missing documentation and 34% of societies cannot produce evidence for regulatory audits. These failures are not caused by negligence — they are caused by an architecture that treats evidence as an afterthought. WhatsApp-based operations produce no structured, tamper-proof records. The absence of evidence is the single most consequential root cause across financial losses, legal disputes, and compliance failures. An architecture that embeds evidence generation as a primary concern — not a bolt-on feature — is the only sustainable path to resolving these failures at scale.

---

Implications

- All incident management workflows must enforce mandatory evidence capture (photo, geo-tag, timestamp) before a workflow state transition is permitted. Evidence attachment is not optional.
- The platform must implement a blockchain-backed evidence registry (Hyperledger Fabric or equivalent) for high-value events including insurance claims, legal disputes, and regulatory inspections. Off-chain storage with on-chain hash anchoring is acceptable for cost and latency management.
- Evidence schemas must be co-designed with insurance providers and regulatory bodies to ensure legal admissibility under the Indian Evidence Act and IRDAI requirements before implementation begins.
- Application designers must not create any incident resolution pathway that bypasses evidence creation. UI/UX flows must be designed to make evidence capture the path of least resistance, not an additional step.
- Audit trail completeness must be included as a non-functional requirement in all module acceptance criteria. The ARB must reject any design that allows state changes without traceable evidence.
- As the platform scales from 250 to 3.2 lakh societies, the evidence architecture must remain consistent. Schema versioning and backward compatibility must be governed from Day 1.

---

 Principle 2 — Federated Governance with Layered Autonomy

Architecture Domain: Business Architecture | Application Architecture

---

Statement

The Samriddhi platform must implement a federated governance model in which each layer of the ecosystem — individual societies, Property Management Companies, and municipal bodies — retains appropriate decision-making autonomy while operating within a common architectural framework. No single authority shall have unrestricted access to or control over the data and operations of another governance layer without explicit, consent-governed authorisation.

---

Rationale

Samriddhi serves a heterogeneous ecosystem where governance authority is legitimately distributed: RWAs hold sovereign authority over their society's operations; PMCs manage multi-society portfolios on behalf of clients; municipal bodies exercise regulatory oversight at city level. An architecture that centralises all authority in a single entity will be rejected by stakeholders, produce regulatory conflicts, and fail to scale. Equally, an architecture with no common framework will replicate the current fragmentation at a digital layer. Federated governance — common standards, local autonomy — is the only model that resolves this tension.

---

Implications

- The platform must implement a multi-tenant architecture where each society's operational data is logically isolated by default. Cross-tenant data access requires explicit, role-governed authorisation and produces an audit trail.
- Data ownership must be architecturally encoded: society-generated data is owned by the society. PMCs access society data through delegated permission models, not by default entitlement. Municipal bodies access aggregated, anonymised operational intelligence through open APIs, not raw society data.
- The governance model must define three distinct authority tiers — Society, PMC, Municipal — each with a corresponding role hierarchy, permission boundary, and escalation pathway. These must be modelled in the Identity and Access Management architecture before application development begins.
- Platform-wide standards (incident categories, SLA definitions, evidence schemas, vendor scorecard metrics) must be set centrally by the ARB. Within those standards, societies retain configuration autonomy (e.g., custom SLA thresholds, local vendor preferences).
- The federated architecture must be designed to accommodate future tiers — state government, national housing registry — without requiring structural re-architecture.
- Integration with municipal bodies must operate through open, published APIs with agreed data-sharing agreements. Municipal bodies must not be given administrative access to society-level operational data.

---

 Principle 3 — Canonical Identity as the Foundation of Interoperability

Architecture Domain: Data Architecture | Integration Architecture

---

Statement

A single, authoritative identity standard — the National Community Resident ID (NCRID) — must serve as the canonical identifier for all citizens, societies, vendors, and properties within the Samriddhi ecosystem. All platform services, integrations, and data exchanges must resolve to this identity standard. No module shall implement a proprietary or siloed identity scheme.

---

Rationale

The current state is characterised by fragmented, inconsistent resident identification across WhatsApp groups, manual registers, and informal society records. This fragmentation makes cross-platform data exchange structurally impossible and prevents the creation of longitudinal records for residents, vendors, or properties. As Samriddhi scales to 3.2 lakh societies, the absence of a canonical identity standard would produce 3.2 lakh disconnected identity silos. The National Community Resident ID is the architectural prerequisite for every interoperability objective: insurance integration, municipal API connectivity, vendor marketplace participation, and federated governance.

---

Implications

- The NCRID specification must be defined, published, and ARB-approved before any resident-facing module is built. All subsequent modules must consume NCRID as their primary identity reference, not an internal surrogate key.
- The federated identity service must implement a Keycloak-based (or equivalent) IAM layer that issues NCRID-linked tokens across society, PMC, and municipal tiers. Token standards must follow OpenID Connect and OAuth 2.0.
- Vendor identity must follow an equivalent canonical standard — a National Vendor Registry ID — enabling portable performance records across societies and geographies. A vendor's scorecard must be identity-bound, not society-bound, to prevent gaming through re-registration.
- Property identity must be captured as a canonical unit (building, block, flat) linked to NCRID, enabling incident geo-resolution, asset tracking, and insurance underwriting at the property level.
- Data migration from legacy society registers must include an NCRID resolution step. Unresolved identities must be flagged for reconciliation rather than creating duplicate records.
- The NCRID specification must anticipate integration with existing national identity frameworks (Aadhaar-linked verification, DigiLocker) while preserving privacy-by-design constraints. The architecture must not mandate Aadhaar linkage but must allow it as a voluntary verification pathway.

---

 Principle 4 — Open Ecosystem Architecture

Architecture Domain: Integration Architecture | Technology Architecture

---

Statement

The Samriddhi platform must be designed as an open ecosystem, not a closed application. All integration points — with municipal bodies, insurance providers, vendors, PMCs, and third-party service providers — must be exposed through published, versioned, standards-based APIs. The platform must be architecturally incapable of creating proprietary lock-in for any participant in the ecosystem.

---

Rationale

One of the identified root causes of the current crisis is vendor monopoly — captive dependencies that inflate costs, degrade service quality, and remove accountability. If the Samriddhi platform itself becomes a proprietary dependency, it replicates the very problem it is designed to solve at a higher architectural layer. Open APIs eliminate lock-in, enable competitive participation, allow municipal bodies to integrate at their own pace, and create the foundation for a national community operations ecosystem that survives beyond any single vendor or technology generation.

---

Implications

- All external-facing APIs must be specified using OpenAPI 3.0 and published in a developer portal accessible to authorised ecosystem participants. Internal APIs must follow the same standard to prevent internal lock-in.
- The platform must implement an API Gateway layer (e.g., Kong, AWS API Gateway) that enforces rate limiting, authentication, versioning, and observability across all integration points. No direct database access shall be permitted to external integrators.
- Legacy municipal systems that use SOAP-based interfaces must be accommodated through an adapter layer. The adapter pattern must be used consistently so that legacy integration complexity is isolated and does not bleed into the core platform architecture.
- The platform must support webhook-based event notifications to enable push-based integration for insurers and PMCs, reducing polling overhead and enabling real-time claim and SLA notifications.
- Vendor onboarding APIs must be publicly documented so that large facility management companies can self-integrate programmatically without requiring bespoke implementation work from the Samriddhi team.
- Technology choices must be evaluated against openness criteria: preference for open standards, open-source components, and cloud-agnostic deployment patterns. Proprietary vendor features must not be used in core platform components where an open equivalent exists.
- The ARB must maintain an API registry and review all new integration contracts before publication. Deprecation policies must be published with a minimum 12-month notice period.

---

Principle 5 — Privacy by Design at Architectural Layer

Architecture Domain: Security Architecture | Data Architecture

---

Statement

Privacy protection for citizens, residents, and communities must be embedded into the architecture of the Samriddhi platform at its foundational layer, not added as a compliance overlay after design is complete. Data minimisation, granular consent, purpose limitation, and anonymisation must be first-class architectural constraints that govern every data flow, integration, and analytics capability.

---

Rationale

The Samriddhi platform will process personal data for 720,000 citizens across 250 pilot societies, scaling to tens of millions nationally. The Digital Personal Data Protection Act 2023 (DPDPA) establishes legal obligations for consent, purpose limitation, data minimisation, and breach notification that carry significant penalties for non-compliance. Beyond legal compliance, resident trust — identified as a critical success factor given the 78% transparency dissatisfaction rate — depends on residents believing their personal data is handled with integrity. An architecture that treats privacy as a retrofit will fail both legally and socially.

---

Implications

- A Data Protection Impact Assessment (DPIA) must be completed before any module that processes personal data is designed. The DPIA findings must be documented and tracked as architectural constraints, not recommendations.
- Consent management must be implemented as a platform-wide service, not a module-level feature. Every data collection event must be linked to a consent record specifying: data subject, data category, purpose, retention period, and consent withdrawal mechanism.
- Analytics and reporting capabilities — particularly those consumed by PMCs, municipal bodies, and insurers — must operate on anonymised or aggregated data by default. Personally identifiable data must not flow into analytics layers without explicit, documented justification and consent.
- The data architecture must implement logical separation between operational data (incident records, vendor transactions) and personal data (resident profiles, contact information), with access governed by separate permission policies.
- Data retention schedules must be architecturally enforced, not operationally dependent. The platform must automatically flag or purge records that exceed their defined retention period.
- ISO 27001 certification scope must include all components that handle personal data. The certification roadmap must be defined in Phase 0 and tracked as an architectural milestone, not a post-launch activity.
- Voice-enabled and vernacular interfaces must apply the same privacy standards as digital interfaces. Voice data must not be retained beyond the immediate processing need unless explicit consent is obtained.

---

Principle 6 — Zero Trust Security as the Operating Assumption

Architecture Domain: Security Architecture | Technology Architecture

---

Statement

The Samriddhi platform must operate under the Zero Trust security principle: no user, device, network location, or service is inherently trusted. Every access request — regardless of origin — must be authenticated, authorised, and continuously verified. Trust is never assumed; it is always earned and always time-bound.

---

Rationale

The Samriddhi ecosystem spans hundreds of geographically distributed societies, thousands of vendors, multiple municipal IT environments, and insurance provider networks — all connected through shared APIs. This attack surface is fundamentally incompatible with perimeter-based security models that assume internal network trustworthiness. The consequences of a breach are severe: compromised incident evidence undermines insurance claims and legal proceedings; leaked resident personal data creates DPDPA liability; compromised vendor credentials could manipulate SLA records. Zero Trust is not a technology choice — it is the only security architecture appropriate for a federated, multi-tenant, citizen-facing platform of this scale and sensitivity.

---

Implications

- All service-to-service communication within the platform must use mutual TLS (mTLS) with short-lived certificates. No service shall trust another service based solely on network location.
- The IAM layer must issue time-limited, scoped tokens for every user session and service interaction. Long-lived credentials must not be used in any production component. Secrets management (HashiCorp Vault or equivalent) must be implemented before any service handles sensitive data.
- Multi-factor authentication must be mandatory for all administrative roles, RWA committee members, PMC operators, and vendor marketplace administrators. MFA must be strongly encouraged and architecturally incentivised for resident accounts.
- All network traffic between platform components must be encrypted in transit using TLS 1.3 as a minimum standard. Data at rest must be encrypted using AES-256. Encryption key management must be handled by a dedicated secrets management service, not application code.
- A Security Information and Event Management (SIEM) system must be operational before the platform goes live with resident data. Security event logging must be centralised, tamper-evident, and retained for a minimum of 12 months.
- Quarterly penetration testing must be a contractual requirement with external security assessors. Findings must be triaged by the ARB within 30 days, with critical findings resolved within 14 days of identification.
- The Zero Trust model must extend to IoT sensors: each sensor must have a unique device identity, communicate over encrypted channels, and be capable of remote revocation if compromised.

---

 Principle 7 — Event-Driven Architecture for Real-Time Operational Intelligence

Architecture Domain: Application Architecture | Technology Architecture

---

Statement

The Samriddhi platform must be built on an event-driven architectural foundation in which all significant operational state changes — incident creation, IoT sensor alerts, SLA breaches, claim submissions, vendor performance updates — are propagated as structured events through a central event streaming layer. Downstream services must consume events asynchronously. Point-to-point synchronous coupling between services must be avoided except where transactional consistency demands it.

---

Rationale

The current operational model is entirely reactive — problems are addressed after they become visible, often after significant damage has occurred. The shift to predictive, proactive operations requires a real-time data fabric that can simultaneously serve multiple consumers: IoT anomaly detection, SLA monitoring, resident notification, municipal dashboards, and insurance claim triggers. A synchronous, request-response architecture cannot deliver this capability without creating tight coupling that degrades scalability and resilience. An event-driven architecture using Apache Kafka or equivalent enables the platform to serve all these consumers from a single stream of authoritative operational events, without any consumer depending directly on another.

---

Implications

- Apache Kafka (or an equivalent distributed event streaming platform) must be selected as the central event backbone before application module design begins. All modules must be designed as event producers and/or consumers, not as direct service callers.
- A canonical event schema registry must be established and governed by the ARB. All events must conform to a versioned schema. Unschematised events must not be published to the production stream.
- IoT sensor data from water level, air quality, power, and vibration sensors must be ingested as event streams through AWS IoT Core or equivalent. Threshold breach events must trigger downstream workflows — predictive maintenance scheduling, resident alerts, and RWA notifications — without human intervention.
- The event architecture must support exactly-once delivery semantics for events that trigger financial or compliance actions (e.g., insurance claim submission, SLA penalty enforcement) to prevent duplicate processing.
- Real-time analytics (Apache Flink or equivalent) must consume event streams to provide 4–6 hour advance warnings of infrastructure failures, as specified in the project objectives. The analytics layer must not query operational databases directly.
- Event retention must be configurable per event type. High-value compliance events must be retained for a minimum of 7 years to satisfy audit and legal requirements.
- The event-driven model must be the default integration pattern for all new integrations. Synchronous REST calls are permitted only for user-facing read operations and transactional writes requiring immediate consistency guarantees.

---

Principle 8 — Design for National Scale from Day One

Architecture Domain: Technology Architecture | Business Architecture

---

Statement

Every architectural decision made for the Samriddhi pilot — covering 250 societies and 180,000 residential units — must be evaluated against its viability at national scale: 3.2 lakh societies and tens of millions of residents. Architectural patterns, data models, identity standards, governance frameworks, and integration contracts established in the pilot must be capable of scaling without structural re-architecture. The pilot is not a prototype; it is the foundation.

---

Rationale

The stated objective of the Samriddhi initiative extends explicitly to a nationwide rollout across India's 3.2 lakh housing societies. An architecture optimised solely for the pilot — with hardcoded assumptions about society count, data volumes, municipal boundaries, or language requirements — will require expensive and disruptive re-architecture before national rollout is viable. The cost of designing for scale from Day 1 is marginal compared to the cost of re-platforming after 250 societies are live. Every shortcut taken in the pilot phase creates technical debt that compounds as the ecosystem grows.

---
