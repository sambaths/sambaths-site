# sambaths.com

Personal site. Built with [Astro](https://astro.build/), deployed on [Vercel](https://vercel.com/).

```bash
npm install
npm run dev
npm run build
```

## Tech

- Astro 5, TypeScript, MDX
- CSS custom properties with dark/light theme
- Inter + JetBrains Mono

## Pre-push hooks

Before pushing, the `.husky/pre-push` hook runs:

1. **Type check** (`tsc --noEmit`) + **Build** (`astro build`)
2. **npm audit** — blocks on high+ severity vulnerabilities
3. **Gitleaks** — blocks on committed secrets

### Setup

Install gitleaks:

```bash
brew install gitleaks
```

The hook is managed by [Husky](https://typicode.github.io/husky/). To update:

```bash
npx husky add .husky/pre-push '<command>'
```
