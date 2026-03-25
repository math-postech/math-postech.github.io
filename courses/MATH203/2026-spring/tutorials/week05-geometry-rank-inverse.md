# Tutorial Suggestions: Week 5 — Geometry of Rank and Rank Inequalities

> **For**: Teaching Assistants conducting tutorial sessions (Mar 26, 2026)
> **Related Lectures**: [Lecture 5: Solving Equations and Null Space](../notes/solving-equations-null-space.md), [Lecture 6: Four Fundamental Subspaces](../notes/four-fundamental-subspaces.md)
> **Duration**: 50 minutes
> **Prerequisites**: Cross-filling, rank (= number of rank-one pieces = dim of column space), left/right cancellation criteria, subspaces of products ($\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$, $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$), four fundamental subspaces, orthogonality ($\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$)

---

## Overview

This tutorial develops **geometric intuition** for rank and practices **rank inequalities** that students will need for Homework 2.

**Key topics**:
1. **Rank of $VU$**: Quantifying how $\operatorname{Null}(V) \cap \operatorname{Col}(U)$ controls the rank
2. **Rank inequalities via cross-filling**: Block diagonal, invertible factors
3. **Practice problems**: Hands-on exercises aligned with HW2

**Pedagogical goals**:
- Build geometric intuition: rank drops when column space meets null space
- Show cross-filling as a universal proof tool for rank identities
- Reinforce Lecture 5–6 concepts through concrete computation

---

## Topic 1: The Rank Formula for $VU$ (12 min)

### Learning Goal

Students understand *geometrically* why $\operatorname{rank}(VU)$ can be less than $r$: vectors in $\operatorname{Col}(U)$ that land in $\operatorname{Null}(V)$ are "wasted".

### Suggested Approach

#### Step 1: Setup and Statement (3 min)

::: attention
**Setup**

Let $U$ be $m \times r$ with $\operatorname{rank}(U) = r$ (thin, full rank — left cancelable).

Let $V$ be $r \times n$ with $\operatorname{rank}(V) = r$ (fat, full rank — right cancelable).

Then $UV$ is $m \times n$ with $\operatorname{rank}(UV) = r$. (This follows from Lecture 6: $\operatorname{Null}(U) \cap \operatorname{Col}(V)$ is not relevant here — $\operatorname{Null}(U) = \{\mathbf{0}\}$ since $U$ is left cancelable, so Theorem 3 gives $\operatorname{Null}(UV) = \operatorname{Null}(V)$, and cross-filling counting gives $\operatorname{rank}(UV) = n - \dim(\operatorname{Null}(V)) = n - (n - r) = r$.)

**Now flip the order**: If $VU$ is also defined (requires $n = m$), then $VU$ is $r \times r$ (square!). What is its rank?
:::

::: proposition
**Rank Formula for $VU$**

$$\operatorname{rank}(VU) = r - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$$

**In words**: The rank drops by the dimension of the "wasted" part — vectors that $U$ can produce but $V$ kills.
:::

#### Step 2: Proof (5 min)

**Key idea**: $U$ is injective, so it creates a perfect correspondence between $\operatorname{Null}(VU)$ and $\operatorname{Null}(V) \cap \operatorname{Col}(U)$.

**Proof**:

We show that the map $\mathbf{x} \mapsto U\mathbf{x}$ is a one-to-one correspondence between $\operatorname{Null}(VU)$ and $\operatorname{Null}(V) \cap \operatorname{Col}(U)$.

**Every $\mathbf{x} \in \operatorname{Null}(VU)$ maps into $\operatorname{Null}(V) \cap \operatorname{Col}(U)$**:
- $VU\mathbf{x} = \mathbf{0}$ means $U\mathbf{x} \in \operatorname{Null}(V)$ ✓
- $U\mathbf{x} \in \operatorname{Col}(U)$ always ✓

