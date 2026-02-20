# Blockquote + LaTeX Rendering Test

**Issue**: Docsify 在渲染引用块（blockquote）中的 LaTeX 公式时，`>` 符号可能被意外渲染进公式内。

---

## Test Case 1: Single-level blockquote with display math

> $$
> x^2 + y^2 = z^2
> $$

**Expected**: 公式正常显示，不包含 `>` 符号
**Markdown Source**:
```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

---

## Test Case 2: Single-level blockquote with inline math

> This is inline math: $x^2 + y^2 = z^2$ in a blockquote.

**Expected**: 行内公式正常显示
**Markdown Source**:
```markdown
> This is inline math: $x^2 + y^2 = z^2$ in a blockquote.
```

---

## Test Case 3: Display math on same line as blockquote marker

> $$ x^2 + y^2 = z^2 $$

**Expected**: 公式正常显示
**Markdown Source**:
```markdown
> $$ x^2 + y^2 = z^2 $$
```

---

## Test Case 4: Nested blockquote (>>) with display math

>> $$
>> \frac{a}{b} = \frac{c}{d}
>> $$

**Expected**: 公式正常显示在双层引用块中
**Markdown Source**:
```markdown
>> $$
>> \frac{a}{b} = \frac{c}{d}
>> $$
```

---

## Test Case 5: Triple-nested blockquote with display math

>>> $$
>>> \int_0^1 f(x) dx
>>> $$

**Expected**: 公式正常显示在三层引用块中
**Markdown Source**:
```markdown
>>> $$
>>> \int_0^1 f(x) dx
>>> $$
```

---

## Test Case 6: Blockquote with text before display math

> Some text before the equation:
> $$
> e^{i\pi} + 1 = 0
> $$
> Some text after.

**Expected**: 文本和公式都正常显示
**Markdown Source**:
```markdown
> Some text before the equation:
> $$
> e^{i\pi} + 1 = 0
> $$
> Some text after.
```

---

## Test Case 7: Display math WITHOUT blockquote (control)

$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$

**Expected**: 正常显示（作为对照组）
**Markdown Source**:
```markdown
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```

---

## Test Case 8: Blockquote with multiline display math

> $$
> \begin{aligned}
> f(x) &= x^2 + 2x + 1 \\
> &= (x+1)^2
> \end{aligned}
> $$

**Expected**: 多行公式正常对齐显示
**Markdown Source**:
```markdown
> $$
> \begin{aligned}
> f(x) &= x^2 + 2x + 1 \\
> &= (x+1)^2
> \end{aligned}
> $$
```

---

## Test Case 9: Blockquote with parenthesis delimiter \(...\)

> \(
> \alpha + \beta = \gamma
> \)

**Expected**: 使用 `\(...\)` 定界符的公式正常显示
**Markdown Source**:
```markdown
> \(
> \alpha + \beta = \gamma
> \)
```

---

## Test Case 10: Blockquote with bracket delimiter \[...\]

> \[
> A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
> \]

**Expected**: 使用 `\[...\]` 定界符的公式正常显示
**Markdown Source**:
```markdown
> \[
> A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
> \]
```

---

## Test Case 11: Mixed nested levels

> Level 1 text with $inline$ math
>
>> Level 2 with display:
>> $$
>> x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
>> $$
>
> Back to level 1

**Expected**: 不同层级的引用块和公式都正常
**Markdown Source**:
```markdown
> Level 1 text with $inline$ math
>
>> Level 2 with display:
>> $$
>> x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
>> $$
>
> Back to level 1
```

---

## Potential Issues and Solutions

### Possible Causes

1. **Markdown Parser Conflict**: Docsify's Markdown parser (marked.js) 可能在 MathJax 处理之前就将 `>` 转换为 HTML `<blockquote>` 标签，导致 `>` 字符被保留在内容中。

2. **Processing Order**: MathJax 可能在 Markdown 解析之后才处理，此时 `>` 已经被包含在文本节点中。

3. **Delimiter Recognition**: `$$...$$` 定界符可能无法正确跨越包含 `>` 的行。

### Potential Solutions

#### Solution 1: Use HTML `<blockquote>` tags directly

<blockquote>

$$
x^2 + y^2 = z^2
$$

</blockquote>

**Markdown Source**:
```markdown
<blockquote>

$$
x^2 + y^2 = z^2
$$

</blockquote>
```

---

#### Solution 2: Indentation instead of blockquote markers

>     $$
>     a^2 + b^2 = c^2
>     $$

**Markdown Source**:
```markdown
>     $$
>     a^2 + b^2 = c^2
>     $$
```

---

#### Solution 3: Place display math outside blockquote

> Consider the following equation:

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$

**Markdown Source**:
```markdown
> Consider the following equation:

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$
```

---

#### Solution 4: Configure MathJax to ignore blockquote markers

If the issue is confirmed, we might need to:
- Add MathJax preprocessing to strip leading `>` from math blocks
- Configure Docsify plugin order
- Use custom regex to clean up before MathJax processing

---

## How to Use This Test File

1. Start local server:
   ```bash
   python3 -m http.server 8000
   ```

2. Navigate to:
   ```
   http://localhost:8000/#/tests/blockquote-latex/
   ```

3. Inspect each test case to see how it renders

4. Check browser console for any MathJax errors

5. Use browser DevTools to inspect the rendered HTML structure

---

## Observations

**Record your findings here:**

- [ ] Which test cases show the `>` rendered inside equations?
- [ ] Which delimiter types (`$$`, `\(...\)`, `\[...\]`) are affected?
- [ ] Does nesting level (>, >>, >>>) make a difference?
- [ ] Which solution approaches work?
