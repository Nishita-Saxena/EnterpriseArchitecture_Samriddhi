---
title: Data Architecture
description: Service-owned, polyglot data architecture for the Samriddhi platform.
order: 9
category: architecture-definition
image: /images/data_arc.png
status: Review
version: 1.0
---
# Data Architecture Overview

The Samriddhi data architecture is built on three principles: **data minimization, service ownership, and polyglot persistence**.

Each application service owns and manages its data independently throughout its lifecycle. Direct database access between services is prohibited; all cross-service communication occurs through secured APIs.

A polyglot persistence approach is adopted to ensure that each data type is stored in the technology best suited to its access and performance requirements. Transactional and master data are maintained in PostgreSQL, IoT telemetry is stored in InfluxDB, evidence files are stored in AWS S3, and legally significant records are preserved in Hyperledger Fabric.

This architecture improves scalability, security, resilience, and regulatory compliance while supporting future platform growth.

---

## Data Storage Strategy

The platform separates operational, analytical, evidence, and immutable records into dedicated repositories.
<div class="table-wrapper">

| Data Type | Storage Platform | Purpose |
|------------|-----------------|---------|
| Transactional Data | PostgreSQL | Core business records |
| Cache Layer | Redis | Frequently accessed operational data |
| Evidence Files | AWS S3 | Photos, videos and documents |
| IoT Telemetry | InfluxDB | Sensor telemetry |
| Immutable Records | Hyperledger Fabric | Legal audit records |

</div>

## Data Ownership Model

The architecture follows a service-owned data model.

Each service is responsible for:

* Data creation and maintenance
* Data quality management
* Retention policy enforcement
* Access control management

Examples include:

* Incident Management Service → Incident Records
* Vendor Marketplace Service → Vendor Profiles
* Compliance Tracker Service → Compliance Schedules
* Insurance Integration Service → Claim Evidence Packages

No service may directly access or modify another service's database.

---

## Data Lifecycle

The Incident Record serves as the primary business data entity.

The lifecycle begins when a resident submits an incident through the mobile application. Supporting evidence is stored in AWS S3 and linked through metadata maintained within the Incident Management Service.

For incidents requiring legal traceability, evidence hashes and selected metadata are recorded in Hyperledger Fabric to establish an immutable audit record.

Throughout the lifecycle, incident updates, vendor assignments, compliance activities, and resident feedback are captured until closure.

Closed incidents are retained for seven years in accordance with operational and legal retention requirements.

---

## Security and Privacy Controls

Security and privacy controls are embedded throughout the data architecture.

Key controls include:

* AES-256 encryption for stored files
* Role-based access control (RBAC)
* NCRID anonymization
* Blockchain hashing for sensitive identity references
* Data residency within India
* Retention-based data deletion
* Explicit consent management aligned with DPDPA 2023

Access to personal data is governed according to business responsibilities and authorized stakeholder roles.