**The map is injective** (one-to-one):
- If $U\mathbf{x}_1 = U\mathbf{x}_2$, then $U(\mathbf{x}_1 - \mathbf{x}_2) = \mathbf{0}$
- Since $\operatorname{Null}(U) = \{\mathbf{0}\}$ (left cancelable): $\mathbf{x}_1 = \mathbf{x}_2$ ✓

**The map is surjective** (onto):
- Take any $\mathbf{w} \in \operatorname{Null}(V) \cap \operatorname{Col}(U)$
- Since $\mathbf{w} \in \operatorname{Col}(U)$: $\mathbf{w} = U\mathbf{x}$ for some $\mathbf{x}$
- Since $\mathbf{w} \in \operatorname{Null}(V)$: $V\mathbf{w} = VU\mathbf{x} = \mathbf{0}$, so $\mathbf{x} \in \operatorname{Null}(VU)$ ✓

Therefore $\dim(\operatorname{Null}(VU)) = \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$.

Since $VU$ is $r \times r$, cross-filling counting gives:
$$\operatorname{rank}(VU) = r - \dim(\operatorname{Null}(VU)) = r - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U)) \quad \square$$

::: remark
**Geometric Picture (draw on board)**

Think of $\operatorname{Col}(U)$ as a subspace in $\mathbb{R}^m$.
Think of $\operatorname{Null}(V)$ as another subspace in $\mathbb{R}^m$.

Their overlap $\operatorname{Null}(V) \cap \operatorname{Col}(U)$ is the "dead zone" — vectors that $U$ produces but $V$ annihilates.

- If overlap = $\{\mathbf{0}\}$: no waste → $\operatorname{rank}(VU) = r$ → $VU$ is full rank (invertible!)
- If overlap is $k$-dimensional: rank drops by exactly $k$
:::

#### Step 3: Concrete Example (4 min)

::: example
**Example 1.1**

$$U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} \quad (3 \times 2, \text{ rank } 2), \qquad V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix} \quad (2 \times 3, \text{ rank } 2)$$

