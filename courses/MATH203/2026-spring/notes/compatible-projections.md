# Lecture 9: Compatible Projections and Decomposition Methods

> **Topics**: §3.3–3.4 — Compatible Families, Projection Decomposition Theorem, Cross-Filling and Inner Cross-Filling Methods
> **Date**: Apr 6 – Apr 9, 2026

---

## Introduction

In Lecture 8, we discovered that cross-filling a projection $P = R_1 + \cdots + R_r$ produces rank-1 pieces that are:
- Each a projection ($R_i^2 = R_i$)
- Mutually annihilating ($R_i R_j = 0$ for $i \neq j$)

These two properties together form a remarkable structure that deserves its own name.

---

## 1. Compatible Families of Projections

### 1.1 Definition

::: definition
**Compatible Family of Projections**

A collection of projections $\{P_1, P_2, \ldots, P_k\}$ (each satisfying $P_i^2 = P_i$) is called a **compatible family** if:

$$P_i P_j = 0 \quad \text{for all } i \neq j$$
:::

::: example
**Example 1.1: Projections onto Coordinate Axes**

In $\mathbb{R}^3$:

$$P_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad P_2 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad P_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

- Each $P_i^2 = P_i$ ✓
- $P_1 + P_2 + P_3 = I_3$ ✓
- $P_i P_j = 0$ for $i \neq j$ ✓

This is a compatible family.
:::

::: example
**Example 1.2: From Lecture 8's Discovery**

The rank-1 pieces from cross-filling any projection form a compatible family. For instance, the cross-filling of $P = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ produced:

$$R_1 = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad R_2 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

with $R_1 R_2 = 0$, $R_1 + R_2 = P$. So $\{R_1, R_2\}$ is a compatible family.
:::

### 1.2 Basic Properties

::: proposition
**Theorem 1.1 (Properties of Compatible Families)**

Let $\{P_1, \ldots, P_k\}$ be a compatible family of projections.

1. **Subsums are projections**: For any subset $I \subseteq \{1, \ldots, k\}$, the sum $\sum_{i \in I} P_i$ is a projection.

2. **Vector decompositions are linearly independent**: For any vector $\mathbf{v}$, the nonzero vectors among $\{P_1\mathbf{v}, \ldots, P_k\mathbf{v}\}$ are linearly independent.
:::

**Proof of (1)**:

Let $Q = \sum_{i \in I} P_i$.

$$Q^2 = \left(\sum_{i \in I} P_i\right)\left(\sum_{j \in I} P_j\right) = \sum_{i,j \in I} P_i P_j$$

Since $P_i P_j = 0$ for $i \neq j$ and $P_i^2 = P_i$:

$$Q^2 = \sum_{i \in I} P_i^2 = \sum_{i \in I} P_i = Q \quad ✓$$

**Proof of (2)**:

Suppose $c_1 P_1\mathbf{v} + \cdots + c_k P_k\mathbf{v} = \mathbf{0}$.

Left-multiply by $P_j$:

$$c_1 P_j P_1\mathbf{v} + \cdots + c_j P_j^2\mathbf{v} + \cdots + c_k P_j P_k\mathbf{v} = \mathbf{0}$$

Since $P_j P_i = 0$ for $i \neq j$: $c_j P_j\mathbf{v} = \mathbf{0}$.

If $P_j\mathbf{v} \neq \mathbf{0}$, then $c_j = 0$. ∎

### 1.3 Geometric Interpretation

::: remark
**Direct Sum Decomposition**

If $\{P_1, \ldots, P_k\}$ is a compatible family with $P_1 + \cdots + P_k = P$, then:

$$\operatorname{Col}(P) = \operatorname{Col}(P_1) \oplus \operatorname{Col}(P_2) \oplus \cdots \oplus \operatorname{Col}(P_k)$$

Every vector $P\mathbf{v}$ has a **unique** decomposition:

$$P\mathbf{v} = P_1\mathbf{v} + P_2\mathbf{v} + \cdots + P_k\mathbf{v}$$

