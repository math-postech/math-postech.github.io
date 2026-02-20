# ADR-0003: Migrate from Docsify to VitePress

## Status
Proposed

## Context

Docsify v4 uses marked.js as its Markdown parser. marked.js has a
[documented, unresolved bug](https://github.com/commonmark/cmark/issues/204)
(open since 2015) in blockquote lazy continuation handling that causes
blockquote `>` characters to leak into LaTeX display math:

```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

renders with literal `>` inside the equation. The same bug is reproduced in
JupyterLab ([#16755](https://github.com/jupyterlab/jupyterlab/issues/16755),
unresolved since Sep 2024) and acknowledged by the marked.js maintainers
([#3375](https://github.com/markedjs/marked/issues/3375)) as a "use a custom
extension" problem — i.e., unfixable within marked.js itself.

We currently ship a 15-line MathJax startup hook in `index.html:86-111` that
strips `>` from math blocks after marked.js has already corrupted them. This
workaround:

1. Depends on MathJax internals (`tex.findTeX`) that are not part of the
   public API and could break on any MathJax update
2. Can false-positive on legitimate `>` at line start inside math
3. Does not address other marked.js delimiter issues
4. Adds maintenance burden on every Docsify or MathJax version bump

This is a **structural mismatch**: Docsify's processing order
(Markdown → HTML → MathJax) is fundamentally wrong for math-heavy content.
The correct order is (identify math → protect → parse Markdown → render math),
which is what build-time systems using markdown-it achieve.

### Trigger

Engineer investigation: `docs/investigations/docsify-replacement-investigation.md`

### Affected Prior Decisions

- **ADR-0001** (Course Directory Structure): Directory layout is
  framework-agnostic; no impact.
- **ADR-0002** (Course Page Layout): The hub-page-with-links pattern survives
  intact. The only change is that `readme.md` files may need renaming to
  `index.md` (VitePress convention), though VitePress also accepts `readme.md`.

## Research

### Processing Pipeline Comparison

| | Docsify (current) | VitePress (proposed) |
|---|---|---|
| Parse time | Client-side, on every page load | Build-time, once |
| Markdown parser | marked.js | markdown-it |
| Math handling | MathJax runs *after* HTML is built | markdown-it-mathjax3 protects math *before* Markdown parse |
| Blockquote + math | **Broken** (requires workaround) | Correct by design |
| Link validation | Silent 404s | Build-time errors |

### Current Feature Inventory (`index.html`)

| Feature | Current Plugin | VitePress Equivalent | Migration |
|---------|---------------|---------------------|-----------|
| LaTeX math | MathJax 3 + docsify-latex | `markdown-it-mathjax3` (built-in `math: true`) | Config flag |
| Mermaid | docsify-mermaid (CDN) | `vitepress-plugin-mermaid` (npm) | Plugin swap |
| PlantUML | docsify-plantuml (CDN) | `markdown-it-plantuml` via `md.use()` | Plugin swap |
| Accordion | docsify-accordion | `<details>` / custom component | Rewrite (minor) |
| Custom alerts | docsify-plugin-flexible-alerts | `markdown-it-container` + CSS | Config + CSS |
| File include | `[file](:include)` | `<!--@include: ./file-->` | Find-and-replace |
| No build step | Docsify's design | **Lost** — requires `npm run build` | GitHub Actions workflow |

### Custom Alert Types (Critical to Preserve)

The site uses four custom alert types for mathematical content:

```
> [!LEM] → Lemma     (className: attention)
> [!PROP] → Proposition (className: tip)
> [!EXA] → Example   (className: note)
> [!RMK] → Remark    (className: warning)
```

VitePress does not natively support custom container types beyond its five
built-in ones. These must be registered via `markdown-it-container` in
`.vitepress/config.mts` with custom render functions and CSS.

VitePress syntax equivalent:
```markdown
::: lemma Cauchy-Schwarz
Content here.
:::
```

This is a **Markdown syntax change** — all existing content using
`> [!LEM]` must be rewritten to `::: lemma`. This is the largest mechanical
migration task.

### Existing Technical Debt in `index.html`

The current `index.html` has issues that migration would clean up:

- **Duplicate Mermaid loads**: Lines 116-118 and 122-124 load
  `mermaid.js` + `docsify-mermaid.js` twice
- **Commented-out KaTeX block**: Lines 74-80 are dead code
- **Unclosed comment**: Line 80 has `\longrightarrow` outside a comment
- **Cache-busting script**: Lines 137-141 append `README.md` as a `<script>`
  tag, which is nonsensical (MD file loaded as JS)

## Decision

**Migrate from Docsify v4 to VitePress.**

### Rationale

1. **Correct processing pipeline**: markdown-it processes math delimiters
   before Markdown parsing, eliminating the blockquote+math bug by design
2. **Build-time validation**: Broken links and missing files produce build
   errors instead of silent runtime 404s
3. **Content compatibility**: Markdown syntax is 95% compatible; math syntax
   (`$...$`, `$$...$$`) is identical
4. **Active maintenance**: VitePress is actively developed (Vue.js team);
   Docsify's last major release was v4, and its plugin ecosystem is stagnant
5. **Performance**: Pre-rendered HTML + hydration vs. client-side Markdown
   parsing on every page load

### What Changes

| Aspect | Before | After |
|--------|--------|-------|
| Build step | None | `npm ci && npm run docs:build` via GitHub Actions |
| Config | `index.html` script block | `.vitepress/config.mts` |
| Deployment | Push to main → live | Push to main → Actions build → Pages deploy |
| Alert syntax | `> [!LEM]` | `::: lemma` |
| Include syntax | `[file](:include)` | `<!--@include: ./file-->` |
| Homepage file | `README.md` | `index.md` (or keep `README.md`) |

### What Does NOT Change

- Directory structure (`colloquium/`, `courses/`, `tests/`)
- Math syntax (`$...$`, `$$...$$`)
- Content organization (hub pages with links to notes and files)
- Git workflow (push to `main`)
- URL structure (can be preserved with VitePress routing config)

## Alternatives Considered

### Alternative 1: Keep Docsify + Extend Workaround

- Pros: Zero migration cost, no build step
- Cons: Workaround depends on MathJax internals; marked.js bug is unfixable;
  tech debt compounds with each new content type
- **Rejected**: The structural mismatch between marked.js and math rendering
  is architectural, not configurable. Each new workaround increases fragility.

### Alternative 2: Docusaurus

- Pros: Battle-tested (Meta, Stripe), rich plugin ecosystem, MDX support
- Cons: React-based (heavier bundle, different ecosystem from current
  Vue-themed Docsify setup), more features than needed (versioning, i18n),
  larger build output
- **Rejected**: Overkill for a single-department announcement site with ~10
  content pages. The React dependency is unnecessary weight.

### Alternative 3: MkDocs Material

- Pros: Beautiful theme, excellent admonition support (closest to our
  flexible-alerts), strong math rendering
- Cons: Python-based (different toolchain from the JS ecosystem the site
  already uses), PlantUML requires Java runtime at build time
- **Rejected**: Introducing a Python toolchain for a site that currently
  has zero dependencies is a larger ecosystem shift than staying in JS/TS
  with VitePress.

### Alternative 4: Astro Starlight

- Pros: Ultra-fast island architecture, framework-agnostic
- Cons: Smaller plugin ecosystem, less mature than VitePress, fewer
  community examples for math-heavy academic content
- **Rejected**: Insufficient maturity for a site that depends on correct
  math rendering. VitePress has more proven math support.

## Consequences

### Positive

- **Eliminates the blockquote+math bug** — the root cause (marked.js) is
  removed entirely
- **Removes the MathJax startup hack** — `index.html:86-111` deleted
- **Cleans up existing tech debt** — duplicate Mermaid loads, dead KaTeX
  code, nonsensical cache-busting script all go away
- **Build-time error detection** — broken links caught before deployment
- **Faster page loads** — pre-rendered HTML vs. client-side Markdown parsing

### Negative

- **Build step required** — deployment is no longer instant-on-push;
  requires GitHub Actions (adds ~60s build time)
- **Node.js dependency** — `package.json`, `node_modules`, `npm ci` now
  part of the workflow
- **Custom alert migration** — all `> [!LEM]`/`[!PROP]`/`[!EXA]`/`[!RMK]`
  blocks must be rewritten to `::: lemma`/`::: proposition`/etc.
- **Learning curve** — VitePress config is TypeScript, not a script tag
- **Docsify-specific features lost** — runtime Markdown rendering (but this
  is the source of the bug, so losing it is the point)

## Affected Scope

### Files Modified

- `index.html` → **Deleted** (replaced by `.vitepress/config.mts`)
- `README.md` → Rename to `index.md` or keep as-is; update include syntax
- `colloquium/*/readme.md` → Update alert syntax if used
- `courses/*/readme.md` → Update alert syntax if used
- `courses/*/notes/*.md` → Verify math rendering (should be transparent)
- `CLAUDE.md` → Rewrite "Technology", "Local Development", "Deployment",
  "Architecture" sections

### Files Created

- `.vitepress/config.mts` — Site configuration
- `.vitepress/theme/index.ts` — Custom theme with alert container styles
- `.vitepress/theme/custom.css` — Styles for lemma/proposition/example/remark
- `package.json` — Node.js dependencies
- `.github/workflows/deploy.yml` — GitHub Actions build+deploy workflow
- `.gitignore` update — Add `node_modules/`, `.vitepress/dist/`,
  `.vitepress/cache/`

### Migration Phases (Engineer Guidance)

**Phase 1: Scaffold** — Set up VitePress project structure alongside existing
Docsify files. Verify math rendering in blockquotes works correctly.

**Phase 2: Feature parity** — Configure custom containers (lemma, proposition,
example, remark), Mermaid, PlantUML. Verify all plugin equivalents work.

**Phase 3: Content migration** — Rewrite alert syntax, update include
directives, verify all pages render correctly.

**Phase 4: Deployment** — Add GitHub Actions workflow, switch Pages source
from "branch" to "GitHub Actions", delete `index.html`.

### Risks

- **markdown-it-mathjax3 v5+ has reported rendering issues** — Pin to `^4`
- **Custom container registration is verbose** — Each type (lemma, prop, etc.)
  requires a separate `md.use()` call with a render function
- **URL structure change** — Docsify uses `/#/path` (hash routing); VitePress
  uses `/path` (clean URLs). Existing bookmarks will break. Consider adding
  a redirect script in the 404 page.

## Related

- ADR-0001: Course directory structure (unaffected)
- ADR-0002: Course page layout (unaffected)
- Engineer investigation: `docs/investigations/docsify-replacement-investigation.md`
- Current workaround: `index.html:86-111` (MathJax startup hook)
- Test suite: `tests/blockquote-latex/`
