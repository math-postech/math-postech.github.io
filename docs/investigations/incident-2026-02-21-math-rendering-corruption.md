# Incident Report: Math Rendering Corruption in Lecture Notes

**Date**: 2026-02-21
**Severity**: High (Content Corruption)
**Status**: Resolved
**Reporter**: User (math-postech.github.io maintainer)
**Investigator**: engineer-agent

---

## Executive Summary

On 2026-02-21, a critical rendering issue was discovered in the MATH203 Linear Algebra lecture notes where multi-line matrix formulas were being truncated mid-definition, making the content unreadable. Investigation revealed that a mass conversion operation on 2026-02-20 had introduced **at least 6 instances** of erroneous `:::` markers inside LaTeX `$$...\begin{pmatrix}...\end{pmatrix}...$$` display math blocks, breaking MathJax rendering.

**Impact**: Major portions of Lecture 1 (matrix-arithmetic.md) were rendered incorrectly for ~24 hours on the public website.

---

## Timeline

| Time | Event |
|------|-------|
| **2026-02-20 20:52** | Commit `7ada049`: Mass conversion from Docsify blockquotes to VitePress containers. **Error introduced.** |
| **2026-02-21 ~06:00** | User discovers rendering issue: "Computing c₂₂ (lemon 🍋 needed for meal set 2 🍜)" example shows truncated matrix. |
| **2026-02-21 06:20** | Investigation begins. Initially suspected isolated issue. |
| **2026-02-21 06:45** | Root cause identified: Multiple `:::` markers incorrectly inserted inside math blocks. |
| **2026-02-21 06:52** | Commit `86d5bdc`: All errors fixed and pushed to production. |

---

## Root Cause Analysis

### 1. **Original Docsify Format Special Behavior**

The original Docsify markdown used a non-standard feature where display math blocks inside blockquotes did **not require** the `>` prefix on every line:

```markdown
> [!EXA]
> **Computing $c_{22}$**
>
> Using our coffee shop example:
> $$A = \begin{pmatrix}
0 & 0 & 2 \\          ← No '>' prefix!
\color{red}0 & \color{red}0 & \color{red}1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}, \quad
B = \begin{pmatrix}
2 & \color{blue}1 \\
0 & \color{blue}2 \\
1 & \color{blue}1
\end{pmatrix}$$
>
> Row 2 of $A$: $(0, 0, 1)$ — ...
```

Docsify's renderer tolerated this mixed format, allowing math blocks to span lines without the blockquote prefix.

### 2. **Conversion Script Failure Mode**

The conversion from Docsify `> [!EXA]` markers to VitePress `::: example` containers was performed using an automated script (likely `convert_final.py` or similar). The script had a critical logic flaw:

**Flawed Logic** (simplified):
```python
while processing blockquote:
    if line.startswith('>'):
        remove '>', add to output
        if '$$' in line: toggle in_display_math
    elif in_display_math:
        add to output (math continuation)
    else:
        break  # End of blockquote
add ':::'  # Close container
```

**What went wrong**:
When the script encountered:
```
Line N:   > $$A = \begin{pmatrix}    # Sets in_display_math = True, outputs "$$A = \begin{pmatrix}"
Line N+1: 0 & 0 & 2 \\                # No '>' prefix, should continue in math mode
```

The script should have:
1. Checked `in_display_math` state
2. Continued processing math lines without '>' prefix
3. Only closed container after finding closing `$$`

But due to a bug (exact version/logic unclear - scripts found in repo show multiple iterations), the script instead:
1. Failed to track `in_display_math` state correctly across lines
2. Prematurely detected "end of blockquote" when encountering first non-`>` line
3. Inserted `:::` immediately after the math block opening

**Result**:
```markdown
::: example
**Computing $c_{22}$**

Using our coffee shop example:
$$A = \begin{pmatrix}
:::                           ← WRONG! Breaks the math block
0 & 0 & 2 \\
\color{red}0 & \color{red}0 & \color{red}1 \\
...
\end{pmatrix}$$
>                              ← Original '>' lines left unconverted
> Row 2 of $A$: ...
```

### 3. **Why VitePress Rendered It Incorrectly**

VitePress processes markdown in this order:
1. **Container parsing** (`::: example ... :::`) - creates HTML divs
2. **Math rendering** (MathJax processes `$$...$$` blocks)

When VitePress encountered:
```
$$A = \begin{pmatrix}
:::
```

