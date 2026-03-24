# Tutorial Suggestions: Week 5 — Geometry of Rank, Inverses, and Subspace Complements

> **For**: Teaching Assistants conducting tutorial sessions (Mar 26, 2026)
> **Related Lectures**: [Lecture 5: Solving Equations and Null Space](../notes/solving-equations-null-space.md), [Lecture 6: Four Fundamental Subspaces](../notes/four-fundamental-subspaces.md)
> **Duration**: 50 minutes
> **Prerequisites**: Cross-filling, rank (= number of rank-one pieces = dim of column space), left/right cancellation criteria, subspaces of products ($\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$, $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$), four fundamental subspaces, orthogonality ($\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$)

---

## Overview

This tutorial develops **geometric intuition** for rank and introduces **left/right inverses** as a bridge to next week's projection theory.

**Key topics**:
1. **Rank of $VU$**: Quantifying how $\operatorname{Null}(V) \cap \operatorname{Col}(U)$ controls the rank
2. **Rank inequalities via cross-filling**: Block diagonal, block triangular, invertible factors
3. **Left and right inverses**: Construction, non-uniqueness, and the correspondence with subspace complements

**Pedagogical goals**:
- Build geometric intuition: rank drops when column space meets null space
- Show cross-filling as a universal proof tool for rank identities
- Preview the projection framework by understanding left inverses

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

- If overlap = $\{\mathbf{0}\}$: no waste → $\operatorname{rank}(VU) = r$ → $VU$ is full rank (and invertible, by [Lecture 8, Theorem 4.4](../notes/cross-filling-projections.md))
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

## Topic 2: Rank Inequalities (18 min)

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

#### Part C: The $I - AB$ and $I - BA$ Trick (10 min)

This is a beautiful block-matrix argument that connects $I - AB$ and $I - BA$.

**Setup**: Let $A$ be $n \times m$ and $B$ be $m \times n$. Consider three block matrices, each $(n+m) \times (n+m)$:

$$L_1 = \begin{pmatrix} I_n & -A \\ 0 & I_m \end{pmatrix}, \quad M = \begin{pmatrix} I_n & A \\ B & I_m \end{pmatrix}, \quad L_2 = \begin{pmatrix} I_n & 0 \\ -B & I_m \end{pmatrix}$$

::: proposition
**Identity 1**

$$L_1 \cdot M \cdot L_2 = \begin{pmatrix} I_n - AB & 0 \\ 0 & I_m \end{pmatrix}$$
:::

**Verification** (just matrix multiplication):

**Step 1**: $L_1 \cdot M$:

$$\begin{pmatrix} I & -A \\ 0 & I \end{pmatrix}\begin{pmatrix} I & A \\ B & I \end{pmatrix} = \begin{pmatrix} I - AB & 0 \\ B & I \end{pmatrix}$$

**Step 2**: multiply by $L_2$:

$$\begin{pmatrix} I-AB & 0 \\ B & I \end{pmatrix}\begin{pmatrix} I & 0 \\ -B & I \end{pmatrix} = \begin{pmatrix} I-AB & 0 \\ 0 & I \end{pmatrix} \quad \checkmark$$

::: proposition
**Identity 2** (swap roles of $A$ and $B$)

$$L_2 \cdot M \cdot L_1 = \begin{pmatrix} I_n & 0 \\ 0 & I_m - BA \end{pmatrix}$$
:::

**Verification** (exercise for students, same computation):

$L_2 \cdot M = \begin{pmatrix} I & A \\ 0 & I - BA \end{pmatrix}$, then multiply by $L_1$ on the right. ✓

::: attention
**Key Observation**

Both $L_1$ and $L_2$ are **invertible**: their inverses are

$$L_1^{-1} = \begin{pmatrix} I & A \\ 0 & I \end{pmatrix}, \qquad L_2^{-1} = \begin{pmatrix} I & 0 \\ B & I \end{pmatrix}$$

(Verify: $L_1 L_1^{-1} = I$ by direct multiplication.)

The identities say: **the same matrix $M$ is sandwiched between invertible factors to produce either $I-AB$ or $I-BA$ (up to block diagonal placement)**.
:::

