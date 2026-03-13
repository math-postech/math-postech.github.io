# Lecture 10: Orthogonal Projections

> **Topics**: §3.5–3.7 — Inner Product, Orthogonality, Orthogonal Projections ($P^2=P=P^T$), Geometric vs Algebraic Characterization, Orthogonal Projection Formula, Diagonal Cross-Filling for Orthonormal Bases
> **Date**: Apr 20 – Apr 23, 2026

---

## 1. Inner Product and Orthogonality

In this lecture, we introduce a special class of projections where the **sunlight is perpendicular to the floor**. To make this precise, we first need to define what "perpendicular" means algebraically.

### 1.1 Inner Product (Dot Product)

::: definition
**Inner Product (Dot Product)**

For two vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$:

$$\mathbf{u} \cdot \mathbf{v} := \sum_{i=1}^n u_i v_i = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n$$

Equivalently, treating $\mathbf{u}$ as a row vector and $\mathbf{v}$ as a column vector:

$$\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^T \mathbf{v}$$
:::

::: example
**Example 1.1: Computing Inner Products**

Let $\mathbf{u} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\mathbf{v} = \begin{pmatrix} 4 \\ -1 \\ 2 \end{pmatrix}$.

$$\mathbf{u} \cdot \mathbf{v} = (1)(4) + (2)(-1) + (3)(2) = 4 - 2 + 6 = 8$$

Let $\mathbf{w} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$.

$$\mathbf{u} \cdot \mathbf{w} = (1)(2) + (2)(-1) + (3)(0) = 2 - 2 + 0 = 0$$
:::

::: proposition
**Proposition 1.1: Properties of Inner Product**

For vectors $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ and scalar $c$:

1. **Symmetry**: $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
2. **Linearity**: $(\mathbf{u} + \mathbf{v}) \cdot \mathbf{w} = \mathbf{u} \cdot \mathbf{w} + \mathbf{v} \cdot \mathbf{w}$
3. **Homogeneity**: $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$
4. **Positive definiteness**: $\mathbf{u} \cdot \mathbf{u} \geq 0$, with equality if and only if $\mathbf{u} = \mathbf{0}$

**Proof**: Direct verification from the definition. ∎
:::

### 1.2 Orthogonality (Perpendicularity)

::: definition
**Orthogonal Vectors**

Two vectors $\mathbf{u}$ and $\mathbf{v}$ are **orthogonal** (perpendicular) if:

$$\mathbf{u} \perp \mathbf{v} \quad \iff \quad \mathbf{u} \cdot \mathbf{v} = 0$$

We use the notation $\mathbf{u} \perp \mathbf{v}$ to denote orthogonality.
:::

::: remark
**Geometric Interpretation**

In $\mathbb{R}^2$ and $\mathbb{R}^3$, orthogonality corresponds to perpendicularity in the usual geometric sense. The algebraic condition $\mathbf{u} \cdot \mathbf{v} = 0$ generalizes this to higher dimensions.
:::

::: example
**Example 1.2: Orthogonal Vectors**

The standard basis vectors in $\mathbb{R}^3$ are pairwise orthogonal:

$$\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$

$$\mathbf{e}_1 \cdot \mathbf{e}_2 = 0, \quad \mathbf{e}_1 \cdot \mathbf{e}_3 = 0, \quad \mathbf{e}_2 \cdot \mathbf{e}_3 = 0$$
:::

### 1.3 Orthogonal Subspaces

::: definition
**Orthogonal Subspaces**

Two subspaces $W$ and $S$ of $\mathbb{R}^n$ are **orthogonal** (written $W \perp S$) if every vector in $W$ is orthogonal to every vector in $S$:

$$W \perp S \quad \iff \quad \mathbf{w} \cdot \mathbf{s} = 0 \text{ for all } \mathbf{w} \in W, \mathbf{s} \in S$$
:::

::: example
**Example 1.3: Orthogonal Complement from Lecture 6**

Recall from Lecture 6 (Four Fundamental Subspaces) that for any matrix $A$:

$$\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$$

This means: every vector in the row space of $A$ is orthogonal to every vector in the null space of $A$.
:::

---

## 2. Orthogonal Projections: Geometric Definition

### 2.1 The Vertical Sunlight Model

Recall from Lecture 7 that a general projection $P$ (satisfying $P^2 = P$) can be visualized using the **sunlight-floor model**:
- $\operatorname{Col}(P)$ = the floor
- $\operatorname{Null}(P)$ = direction of sunlight
- $P\mathbf{v}$ = shadow of $\mathbf{v}$ on the floor

