---
title: Risk Register
description: Programme risks, scores, and mitigation actions for Samriddhi.
order: 16
category: architecture-governance
status: Review
version: 1.0
---

# Risk Register

## Executive Summary

The Samriddhi programme risk register identifies 20 risks across change management, technology, operations, governance, security, integration, and financial management. Risk assessment is based on the standard methodology:

**Risk Score = Likelihood × Impact**

Risk monitoring is governed through the Architecture Review Board (ARB), programme governance processes, and sprint-level reviews.

### Risk Classification

**High Risk (Score 36–63)**
Risks requiring active mitigation and monthly ARB review.

**Medium Risk (Score 16–35)**
Risks requiring continuous monitoring and review during delivery cycles.

No risks currently fall within the Critical category.

---

# High-Priority Risks

## RO1 – Change Management Resistance

**Risk Description**

Residents and RWA executives may resist transitioning from WhatsApp-based processes to the Samriddhi platform, resulting in slower adoption.

**Risk Score**

Likelihood: 7

Impact: 8

Score: 56

**Mitigation Actions**

* Execute phased deployment through early-adopter societies.
* Provide onboarding incentives and adoption programmes.
* Deliver targeted training for residents and society administrators.
* Promote successful pilot outcomes to encourage participation.

**Owner**

Community Manager / Change Lead

---

## RO2 – Digital Literacy Challenges

**Risk Description**

A portion of residents, particularly senior citizens, may face difficulties using digital services.

**Risk Score**

Likelihood: 7

Impact: 7

Score: 49

**Mitigation Actions**

* Introduce voice-enabled capabilities.
* Provide multilingual support.
* Conduct assisted onboarding sessions.
* Simplify user interfaces for frequently used services.

**Owner**

UX Lead / Training Team

---

## RO3 – Municipal Integration Delays

**Risk Description**

Delays in municipal API availability may affect automated compliance and insurance processing capabilities.

**Risk Score**

Likelihood: 6

Impact: 8

Score: 48

**Mitigation Actions**

* Establish manual fallback processes.
* Prioritise high-value integrations.
* Engage municipal technology teams during the foundation phase.

**Owner**

Integration Architect

---

## RO4 – Blockchain Scalability

**Risk Description**

Using blockchain for all operational transactions may create scalability and performance constraints.

**Risk Score**

Likelihood: 6

Impact: 7

Score: 42

**Mitigation Actions**

* Restrict blockchain usage to legal and insurance evidence records.
* Store operational transactions in conventional databases.
* Implement a hybrid data architecture.

**Owner**

Data Architect

---

## RO7 – Budget Overrun

**Risk Description**

The fixed programme budget may be affected by scope expansion or unexpected cost increases.

**Risk Score**

Likelihood: 5

Impact: 8

Score: 40

**Mitigation Actions**

* Apply MoSCoW prioritisation.
* Deliver functionality incrementally.
* Maintain contingency reserves.

**Owner**

Project Manager

---

## RO8 – Schedule Pressure

**Risk Description**

Delivery timelines may encourage teams to reduce testing, security validation, or quality assurance activities.

**Risk Score**

Likelihood: 6

Impact: 8

Score: 48

**Mitigation Actions**

* Implement automated testing pipelines.
* Apply security-by-design principles.
* Conduct dedicated quality assurance cycles.
* Perform monthly architecture reviews.

**Owner**

Project Manager / QA Lead

---

## R10 – Integration Complexity

**Risk Description**

Heterogeneous legacy systems across housing societies, PMCs, and municipal bodies may create integration challenges.

**Risk Score**

Likelihood: 6

Impact: 7

Score: 42

**Mitigation Actions**

* Standardise API contracts.
* Use adapter patterns for legacy systems.
* Execute end-to-end integration testing.

**Owner**

Integration Architect / Security Architect

---

## R11 – Cybersecurity Breach

**Risk Description**

