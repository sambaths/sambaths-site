# PRD: Site Redesign — Jekyll to Astro Migration

## Problem Statement

The current site (sambaths.com) is built on the Academic Pages Jekyll template — a theme designed for academics to showcase publications, conferences, and teaching materials. This template actively fights the site's new purpose: positioning Sambath as an AI Strategy Consultant who architects the vision and builds the code.

Specifically:
- 7 dead sections (Talks, Teaching, Portfolio, Publications, etc.) all redirecting to 404
- Navigation is skeletal — only "Posts" is live
- SASS/CSS stack is 10+ years old (jQuery, Susy grid, Magnific Popup)
- No dark/light theme toggle despite having both themes defined
- SEO is broken: placeholder Twitter handle, duplicate OG tags, no site verification, no default OG image
- Homepage is a wall of text with no information hierarchy
- No CV, Contact, or Services presence despite needing all three audiences served

## Solution

Migrate from Jekyll/Academic Pages to **Astro** with a custom minimalistic theme. New site has 5 navigation items: Home, Blog, Start Here, CV, Contact. Clean light theme (with dark toggle), Inter typography, magazine-style layout, production-grade SEO.

Free to host on Netlify free tier (same as current).

## User Stories

1. As a potential client, I want to immediately understand what Sambath does, so that I can decide whether to reach out.
2. As a potential client, I want a clear path from "interested" to "contact", so that I can start a conversation with minimal friction.
3. As a potential client, I want to read strategic/thought-leadership content that demonstrates consulting thinking, so that I can evaluate expertise before engaging.
4. As a potential employer, I want to see a professional CV and work history, so that I can assess fit for a role.
5. As a potential employer, I want to see technical depth in blog posts, so that I can evaluate hands-on capability.
6. As a peer/data scientist, I want to read well-written technical tutorials and deep dives, so that I can learn and share them.
7. As a peer, I want to find Sambath's open-source work and social presence, so that I can follow and engage.
8. As a first-time visitor, I want a "Start Here" page that curates the best content by interest, so that I don't have to guess where to begin.
9. As a returning reader, I want a blog archive that's easy to browse by topic, so that I can find relevant posts quickly.
10. As a search engine crawler, I want proper semantic HTML, structured data (JSON-LD), Open Graph tags, and a sitemap, so that the site ranks well for relevant queries.
11. As a visitor on mobile, I want the site to be fully responsive and readable, so that the experience is good on any device.
12. As a visitor who prefers dark mode, I want a light/dark toggle that persists my preference, so that I can read comfortably.
13. As the site owner, I want a content generation system that helps me write in my voice, so that I can publish weekly without friction.
14. As the site owner, I want analytics without violating privacy, so that I can understand traffic patterns.
15. As the site owner, I want RSS/Atom feed support, so that readers can subscribe to new posts.
16. As the site owner, I want the site to build and deploy automatically on git push, so that publishing is a single command.

## Implementation Decisions

### Framework: Jekyll → Astro

- Migrate from Jekyll (Ruby) to Astro (JavaScript/TypeScript)
- Hosting: Netlify free tier (existing) with Netlify adapter. Fix filename typo: `nelify.toml` → `netlify.toml`
- Content Collections for blog posts with typed frontmatter schema
- MDX support for blog posts to allow embedded components

### Navigation

1. Home (/) — hero + featured posts + stats + footer
2. Blog (/blog) — reverse-chronological archive with tag filtering
3. Start Here (/start-here) — curated entry points by audience
4. CV (/cv) — inline sections + PDF download button
5. Contact (/contact) — email (primary), LinkedIn, GitHub

### Layouts

- `BaseLayout.astro` — HTML shell, theme toggle, meta tags, fonts
- `BlogLayout.astro` — post layout with reading time, tags, share, related
- `ArchiveLayout.astro` — blog listing with tag filter
- `SimpleLayout.astro` — for CV, Contact, Start Here

### Theming

- Default: Light (white bg, dark text, teal/blue accent)
- Dark toggle via CSS custom properties swap, stored in `localStorage`
- Typography: Inter (body, Google Fonts), JetBrains Mono or Fira Code (code)
- Layout: CSS Grid for homepage featured posts, single-column for content pages
- Code blocks: Shiki syntax highlighting with copy button
- Minimal JS — theme toggle and mobile nav only

### SEO & Analytics

- Meta tags: Single source of truth in `BaseLayout.astro` — no duplication
- JSON-LD: `Person` schema on homepage, `BlogPosting` per post, `BreadcrumbList` where applicable
- Sitemap: `@astrojs/sitemap`
- RSS: `@astrojs/rss` for `/feed.xml`
- Analytics: GA4 component that respects config toggle (not hardcoded)
- Twitter/X: Wire `@sambath__S` properly
- Search Console: Guide user through verification setup

### Content Generation

Two post archetypes:

**Strategic posts** (for clients):
- Frontmatter: title, date, image, description, tags, type: "strategy"
- Structure: Problem → Framework → Application → Takeaway
- Voice: Conversational, first-person, war-story framing

**Technical posts** (for peers/employers):
- Frontmatter: title, date, image, description, tags, type: "technical"
- Structure: Problem → Naive approach → Better approach → Code → Why it matters
- Voice: Conversational, first-person, practical tutorial

Scaffold script: `npm run new-post` prompts for type + title, generates file with template.

### Page Content

**Home:**
- Hero: Name + tagline "AI Strategy Consultant — I architect the vision and build the code."
- CTA buttons: [View CV] [Get in Touch]
- Featured posts grid (latest 2-3)
- Quick stats
- Footer: social links, copyright, RSS

**Start Here:**
- Three sections: For Clients, For Employers, For Peers
- Curated links to best content per audience

**CV:**
- Inline sections: Experience, Skills (grouped), Education
- "Download PDF" button
- Last updated date

**Contact:**
- Email: sambaths1@outlook.com (with 24h response note)
- LinkedIn, GitHub links

**Blog:**
- Reverse-chronological listing
- Tag filter
- Each item: title, date, excerpt, tags, reading time

### Deployment

- Netlify: build command `npm run build`, publish dir `dist/`
- Fix `nelify.toml` → `netlify.toml`

### File Structure

```
/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── ArchiveLayout.astro
│   │   └── SimpleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── start-here.astro
│   │   ├── cv.astro
│   │   └── contact.astro
│   ├── content/
│   │   ├── blog/
│   │   │   ├── 2025-02-12-sentinel-objects.mdx
│   │   │   └── 2025-02-19-local-git-server.mdx
│   │   └── config.ts
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── FeaturedPosts.astro
│   │   ├── PostCard.astro
│   │   ├── TagFilter.astro
│   │   ├── ThemeToggle.astro
│   │   ├── SEO.astro
│   │   └── CodeBlock.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
├── astro.config.mjs
├── netlify.toml
├── tsconfig.json
└── package.json
```

## Testing Decisions

Seams (highest to lowest):
1. **Build integrity**: `astro build` exits 0
2. **Link integrity**: broken-link-checker on built site
3. **Meta tag correctness**: spot-check with grep on generated HTML
4. **Sitemap completeness**: verify expected page count
5. **Manual visual review**: desktop + mobile

No existing tests in current project.

## Out of Scope

- Newsletter/email list integration
- E-commerce or payment processing
- Multi-language versions
- Automated visual regression testing
- Interactive demos or embedded notebooks in blog posts
- Comment system, talk map, other old template features

## Further Notes

- Existing `_posts/` kept as reference during migration, removed once migrated
- Two existing blog posts migrate as-is — already in target voice
- Content generation scaffold script is follow-up iteration
- Images move from `images/` to `public/images/`
