# hklogs-info

Personal portfolio and AI engineering showcase for **Hassaan Abdullah Kiyani** — AI Engineer & SQA Specialist based in Pakistan. Built with React 19, TypeScript, Vite, Tailwind CSS v3, and GSAP-powered cinematic scroll animations.

## Features

- **Hero Section** — full-bleed portrait, role headline, and key metrics (50+ QA audits, 40+ repos)
- **Experience & Education Timeline** — work history, coursework, volunteer track
- **Engineered Architectures** — 3D-tilt project cards with search and category filters (AI, Web, Mobile, Systems)
- **Projects Vault** — standalone `/projects/` route with full project archive and detailed modal specs
- **Skills & Tech Stack** — interactive dialog-driven skill cards with tool links
- **Research & Publications** — Medium publications grid
- **Contact & Freelance Gateway** — Linktree hub, Fiverr, Upwork, LinkedIn, Email direct links
- **AI Twin Chatbot** — Gemini 2.5 Flash-powered sidebar chat with markdown rendering, quota-fallback to direct contact links when rate-limited
- **GSAP ScrollTrigger Animations** — cinematic card reveals, parallax, and magnetic hover effects
- **Responsive Navigation** — fixed top bar with mobile dropdown menu
- **Dark Cinematic Theme** — consistent red (#E50914) accent, monospace details, Oswald/Bebas Neue headings

## Quickstart

```bash
git clone https://github.com/mhklogs/hklogs-info.git
cd hklogs-info
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_GEMINI_API_KEY` | No* | Gemini API key for the AI chatbot. Falls back to a bundled key; rate limits trigger a friendly redirect to contact links. |

*The chatbot works out of the box via a bundled fallback key. Set your own key in `VITE_GEMINI_API_KEY` to use your own quota.

## Build & Deploy

```bash
npm run build      # tsc + vite build → dist/
npm run preview    # local preview of the build
npm run lint       # eslint check
```

Deployed on Vercel — all routes rewrite to `index.html` via the SPA rewrite in `vercel.json`.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 7 |
| Styling | Tailwind CSS 3.4 + shadcn/ui components |
| Animations | GSAP 3 + ScrollTrigger |
| 3D | Three.js + React Three Fiber + Drei |
| AI | Google Gemini 2.5 Flash (via `@google/generative-ai`) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |

## Project Structure

```
src/
├── sections/          # Page-level section components
├── components/        # Shared UI (Navigation, MagneticCard, CustomCursor, ...)
├── pages/             # Standalone route pages (ProjectsVaultPage)
├── data/              # Static project data, profile info, GitHub JSON
├── hooks/             # Custom hooks (useMousePosition, use-mobile)
├── lib/               # Utilities (tailwind-merge, cn)
├── App.tsx            # Root component with SPA routing
└── main.tsx           # Entry point
```

## License

This repository is a personal portfolio. Contact the owner for reuse permissions.