Compromise of resident identity data or core platform services could result in legal, regulatory, and reputational impacts.

**Risk Score**

Likelihood: 4

Impact: 10

Score: 40

**Mitigation Actions**

* Implement Zero Trust architecture.
* Deploy SIEM monitoring.
* Conduct quarterly penetration testing.
* Encrypt sensitive data.
* Secure secrets management infrastructure.

**Owner**

Chief Information Security Officer (CISO)

---

# Medium-Priority Risks

## RO5 – Vendor Onboarding Resistance

Facility vendors may resist transaction fees or SLA-driven performance monitoring.

**Score:** 36

**Mitigation:** Competitive pricing models, phased onboarding, and demonstration of business value.

**Owner:** Vendor Relations Manager

---

## RO6 – Data Privacy Concerns

Residents may hesitate to share information due to concerns regarding privacy and misuse of personal data.

**Score:** 35

**Mitigation:** Consent management, data anonymisation, transparent policies, and ISO 27001 alignment.

**Owner:** Privacy Officer / Legal

---

## RO9 – Monsoon Deployment Constraints

Weather conditions may delay IoT deployment and outdoor field activities.

**Score:** 35

**Mitigation:** Advance procurement, seasonal deployment planning, and prioritisation of indoor activities during monsoon periods.

**Owner:** Infrastructure Lead

---

## R12 – IoT Sensor Failure

Sensor malfunctions may generate inaccurate operational alerts.

**Score:** 30

**Mitigation:** Redundant sensors, anomaly detection mechanisms, and preventive maintenance schedules.

**Owner:** IoT / Infrastructure Lead

---

## R13 – AI Model Inaccuracy

Predictive maintenance models may generate false positives or false negatives.

**Score:** 30

**Mitigation:** Continuous model tuning and human validation of critical recommendations.

**Owner:** Data Science Lead

---

## R14 – Regulatory Changes

Changes to municipal, privacy, or governance regulations may require platform modifications.

**Score:** 21

**Mitigation:** Modular compliance architecture, legal monitoring, and periodic regulatory reviews.

**Owner:** Compliance Officer / Legal

---

## R15 – Stakeholder Misalignment

Differences in priorities among RWAs, PMCs, and municipal authorities may delay decisions.

**Score:** 35

**Mitigation:** Governance through the Architecture Review Board and formal data governance agreements.

**Owner:** Programme Sponsor / Enterprise Architecture Lead

---

## R16 – Scope Creep

Additional feature requests during implementation may impact delivery timelines.

**Score:** 36

**Mitigation:** Formal change control, ARB review process, and MoSCoW prioritisation.

**Owner:** Project Manager

---

## R18 – Vendor Lock-In

Dependence on a single cloud provider may increase long-term operational risk.

**Score:** 24

**Mitigation:** Multi-cloud deployment strategy, containerisation, and Kubernetes-based portability.

**Owner:** Cloud Architect

---

## R19 – Insurance Integration Delays

Insurance provider technical limitations may delay automated claim processing.

**Score:** 35

**Mitigation:** Prioritise digital-first insurers, maintain manual fallback processes, and demonstrate business value.

**Owner:** Business Analyst / Partnerships Lead

---

## R20 – Network Instability

Legacy infrastructure in residential communities may affect connectivity and IoT communications.

**Score:** 36

**Mitigation:** Offline-first capabilities, data compression mechanisms, and ISP partnerships.

**Owner:** Infrastructure Lead / UX Lead

---

# Governance and Monitoring

Risk governance is integrated into programme delivery through the following controls:

* Monthly Architecture Review Board reviews for all high-priority risks.
* Sprint-level monitoring and status reporting for medium-priority risks.
* Continuous review of mitigation effectiveness and residual risk exposure.
* Alignment with TOGAF ADM governance, architecture compliance reviews, and programme management controls.
* Maintenance of risk ownership, escalation procedures, and corrective action tracking throughout the implementation lifecycle.
