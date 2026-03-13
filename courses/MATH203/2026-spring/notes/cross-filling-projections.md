# Lecture 8: Decomposition of Projections

> **Topics**: §5.2–5.3 — Decomposition P=UV, VU=I Automatic, rank(P)=trace(P), Projection Splitting
> **Date**: Apr 6 – Apr 9, 2026

---

## Introduction

In Lecture 7, we introduced projection operators through the **sunlight-floor model** and proved key properties from the defining equation $P^2 = P$. We discovered that:
- $\operatorname{Col}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{v}\}$ (vectors on the floor)
- $\operatorname{Null}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{0}\}$ (vectors pointing to the sun)
- $\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$ (floor and sunlight are not parallel)

But we still have two fundamental questions unanswered:

::: question
**Two Natural Questions**

1. **How to construct projections?** Given a floor and a sunlight direction, how do we write down the matrix $P$?

2. **What makes projections special?** We know from Chapter 1 that any matrix can be written as $A = UV$ via cross-filling. What happens when we cross-fill a projection?
:::

This lecture answers the second question. We will discover that **decomposing projections reveals magical properties** that do not hold for general matrices.

---

## 1. Decomposing Projections into Products

### 1.1 Review: Decomposing Any Matrix

Recall from Lecture 3 that any matrix $A$ can be decomposed into a sum of rank-1 matrices:

$$A = R_1 + R_2 + \cdots + R_r$$

where $r = \operatorname{rank}(A)$. We can collect these rank-1 pieces into a product form:

$$A = UV$$

where:
- $U$ is an $m \times r$ matrix whose columns are the "left parts" of each $R_i$
- $V$ is an $r \times n$ matrix whose rows are the "right parts" of each $R_i$

::: example
**Example 1.1: Decomposing a General Matrix**

$$A = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix}$$

Here $U = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ (one column) and $V = \begin{pmatrix} 1 & 2 \end{pmatrix}$ (one row).

We can verify: $UV = \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix} = A$. ✓

But what about $VU$?

$$VU = \begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = 1 \cdot 2 + 2 \cdot 1 = 4 \neq I$$

For general matrices, **$VU$ is just some number or matrix** — nothing special.
:::

### 1.2 What Happens When We Cross-Fill a Projection?

Now let's try the same process with a **projection matrix**.

::: example
**Example 1.2: Decomposing a Projection**

Consider the projection onto the $x$-axis:

$$P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$$

Verify it's a projection: $P^2 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = P$. ✓

Cross-fill it:

$$P = \begin{pmatrix} 1 \\ 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \end{pmatrix}$$

So $U = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $V = \begin{pmatrix} 1 & 0 \end{pmatrix}$.

Now compute $VU$:

$$VU = \begin{pmatrix} 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 0 \end{pmatrix} = 1 = I_1$$

**Remarkable!** For this projection, $VU = I$.
:::

Is this just a coincidence, or does it always happen?

::: example
**Example 1.3: Another Projection**

Consider the projection onto the line $y = x$:

$$P = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$$

Verify: $P^2 = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \cdot \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = P$. ✓

Cross-fill it:

$$P = \frac{1}{2}\begin{pmatrix} 1 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \end{pmatrix}$$

So $U = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $V = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \end{pmatrix}$ (we can scale to normalize).

Actually, let's just take $U = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $V = \frac{1}{2}\begin{pmatrix} 1 & 1 \end{pmatrix}$.

Then:

$$VU = \frac{1}{2}\begin{pmatrix} 1 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{2}(1 + 1) = 1 = I_1$$

Again, $VU = I$!
:::

This pattern suggests a deep theorem.

---

## 2. Decomposition and the VU = I Property

### 2.1 Statement

::: proposition
**Theorem 2.1 (VU = I Automatic)**

Let $P$ be a projection ($P^2 = P$). Suppose $P = UV$ where:
- $U$ is $m \times r$ with full column rank (rank $r$)
- $V$ is $r \times n$ with full row rank (rank $r$)

Then **$VU = I_r$ automatically**.
:::

::: remark
**Why Is This Remarkable?**