$\operatorname{Col}(U) = \operatorname{span}\left\{\begin{pmatrix}1\\0\\0\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$, $\quad \operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$

**Overlap**: $\operatorname{Null}(V) \cap \operatorname{Col}(U) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$, dimension 1.

**Prediction**: $\operatorname{rank}(VU) = 2 - 1 = 1$.

**Verify**: $VU = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Indeed rank 1. ✓
:::

::: example
**Example 1.2 (no overlap)**

Same $U$. Change $V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.

$\operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$

**Overlap**: $\operatorname{Null}(V) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$ (the third standard basis vector is not in $\operatorname{Col}(U)$).

**Prediction**: $\operatorname{rank}(VU) = 2 - 0 = 2$.

**Verify**: $VU = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$. Rank 2. ✓
:::

---

## Topic 2: Rank Inequalities (8 min)

### Learning Goal

Students learn to use cross-filling and column/null space arguments to prove rank identities and inequalities.

### Suggested Approach

#### Part A: Block Diagonal (4 min)

::: proposition
**Block Diagonal Rank**

$$\operatorname{rank}\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \operatorname{rank}(A) + \operatorname{rank}(B)$$
:::

**Proof by cross-filling**: Cross-fill $A$ into $s$ rank-one pieces and $B$ into $t$ rank-one pieces. Each rank-one piece of $A$ becomes a rank-one piece of the block matrix (padded with zeros in the $B$ rows/columns), and vice versa. The pieces don't interact. Total: $s + t$ rank-one pieces. ∎

::: example
**Example 2.1**

$$\begin{pmatrix} 1 & 2 & 0 & 0 \\ 2 & 4 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

Cross-fill top-left: 1 piece. Cross-fill bottom-right: 2 pieces. Total rank = $1 + 2 = 3$. ✓
:::

#### Part B: Invertible Factor Preserves Rank (4 min)

::: proposition
**Invertible Factors**

If $P$ is invertible, then $\operatorname{rank}(AP) = \operatorname{rank}(A) = \operatorname{rank}(PA)$.
:::

**Proof of $\operatorname{rank}(AP) = \operatorname{rank}(A)$** (column space argument):

$$\operatorname{Col}(AP) \subseteq \operatorname{Col}(A) = \operatorname{Col}(APP^{-1}) \subseteq \operatorname{Col}(AP)$$

The first $\subseteq$ is Lecture 6 Theorem 1. The second applies Theorem 1 again with $AP$ in place of $A$. So $\operatorname{Col}(AP) = \operatorname{Col}(A)$, hence same rank. ∎

**Proof of $\operatorname{rank}(PA) = \operatorname{rank}(A)$** (null space argument):

$\operatorname{Null}(A) \subseteq \operatorname{Null}(PA)$ by Lecture 6 Theorem 2.

For the reverse: if $PA\mathbf{x} = \mathbf{0}$, left-cancel $P$ (invertible → left cancelable) to get $A\mathbf{x} = \mathbf{0}$.

So $\operatorname{Null}(PA) = \operatorname{Null}(A)$. Cross-filling counting: same null space dimension → same rank. ∎

---

## Practice Problems for HW2 (30 min)

The remaining time is devoted to hands-on exercises that directly prepare students for Homework 2.

### Practice 1: Finding $\operatorname{Null}(A) \cap \operatorname{Col}(B)$ (10 min)

*Prepares for HW2 Problem 2.1*

::: example
**Exercise**

Let $A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$.

1. Find $\operatorname{Null}(A)$.
2. Find $\operatorname{Col}(B)$.
3. Determine whether $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$.
:::

**Solution**:

1. $A\mathbf{x} = \mathbf{0}$: $x_1 + 2x_3 = 0$, $x_2 + x_3 = 0$. Free variable $x_3 = t$:
$$\operatorname{Null}(A) = \operatorname{span}\left\{\begin{pmatrix}-2\\-1\\1\end{pmatrix}\right\}$$

2. $\operatorname{Col}(B) = \operatorname{span}\left\{\begin{pmatrix}1\\0\\1\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$

3. Check if $\begin{pmatrix}-2\\-1\\1\end{pmatrix} \in \operatorname{Col}(B)$: solve $c_1\begin{pmatrix}1\\0\\1\end{pmatrix} + c_2\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}-2\\-1\\1\end{pmatrix}$.

   From row 1: $c_1 = -2$. From row 2: $c_2 = -1$. From row 3: $c_1 = 1$. Contradiction ($-2 \neq 1$).

   Therefore $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$. ✓

::: remark
**Connection to Topic 1**: Since the intersection is trivial, $\operatorname{rank}(AB) = \operatorname{rank}(B) = 2$ (no "wasted" vectors).

Students can verify: $AB = \begin{pmatrix}3 & 0 \\ 1 & 1\end{pmatrix}$, rank 2. ✓
:::

---

### Practice 2: Proving Rank Inequalities (10 min)

*Prepares for HW2 Problem 3.1–3.3*

::: example
**Exercise A** (warm-up for P3.1)

Prove: $\operatorname{rank}(AB) \leq \operatorname{rank}(A)$.

*Hint*: Use $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$ from Lecture 6.
:::

Let students attempt this first (2 min), then discuss:

**Solution**: $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$ (Lecture 6, Theorem 1). Since a subspace contained in another has smaller or equal dimension: $\operatorname{rank}(AB) = \dim(\operatorname{Col}(AB)) \leq \dim(\operatorname{Col}(A)) = \operatorname{rank}(A)$. ∎

::: example
**Exercise B** (warm-up for P3.2)

Prove: $\operatorname{rank}(A + B) \leq \operatorname{rank}(A) + \operatorname{rank}(B)$.

*Hint*: Use cross-filling — write each matrix as a sum of rank-one pieces.
:::

**Solution**: Cross-fill $A$ into $r$ rank-one pieces and $B$ into $s$ rank-one pieces. Then $A + B$ is a sum of $r + s$ rank-one pieces. A sum of $k$ rank-one matrices has rank at most $k$ (each piece adds at most 1 to the rank). Therefore $\operatorname{rank}(A+B) \leq r + s$. ∎

::: example
**Exercise C** (warm-up for P3.3 — Sylvester's inequality)

Let $A$ be $m \times n$, $B$ be $n \times p$. Prove: $\operatorname{rank}(AB) \geq \operatorname{rank}(A) + \operatorname{rank}(B) - n$.

*Hint*: From Lecture 6, $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$, so $\dim(\operatorname{Null}(AB)) \geq \dim(\operatorname{Null}(B))$. But by how much can the null space grow?
:::

**Solution**: The key insight is that $\operatorname{Null}(AB)/\operatorname{Null}(B)$ corresponds (via $B$) to vectors in $\operatorname{Col}(B) \cap \operatorname{Null}(A)$.

More precisely: $\operatorname{rank}(AB) = \operatorname{rank}(B) - \dim(\operatorname{Null}(A) \cap \operatorname{Col}(B))$.

Since $\operatorname{Null}(A) \cap \operatorname{Col}(B) \subseteq \operatorname{Null}(A)$, we have $\dim(\operatorname{Null}(A) \cap \operatorname{Col}(B)) \leq n - \operatorname{rank}(A)$.

Therefore: $\operatorname{rank}(AB) \geq \operatorname{rank}(B) - (n - \operatorname{rank}(A)) = \operatorname{rank}(A) + \operatorname{rank}(B) - n$. ∎

---

### Practice 3: Four Subspaces and Orthogonality (10 min)

*Prepares for HW2 Problems 4, 5, 6*

::: example
**Exercise** (warm-up for P5)

Let $A$ be any $m \times n$ real matrix. Show that $\operatorname{Null}(A^T A) = \operatorname{Null}(A)$.

*Hint*: One direction is easy ($\operatorname{Null}(A) \subseteq \operatorname{Null}(A^TA)$). For the other, try computing $\|A\mathbf{x}\|^2$ when $A^TA\mathbf{x} = \mathbf{0}$.
:::

Let students work on this (3 min), then discuss:

**Solution**:

($\subseteq$ easy direction): If $A\mathbf{x} = \mathbf{0}$, then $A^TA\mathbf{x} = A^T\mathbf{0} = \mathbf{0}$.

($\supseteq$ key direction): If $A^TA\mathbf{x} = \mathbf{0}$, multiply both sides on the left by $\mathbf{x}^T$:

$$\mathbf{x}^T A^T A \mathbf{x} = 0 \implies (A\mathbf{x})^T(A\mathbf{x}) = 0 \implies \|A\mathbf{x}\|^2 = 0 \implies A\mathbf{x} = \mathbf{0}.$$

Therefore $\operatorname{Null}(A^TA) = \operatorname{Null}(A)$. ∎

::: remark
**Why this matters**: By rank-nullity, same null space → same rank. So $\operatorname{rank}(A^TA) = \operatorname{rank}(A)$. This is HW2 Problem 5!
:::

::: example
**Exercise** (warm-up for P6.1)

Let $A$ be $m \times n$ and $B$ be $n \times p$. If $AB = 0$ (the zero matrix), show that $\operatorname{rank}(A) + \operatorname{rank}(B) \leq n$.

*Hint*: What is the relationship between $\operatorname{Col}(B)$ and $\operatorname{Null}(A)$?
:::

**Solution**: If $AB = 0$, then for every column $\mathbf{b}_j$ of $B$: $A\mathbf{b}_j = \mathbf{0}$. So every column of $B$ is in $\operatorname{Null}(A)$, meaning $\operatorname{Col}(B) \subseteq \operatorname{Null}(A)$.

Taking dimensions: $\operatorname{rank}(B) \leq \dim(\operatorname{Null}(A)) = n - \operatorname{rank}(A)$.

Rearranging: $\operatorname{rank}(A) + \operatorname{rank}(B) \leq n$. ∎

---

## Time Management Recommendations

| Topic | Suggested Time | Notes |
|-------|---------------|-------|
| Topic 1: Rank of $VU$ | 12 min | Can compress proof to sketch if needed |
| Topic 2A: Block diagonal | 4 min | Can state without proof if short on time |
| Topic 2B: Invertible factors | 4 min | **Essential** — used in rank inequality proofs |
| Practice 1: $\operatorname{Null}(A) \cap \operatorname{Col}(B)$ | 10 min | Let students attempt before showing solution |
| Practice 2: Rank inequalities | 10 min | Focus on Exercises A and C |
| Practice 3: $\operatorname{Null}(A^TA)$ and $AB=0$ | 10 min | Direct HW2 preparation |

---

## Common Student Mistakes to Address

### Mistake 1: Confusing $UV$ and $VU$

**Symptom**: "Thin times fat is always invertible"

**Fix**: $UV$ is $m \times n$ (big, not square). $VU$ is $r \times r$ (square, can be invertible). Only $VU$ *can* be invertible, and only when $\operatorname{Null}(V) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$.

### Mistake 2: Forgetting the transpose in rank inequalities

**Symptom**: Proving $\operatorname{rank}(AB) \leq \operatorname{rank}(A)$ but getting stuck on $\operatorname{rank}(AB) \leq \operatorname{rank}(B)$.

**Fix**: Apply the column space argument to $(AB)^T = B^T A^T$: $\operatorname{Col}((AB)^T) \subseteq \operatorname{Col}(B^T)$, so $\operatorname{rank}(AB) = \operatorname{rank}((AB)^T) \leq \operatorname{rank}(B^T) = \operatorname{rank}(B)$.

### Mistake 3: Using inner product without realizing it

**Symptom**: In the $\operatorname{Null}(A^TA) = \operatorname{Null}(A)$ proof, students may not see why $A^TA\mathbf{x} = 0$ implies $A\mathbf{x} = 0$.

**Fix**: The trick is $\mathbf{x}^T(A^TA\mathbf{x}) = (A\mathbf{x})^T(A\mathbf{x}) = \|A\mathbf{x}\|^2$. A vector with zero length must be zero. This only works over the reals!

---

## Questions to Check Understanding

1. **Rank formula**: "$U$ is $4 \times 2$ rank 2, $V$ is $2 \times 4$ rank 2. What are the possible values of $\operatorname{rank}(VU)$?"
   - Expected: $\operatorname{rank}(VU) = 2 - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$. Since $\operatorname{Null}(V)$ has dim 2 in $\mathbb{R}^4$ and $\operatorname{Col}(U)$ has dim 2 in $\mathbb{R}^4$, the overlap can be 0, 1, or 2. So rank can be 2, 1, or 0.

2. **Rank inequality**: "If $A$ is $3 \times 5$ with rank 3 and $B$ is $5 \times 4$ with rank 4, what bounds do we have on $\operatorname{rank}(AB)$?"
   - Expected: Upper bound: $\min\{3, 4\} = 3$. Lower bound (Sylvester): $3 + 4 - 5 = 2$. So $2 \leq \operatorname{rank}(AB) \leq 3$.

3. **Null space**: "If $AB = 0$, does $BA = 0$?"
   - Expected: No! $AB = 0$ means $\operatorname{Col}(B) \subseteq \operatorname{Null}(A)$, but says nothing about $\operatorname{Col}(A)$ vs $\operatorname{Null}(B)$.

---

**Last Updated**: 2026-03-25
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
