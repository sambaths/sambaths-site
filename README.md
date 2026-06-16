# sambaths.com — Personal website

AI Strategy Consultant. Built with [Astro](https://astro.build/), deployed on [Netlify](https://www.netlify.com/).

## Quick start

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to dist/
npm run preview    # preview production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Homepage (hero, featured posts, stats) |
| `/blog` | Blog archive with tag filtering |
| `/blog/[slug]` | Individual blog post |
| `/blog/tags/[tag]` | Posts filtered by tag |
| `/start-here` | Curated content by audience |
| `/cv` | Professional CV |
| `/contact` | Contact information |
| `/feed.xml` | RSS feed |

## Tech stack

- **Framework**: Astro 5 (static site generator)
- **Language**: TypeScript
- **Content**: MDX via Content Collections
- **Styling**: CSS custom properties with light/dark theme toggle
- **Typography**: Inter (body), JetBrains Mono (code)
- **Deployment**: Netlify (auto-deploys from `main` branch)

## Creating blog posts

```bash
npm run new-post
```

Follow the prompts to scaffold a new post with correct frontmatter and structure template.

## Project structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content Collections (blog posts)
│   ├── layouts/        # Page layouts (BaseLayout, BlogLayout, SimpleLayout)
│   ├── pages/          # Route pages
│   └── styles/         # Global CSS
├── public/             # Static assets (images, favicon, robots.txt)
├── _archive/           # Archived Jekyll template files (reference only)
├── astro.config.mjs    # Astro configuration
├── netlify.toml        # Netlify build settings
└── tsconfig.json       # TypeScript configuration
```

## License

Content and original code © Sambath S. Academic Pages template (archived in `_archive/`) is MIT licensed.