For a general matrix $A = UV$, the product $VU$ can be anything:
- It might not even be square (if $U$ and $V$ have different numbers of columns/rows)
- Even if square, it's typically not the identity

But for projections, **$P^2 = P$ forces $VU = I$ automatically** — no additional conditions needed!
:::

### 2.2 Proof

The proof uses only the defining property $P^2 = P$ and basic matrix algebra.

**Given**: $P = UV$ and $P^2 = P$.

**Step 1**: Expand $P^2 = P$ using $P = UV$:

$$UVUV = UV$$

**Step 2**: Apply left cancellation to $U$.

Since $U$ has rank $r$ (full column rank), its columns are linearly independent. From Lecture 4, we know linearly independent columns allow **left cancellation**:

$$UVUV = UV \quad \Longrightarrow \quad VUV = V$$

**Step 3**: Apply right cancellation to $V$.

Since $V$ has rank $r$ (full row rank), its rows are linearly independent, which allows **right cancellation**:

$$VUV = V \quad \Longrightarrow \quad VU = I_r$$

Done! ∎

---

## 3. Rank Equals Trace for Projections

The automatic property $VU = I$ leads to a stunning consequence.

::: proposition
**Theorem 3.1 (Rank = Trace for Projections)**

For any projection $P$ (satisfying $P^2 = P$):

$$\operatorname{rank}(P) = \operatorname{trace}(P)$$
:::

**Proof**:

Write $P = UV$ where $\operatorname{rank}(P) = r$. By Theorem 2.1, $VU = I_r$.

Using the cyclic property of trace:

$$\operatorname{trace}(P) = \operatorname{trace}(UV) = \operatorname{trace}(VU) = \operatorname{trace}(I_r) = r = \operatorname{rank}(P)$$

Done! ∎

::: remark
**Why Doesn't This Work for General Matrices?**

For a general matrix $A = UV$, we do NOT have $VU = I$.

Even though $\operatorname{trace}(A) = \operatorname{trace}(UV) = \operatorname{trace}(VU)$, the matrix $VU$ is NOT the identity, so we cannot conclude that $\operatorname{trace}(A) = \operatorname{rank}(A)$.

**This is why rank = trace is special to projections.**
:::

### 3.1 Characterization of Rank-1 Projections

For rank-1 projections, we have a beautiful characterization.

::: proposition
**Corollary 3.2 (Rank-1 Projection Characterization)**

For a square matrix $A$, consider the following three conditions:
1. $\operatorname{rank}(A) = 1$
2. $\operatorname{trace}(A) = 1$
3. $A^2 = A$ (i.e., $A$ is a projection)

**If any two of these conditions hold, then all three hold.**
:::

**Proof**:

We prove each of the three implications:

**(1) + (2) ⟹ (3)**: Suppose $\operatorname{rank}(A) = 1$ and $\operatorname{trace}(A) = 1$.

Since rank is 1, we can write $A = \mathbf{u}\mathbf{v}^T$ for some vectors $\mathbf{u}, \mathbf{v}$.

The trace is:
$$\operatorname{trace}(A) = \operatorname{trace}(\mathbf{u}\mathbf{v}^T) = \mathbf{v}^T \mathbf{u} = 1$$

Now compute $A^2$:
$$A^2 = (\mathbf{u}\mathbf{v}^T)(\mathbf{u}\mathbf{v}^T) = \mathbf{u}(\mathbf{v}^T \mathbf{u})\mathbf{v}^T = \mathbf{u} \cdot 1 \cdot \mathbf{v}^T = \mathbf{u}\mathbf{v}^T = A$$

So $A$ is a projection. ✓

**(1) + (3) ⟹ (2)**: Suppose $\operatorname{rank}(A) = 1$ and $A^2 = A$.

Write $A = UV$ where $U$ is $n \times 1$ and $V$ is $1 \times n$ (since rank is 1).

By Theorem 2.1, $VU = I_1$ (i.e., $VU = 1$, a scalar).

Therefore:
$$\operatorname{trace}(A) = \operatorname{trace}(UV) = \operatorname{trace}(VU) = \operatorname{trace}(1) = 1$$

✓

**(2) + (3) ⟹ (1)**: Suppose $\operatorname{trace}(A) = 1$ and $A^2 = A$.

