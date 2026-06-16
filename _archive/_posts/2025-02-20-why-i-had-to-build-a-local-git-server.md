---
title: Why I had to build a Local Git Server (And How You Can Too in 5 Minutes)
date: 2025-02-20
permalink: /posts/2025/02/why-i-had-to-build-a-local-git-server/
image: "/images/git_init_bare.webp"
author_profile: true
author: Sambath S
tags:
  - git
  - version-control
---

Last year, my team was knee-deep in a project for with strict constraints on working environment. No GitHub, GitLab, or Bitbucket to set up version control. Just a lot of versions of the same code and a **lot of paranoia & frustrations.**

At first, we tried sharing code via pre-defined folders (dedicated workspaces to each team member). Predictably, chaos ensued:

----
"Wait, is this the final final version?"

"Why does your `main.py` overwrite mine?"

"Who has the latest version of `main.py`?!"

----
### Working Setup

A shared working environment (i.e. a shared cloud compute) for my team which doesn't have access to any cloud hosted version control system.

After some research, we figured, We didn’t need GitHub—we just needed a central reference repository to sync our work.

The solution? `git init --bare` — a built-in way to create a lightweight local Git server. Here’s how it saved us.

#### Now, What's a "Bare" Repository?

A normal Git repo has:

- Your files (the working directory)

- The `.git` folder (version history, branches, etc.).

A bare repository has no working directory. It’s just a .git folder, acting as a central hub for pushing/pulling code. Think of it as your own private GitHub- minus the UI *(and all the other fancy stuff github provides)*.

### How to Set It Up in 5 Minutes

_Step 1: Create the Bare Repository_

On your cloud compute (or a shared network drive), create a folder that will act as your server *(the place where everyone can push/pull to)*. You can do this by:

```bash
mkdir my-project  
cd my-project 
git init --bare  
```

*(sometimes, you might also need to run chmod -R g+rw /path/to/my-project.git to avoid "permission denied" errors)*

That's it. You now have a Git server *(I probably gave you the impression that there are more steps)*.

Now, it's business as usual

Everyone on the shared network/drive can Clone and Push

On the machine in the shared network/drive 

```bash
git clone /path/to/my-project.git  # replace this with path to `my-project` folder you created in step 1
cd my-project  
touch README.md  
git add . && git commit -m "Initial commit"  
git push origin main  
```

Now, your teammates can now clone/push/pull like they would with GitHub:

```bash
git clone /path/to/my-project.git  
```

I know more than 95% of the time we would have access to Github or some other version control systems. But still this might be helpful when we have: 

- Air-Gapped Networks: No internet? No problem.
- Learning: Understand how Git actually works under the hood.

Although this helps with important part of version control, it still lacks:
- Web interfaces
- Pull requests
- Issue tracking
- and all other fancy stuff other cloud based version control system's provide

**But for emergencies? `git init --bare` is your Swiss Army knife.**

Next time you’re trapped in a digital desert, remember: you’re always 5 minutes away from your own Git server.