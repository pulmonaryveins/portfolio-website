# Vince Bryant Cabunilas — Portfolio Redesign & CMS Roadmap

## Project Goal

This document defines the implementation plan for the next major version of Vince Bryant Cabunilas' portfolio website.

The project will **not** be rebuilt all at once.

Work must be completed in controlled phases so that architecture, UI, functionality, and future CMS features remain maintainable and easy to debug.

The overall order is:

```text
PHASE 1 — SCAFFOLDING / ARCHITECTURE RESTRUCTURE
                    ↓
PHASE 2 — UI / UX REDESIGN
                    ↓
PHASE 3 — CMS / CRUD FOUNDATION
                    ↓
PHASE 4 — ADMIN DASHBOARD + CONTENT MANAGEMENT
                    ↓
PHASE 5 — FINAL QA / PERFORMANCE / DEPLOYMENT
```

Do **not** skip ahead to later phases unless the current phase is complete and the project builds successfully.

---

# Current Technical Foundation

The existing portfolio uses:

- React 19
- TypeScript — strict mode
- Vite 7
- Tailwind CSS 3
- Framer Motion
- lucide-react
- react-icons
- clsx + tailwind-merge
- React Context for theme management
- Vercel deployment

The public portfolio is currently a single-page application using anchor-linked sections.

Existing content is primarily stored in:

```text
src/data/
src/types/
src/config/
```

These files currently act as the content/data layer underneath the presentation layer.

---

# Core Development Rule

Every phase must leave the application in a working state.

After meaningful implementation work, validate with:

```bash
npm run build
```

and the project's lint command if available.

Do not knowingly leave:

- TypeScript errors
- broken imports
- ESLint errors
- dead components
- duplicate implementations
- broken responsive layouts
- console errors
- unfinished temporary architecture

Avoid large uncontrolled rewrites.

---

# PHASE 1 — Scaffolding & Architecture Restructure

## Objective

Prepare the existing React project for a major UI redesign and later CMS integration **without redesigning the visible website yet**.

The existing portfolio should remain visually and functionally close to the current version during this phase.

## Main Goals

Restructure the presentation layer into clearer responsibilities such as:

```text
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── motion/
│   └── features/
│
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Projects/
│   ├── Design/
│   ├── Experience/
│   ├── Certificates/
│   └── Contact/
│
├── motion/
├── styles/
├── data/
├── config/
├── types/
├── context/
├── hooks/
├── lib/
├── App.tsx
└── main.tsx
```

The exact folder structure may be adjusted based on the actual repository. Do not create abstractions purely to match this diagram.

## Phase 1 Tasks

### 1. Audit the current codebase

Review:

- component responsibilities
- repeated Tailwind patterns
- repeated animation configurations
- duplicated modal behavior
- section complexity
- accessibility issues
- unnecessary dependencies
- performance concerns

### 2. Establish reusable UI primitives

Where genuinely useful, introduce components such as:

- Container
- SectionHeading
- Button
- IconButton
- Badge
- Modal foundation
- ImageGallery

Generic UI components must remain content-agnostic.

### 3. Separate feature components

Feature-specific components should live near their domain.

Examples:

```text
components/features/projects/
components/features/design/
components/features/certificates/
```

Examples of feature components:

- ProjectCard
- ProjectModal
- DesignCard
- DesignModal
- CertificateCard
- CertificateModal

### 4. Centralize motion behavior

Create a small reusable Framer Motion system for:

- easing
- durations
- fade
- fade-up
- scale
- stagger
- viewport reveal settings
- reduced-motion behavior

Do not over-abstract animations that are truly section-specific.

### 5. Establish design tokens

Prepare semantic tokens for concepts such as:

- background
- foreground
- surfaces
- muted text
- borders
- radius
- section spacing
- container widths

This is preparation for the redesign, not the redesign itself.

### 6. Consolidate shared modal infrastructure

Project, Design, and Certificate modals should reuse generic modal behavior where practical while keeping feature-specific content separate.

### 7. Preserve the existing content layer

Do not unnecessarily rewrite:

```text
src/data/
src/types/
src/config/
```

The future CMS will eventually replace portions of the static content source, so presentation components should not become tightly coupled to the current static files.

## Phase 1 Completion Criteria

Phase 1 is complete when:

- architecture is cleaner
- duplicated presentation logic has been reduced
- reusable primitives exist where useful
- motion rules are more consistent
- design tokens are available
- current functionality remains intact
- responsive behavior remains intact
- dark mode still works
- build succeeds
- lint succeeds

Only then proceed to Phase 2.

---


# UI / Visual Direction Reference

## Primary Reference

The primary UI inspiration for the redesign is:

**Bryl Lim — https://bryllim.com/**

This reference is being used for its overall design philosophy:

