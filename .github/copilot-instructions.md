# Samriddhi Enterprise Architecture Portal - Copilot Instructions

## Project Context

This repository contains the Enterprise Architecture documentation for the Samriddhi Platform.

The website is intended for:

* Enterprise Architects
* Solution Architects
* Architecture Review Board members
* Municipal stakeholders
* PMC executives
* Programme sponsors

This website is an Architecture Review Portal.

It is not a marketing website.

It is not a SaaS landing page.

It is not a blog.

The purpose of the website is to present approved architecture artifacts in a professional, structured, and review-friendly format.

---

# Architecture Review Portal Objective

The architecture content is the primary asset.

The architecture diagrams are the most important artifacts.

The markdown documents are the authoritative source of truth.

The user interface exists only to improve:

* Readability
* Navigation
* Review efficiency
* Content discoverability

When making implementation decisions:

1. Preserve architecture content.
2. Preserve architecture diagrams.
3. Improve navigation.
4. Improve readability.
5. Maintain professional presentation.
6. Avoid unnecessary visual complexity.

---

# Content Protection Rules

All markdown files located in:

src/content/

are authoritative architecture documents.

AI must NEVER:

* Rewrite content
* Summarize content
* Expand content
* Rephrase content
* Simplify content
* Correct architecture wording
* Generate replacement content
* Merge sections
* Remove sections
* Modify architecture decisions

AI may ONLY:

* Render content
* Format content
* Create layouts
* Create navigation
* Create styling
* Create interactions
* Improve presentation

Content changes require explicit user approval.

---

# Repository Structure

Content:

src/content/

Architecture diagrams:

public/images/

Pages:

src/pages/

Reusable UI:

src/components/

Never hardcode architecture content inside Astro components.

Always render content from markdown files.

---

# Website Structure

The navigation hierarchy must follow this order:

Home

Executive Summary

Architecture Vision

* Problem Analysis
* Stakeholder Analysis
* Architecture Principles
* Capability Map

Architecture Definition

* As-Is Architecture
* To-Be Architecture
* Data Architecture
* Application Architecture
* Integration Architecture
* Technology Architecture
* Security Architecture

Architecture Governance

* ADRs
* Governance Model
* Risk Register
* Benefits Realisation Plan

Implementation

* Gap Analysis
* Implementation Roadmap
* Success Metrics

Maintain this navigation order consistently.

---

# Diagram Mapping

Each architecture page must automatically display its associated diagram.

Mapping:

stakeholder_analysis.md
→ stakeholder_interaction.jpeg

problem_analysis.md
→ no diagram

principles.md
→ no diagram

Summary.md
→ no diagram

data_architecture.md
→ data_arc.png

application_architecture.md
→ application_arc.png

integration_architecture.md
→ integration_arc.png

technology_architecture.md
→ technology_arc.png

security_architecture.md
→ security_arc.png

ADR.md
→ no diagram

governance_model.md
→ no diagram

risk_register.md
→ no diagram

benefits_realisation_plan.md
→ no diagram

implementation_roadmap.md
→ no diagram

gap_analysis.md
→ no diagram

Capability Map
→ CapabilityMap.jpeg

Business Architecture
→ business_process.jpeg

As-Is Architecture
→ as_is_arc.png

To-Be Architecture
→ to_be_arc.png

Architecture diagrams should always appear before document content.

---

# Page Layout Standard

Every architecture page must use the same structure:

1. Page Title

2. Metadata Bar

* Document Type
* Version
* Status

3. Architecture Diagram
   (if available)

4. Architecture Content
   (rendered from markdown)

5. Previous / Next Navigation

Consistency across all pages is mandatory.

---

# Design Principles

The portal should feel like:

* Enterprise Architecture Repository
* Consulting Deliverable
* Government Digital Architecture Portal
* Architecture Review Workspace

The portal should NOT feel like:

* Startup landing page
* Product marketing site
* Portfolio website
* Blog

---

# Visual Design

Use:

* Clean typography
* Professional spacing
* Responsive layout
* Subtle visual hierarchy
* Professional colour palette

Preferred colours:

* White backgrounds
* Light gray surfaces
* Navy accents
* Neutral text colours

Avoid:

* Excessive gradients
* Bright colours
* Large hero banners
* Overly decorative effects

---

# Interaction Guidelines

Small professional interactions are encouraged.

Allowed:

* Smooth page transitions
* Sidebar expand/collapse
* Hover states
* Diagram zoom and fullscreen view
* Scroll progress indicator
* Smooth anchor navigation
* Copy link functionality

Avoid:

* Parallax effects
* Auto-playing animations
* Excessive motion
* Distracting transitions

The architecture must remain the focus.

---

# Component Design Rules

Components must be reusable.

Preferred components:

Layout/

* MainLayout
* Sidebar
* Header

Architecture/

* ArchitecturePage
* DiagramViewer
* MarkdownRenderer
* MetadataBar

Navigation/

* SidebarNavigation
* PreviousNextNavigation
* Breadcrumbs

Shared/

* Card
* Badge
* Section

Avoid page-specific components whenever possible.

---

# Technical Standards

Use:

* Astro
* TypeScript
* Markdown-driven content
* Static content rendering
* Reusable components

Prefer composition over duplication.

Prefer maintainable code over clever code.

Keep architecture and presentation concerns separated.

---

# Content Rendering Rules

Render markdown exactly as written.

Do not alter headings.

Do not inject AI-generated summaries.

Do not generate architecture interpretations.

Do not infer missing content.

Missing content should remain missing until explicitly provided by the user.

---

# Responsiveness

Support:

* Desktop architecture review experience (primary)
* Tablet experience (secondary)
* Mobile viewing (basic support)

Desktop readability is the highest priority.

---

# Development Behaviour

Before creating new components:

1. Check for reusable alternatives.
2. Maintain consistency with existing layouts.
3. Preserve architecture content integrity.
4. Follow the navigation hierarchy.
5. Keep diagrams prominent.
6. Prioritize readability over visual effects.

The objective is to create a professional Enterprise Architecture Review Portal suitable for executive review and architecture governance discussions.