For a general projection, the sunlight can shine from **any direction**. An **orthogonal projection** is the special case where:

::: definition
**Orthogonal Projection (Geometric Definition)**

A projection $P$ (satisfying $P^2 = P$) is called an **orthogonal projection** if:

$$\operatorname{Col}(P) \perp \operatorname{Null}(P)$$

**Geometric interpretation**: The sunlight shines **perpendicular to the floor**.
:::

::: example
**Example 2.1: Orthogonal vs Oblique Projections in $\mathbb{R}^2$**

Consider projecting onto the $x$-axis in $\mathbb{R}^2$.

**Orthogonal projection**: $P_{\text{orth}}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ 0 \end{pmatrix}$

- Floor: $x$-axis (vectors of form $\begin{pmatrix} x \\ 0 \end{pmatrix}$)
- Sunlight direction: $y$-axis (vectors of form $\begin{pmatrix} 0 \\ y \end{pmatrix}$)
- These are **perpendicular** ✓

**Oblique projection**: $P_{\text{oblique}}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + y \\ 0 \end{pmatrix}$

- Floor: $x$-axis
- Sunlight direction: direction $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$
- These are **not perpendicular** ✗
:::

### 2.2 Why Orthogonal Projections Matter

::: remark
**Why Orthogonal Projections Are Special**

Among all projections onto a given subspace $W$, the orthogonal projection is the **unique** projection that also satisfies:

$$\operatorname{Null}(P) = W^{\perp} \quad \text{(the orthogonal complement of } W\text{)}$$

This makes orthogonal projections the **natural** choice for:
- **Least squares problems**: Finding the best approximation to a vector in a subspace
- **Decomposing vectors**: Splitting $\mathbf{v} = \mathbf{w} + \mathbf{s}$ where $\mathbf{w} \in W$, $\mathbf{s} \perp W$
- **Orthonormal bases**: Constructing perpendicular coordinate systems
:::

---

## 3. Orthogonal Projections: Algebraic Characterization

### 3.1 The Key Question

We have defined orthogonal projection **geometrically**: $\operatorname{Col}(P) \perp \operatorname{Null}(P)$.

But how do we **check** this algebraically? Given a matrix $P$ with $P^2 = P$, is there a simple matrix equation that tells us whether $P$ is orthogonal?

The answer is beautiful and surprising.

### 3.2 Symmetric Matrices

::: definition
**Symmetric Matrix**

A square matrix $A$ is **symmetric** if it equals its transpose:

$$A = A^T$$

Equivalently: $a_{ij} = a_{ji}$ for all $i, j$.
:::

::: theorem
**Theorem 3.1: Geometric Orthogonality ↔ Algebraic Symmetry**

Let $P$ be a projection matrix ($P^2 = P$). The following are **equivalent**:

1. **Geometric condition**: $\operatorname{Col}(P) \perp \operatorname{Null}(P)$
2. **Algebraic condition**: $P = P^T$ (P is symmetric)

**Proof**:

We prove both directions.

**($2 \implies 1$): Symmetry implies geometric orthogonality**

Assume $P = P^T$. We must show: for any $\mathbf{v} \in \operatorname{Col}(P)$ and $\mathbf{w} \in \operatorname{Null}(P)$, we have $\mathbf{v} \cdot \mathbf{w} = 0$.

Since $\mathbf{v} \in \operatorname{Col}(P)$, by Lecture 7 Proposition 3.1: $P\mathbf{v} = \mathbf{v}$.

Since $\mathbf{w} \in \operatorname{Null}(P)$: $P\mathbf{w} = \mathbf{0}$.

Recall from Lecture 7 Proposition 3.3 (interchanging property):
$$\operatorname{Null}(P) = \operatorname{Col}(I - P)$$

So $\mathbf{w} = (I - P)\mathbf{u}$ for some $\mathbf{u}$.

Now compute:
$$\mathbf{v} \cdot \mathbf{w} = \mathbf{v}^T \mathbf{w} = (P\mathbf{v})^T ((I-P)\mathbf{u}) = \mathbf{v}^T P^T (I-P) \mathbf{u}$$

Using $P^T = P$:
$$= \mathbf{v}^T P(I-P) \mathbf{u} = \mathbf{v}^T (P - P^2) \mathbf{u}$$

