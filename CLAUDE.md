# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build (type-checks then compiles)
pnpm start        # Start production server
pnpm lint         # Biome lint check
pnpm format       # Biome format + auto-fix
```

## Architecture

This is a **single-page portfolio site** — a Next.js 16 (Turbopack) App Router project with all content rendered client-side via `"use client"` components.

**Page structure** (`app/page.tsx`):
- Left sidebar (`IntroSidebar`) — name, title, scroll-spy nav, social links, resume link. Sticky on desktop.
- Right content area — four sections: About, Experience, Projects, Skills.
- Fixed topbar (`Header`) with dark mode toggle (visible on mobile/tablet).
- Background mesh gradient animation (`bg-mesh` div in page.tsx).

**Data pattern**: All content (experiences, projects, skills) is hardcoded as typed arrays inside the component files — there's no CMS, API, or data fetching.

**Styling system**:
- Tailwind CSS 3 with custom CSS variables for theming (defined in `app/globals.css`).
- Dark mode via `class` strategy — toggled by `DarkModeToggle` which persists to `localStorage`.
- CSS variables follow shadcn naming: `--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`, `--card`, `--ring`, etc.
- Custom utility classes in globals.css: `.glass`, `.border-enhanced`, `.card-border`, `.bg-mesh`.
- The `glass` class changes appearance based on `.dark` parent selector.

**Animations**:
- Framer Motion for scroll-triggered reveals (`whileInView`) and hover effects (`whileHover`).
- Lenis provides smooth scrolling globally via `SmoothScrollProvider` wrapper in layout.

**Key hooks**:
- `useActiveSection` — scroll-spy that determines which nav section is in view (offset 100px).
- `useScrollTo` — smooth scrolls to a section using Lenis if available, falls back to native.

**Type declarations**: `types/lenis.d.ts` declares `window.lenis` with `raf`, `destroy`, and `scrollTo` methods — overriding the package's own types which export constructor options, not instance methods. Any component accessing `window.lenis` relies on this declaration.

## Component Data Contract

When updating portfolio content, the data lives in:
- `components/sidebar.tsx` — name, title, tagline, social links
- `components/about.tsx` — bio text, approach, contact info
- `components/experiences.tsx` — `experiencesData` array (role, company, period, responsibilities, skills)
- `components/projects.tsx` — `projectsData` array (title, tag, description, skills, links, image import)
- `components/skills.tsx` — `skillsData` array of categories with skill objects (name + react-icons icon)

## Adding/Changing Projects

Project screenshots live in `/assets/` as PNGs. To add a new project:
1. Drop a screenshot in `/assets/`
2. Import it in `components/projects.tsx`
3. Add an entry to `projectsData` with the matching `image` field
4. The `tag` field renders as a shadcn-style badge next to the title

## Configuration Notes

- `next.config.ts` has `reactCompiler: true` (React Compiler enabled).
- `tsconfig.json` uses `moduleResolution: "bundler"` and path alias `@/*` → `./*`.
- `biome.json` handles linting/formatting (no ESLint or Prettier).