into components from each subspace. The condition $P_i P_j = 0$ ensures these subspaces are "independent" — the floor of $P_i$ lies entirely in the sunlight direction of $P_j$.
:::

---

## 2. The Question: Is Compatibility Easy?

Compatible families seem like a very special structure. We introduced two conditions:
- Each $P_i$ is a projection
- The mutual annihilation $P_i P_j = 0$

::: question
**How Easy Is Compatibility?**

Suppose we write a projection as a sum of matrices:

$$P = R_1 + R_2 + \cdots + R_k$$

We don't know whether the $R_i$ are projections, and we don't know whether $R_i R_j = 0$.

Under what conditions can we **guarantee** that the $R_i$ form a compatible family?
:::

The answer is stunning. We don't need to check the definition at all — a single **rank condition** suffices.

---

## 3. The Projection Decomposition Theorem

::: proposition
**Theorem 3.1 (Projection Decomposition — The Climax)**

Let $P$ be a projection ($P^2 = P$). Suppose:

$$P = R_1 + R_2 + \cdots + R_k$$

where each $R_i$ is a matrix satisfying:

$$\sum_{i=1}^k \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$$

Then **automatically**:
1. Each $R_i$ is a projection ($R_i^2 = R_i$)
2. $R_i R_j = 0$ for all $i \neq j$ (compatible family)
3. $\sum_{i=1}^k \operatorname{rank}(R_i) = \operatorname{rank}(P)$ (equality holds)
:::

::: attention
**Why Is This Remarkable?**

We **never assumed** the $R_i$ are projections. The projection property and mutual annihilation **emerge automatically** from the rank condition alone!

To check compatibility, we don't need to verify the definition. We only need:
$$\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$$
:::

### 3.1 Proof

The proof uses the "$R_0$ trick" to reduce to $I = \sum R_i$, then applies the block-diagonal structure forced by Corollary 4.2 from Lecture 8.

**Step 1: Introduce $R_0$.**

Let $R_0 = I - P$. Since $P$ is a projection, $R_0$ is also a projection:

$$(I - P)^2 = I - 2P + P^2 = I - P = R_0$$

Now:

$$I_n = R_0 + R_1 + \cdots + R_k$$

**Step 2: Count total rank.**

By rank = trace (Lecture 8, Theorem 3.1): $\operatorname{rank}(R_0) = \operatorname{trace}(R_0) = n - \operatorname{rank}(P)$.

$$\sum_{i=0}^k \operatorname{rank}(R_i) = \operatorname{rank}(R_0) + \sum_{i=1}^k \operatorname{rank}(R_i) \leq (n - \operatorname{rank}(P)) + \operatorname{rank}(P) = n$$

**Step 3: Assemble into block matrices.**

For each $i = 0, 1, \ldots, k$, decompose $R_i = U_i V_i$ where $U_i$ is $n \times r_i$, $V_i$ is $r_i \times n$, and $r_i = \operatorname{rank}(R_i)$.

Collect all pieces:

$$U = \begin{pmatrix} U_0 & U_1 & \cdots & U_k \end{pmatrix}, \quad V = \begin{pmatrix} V_0 \\ V_1 \\ \vdots \\ V_k \end{pmatrix}$$

Then:

$$UV = \sum_{i=0}^k U_i V_i = \sum_{i=0}^k R_i = I_n$$

The matrix $U$ is $n \times s$ and $V$ is $s \times n$ where $s = \sum_{i=0}^k r_i \leq n$.

**Step 4: Apply the forces-square lemma.**

Since $UV = I_n$ and $s \leq n$, by Corollary 4.2 (Lecture 8): $s = n$ and $VU = I_n$.

**Step 5: Read off the block structure.**

$$VU = \begin{pmatrix} V_0 U_0 & V_0 U_1 & \cdots & V_0 U_k \\ V_1 U_0 & V_1 U_1 & \cdots & V_1 U_k \\ \vdots & \vdots & \ddots & \vdots \\ V_k U_0 & V_k U_1 & \cdots & V_k U_k \end{pmatrix} = I_n$$

The $I_n$ on the right is block-diagonal with blocks $I_{r_0}, I_{r_1}, \ldots, I_{r_k}$. Therefore:

