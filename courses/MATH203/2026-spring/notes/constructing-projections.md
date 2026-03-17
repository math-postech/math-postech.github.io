# Lecture 10: Constructing Projections

> **Topics**: §3.5–3.7 — Uniqueness of Projections, Construction Formula $P = B(AB)^{-1}A$, Orthogonal Projection Formula $P = B(B^TB)^{-1}B^T$, Inner Diagonal Cross-Filling, Least Squares
> **Date**: Apr 20–23, 2026

---

## Overview

In previous lectures, we learned:
- **Lecture 7**: Projection ($P^2 = P$), orthogonal projection ($P = P^T$), sunlight-floor model
- **Lecture 8**: Cross-filling projections, $\operatorname{rank}(P) = \operatorname{trace}(P)$, full rank $\iff$ invertible
- **Lecture 9**: Compatible families, projection decomposition theorem, decomposition methods

Today we solve the **construction problem**: Given two subspaces $W$ and $S$, how do we construct a projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$?

**Key questions:**
1. Is such a projection unique?
2. What conditions on $W$ and $S$ guarantee existence?
3. How do we compute $P$ explicitly?
4. What is the formula when $P$ is orthogonal?

---

## 1. Uniqueness: Projection Determined by Column and Null Space

::: proposition
**Theorem 1.1 (Uniqueness of Projection)**

If two projections $P$ and $Q$ satisfy:
$$\operatorname{Col}(P) = \operatorname{Col}(Q) \quad \text{and} \quad \operatorname{Null}(P) = \operatorname{Null}(Q)$$

then $P = Q$.
:::

**Proof:**

**Step 1**: Show $P = QP$.

Since $\operatorname{Col}(P) = \operatorname{Col}(Q)$, the interchanging property (Lecture 7) gives:
$$\operatorname{Col}(P) = \operatorname{Col}(Q) = \operatorname{Null}(I-Q)$$

Thus $(I-Q)P = 0$, so $P = QP$.

**Step 2**: Show $Q = QP$.

Since $\operatorname{Null}(P) = \operatorname{Null}(Q)$, the interchanging property gives:
$$\operatorname{Null}(Q) = \operatorname{Null}(P) = \operatorname{Col}(I-P)$$

Thus $Q(I-P) = 0$, so $Q = QP$.

**Step 3**: Combine.

$$P = QP = Q$$

Therefore $P = Q$. ∎

::: remark
**Two Subspaces Determine the Projection**

A projection $P$ splits the space into two complementary parts: $\operatorname{Col}(P)$ (the floor) and $\operatorname{Null}(P)$ (the sunlight direction). This theorem says: if you specify which vectors to keep and which to kill, there is **exactly one** projection doing this job.
:::

---

## 2. Bridge Theorem (from Lecture 6)

Before constructing projections, we recall a key tool from Lecture 6.

::: proposition
**Theorem 2.1 (Lecture 6)**

For matrices $A$ and $B$:
$$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \quad \Longleftrightarrow \quad \operatorname{Null}(AB) = \operatorname{Null}(B)$$
:::

This bridges a **geometric condition** (subspaces are disjoint) with an **algebraic condition** ($AB$ has the same null space as $B$).

---

## 3. The Construction Problem

**Setup**: Given two subspaces $W$ and $S$ of $\mathbb{R}^n$, we want to construct a projection $P$ such that:
$$\operatorname{Col}(P) = W \quad \text{and} \quad \operatorname{Null}(P) = S$$

**Necessary conditions**:
1. $W \cap S = \{\mathbf{0}\}$ (disjoint — a vector cannot be both on the floor and pointing toward the sun)
2. $\dim(W) + \dim(S) = n$ (complementary — every vector decomposes uniquely)

**Strategy**: Express the subspaces using matrices.
- **Column space** (constructive form): $W = \operatorname{Col}(B)$, where $B$ is $n \times r$ with full column rank ($r = \dim(W)$)
- **Null space** (descriptive form): $S = \operatorname{Null}(A)$, where $A$ is $r \times n$ with full row rank

