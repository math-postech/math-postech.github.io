# Tutorial: Week 7 — Projections and Left/Right Inverses + Diagonal Cross-Filling Review

> **For**: Teaching Assistants conducting tutorial sessions (Apr 9, 2026)
> **Related Lectures**: [Lecture 8: Cross-Filling Projections](../notes/cross-filling-projections.md), [Lecture 9: Compatible Projections](../notes/compatible-projections.md), [Lecture 10: Constructing Projections](../notes/constructing-projections.md)
> **Duration**: 50 minutes
> **Context**: This is the last tutorial before the midterm (Apr 13). The goal is to (1) connect projections with left/right inverses, and (2) review diagonal cross-filling as a computational tool. Both topics integrate key ideas from Chapters 1–3.

---

## Part A: Projections and Left/Right Inverses (30 min)

### Learning Goal

Students understand that **every projection arises from a left inverse**, and conversely every left inverse produces a projection. Different left inverses of the same matrix give different projections onto the same column space — the choice of left inverse is the choice of "sunlight direction."

### Problem 1: From Left Inverse to Projection (10 min)

Let $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ ($3 \times 2$, rank 2).

**(a)** Verify that $L_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ is a left inverse of $U$.

::: details Solution
$L_1 U = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$ ✓
:::

**(b)** Compute $P_1 = UL_1$ and verify that $P_1^2 = P_1$.

::: details Solution
$$P_1 = UL_1 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \end{pmatrix}$$

$P_1^2 = (UL_1)(UL_1) = U(L_1 U)L_1 = U \cdot I_2 \cdot L_1 = UL_1 = P_1$ ✓

**Key point**: The proof uses **only** $L_1 U = I$ — it works for any left inverse!
:::

**(c)** What are $\operatorname{Col}(P_1)$ and $\operatorname{Null}(P_1)$?

::: details Solution
$\operatorname{Col}(P_1) = \operatorname{Col}(U) = \operatorname{span}\left\{\begin{pmatrix}1\\0\\1\end{pmatrix}, \begin{pmatrix}0\\1\\1\end{pmatrix}\right\}$ (since $P_1 = UL_1$, every column of $P_1$ is in $\operatorname{Col}(U)$; and $P_1 U = U(L_1U) = U$, so $\operatorname{Col}(U) \subseteq \operatorname{Col}(P_1)$).

$\operatorname{Null}(P_1) = \operatorname{Null}(L_1) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$ (since $P_1\mathbf{x} = 0 \iff UL_1\mathbf{x} = 0 \iff L_1\mathbf{x} = 0$ because $U$ is left cancelable).
:::

**(d)** Now take a **different** left inverse: $L_2 = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \end{pmatrix}$. Verify $L_2 U = I_2$, then compute $P_2 = UL_2$.

::: details Solution
$L_2 U = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0+0+1 & 0-1+1 \\ -1+0+1 & 0+0+1 \end{pmatrix} = I_2$ ✓

$$P_2 = UL_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \\ -1 & -1 & 2 \end{pmatrix}$$
:::

**(e)** Compare $P_1$ and $P_2$: same column space? Same null space?

::: details Solution
**Same column space**: $\operatorname{Col}(P_1) = \operatorname{Col}(P_2) = \operatorname{Col}(U)$ (both project **onto** the same subspace).

**Different null spaces**:
- $\operatorname{Null}(P_1) = \operatorname{Null}(L_1) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$
- $\operatorname{Null}(P_2) = \operatorname{Null}(L_2) = \operatorname{span}\left\{\begin{pmatrix}1\\1\\1\end{pmatrix}\right\}$

**Geometric interpretation**: Both projections land on the same "floor" ($\operatorname{Col}(U)$), but the "sunlight" comes from different directions. The sunlight direction = $\operatorname{Null}(L)$ — this is what varies with the choice of left inverse.
:::

::: attention
**The Key Correspondence**

$$\boxed{\text{Left inverses of } U \quad \longleftrightarrow \quad \text{Projections onto } \operatorname{Col}(U)}$$

