# ADR-0001: Course Directory Structure

## Status
Accepted

## Context
The POSTECH Math department website (`math-postech.github.io`) currently serves
academic event announcements (colloquiums, workshops, seminars). The site owner
wants to extend it to publish course-specific teaching information — syllabi,
homework, lecture notes, announcements — organized by course code and semester.

Three top-level directory names were considered:

- `teaching/` — informal, ambiguous scope (could include TA info, pedagogy, etc.)
- `curriculum/` — refers to the overall program/degree structure (培养方案),
  not individual courses
- `courses/` — directly denotes individual courses, matches the intended content

The existing `colloquium/` directory uses a `<year>-<semester>/` sub-directory
pattern (e.g., `colloquium/2026-spring/`). Consistency with this convention is
desirable.

## Decision
Use `courses/` as the top-level directory for course information, with a
two-level hierarchy beneath it:

```
courses/
  <COURSE-CODE>/
    <year>-<semester>/
      readme.md
```

Where:
- `<COURSE-CODE>` is the official course identifier (e.g., `MAT203`, `MAT401`)
- `<year>-<semester>` follows the existing pattern: `2026-spring`, `2025-fall`
- `readme.md` is the Docsify-rendered content page for that offering

Example:
```
courses/
  MAT203/
    2026-spring/
      readme.md
  MAT401/
    2026-spring/
      readme.md
```

## Consequences

### Positive
- Consistent with the existing `colloquium/<year>-<semester>/` pattern
- `courses/` is semantically precise — each sub-directory is one course
- Course codes as directory names are stable, universally understood identifiers
- Semester sub-directories allow the same course to have independent pages per offering
- No build step needed — Docsify renders the Markdown directly

### Negative
- If the site grows to host many courses across many semesters, the directory
  tree will be deep but manageable (3 levels)
- Course codes may change if the university renumbers courses (low probability;
  mitigated by creating a new directory and linking from the old one)

## Alternatives Considered

### `teaching/`
- Too informal and vague in scope
- Could be confused with teaching philosophy, TA resources, etc.
- Rejected for lack of specificity

### `curriculum/`
- Semantically refers to the overall degree program structure (培养方案),
  not individual course offerings
- Would be misleading as a container for per-course, per-semester pages
- Rejected for semantic mismatch

### Flat structure (`courses/MAT203-2026-spring/`)
- Simpler but loses the ability to list all offerings of a single course
- Rejected for reduced navigability

## Related
- Existing pattern: `colloquium/2026-spring/readme.md`
- Site technology: Docsify v4 (see `CLAUDE.md`)