The product $AB$ is $r \times r$ (square).

::: proposition
**Theorem 3.1 (AB Invertible Condition)**

With notation as above:
$$W \cap S = \{\mathbf{0}\} \quad \Longleftrightarrow \quad AB \text{ is invertible}$$
:::

**Proof:**

$W \cap S = \{\mathbf{0}\}$ means $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$.

By the bridge theorem (Theorem 2.1): $\operatorname{Null}(AB) = \operatorname{Null}(B)$.

Since $B$ has full column rank, $\operatorname{Null}(B) = \{\mathbf{0}\}$. Therefore $\operatorname{Null}(AB) = \{\mathbf{0}\}$, which means $AB$ has linearly independent columns. Since $AB$ is $r \times r$ (square), this gives $\operatorname{rank}(AB) = r$. By Theorem 4.4 of Lecture 8: $AB$ is invertible. ∎

---

## 4. Construction Formula

::: proposition
**Theorem 4.1 (Construction of Projection)**

Suppose:
- $W = \operatorname{Col}(B)$ where $B$ is $n \times r$ with full column rank
- $S = \operatorname{Null}(A)$ where $A$ is $r \times n$ with full row rank
- $W \cap S = \{\mathbf{0}\}$ (equivalently, $AB$ is invertible)

Then the unique projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$ is:
$$P = B(AB)^{-1}A$$
:::

**Proof:**

We verify three things.

**$P^2 = P$**:

$$P^2 = B(AB)^{-1}A \cdot B(AB)^{-1}A = B(AB)^{-1} (AB) (AB)^{-1} A = B(AB)^{-1} A = P \quad ✓$$

**$\operatorname{Col}(P) = \operatorname{Col}(B)$**:

Since $P = B(AB)^{-1}A$, every column of $P$ is a linear combination of columns of $B$, so $\operatorname{Col}(P) \subseteq \operatorname{Col}(B)$.

For the reverse: $PB = B(AB)^{-1}(AB) = B$. So every column of $B$ is in $\operatorname{Col}(P)$. ✓

**$\operatorname{Null}(P) = \operatorname{Null}(A)$**:

If $A\mathbf{x} = \mathbf{0}$: $P\mathbf{x} = B(AB)^{-1}A\mathbf{x} = \mathbf{0}$. So $\operatorname{Null}(A) \subseteq \operatorname{Null}(P)$.

If $P\mathbf{x} = \mathbf{0}$: $B(AB)^{-1}A\mathbf{x} = \mathbf{0}$. Since $B$ has full column rank: $(AB)^{-1}A\mathbf{x} = \mathbf{0}$. Multiply by $AB$: $A\mathbf{x} = \mathbf{0}$. So $\operatorname{Null}(P) \subseteq \operatorname{Null}(A)$. ✓

By uniqueness (Theorem 1.1), this is the **unique** such projection. ∎

::: remark
**Understanding the Formula**

The formula $P = B(AB)^{-1}A$ has a clear structure:
- $A$ on the right: "test" whether the input is in $\operatorname{Null}(A) = S$
- $(AB)^{-1}$ in the middle: rescaling factor (needed to make $P^2 = P$)
- $B$ on the left: output vectors in $\operatorname{Col}(B) = W$
:::

::: example
**Example 4.1: Projection in $\mathbb{R}^3$**

Let:
$$W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1 \end{pmatrix}\right\}, \quad S = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\-1 \end{pmatrix}, \begin{pmatrix} 0\\1\\0 \end{pmatrix}\right\}$$

**Step 1**: $\dim(W) = 1$, $\dim(S) = 2$, $\dim(W) + \dim(S) = 3$ ✓

