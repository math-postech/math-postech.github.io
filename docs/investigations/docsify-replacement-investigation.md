---
issue-type: technical-debt
severity: high
assignee: architect
created: 2026-02-20
status: needs-investigation
---

# Docsify Replacement Investigation

## Executive Summary

Docsify's underlying Markdown parser (marked.js) has **fundamental architectural flaws** that make it incompatible with mathematical notation in blockquotes. This is not a configuration issue—it's a **design bug in the CommonMark spec implementation** that has existed for years and remains unresolved.

**Recommendation**: Investigate migration to a proper static site generator (VitePress, Docusaurus, MkDocs) that uses a correct Markdown→Math processing pipeline.

---

## The Problem: How Docsify Fucks Up Math Rendering

### Symptom

When writing LaTeX display math inside Markdown blockquotes:

```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

The `>` symbols **leak into the equation** and get rendered as part of the LaTeX:

```
> x^2 + y^2 = z^2  ← the '>' appears in the rendered math
```

This breaks equation rendering and produces visual garbage.

---

## Root Cause: Docsify's Broken Architecture

### Processing Pipeline (Broken)

```
User's Markdown
    ↓
marked.js parses blockquote (CORRUPTS CONTENT)
    ↓
HTML with broken delimiters
    ↓
MathJax tries to render (TOO LATE)
    ↓
