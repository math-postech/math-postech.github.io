# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the POSTECH Mathematics Department's academic announcements (seminars, colloquiums, workshops). Hosted on GitHub Pages at `math-postech.github.io`.

## Technology

- **Docsify v4** — client-side SPA that renders Markdown files directly in the browser. No build step.
- All dependencies loaded via CDN in `index.html` (MathJax, Mermaid, PlantUML, docsify-accordion).
- LaTeX math supported: inline `$...$` or `\(...\)`, display `$$...$$`.

## Local Development

Serve with any static file server from the repo root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. No install or build step needed.

## Architecture

- `index.html` — Docsify configuration and CDN script/style loading. This is the only HTML file; all routing is client-side.
- `README.md` — Site homepage content. Docsify renders this as the landing page.
- `colloquium/readme.md` — Semester-specific colloquium schedule (included inline into the homepage via Docsify's `:include` directive).
- New seminar pages: create a subdirectory with a `readme.md` and link it from the root `README.md`.

## Deployment

Push to `main` branch. GitHub Pages serves the repo root automatically — no CI/CD workflow needed.

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

- The `index.html` has a block of plugins commented out (KaTeX, some duplicate Mermaid loads). The active LaTeX renderer is MathJax 3 via `docsify-latex`.
- Cache-busting meta tags are set in `index.html` to prevent stale content.
