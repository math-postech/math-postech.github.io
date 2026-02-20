# EIR-0000-0001: Flexible Alerts Implementation Issues

## Status
Resolved

## Parent DR
DR-0000-0001: Docsify Flexible Alerts for Mathematical Content

## Context

After implementing the flexible-alerts plugin and creating the first week's lecture notes with colored alerts, the user reported that "你之前的不太行" (your previous implementation doesn't work well). Upon pulling the user's corrections, two critical issues were identified:

1. **Incorrect className usage** in plugin configuration
2. **Missing Docsify routing configuration** and improper relative path in links

## Investigation

### Issue 1: Custom className Values Don't Exist

**What I did wrong:**
```javascript
'flexible-alerts': {
    style: 'flat',
    lem: {
        label: 'Lemma',
        iconVisibility: 'hidden',
        className: 'lemma'      // ❌ This class doesn't exist!
    },
    prop: {
        label: 'Proposition',
        iconVisibility: 'hidden',
        className: 'proposition' // ❌ This class doesn't exist!
    },
    // ... etc
}
```

**The fundamental error:**

I treated `className` as if it were an arbitrary identifier that I could name freely. I assumed that by specifying `className: 'lemma'`, the plugin would create a custom CSS class `.lemma` that I could then style separately.

**Reality:**

The `className` property must reference **built-in alert types** that already exist in the plugin:
- `note` (blue, informational)
- `tip` (green, success/helpful)
- `warning` (yellow/orange, caution)
- `attention` (red, important)
- `important` (also available)

These are the only predefined styles. The plugin does not create new styles from arbitrary className values.

**What actually happened:**

When I used `className: 'lemma'`, the plugin tried to apply styles for an alert type called "lemma" which doesn't exist in its CSS. Result: the alerts likely rendered with **no styling** or fell back to default blockquote appearance, defeating the entire purpose of using colored alerts.

### Issue 2: Docsify Routing and Relative Paths

**What I did wrong:**
```markdown
- [Week 1: Matrix Arithmetic](notes/matrix-arithmetic.md)
```

**User's correction:**
```markdown
- [Week 1: Matrix Arithmetic](./notes/matrix-arithmetic.md)
```

Additionally, user added:
```javascript
window.$docsify = {
    relativePath: true,  // ✅ Critical for proper routing
    // ...
}
```

**Why this matters:**

Docsify uses hash-based routing (`#/path/to/file`). Without `relativePath: true`, links are resolved from the repository root, not from the current page's directory. This causes:
- Broken navigation when deep in the directory hierarchy
- 404 errors when clicking on relative links
- Inconsistent behavior between homepage and nested pages

The explicit `./notes/` prefix makes the intent clearer, even though with `relativePath: true` it might work without it.

### Issue 3: Commented Out `style: 'flat'`

**User's change:**
```javascript
// style: 'flat',  // Commented out
```

**Why:**

The `style` property applies globally to **all** alert types. By commenting it out:
- Each alert type uses its default style (which is 'callout')
- Callout style provides better visual distinction with borders and background
- More suitable for mathematical content where we need clear visual separation

My original `style: 'flat'` would have forced all alerts into a flatter appearance, which might have looked less distinct.

## Root Cause Analysis

### Mistake #1: Insufficient Plugin Documentation Study

I read the plugin documentation but failed to deeply understand the **architecture**:
- The plugin ships with a fixed set of built-in alert types
- Each type has predefined CSS (colors, icons, styles)
- `className` is a **selector**, not a **creator**

**Evidence of shallow reading:**

In DR-0000-0001, I wrote:
> "Custom alert types for mathematical content"

This phrasing reveals my misunderstanding. I thought I was **creating** new alert types. I was actually **configuring labels** for existing types.

### Mistake #2: Not Testing Before Committing

I did not:
- Open the site locally after implementing the plugin
- Verify that alerts rendered with colors
- Inspect the DOM to see if expected CSS classes were applied

**Proper workflow should have been:**
1. Add plugin to index.html
2. Create a test markdown file with one alert: `> [!LEM]`
3. Serve locally: `python3 -m http.server 8000`
4. Open browser and verify the alert has color
5. If no color → investigate why → discover className issue
6. Fix and test again
7. Only then create full notes and commit

**What I did instead:**
1. Add plugin
2. Create full 400-line notes file
3. Commit immediately
4. Hope it works

This is **cargo-cult programming** — following forms without understanding substance.

### Mistake #3: Assuming Default Behavior

I assumed:
- Docsify would handle relative paths correctly by default
- Custom className values would "just work"

Both assumptions were wrong. This reveals a pattern: **trusting abstractions without verifying**.

## Corrected Implementation

### Proper className Mapping

The user's mapping is semantically appropriate:

