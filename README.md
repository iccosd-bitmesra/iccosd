# ICCoSD-26 Conference Website

Website for the 2026 IEEE International Conference on Communication and Smart Devices (ICCoSD-26), February 18–19, 2026 at BIT Mesra, Ranchi.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Production: `pnpm build` then `pnpm start`.

## Editing Content

Content is driven by markdown in `/content/`. Edit the files and refresh the site; no code changes needed.

| File | Purpose |
|------|---------|
| `content/home.md` | Hero, dates, highlights, CTAs, organizer logos |
| `content/about.md` | About BIT Mesra and the conference |
| `content/footer.md` | Footer links, contact info, dates |
| `content/contact.md` | Contact and committee details |
| `content/registration.md` | Registration info |
| `content/call-for-papers.md` | CFP and submission guidelines |
| `content/directions.md` | Venue and directions |
| Other `content/*.md` | Other page content (committees, volunteers, proceedings, etc.) |

Use YAML frontmatter at the top of each file for metadata (titles, dates, images). Organizer logos in the “Organized by” section use the `logo` field (e.g. `logo: "/bit-mesra.png"`) in `home.md` under `homeOrganizers`.

## Project Structure

- **`app/`** – Next.js App Router pages and layout
- **`components/`** – Header, footer, hero, CTAs, search modal, etc.
- **`content/`** – Markdown content (edit here)
- **`lib/`** – Content loaders (markdown, home, footer, search, etc.)
- **`public/`** – Static assets (images, logos)

## Tech Stack

Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Lucide icons. Search is full-text over page content via `/api/search`.

## Deployment

**Vercel:** Push to your repo; Vercel will build and deploy.

**Manual:** `pnpm build && pnpm start` and serve the app (e.g. on a Node host).
