4. Domain-Wise Gap Analysis:

4.1 Business Domain
As-Is: RWA operations are entirely informal, driven by WhatsApp messages and personal judgment. There are no standard processes, no SLA agreements with vendors, and no structured incident lifecycle management.
To-Be: Samriddhi introduces formal governance with documented workflows, SLA-backed vendor contracts, and a transparent incident lifecycle that every resident can track.
Gap: The absence of formal governance, structured workflows, and any form of vendor accountability.

4.2 Data Domain
As-Is: Data is scattered across personal chats, paper registers, and informal spreadsheets. There is no standard data model, no incident history, and 34% of societies cannot produce records for legal or insurance purposes.
To-Be: A canonical data model with a National Community Resident ID as the unique master identifier for all 720,000 citizens in the pilot. All data is structured, traceable, and auditable.
Gap: No master data management, no data standards, and no historical repository for incidents or compliance records.

4.3 Application Domain
As-Is: There is no application designed for housing society management. Residents and RWAs use personal messaging apps, email, and paper forms for everything from complaints to maintenance requests.
To-Be: An integrated platform with dedicated modules for Incident Management, Resident Engagement, Vendor Management, and Compliance Tracking, accessible on both web and mobile.
Gap: A complete absence of purpose-built software, resulting in unreliable, untraceable processes.

4.4 Technology Domain
As-Is: There are no IoT sensors, no predictive models, and no real-time data infrastructure. Societies can only react to problems after they occur, which is expensive and ineffective.
To-Be: IoT sensors for water, air quality, power, and vibration are connected to TensorFlow-based AI models via Apache Kafka event streaming. The system provides 4 to 6 hour advance warnings for potential incidents.
Gap: Zero smart infrastructure; entirely reactive maintenance model with no predictive capability.

4.5 Security Domain
As-Is: There are no security controls, no identity management, and no data protection policies. Resident data, where it exists, is stored without any encryption or access restrictions.
To-Be: A Zero Trust security architecture using Keycloak for federated identity management, Splunk SIEM for threat monitoring, AES-256 encryption, and ISO 27001-aligned governance with granular resident consent controls.
Gap: A complete absence of security architecture, creating serious privacy risks and regulatory non-compliance.

4.6 Integration Domain
As-Is: Societies operate in complete isolation from municipal authorities, insurance providers, and external service systems. This isolation causes 43% of insurance claims to be rejected and prevents any regulatory reporting.
To-Be: RESTful APIs and SOAP adapters connect Samriddhi to municipal digital portals, insurance providers, and vendor platforms. Blockchain evidence ensures claims are automatically verified and submitted.
Gap: No external system integration of any kind, resulting in costly insurance rejections, compliance failures, and zero visibility for city authorities.