- simple and direct presentation
- strong content hierarchy
- clean typography
- minimal visual clutter
- compact, intentional layouts
- restrained UI chrome
- clear separation between sections
- portfolio work remains the main focus
- subtle interactions rather than animation-heavy presentation

The portfolio must **not** become a copy of bryllim.com.

Do not reproduce its exact:

- layout
- navigation
- spacing
- section compositions
- typography
- project cards
- interactions
- visual details
- content organization

Instead, use the reference to establish a similarly disciplined level of simplicity while creating a distinct visual identity for Vince's portfolio.

## Vince Portfolio Art Direction

The redesigned portfolio should feel:

```text
SIMPLE
DIRECT
CLEAN
BLOCKY
STRUCTURED
MODERN
CREATIVE
PROFESSIONAL
```

The design should lean toward a subtle **blocky / editorial / modular** visual language.

Use clear rectangular regions, deliberate alignment, strong typography, simple borders, controlled spacing, and straightforward hierarchy.

Avoid making the website feel like:

- a generic SaaS landing page
- a dashboard
- a template marketplace portfolio
- a glassmorphism showcase
- a futuristic neon interface
- an overly cinematic experience
- an animation demo

The work itself should remain the strongest visual element.

## Color Direction

The redesign must use a strict neutral light/dark system.

### Light theme

Primarily:

- white / off-white backgrounds
- black / near-black text
- neutral gray secondary text
- subtle gray borders and surfaces

### Dark theme

Primarily:

- black / near-black backgrounds
- white / off-white text
- neutral gray secondary text
- subtle dark-gray borders and surfaces

### Important

**Do not use gradient backgrounds.**

The current portfolio uses gradient treatments; the redesign should move away from them.

Also avoid decorative gradients on:

- page backgrounds
- cards
- buttons
- section backgrounds
- navigation
- overlays

Color may still appear naturally inside project artwork, screenshots, videos, brand/tool icons, and other portfolio media.

The surrounding interface should remain predominantly neutral.

## Typography Direction

Typography should be clean, highly readable, and slightly blocky/structural.

Prefer a modern sans-serif or grotesk-style typeface with:

- strong headings
- compact labels
- clear weight contrast
- readable body copy
- clean numerals
- good lowercase readability
- strong alignment in grid-based layouts

Avoid:

- decorative display fonts
- handwritten fonts
- overly futuristic fonts
- excessive font-family mixing

Prefer one primary family, with a second font only if there is a clear functional reason.

Typography should create much of the site's personality instead of relying on gradients or excessive effects.

## Icon Direction

Icons should be:

- simple
- consistent
- clean
- geometric where possible
- visually lightweight
- easy to understand

Continue preferring a consistent icon system such as `lucide-react` for interface icons.

Brand/tool icons may continue using appropriate brand icons where needed.

Avoid mixing multiple unrelated icon styles throughout the interface.

Do not use oversized decorative icons unless they have a clear purpose.

## Shape Language

Use a more intentional block-based visual system.

Prefer:

- rectangular or lightly rounded surfaces
- thin/simple borders
- clear grid alignment
- structured cards
- deliberate whitespace
- compact labels
- simple dividers

Avoid excessive:

- pill-shaped elements
- huge corner radii
- floating glass cards
- blur-heavy surfaces
- decorative shadows

Pills may still be used where semantically appropriate, such as small tags or filters, but they should not define the entire interface.

## Motion Direction

Animation should remain simple and supportive.

Use motion primarily for:

- page/section entrance
- subtle reveal
- navigation feedback
- hover feedback
- project/media interactions
- modal transitions
- image/gallery transitions
- small state changes

Prefer:

```text
short fade
small translate
subtle scale
simple stagger
clean image transition
```

Avoid:

- constant background animation
- excessive parallax
- dramatic camera movement
- long intro sequences
- excessive spring/bounce animation
- animation on every piece of text
- motion that delays access to content

The portfolio should still feel polished, but responsiveness and clarity are more important than spectacle.

Animations must respect `prefers-reduced-motion`.

## Design Differentiation

Although bryllim.com is the primary simplicity reference, Vince's portfolio must establish its own identity.

Differentiation should come from:

- stronger block-based composition
- Vince's project imagery
- custom typography hierarchy
- distinct section compositions
- development/UIUX/graphic/video project categorization
- carefully designed project presentation
- consistent black/white visual language
- subtle creative interactions
- Vince-specific content and personality

The goal is:

> Take inspiration from the reference's restraint and clarity, not its exact design.


---

# PHASE 2 — Complete UI / UX Redesign

## Objective

Redesign the public-facing portfolio using the improved architecture from Phase 1.

The redesign must be performed **section-by-section**, not as one giant rewrite.

Each section should be completed, reviewed, made responsive, and stabilized before moving to the next major section.