- Every left inverse $L$ gives a projection $P = UL$ onto $\operatorname{Col}(U)$
- The null space of $L$ determines the sunlight direction (= $\operatorname{Null}(P)$)
- Different left inverses → same floor, different sunlight → different projections
:::

### Problem 2: From Projection to Left Inverse (8 min)

This reverses the direction: **given a projection, extract a left inverse**.

Let $P$ be a projection with $\operatorname{Col}(P) = \operatorname{Col}(U)$ where $U$ is $m \times r$ with rank $r$.

**(a)** Cross-fill $P = UV$ with $VU = I_r$ (Lecture 8). Show that $V$ is a left inverse of $U$.

::: details Solution
$VU = I_r$ is exactly the definition of "V is a left inverse of U." ✓

And indeed $P = UV$ gives $P = U \cdot V$, which is exactly the $P = UL$ construction from Problem 1.
:::

**(b)** What does this say about the relationship between the construction formula $P = B(AB)^{-1}A$ from Lecture 10 and left inverses?

::: details Solution
In the formula $P = B(AB)^{-1}A$:
- $B$ plays the role of $U$ (columns spanning the floor)
- $(AB)^{-1}A$ plays the role of $L$ (a left inverse of $B$)

**Verify**: $(AB)^{-1}A \cdot B = (AB)^{-1}(AB) = I_r$ ✓

So the construction formula is just: **choose a left inverse of $B$, then multiply**. The matrix $A$ determines **which** left inverse — and thus which sunlight direction ($\operatorname{Null}(A)$).
:::

### Problem 3: The Orthogonal Choice (12 min)

Among all left inverses of $U$, one is special: $U^+ = (U^TU)^{-1}U^T$.

**(a)** Verify $U^+$ is a left inverse of $U$ (for the same $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$).

::: details Solution
$U^TU = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

$(U^TU)^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

$U^+ = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \end{pmatrix}$

Check: $U^+ U = \frac{1}{3}\begin{pmatrix} 2+0+1 & 0-1+1 \\ -1+0+1 & 0+2+1 \end{pmatrix} = I_2$ ✓
:::

**(b)** Compute $P_\perp = UU^+$ and verify that $P_\perp = P_\perp^T$ (i.e., this projection is **orthogonal**).

::: details Solution
$$P_\perp = UU^+ = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$

$P_\perp^T = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix} = P_\perp$ ✓ (symmetric!)

This is because $\operatorname{Null}(U^+) = \operatorname{Null}(U^T) = \operatorname{Col}(U)^\perp$ — the sunlight direction is **perpendicular** to the floor.
:::

**(c)** Compare the three projections $P_1$, $P_2$, $P_\perp$:

| | $P_1$ (from $L_1$) | $P_2$ (from $L_2$) | $P_\perp$ (from $U^+$) |
|---|---|---|---|
| Column space | $\operatorname{Col}(U)$ | $\operatorname{Col}(U)$ | $\operatorname{Col}(U)$ |
| Null space | $\operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$ | $\operatorname{span}\left\{\begin{pmatrix}1\\1\\1\end{pmatrix}\right\}$ | $\operatorname{span}\left\{\begin{pmatrix}1\\1\\-1\end{pmatrix}\right\}$ |
| Symmetric? | No | No | **Yes** |

::: details Null space of $P_\perp$
$\operatorname{Null}(P_\perp) = \operatorname{Null}(U^T) = \operatorname{Null}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$.

Solve: $x_1 + x_3 = 0$, $x_2 + x_3 = 0$. Free variable $x_3 = t$: $\operatorname{Null}(U^T) = \operatorname{span}\left\{\begin{pmatrix}1\\1\\-1\end{pmatrix}\right\}$.

Check orthogonality: $\begin{pmatrix}1\\1\\-1\end{pmatrix}^T \begin{pmatrix}1\\0\\1\end{pmatrix} = 1+0-1 = 0$ ✓, $\begin{pmatrix}1\\1\\-1\end{pmatrix}^T \begin{pmatrix}0\\1\\1\end{pmatrix} = 0+1-1 = 0$ ✓

