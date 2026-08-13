# CGTechVibes — Official Website

Company website for CGTechVibes — digital products, business solutions, web apps and websites. Built as a mobile-first Progressive Web App (PWA) with AI-ready architecture.

Live: https://cgtechvibes01.github.io/cgweb/

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19
- Tailwind CSS v4
- lucide-react icons
- GitHub Pages deployment via GitHub Actions

## Features

- Project showcase with detail pages and live GAS webapp demos (iframe)
- WhatsApp ordering flow per project (OrderModal)
- Contact page with WhatsApp form + business info
- PWA: installable, offline service worker, app manifest
- Dark/light theme, glassmorphism nav, mobile bottom nav

## Development

```bash
npm install
npm run dev          # local dev server
```

## Build & Deploy

The site is a static export. Build locally with the required base path:

```bash
$env:NEXT_PUBLIC_BASE_PATH="/cgweb"; npm run build
npm run lint
```

`npm run build` outputs static files to `out/`. Pushing to `main` triggers the `Deploy to GitHub Pages` workflow (`.github/workflows/deploy.yml`) which builds with `NEXT_PUBLIC_BASE_PATH=/cgweb` and publishes the site.

## Project Structure

```
src/
├── app/            # Next.js routes (pages, demo, projects, contact, about, blog, legal)
│   ├── projects/   # Project detail pages
│   ├── demo/       # GAS webapp demo wrappers (iframe)
│   └── manifest.ts # PWA manifest (dynamic, force-static)
├── components/
│   ├── layout/     # TopNav, BottomNav, Footer, PWA/theme providers
│   └── sections/   # Hero, Features, ProjectsPreview, ContactForm, OrderModal
├── lib/            # projects.ts, constants.ts, animations, utils
└── hooks/          # useTheme, useMediaQuery
```
