# Domain Glossary — sambaths.com

## Identity & Positioning

- **Sambath S** — AI Strategy Consultant, Senior Data Scientist, Freelance Data Scientist/ML Engineer
- **Positioning**: "AI Strategy Consultant — I build AI systems that solve real problems" — a strategist who codes
- **Audience** (C > A ≈ B):
  - **C (Reputation/Peers)**: Primary. Deep technical content, blog posts, open-source work build long-term authority
  - **A (Clients)**: Secondary. Consulting signals — case studies, services demonstrated through writing
  - **B (Employers)**: Secondary. CV, professional signals, technical demonstrable capability

## Site Structure

- **Homepage** (/) — Hero (name + positioning), CTA buttons, featured posts grid, stats, footer
- **Blog** (/blog) — Reverse-chronological archive with tag filtering
- **Start Here** (/start-here) — Curated entry points organized by audience (clients, employers, peers)
- **CV** (/cv) — Inline sections (Experience, Skills, Education) + PDF download
- **Contact** (/contact) — Email (primary, 24h response), LinkedIn, GitHub

## Content

- **Blog cadence**: Weekly (4 posts/month target)
- **Content split**: 2 strategic/month + 2 technical/month
- **Strategic posts**: Client-facing. Structure: Problem → Framework → Application → Takeaway
- **Technical posts**: Peer/employer-facing. Structure: Problem → Naive approach → Better approach → Code → Why it matters
- **Voice**: Conversational, first-person, self-aware humor, problem-first, memorable zingers

## Design

- **Style**: Minimalistic, magazine-style, clean light theme (default), dark toggle available
- **Typography**: Inter (body), JetBrains Mono or Fira Code (code blocks)
- **Layout**: CSS Grid for homepage featured posts, single-column for content pages

## Technical

- **Stack**: Astro (static site generator), JavaScript/TypeScript
- **Hosting**: Netlify free tier
- **Blog format**: MDX
- **SEO**: No duplicate meta tags, JSON-LD structured data, sitemap, RSS
- **Analytics**: Google Analytics 4 (configured via component, not hardcoded)
- **Code highlighting**: Shiki