**Step 2**: Check disjointness. A vector in $W$: $\begin{pmatrix} a\\0\\a \end{pmatrix}$. A vector in $S$: $\begin{pmatrix} b\\c\\-b \end{pmatrix}$. Equal implies $a = b$, $0 = c$, $a = -b$, so $a = 0$. ✓

**Step 3**: $B = \begin{pmatrix} 1\\0\\1 \end{pmatrix}$, $A = \begin{pmatrix} 1 & 0 & 1 \end{pmatrix}$ (since $S$ satisfies $x_1 + x_3 = 0$).

**Step 4**: $AB = \begin{pmatrix} 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1\\0\\1 \end{pmatrix} = 2$, so $(AB)^{-1} = \frac{1}{2}$.

**Step 5**:
$$P = B(AB)^{-1}A = \begin{pmatrix} 1\\0\\1 \end{pmatrix} \cdot \frac{1}{2} \cdot \begin{pmatrix} 1 & 0 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$$

**Verify**: $P^2 = P$ ✓, $\operatorname{Col}(P) = W$ ✓, $P \cdot \begin{pmatrix} 1\\0\\-1 \end{pmatrix} = \mathbf{0}$ ✓, $P \cdot \begin{pmatrix} 0\\1\\0 \end{pmatrix} = \mathbf{0}$ ✓
:::

---

## 5. Orthogonal Projection Formula

For an **orthogonal** projection onto $W$, we want $\operatorname{Null}(P) = W^{\perp}$.

From Lecture 6 (Four Fundamental Subspaces), if $W = \operatorname{Col}(B)$, then:

$$W^{\perp} = \operatorname{Null}(B^T)$$

Therefore, in the construction formula, we set **$A = B^T$**.

::: proposition
**Theorem 5.1 (Orthogonal Projection Formula)**

Let $B$ be an $n \times r$ matrix with **full column rank** (rank $r$). The orthogonal projection onto $\operatorname{Col}(B)$ is:

$$P = B(B^T B)^{-1} B^T$$
:::

**Proof:**

By the construction formula with $A = B^T$:

$$P = B(B^TB)^{-1}B^T$$

**$B^TB$ is invertible**: Suppose $(B^T B)\mathbf{x} = \mathbf{0}$. Then $\mathbf{x}^T(B^T B)\mathbf{x} = (B\mathbf{x})^T(B\mathbf{x}) = \|B\mathbf{x}\|^2 = 0$. So $B\mathbf{x} = \mathbf{0}$. Since $B$ has full column rank: $\mathbf{x} = \mathbf{0}$. Therefore $\operatorname{Null}(B^TB) = \{\mathbf{0}\}$, so $B^TB$ is invertible (by Lecture 8, Theorem 4.4).

**$P = P^T$**: Since $B^TB$ is symmetric, so is $(B^TB)^{-1}$:

$$P^T = (B(B^TB)^{-1}B^T)^T = B((B^TB)^{-1})^TB^T = B(B^TB)^{-1}B^T = P \quad ✓$$

Therefore $P$ is an orthogonal projection by Lecture 7, Theorem 4.1. ∎

::: example
**Example 5.1: Orthogonal Projection onto a Line**

Project orthogonally onto $W = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 2 \end{pmatrix}\right\}$ in $\mathbb{R}^2$.

$B = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, $B^TB = 1 + 4 = 5$, $(B^TB)^{-1} = \frac{1}{5}$.

$$P = \frac{1}{5}\begin{pmatrix} 1 \\ 2 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$$

Verify: $P = P^T$ ✓, $P^2 = P$ ✓
:::

::: example
**Example 5.2: Orthogonal Projection onto a Plane**

Project orthogonally onto $W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\0 \end{pmatrix}, \begin{pmatrix} 0\\1\\0 \end{pmatrix}\right\}$ (the $xy$-plane in $\mathbb{R}^3$).

$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$, $B^TB = I_2$, $(B^TB)^{-1} = I_2$.

$$P = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} I_2 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Verify: $P\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} x \\ y \\ 0 \end{pmatrix}$ (projects onto $xy$-plane) ✓
:::