Using $P^2 = P$:
$$= \mathbf{v}^T (P - P) \mathbf{u} = \mathbf{v}^T \mathbf{0} = 0$$

Therefore $\operatorname{Col}(P) \perp \operatorname{Null}(P)$. ✓

**($1 \implies 2$): Geometric orthogonality implies symmetry**

Assume $\operatorname{Col}(P) \perp \operatorname{Null}(P)$, i.e., $\mathbf{v}^T \mathbf{w} = 0$ for all $\mathbf{v} \in \operatorname{Col}(P)$ and $\mathbf{w} \in \operatorname{Null}(P)$.

Let $\mathbf{e}_i$ be the $i$-th standard basis vector. Then:
- $P\mathbf{e}_i \in \operatorname{Col}(P)$
- $(I-P)\mathbf{e}_j \in \operatorname{Null}(P)$ (by interchanging property)

By the orthogonality assumption:
$$(P\mathbf{e}_i)^T ((I-P)\mathbf{e}_j) = 0$$

Expanding:
$$\mathbf{e}_i^T P^T (I-P) \mathbf{e}_j = 0$$

The left side equals the $(i,j)$-entry of the matrix $P^T(I-P)$. Since this holds for all $i, j$:
$$P^T(I-P) = 0$$

Therefore:
$$P^T = P^T P$$

Taking transpose of both sides:
$$(P^T)^T = (P^T P)^T$$
$$P = P^T P$$

But we also have $P^T = P^T P$ from above, so:
$$P = P^T \quad \checkmark$$

This completes the proof. ∎
:::

::: success
**Summary: Orthogonal Projection Characterization**

An orthogonal projection is a matrix $P$ satisfying **two conditions**:

1. **Projection property**: $P^2 = P$
2. **Symmetry**: $P = P^T$

These two simple algebraic equations completely capture the geometric idea of "sunlight perpendicular to floor."
:::

---

## 4. Constructing Orthogonal Projections

### 4.1 Orthogonal Projection Formula

Recall from Lecture 9 that we can construct a projection onto $W = \operatorname{Col}(B)$ along $S = \operatorname{Null}(A)$ using:

$$P = B(AB)^{-1}A$$

provided $W \cap S = \{\mathbf{0}\}$ (equivalently: $AB$ is invertible).

For an **orthogonal** projection onto $W$, we want $S = W^{\perp}$.

From **Lecture 6** (Four Fundamental Subspaces), we know:

$$\operatorname{Null}(B^T) \perp \operatorname{Col}(B)$$

Therefore, if $W = \operatorname{Col}(B)$, then $W^{\perp} = \operatorname{Null}(B^T)$.

This means: **$A = B^T$**.

::: proposition
**Proposition 4.1: Orthogonal Projection Formula**

Let $B$ be an $n \times r$ matrix with **full column rank** (rank $r$). The orthogonal projection onto $\operatorname{Col}(B)$ is:

$$P = B(B^T B)^{-1} B^T$$

**Proof**:

By Lecture 6, $\operatorname{Null}(B^T) = (\operatorname{Col}(B))^{\perp}$, so $A = B^T$.

By Lecture 9's construction formula:
$$P = B(AB)^{-1}A = B(B^T B)^{-1} B^T$$

We need to verify that $B^T B$ is invertible.

**Claim**: If $B$ has full column rank, then $B^T B$ is invertible.

**Proof of claim**: Suppose $(B^T B)\mathbf{x} = \mathbf{0}$.

Then:
$$\mathbf{x}^T (B^T B) \mathbf{x} = \mathbf{0}$$
$$(B\mathbf{x})^T (B\mathbf{x}) = \mathbf{0}$$
$$\|B\mathbf{x}\|^2 = 0$$

Therefore $B\mathbf{x} = \mathbf{0}$.

Since $B$ has full column rank (linearly independent columns), $\mathbf{x} = \mathbf{0}$.

By the invertibility criterion: $B^T B$ is invertible. ✓

Finally, verify $P = P^T$:
$$P^T = (B(B^T B)^{-1} B^T)^T = B ((B^T B)^{-1})^T B^T = B (B^T B)^{-1} B^T = P$$

(using $(B^T B)^T = B^T B$ and $((B^T B)^{-1})^T = (B^T B)^{-1}$)

Therefore $P$ is an orthogonal projection. ∎
:::

::: example
**Example 4.1: Orthogonal Projection onto a Plane**

