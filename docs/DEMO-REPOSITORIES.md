# Demo repositories — HK Labs portfolio

Create these as **three separate public repositories** under `HakimDev-tech`. Keep the scope intentionally narrow: each repository should demonstrate a different commercial capability and should be deployable independently on Netlify Free.

## 1. `northline-construction-website`

**Repository description**

`Concept project: responsive website for a fictional construction company, focused on trust, services and project enquiries.`

**Positioning:** Business website / lead-generation experience.

**Recommended stack**
- Next.js App Router + TypeScript
- Tailwind CSS
- Lucide icons
- Static content; no backend required for the concept

**Pages and sections**
- Home: value proposition, service area stated as fictional, primary enquiry CTA
- Services: service categories and process
- Projects: 3–4 clearly fictional project case studies
- About: company values and delivery approach
- Contact: mailto enquiry CTA (no fake form submission)

**Visual direction**
- Architectural editorial aesthetic: warm off-white, charcoal, muted olive, construction photography with consistent art direction
- Strong typography, generous spacing, restrained grid system
- Use real licensed/royalty-free imagery or original CSS/SVG illustrations; do not fabricate client logos or project results

**Acceptance criteria**
- Mobile-first at 360px, tablet and desktop
- Accessible navigation, focus states, semantic landmarks and contrast
- LocalBusiness/GeneralContractor schema only if the business is explicitly presented as fictional; do not use fabricated real-world address, phone or reviews
- Page metadata, canonical, Open Graph, sitemap and robots
- Optimized images, no layout shift, clear contact path
- README documents the concept, stack, features and deployment

**Suggested deployment:** `northline-construction.netlify.app` (only if available).

---

## 2. `orbit-saas-landing-page`

**Repository description**

`Concept project: conversion-focused SaaS landing page with a clear product narrative and workflow-led interface.`

**Positioning:** SaaS landing page / product storytelling.

**Product concept:** Orbit is a fictional lightweight operations workspace that turns scattered team requests into trackable workflows. Avoid unsupported claims about productivity gains or customer adoption.

**Recommended stack**
- Next.js App Router + TypeScript
- Tailwind CSS
- Lucide icons
- Reusable UI sections and typed content data

**Pages and sections**
- Landing page: problem, promise, product workflow, key capabilities, pricing concept, FAQ and CTA
- Optional `/product` page only if it adds meaningful detail; avoid empty filler pages
- Product UI preview built from real HTML/CSS components, not a flat screenshot

**Visual direction**
- Premium SaaS editorial style: deep ink / indigo foundation, electric lavender or cyan accent, crisp cards and subtle gradients
- A distinctive workflow diagram and one coherent dashboard preview
- Clear typographic hierarchy and concise copy

**Acceptance criteria**
- Responsive and keyboard accessible
- Pricing clearly labelled as illustrative concept pricing
- Product preview has realistic empty/loading/populated states
- Metadata, canonical, Open Graph, sitemap and robots
- No fake testimonials, customer logos, user counts or metrics
- README includes product narrative, design decisions, component map and deployment

**Suggested deployment:** `orbit-workspace.netlify.app` (only if available).

---

## 3. `frontend-rescue-lab`

**Repository description**

`Technical demo: before-and-after frontend repairs covering responsive layout, accessibility, visual consistency and maintainable components.`

**Positioning:** Frontend engineering / UI repair proof.

**Recommended stack**
- Next.js App Router + TypeScript
- CSS Modules or Tailwind (choose one approach and keep it consistent)
- Vitest + Testing Library for behavior-level tests
- Playwright for responsive and keyboard smoke tests if practical

**Core structure**
- `/before`: intentionally flawed UI, clearly labelled as a test fixture
- `/after`: corrected implementation
- `/case-study`: problem, root cause, fix, trade-offs and verification
- `components/`: reusable primitives with documented variants
- `tests/`: regression checks for overflow, navigation, keyboard behavior and responsive states

**Required defects to demonstrate**
- Horizontal overflow at narrow widths
- Inconsistent spacing and typography
- Missing focus-visible styles / poor keyboard navigation
- Semantic HTML and accessible-name issues
- Inconsistent button and card states

**Acceptance criteria**
- Each issue has a reproducible before state and a verified after state
- Tests assert observable behavior, not implementation details
- Include a concise change log and screenshots at fixed viewport sizes
- No invented Lighthouse scores; publish only results measured from the final deployed build
- README explains each defect, fix, test and known limitation

**Suggested deployment:** `frontend-rescue-lab.netlify.app` (only if available).

---

## Shared repository standards

Apply to all three:
1. Public repository with a clear description and concept disclaimer.
2. `main` protected by passing CI before merge where repository settings permit.
3. CI: install, typecheck, lint, unit tests (if present), production build.
4. `README.md` with screenshots, live demo URL, stack, setup, feature list and limitations.
5. Add `LICENSE` only after choosing the intended reuse terms.
6. Use descriptive commits and small pull requests.
7. Keep secrets out of the repository; no environment variables are needed for the static concepts.
8. Do not claim the fictional brands are actual customers or imply that concept demos are commissioned work.

## Build order

1. **Northline first:** closest to the target buyer and most directly demonstrates a paid business website.
2. **Orbit second:** demonstrates product marketing and a more sophisticated visual system.
3. **Frontend Rescue third:** demonstrates engineering rigor and gives a concrete before/after proof.

Do not build all three simultaneously. Finish and deploy one, capture consistent screenshots, then start the next.