::: proposition
**Consequence: $I - AB$ invertible $\iff$ $I - BA$ invertible**

From Identity 1: $\begin{pmatrix}I-AB & 0 \\ 0 & I\end{pmatrix}$ is the product of $L_1$, $M$, $L_2$.

- This product is invertible $\iff$ all three factors are invertible $\iff$ $M$ is invertible (since $L_1, L_2$ are always invertible).

From Identity 2: $\begin{pmatrix}I & 0 \\ 0 & I-BA\end{pmatrix}$ is the product of $L_2$, $M$, $L_1$.

- This product is invertible $\iff$ $M$ is invertible (same $M$!).

Now, the block diagonal $\begin{pmatrix}I-AB & 0 \\ 0 & I\end{pmatrix}$ is invertible $\iff$ $I-AB$ is invertible. (Its inverse is $\begin{pmatrix}(I-AB)^{-1} & 0 \\ 0 & I\end{pmatrix}$.)

Similarly, $\begin{pmatrix}I & 0 \\ 0 & I-BA\end{pmatrix}$ is invertible $\iff$ $I-BA$ is invertible.

Therefore:

$$I - AB \text{ invertible} \iff M \text{ invertible} \iff I - BA \text{ invertible} \quad \square$$
:::

::: example
**Example 2.2**

$A = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ ($2 \times 1$), $B = \begin{pmatrix} 3 & 1 \end{pmatrix}$ ($1 \times 2$).

$AB = \begin{pmatrix} 3 & 1 \\ 6 & 2 \end{pmatrix}$ ($2 \times 2$), so $I_2 - AB = \begin{pmatrix} -2 & -1 \\ -6 & -1 \end{pmatrix}$, rank 2 → invertible ✓

$BA = (3 \cdot 1 + 1 \cdot 2) = (5)$ ($1 \times 1$), so $I_1 - BA = (-4)$ → invertible ✓

Both invertible, as predicted. ✓
:::

::: remark
**What if we replace $I - AB$ by $\lambda I - AB$?**

Just replace $A$ by $\frac{1}{\lambda}A$ (for $\lambda \neq 0$). Then:

$$\lambda I - AB = \lambda\left(I - \frac{1}{\lambda}AB\right) \text{ invertible} \iff I - \frac{1}{\lambda}AB \text{ invertible} \iff I - BA\frac{1}{\lambda} \text{ invertible} \iff \lambda I - BA \text{ invertible}$$

So: **$\lambda I - AB$ and $\lambda I - BA$ are invertible for the same values of $\lambda$**. This will be important when we study eigenvalues in Chapter 5!
:::

---

## Topic 3: Left and Right Inverses (20 min)

### Learning Goal

Students understand that left inverses exist for thin full-rank matrices, are **not unique**, and the choice of left inverse corresponds to a choice of **subspace complement**.

### Suggested Approach

#### Step 1: When Do Inverses Exist? (3 min)

::: attention
**Key Principle**

A **left inverse** of $U$ is a matrix $U_L$ such that $U_L U = I$.

- Left inverse makes sense only when $U$ is **left cancelable** (rank = columns).
- Typically: $U$ is **thin full rank** ($m \times r$, rank $r$, $m > r$).

A **right inverse** of $V$ is a matrix $V_R$ such that $VV_R = I$.

- Right inverse makes sense only when $V$ is **right cancelable** (rank = rows).
- Typically: $V$ is **fat full rank** ($r \times n$, rank $r$, $n > r$).

**If $U$ is thin (not square), it has NO right inverse.** If $V$ is fat (not square), it has NO left inverse.
:::

::: remark
**Why?**

Suppose $U$ is $m \times r$ with $m > r$ and $UX = I_m$. Then $\operatorname{Col}(UX) = \operatorname{Col}(I_m) = \mathbb{R}^m$. But $\operatorname{Col}(UX) \subseteq \operatorname{Col}(U)$ which has dimension $r < m$. Contradiction! So no right inverse exists.
:::

#### Step 2: Constructing a Left Inverse (5 min)

::: proposition
**Construction**

Let $U$ be $m \times r$ with rank $r$. Choose **any** $r \times m$ matrix $V$ such that $VU$ is invertible. Then:

$$U_L = (VU)^{-1}V$$

is a left inverse of $U$.
:::

**Verification**: $U_L U = (VU)^{-1}V \cdot U = (VU)^{-1}(VU) = I_r$. ✓

**When is $VU$ invertible?** By Topic 1: $\operatorname{rank}(VU) = r \iff \operatorname{Null}(V) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$.

So we just need $V$ whose null space doesn't overlap with $\operatorname{Col}(U)$. By [Lecture 8, Theorem 4.4](../notes/cross-filling-projections.md), $VU$ is then invertible.

::: example
**Example 3.1**

$U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ ($3 \times 2$, rank 2).

**Choice 1**: $V_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.

$V_1 U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$ (already invertible!)

$U_{L_1} = (I_2)^{-1} V_1 = V_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$

Check: $U_{L_1} U = I_2$ ✓. Note: $\operatorname{Null}(U_{L_1}) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$.

**Choice 2**: $V_2 = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \end{pmatrix}$.

$V_2 U = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$, $(V_2 U)^{-1} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$

$U_{L_2} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \end{pmatrix}$

Check: $U_{L_2} U = \begin{pmatrix} 0+0 & -1+1 \\ -1+0 & 0+1\end{pmatrix} = I_2$ ✓. Note: $\operatorname{Null}(U_{L_2}) = \operatorname{span}\left\{\begin{pmatrix}1\\1\\1\end{pmatrix}\right\}$.

**Two different left inverses!** They differ because they have different null spaces.
:::

#### Step 3: Uniqueness Given Null Space (7 min)

The example above shows: different null spaces → different left inverses. Is this the **only** source of non-uniqueness?

::: proposition
**Theorem: Unique Left Inverse Given Complement**

Let $U$ be $m \times r$ with rank $r$. Let $W$ be a subspace of $\mathbb{R}^m$ that is a **complement** of $\operatorname{Col}(U)$, meaning:

1. $\operatorname{Col}(U) \cap W = \{\mathbf{0}\}$ (no overlap)
2. Every vector in $\mathbb{R}^m$ can be written as $\mathbf{v} + \mathbf{w}$ with $\mathbf{v} \in \operatorname{Col}(U)$, $\mathbf{w} \in W$

Then there is **exactly one** left inverse $U_L$ with $\operatorname{Null}(U_L) = W$.
:::

**Proof**:

Suppose $U_1$ and $U_2$ are two left inverses of $U$ with the same null space $W$.

Then $(U_1 - U_2)U = I - I = 0$.

Take any $\mathbf{x} \in \mathbb{R}^m$ and decompose it: $\mathbf{x} = \mathbf{v} + \mathbf{w}$ where $\mathbf{v} \in \operatorname{Col}(U)$ and $\mathbf{w} \in W$.

**On $\operatorname{Col}(U)$**: Write $\mathbf{v} = U\mathbf{c}$ for some $\mathbf{c}$. Then:
$$U_1 \mathbf{v} = U_1 U\mathbf{c} = I\mathbf{c} = \mathbf{c} = U_2 U\mathbf{c} = U_2 \mathbf{v}$$

**On $W$**: Since both have null space $W$:
$$U_1 \mathbf{w} = \mathbf{0} = U_2 \mathbf{w}$$

**Combine**: $U_1 \mathbf{x} = U_1(\mathbf{v} + \mathbf{w}) = \mathbf{c} + \mathbf{0} = U_2(\mathbf{v} + \mathbf{w}) = U_2 \mathbf{x}$.

This holds for every $\mathbf{x}$, so $U_1 = U_2$. ∎

::: attention
**One-to-One Correspondence**

$$\boxed{\text{Left inverses of } U \quad \longleftrightarrow \quad \text{Complements of } \operatorname{Col}(U)}$$

Each complement $W$ determines exactly one left inverse (with null space $W$). Different complements give different left inverses.
:::

#### Step 4: The Moore-Penrose Choice (5 min)

Among all complements of $\operatorname{Col}(U)$, there is one **canonical** choice: the **orthogonal complement**.