$$V_i U_i = I_{r_i} \quad \text{and} \quad V_i U_j = 0 \text{ for } i \neq j$$

**Step 6: Each $R_i$ is a projection.**

$$R_i^2 = (U_i V_i)(U_i V_i) = U_i (V_i U_i) V_i = U_i I_{r_i} V_i = U_i V_i = R_i \quad ✓$$

**Step 7: Mutual annihilation.**

For $i \neq j$:

$$R_i R_j = (U_i V_i)(U_j V_j) = U_i (V_i U_j) V_j = U_i \cdot 0 \cdot V_j = 0 \quad ✓$$

Done! ∎

---

## 4. Applications

The projection decomposition theorem is a powerful tool. We now explore three decomposition methods that automatically produce compatible families.

### 4.1 Cross-Filling Projections (Revisited)

Lecture 8's discovery is now a **special case** of the projection decomposition theorem.

::: proposition
**Corollary 4.1 (Cross-Filling Produces Compatible Projections)**

Let $P$ be a projection. Cross-fill $P = R_1 + \cdots + R_r$ into rank-1 pieces.

Then $\{R_1, \ldots, R_r\}$ is a compatible family of rank-1 projections.
:::

**Proof**: By construction, each $R_i$ has rank 1, and $\sum \operatorname{rank}(R_i) = r = \operatorname{rank}(P)$. Apply Theorem 3.1. ∎

::: remark
In Lecture 8, we proved this directly using $VU = I$. The projection decomposition theorem provides a **second, more powerful proof** that generalizes far beyond cross-filling.
:::

### 4.2 Inner Cross-Filling

Here is a powerful technique: instead of decomposing $P$ directly, we decompose a **factor** inside $P$.

::: proposition
**Theorem 4.2 (Inner Cross-Filling)**

Let $P$ be a projection. Suppose $P = M_1 M_2 \cdots M_k$ where $\operatorname{rank}(P) = \operatorname{rank}(M_i)$ for some factor $M_i$.

Cross-fill $M_i = Q_1 + Q_2 + \cdots + Q_s$ into rank-1 pieces. Define:

$$S_j = M_1 \cdots M_{i-1} \, Q_j \, M_{i+1} \cdots M_k$$

Then $P = S_1 + S_2 + \cdots + S_s$ and $\{S_1, \ldots, S_s\}$ is a compatible family of projections.
:::

**Proof**:

Clearly $P = \sum_j S_j$ (distribute the product over the sum).

For rank:

$$\operatorname{rank}(S_j) \leq \operatorname{rank}(Q_j) = 1$$

$$\sum_j \operatorname{rank}(S_j) \leq \sum_j \operatorname{rank}(Q_j) = \operatorname{rank}(M_i) = \operatorname{rank}(P)$$

By Theorem 3.1: each $S_j$ is a projection and $S_j S_l = 0$ for $j \neq l$. ∎

::: remark
**Why "Inner"?**

We decompose an **inner factor** $M_i$ rather than the whole matrix $P$. The outer factors $M_1, \ldots, M_{i-1}$ and $M_{i+1}, \ldots, M_k$ are carried along for the ride. The rank condition $\operatorname{rank}(P) = \operatorname{rank}(M_i)$ ensures that the outer factors don't "lose" any rank.
:::

An important special case:

::: proposition
**Corollary 4.3 (Inner Cross-Filling for $P = UXV$)**

Let $P$ be a projection of the form $P = UXV$ where $\operatorname{rank}(P) = \operatorname{rank}(X)$.

Cross-fill $X = Q_1 + \cdots + Q_s$. Then:

$$P = UQ_1V + UQ_2V + \cdots + UQ_sV$$

is a decomposition into a compatible family of projections.
:::

::: example
**Example 4.1: Inner Cross-Filling**

Let $P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ (projection onto the $xy$-plane).

Write $P = UIV$ where $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$, $X = I_2$, $V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.

Cross-fill $X = I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = Q_1 + Q_2$.

Then:

$$UQ_1V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad UQ_2V = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Each is a rank-1 projection, and they form a compatible family ✓.
:::

