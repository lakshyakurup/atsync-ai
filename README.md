# ATSync AI

Enterprise-grade SaaS platform built with **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS** for AI-powered applicant tracking and resume intelligence.

## Core Structure

- `src/app`: Landing page, auth routes (`/login`, `/signup`), recruiter dashboard (`/dashboard`), analytics suite (`/dashboard/analytics`)
- `src/components/ui`: Reusable dark-theme enterprise UI primitives
- `src/components/dashboard`: ATS score meter, filtered candidate list view, structural metrics cards
- `src/lib`: AWS S3 upload handler config, Supabase config binding, Gemini extraction prompt builder
- `src/types`: Candidate metadata, match scoring, missing keywords, optimization recommendation interfaces

## Run

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```
