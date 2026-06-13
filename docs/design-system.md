# Design System

## Product Character
The visual language must communicate:
- Professional architecture review portal
- Enterprise architecture repository
- Architecture governance workspace

The interface must feel authoritative, structured, and review-oriented. It should not resemble a marketing site or a casual dashboard.

## Visual Direction
Use:
- Clean typography
- Light theme
- Navy accents
- Neutral gray surfaces
- Responsive layout
- Architecture-first presentation

Allow:
- Subtle transitions
- Sidebar animations
- Diagram zooming
- Hover interactions

Avoid:
- Marketing style layouts
- Excessive gradients
- Heavy animations
- Auto-generated architecture summaries
- Decorative visual noise

## Design Principles
- Prioritise content readability over visual embellishment.
- Keep diagrams prominent and easy to inspect.
- Maintain stable layout patterns across all architecture pages.
- Use spacing and hierarchy to support long-form documentation.
- Ensure the experience works as a review workspace, not a brochure.

## Behavioural Expectations
- Transitions should support orientation, not attract attention.
- Sidebar interactions should help reviewers move quickly across sections.
- Diagram viewing should support close inspection without leaving the page.
- Reviewers should be able to scan metadata, diagram, and content in a predictable sequence.

---------------

## Information Architecture Principles

The portal is an architecture review workspace where information is consumed sequentially and hierarchically.

Reviewers should be able to:

* Understand the architecture structure immediately.
* Navigate between architecture domains quickly.
* Locate diagrams with minimal effort.
* Move between related artifacts without losing context.

Navigation should always be visible and predictable.

Architecture content must remain the primary focus of every page.

---

## Layout Standards

Desktop is the primary review experience.

Preferred layout:

* Persistent left navigation sidebar.
* Fixed or sticky top header.
* Central content area.
* Wide diagram display region.
* Optional right-side Table of Contents for long documents.

Maximum content width should prioritize readability of architecture documentation while allowing diagrams to be viewed at large sizes.

Whitespace should be used to improve comprehension rather than visual decoration.

---

## Typography Standards

Typography should support long-form technical reading.

Guidelines:

* Clear visual distinction between heading levels.
* Comfortable line length for documentation.
* Consistent spacing between sections.
* Strong hierarchy for architecture artifacts.

Markdown heading structure must be preserved exactly as authored.

Typography should never alter or reinterpret document structure.

---

## Diagram Presentation Standards

Architecture diagrams are primary review artifacts.

Requirements:

* Display diagrams before document content.
* Support zooming and fullscreen viewing.
* Preserve original image quality.
* Maintain aspect ratio.
* Avoid cropping architecture diagrams.

Diagrams should be immediately visible without requiring additional navigation.

---

## Metadata Standards

Each architecture document should display:

* Document Title
* Category
* Version
* Status

Metadata should be visible before the architecture content begins.

Metadata presentation should remain consistent across all pages.

---

## Navigation Standards

The navigation hierarchy must mirror the approved architecture structure.

Requirements:

* Active page highlighting.
* Expandable navigation groups.
* Previous and next document navigation.
* Breadcrumb navigation.
* Consistent ordering across all views.

Navigation should be generated from document metadata wherever possible.

Hardcoded navigation structures should be avoided.

---

## Search Experience

Search should support architecture discovery rather than generic website search.

Searchable content includes:

* Document titles
* Headings
* Metadata
* Markdown content

Search results should link directly to the relevant architecture artifact.

Search must never generate AI-created summaries of content.

---

## Accessibility Standards

The portal should support:

* Keyboard navigation
* Visible focus states
* Responsive layouts
* Screen-reader friendly navigation
* Sufficient contrast ratios

Accessibility improvements must not alter architecture content.

---

## Responsive Behaviour

Desktop review experience is the highest priority.

Behaviour by device type:

Desktop:

* Full sidebar navigation
* Wide diagram presentation
* Optional Table of Contents

Tablet:

* Collapsible sidebar
* Optimized content width

Mobile:

* Basic viewing support
* Simplified navigation
* Full content accessibility

The mobile experience should preserve architecture readability rather than replicate desktop functionality.

---

## User Experience Priorities

When design trade-offs occur, prioritize in the following order:

1. Architecture content integrity
2. Diagram visibility
3. Navigation clarity
4. Readability
5. Accessibility
6. Visual aesthetics
7. Animations and enhancements

The architecture itself is the product. The interface exists only to support understanding, review, and governance of architecture artifacts.