From Lecture 6: $\operatorname{Col}(U) \perp \operatorname{Null}(U^T)$, and their dimensions add up: $r + (m-r) = m$. So $\operatorname{Null}(U^T)$ is a complement of $\operatorname{Col}(U)$ — the **perpendicular** one.

::: proposition
**The Moore-Penrose Left Inverse**

The unique left inverse of $U$ with null space $\operatorname{Null}(U^T)$ is:

$$U^+ = (U^T U)^{-1} U^T$$

This is called the **(Moore-Penrose) pseudoinverse** of $U$.
:::

**Why $U^T U$ is invertible**: From Topic 1, $\operatorname{rank}(U^T U) = r - \dim(\operatorname{Null}(U^T) \cap \operatorname{Col}(U))$. But $\operatorname{Col}(U) \perp \operatorname{Null}(U^T)$ (Lecture 6), so $\operatorname{Null}(U^T) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$. Therefore $\operatorname{rank}(U^T U) = r$, and $U^T U$ is invertible by [Lecture 8, Theorem 4.4](../notes/cross-filling-projections.md).

**Verify it's a left inverse**: $U^+ U = (U^T U)^{-1} U^T U = I_r$ ✓

**Verify null space**: $U^+ \mathbf{w} = (U^T U)^{-1} U^T \mathbf{w}$. If $\mathbf{w} \in \operatorname{Null}(U^T)$, then $U^T \mathbf{w} = \mathbf{0}$, so $U^+ \mathbf{w} = \mathbf{0}$. Therefore $\operatorname{Null}(U^T) \subseteq \operatorname{Null}(U^+)$. Since both have dimension $m - r$ (by cross-filling counting), they are equal. ✓

::: example
**Example 3.2**

Same $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$.

$U^T U = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

$(U^T U)^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

$U^+ = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \end{pmatrix}$

Check: $U^+ U = \frac{1}{3}\begin{pmatrix}2+0 & 0-1 \\ -1+0 & 0+2\end{pmatrix} = I_2$ ✓

This left inverse is neither $U_{L_1}$ nor $U_{L_2}$ from Example 3.1 — it's the one orthogonal to $\operatorname{Col}(U)$.
:::

---

## Challenging Problem (Remaining Time)

::: example
**Challenge: Finding a Basis of $\operatorname{Col}(U) \cap \operatorname{Null}(V)$**

**Given**: $U = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ ($4 \times 3$, rank 3), $\quad V = \begin{pmatrix} 1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \end{pmatrix}$ ($2 \times 4$, rank 2)

**Goal**: Find a basis for $\operatorname{Col}(U) \cap \operatorname{Null}(V)$.

**Method** (from Topic 1 proof):

**Step 1**: Compute $VU$:
$$VU = \begin{pmatrix} 1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & -1 \\ -1 & 0 & 0 \end{pmatrix}$$

**Step 2**: Find $\operatorname{Null}(VU)$ by cross-filling $(VU \mid \mathbf{0})$:

Pivot at $(1,1)$: row $(1, 0, -1)$, column $\begin{pmatrix}1\\-1\end{pmatrix}$.

$R_1 = \frac{1}{1}\begin{pmatrix}1\\-1\end{pmatrix}(1\;\; 0\;\; {-1}) = \begin{pmatrix} 1 & 0 & -1 \\ -1 & 0 & 1\end{pmatrix}$

Remainder: $\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

Pivot at $(2,3)$: gives equation $x_3 = 0$.

From $R_1$: $x_1 - x_3 = 0 \Rightarrow x_1 = x_3 = 0$.

Free variable: $x_2$. So $\operatorname{Null}(VU) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$.

**Step 3**: Map through $U$:

$$U\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}0\\1\\0\\1\end{pmatrix}$$

**Answer**: $\operatorname{Col}(U) \cap \operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\\1\end{pmatrix}\right\}$.

**Verify**: $\begin{pmatrix}0\\1\\0\\1\end{pmatrix} \in \operatorname{Col}(U)$? Yes, $U\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}0\\1\\0\\1\end{pmatrix}$ ✓

$\begin{pmatrix}0\\1\\0\\1\end{pmatrix} \in \operatorname{Null}(V)$? $V\begin{pmatrix}0\\1\\0\\1\end{pmatrix} = \begin{pmatrix}0\\0\end{pmatrix}$ ✓