### 4.3 Diagonal Cross-Filling for Orthogonal Projections

When $P$ is an **orthogonal** projection ($P^2 = P = P^T$), we can preserve the symmetry property in the decomposition.

::: proposition
**Theorem 4.4 (Diagonal Cross-Filling Preserves Orthogonality)**

Let $P$ be an orthogonal projection ($P^2 = P = P^T$) with $P \neq 0$.

1. $P$ has at least one nonzero diagonal entry (since $\operatorname{trace}(P) = \operatorname{rank}(P) \geq 1$).

2. Cross-filling $P$ at a **diagonal** pivot $(k,k)$ produces $R = R^T$ (symmetric rank-1 matrix).

3. Therefore $R$ is a rank-1 **orthogonal** projection, and $P - R$ is also an orthogonal projection.
:::

**Proof of (2)**:

Let $p_{kk} \neq 0$ be the diagonal pivot. The rank-1 piece from cross-filling at $(k,k)$ is:

$$R = \frac{1}{p_{kk}} \, (\text{column } k \text{ of } P)(\text{row } k \text{ of } P)$$

Since $P = P^T$: column $k$ of $P$ equals (row $k$ of $P)^T$. If we write column $k$ as $\mathbf{p}$, then row $k$ is $\mathbf{p}^T$:

$$R = \frac{1}{p_{kk}} \mathbf{p}\mathbf{p}^T$$

This is symmetric: $R^T = \frac{1}{p_{kk}} \mathbf{p}\mathbf{p}^T = R$. ✓

**Proof of (3)**:

$\operatorname{rank}(R) = 1$ and $\operatorname{rank}(P - R) = \operatorname{rank}(P) - 1$ (since the cross-filling reduces rank by exactly 1). So $\operatorname{rank}(R) + \operatorname{rank}(P - R) = \operatorname{rank}(P)$.

By Theorem 3.1: both $R$ and $P - R$ are projections. Since both are symmetric ($R^T = R$ and $(P-R)^T = P^T - R^T = P - R$), both are **orthogonal** projections. ∎

::: remark
**Iterating Diagonal Cross-Filling**

By repeating this process, any orthogonal projection $P$ decomposes as:

$$P = R_1 + R_2 + \cdots + R_r$$

where each $R_i$ is a **rank-1 orthogonal projection** of the form $R_i = \frac{1}{\|\mathbf{v}_i\|^2}\mathbf{v}_i\mathbf{v}_i^T$.

The vectors $\mathbf{v}_1, \ldots, \mathbf{v}_r$ form an **orthogonal basis** for $\operatorname{Col}(P)$.

This is a key step toward **spectral decomposition** (Chapter 5).
:::

### 4.4 Preview: Inner Diagonal Cross-Filling

When an orthogonal projection is given in the form $P = B(B^TB)^{-1}B^T$ (which we will derive in Lecture 10), there is a much more efficient variant:

Instead of diagonally cross-filling the $n \times n$ matrix $P$, we can diagonally cross-fill the **much smaller** $r \times r$ matrix $(B^TB)^{-1}$:

$$(B^TB)^{-1} = Q_1 + Q_2 + \cdots + Q_r$$

Since $(B^TB)^{-1}$ is symmetric, diagonal cross-filling produces symmetric $Q_j$. Then:

$$P = BQ_1B^T + BQ_2B^T + \cdots + BQ_rB^T$$

Each $BQ_jB^T$ is symmetric (since $Q_j$ is symmetric) and a projection (by the inner cross-filling theorem). So each is a **rank-1 orthogonal projection**.

::: success
**Efficiency Gain**

Diagonal cross-filling of $P$ works with an $n \times n$ matrix.

Inner diagonal cross-filling works with an $r \times r$ matrix (where $r = \operatorname{rank}(P)$).

When $r \ll n$, this is **much more efficient**.
:::

We will see the full details and worked examples in **Lecture 10**, after we derive the formula $P = B(B^TB)^{-1}B^T$.

---

## 5. Summary and Looking Ahead

::: success
**Key Results from This Lecture**

