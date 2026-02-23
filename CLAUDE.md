# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the POSTECH Mathematics Department's academic announcements (seminars, colloquiums, workshops). Hosted on GitHub Pages at `math-postech.github.io`.

## Technology

- **VitePress** — Vue-powered static site generator that builds markdown files into HTML. Previously used Docsify (migrated in Feb 2024).
- Dependencies managed via npm (see `package.json`).
- LaTeX math supported via MathJax 3: inline `$...$` or `\(...\)`, display `$$...$$`.
- Mermaid diagrams, PlantUML, and custom academic containers (definition, theorem, proposition, etc.) configured in `.vitepress/config.ts`.

## Local Development

Install dependencies and run dev server:

```bash
npm install
npm run docs:dev
```

Then open `http://localhost:5173`. VitePress provides hot module replacement for instant updates.

## Architecture

- `.vitepress/config.ts` — VitePress configuration including plugins, markdown extensions, and custom containers.
- `index.md` — Site homepage content (VitePress entry point).
- `colloquium/*/readme.md` — Semester-specific colloquium schedules.
- `seminar/*/readme.md` — Seminar pages.
- `courses/*/readme.md` — Course pages.
- **When adding new events**: Update `index.md` to add links in the appropriate semester section.

## Git Workflow

**IMPORTANT**: When making commits:

1. **Use the `/commit` skill** — This ensures proper git identity (engineer-agent) is applied
2. **Always push after committing** — User reviews changes on remote, so every commit should be pushed immediately
3. **Never leave unpushed commits** — Use `git push` right after `git commit`

**Why push every time?** The user monitors progress via GitHub's remote repository, not the local working directory.

## Deployment

Push to `main` branch triggers GitHub Actions workflow (`.github/workflows/deploy-vitepress-main.yml`) which:
1. Builds the VitePress site (`npm run docs:build`)
2. Deploys to `gh-pages` branch
3. GitHub Pages serves from `gh-pages` branch

## Course Content (MATH203)

This repository includes detailed lecture notes for the MATH203 Linear Algebra course. These notes use a **unique pedagogical approach** (not standard textbook style).

**When creating or editing course notes:**

1. **MUST READ**: `/docs/knowledge/content-creation-guidelines.md` — comprehensive guide covering:
   - The author's pedagogical philosophy (ingredient table metaphor, contravariant/covariant logic)
   - Source materials (Linear-Algebra-Notes, Linear-Algebra-Slides, Linear-Algebra-Exercises repositories)
   - Writing standards, examples, and checklist

2. **Course structure**: `courses/MATH203/2026-spring/`
   - `notes/*.md` — lecture notes (markdown with MathJax)
   - `index.md` — course index (must update when adding new notes)

3. **Key principle**: These are NOT standard textbook materials. Follow the guidelines exactly.

## Notes

- VitePress automatically handles cache busting with content hashes in built assets.
- Old Docsify hash URLs (e.g., `/#/colloquium/2026-spring/readme.md`) are automatically redirected to VitePress clean URLs via client-side script in `.vitepress/config.ts`.
