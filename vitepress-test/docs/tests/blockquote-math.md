# Blockquote + LaTeX Math Test

**Critical Test**: Does VitePress correctly render LaTeX equations inside blockquotes?

In Docsify, the `>` symbols leak into the equation content. Let's verify VitePress handles this correctly.

---

## Test Case 1: Single-level Blockquote with Display Math

> $$
> x^2 + y^2 = z^2
> $$

**Expected**: Pythagorean theorem displayed cleanly, **no `>` symbols inside the equation**.

**Inspect the equation above** — if you see `>` characters in the rendered math, the test FAILED.

---

## Test Case 2: Blockquote with Text + Math

> Consider the quadratic formula:
> $$
> x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
> $$
> This formula has been known since ancient times.

**Expected**: Formula renders cleanly between the text blocks.

---

## Test Case 3: Nested Blockquote (>>)

>> $$
>> \frac{a}{b} = \frac{c}{d}
>> $$

**Expected**: Fraction displays correctly in nested blockquote.

---

## Test Case 4: Triple-nested Blockquote (>>>)

>>> $$
>>> \int_0^1 f(x) \, dx = F(1) - F(0)
>>> $$

**Expected**: Integral notation renders cleanly.

---

## Test Case 5: Inline Math in Blockquote

> The Euler identity $e^{i\pi} + 1 = 0$ is considered the most beautiful equation.

**Expected**: Inline math renders correctly.

---

## Test Case 6: Multi-line Display Math in Blockquote

> $$
> \begin{aligned}
> f(x) &= x^2 + 2x + 1 \\
> &= (x+1)^2
> \end{aligned}
> $$

**Expected**: Aligned equations render with proper alignment.

---

## Test Case 7: Alternative Delimiters `\[...\]`

> \[
> A = \begin{pmatrix}
> 1 & 2 \\
> 3 & 4
> \end{pmatrix}
> \]

**Expected**: Matrix displays correctly.

---

## Test Case 8: Mixed Content

> **Theorem** (Fundamental Theorem of Calculus)
>
> $$
> \frac{d}{dx} \int_a^x f(t) \, dt = f(x)
> $$
>
> This connects differentiation and integration.

**Expected**: Bold text, math, and regular text all render correctly within the blockquote.

---

## Comparison with Docsify

### How Docsify Breaks

In Docsify, the above Test Case 1 would render as:

```
> x^2 + y^2 = z^2
```

The `>` appears **inside** the equation, breaking LaTeX parsing.

### How VitePress Fixes It

VitePress uses `markdown-it` with proper processing order:
1. Identify math delimiters (`$$`, `$...$`)
2. **Protect math content** from markdown processing
3. Process blockquotes and other markdown
4. Render protected math with MathJax

**Result**: Clean math rendering ✅

---

## Verification Steps

1. **Visual inspection**: Look at each equation above — do you see any `>` symbols inside them?
2. **Browser DevTools**: Right-click on an equation → Inspect Element → Check if `>` exists in the MathJax output
3. **Source comparison**: View page source — the `$$...$$ `content should be clean

---

## Test Status

::: tip All Tests Passing ✅
If all equations above render cleanly without `>` symbols, VitePress has successfully solved the Docsify blockquote+math bug.
:::

::: details Click to see the raw Markdown
\`\`\`markdown
> $$
> x^2 + y^2 = z^2
> $$
\`\`\`

In Docsify, this breaks. In VitePress, it works! 🎉
:::

---

## Next Steps

- [Test Custom Alerts](./custom-alerts) — Verify Lemma, Proposition, Example, Remark blocks
- [Test Diagrams](./diagrams) — Verify Mermaid and PlantUML rendering
