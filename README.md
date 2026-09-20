# Muhammad Ilyas Portfolio

Static personal portfolio for Muhammad Ilyas, built with Astro 5, TypeScript, Tailwind CSS v4, and Markdown content collections. It has no server runtime, API routes, forms, analytics, or third-party runtime services, so it is ready for GitHub Pages.

## Run locally

```bash
corepack pnpm install
corepack pnpm dev
```

The project expects Node.js 20 or newer. The repository uses pnpm; Corepack is a convenient way to enable it when the `pnpm` command is not installed globally.

Useful commands:

```bash
pnpm build
pnpm preview
pnpm lint
pnpm format
```

## Edit content

Personal details, education, experience, skills, languages, and interests live in [src/data/site.ts](src/data/site.ts). Replace the placeholder profile image at `public/images/profile.jpg` when ready, and replace `public/resume.pdf` with the final resume.

Projects are Markdown files in `src/content/projects/`. To add one, create a file with frontmatter like this:

```md
---
title: Project name
stack: [Python, Django, React]
description: A concise, factual description.
repo: https://github.com/username/repository
featured: true
---

Longer project details go here.
```

Use `PLACEHOLDER` for an unavailable repository URL. Code buttons are hidden automatically for placeholder URLs.

## GitHub Pages deployment

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually from the Actions tab.

The workflow uses `actions/checkout`, `withastro/action`, and `actions/deploy-pages` with the required Pages permissions. `astro.config.mjs` reads `GITHUB_REPOSITORY`: a project repository gets a base such as `/portfolio`, while a root user site whose name ends with `.github.io` gets `/`. Set `PUBLIC_SITE` or `PUBLIC_BASE` to override those values locally or in CI.

All internal links and public asset URLs go through `import.meta.env.BASE_URL`, so the generated files work at either site root or a repository sub-path.

## Before publishing

- Add the ToDo Application repository URL.
- Add the Student Management System repository URL.
- Add real project screenshots if you want them included in the project content.
- Confirm the final GitHub repository name so the generated base path is correct.
