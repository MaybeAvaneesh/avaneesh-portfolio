# avaneesh.dev

Personal portfolio of Avaneesh Gujran, full-stack software engineer.

Built with **React 19**, **TypeScript** (strict) and **Vite**. Deployed to **GitHub Pages** by GitHub Actions on every push to `main`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Node 22+ is required (see `.nvmrc`).

## Updating content

All copy lives in [`src/data/profile.ts`](src/data/profile.ts), typed by [`src/data/types.ts`](src/data/types.ts).
Edit that file to change jobs, projects, posts or links; components only handle layout.
Wrap a number in `**double asterisks**` inside a job highlight to emphasise it.

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Typecheck, then production build into `dist/` |
| `npm run preview`   | Serve the production build locally            |
| `npm test`          | Run the Vitest + Testing Library suite        |
| `npm run lint`      | Lint with oxlint (warnings fail)              |
| `npm run typecheck` | TypeScript project check                      |
| `npm run format`    | Format everything with Prettier               |

## Project structure

```
src/
├── data/          # profile.ts (content) and types.ts
├── components/    # one component per section, each with a CSS module
├── hooks/         # useCopyToClipboard
├── styles/        # tokens.css (design tokens) and global.css
└── test/          # test setup
```

## Deploying

1. Push to GitHub.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs lint, typecheck, tests and build, then publishes `dist/`.

The build uses relative asset paths (`base: "./"`), so it works at `username.github.io`,
`username.github.io/<repo>/` or a custom domain without changes. For a custom domain,
add a `public/CNAME` file containing the domain.

Pull requests and other branches run the same checks in `ci.yml` without deploying.

## Notes

- Fonts (Syne, IBM Plex Sans, JetBrains Mono) are self-hosted via `@fontsource`: no third-party requests.
- Respects `prefers-reduced-motion`, has a skip link, semantic landmarks and visible focus states.