By Theorem 3.1, $\operatorname{rank}(A) = \operatorname{trace}(A) = 1$. ✓

Done! ∎

::: remark
**Why Is This Useful?**

This characterization tells us that **rank-1 projections are exactly the matrices with rank 1 and trace 1**.

We don't need to check $A^2 = A$ separately — the projection property comes for free from rank and trace!

This will be crucial in Section 5 when we decompose projections into rank-1 pieces.
:::

### 3.2 When Are Both U and V Square?

An interesting question: if $UV = I$, when are both $U$ and $V$ square matrices?

::: proposition
**Corollary 3.3 (UV = I Forces Square Matrices)**

Suppose $U$ is $n \times r$ and $V$ is $r \times n$ with $UV = I_n$ and $r \leq n$.

Then $n = r$, and **both $U$ and $V$ are square invertible matrices** with $VU = UV = I$.
:::

**Proof**:

**Step 1**: Observe that $VU$ is a projection.

$$VU \cdot VU = V(UV)U = VI_nU = VU$$

So $VU$ is an $r \times r$ projection.

**Step 2**: Show that $I_r - VU$ is also a projection.

$$(I_r - VU)^2 = I_r - 2VU + (VU)^2 = I_r - 2VU + VU = I_r - VU$$

**Step 3**: Compute the trace.

$$\operatorname{trace}(I_r - VU) = \operatorname{trace}(I_r) - \operatorname{trace}(VU) = r - \operatorname{trace}(VU)$$

But $\operatorname{trace}(VU) = \operatorname{trace}(UV) = \operatorname{trace}(I_n) = n$.

Therefore:

$$\operatorname{trace}(I_r - VU) = r - n$$

**Step 4**: Apply rank = trace.

Since $I_r - VU$ is a projection, by Theorem 3.1:

$$\operatorname{rank}(I_r - VU) = \operatorname{trace}(I_r - VU) = r - n$$

**Step 5**: Conclude.

Since rank $\geq 0$, we have $r - n \geq 0$, so $r \geq n$.

Combined with the assumption $r \leq n$, we get $r = n$.

Therefore $\operatorname{trace}(I_r - VU) = 0$, which means $\operatorname{rank}(I_r - VU) = 0$.

A matrix with rank 0 is the zero matrix, so $I_r - VU = 0$.

Hence $VU = I_r$. ∎

::: remark
**Why Is This Surprising?**

This says: **You cannot have $UV = I$ with $U$ thin and $V$ fat** (or vice versa).

If the product is the identity, both matrices must be square and invertible, and the product commutes: $UV = VU = I$.
:::

---

### 3.3 Full-Rank Square Matrix is Invertible

Corollary 3.3 establishes a key property of square matrices with one-sided inverses. We now use this result to prove the fundamental invertibility criterion.

::: proposition
**Proposition 3.4 (Full-Rank Square Matrix is Invertible)**

An $n \times n$ matrix $X$ is invertible if and only if $\operatorname{rank}(X) = n$ (full rank).
:::

**Proof**:

**Direction** $(\Rightarrow)$: If $X$ is invertible, then $\operatorname{rank}(X) = n$.

Suppose $XY = I$ for some matrix $Y$. Note that $I$ is a projection ($I^2 = I$) with $\operatorname{rank}(I) = n$.

By cross-filling (Lecture 3), decompose $X = R_1 + \cdots + R_k$ where each $R_i$ is rank-1 and $k = \operatorname{rank}(X)$. Then:
$$(R_1 + \cdots + R_k)Y = I$$

This gives $I = R_1 Y + \cdots + R_k Y$.

Since $\operatorname{rank}(R_i Y) \leq \operatorname{rank}(R_i) = 1$ for each $i$, we have:
$$\sum_{i=1}^k \operatorname{rank}(R_i Y) \leq \sum_{i=1}^k \operatorname{rank}(R_i) = k$$

Since $k \leq n$ and $\operatorname{rank}(I) = n$, we can apply **Theorem 5.1** (Projection Decomposition): if a projection $P$ can be written as $P = S_1 + \cdots + S_m$ with $\sum \operatorname{rank}(S_i) \leq \operatorname{rank}(P)$, then equality must hold.