---

## 6. Inner Diagonal Cross-Filling

From Lecture 9, the **inner cross-filling** method decomposes a projection by cross-filling an inner factor. For orthogonal projections written as $P = B(B^TB)^{-1}B^T$, we can cross-fill the small $r \times r$ matrix $(B^TB)^{-1}$ instead of the large $n \times n$ matrix $P$.

::: proposition
**Theorem 6.1 (Inner Diagonal Cross-Filling)**

Let $P = B(B^TB)^{-1}B^T$ be an orthogonal projection. Decompose $(B^TB)^{-1}$ by diagonal cross-filling:

$$(B^TB)^{-1} = Q_1 + Q_2 + \cdots + Q_r$$

where each $Q_j$ is rank-1 and symmetric (diagonal pivots preserve symmetry).

Define $R_j = BQ_jB^T$. Then:

1. $P = R_1 + R_2 + \cdots + R_r$
2. Each $R_j$ is a **rank-1 orthogonal projection**
3. $\{R_1, \ldots, R_r\}$ is a compatible family
:::

**Proof:**

**(1)**: $\sum R_j = \sum BQ_jB^T = B\left(\sum Q_j\right)B^T = B(B^TB)^{-1}B^T = P$. ✓

**(2)**: Since $\operatorname{rank}(R_j) \leq \operatorname{rank}(Q_j) = 1$ and $\sum \operatorname{rank}(R_j) \leq r = \operatorname{rank}(P)$, the projection decomposition theorem (Lecture 9, Theorem 3.1) gives: each $R_j$ is a projection.

For symmetry: $R_j^T = (BQ_jB^T)^T = BQ_j^TB^T = BQ_jB^T = R_j$ (since $Q_j^T = Q_j$).

So each $R_j$ is an orthogonal projection. ✓

**(3)**: Follows from the projection decomposition theorem. ✓ ∎

::: success
**Efficiency Gain**

| Method | Matrix size | Cost |
|--------|-----------|------|
| Direct diagonal cross-filling of $P$ | $n \times n$ | $O(n^2)$ per step |
| Inner diagonal cross-filling of $(B^TB)^{-1}$ | $r \times r$ | $O(r^2)$ per step |

When $r \ll n$, the inner method is **much faster**.
:::

::: example
**Example 6.1: Inner Diagonal Cross-Filling**

Let $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$ ($3 \times 2$, full column rank).

**Step 1**: $B^TB = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$, $\det = 15 - 9 = 6$.

$$(B^TB)^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$$

**Step 2**: Diagonal cross-fill at $(1,1)$ with pivot $\frac{5}{6}$:

$$Q_1 = \frac{1}{5/6} \cdot \frac{1}{6}\begin{pmatrix} 5 \\ -3 \end{pmatrix} \cdot \frac{1}{6}\begin{pmatrix} 5 & -3 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 9/5 \end{pmatrix}$$

$$Q_2 = (B^TB)^{-1} - Q_1 = \frac{1}{6}\begin{pmatrix} 0 & 0 \\ 0 & 6/5 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$

**Step 3**: Compute $R_2 = BQ_2B^T$:

$$BQ_2 = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix} \frac{1}{5}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 0 & 2 \end{pmatrix}$$

$$R_2 = BQ_2B^T = \frac{1}{5}\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\begin{pmatrix} 0 & 1 & 2 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 2 \\ 0 & 2 & 4 \end{pmatrix}$$

Check: $R_2 = R_2^T$ ✓, $\operatorname{rank}(R_2) = 1$ ✓, $\operatorname{trace}(R_2) = 1$ ✓

$R_1 = P - R_2$ is the other rank-1 orthogonal projection.
:::

But we haven't yet extracted the real treasure from this decomposition.

### 6.1 Finding Orthogonal Bases: The Real Payoff