| Math Content | Custom Label | Built-in className | Color | Semantic Meaning |
|--------------|--------------|-------------------|-------|------------------|
| Lemma | `Lemma` | `attention` | Red | Important technical result |
| Proposition | `Proposition` | `tip` | Green | Key theorem to remember |
| Example | `Example` | `note` | Blue | Informational, clarifying |
| Remark | `Remark` | `warning` | Yellow | Caution, special case |

This mapping uses the **semantic meaning** of colors:
- Red (attention) → Lemmas are technical, require careful attention
- Green (tip) → Propositions are helpful results to know
- Blue (note) → Examples explain concepts
- Yellow (warning) → Remarks point out edge cases or warnings

### Configuration That Actually Works

```javascript
'flexible-alerts': {
    // No global style override → uses default 'callout'
    lem: {
        label: 'Lemma',           // Custom label ✅
        iconVisibility: 'hidden',
        className: 'attention'    // Existing built-in type ✅
    },
    prop: {
        label: 'Proposition',
        iconVisibility: 'hidden',
        className: 'tip'
    },
    exa: {
        label: 'Example',
        iconVisibility: 'hidden',
        className: 'note'
    },
    rmk: {
        label: 'Remark',
        iconVisibility: 'hidden',
        className: 'warning'
    }
}
```

**Key insight:** We keep the **custom labels** (which are text-only) but use **existing classNames** (which provide the styling).

## Lessons Learned

### 1. Documentation Reading Depth

**Old approach:** Skim documentation, extract syntax, apply.

**New approach:**
- Read plugin source code if documentation is unclear
- Look for "available options" or "built-in types" sections
- Check for examples showing what values are valid
- Understand the **architecture** before configuring

### 2. Test-Driven Development for Configuration

Even configuration changes should be tested:
1. Make minimal change
2. Test locally
3. Verify expected behavior
4. Iterate until working
5. Then scale up (create full content)

### 3. Never Assume Framework Defaults

Docsify's routing behavior is not "obvious" — it requires explicit configuration:
- `relativePath: true` for relative link resolution
- `loadSidebar`, `loadNavbar` for navigation
- `alias` for path redirects

Each framework has quirks. **Test, don't assume.**

### 4. When User Says "不太行", Investigate Systematically

The user's terse feedback "doesn't work well" should trigger:
1. Pull their changes
2. Diff the changes: `git diff old..new`
3. Analyze **what** was changed
4. Infer **why** it was changed
5. Document the lesson

This EIR is the result of that systematic investigation.

## Impact Assessment

### Severity: Medium

- **User impact:** The notes file was created but alerts likely rendered without colors
- **Time wasted:** ~1 hour of work creating content that didn't display correctly
- **Learning value:** High — revealed gaps in understanding plugin architecture

### Corrective Actions Taken

1. User corrected the className values ✅
2. User added `relativePath: true` to Docsify config ✅
3. User fixed link path to use `./notes/` prefix ✅
4. This EIR documents the mistakes and lessons ✅

### Preventive Measures for Future

- [ ] Always test plugin configurations locally before creating content
- [ ] Read plugin documentation more carefully, especially "available options"
- [ ] When using a new tool, create a minimal test case first
- [ ] Add a checklist to the implementation workflow (see below)

## Implementation Checklist (For Future Plugin Integrations)

```markdown
- [ ] Read plugin documentation thoroughly
- [ ] Identify all valid configuration options (not just examples)
- [ ] Create minimal test file with one instance
- [ ] Test locally (python -m http.server)
- [ ] Verify visual appearance matches expectation
- [ ] Inspect DOM in browser to verify CSS classes
- [ ] If not working, check browser console for errors
- [ ] Iterate until working
- [ ] Document configuration in DR
- [ ] Only then create full content
- [ ] Test full content before committing
- [ ] Commit with clear description of what was tested
```

## Related

- Parent: DR-0000-0001 (Flexible Alerts Investigation)
- Plugin: https://github.com/fzankl/docsify-plugin-flexible-alerts
- Docsify Configuration: https://docsify.js.org/#/configuration

## References

Looking at the plugin source code (which I should have done initially):

```javascript
// From flexible-alerts source
const defaultStyles = {
  note: { label: 'Note', icon: '...', className: 'note' },
  tip: { label: 'Tip', icon: '...', className: 'tip' },
  warning: { label: 'Warning', icon: '...', className: 'warning' },
  attention: { label: 'Attention', icon: '...', className: 'attention' }
}
```

The **className values must match keys in the CSS stylesheet** bundled with the plugin. Custom className values are ignored unless you provide custom CSS.

---

## Reflection Summary

**What went wrong:** I used custom className values that don't exist, breaking the visual styling.

**Why it went wrong:** Insufficient understanding of plugin architecture + no local testing.

**How to prevent:** Test incrementally, read documentation deeply, verify assumptions.

**Key takeaway:** Configuration is code. Code must be tested. Even if it's "just config."

---

*Document authored: 2026-02-20*
*Incident date: 2026-02-20*
*Resolution date: 2026-02-20 (same day, user corrected immediately)*
