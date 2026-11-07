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

## Contact
The primary contact is [a.koumad.pro@gmail.com](mailto:a.koumad.pro@gmail.com). The site uses a mailto CTA and does not require a contact form or backend.

## Hosting and domain
The intended hosting platform is Vercel. Vercel assigns a free `*.vercel.app` deployment URL, so no paid custom domain is required.

**Plan restriction:** Vercel's Hobby plan is limited to personal, non-commercial use. Because HK Labs markets paid development services, do not use Hobby for the public commercial launch. A Vercel Pro plan or a hosting provider whose free tier explicitly permits commercial use is required for that purpose. See [Vercel Hobby plan](https://vercel.com/docs/plans/hobby) and [Vercel account plans](https://vercel.com/docs/plans).

## Before public launch
- Choose a hosting plan whose terms permit the intended commercial use.
- After the production URL is assigned, configure `metadataBase`, canonical metadata and social preview assets.
- Build dedicated case-study pages after each demo is implemented and reviewed.
- Add a privacy notice before introducing analytics or personal-data collection.
- Run typecheck, lint and production build in CI before merging.
