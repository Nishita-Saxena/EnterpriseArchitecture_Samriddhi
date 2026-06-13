---
title: Technology Architecture
description: Hybrid cloud and infrastructure architecture supporting the Samriddhi platform.
order: 12
category: architecture-definition
image: /images/technology_arc.png
status: Review
version: 1.0
---

# 3.4 Technology Architecture

## Overview

The Samriddhi Technology Architecture provides the infrastructure foundation for application services, data platforms, IoT devices, blockchain workloads, and external integrations.

The architecture is designed around three core principles:

* Resilience
* Scalability
* Security

A hybrid cloud model is adopted, with AWS Mumbai serving as the primary operational environment, Azure Central India providing disaster recovery capabilities, and MeghRaj supporting government-regulated municipal workloads where required.

---

## Cloud Infrastructure

| Platform            | Purpose                                                                          |
| ------------------- | -------------------------------------------------------------------------------- |
| AWS Mumbai          | Primary application hosting, databases, Kubernetes, blockchain, and IoT services |
| Azure Central India | Disaster recovery and backup environment                                         |
| MeghRaj             | Government-regulated municipal data hosting                                      |

---

## Compute Infrastructure

All application services are deployed as Docker containers on AWS Elastic Kubernetes Service (EKS).

Kubernetes provides:

* Automatic scaling
* Self-healing
* Rolling deployments
* Resource management
* High availability

Container images are stored in AWS Elastic Container Registry (ECR).

---

## Database Infrastructure

The platform uses multiple database technologies optimized for specific workloads.

| Technology         | Purpose                        |
| ------------------ | ------------------------------ |
| PostgreSQL         | Transactional data             |
| MongoDB            | Document storage               |
| InfluxDB           | IoT time-series data           |
| Redis              | Caching and session management |
| Hyperledger Fabric | Immutable blockchain records   |

All database platforms are deployed with redundancy, backup, and failover mechanisms to support business continuity.

---

## Network Architecture

The platform operates within a dedicated AWS Virtual Private Cloud (VPC) with segmented network zones:

* Public Subnet
* Private Application Subnet
* Private Data Subnet
* Blockchain Subnet

External traffic is routed through:

* AWS Application Load Balancer
* Kong API Gateway

Supporting services include:

* AWS CloudFront for content delivery
* Route 53 for DNS management and failover routing

---

## IoT Infrastructure

The pilot deployment supports 500 sensors across participating housing societies.

### Sensor Types

* Water Level Sensors
* Vibration Sensors
* Air Quality Sensors
* Power Consumption Sensors

### IoT Platform Capabilities

* Device provisioning
* Firmware updates
* Device health monitoring
* Local buffering during connectivity loss
* Edge anomaly detection

Sensor telemetry is transmitted through Raspberry Pi edge gateways to AWS IoT Core using MQTT over TLS.

---

## Security Controls

Technology-layer security controls include:

* TLS 1.3 encryption
* X.509 certificate-based device authentication
* Network segmentation
* Private subnet isolation
* Managed secrets storage
* Automated backup and recovery

These controls protect infrastructure, communications, and operational data across the platform.

---

## Disaster Recovery

### Recovery Objectives

| Metric                         | Target  |
| ------------------------------ | ------- |
| Recovery Time Objective (RTO)  | 4 Hours |
| Recovery Point Objective (RPO) | 1 Hour  |

### Recovery Mechanisms

* Hourly database replication to Azure
* AWS Multi-AZ database failover
* Kubernetes pod self-recovery
* Route 53 DNS failover

These capabilities support service continuity during infrastructure failures and regional outages.

---

## Summary

The technology architecture establishes a secure, scalable, and resilient infrastructure foundation capable of supporting platform operations, IoT services, blockchain workloads, and future expansion while maintaining high availability and disaster recovery readiness.