Each $Q_j$ from the diagonal cross-filling is rank-1 and symmetric. Because the pivot is on the diagonal, $Q_j$ has the form:

$$Q_j = \frac{1}{q_{jj}} \mathbf{d}_j \mathbf{d}_j^T$$

where $\mathbf{d}_j$ is the column at the pivot position and $q_{jj}$ is the pivot value.

Now compute $BQ_j$:

$$BQ_j = \frac{1}{q_{jj}} (B\mathbf{d}_j) \mathbf{d}_j^T$$

This tells us: $BQ_j$ is rank-1, and its **column space is spanned by $B\mathbf{d}_j$**.

Therefore:

$$R_j = BQ_jB^T = \frac{1}{q_{jj}} (B\mathbf{d}_j)(B\mathbf{d}_j)^T$$

::: attention
**The Key Insight**

Each rank-1 orthogonal projection $R_j$ projects onto the line spanned by $B\mathbf{d}_j$.

Since $\{R_1, \ldots, R_r\}$ is a compatible family with $R_i R_j = 0$, their column spaces are mutually orthogonal. Therefore:

$$B\mathbf{d}_1, \quad B\mathbf{d}_2, \quad \ldots, \quad B\mathbf{d}_r$$

are **mutually orthogonal vectors** that span $\operatorname{Col}(B)$.

**To find an orthogonal basis for $\operatorname{Col}(B)$**: just read off $\mathbf{d}_j$ from each $Q_j$ and multiply by $B$.
:::

In practice, we don't even need to compute the full matrices $Q_j$ or $R_j$. Since $Q_j$ is rank-1, **all of its information is in one column**. We just need:

1. Diagonally cross-fill $(B^TB)^{-1}$: at each step, read off the column at the pivot position → $\mathbf{d}_j$
2. Compute $B\mathbf{d}_j$ → orthogonal direction
3. Normalize if needed: $\mathbf{v}_j = B\mathbf{d}_j / \|B\mathbf{d}_j\|$ → orthonormal basis vector

::: remark
**No Gram-Schmidt Needed!**

The classical **Gram-Schmidt process** finds an orthogonal basis by iteratively subtracting projections:
- Start with $\mathbf{b}_1$
- Subtract the projection of $\mathbf{b}_2$ onto $\mathbf{b}_1$ to get $\mathbf{v}_2$
- Subtract projections of $\mathbf{b}_3$ onto $\mathbf{v}_1, \mathbf{v}_2$ to get $\mathbf{v}_3$
- And so on...

The inner diagonal cross-filling method is fundamentally different:
- Compute $(B^TB)^{-1}$ (an $r \times r$ matrix)
- Cross-fill it diagonally (reading off columns)
- Multiply each column by $B$

The orthogonal directions emerge **simultaneously** from the cross-filling — no iterative subtraction required. The mutual orthogonality is **guaranteed by the projection decomposition theorem**.
:::

::: example
**Example 6.2: Extracting the Orthogonal Basis (Continuing Example 6.1)**

We had $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$ and $(B^TB)^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$.

**Step 1**: Cross-fill at diagonal pivot $(1,1)$ with value $\frac{5}{6}$.

Read off column 1 of $(B^TB)^{-1}$: $\mathbf{d}_1 = \frac{1}{6}\begin{pmatrix} 5 \\ -3 \end{pmatrix}$, or equivalently $\mathbf{d}_1 \propto \begin{pmatrix} 5 \\ -3 \end{pmatrix}$.

**Step 2**: Compute $B\mathbf{d}_1$:

$$B\begin{pmatrix} 5 \\ -3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ -3 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix}$$

**Step 3**: Remainder after cross-filling: $Q_2 = \frac{1}{5}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.

Read off the nonzero column: $\mathbf{d}_2 \propto \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

$$B\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$$

**Step 4**: Verify orthogonality:

$$\begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix}^T \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} = 0 + 2 - 2 = 0 \quad ✓$$