Therefore $\sum_{i=1}^k \operatorname{rank}(R_i Y) = \operatorname{rank}(I) = n$, which implies $k \geq n$.

Since $k = \operatorname{rank}(X) \leq n$ (for an $n \times n$ matrix), we conclude $k = n$.

**Direction** $(\Leftarrow)$: If $\operatorname{rank}(X) = n$, then $X$ is invertible.

By cross-filling, $X = UV$ where $\operatorname{rank}(X) = n$.

Since $X$ is $n \times n$ with rank $n$, the decomposition requires exactly $n$ rank-one pieces, so $U$ and $V$ must both be $n \times n$ square matrices.

**Construct a one-sided inverse for $V$**:

Consider the augmented matrix $(X \mid I_n)$ and apply cross-filling using the **same pivot selections** as used to decompose $X$:
- Each pivot is selected from the $X$-part (not from $I_n$)
- Each pivot clears its row and column

Since all pivots are in $X$, the $X$-part decomposes exactly as before: $X = UV$. However, $I_n$ is affected by the same row operations—each time a pivot row is selected, the corresponding row of $I_n$ is "bombarded" and transformed.

Since $\operatorname{rank}(X) = n$, we select $n$ pivots covering all $n$ rows. Therefore $I_n$ is completely "bombarded" through all rows, transforming into some matrix $F$.

The cross-filling structure gives:
$$(X \mid I_n) = (U \mid F)V$$

Comparing both sides:
- Left part: $X = UV$ ✓
- Right part: $I_n = FV$

Therefore $FV = I_n$. Since $V$ is square, by **Corollary 3.3** (if $FV = I$ for square matrices, then $VF = I$), we have $V$ invertible.

**Construct a one-sided inverse for $U$**:

Similarly, consider $\begin{pmatrix} X \\ I_n \end{pmatrix}$ and apply cross-filling using **column selections** (all pivots selected from $X$-part). Since $\operatorname{rank}(X) = n$ (equal to the number of columns), all $n$ columns are covered, so $I_n$ is completely bombarded through all columns, giving:
$$\begin{pmatrix} X \\ I_n \end{pmatrix} = U\begin{pmatrix} V \\ G \end{pmatrix}$$

Thus $I_n = UG$. By **Corollary 3.3**, $U$ is invertible.

**Conclusion**: $X = UV$ with both $U, V$ invertible, so $X$ is invertible. □

::: remark
**Key Insight from Cross-Filling**

This proof shows that when $\operatorname{rank}(X) = n$ (full rank), the cross-filling decomposition $X = UV$ automatically produces **invertible** factors $U$ and $V$.

The augmented matrix technique simultaneously reveals one-sided inverses:
- $(X \mid I) = (U \mid F)V$ gives $FV = I$, so $F = V^{-1}$
- $\begin{pmatrix} X \\ I \end{pmatrix} = U\begin{pmatrix} V \\ G \end{pmatrix}$ gives $UG = I$, so $G = U^{-1}$

This connects to the standard method of finding $X^{-1}$ by row-reducing $(X \mid I) \to (I \mid X^{-1})$.
:::

---

## 4. Compatible Families of Projections

Now we explore what happens when we have **multiple projections that add up to the identity**.

### 4.1 Definition

::: definition
**Compatible Family of Projections**

A collection of projection matrices $\{P_1, P_2, \ldots, P_k\}$ (each satisfying $P_i^2 = P_i$) is called a **compatible family** if:

$$P_1 + P_2 + \cdots + P_k = I$$

and

$$P_i P_j = 0 \quad \text{for all } i \neq j$$
:::

::: example
**Example 4.1: Projections onto Coordinate Axes**

In $\mathbb{R}^3$, consider:

$$P_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad P_2 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad P_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Check:
- Each $P_i^2 = P_i$ ✓
- $P_1 + P_2 + P_3 = I_3$ ✓
- $P_i P_j = 0$ for $i \neq j$ ✓

This is a compatible family.
:::

### 4.2 Geometric Interpretation

::: remark
**What Does Compatibility Mean Geometrically?**