## Required UI Redesign Order

```text
01 — Global Design System / Page Foundation
02 — Navigation
03 — Hero
04 — About
05 — Projects
06 — Graphic Design
07 — Experience
08 — Certificates
09 — Contact
10 — Footer
11 — Full-site polish
```

The primary visual progression is therefore:

```text
HERO
 ↓
ABOUT
 ↓
PROJECTS
 ↓
GRAPHIC DESIGN
 ↓
EXPERIENCE
 ↓
CERTIFICATES
 ↓
CONTACT
 ↓
FOOTER
```

Navigation and global design-system work may be handled immediately before the Hero because they affect the entire page.

---

## Phase 2.1 — Global Design System

Before heavily redesigning individual sections, establish the new visual language.

Define:

- typography hierarchy
- color palette
- dark-mode treatment
- spacing scale
- container behavior
- card/surface language
- border treatment
- radius language
- shadows
- image treatment
- button styles
- icon treatment
- motion language
- section transitions
- responsive rules

Avoid inconsistent styling where every section feels like a different website.

The global design system must also follow the project's UI direction above:

- no gradient backgrounds
- light and dark themes only
- neutral monochrome interface
- clean, slightly blocky typography
- simple consistent icons
- restrained borders and surfaces
- minimal decorative effects
- simple purposeful animation
- content-first composition

The reference site is inspiration for restraint and clarity only. Do not recreate its exact interface.

---

## Phase 2.2 — Navigation

Redesign the current floating dock/navigation system if necessary.

Goals:

- clear section navigation
- active-section feedback where appropriate
- dark/light mode access
- strong desktop presentation
- usable mobile navigation
- accessible keyboard behavior
- minimal obstruction of portfolio content

Keep navigation appropriate for a creative portfolio rather than making it resemble a generic SaaS dashboard.

---

# Phase 2.3 — Hero

The Hero is the first major visual redesign.

It must quickly communicate:

- Vince Bryant Cabunilas
- role / specialization
- visual identity
- selected-work direction
- primary CTA
- secondary CTA where appropriate
- social/professional presence

The Hero should establish the visual language that later sections inherit.

Do not move to About until the Hero is responsive and stable.

---

# Phase 2.4 — About

Redesign the About section after the Hero is approved.

Potential content includes:

- profile
- short biography
- location
- education
- technical skills
- tools
- soft skills
- relevant coursework where still useful

The section should complement the Hero instead of repeating it.

---

# Phase 2.5 — Projects

Projects should become one of the strongest sections of the portfolio.

The architecture should anticipate the future CMS project categories:

```text
Development
UI/UX
Graphic Design
Video Editing
```

However, CMS functionality is **not implemented during this UI phase**.

For now, continue using the existing/static data source while designing components in a way that can later consume CMS data.

Project presentation should prioritize actual work rather than displaying every project as an identical generic card.

Consider support for:

- featured projects
- project categories
- thumbnails/covers
- galleries
- descriptions
- tools/technologies
- external links
- GitHub links
- Figma/prototype links
- video links
- case-study style content

Do not hardwire future CMS logic into presentation components.

---

# Phase 2.6 — Graphic Design

Redesign the current design gallery.

Focus on visual presentation of the artwork rather than excessive UI chrome.

The final architecture should make it possible for this content to later come from the CMS.

---

# Phase 2.7 — Experience

Redesign the work/organization experience section.

It does not need to remain a conventional vertical timeline if another presentation better matches the final art direction.

Maintain clear hierarchy for:

- role
- company/organization
- period
- responsibilities
- achievements/context

---

# Phase 2.8 — Certificates

Redesign Certificates as supporting professional evidence.

The structure should anticipate future CMS management but continue using existing data during Phase 2.

Certificate content may include:

- title
- issuer
- date/year
- certificate image
- credential link
- description where appropriate

---

# Phase 2.9 — Contact

Redesign the Contact section around a clear final conversion goal:

- contact Vince
- email
- relevant social links
- resume
- professional opportunities

Do not add a backend contact form during this phase unless separately approved.

---

# Phase 2.10 — Footer

Finish the page with a deliberate footer rather than treating it as an afterthought.

The Footer should visually complete the design system established by the Hero.

It may include:

- name/branding
- navigation
- social links
- copyright
- back-to-top interaction
- short closing statement

Keep it focused.

---

# Phase 2.11 — Full-Site Polish

After Hero → Footer are complete, review the website as one continuous experience.

Check:

- transitions between sections
- visual rhythm
- spacing consistency
- typography consistency
- animation consistency
- responsive layouts
- tablet layouts
- mobile layouts
- dark mode
- keyboard navigation
- reduced motion
- image loading
- performance
- Lighthouse concerns where useful
- cumulative layout shift
- unnecessary animation work