**Result**: $\left\{\begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\right\}$ is an **orthogonal basis** for $\operatorname{Col}(B)$.

**Verify**: The original basis was $\left\{\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\right\}$. Indeed:

$$5 \cdot \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + (-3) \cdot \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix} \in \operatorname{Col}(B) \quad ✓$$

The cross-filling told us exactly which linear combination of the original columns produces an orthogonal basis — the coefficients are in $\mathbf{d}_j$!
:::

::: success
**Summary: Inner Diagonal Cross-Filling for Orthogonal Bases**

Given a basis $\{\mathbf{b}_1, \ldots, \mathbf{b}_r\}$ for a subspace $W$ (columns of $B$):

1. Compute $(B^TB)^{-1}$ (an $r \times r$ symmetric matrix)
2. Diagonally cross-fill $(B^TB)^{-1}$: at each step, read the column $\mathbf{d}_j$ at the pivot
3. Compute $B\mathbf{d}_j$ — this is an orthogonal basis vector for $W$

**What $\mathbf{d}_j$ tells you**: the coefficients for combining the original columns of $B$ into mutually orthogonal vectors. The cross-filling of $(B^TB)^{-1}$ computes these coefficients automatically.

**Normalize** $\mathbf{v}_j = B\mathbf{d}_j / \|B\mathbf{d}_j\|$ if an orthonormal basis is desired.
:::

---

## 7. Application: Least Squares

The orthogonal projection formula provides an elegant solution to the **least squares problem**.

::: proposition
**Theorem 7.1 (Least Squares)**

Given an inconsistent system $A\mathbf{x} = \mathbf{b}$ (where $A$ is $m \times n$ with full column rank), the **least squares solution** $\hat{\mathbf{x}}$ that minimizes $\|\mathbf{b} - A\mathbf{x}\|$ satisfies:

$$A^T A \, \hat{\mathbf{x}} = A^T \mathbf{b}$$

and the best approximation is $A\hat{\mathbf{x}} = P\mathbf{b}$ where $P = A(A^TA)^{-1}A^T$ is the orthogonal projection onto $\operatorname{Col}(A)$.
:::

**Proof:**

The vector $A\hat{\mathbf{x}} \in \operatorname{Col}(A)$ that is closest to $\mathbf{b}$ is the orthogonal projection of $\mathbf{b}$ onto $\operatorname{Col}(A)$:

$$A\hat{\mathbf{x}} = P\mathbf{b} = A(A^TA)^{-1}A^T\mathbf{b}$$

Left-canceling $A$ (which has full column rank):

$$\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$$

Equivalently: $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$. ∎

::: remark
**Why "Least Squares"?**

The residual $\mathbf{b} - A\hat{\mathbf{x}} = (I - P)\mathbf{b}$ is orthogonal to $\operatorname{Col}(A)$ (since $I - P$ projects onto $\operatorname{Col}(A)^{\perp}$). This is the geometric meaning of "least squares": the closest point in a subspace is found by dropping a perpendicular.
:::

---

## 8. Summary

::: success
**Key Results from This Lecture**

1. **Uniqueness** (§1): A projection is uniquely determined by $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.

2. **Construction Formula** (§4):
$$P = B(AB)^{-1}A$$
where $\operatorname{Col}(B) = W$, $\operatorname{Null}(A) = S$, and $W \cap S = \{\mathbf{0}\}$ (equivalently, $AB$ invertible).

3. **Orthogonal Projection Formula** (§5): Set $A = B^T$ to get:
$$P = B(B^TB)^{-1}B^T$$

4. **Inner Diagonal Cross-Filling** (§6): Decompose $(B^TB)^{-1}$ instead of $P$ — much more efficient when $r \ll n$. Produces rank-1 orthogonal projections automatically.

5. **Least Squares** (§7): The least squares solution is $\hat{\mathbf{x}} = (A^TA)^{-1}A^T\mathbf{b}$.
:::