If $\{P_1, \ldots, P_k\}$ is a compatible family with $P_1 + \cdots + P_k = P$:

1. **Unique decomposition**: Every vector $\mathbf{v}$ satisfies:

   $$P\mathbf{v} = P_1\mathbf{v} + P_2\mathbf{v} + \cdots + P_k\mathbf{v}$$

   and this decomposition is unique (any element of $\operatorname{Col}(P)$ can be uniquely written as a sum of elements from $\operatorname{Col}(P_1), \ldots, \operatorname{Col}(P_k)$).

2. **$P_i P_j = 0$ for $i \neq j$** means: the "floors" are mutually orthogonal in the sense that:

   $$\operatorname{Col}(P_i) \cap \operatorname{Col}(P_j) = \{\mathbf{0}\} \quad \text{for } i \neq j$$

The space is **decomposed** into $k$ subspaces that are "perpendicular" (in a generalized sense).
:::

### 4.3 Key Properties of Compatible Families

Compatible families have beautiful properties related to linear independence and closure under subsums.

::: proposition
**Theorem 4.1 (Properties of Compatible Families)**

Let $\{P_1, \ldots, P_k\}$ be a compatible family of projections. Then:

1. **Vector decompositions are linearly independent**: For any vector $\mathbf{v}$, the nonzero vectors among $\{P_1\mathbf{v}, \ldots, P_k\mathbf{v}\}$ are linearly independent.

2. **Subsums are projections**: For any subset $I \subseteq \{1, \ldots, k\}$, the sum $\sum_{i \in I} P_i$ is also a projection.
:::

**Proof of (1)**:

Suppose $c_1 P_1\mathbf{v} + \cdots + c_k P_k\mathbf{v} = \mathbf{0}$.

Left-multiply both sides by $P_j$ for any $j$:

$$P_j(c_1 P_1\mathbf{v} + \cdots + c_k P_k\mathbf{v}) = \mathbf{0}$$

Expanding:

$$c_1 P_j P_1\mathbf{v} + \cdots + c_j P_j P_j\mathbf{v} + \cdots + c_k P_j P_k\mathbf{v} = \mathbf{0}$$

Since $P_j P_i = 0$ for $i \neq j$ and $P_j P_j = P_j$:

$$c_j P_j\mathbf{v} = \mathbf{0}$$

If $P_j\mathbf{v} \neq \mathbf{0}$, then $c_j = 0$.

Therefore, all coefficients of nonzero vectors must be zero, proving linear independence. ∎

**Proof of (2)**:

Let $Q = \sum_{i \in I} P_i$. We need to show $Q^2 = Q$.

$$Q^2 = \left(\sum_{i \in I} P_i\right)\left(\sum_{j \in I} P_j\right) = \sum_{i \in I}\sum_{j \in I} P_i P_j$$

Since $P_i P_j = 0$ for $i \neq j$ and $P_i P_i = P_i$:

$$Q^2 = \sum_{i \in I} P_i P_i = \sum_{i \in I} P_i = Q$$

∎

::: remark
**The Direct Sum Interpretation**

Property (1) is the **vector-level statement of direct sum decomposition**:

If $\{P_1, \ldots, P_k\}$ is compatible with $P_1 + \cdots + P_k = P$, then:

$$P\mathbf{v} = P_1\mathbf{v} + P_2\mathbf{v} + \cdots + P_k\mathbf{v}$$

is the **unique way** to write $P\mathbf{v}$ as a sum of vectors from $\operatorname{Col}(P_1), \ldots, \operatorname{Col}(P_k)$.

This is exactly the definition of **direct sum**:

$$\operatorname{Col}(P) = \operatorname{Col}(P_1) \oplus \operatorname{Col}(P_2) \oplus \cdots \oplus \operatorname{Col}(P_k)$$
:::

---

## 5. Decomposition of Projections

Here comes the most surprising result of this lecture.

### 5.1 The Question

Suppose we have a projection $P$ decomposed into a sum of matrices:

$$P = R_1 + R_2 + \cdots + R_k$$

We don't know yet whether the $R_i$ are projections. We only know:

$$\sum_{i=1}^k \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$$