Do not start CMS implementation until the redesigned public site is stable.

---

# PHASE 3 — CMS / CRUD Foundation

## Objective

After the frontend redesign is complete, replace selected static content with manageable dynamic content.

The intended CMS-managed content is:

```text
Projects
├── Development
├── UI/UX
├── Graphic Design
└── Video Editing

Certificates
```

The exact backend technology will be finalized at the beginning of this phase.

A managed service such as Supabase is currently the preferred direction because it can provide:

- database
- authentication
- storage
- client/API access

Do not implement the CMS during Phase 1 or Phase 2.

---

# PHASE 3.1 — Content Model

Design the database/content model before building the admin UI.

Projects should preferably use one shared content model with a category/type rather than four unrelated CRUD systems.

Conceptually:

```ts
type ProjectCategory =
  | 'development'
  | 'uiux'
  | 'graphic-design'
  | 'video-editing'
```

Possible project fields:

```text
id
slug
title
short description
full description
category
cover image
gallery/media
tools/technologies
GitHub URL
live URL
Figma URL
video URL
featured
status
sort order
created at
updated at
```

Not every category needs every field.

Certificates should use their own content model.

---

# PHASE 3.2 — Content Service Layer

Do not scatter direct database queries throughout React components.

Use a content/data-access layer such as:

```text
src/services/
  projects.ts
  certificates.ts
```

The public UI should consume functions/hooks that provide content rather than knowing database implementation details.

This keeps the UI easier to maintain and allows the backend implementation to change later.

---

# PHASE 3.3 — Media Storage

CMS-managed images/videos should no longer depend on manually placing every new asset inside:

```text
public/images/
```

The future flow should resemble:

```text
Admin uploads media
        ↓
Managed storage
        ↓
Media path/metadata stored with content
        ↓
Public portfolio renders it
```

Existing static assets do not need to be migrated until the CMS architecture is ready.

---

# PHASE 4 — Admin Dashboard & CRUD

## Objective

Build a private content-management interface for Vince.

Potential routes:

```text
/admin/login
/admin
/admin/projects
/admin/projects/new
/admin/projects/:id
/admin/certificates
/admin/certificates/new
/admin/certificates/:id
```

Routing may be introduced during this phase if required.

The public portfolio can remain a single scrolling experience even if the admin application uses routes.

---

# Authentication

Admin CRUD must be protected by real authentication.

Do not rely on hiding `/admin` as security.

Public visitors should only be able to read published portfolio content.

Authorized admin users should be able to:

```text
CREATE
READ
UPDATE
DELETE
PUBLISH
UNPUBLISH / ARCHIVE
```

---

# Draft / Published Workflow

Projects and certificates should support a publishing workflow.

Recommended states:

```text
Draft
Published
Archived
```

The public portfolio should display only published content.

This allows new work to be prepared and previewed without immediately exposing it publicly.

---

# CRUD Goals

The final admin experience should allow Vince to add/update portfolio content without modifying source code or manually redeploying for ordinary content changes.

For projects, the admin should eventually support fields appropriate to the selected category, including media uploads and project links.

For certificates, it should support certificate metadata, images, and credential links.

---

# PHASE 5 — Final QA, Performance & Deployment

After CMS integration:

- test all CRUD operations
- test authentication
- test public read permissions
- test database security policies
- test media uploads
- test draft/published behavior
- test empty/loading/error states
- test mobile admin UI
- test public portfolio responsiveness
- test dark mode
- test accessibility
- test production build
- test deployment configuration
- test environment variables
- review bundle/performance impact

The project is considered complete only when both the public portfolio and admin content workflow are stable.

---

# Important Scope Boundaries

## During Phase 1

Do architecture work only.

Do not begin the major visual redesign.

Do not build the CMS.

## During Phase 2

Work on the public UI from Hero through Footer.

Use the existing data source while keeping components CMS-ready.

Do not build the admin dashboard yet.

## During Phase 3

Build the CMS/data foundation only after the redesigned public UI is stable.

## During Phase 4

Build authenticated CRUD/admin workflows.

## During Phase 5

Integrate, optimize, test, and deploy the complete system.

---

# Working Principle

The project should evolve like this:

```text
CLEAN FOUNDATION
      ↓
STRONG VISUAL SYSTEM
      ↓
POLISHED PORTFOLIO EXPERIENCE
      ↓
DYNAMIC CONTENT ARCHITECTURE
      ↓
PRIVATE CMS / CRUD
      ↓
FINAL PRODUCTION SYSTEM
```

Architecture comes before visual complexity.

Visual design comes before CMS complexity.

CMS implementation comes only after the public experience has been established.

This roadmap should remain the reference plan throughout development so individual implementation sessions do not unintentionally expand the project scope or skip required phases.