**Also**: $\operatorname{rank}(VU) = 3 - 1 = 2$, confirmed by the cross-filling above. ✓
:::

---

## Time Management Recommendations

| Topic | Suggested Time | Adjustment Strategy |
|-------|---------------|---------------------|
| Topic 1: Rank of $VU$ | 12 min | Can compress proof to sketch (state bijection, skip surjectivity detail) |
| Topic 2A: Block diagonal | 4 min | Can state without proof if short on time |
| Topic 2B: Invertible factors | 4 min | **Essential** — used in Topic 2C and 3 |
| Topic 2C: $I-AB$, $I-BA$ | 10 min | Can cut eigenvalue remark if short; the two identities + consequence are core |
| Topic 3: Left/right inverses | 20 min | **Core** — if short on time, cut Moore-Penrose and state as preview |
| Challenge | remaining | Skip if no time; assign as exercise |

---

## Common Student Mistakes to Address

### Mistake 1: Confusing $UV$ and $VU$

**Symptom**: "Thin times fat is always invertible"

**Fix**: $UV$ is $m \times n$ (big, not square). $VU$ is $r \times r$ (square, can be invertible). Only $VU$ *can* be invertible, and only when $\operatorname{Null}(V) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$.

### Mistake 2: "Left inverse is unique"

**Symptom**: Computing one left inverse and assuming it's the only one.

**Fix**: Example 3.1 shows two different left inverses. Emphasize: you must specify the null space (= complement) to get uniqueness.

### Mistake 3: Thinking $U_L U = I$ implies $U U_L = I$

**Symptom**: Treating left inverse as a two-sided inverse.

**Fix**: $U$ is $m \times r$, $U_L$ is $r \times m$. $U_L U = I_r$ is $r \times r$. $U U_L$ is $m \times m$ — it cannot be $I_m$ because $\operatorname{rank}(U U_L) \leq r < m$.

---

## Questions to Check Understanding

1. **Rank formula**: "$U$ is $4 \times 2$ rank 2, $V$ is $2 \times 4$ rank 2. What are the possible values of $\operatorname{rank}(VU)$?"
   - Expected: $\operatorname{rank}(VU) = 2 - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$. Since $\operatorname{Null}(V)$ has dim 2 in $\mathbb{R}^4$ and $\operatorname{Col}(U)$ has dim 2 in $\mathbb{R}^4$, the overlap can be 0, 1, or 2. So rank can be 2, 1, or 0.

2. **$I-AB$ trick**: "If $AB = I$ (i.e., $I - AB = 0$, not invertible), what does the trick tell us about $BA$?"
   - Expected: $I - BA$ is also not invertible. So $BA$ has eigenvalue 1. But $BA$ might not equal $I$! (It does when $A, B$ are square.)

3. **Left inverse**: "A $5 \times 3$ matrix $U$ has rank 3. How many left inverses does it have?"
   - Expected: Infinitely many — one for each complement of $\operatorname{Col}(U)$ in $\mathbb{R}^5$.

4. **Moore-Penrose**: "Why is $(U^T U)^{-1}U^T$ special among all left inverses?"
   - Expected: It's the unique left inverse whose null space is $\operatorname{Null}(U^T) = \operatorname{Col}(U)^\perp$ — the orthogonal complement. Any other left inverse has a "tilted" null space.

---

## Connections to Future Material

- **Lecture 7–8 (Projections)**: $UU_L$ is a projection ($P^2 = P$). Different left inverses give different projections onto $\operatorname{Col}(U)$. The Moore-Penrose choice gives the **orthogonal** projection.
- **Lecture 8 (Theorem 4.4)**: Full rank square ⟺ invertible — the result we referenced but did not prove in this tutorial.
- **Lecture 10 (Constructing Projections)**: The formula $P = B(AB)^{-1}A$ is exactly the left-inverse construction in disguise.
- **Chapter 5 (Eigenvalues)**: The $\lambda I - AB$ / $\lambda I - BA$ equivalence means $AB$ and $BA$ share all nonzero eigenvalues.

---

**Last Updated**: 2026-03-24
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
