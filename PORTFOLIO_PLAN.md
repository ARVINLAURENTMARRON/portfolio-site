# Portfolio — Master Plan & Roadmap

> **Single source of truth** for Arvin's full-stack developer portfolio.
> **New or forked chat? Read this file top-to-bottom first, then continue from "Current Status".**
> Also read the memory entry `project-portfolio`.

---

## 1. Goal
Build a credible, fully **responsive (desktop + mobile)** full-stack developer portfolio, and **strengthen GitHub + LinkedIn** alongside it.
Audience (all at once): **remote/international**, **local PH employers**, and **freelance clients**.

## 2. Tech Stack (standard for every project unless noted)
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Database:** PostgreSQL + Prisma (Supabase or Neon, free tier)
- **Auth:** Auth.js (NextAuth) — Clerk as easy fallback
- **Payments:** Stripe (test mode) — flagship project only
- **Deploy:** Vercel (apps) + Supabase/Neon (DB)
- **Source control:** GitHub (public), **separate repo per project**
- **Local root:** `C:\Users\Laurent\Documents\portfolio\` — each project its own subfolder + repo. **NOT** inside the sabong `htdocs` repo.

## 3. Working Method
- Arvin is **new to the modern JS stack** but is the **long-term maintainer** → build **with understanding**; explain concepts as we go.
- Arvin keeps **last say on changes**. **Quality over speed. Document as we go.**
- **MVP first, then polish.**
- **Fork the conversation between phases** to keep context fresh. Each fork reads this file.
- **Constraint:** the UCC sabong system is **never** a portfolio piece (not Arvin's creation). Only transferable skills carry over.

## 4. Project Lineup
1. **Portfolio site / hub** (this repo) — responsive, dark mode, showcases the others. *(in progress)*
2. **CRUD + Auth app** — e.g. task/project manager. Teaches DB, auth, protected routes.
3. **Real-time app** — e.g. live auction / collaboration board (leverages WebSocket experience).
4. **API-driven app** — e.g. travel / finance / discovery dashboard. External APIs, caching.
5. **Flagship product** — booking SaaS or e-commerce with Stripe, roles, dashboard. The centerpiece.

*Optional stretch:* React Native/Expo mobile app, technical blog.
Every project: **responsive + live link + strong README + pinned on GitHub.**

## 5. Phase Plan
- **Phase 0 — Setup & foundations:** toolchain, scaffold site, GitHub + Vercel, this roadmap, GitHub profile basics. *(in progress)*
- **Phase 1 — Portfolio site build/polish + Project 2 (CRUD+Auth).** *(pending)*
- **Phase 2 — Project 3 (real-time).** *(pending)*
- **Phase 3 — Project 4 (API-driven).** *(pending)*
- **Phase 4 — Project 5 (flagship).** *(pending)*
- **Phase 5 — Polish pass:** performance (Lighthouse), accessibility, SEO, READMEs, custom domain, LinkedIn deep polish, resume. *(pending)*

## 6. GitHub & LinkedIn (ongoing)
- **GitHub:** profile README, photo/bio, pinned repos, clean commit history; each project repo gets a README with screenshots + live link + stack + setup steps.
- **LinkedIn:** sharp headline, About section, Featured (live links), Projects, Skills; optional build-in-public posts.

## 7. Current Status (update this every session)
**2026-06-05 — Phase 0 in progress.**

Done:
- ✅ Verified environment: Git 2.47.1, VS Code, winget present. Installed **Node v24.16.0 + npm 11.13.0**, **GitHub CLI 2.93.0**.
- ✅ Scaffolded `portfolio-site` (Next.js 16 + TS + Tailwind v4, `src/`, App Router, `@/*` alias).
- ✅ Initialized shadcn/ui (`components.json`, `ui/button.tsx`, `lib/utils.ts`).
- ✅ Production build verified (green).
- ✅ Created this roadmap.
- ✅ Git: branch `main`, clean initial commit, repo-local **private no-reply** commit email (real email not exposed; no AI trailer).

Next:
- ⏳ Authenticate GitHub CLI (`gh auth login`) — Arvin's interactive step.
- ⏳ Create public repo `ARVINLAURENTMARRON/portfolio-site` + push.
- ⏳ Deploy to Vercel (import repo → auto-deploys on every push).
- ⏳ Polish GitHub profile basics.

## 8. How to Resume (forked/new chat)
1. Read this file.
2. Read memory `project-portfolio`.
3. Continue from **Current Status → Next**.

Local path: `C:\Users\Laurent\Documents\portfolio\portfolio-site`
