# Tutorial: Week 7 — Projections and Left/Right Inverses + Diagonal Cross-Filling Review

> **For**: Teaching Assistants conducting tutorial sessions (Apr 9, 2026)
> **Related Lectures**: [Lecture 8: Cross-Filling Projections](../notes/cross-filling-projections.md), [Lecture 9: Compatible Projections](../notes/compatible-projections.md), [Lecture 10: Constructing Projections](../notes/constructing-projections.md)
> **Duration**: 50 minutes
> **Context**: The goal is to (1) connect projections with left/right inverses, emphasizing that a one-sided inverse is uniquely determined by a subspace, and (2) review diagonal cross-filling of orthogonal projections.

---

## Part A: Projections and Left/Right Inverses (30 min)

### Learning Goal

Students understand that **every projection arises from a left inverse**, and conversely every left inverse produces a projection. The key principle: **a left inverse of $U$ is uniquely determined by its null space** — choosing a complement of $\operatorname{Col}(U)$ pins down exactly one left inverse.

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
**One-Sided Inverses Are Determined by a Subspace**

$$\boxed{\text{Left inverses of } U \quad \longleftrightarrow \quad \text{Complements of } \operatorname{Col}(U)}$$

A left inverse $L$ of $U$ is **uniquely determined by its null space** $\operatorname{Null}(L)$.

**Why?** Suppose $L_1$ and $L_2$ are two left inverses of $U$ with the same null space $W$. For any $\mathbf{x} \in \mathbb{R}^m$, decompose $\mathbf{x} = \mathbf{v} + \mathbf{w}$ where $\mathbf{v} \in \operatorname{Col}(U)$ and $\mathbf{w} \in W$:
- On $\operatorname{Col}(U)$: write $\mathbf{v} = U\mathbf{c}$. Then $L_1\mathbf{v} = L_1 U\mathbf{c} = \mathbf{c} = L_2 U\mathbf{c} = L_2\mathbf{v}$.
- On $W$: $L_1\mathbf{w} = \mathbf{0} = L_2\mathbf{w}$ (both kill $W$).

So $L_1\mathbf{x} = L_2\mathbf{x}$ for all $\mathbf{x}$, hence $L_1 = L_2$.

**The dual statement holds for right inverses**: a right inverse of a fat full-rank matrix $V$ is uniquely determined by its **column space** (the image).

**Summary**: A one-sided inverse is not unique — but it becomes unique once you specify one subspace. The choice of that subspace is the **only** degree of freedom.
:::

### Problem 2: From Projection to Left Inverse (8 min)

This reverses the direction: **given a projection, cross-fill it to extract a left inverse**.

Let $P = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.

**(a)** Verify that $P^2 = P$ and find $\operatorname{rank}(P)$.

::: details Solution
$$P^2 = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} = P \quad ✓$$

$\operatorname{rank}(P) = 2$ (columns 1 and 3 are independent).
:::

**(b)** Cross-fill $P$ to write $P = UV$ with $VU = I_2$.

::: details Solution
**Pivot at $(1,1)$**, value 1. Column: $\begin{pmatrix}1\\1\\0\end{pmatrix}$, Row: $\begin{pmatrix}1&0&0\end{pmatrix}$.

$$R_1 = \begin{pmatrix}1\\1\\0\end{pmatrix}\begin{pmatrix}1&0&0\end{pmatrix} = \begin{pmatrix}1&0&0\\1&0&0\\0&0&0\end{pmatrix}$$

Remainder: $\begin{pmatrix}0&0&0\\0&0&0\\0&0&1\end{pmatrix}$.

**Pivot at $(3,3)$**, value 1. $R_2 = \begin{pmatrix}0\\0\\1\end{pmatrix}\begin{pmatrix}0&0&1\end{pmatrix}$.

$$P = R_1 + R_2 = UV \quad \text{where } U = \begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix},\ V = \begin{pmatrix}1&0&0\\0&0&1\end{pmatrix}$$

Check: $VU = \begin{pmatrix}1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix} = I_2$ ✓
:::

**(c)** What is $V$ in terms of left inverses? What subspace determines this choice?

