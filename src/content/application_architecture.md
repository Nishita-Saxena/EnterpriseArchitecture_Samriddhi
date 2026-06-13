---
title: Application Architecture
description: Microservices-based application architecture for the Samriddhi platform.
order: 10
category: architecture-definition
image: /images/application_arc.png
status: Review
version: 1.0
---

Application Architecture Overview

The Samriddhi application architecture follows a microservices-based, API-first design that enables independent deployment, scalability, and operational resilience. Each application service owns its business capability and communicates with other services exclusively through APIs and event-driven interactions.

The architecture is structured around three primary layers:

Application Interfaces Layer
Application Services Layer
Application Components Layer

Supporting capabilities such as identity management, event streaming, notifications, and API management are shared across the platform to ensure consistency, security, and interoperability.

The architecture is designed to support large-scale deployment across multiple housing societies while maintaining loose coupling between services and minimizing operational dependencies.

Architectural Principles

The application architecture is governed by the following principles:

Microservices First

Each business capability is implemented as an independently deployable service with clearly defined responsibilities.

API-Driven Communication

All service-to-service communication occurs through published APIs or event streams. Direct database access between services is prohibited.

Event-Driven Integration

Business events are published through a centralized event backbone, enabling asynchronous processing and reducing service dependencies.

Security by Design

Authentication, authorization, and identity management are centralized through the NCRID identity platform and API Gateway.

Resilience and Scalability

Failure of a single service does not prevent operation of other platform capabilities.

Application Interface Layer

The Application Interface Layer provides the interaction channels used by residents, committee members, vendors, insurance providers, municipal authorities, and external systems.

The primary interfaces are:

Resident Mobile Application
RWA Committee Dashboard
Vendor Mobile Application
Municipal Officer Portal
Insurance Provider Portal
Public APIs

These interfaces expose platform functionality through role-specific user experiences while relying on common backend services for business processing.

The Resident Mobile Application serves as the primary engagement channel for residents, enabling complaint submission, incident tracking, notifications, and community communication.

The RWA Committee Dashboard provides operational oversight, vendor management, compliance monitoring, analytics, and administrative controls.

External stakeholders such as municipal authorities and insurance providers access platform capabilities through dedicated portals and secured APIs.

Application Services Layer

The Application Services Layer contains the core business capabilities of the platform.

Incident Management Service

The Incident Management Service acts as the central operational capability of the platform. It manages the complete incident lifecycle including complaint registration, evidence management, SLA tracking, escalation management, and closure workflows.

The service also initiates blockchain registration for high-value incidents and publishes operational events for downstream consumers.

Vendor Marketplace Service

The Vendor Marketplace Service manages vendor onboarding, job allocation, bidding, SLA monitoring, performance scoring, and payment coordination.

The service supports a marketplace model where societies can engage verified vendors while continuously monitoring service quality and compliance.

Compliance Tracker Service

The Compliance Tracker Service automates regulatory compliance management for housing societies.

It maintains compliance schedules, generates reminders, tracks required documentation, and assembles evidence packages used for audits, legal proceedings, and insurance claims.

IoT Intelligence Service

The IoT Intelligence Service processes sensor telemetry received from deployed monitoring devices.

Using stream processing and predictive analytics models, the service identifies anomalies and generates predictive maintenance alerts before operational failures occur. Generated alerts may automatically create incidents within the Incident Management Service.

Blockchain Evidence Service

The Blockchain Evidence Service provides immutable evidence management for high-value incidents.

The service records cryptographic evidence references on a permissioned blockchain and supports independent verification by insurance providers, municipal authorities, and legal entities.

NCRID Identity Service

The National Community Resident ID (NCRID) Service provides federated identity management across the platform.

The service manages authentication, authorization, role assignment, consent management, and privacy-preserving identity propagation across application services.

Notification Service

The Notification Service centralizes all outbound communications.

Notifications are delivered through multiple channels including push notifications, SMS, email, and WhatsApp, ensuring stakeholders receive timely operational updates.

API Gateway Service

The API Gateway acts as the single entry point into the platform.

It provides request routing, authentication validation, rate limiting, API versioning, logging, and security enforcement for all external requests.

Event-Driven Collaboration Model

Application services collaborate through an event-driven architecture implemented using Apache Kafka.

Key business events include:

INCIDENT_CREATED
VENDOR_ASSIGNED
SLA_BREACHED
PREDICTIVE_ALERT
INCIDENT_CLOSED
NOTIFICATION_REQUESTED

This model enables asynchronous communication between services while reducing runtime dependencies and improving system resilience.

For example, incident creation events generated by the Incident Management Service are consumed by the Notification Service to distribute updates, while predictive alerts generated by the IoT Intelligence Service can automatically initiate incident workflows.

Application Components

Application services are realized by dedicated software components responsible for implementing business functionality.

Major components include:

Incident Management Component
Vendor Marketplace Component
Compliance Tracker Component
IoT Intelligence Component
Blockchain Registry Component
NCRID Component
Notification Component
API Gateway Component

Each component encapsulates its own business logic, technology stack, deployment lifecycle, and operational responsibilities.

This separation supports independent development, testing, deployment, and scaling of platform capabilities.

Security and Access Management

Security controls are applied consistently across all application services.

Key controls include:

OAuth 2.0 and OpenID Connect authentication.
JWT-based authorization.
Role-based access control.
Multi-factor authentication for privileged users.
TLS-secured communications.
API Gateway enforcement of security policies.
Consent-driven identity management through NCRID.

These controls ensure that users, vendors, municipal authorities, and insurance providers access only information relevant to their assigned responsibilities.

Application Collaboration Summary

The Samriddhi application architecture establishes a modular and service-oriented platform that integrates incident management, vendor coordination, compliance monitoring, predictive maintenance, identity management, and stakeholder communication within a unified ecosystem.

By combining API-first communication, event-driven integration, federated identity management, and independently deployable services, the architecture provides the foundation required to support large-scale deployment while maintaining operational resilience, security, and extensibility.
