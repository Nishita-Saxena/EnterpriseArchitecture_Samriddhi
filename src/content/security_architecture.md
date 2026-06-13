Security Architecture
Overview

The Samriddhi Security Architecture protects resident data, financial transactions, blockchain evidence records, and platform services through a Zero Trust security model. Security controls are embedded across identity management, network protection, data encryption, monitoring, secrets management, and regulatory compliance.

The architecture follows the principle of “Never Trust, Always Verify,” ensuring that every user, device, service, and external partner is authenticated, authorized, and continuously monitored before access is granted.

Zero Trust Framework

The platform adopts a Zero Trust security model based on:

Continuous authentication and verification
Least privilege access
Service isolation
Network segmentation
Assume breach design philosophy

Every API request, user session, and service interaction is validated regardless of network location.

Identity and Access Management

Identity management is implemented using Keycloak.

Supported authentication methods include:

Phone OTP for residents
Biometric authentication through mobile devices
Username and password for committee members
MFA using TOTP applications
OAuth 2.0 client credentials for microservices
Mutual TLS for external partners

Role-Based Access Control (RBAC) ensures users and services receive only the permissions required for their responsibilities.

Network Security

Network protection is implemented through:

AWS Security Groups
AWS Web Application Firewall (WAF)
AWS Shield DDoS protection
Private subnet isolation
API Gateway security controls

Application services are inaccessible directly from the internet and all traffic is routed through secured entry points.

Data Protection

Data is protected using encryption both at rest and in transit.

Security controls include:

AES-256 encryption for stored data
TLS 1.3 for network communications
AWS KMS managed encryption keys
Application-level encryption for sensitive personal information
Encrypted IoT communications
Encrypted blockchain communications

Personally identifiable information and financial details receive additional application-level protection.

Secrets Management

HashiCorp Vault is used to manage sensitive credentials including:

Database passwords
API keys
JWT signing secrets
TLS certificates
Service credentials
IoT device certificates

Secrets are never stored in source code or configuration files and are automatically rotated on a defined schedule.

Security Monitoring and Threat Detection

Security monitoring is centralized through Splunk Enterprise Security.

Monitored events include:

Authentication failures
Database access activity
Administrative actions
Data exports
Infrastructure anomalies
Network anomalies
Blockchain transaction activity

Automated response mechanisms support rapid detection and containment of suspicious activity.

Security Testing

The platform includes:

Quarterly penetration testing
Infrastructure security assessments
API security reviews
Application security testing
Social engineering assessments

A responsible disclosure programme is planned for future phases to support external vulnerability reporting.

Compliance and Governance

The architecture aligns with:

ISO 27001
DPDPA 2023
CERT-In reporting requirements
OWASP Top 10 security practices

Compliance controls support consent management, data localization, breach notification, and resident privacy rights.

Security Architecture Decisions

Key architectural decisions include:

Zero Trust over perimeter-based security
Keycloak as the identity platform
Mutual TLS for external integrations
Application-level encryption for sensitive data
HashiCorp Vault for secrets management

These decisions provide a consistent security foundation across all platform components.

Outcome

The Security Architecture establishes a comprehensive defense-in-depth model that combines Zero Trust principles, strong identity controls, encryption, continuous monitoring, and regulatory compliance. This ensures that resident information, operational data, and external integrations remain secure while supporting large-scale platform deployment and future growth.