The sunlight is perpendicular to the floor — this is why $P_\perp$ is the **orthogonal** projection.
:::

---

## Part B: Diagonal Cross-Filling Review (20 min)

### Learning Goal

Students can carry out diagonal cross-filling by hand and connect it to inner diagonal cross-filling of $(B^TB)^{-1}$ for finding orthogonal bases.

### Problem 4: Diagonal Cross-Filling Warm-Up (8 min)

Diagonally cross-fill the following symmetric matrix:

$$G = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

**(a)** Cross-fill at diagonal pivot $(1,1)$: pivot value = 2.

::: details Solution
Column 1: $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$, Row 1: $\begin{pmatrix} 2 & 1 \end{pmatrix}$.

$$R_1 = \frac{1}{2}\begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 2 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1/2 \end{pmatrix}$$

Remainder: $G - R_1 = \begin{pmatrix} 0 & 0 \\ 0 & 3/2 \end{pmatrix} = R_2$.
:::

**(b)** Verify: $R_1$ and $R_2$ are both rank-1 and both symmetric.

::: details Solution
$R_1 = \frac{1}{2}\begin{pmatrix}2\\1\end{pmatrix}\begin{pmatrix}2 & 1\end{pmatrix}$: rank 1 ✓, symmetric ✓ (outer product of a vector with itself).

$R_2 = \frac{3}{2}\begin{pmatrix}0\\1\end{pmatrix}\begin{pmatrix}0 & 1\end{pmatrix}$: rank 1 ✓, symmetric ✓.

**Why is symmetry preserved?** Diagonal pivots produce rank-1 pieces of the form $\frac{1}{a_{kk}}\mathbf{c}\mathbf{c}^T$ (column = row transposed), so each piece is automatically symmetric.
:::

### Problem 5: Inner Diagonal Cross-Filling for Orthogonal Basis (12 min)

Let $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$ (full column rank). Find an **orthogonal basis** for $\operatorname{Col}(B)$ using inner diagonal cross-filling of $(B^TB)^{-1}$.

**(a)** Compute $B^TB$ and $(B^TB)^{-1}$.

::: details Solution
$$B^TB = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

$\det(B^TB) = 4 - 1 = 3$.

$$(B^TB)^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$$
:::

**(b)** Diagonally cross-fill $(B^TB)^{-1}$. At each step, read off the pivot column $\mathbf{d}_j$.

::: details Solution
**Step 1**: Pivot at $(1,1)$, value $\frac{2}{3}$.

Column 1: $\mathbf{d}_1 = \frac{1}{3}\begin{pmatrix} 2 \\ -1 \end{pmatrix}$, proportional to $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$.

$$Q_1 = \frac{1}{2/3} \cdot \frac{1}{3}\begin{pmatrix} 2 \\ -1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 4 & -2 \\ -2 & 1 \end{pmatrix}$$

Remainder: $(B^TB)^{-1} - Q_1 = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} - \frac{1}{6}\begin{pmatrix} 4 & -2 \\ -2 & 1 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 0 & 0 \\ 0 & 3 \end{pmatrix} = Q_2$

**Step 2**: $\mathbf{d}_2 \propto \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.
:::

**(c)** Compute $\mathbf{v}_1 = B\mathbf{d}_1$ and $\mathbf{v}_2 = B\mathbf{d}_2$.

::: details Solution
$$\mathbf{v}_1 = B\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$$

$$\mathbf{v}_2 = B\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$$
:::

**(d)** Verify: $\mathbf{v}_1 \perp \mathbf{v}_2$ and both lie in $\operatorname{Col}(B)$.

::: details Solution
$\mathbf{v}_1^T \mathbf{v}_2 = (1)(1) + (-1)(1) + (2)(0) = 0$ ✓