**Question**: Can we conclude that each $R_i$ is a projection and that they are mutually orthogonal ($R_i R_j = 0$ for $i \neq j$)?

Surprisingly, the answer is **yes**!

### 5.2 The Theorem

::: proposition
**Theorem 5.1 (Projection Decomposition)**

Let $P$ be a projection ($P^2 = P$). Suppose:

$$P = R_1 + R_2 + \cdots + R_k$$

where each $R_i$ is a matrix satisfying:

$$\sum_{i=1}^k \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$$

Then **automatically**:
1. Each $R_i$ is a projection ($R_i^2 = R_i$)
2. $R_i R_j = 0$ for all $i \neq j$
:::

::: remark
**Why Is This Remarkable?**

We don't assume the $R_i$ are projections — **the projection property emerges automatically** from the rank condition!

This is the power of the rank = trace theorem combined with decomposition.
:::

### 5.3 Proof Using the R₀ Trick

The key insight is to introduce a "complementary" matrix to make the sum equal to the identity.

**Proof**:

Let $R_0 = I - P$. Note that $R_0$ is also a projection:

$$R_0^2 = (I - P)^2 = I - 2P + P^2 = I - 2P + P = I - P = R_0$$

Now we have:

$$I_n = R_0 + R_1 + \cdots + R_k$$

**Step 1**: Count total rank.

$$\sum_{i=0}^k \operatorname{rank}(R_i) = \operatorname{rank}(R_0) + \sum_{i=1}^k \operatorname{rank}(R_i) \leq \operatorname{rank}(R_0) + \operatorname{rank}(P)$$

Since $R_0 = I - P$ is a projection, by Theorem 3.1:

$$\operatorname{rank}(R_0) = \operatorname{trace}(R_0) = \operatorname{trace}(I - P) = n - \operatorname{trace}(P) = n - \operatorname{rank}(P)$$

Therefore:

$$\sum_{i=0}^k \operatorname{rank}(R_i) \leq (n - \operatorname{rank}(P)) + \operatorname{rank}(P) = n$$

**Step 2**: Decompose each $R_i$.

For each $i = 0, 1, \ldots, k$, decompose $R_i = U_i V_i$ where $U_i$ is $n \times r_i$ and $V_i$ is $r_i \times n$ with $r_i = \operatorname{rank}(R_i)$.

Collect all pieces:

$$U = \begin{pmatrix} U_0 & U_1 & \cdots & U_k \end{pmatrix}, \quad V = \begin{pmatrix} V_0 \\ V_1 \\ \vdots \\ V_k \end{pmatrix}$$

Then:

$$UV = \sum_{i=0}^k U_i V_i = \sum_{i=0}^k R_i = I_n$$

The matrix $U$ is $n \times \left(\sum_{i=0}^k r_i\right)$ and $V$ is $\left(\sum_{i=0}^k r_i\right) \times n$.

**Step 3**: Apply Corollary 3.3.

Since $UV = I_n$ and $\sum_{i=0}^k r_i \leq n$ (from Step 1), by Corollary 3.3, both $U$ and $V$ must be $n \times n$ square matrices, and:

$$VU = I_n$$

This forces $\sum_{i=0}^k r_i = n$ (equality must hold).

**Step 4**: Block structure.

Since $VU = I_n$, we have:

$$\begin{pmatrix} V_0 \\ V_1 \\ \vdots \\ V_k \end{pmatrix} \begin{pmatrix} U_0 & U_1 & \cdots & U_k \end{pmatrix} = \begin{pmatrix} V_0 U_0 & V_0 U_1 & \cdots & V_0 U_k \\ V_1 U_0 & V_1 U_1 & \cdots & V_1 U_k \\ \vdots & \vdots & \ddots & \vdots \\ V_k U_0 & V_k U_1 & \cdots & V_k U_k \end{pmatrix} = I_n$$

The only way this equals $I_n$ is if the matrix is block diagonal:

$$V_i U_j = 0 \quad \text{for all } i \neq j, \quad \text{and} \quad V_i U_i = I_{r_i}$$

**Step 5**: Prove each $R_i$ is a projection.

For each $i$:

$$R_i^2 = (U_i V_i)(U_i V_i) = U_i (V_i U_i) V_i = U_i I_{r_i} V_i = U_i V_i = R_i$$

So each $R_i$ is a projection! ✓

**Step 6**: Prove orthogonality.

For $i \neq j$:

$$R_i R_j = (U_i V_i)(U_j V_j) = U_i (V_i U_j) V_j = U_i \cdot 0 \cdot V_j = 0$$

So $R_i R_j = 0$ for all $i \neq j$! ✓

Done! ∎

::: remark
**The Magic of Decomposing**

This proof would be much harder without the cross-filling perspective!

The key insight is:
1. **Trace = rank** tells us how many columns $U$ must have
2. **VU = I** forces a block diagonal structure
3. The block diagonal structure **forces orthogonality**

All of this flows naturally from $P^2 = P$. No additional conditions needed!
:::

---

## 6. Summary and Looking Ahead

In this lecture, we discovered the **magical properties of decomposing projections**:

::: tip
**Key Theorems**

1. **VU = I Automatic** (Theorem 2.1): If $P = UV$ with $P^2 = P$ and $U, V$ full rank, then $VU = I$.

2. **Rank = Trace** (Theorem 3.1): For any projection $P$, $\operatorname{rank}(P) = \operatorname{trace}(P)$.

3. **Rank-1 Characterization** (Corollary 3.2): For square matrix $A$, any two of {rank=1, trace=1, $A^2=A$} imply the third.

4. **UV = I Forces Square** (Corollary 3.3): If $UV = I$ with $U$ thin and $V$ fat, then both must be square and $VU = I$.

5. **Projection Decomposition** (Theorem 5.1): If $P = R_1 + \cdots + R_k$ with $\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$, then each $R_i$ is a projection and $R_i R_j = 0$.
:::

These results show that **projections have extremely rigid structure**. The single equation $P^2 = P$ imposes so many constraints that:
- Decomposition automatically produces $VU = I$
- Rank equals trace
- Sum decompositions automatically produce mutually orthogonal projections

::: question
**What's Next?**

We now understand the **internal structure** of projections (via cross-filling). But we still haven't answered our first question from the introduction:

**How do we construct a projection from scratch?**

Given:
- A "floor" (a subspace $W \subseteq \mathbb{R}^n$)
- A "sunlight direction" (another subspace $S \subseteq \mathbb{R}^n$)

How do we write down the matrix $P$ that projects onto $W$ along $S$?

This is the topic of **Lecture 9: Constructing Projections**.
:::

---

## Exercises

::: problem
**Exercise 8.1**: Verify $VU = I$ for the projection $P = \frac{1}{5}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$.

**Exercise 8.2**: Find two projections $P_1, P_2$ in $\mathbb{R}^2$ such that $P_1 + P_2 = I$ and verify that $P_1 P_2 = 0$.

**Exercise 8.3**: Show that if $P$ is a projection, then $\operatorname{trace}(P) = \dim(\operatorname{Col}(P))$.

**Exercise 8.4**: Let $P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ and $Q = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. Verify that $\{P, Q\}$ is a compatible family.

**Exercise 8.5**: (Challenge) Suppose $P_1, P_2, P_3$ are projections with $P_1 + P_2 + P_3 = P$ where $P^2 = P$. Prove that $P_1, P_2, P_3$ are **linearly independent** matrices (as elements of the vector space of $n \times n$ matrices).

**Exercise 8.6**: (Challenge) Let $A$ be a **full-rank square matrix** (i.e., $A$ is $n \times n$ and $\operatorname{rank}(A) = n$). Suppose $A = R_1 + R_2 + \cdots + R_n$ is the decomposition of $A$ into a sum of rank-1 matrices (via cross-filling).

Prove that **$A^{-1}R_i$ is a projection** for each $i = 1, \ldots, n$.

Furthermore, show that $\{A^{-1}R_1, \ldots, A^{-1}R_n\}$ forms a **compatible family** of projections.

*Hint: Multiply both sides of $A = R_1 + \cdots + R_n$ by $A^{-1}$. What projection do you get on the left side? Now apply Theorem 5.1.*
:::