Garbage output
```

### Why It's Broken

1. **Docsify uses marked.js** as its Markdown parser
2. **marked.js has a [documented bug](https://github.com/commonmark/cmark/issues/204)** in blockquote lazy continuation handling
3. **marked.js [destroys math delimiters](https://github.com/markedjs/marked/issues/3375)** before MathJax can process them
4. **Processing order is backwards**: Markdown parsing happens BEFORE math detection, so `>` characters get baked into the content

### Evidence of the Bug

**Same issue exists in JupyterLab**: [Issue #16755](https://github.com/jupyterlab/jupyterlab/issues/16755)
- Reported: 2024-09-07
- Status: **STILL UNRESOLVED** after 5+ months
- Symptom: Identical to ours

**marked.js maintainers acknowledge the issue**: [Issue #3375](https://github.com/markedjs/marked/issues/3375)
- Their solution: "Use a custom extension to preserve delimiters"
- Translation: **"Our parser is broken, work around it yourself"**

**CommonMark spec itself has the bug**: [cmark Issue #204](https://github.com/commonmark/cmark/issues/204)
- Bug title: "Bug in lazy blockquote continuation (or corresponding spec is wrong, whichever)"
- Status: Open since 2015
- **The spec maintainers don't even know if it's a bug or intended behavior**

---

## Why GitHub Works But Docsify Doesn't

GitHub **doesn't use marked.js**. GitHub uses:

1. **Custom Markdown renderer** (not marked.js)
2. **Native LaTeX support** added in 2022
3. **Correct processing order**:
   ```
   Markdown → Identify math blocks → Protect them → Parse other markdown → Render math
   ```

From [GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions):

> "GitHub's math rendering capability uses MathJax... Mathematical expressions rendering is available in GitHub Issues, GitHub Discussions, pull requests, wikis, and Markdown files."

**GitHub specifically tests and supports math in blockquotes**. Docsify does not.

---

## Our Workaround (Fragile Hack)

We added a **MathJax startup hook** in `index.html` to strip `>` from math blocks before rendering:

```javascript
window.MathJax = {
  startup: {
    ready: () => {
      const tex = MathJax.startup.input[0];
      const originalFindTex = tex.findTeX.bind(tex);
      tex.findTeX = function(node) {
        const result = originalFindTex(node);
        result.forEach(match => {
          // Remove blockquote markers that leaked through
          match.math = match.math.replace(/^>\s*/gm, '');
        });
        return result;
      };
    }
  }
};
```

### Why This Sucks

1. **Fragile**: Depends on MathJax internals that could change
2. **Reactive**: Fixing the symptom, not the cause
3. **Incomplete**: Doesn't fix other marked.js delimiter issues
4. **Maintenance burden**: Need to test after every Docsify/MathJax update
5. **Band-aid on a broken limb**: marked.js will continue breaking things

---

## Current Feature Requirements

Our `index.html` currently uses:

| Feature | Plugin/Library | Purpose |
|---------|---------------|---------|
| **Markdown rendering** | Docsify + marked.js | Client-side SPA |
| **LaTeX math** | MathJax 3 + docsify-latex | Equations (inline `$...$`, display `$$...$$`) |
| **Mermaid diagrams** | docsify-mermaid | Flowcharts, sequence diagrams |
| **PlantUML diagrams** | docsify-plantuml | UML diagrams |
| **Accordion/collapse** | docsify-accordion | Collapsible sections |
| **Custom alerts** | docsify-plugin-flexible-alerts | Styled boxes (Lemma, Proposition, Example, Remark) |
| **No build step** | Docsify's design | Everything runs in browser |

---

## Replacement Options Analysis

### Option 1: **VitePress** ⭐ RECOMMENDED

**Pros**:
- ✅ **Modern architecture**: Vue 3 + Vite (blazing fast)
- ✅ **Built-in markdown-it**: Much better than marked.js
- ✅ **Native math support**: Via markdown-it-mathjax3 or markdown-it-katex
- ✅ **Native Mermaid**: Built-in support
- ✅ **PlantUML support**: Via plugins
- ✅ **Custom containers**: For alerts/callouts (better than flexible-alerts)
- ✅ **Performance**: Static HTML + minimal client JS
- ✅ **GitHub Pages friendly**: Build → deploy workflow

**Cons**:
- ❌ **Build step required**: No more zero-build client-side rendering
- ⚠️ **Migration effort**: Need to restructure content slightly

**Tech stack**: Vue 3, Vite, markdown-it
**Docs**: https://vitepress.dev
**Math example**: https://vitepress.dev/guide/markdown#math-equations

---

### Option 2: **Docusaurus**

**Pros**:
- ✅ **Battle-tested**: Used by Meta, Stripe, Supabase
- ✅ **Rich plugin ecosystem**: Everything we need exists
- ✅ **MDX support**: Can embed React components
- ✅ **Versioning**: Built-in doc versioning
- ✅ **Math + Mermaid**: Native support

**Cons**:
- ❌ **Build step required**
- ❌ **Heavier**: React-based, larger bundle
- ⚠️ **Overkill**: More features than we need

**Tech stack**: React, webpack
**Docs**: https://docusaurus.io

---

### Option 3: **MkDocs Material**

**Pros**:
- ✅ **Beautiful default theme**
- ✅ **Python-based**: Easy to extend
- ✅ **Math + Mermaid**: Native support
- ✅ **Search**: Built-in full-text search
- ✅ **Fast**: Pre-rendered HTML

**Cons**:
- ❌ **Build step required** (Python)
- ⚠️ **Different ecosystem**: Python plugins vs JS
- ⚠️ **PlantUML**: Requires separate plugin setup

**Tech stack**: Python, Jinja2
**Docs**: https://squidfunk.github.io/mkdocs-material/

---

### Option 4: **Starlight** (Astro-based)

**Pros**:
- ✅ **Ultra-fast**: Astro's island architecture
- ✅ **Framework-agnostic**: Can use Vue/React/Svelte components
- ✅ **Math + Mermaid**: Via plugins
- ✅ **Modern**: Cutting-edge tech

**Cons**:
- ❌ **Build step required**
- ⚠️ **Still beta**: Less mature than VitePress/Docusaurus
- ⚠️ **Smaller ecosystem**: Fewer plugins

**Tech stack**: Astro
**Docs**: https://starlight.astro.build

---

### Option 5: Keep Docsify (Not Recommended)

**Pros**:
- ✅ **No migration cost**
- ✅ **Zero build step**

**Cons**:
- ❌ **Marked.js is fundamentally broken** and won't be fixed
- ❌ **Will break again** with future content
- ❌ **Workarounds compound tech debt**
- ❌ **Poor maintainability**

---

## Comparison Table

| Criterion | VitePress | Docusaurus | MkDocs | Docsify |
|-----------|-----------|------------|--------|---------|
| **Markdown parser** | markdown-it ✅ | Remark ✅ | Python-Markdown ✅ | marked.js ❌ |
| **Math in blockquotes** | ✅ Works | ✅ Works | ✅ Works | ❌ BROKEN |
| **Build step** | Required | Required | Required | None |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Mermaid** | ✅ Native | ✅ Plugin | ✅ Native | ✅ Plugin |
| **PlantUML** | ✅ Plugin | ✅ Plugin | ✅ Plugin | ✅ Plugin |
| **Custom alerts** | ✅ Containers | ✅ Admonitions | ✅ Admonitions | ✅ Plugin |
| **Migration effort** | Medium | Medium | Medium | None |
| **Maintainability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

---

## Recommendation

### Short-term (Immediate)

Keep the MathJax workaround in place. It's ugly but functional.

### Medium-term (Next sprint)

**Migrate to VitePress** because:

1. **Correct Markdown processing**: Uses markdown-it, which handles math delimiters correctly
2. **Minimal migration**: Markdown syntax is 95% compatible
3. **Modern tooling**: Vite is industry standard
4. **Better performance**: Static HTML vs client-side rendering
5. **Future-proof**: Active development, large community

### Migration checklist

- [ ] Set up VitePress project structure
- [ ] Configure markdown-it-mathjax3 or markdown-it-katex
- [ ] Configure Mermaid support
- [ ] Add PlantUML plugin
- [ ] Recreate custom alert containers (Lemma, Proposition, etc.)
- [ ] Migrate existing Markdown files (mostly copy-paste)
- [ ] Set up GitHub Actions for build + deploy
- [ ] Test all math rendering, especially in blockquotes
- [ ] Update CLAUDE.md with new workflow

---

## References

### Docsify Issues

- [CommonMark lazy blockquote bug](https://github.com/commonmark/cmark/issues/204) - Open since 2015
- [marked.js destroys math delimiters](https://github.com/markedjs/marked/issues/3375) - Closed as "use workarounds"
- [JupyterLab same issue](https://github.com/jupyterlab/jupyterlab/issues/16755) - Unresolved since Sep 2024

### Alternatives Comparison

- [Documentation Generator Comparison 2025](https://okidoki.dev/documentation-generator-comparison)
- [Top 10 Documentation Tools 2026](https://satisfyhost.com/blog/best-software-documentation-tools-open-source/)
- [MkDocs vs Docusaurus](https://blog.damavis.com/en/mkdocs-vs-docusaurus-for-technical-documentation/)
- [Best Docsify Alternatives](https://apidog.com/blog/docsify-alternatives/)

### How Others Solved This

- [GitHub's math rendering](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions) - Custom renderer
- [VitePress math equations](https://vitepress.dev/guide/markdown#math-equations) - markdown-it-mathjax3
- [Docusaurus math support](https://docusaurus.io/docs/markdown-features/math-equations) - remark-math + rehype-katex

---

## Questions for Architect

1. **Build step acceptable?** All modern alternatives require a build step. GitHub Actions can automate this.

2. **Tech stack preference?** Vue (VitePress), React (Docusaurus), or Python (MkDocs)?

3. **Migration timeline?** This is tech debt that will only get worse. Sooner is better.

4. **Risk tolerance?** How many more rendering bugs can we tolerate before migrating?

---

## Conclusion

**Docsify is fundamentally broken for academic/mathematical content.**

The issue isn't a bug we can fix—it's an **architectural flaw** in marked.js's CommonMark implementation that has existed since 2015 and shows no signs of being resolved.

Every workaround we add is **tech debt** that compounds the problem. The only sustainable solution is **migration to a proper static site generator** with correct Markdown→Math processing.

**Recommended action**: Architect investigates VitePress migration feasibility and estimates effort.