Find the orthogonal projection matrix onto the plane $W = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}\right\}$ (the $xy$-plane in $\mathbb{R}^3$).

**Step 1**: $B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$

**Step 2**: $B^T B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$

**Step 3**: $(B^T B)^{-1} = I_2$

**Step 4**:
$$P = B(B^T B)^{-1} B^T = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix} I_2 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

**Verification**:
- $P^2 = P$ ✓
- $P^T = P$ ✓
- $P\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} x \\ y \\ 0 \end{pmatrix}$ (projects onto $xy$-plane) ✓
:::

---

## 5. Diagonal Cross-Filling for Orthonormal Bases

### 5.1 Motivation: Finding Orthonormal Bases

Given an orthogonal projection $P$, we often want to find an **orthonormal basis** for $\operatorname{Col}(P)$, i.e., basis vectors $\mathbf{v}_1, \ldots, \mathbf{v}_r$ such that:
- $\mathbf{v}_i \cdot \mathbf{v}_j = 0$ for $i \neq j$ (orthogonal)
- $\mathbf{v}_i \cdot \mathbf{v}_i = 1$ for all $i$ (unit length)

One approach is to apply **diagonal cross-filling** to $P$ directly (Lecture 8 method). But there is a more efficient method when $P$ is constructed using the formula $P = B(B^T B)^{-1} B^T$.

### 5.2 Diagonal Cross-Filling of $P$

::: proposition
**Proposition 5.1: Diagonal Cross-Filling Preserves Orthogonality**

Let $P = P^2 = P^T$ be an orthogonal projection. If $P \neq 0$, then $\operatorname{trace}(P) \neq 0$, so $P$ has at least one non-zero diagonal entry.

Let $R$ be a rank-1 matrix obtained by cross-filling $P$ at a diagonal pivot. Then:
1. $R = R^2 = R^T$ (R is an orthogonal projection)
2. $P - R$ is an orthogonal projection
3. $\operatorname{rank}(P) = \operatorname{rank}(R) + \operatorname{rank}(P - R)$

**Proof sketch**:
- Cross-filling at a diagonal pivot preserves symmetry: If $P = P^T$ and we cross-fill at $(k,k)$, then $R = R^T$.
- From Lecture 8: $R = R^2$ and $P - R$ is a projection.
- Combining: $R$ and $P - R$ are both orthogonal projections. ∎
:::

::: remark
**Iterative Decomposition**

By repeatedly applying diagonal cross-filling, we can write:

$$P = R_1 + R_2 + \cdots + R_r$$

where each $R_i$ is a **rank-1 orthogonal projection**.

Each $R_i$ can be written as $R_i = \mathbf{v}_i \mathbf{v}_i^T$ where $\mathbf{v}_i$ is a **unit vector** (since $\operatorname{rank}(R_i) = \operatorname{trace}(R_i) = 1$ and $R_i$ is orthogonal projection).

The vectors $\{\mathbf{v}_1, \ldots, \mathbf{v}_r\}$ form an **orthonormal basis** for $\operatorname{Col}(P)$.
:::

### 5.3 Inner Diagonal Cross-Filling: A Clever Shortcut

Here comes the **clever method**: instead of cross-filling the $n \times n$ matrix $P$, we can cross-fill the **much smaller** $r \times r$ matrix $(B^T B)^{-1}$.

::: theorem
**Theorem 5.1: Inner Diagonal Cross-Filling**

Let $B$ be $n \times r$ with full column rank, and let $P = B(B^T B)^{-1} B^T$ be the orthogonal projection onto $\operatorname{Col}(B)$.

Suppose we decompose $(B^T B)^{-1}$ using diagonal cross-filling:

$$(B^T B)^{-1} = Q_1 + Q_2 + \cdots + Q_r$$

where each $Q_i$ is rank-1 (from cross-filling at diagonal entries).

Define:
$$R_i := B Q_i B^T$$

Then:
1. $P = R_1 + R_2 + \cdots + R_r$
2. Each $R_i$ is a **rank-1 orthogonal projection**
3. $R_i R_j = 0$ for $i \neq j$ (compatible family)

**Proof**:

**(1)**:
$$\sum_{i=1}^r R_i = \sum_{i=1}^r B Q_i B^T = B \left(\sum_{i=1}^r Q_i\right) B^T = B(B^T B)^{-1} B^T = P$$

**(2)**: From Lecture 8, since $P = \sum R_i$ is a projection and $\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$, each $R_i$ is automatically a projection.