It saw:
- Math block starts with `$$A = \begin{pmatrix}`
- Immediately followed by container closing tag `:::`
- MathJax received incomplete LaTeX: `$$A = \begin{pmatrix}` (no closing delimiters)
- Browser displayed raw text: `A = \begin{pmatrix} 0 & 0 & 2 \ \color{red}0 & \color{red`

---

## Impact Assessment

### Files Affected
- `courses/MATH203/2026-spring/notes/matrix-arithmetic.md`
- `courses/MATH203/2026-spring/notes/matrix-arithmetic.md.new` (temporary file, should not exist)

### Corruption Instances

| Line | Context | Corrupted Formula |
|------|---------|-------------------|
| 216-217 | "Computing c₂₂" example | `$$A = \begin{pmatrix}` (4×3 matrix) |
| 286-287 | Column view example | `$$A = \begin{pmatrix}` (4×3 matrix) |
| 373-374 | Row view example | `$$A = \begin{pmatrix}` (similar) |
| 443-444 | Rank-one sum example | Nested pmatrix |
| 461-462 | Another rank-one example | Matrix product |
| 585-586 | Identity matrix example | `$$I_3 = \begin{pmatrix}` |

**Total**: 6 major corruption sites in a single lecture note.

### User Impact
- **Audience**: ~50-100 students enrolled in MATH203 (3 sections)
- **Duration**: ~24 hours (one night/morning)
- **Visibility**: High - this is the primary course material webpage
- **Confusion potential**: Critical - mathematical content completely garbled

---

## Resolution

### Immediate Fix (Commit `86d5bdc`)

1. **Removed all erroneous `:::`** markers from inside math blocks
2. **Deleted corrupted `.new` file** (`matrix-arithmetic.md.new`)
3. **Added `**/*.new` to VitePress `srcExclude`** to prevent accidental build of temp files
4. **Fixed container formatting**:
   - Removed extra blank lines after container titles
   - Converted misplaced blockquotes (`>`) to normal paragraphs
   - Added missing closing `:::` tags

### Changes Applied

```diff
- $$A = \begin{pmatrix}
- :::
+ $$A = \begin{pmatrix}
  0 & 0 & 2 \\
  ...
  \end{pmatrix}$$
```

**Files modified**:
- `.vitepress/config.ts` (+1 line: `'**/*.new'` exclusion)
- `courses/MATH203/2026-spring/notes/matrix-arithmetic.md` (73 insertions, 76 deletions)

**Commit**: `86d5bdc` - "Fix: Remove erroneous ::: markers breaking math rendering"

---

## Lessons Learned

### What Went Wrong

1. **Insufficient testing after mass conversion**
   - 1132 insertions, 902 deletions across 4 files in a single commit
   - No visual verification of rendered output before push
   - No test suite for markdown→HTML rendering

2. **Script validation gap**
   - Conversion scripts exist in repo (`convert_final.py`, `convert_v3.py`, `convert_markers_v2.py`)
   - Unclear which version was actually used
   - No unit tests for conversion logic
   - No test fixtures comparing before/after

3. **Insufficient understanding of source format**
   - Docsify's lenient blockquote+math mixing not documented
   - Conversion script assumed all blockquote content would have `>` prefix

4. **Temporary file hygiene**
   - `.new` file left in repo (possibly from manual editing/debugging)
   - Not in `.gitignore` or VitePress `srcExclude`
   - Could be accidentally deployed

### What Went Right

1. **Quick detection**: User reported issue immediately upon viewing
2. **Good git hygiene**: Previous working version easily accessible for comparison
3. **Systematic investigation**: Used grep, git log, file comparison to trace root cause
4. **Comprehensive fix**: Not just patching symptoms, but also preventing recurrence (`.new` exclusion)

---

## Preventive Measures

### Immediate Actions (Completed)
- [x] Fixed all corrupted content
- [x] Excluded `**/*.new` files from VitePress build
- [x] Documented incident in this report

### Recommended Future Actions

1. **Testing Protocol for Content Changes**
   - [ ] **Pre-push visual inspection**: Check 3-5 pages on local dev server before pushing markdown edits
   - [ ] **Automated link checker**: Run on every commit (check for broken internal links)
   - [ ] **Math rendering test suite**: Sample formulas that must render correctly

2. **Conversion Script Hardening**
   - [ ] **Add test fixtures**: Known good Docsify→VitePress conversions
   - [ ] **Document which script is canonical**: Remove or archive unused versions
   - [ ] **Add validation step**: Run converted output through markdown linter + math checker
   - [ ] **Dry-run mode**: Preview changes before writing files

