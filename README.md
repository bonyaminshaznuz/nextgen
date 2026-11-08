# nextgen

Website for the HAW NextGen Business Club — a student-led career development
initiative at HAW Hamburg.

> **Demo site.** This repository holds a demo build of the club website. The
> contact and newsletter forms are front-end only: they show a thank-you
> message and do not send or store anything.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/events` | Events |
| `/achievements` | Achievements |
| `/blog` | Blog |
| `/join-us` | Join the club |
| `/about` | About us |

## Stack

- TanStack Start (React 19, file-based routing)
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Vitest

## Development

Requires Node.js 20+ and Bun (or npm).

```sh
git clone https://github.com/bonyaminshaznuz/nextgen.git
cd nextgen
bun install
bun run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run preview` | Preview the production build |
| `bun run test` | Run the test suite |
| `bun run lint` | Lint the source |
| `bun run format` | Format the source |

## Layout

```
src/
  assets/        photos used across the site
  components/    shared site header, footer, page blocks + ui primitives
  lib/           site content and helpers
  routes/        one file per page
  styles.css     theme tokens and global styles
```

All page content lives in `src/lib/site-data.ts` — edit that file to change
events, achievements, blog posts, team members and partner names.