For symmetry: $(B Q_i B^T)^T = B Q_i^T B^T$. Since cross-filling at diagonal preserves symmetry: $Q_i^T = Q_i$. Therefore $R_i^T = R_i$.

For rank: Each $Q_i$ has rank 1 (by cross-filling). Therefore $R_i = B Q_i B^T$ has rank at most 1. Since $R_i \neq 0$ (from non-degenerate cross-filling), $\operatorname{rank}(R_i) = 1$.

**(3)**: Compatible family property follows from Lecture 8. ∎
:::

::: success
**The Beauty of Inner Diagonal Cross-Filling**

**Standard method** (Lecture 8):
- Cross-fill $P$ (an $n \times n$ matrix)
- Requires $n$ rank-1 decompositions
- Computational cost: $O(n^2)$ per step

**Inner diagonal cross-filling**:
- Cross-fill $(B^T B)^{-1}$ (an $r \times r$ matrix where $r = \dim(\operatorname{Col}(B))$)
- Requires only $r$ rank-1 decompositions (often $r \ll n$)
- Computational cost: $O(r^2)$ per step
- **Much more efficient when $r \ll n$!**

Moreover: The decomposition $P = \sum B Q_i B^T$ directly gives us the orthonormal basis vectors from the factorization of each $B Q_i B^T$.
:::

::: example
**Example 5.1: Inner Diagonal Cross-Filling**

Let $W = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 1 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 2 \\ 2 \end{pmatrix}\right\}$.

**Step 1**:
$$B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 2 \end{pmatrix}$$

**Step 2**: Compute $B^T B$:
$$B^T B = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 5 \\ 5 & 9 \end{pmatrix}$$

**Step 3**: Compute $(B^T B)^{-1}$:
$$\det(B^T B) = 4 \cdot 9 - 5 \cdot 5 = 36 - 25 = 11$$
$$(B^T B)^{-1} = \frac{1}{11} \begin{pmatrix} 9 & -5 \\ -5 & 4 \end{pmatrix}$$

**Step 4**: Diagonal cross-filling of $(B^T B)^{-1}$.

Cross-fill at position (1,1) with pivot 9. Use the **multiplication table trick**: to complete a rank-1 matrix from pivot (1,1), the (2,2) entry must satisfy:

$$(2,2) = \frac{(1,2) \times (2,1)}{(1,1)} = \frac{(-5) \times (-5)}{9} = \frac{25}{9}$$

Therefore:
$$Q_1 = \frac{1}{11}\begin{pmatrix} 9 & -5 \\ -5 & 25/9 \end{pmatrix}$$

**Step 5**: Compute $Q_2 = (B^T B)^{-1} - Q_1$:

$$(B^T B)^{-1} - Q_1 = \frac{1}{11}\begin{pmatrix} 9 & -5 \\ -5 & 4 \end{pmatrix} - \frac{1}{11}\begin{pmatrix} 9 & -5 \\ -5 & 25/9 \end{pmatrix} = \frac{1}{11}\begin{pmatrix} 0 & 0 \\ 0 & 4 - 25/9 \end{pmatrix}$$

$$= \frac{1}{11}\begin{pmatrix} 0 & 0 \\ 0 & 11/9 \end{pmatrix} = \frac{1}{99}\begin{pmatrix} 0 & 0 \\ 0 & 11 \end{pmatrix}$$

**Step 6**: Compute $R_1 = BQ_1B^T$ and $R_2 = BQ_2B^T$.

The matrix multiplications $BQ_1B^T$ and $BQ_2B^T$ give $4 \times 4$ matrices. By Theorem 5.1:
- Each $R_i$ is automatically a rank-1 orthogonal projection
- $R_1 + R_2 = P$ (the orthogonal projection onto $\operatorname{Col}(B)$)
- $R_1 R_2 = 0$ (compatible family)

**Key observation**: We decomposed a $4 \times 4$ projection into two rank-1 orthogonal projections by only cross-filling a $2 \times 2$ matrix! The computation of $Q_1, Q_2$ required $O(2^2) = O(4)$ operations, compared to $O(4^2) = O(16)$ if we cross-filled $P$ directly.
:::

---

## 6. Summary

::: success
**Key Concepts from This Lecture**

1. **Inner Product**: $\mathbf{u} \cdot \mathbf{v} = \sum u_i v_i = \mathbf{u}^T \mathbf{v}$

