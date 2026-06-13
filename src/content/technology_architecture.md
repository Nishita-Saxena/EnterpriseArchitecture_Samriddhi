3.4 Technology Architecture
Overview

The Samriddhi Technology Architecture provides the infrastructure required to support application services, data platforms, IoT devices, and external integrations. The architecture is designed around three principles: resilience, scalability, and security.

A hybrid cloud deployment model is adopted, with AWS Mumbai serving as the primary operational environment, Azure Central India providing disaster recovery capabilities, and MeghRaj supporting government-regulated municipal data where required.

Cloud Infrastructure

AWS serves as the primary cloud platform for application hosting, databases, Kubernetes orchestration, blockchain services, and IoT management.

Azure is used for disaster recovery and backup operations.

MeghRaj is reserved for sensitive municipal compliance data subject to government hosting requirements.

Compute Infrastructure

All application services are deployed as Docker containers on Kubernetes using AWS Elastic Kubernetes Service (EKS).

Kubernetes provides:

Automatic scaling
Self-healing
Rolling deployments
Resource management
High availability

Container images are stored in AWS Elastic Container Registry (ECR).

Database Infrastructure

The platform uses multiple database technologies optimized for specific workloads:

PostgreSQL for transactional data
MongoDB for flexible document storage
InfluxDB for IoT time-series data
Redis for caching and session management
Hyperledger Fabric for immutable blockchain records

Database services are deployed with redundancy, backup, and failover mechanisms to support business continuity.

Network Architecture

The platform operates within a dedicated AWS Virtual Private Cloud (VPC) with network segmentation across:

Public Subnet
Private Application Subnet
Private Data Subnet
Blockchain Subnet

External traffic enters through AWS Application Load Balancer and Kong API Gateway.

AWS CloudFront accelerates content delivery, while Route 53 provides DNS management and failover routing.

IoT Infrastructure

The IoT platform manages 500 sensors across pilot societies.

Components include:

Water level sensors
Vibration sensors
Air quality sensors
Power consumption sensors

Sensor data is transmitted through Raspberry Pi edge gateways to AWS IoT Core using MQTT over TLS.

The platform supports:

Device provisioning
Firmware updates
Device health monitoring
Local buffering during connectivity loss
Edge anomaly detection
Security Controls

Technology-layer security includes:

TLS 1.3 encryption
X.509 certificate-based device authentication
Network segmentation
Private subnet isolation
Managed secrets storage
Automated backup and recovery

These controls protect infrastructure, communications, and operational data.

Disaster Recovery

The disaster recovery strategy targets:

Recovery Time Objective (RTO): 4 hours
Recovery Point Objective (RPO): 1 hour

Key recovery mechanisms include:

Hourly database replication to Azure
AWS Multi-AZ database failover
Kubernetes pod self-recovery
DNS failover through Route 53

These capabilities ensure service continuity during infrastructure failures or regional outages.

Outcome

The Technology Architecture provides a secure, scalable, and resilient infrastructure foundation capable of supporting platform operations, IoT services, blockchain workloads, and future expansion across housing societies while maintaining high availability and disaster recovery readiness.