Both are of the form $B\mathbf{d}$, so they lie in $\operatorname{Col}(B)$ by construction. ✓

**Result**: $\left\{\begin{pmatrix}1\\-1\\2\end{pmatrix}, \begin{pmatrix}1\\1\\0\end{pmatrix}\right\}$ is an **orthogonal basis** for $\operatorname{Col}(B)$.
:::

::: remark
**Why Does This Work?**

The diagonal cross-filling $(B^TB)^{-1} = Q_1 + Q_2$ produces rank-1 pieces $R_j = BQ_jB^T$ that are rank-1 **orthogonal projections** forming a compatible family ($R_1R_2 = 0$). Compatible orthogonal projections have mutually orthogonal column spaces. The vectors $B\mathbf{d}_j$ span these column spaces — hence they are automatically orthogonal.

This is the cross-filling alternative to Gram-Schmidt!
:::

---

## TA Notes

### Time allocation

| Part | Problem | Suggested Time | Priority |
|------|---------|---------------|----------|
| A | Problem 1 (left inverse → projection) | 10 min | Core — walk through (a)–(c), let students compute (d)–(e) |
| A | Problem 2 (projection → left inverse) | 8 min | Core — the conceptual reverse direction |
| A | Problem 3 (orthogonal choice) | 12 min | Core — (a)–(b) computation, (c) comparison table is the payoff |
| B | Problem 4 (diagonal cross-filling warm-up) | 8 min | Review — quick computation practice |
| B | Problem 5 (inner diagonal cross-filling) | 12 min | Core — the main computational technique to practice |

### Suggested flow

1. **Start with Problem 1(a)–(c)**: Set up the key idea — left inverse gives projection. Let students compute $P_1 = UL_1$ and verify $P_1^2 = P_1$. Emphasize that the proof only uses $LU = I$.
2. **Problem 1(d)–(e)**: Students compute $P_2$ themselves, then compare. The punchline: same floor, different sunlight.
3. **Problem 2**: Brief conceptual discussion connecting back to the construction formula from Lecture 10. This can be presented quickly.
4. **Problem 3**: Compute $U^+$ and $P_\perp$. The comparison table in (c) is the key takeaway — emphasize "orthogonal = symmetric = sunlight ⊥ floor."
5. **Problem 4**: Quick warm-up to recall diagonal cross-filling mechanics. Can be done on the board in 3 minutes.
6. **Problem 5**: The main computational exercise. Let students work through (a)–(c) in pairs, verify (d) together. Emphasize: no Gram-Schmidt needed.

### Midterm relevance

This tutorial integrates several midterm topics:
- **Cross-filling** (Ch1): the diagonal variant and inner cross-filling
- **Left/right cancellation** (Ch2): left inverse exists ⟺ left cancelable ⟺ rank = columns
- **Projections** (Ch3): $P^2 = P$, sunlight-floor model, orthogonal projections
- **Construction formula** (Ch3): $P = B(AB)^{-1}A$ as a left-inverse construction

Remind students: the midterm covers Chapters 1–3 (through §3.4). The construction formula (Lecture 10) is **not** on the midterm, but the underlying ideas (left inverses, projections) are.

### Common mistakes

- **Confusing left and right inverses**: $LU = I$ (left inverse) vs $UR = I$ (right inverse). Left inverse for **thin** full-rank, right inverse for **fat** full-rank.
- **Thinking left inverse is unique**: It's not! The choice of null space determines which left inverse. The one-to-one correspondence with complements is the key insight.
- **Forgetting why $UL$ is a projection**: Students may verify $P^2 = P$ by brute force instead of the clean argument $P^2 = U(LU)L = UIL = UL = P$. Emphasize the algebraic shortcut.
- **Diagonal cross-filling pivot errors**: Students sometimes forget to divide by the pivot value when forming the rank-1 piece. Remind them: $R_k = \frac{1}{a_{kk}} \cdot (\text{column}) \cdot (\text{row})$.

---

**Last Updated**: 2026-04-06
