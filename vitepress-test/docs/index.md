---
layout: home

hero:
  name: "VitePress Test"
  text: "POSTECH Mathematics Department"
  tagline: Testing VitePress as Docsify replacement
  actions:
    - theme: brand
      text: Blockquote + Math Tests
      link: /tests/blockquote-math
    - theme: alt
      text: View on GitHub
      link: https://github.com/math-postech/math-postech.github.io

features:
  - title: ✅ Math in Blockquotes
    details: Correctly handles LaTeX equations inside blockquotes without '>' leaking into formulas
  - title: 🚀 Auto Cache Busting
    details: VitePress generates unique hashes for assets - no more browser cache issues!
  - title: ⚡ Lightning Fast
    details: Static HTML generation = instant page loads, unlike Docsify's client-side rendering
  - title: 🎨 Custom Alerts
    details: Lemma, Proposition, Example, Remark blocks styled like Docsify flexible-alerts
  - title: 📊 Mermaid & PlantUML
    details: Built-in support for diagrams without plugin hassles
  - title: 🔧 Easy Deployment
    details: GitHub Actions auto-deploy on push - zero manual work
---

## Quick Comparison

### Docsify Issues
- ❌ `>` symbols leak into LaTeX equations in blockquotes
- ❌ Aggressive browser caching (need manual cache-busting meta tags)
- ❌ Client-side rendering (slow initial load)
- ❌ Stagnant development (last major update 2019)

### VitePress Solutions
- ✅ Correct math rendering in blockquotes (tested below)
- ✅ Automatic asset hashing (built-in cache busting)
- ✅ Static HTML generation (instant loads)
- ✅ Active development by Vue core team

## Test Results

::: tip Status
**All critical tests passing ✅**

Navigate to [Test Pages](/tests/blockquote-math) to verify blockquote + math rendering.
:::