1. **Compatible Families** (§1): Projections $\{P_1, \ldots, P_k\}$ with $P_iP_j = 0$ — subsums are projections, vector decompositions are unique and linearly independent.

2. **Projection Decomposition Theorem** (§3): If $P = \sum R_i$ with $\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$, then each $R_i$ is a projection and $R_iR_j = 0$ — **automatically**.

3. **Cross-Filling** (§4.1): Special case of the theorem — cross-filling projections always produces compatible families.

4. **Inner Cross-Filling** (§4.2): Decompose a factor inside $P = M_1 M_i M_k$ — the outer factors carry along. Works when $\operatorname{rank}(P) = \operatorname{rank}(M_i)$.

5. **Inner Diagonal Cross-Filling** (§4.3): For orthogonal projections $P = UMU^T$, diagonally cross-fill the small matrix $M$ to produce orthogonal sub-projections. Key case: $M = (B^TB)^{-1}$, which connects directly to the orthogonal projection formula.
:::

### Looking Ahead to Lecture 10

We have powerful tools for **decomposing** projections. But we still haven't answered a fundamental question:

**Given a desired floor $W$ and sunlight direction $S$, how do we construct the projection $P$?**

In Lecture 10, we will:
- Prove that a projection is **uniquely determined** by its column and null spaces
- Derive the **construction formula**: $P = B(AB)^{-1}A$
- Specialize to the **orthogonal projection formula**: $P = B(B^TB)^{-1}B^T$
- Apply inner diagonal cross-filling to the orthogonal projection formula

---

## Exercises

::: problem
**Exercise 1: Verifying Compatibility**

Let $P_1 = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ and $P_2 = \frac{1}{2}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$.

(a) Verify that $P_1$ and $P_2$ are both projections.

(b) Verify that $P_1 P_2 = 0$.

(c) Compute $P_1 + P_2$. What do you get?

(d) Are $P_1$ and $P_2$ orthogonal projections? (Check $P_i = P_i^T$.)
:::

::: problem
**Exercise 2: Applying the Projection Decomposition Theorem**

Let $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and suppose:

$$P = \begin{pmatrix} 1/2 & 0 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 1/2 & 0 \\ 0 & 0 \end{pmatrix}$$

(a) Check: does $\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$?

(b) According to Theorem 3.1, should each summand be a projection? Verify directly.

Now consider:

$$P = \begin{pmatrix} 1/3 & 0 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 2/3 & 0 \\ 0 & 0 \end{pmatrix}$$

(c) Check the rank condition again. What does Theorem 3.1 tell you?
:::

::: problem
**Exercise 3: Inner Cross-Filling**

Let $P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

Write $P = U I_2 V$ where $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$ and $V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.

(a) Verify $\operatorname{rank}(P) = \operatorname{rank}(I_2) = 2$.

(b) Cross-fill $I_2$ into two rank-1 pieces. Compute $UQ_1V$ and $UQ_2V$.

(c) Verify that each piece is a projection and they are compatible.
:::

::: problem
**Exercise 4: Diagonal Cross-Filling**

Let $P = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$.

(a) Verify $P$ is an orthogonal projection ($P^2 = P$ and $P = P^T$).

(b) Cross-fill at the diagonal pivot $(1,1)$. Call the result $R_1$.

(c) Verify $R_1 = R_1^T$ (symmetry preserved).

(d) Verify $R_1^2 = R_1$ and $(P - R_1)^2 = P - R_1$.
:::

::: problem
**Exercise 5** (Challenge)

Let $P$ be a projection and $P = R_1 + R_2 + R_3$ where each $R_i$ has rank 1 and $\operatorname{rank}(P) = 3$.

(a) Prove that $R_1, R_2, R_3$ are **linearly independent** as matrices (elements of the vector space of $n \times n$ matrices).

(b) Let $A$ be an $n \times n$ invertible matrix with cross-filling decomposition $A = R_1 + \cdots + R_n$. Prove that $\{A^{-1}R_1, \ldots, A^{-1}R_n\}$ forms a compatible family of projections.

*Hint for (b): What projection do you get from $A^{-1} \cdot A = I$?*
:::