::: details Solution
$V$ is a **left inverse** of $U$ (since $VU = I_2$).

It is the unique left inverse with $\operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$.

This null space is precisely $\operatorname{Null}(P)$ — the sunlight direction of the original projection. So **cross-filling a projection automatically recovers the left inverse corresponding to that projection's sunlight direction**.
:::

### Problem 3: The Orthogonal Choice (12 min)

Among all left inverses of $U$, one is special: $U^+ = (U^TU)^{-1}U^T$.

**(a)** Verify $U^+$ is a left inverse of $U$ (for the same $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ from Problem 1).

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

## Part B: Diagonal Cross-Filling an Orthogonal Projection (20 min)

### Learning Goal

Students can diagonally cross-fill an orthogonal projection to find orthonormal bases for both $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.

### Problem 4: Orthonormal Basis for $\operatorname{Col}(P)$ (12 min)

Take the orthogonal projection $P_\perp$ from Problem 3:

$$P_\perp = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$

**(a)** Diagonally cross-fill $P_\perp$.

::: details Solution
**Step 1**: Pivot at $(1,1)$, value $\frac{2}{3}$.

Column 1: $\frac{1}{3}\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$, Row 1: $\frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \end{pmatrix}$.

$$R_1 = \frac{1}{2/3} \cdot \frac{1}{3}\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 4 & -2 & 2 \\ -2 & 1 & -1 \\ 2 & -1 & 1 \end{pmatrix}$$

**Remainder**: $P_\perp - R_1 = \frac{1}{6}\begin{pmatrix} 0 & 0 & 0 \\ 0 & 3 & 3 \\ 0 & 3 & 3 \end{pmatrix} = R_2$

**Step 2**: Pivot at $(2,2)$, value $\frac{1}{2}$.

$$R_2 = \frac{1}{2}\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\begin{pmatrix} 0 & 1 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \quad ✓$$

Remainder: zero. Done.
:::

**(b)** Read off the direction vectors from $R_1$ and $R_2$. Are they orthogonal?

::: details Solution
From $R_1$: $\mathbf{v}_1 \propto \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ (the column at the pivot).

From $R_2$: $\mathbf{v}_2 \propto \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.

Check: $\mathbf{v}_1^T \mathbf{v}_2 = 0 - 1 + 1 = 0$ ✓ **Orthogonal!**

**Why automatic?** $P_\perp$ is symmetric, so diagonal cross-filling produces symmetric rank-1 pieces $R_j = \frac{1}{\|\mathbf{v}_j\|^2}\mathbf{v}_j\mathbf{v}_j^T$, each of which is an orthogonal rank-1 projection. By the projection decomposition theorem, $R_1 R_2 = 0$, which forces $\mathbf{v}_1 \perp \mathbf{v}_2$.
:::

**(c)** Write down an **orthonormal** basis for $\operatorname{Col}(P_\perp)$.

::: details Solution
Normalize:

$$\hat{\mathbf{v}}_1 = \frac{1}{\sqrt{6}}\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}, \qquad \hat{\mathbf{v}}_2 = \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

These form an orthonormal basis for $\operatorname{Col}(P_\perp) = \operatorname{Col}(U)$.
:::

### Problem 5: Completing to a Full Orthonormal Basis (8 min)

**(a)** Compute $I - P_\perp$ and cross-fill it.

::: details Solution
$$I - P_\perp = \frac{1}{3}\begin{pmatrix} 1 & 1 & -1 \\ 1 & 1 & -1 \\ -1 & -1 & 1 \end{pmatrix}$$

This has rank 1, so it is already a single rank-1 piece:

$$I - P_\perp = \frac{1}{3}\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}\begin{pmatrix} 1 & 1 & -1 \end{pmatrix}$$

Direction: $\mathbf{w} \propto \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$.
:::

**(b)** Verify: $\mathbf{w}$ is orthogonal to both $\mathbf{v}_1$ and $\mathbf{v}_2$.

::: details Solution
$\begin{pmatrix}1\\1\\-1\end{pmatrix}^T \begin{pmatrix}2\\-1\\1\end{pmatrix} = 2 - 1 - 1 = 0$ ✓

