# Issue tracker: Hybrid dual-track (GitHub + Local markdown)

This repo uses a dual-track approach:

- **Development issues** (code bugs, features, tech debt): Created on GitHub at `github.com/sambaths/sambaths-site/issues`, **mirrored** locally in `.scratch/<feature>/issues/`
- **Content/PRDs/planning**: Created locally in `.scratch/<feature>/`, promoted to GitHub only when ready

## Dual-track sync rules (CRITICAL)

Every GitHub issue must have a corresponding local markdown file in `.scratch/`. The two MUST stay in sync **bidirectionally** at all times.

### Ralph loop behaviour

The ralph loop processes AFK issues locally. When it closes or updates a local issue, the corresponding GitHub issue MUST also be closed/updated immediately. Never leave them out of sync.

### Sync directions

| Trigger | Action |
|---------|--------|
| Issue created on GitHub | Create local mirror in `.scratch/<feature>/issues/<NN>-<slug>.md` with `Status:` and `GitHub: #N` header |
| Issue closed on GitHub | Update `Status:` to the matching label in local mirror. If the local file has `Status: ready`, set it to the closed equivalent. |
| Issue reopened on GitHub | Update local `Status:` line accordingly |
| Issue labels changed on GitHub | Update local `Status:` line to match |
| Issue body updated on GitHub | Update local mirror body |
| Local issue closed by ralph loop | Run `gh issue close <N> --comment "Closed by ralph loop"` **immediately** |
| Local issue status changed | Run `gh issue edit <N> --add-label "<status>" --remove-label "<old-status>"` **immediately** |
| Local PRD approved → ready for dev | Create GitHub issue, add local mirror with `GitHub: #N` header |

### Local file format

Each local issue file starts with:

```markdown
# Title

Status: ready | manual-review | needs-triage | needs-info | wontfix
GitHub: #N

## What to build
...
## Acceptance criteria
...
## Blocked by
...
```

## When a skill says "publish to the issue tracker"

Determine which type:

- **Development issue** (code bug, feature request, tech debt): Create a GitHub issue with `gh issue create`, then create local mirror in `.scratch/`.
- **Content/planning/PRD**: Create local markdown under `.scratch/<feature-slug>/PRD.md`.

## When a skill says "fetch the relevant ticket"

- For GitHub issues: `gh issue view <number> --comments`
- For local issues: Read the file at the referenced path
