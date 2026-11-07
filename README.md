# HK Labs — Official website

Marketing website and portfolio for HK Labs, an independent frontend development studio.

## Stack
- Next.js 15 App Router
- React 19 and TypeScript
- Responsive custom CSS
- Lucide icons

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
```

## Current sections
- Positioning and service offers
- Selected concept projects and technical demo
- Written, asynchronous delivery process
- Engineering approach and FAQ
- Contact CTA

All portfolio entries are explicitly labelled as self-initiated concepts or technical demonstrations. They must not be represented as commissioned client work.

## Deployment

Netlify supports the Next.js App Router through its OpenNext adapter. The Free plan allows commercial projects, has a monthly usage-credit limit, and can pause projects when the limit is reached. Use the free `*.netlify.app` subdomain initially; no paid custom domain is required.

## Before public launch
- Use the free Netlify subdomain for the initial public launch; configure the canonical URL and social preview image after the production URL is assigned.
- The primary contact is `a.koumad.pro@gmail.com` (mailto link in the contact section).
- Reassess hosting limits and terms before traffic or commercial requirements grow.
- Build dedicated case-study pages after each demo is implemented and reviewed.
- Add a privacy notice before introducing analytics or personal-data collection.
- Run typecheck, lint and production build in CI.
