# ADR-0002: Course Page Layout

## Status
Accepted

## Context
We need a standard layout for individual course pages under `courses/<CODE>/<semester>/`
(see ADR-0001). The course page must support:

- Syllabus information (schedule, grading, textbook, office hours)
- Homework file downloads (PDF)
- Online lecture notes in Markdown with LaTeX math
- Minimal maintenance burden — the instructor updates one index page as content grows

The site runs on Docsify v4 with no build step. The design must be as simple as
possible: no custom sidebars, no multi-page navigation frameworks, no config changes.

## Decision
Each course offering uses a single `readme.md` as the hub page, linking to
topic-based notes and downloadable files:

```
courses/MAT203/2026-spring/
  readme.md                          ← single hub page (syllabus + links)
  notes/
    systems-of-linear-equations.md   ← lecture note by topic
    vector-spaces.md
    eigenvalues.md
    ...
  files/
    hw01.pdf                         ← downloadable homework
    hw01-sol.pdf
    ...
```

### `readme.md` (hub page)
One Markdown file containing everything a student needs:

1. **Course info** — code, credit, time, location, instructor, office hours
2. **Grading** — weights and attendance policy
3. **Textbook** — title, author, edition, ISBN
4. **Course plan** — weekly schedule with section references
5. **Homework** — table of assignments with links to `files/hwNN.pdf`
6. **Lecture notes** — list of topics with links to `notes/<topic>.md`

As new homework or notes are added, the instructor appends a row/link to
the corresponding section of `readme.md`. No other file needs editing.

### `notes/<topic>.md`
- Named by topic in kebab-case (e.g., `eigenvalues-and-eigenvectors.md`),
  not by week number
- Contains Markdown + LaTeX rendered by Docsify/MathJax
- Each note is standalone — no assumed reading order beyond what the
  hub page's link order implies

### `files/`
- Flat directory of downloadable PDFs (homework, solutions, handouts)
- No sub-directories — filenames are self-descriptive (e.g., `hw03-sol.pdf`)
- Students download via direct link from the hub page

### No sidebar, no config changes
- No `_sidebar.md` — the hub page's own links provide all navigation
- No changes to `index.html` — the existing Docsify config works as-is
- Docsify renders `readme.md` when a student navigates to
  `math-postech.github.io/#/courses/MAT203/2026-spring/`

## Consequences

### Positive
- Maximally simple: one file to maintain per course, append-only updates
- Zero config changes to the existing Docsify setup
- Notes named by topic are stable — reorganizing the weekly schedule
  does not require renaming files
- Students get a single bookmark that shows everything

### Negative
- A very long hub page for a full-semester course (manageable with
  Markdown headers and browser Ctrl+F)
- No per-course sidebar navigation (acceptable trade-off for simplicity)

## Alternatives Considered

### Separate `homework.md` + `notes.md` pages
- Splits information across multiple files
- Requires cross-linking and more maintenance
- Rejected: adds complexity without proportional benefit

### Week-numbered notes (`week01.md`, `week02.md`)
- Couples file names to the semester schedule
- If the schedule shifts, file names become misleading
- Rejected: topic-based naming is more stable and meaningful

### `_sidebar.md` per course
- Requires enabling `loadSidebar: true` in Docsify config
- Adds a file to maintain in sync with content
- Rejected: user explicitly prefers no sidebar complexity

## Related
- ADR-0001: Course directory structure
- Site technology: Docsify v4 with MathJax 3 (see `CLAUDE.md`)