### Looking Ahead

With projection theory complete, we now have all the tools needed for **spectral decomposition** (Chapter 5).

The idea: if a matrix $A$ can be written as $A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots + \lambda_k P_k$ where $\{P_1, \ldots, P_k\}$ is a compatible family, then:
- $A^n = \lambda_1^n P_1 + \cdots + \lambda_k^n P_k$
- $e^A = e^{\lambda_1} P_1 + \cdots + e^{\lambda_k} P_k$
- Any function $f(A) = f(\lambda_1) P_1 + \cdots + f(\lambda_k) P_k$

Finding the $\lambda_i$ (eigenvalues) and $P_i$ (spectral projections) is the goal of **Chapters 4–5**.

---

## Exercises

::: problem
**Exercise 1**

Find the projection $P$ onto $W$ along $S$ where:
$$W = \operatorname{span}\left\{\begin{pmatrix} 1\\1\\0 \end{pmatrix}\right\}, \quad S = \operatorname{span}\left\{\begin{pmatrix} 1\\-1\\0 \end{pmatrix}, \begin{pmatrix} 0\\0\\1 \end{pmatrix}\right\}$$

Verify $P^2 = P$, $\operatorname{Col}(P) = W$, and $\operatorname{Null}(P) = S$.
:::

::: problem
**Exercise 2**

Let $P$ be the orthogonal projection onto $W = \operatorname{span}\left\{\begin{pmatrix} 3 \\ 4 \end{pmatrix}\right\}$ in $\mathbb{R}^2$.

(a) Use the formula $P = B(B^TB)^{-1}B^T$ to compute $P$.

(b) Verify $P = P^T$ and $P^2 = P$.

(c) Compute the orthogonal projection of $\mathbf{b} = \begin{pmatrix} 5 \\ 0 \end{pmatrix}$ onto $W$.
:::

::: problem
**Exercise 3: Orthogonal Basis via Inner Diagonal Cross-Filling**

Let $W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1 \end{pmatrix}, \begin{pmatrix} 0\\1\\1 \end{pmatrix}\right\}$ in $\mathbb{R}^3$.

(a) Compute $B^TB$ and $(B^TB)^{-1}$.

(b) Diagonally cross-fill $(B^TB)^{-1}$ into $Q_1 + Q_2$.

(c) Read off the column $\mathbf{d}_j$ from each $Q_j$. Compute $B\mathbf{d}_1$ and $B\mathbf{d}_2$.

(d) Verify that $B\mathbf{d}_1$ and $B\mathbf{d}_2$ are **orthogonal**. You have found an orthogonal basis for $W$ without Gram-Schmidt!

(e) Normalize to get an orthonormal basis.
:::

::: problem
**Exercise 4**

Suppose $B$ is $n \times r$ with full column rank, and $A$ is $r \times n$ with full row rank, satisfying $AB = I_r$.

(a) Show that $P = BA$ is a projection with $\operatorname{Col}(P) = \operatorname{Col}(B)$ and $\operatorname{Null}(P) = \operatorname{Null}(A)$.

(b) How does this relate to the formula $P = B(AB)^{-1}A$?
:::

::: problem
**Exercise 5: Least Squares**

Consider the inconsistent system $A\mathbf{x} = \mathbf{b}$ where:
$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ 8 \\ 8 \end{pmatrix}$$

(a) Compute $A^TA$ and $A^T\mathbf{b}$.

(b) Solve the normal equation $A^TA\hat{\mathbf{x}} = A^T\mathbf{b}$.

(c) Compute $P\mathbf{b}$ where $P = A(A^TA)^{-1}A^T$ and verify $P\mathbf{b} = A\hat{\mathbf{x}}$.
:::

::: problem
**Exercise 6**

True or false: If $W$ and $S$ are subspaces with $\dim(W) + \dim(S) = n$, then there always exists a projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$.

If false, give a counterexample. If true, prove it.
:::