3. **Repository Hygiene**
   - [ ] **Update `.gitignore`**: Add `*.new`, `*.bak`, `*.tmp`
   - [ ] **Pre-commit hook**: Warn if committing files with non-standard extensions
   - [ ] **Clean up conversion scripts**: Move to `tools/` directory, add README

4. **Documentation**
   - [ ] **CONTRIBUTING.md**: Guidelines for markdown format, math syntax, testing before push
   - [ ] **Conversion guide**: If more Docsify content needs migration, document the safe process

---

## Technical Deep Dive: Script Bug Analysis

### Suspected Failure Point

Examining `convert_final.py` (found in repo root):

```python
# Line 42-68: Blockquote content processing loop
in_display_math = False

while i < len(lines):
    current_line = lines[i]

    # Check for $$ to track display math state
    display_math_markers = []
    for m in re.finditer(r'\$\$', current_line):
        display_math_markers.append(m.start())

    # Toggle for each $$
    for _ in display_math_markers:
        in_display_math = not in_display_math

    # If line starts with '>', it's blockquote content
    if current_line.startswith('>'):
        content_line = current_line[2:] if len(current_line) > 2 else ''
        result.append(content_line)
        i += 1
        continue

    # If we're in display math, include line as-is
    if in_display_math:
        result.append(current_line)
        i += 1
        continue

    # ... (empty line handling)

    # Non-empty, non-blockquote line while not in math = end of blockquote
    break
```

**The bug**: When processing line `> $$A = \begin{pmatrix}`:
1. Detects one `$$` → sets `in_display_math = True`
2. Line starts with `>` → removes prefix, outputs `$$A = \begin{pmatrix}`
3. Moves to next line `0 & 0 & 2 \\` (no `>` prefix)
4. No `$$` on this line → `in_display_math` stays `True`
5. Line doesn't start with `>` → **Should** enter the `if in_display_math` block (line 64)
6. But **if** there was a version where checking `startswith('>')` happened **before** updating `in_display_math` state, or if the state tracking was off by one line, the script could break early

**Why this is hard to debug**: Three different script versions exist (`convert_final.py`, `convert_v3.py`, `convert_markers_v2.py`), and it's unclear which one was actually used during commit `7ada049`. Possible scenarios:
- An earlier buggy version (not in repo)
- Manual editing after partial script run
- Script ran on already-partially-converted file

**Evidence**: The corrupted output shows:
- `:::` inserted mid-math block → Script **did** break the loop early
- But closing `$$` and rest of content **are** present → Script didn't discard lines, just closed container too early

**Most likely scenario**: The script broke out of the loop upon seeing the first non-`>` line, even though `in_display_math` was `True`, suggesting the `if in_display_math` check (line 64) was either:
- Missing in the version used
- Placed after the break condition
- Had a logic error in state tracking

---

## Appendix: File Artifacts

### Conversion Scripts Found in Repository

1. `convert_final.py` (3491 bytes, modified 2026-02-20 22:37)
   - Claims to "properly handle display math environments"
   - Has `in_display_math` tracking logic
   - Should work correctly in theory

2. `convert_v3.py` (3710 bytes, modified 2026-02-20 22:39)
   - "Simpler approach" comment
   - Also has `in_display_math` tracking
   - Modified **after** the conversion commit (20:52), suggesting it was a fix attempt

3. `convert_markers_v2.py` (4153 bytes, modified 2026-02-20 22:36)
   - Modified **after** conversion commit
   - Likely another iteration trying to fix the bug

**Conclusion**: The actual conversion may have used an even earlier version not preserved in the repo.

### VitePress Configuration Changes

Commit `7ada049` modified `.vitepress/config.ts` to add 9 custom container types:

```typescript
md.use(container, 'example', {
  render: (tokens, idx) => {
    if (tokens[idx].nesting === 1) {
      return '<div class="custom-block example">\n<p class="custom-block-title">Example</p>\n'
    } else {
      return '</div>\n'
    }
  }
})
```

This configuration is **correct** - the issue was in the markdown content itself, not the VitePress setup.

---

## Sign-off

**Incident resolved**: 2026-02-21 06:52 UTC-5
**Verification**: All affected formulas now render correctly
**Follow-up**: Recommended preventive measures documented above

**Reported by**: engineer-agent
**Date**: 2026-02-21
