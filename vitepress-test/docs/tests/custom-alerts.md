# Custom Alerts Test

Testing custom mathematical content blocks (Lemma, Proposition, Example, Remark) styled like Docsify's `flexible-alerts` plugin.

---

## Lemma Block

::: lemma
Let $f: \mathbb{R} \to \mathbb{R}$ be a continuous function. If $f(a) \cdot f(b) < 0$ for some $a < b$, then there exists $c \in (a, b)$ such that $f(c) = 0$.
:::

**Expected**: Red/pink border, matching Docsify's "attention" style.

---

## Proposition Block

::: prop
For any integers $a, b, c$, if $a | b$ and $b | c$, then $a | c$.

**Proof**: Since $a | b$, we have $b = ka$ for some integer $k$. Since $b | c$, we have $c = mb$ for some integer $m$. Therefore, $c = m(ka) = (mk)a$, which shows $a | c$. ∎
:::

**Expected**: Green border, matching Docsify's "tip" style.

---

## Example Block

::: exa
Consider the function $f(x) = x^3 - 3x + 1$.

To find critical points, compute $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.

Critical points are at $x = -1$ and $x = 1$.

$$
f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3 \quad \text{(local max)}
$$

$$
f(1) = 1^3 - 3(1) + 1 = 1 - 3 + 1 = -1 \quad \text{(local min)}
$$
:::

**Expected**: Blue/teal border, matching Docsify's "note" style.

---

## Remark Block

::: rmk
The converse of the above proposition is not always true. Just because $a | c$ does not mean we can find $b$ such that $a | b$ and $b | c$.

**Counterexample**: Let $a = 6$, $c = 12$. Then $a | c$ (since $12 = 2 \cdot 6$), but there is no unique $b$ satisfying the chain.
:::

**Expected**: Yellow/orange border, matching Docsify's "warning" style.

---

## Nested Math in Custom Blocks

::: lemma
**Cauchy-Schwarz Inequality**

For any vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$,

$$
|\mathbf{u} \cdot \mathbf{v}| \leq \|\mathbf{u}\| \|\mathbf{v}\|
$$

with equality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.
:::

---

## Mixed Blocks

::: prop
**Theorem** (Intermediate Value Theorem)

Let $f: [a, b] \to \mathbb{R}$ be continuous. For any value $y$ between $f(a)$ and $f(b)$, there exists $c \in [a, b]$ such that $f(c) = y$.
:::

::: exa
**Application**

Show that $f(x) = x^3 - x - 1$ has a root in $(1, 2)$.

**Solution**:
- $f(1) = 1 - 1 - 1 = -1 < 0$
- $f(2) = 8 - 2 - 1 = 5 > 0$

By IVT, there exists $c \in (1, 2)$ with $f(c) = 0$. ✓
:::

---

## Comparison with Docsify

### Docsify Syntax
```markdown
> [!NOTE|label:Lemma]
> Content here
```

### VitePress Syntax
```markdown
::: lemma
Content here
:::
```

**Advantages**:
- ✅ Cleaner syntax
- ✅ Better IDE support (VitePress containers are standard)
- ✅ Easier to customize styles

---

## Styling Verification

Inspect the CSS to verify styles match Docsify:

| Block Type | Border Color | Background | Docsify Equivalent |
|------------|--------------|------------|-------------------|
| **Lemma** | `#f66` (red) | `rgba(255, 102, 102, 0.1)` | `attention` |
| **Prop** | `#42b983` (green) | `rgba(66, 185, 131, 0.1)` | `tip` |
| **Example** | `#10b981` (teal) | `rgba(16, 185, 129, 0.1)` | `note` |
| **Remark** | `#e7c000` (yellow) | `rgba(231, 192, 0, 0.1)` | `warning` |

---

## Test Status

::: tip Styles Configured ✅
All four custom block types are configured in `.vitepress/config.ts` and styled in `.vitepress/theme/custom.css`.
:::

Check the [Blockquote + Math](./blockquote-math) tests next!
