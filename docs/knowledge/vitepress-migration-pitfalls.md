# VitePress Migration Pitfalls and Lessons Learned

**Date:** 2026-02-23
**Context:** Adding Number Theory Learning Seminar to the website
**Issue:** Deployment failures and technical debt from Docsify → VitePress migration

## Summary

When adding new content to the website after the Docsify → VitePress migration (Feb 2024), we encountered multiple technical debt issues that caused build failures and confusion. This document records the pitfalls and solutions for future reference.

## Background

The website was migrated from Docsify to VitePress in February 2024 (commit 404d475). However, incomplete cleanup left behind:
- Duplicate files following both frameworks' conventions
- Outdated documentation (CLAUDE.md still described the project as Docsify)
- Mixed file naming conventions across directories

## Pitfall 1: File Naming Convention Differences

### Problem

**VitePress build failed with dead link error:**
```
(!) Found dead link /seminar/number-theory-2026-spring/index in file index.md
[vitepress] 1 dead link(s) found.
```

### Root Cause

Different frameworks use different conventions for directory index files:

| Framework | Index File Convention |
|-----------|----------------------|
| **Docsify** | `readme.md` |
| **VitePress** | `index.md` |

When we created `seminar/number-theory-2026-spring/readme.md` (following old Docsify pattern), VitePress couldn't resolve the directory URL `/seminar/number-theory-2026-spring/` because it expected `index.md`.

### Solution

**Always use `index.md` for directory indexes in VitePress projects:**
```bash
# Correct structure for VitePress
seminar/number-theory-2026-spring/index.md  ✅

# Incorrect (Docsify convention)
seminar/number-theory-2026-spring/readme.md  ❌
```

### Action Taken

1. Renamed `seminar/number-theory-2026-spring/readme.md` → `index.md`
2. Removed duplicate `readme.md` files from `colloquium/` directories
3. Verified all content directories use `index.md` consistently

## Pitfall 2: Duplicate Homepage Files

### Problem

Found both `README.md` and `index.md` in the repository root with identical content, requiring manual synchronization on every update.

### Root Cause

- **Docsify** uses `README.md` as the homepage
- **VitePress** uses `index.md` as the homepage
- During migration, both files were kept, creating maintenance burden

### Evidence

VitePress config explicitly excluded README.md:
```typescript
// .vitepress/config.ts
srcExclude: [
  'README.md',    // Old Docsify homepage (replaced by index.md)
  // ...
]
```

This meant README.md was **never used** by VitePress, but still existed in the repo.

### Solution

**Delete obsolete files after migration:**
```bash
git rm README.md  # VitePress doesn't use this
```

Keep only `index.md` as the single source of truth.

### Action Taken

Removed `README.md` and updated `.vitepress/config.ts` to remove the now-unnecessary srcExclude entry.

## Pitfall 3: Outdated Documentation

### Problem

`CLAUDE.md` (project documentation for AI agents) contained completely incorrect information:
- Described the project as **"Docsify v4"**
- Documented non-existent `index.html` file
- Wrong local development commands (`python -m http.server` instead of `npm run docs:dev`)
- Wrong deployment process (claimed "no CI/CD workflow")

### Impact

This caused the AI agent to:
1. Create files following wrong conventions (readme.md instead of index.md)
2. Not understand the actual build process
3. Waste time investigating non-existent files

### Solution

**Update all project documentation immediately after major migrations:**
```markdown
# Before (Incorrect)
- **Docsify v4** — client-side SPA
- Serve with: python3 -m http.server 8000
- No build step needed

# After (Correct)
- **VitePress** — Vue-powered static site generator
- Dev server: npm run docs:dev
- GitHub Actions deploys to gh-pages branch
```

### Action Taken

Completely rewrote CLAUDE.md with:
- Correct technology stack (VitePress)
- Correct file structure (`index.md` as homepage)
- Correct development workflow (`npm` commands)
- Correct deployment process (GitHub Actions)

## Pitfall 4: Browser Cache Confusion

### Problem

After successful deployment, user reported "main page not updating" despite GitHub showing the latest commit.

### Root Cause

Browser caching of static assets. Even though:
- GitHub Actions build succeeded ✅
- Files deployed to gh-pages branch ✅
- CDN served new content ✅

The user's browser still displayed old cached content.

### Solution

**Always check actual deployed content before debugging:**
```bash
# Use WebFetch or curl to verify server content
curl https://math-postech.github.io/
```

**For users experiencing cache issues:**
- Force refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Use incognito/private mode
- Wait a few minutes for CDN propagation

## Lessons Learned

### For Future Migrations

1. **Clean up completely** — Don't leave old framework files lying around
   - Delete all old convention files (README.md for Docsify)
   - Remove obsolete configuration
   - Update ALL documentation

2. **Update documentation first** — Before anyone starts working on the migrated codebase
   - Project README
   - CLAUDE.md (for AI agents)
   - Contributor guidelines
   - Development setup instructions

3. **Establish conventions clearly** — Document the new framework's patterns
   - File naming (index.md vs readme.md)
   - Directory structure
   - Link formats (absolute vs relative paths)

### For Adding New Content

1. **Follow the current framework's conventions** — Not what you remember from before
   - Check existing directories for patterns
   - Read `.vitepress/config.ts` to understand the setup
   - Use `index.md` for directory indexes (VitePress)

2. **Test builds locally before pushing:**
   ```bash
   npm run docs:build
   ```
   This catches dead link errors before CI/CD fails.

3. **Verify deployment** — Don't trust just the success checkmark
   - Use WebFetch/curl to check actual content
   - Check with cache bypass (incognito mode)

### For Maintaining Consistency

1. **One source of truth** — Never maintain duplicate files
   - ❌ Bad: Both README.md and index.md
   - ✅ Good: Only index.md

2. **Configuration as documentation** — The build config reveals the truth
   - Check `srcExclude` to see what's actually excluded
   - Check `cleanUrls` to understand URL structure
   - Check GitHub Actions workflow for deployment process

3. **Git history is valuable** — Use it to understand past decisions
   ```bash
   git log --grep="migrate\|Docsify\|VitePress" -i
   ```

## Quick Reference: VitePress Conventions

| Item | Convention |
|------|-----------|
| **Homepage** | `index.md` (root) |
| **Directory index** | `index.md` (in subdirectory) |
| **Link to directory** | `/path/to/directory/` (trailing slash) |
| **Local dev** | `npm run docs:dev` |
| **Build** | `npm run docs:build` |
| **Output** | `.vitepress/dist/` |
| **Config** | `.vitepress/config.ts` |

## Related Commits

- `dd198a4` — Fix: Migrate from readme.md to index.md convention
- `34f8f55` — Fix: Remove README.md technical debt
- `ba18739` — Chore: Remove README.md from srcExclude
- `404d475` — Chore: Clean up VitePress migration artifacts (original migration)

## See Also

- [VitePress Documentation](https://vitepress.dev/)
- [ADR-0003: Migrate from Docsify to VitePress](../adr/) (if exists)
- `.vitepress/config.ts` — Current VitePress configuration