2. **Orthogonality**: $\mathbf{u} \perp \mathbf{v} \iff \mathbf{u} \cdot \mathbf{v} = 0$

3. **Orthogonal Projection** (two equivalent definitions):
   - **Geometric**: $P^2 = P$ with $\operatorname{Col}(P) \perp \operatorname{Null}(P)$
   - **Algebraic**: $P^2 = P$ and $P = P^T$

4. **Bridge Theorem**: Geometric orthogonality ↔ Algebraic symmetry

5. **Orthogonal Projection Formula**: $P = B(B^T B)^{-1} B^T$

6. **Diagonal Cross-Filling**: Decompose $P = \sum R_i$ into rank-1 orthogonal projections

7. **Inner Diagonal Cross-Filling**: Cross-fill $(B^T B)^{-1}$ instead of $P$ for efficiency
   - Complexity: $O(r^2)$ instead of $O(n^2)$ where $r = \dim(\operatorname{Col}(B))$
   - Automatic: Each $R_i = B Q_i B^T$ is a rank-1 orthogonal projection
:::

### Looking Ahead

In the next lectures (Ch4: Determinants), we will develop tools to:
- Compute eigenvalues (which generalize the idea of "characteristic directions")
- Understand the Cayley-Hamilton theorem
- Spectral decomposition using Lagrange interpolation

The orthogonal projections we studied today will reappear as **spectral projections** when we study diagonalization of symmetric matrices.

---

## Exercises

::: problem
**Exercise 1: Checking Orthogonality**

Determine which pairs of vectors are orthogonal:

(a) $\mathbf{u} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$, $\mathbf{v} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$

(b) $\mathbf{u} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$, $\mathbf{v} = \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$

(c) $\mathbf{u} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $\mathbf{v} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$
:::

::: problem
**Exercise 2: Verifying Orthogonal Projections**

Which of the following are orthogonal projections? (Check both $P^2 = P$ and $P = P^T$)

(a) $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$

(b) $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.5 & 0.5 \end{pmatrix}$

(c) $P = \begin{pmatrix} 0.6 & 0.8 \\ 0.8 & 0.4 \end{pmatrix}$

(d) $P = \begin{pmatrix} 0.6 & 0.8 \\ -0.8 & 0.6 \end{pmatrix}$
:::

::: problem
**Exercise 3: Orthogonal Projection Formula**

Find the orthogonal projection matrix onto:

(a) The line $W = \operatorname{span}\left\{\begin{pmatrix} 3 \\ 4 \end{pmatrix}\right\}$ in $\mathbb{R}^2$

(b) The plane $W = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\right\}$ in $\mathbb{R}^3$

Verify your answer satisfies $P^2 = P$ and $P^T = P$.
:::

::: problem
**Exercise 4: Geometric vs Algebraic**

Let $P = \frac{1}{2}\begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

(a) Verify $P$ is an orthogonal projection (check $P^2 = P$ and $P = P^T$)

(b) Find bases for $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$

(c) Verify geometrically that $\operatorname{Col}(P) \perp \operatorname{Null}(P)$ by computing inner products of basis vectors
:::

::: problem
**Exercise 5: Inner Diagonal Cross-Filling**

Let $B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$ (orthogonal projection onto $xy$-plane).

(a) Compute $B^T B$ and $(B^T B)^{-1}$

(b) Apply diagonal cross-filling to $(B^T B)^{-1}$ to write it as $Q_1 + Q_2$

(c) Compute $R_1 = B Q_1 B^T$ and $R_2 = B Q_2 B^T$

(d) Verify $R_1 + R_2 = P$ where $P = B(B^T B)^{-1}B^T$

(e) Verify each $R_i$ is a rank-1 orthogonal projection
:::

::: problem
**Exercise 6: Least Squares Application**

Consider the inconsistent system $A\mathbf{x} = \mathbf{b}$ where:

$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ 8 \\ 8 \end{pmatrix}$$

(a) Find the orthogonal projection $P$ onto $\operatorname{Col}(A)$ using $P = A(A^T A)^{-1}A^T$

(b) The least squares solution minimizes $\|\mathbf{b} - A\mathbf{x}\|$. It satisfies $A^T A \mathbf{x} = A^T \mathbf{b}$. Find it.

(c) Compute $P\mathbf{b}$ and verify it equals $A\mathbf{x}$ where $\mathbf{x}$ is the least squares solution
:::
