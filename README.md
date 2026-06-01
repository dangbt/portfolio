# dangbt.dev — Portfolio

Personal portfolio of **Dâng Bùi Tấn** (dangbt), full-stack developer.

🌐 **Live:** [dangbt-portfolio.pages.dev](https://dangbt-portfolio.pages.dev)

## Stack

- **Vite** + **React** + **TypeScript**
- **[@dangbt/pro-ui](https://pro-ui.pages.dev)** — component library
- **Tailwind CSS v4**
- **react-i18next** — EN / VI
- **MDX** — blog posts
- **Cloudflare Pages** — deploy

## Features

- Dark / light / system theme
- EN / VI language switcher (persisted)
- Appearance config panel — color, radius, theme
- Blog with MDX posts
- Auto-deploy on push to `main`

## Dev

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # production build → dist/
```

## Deploy

Push to `main` → GitHub Actions builds and deploys to Cloudflare Pages automatically.

Manual deploy:

```bash
pnpm build
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... \
  npx wrangler pages deploy dist --project-name=dangbt-portfolio --branch=main --commit-dirty=true
```

## Structure

```
src/
├── components/       # Navbar, Hero, About, Projects, Skills, Footer, AppearancePanel
├── pages/            # Home, Blog, BlogPost
├── content/posts/    # MDX blog posts
├── data/             # projects.ts, skills.ts, posts.ts
└── i18n/             # en.ts, vi.ts
```

## Contact

- Email: [buitandang96@gmail.com](mailto:buitandang96@gmail.com)
- GitHub: [github.com/dangbt](https://github.com/dangbt)
- npm: [npmjs.com/~dangbt](https://www.npmjs.com/~dangbt)