$\begin{pmatrix}1\\1\\-1\end{pmatrix}^T \begin{pmatrix}0\\1\\1\end{pmatrix} = 0 + 1 - 1 = 0$ ✓
:::

**(c)** Write down the full orthonormal basis for $\mathbb{R}^3$.

::: details Solution
$$\left\{\frac{1}{\sqrt{6}}\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix},\ \frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix},\ \frac{1}{\sqrt{3}}\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}\right\}$$

The first two span $\operatorname{Col}(P_\perp)$, the third spans $\operatorname{Null}(P_\perp)$. These three subspaces are mutually orthogonal and together fill all of $\mathbb{R}^3$.
:::

::: remark
**The Recipe**

To find orthonormal bases for both $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$ of an orthogonal projection $P$:

1. Diagonally cross-fill $P$ → orthogonal basis for $\operatorname{Col}(P)$
2. Diagonally cross-fill $I - P$ → orthogonal basis for $\operatorname{Null}(P)$
3. Together they give a full orthogonal basis for the ambient space

Diagonal pivots on symmetric matrices produce symmetric rank-1 pieces $\frac{1}{\|\mathbf{v}\|^2}\mathbf{v}\mathbf{v}^T$, so orthogonality is **automatic** — guaranteed by the projection decomposition theorem.
:::

---

## TA Notes

### Time allocation

| Part | Problem | Suggested Time | Priority |
|------|---------|---------------|----------|
| A | Problem 1 (left inverse → projection) | 10 min | Core — walk through (a)–(c), let students compute (d)–(e) |
| A | Problem 2 (cross-fill projection → left inverse) | 8 min | Core — concrete computation, reinforce the correspondence |
| A | Problem 3 (orthogonal choice) | 12 min | Core — (a)–(b) computation, (c) comparison table is the payoff |
| B | Problem 4 (diagonal cross-fill $P_\perp$) | 12 min | Core — the main computational exercise |
| B | Problem 5 (complete to full orthonormal basis) | 8 min | Core — quick since $I - P_\perp$ is rank 1 |

### Suggested flow

1. **Start with Problem 1(a)–(c)**: Set up the key idea — left inverse gives projection. Let students compute $P_1 = UL_1$ and verify $P_1^2 = P_1$. Emphasize that the proof only uses $LU = I$.
2. **Problem 1(d)–(e)**: Students compute $P_2$ themselves, then compare. The punchline: same floor, different sunlight.
3. **The attention box**: Pause here to state the uniqueness principle clearly: **a left inverse is pinned down by one subspace (its null space)**. This is the central message of Part A.
4. **Problem 2**: Students cross-fill a concrete projection and discover the left inverse factorization. Quick but makes the reverse direction tangible.
5. **Problem 3**: Compute $U^+$ and $P_\perp$. The comparison table in (c) is the key takeaway — emphasize "orthogonal = symmetric = sunlight ⊥ floor."
6. **Problem 4**: Diagonal cross-fill $P_\perp$. Let students carry out Step 1, then check the remainder. Verify orthogonality of the direction vectors.
7. **Problem 5**: Cross-fill $I - P_\perp$ (one step since it's rank 1), verify everything is orthogonal, write out the full orthonormal basis.

### Common mistakes

- **Confusing left and right inverses**: $LU = I$ (left inverse) vs $UR = I$ (right inverse). Left inverse for **thin** full-rank, right inverse for **fat** full-rank.
- **Thinking left inverse is unique**: It's not! But once you fix the null space, it becomes unique. The one-to-one correspondence with complements is the key insight.
- **Forgetting why $UL$ is a projection**: Students may verify $P^2 = P$ by brute force instead of the clean argument $P^2 = U(LU)L = UIL = UL = P$. Emphasize the algebraic shortcut.
- **Diagonal cross-filling pivot errors**: Students sometimes forget to divide by the pivot value when forming the rank-1 piece. Remind them: $R_k = \frac{1}{a_{kk}} \cdot (\text{column}) \cdot (\text{row})$.

---

**Last Updated**: 2026-04-06
