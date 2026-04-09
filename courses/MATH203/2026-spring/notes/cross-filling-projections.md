# Lecture 8: Cross-Filling Projections

> **Topics**: §3.2–3.3 — Cross-Filling Decomposition of Projections, VU = I Property, rank(P) = trace(P), Rank-1 Projection Characterization, Full-Rank Invertibility
> **Date**: Apr 6 – Apr 9, 2026

---

## Introduction

In Lecture 7, we introduced projections through the sunlight-floor model and proved basic properties from $P^2 = P$. We also characterized orthogonal projections by the symmetry condition $P = P^T$.

Now we explore the **internal structure** of projections.

::: question
**What Makes Projections Special?**

Any matrix can be cross-filled: $A = R_1 + R_2 + \cdots + R_r$ (sum of rank-1 pieces). For a general matrix, the pieces $R_i$ are just arbitrary rank-1 matrices.

What happens when we cross-fill a **projection**?
:::

---

## 1. The Remarkable Discovery

### 1.1 Review: Two Forms of Cross-Filling

Recall from Lecture 3 that cross-filling decomposes any matrix into:

**Sum form**: $A = R_1 + R_2 + \cdots + R_r$ where each $R_i$ has rank 1 and $r = \operatorname{rank}(A)$.

**Product form**: $A = UV$ where $U$ is $m \times r$ (columns of $U$ are the column parts of each $R_i$), $V$ is $r \times n$ (rows of $V$ are the row parts of each $R_i$).

The two forms are related: $R_i = \mathbf{u}_i \mathbf{v}_i^T$ where $\mathbf{u}_i$ is column $i$ of $U$ and $\mathbf{v}_i^T$ is row $i$ of $V$.

### 1.2 Cross-Filling a General Matrix

::: example
**Example 1.1: A Non-Projection Matrix**

$$A = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$$

This has rank 1. Cross-filling gives:

$$A = \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix} = UV$$

So $U = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ and $V = \begin{pmatrix} 1 & 2 \end{pmatrix}$.

Compute $VU$:

$$VU = \begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = 4$$

Note: $VU = 4 \neq 1 = I_1$. Also, $A^2 = \begin{pmatrix} 8 & 16 \\ 4 & 8 \end{pmatrix} \neq A$.

For general matrices, **$VU$ is just some number or matrix — nothing special**.
:::

### 1.3 Cross-Filling a Projection

Now let's try the same process with **projection matrices**.

::: example
**Example 1.2: A Rank-1 Projection**

$$P = \frac{1}{5}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$$

Verify: $P^2 = \frac{1}{25}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = \frac{1}{25}\begin{pmatrix} 5 & 10 \\ 10 & 20 \end{pmatrix} = \frac{1}{5}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} = P$ ✓

Cross-filling at pivot $(1,1)$ with value $\frac{1}{5}$:

$$P = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \cdot \frac{1}{5} \cdot \begin{pmatrix} 1 & 2 \end{pmatrix} = UV$$

So $U = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $V = \frac{1}{5}\begin{pmatrix} 1 & 2 \end{pmatrix}$.

Compute $VU$:

$$VU = \frac{1}{5}\begin{pmatrix} 1 & 2 \end{pmatrix}\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \frac{1}{5}(1 + 4) = 1 = I_1$$

**Remarkable!** For this projection, $VU = I$.

Also notice: $\operatorname{rank}(P) = 1$ and $\operatorname{trace}(P) = \frac{1}{5}(1 + 4) = 1$. So $\operatorname{rank}(P) = \operatorname{trace}(P)$.
:::

Is this just a coincidence? Let's try a higher-rank example.

::: example
**Example 1.3: A Rank-2 Projection**

$$P = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Verify: $P^2 = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix} = P$ ✓

This has $\operatorname{rank}(P) = 2$. Cross-fill at pivot $(2,2)$ with value $1$:

$$R_1 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}\begin{pmatrix} -1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

Remainder: $P - R_1 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$. Cross-fill at pivot $(3,3)$:

$$R_2 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\begin{pmatrix} -1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

**Check: Are the rank-1 pieces projections?**

$$R_1^2 = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} = R_1 \quad ✓$$

$$R_2^2 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix} = R_2 \quad ✓$$

**Check: Are they mutually annihilating?**

$$R_1 R_2 = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \quad ✓$$

**Check: Product form and $VU$.**

$$U = \begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad V = \begin{pmatrix} -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

$$VU = \begin{pmatrix} -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2 \quad ✓$$

Again: $VU = I$ and every summand is a projection!

Also: $\operatorname{trace}(P) = 0 + 1 + 1 = 2 = \operatorname{rank}(P)$.
:::

### 1.4 The Pattern

::: attention
**The Discovery**

When we cross-fill a projection $P = R_1 + R_2 + \cdots + R_r$:

1. **Every rank-1 piece is automatically a projection**: $R_i^2 = R_i$ for all $i$
2. **All pieces are mutually annihilating**: $R_i R_j = 0$ for $i \neq j$
3. **Rank equals trace**: $\operatorname{rank}(P) = \operatorname{trace}(P)$

None of this happens for general matrices. The equation $P^2 = P$ forces extraordinary structure.
:::

Why does this happen? The key is hidden in the product form.

---

## 2. The Proof Mechanism: $P = UV$ Implies $VU = I$

### 2.1 Statement

::: proposition
**Theorem 2.1 (VU = I Automatic)**

Let $P$ be a projection ($P^2 = P$). Suppose $P = UV$ where:
- $U$ is $n \times r$ with full column rank (rank $r$)
- $V$ is $r \times n$ with full row rank (rank $r$)

Then $VU = I_r$ **automatically**.
:::

::: remark
**Role of This Theorem**

This is **not** the discovery — it is the **proof mechanism** that explains the discovery. We need $VU = I$ as a tool to prove that cross-filling projections produces rank-1 projections.
:::

### 2.2 Proof

The proof uses only $P^2 = P$ and the cancellation properties from Lecture 4.

**Step 1**: Expand $P^2 = P$ using $P = UV$:

$$UVUV = UV$$

**Step 2**: Left-cancel $U$.

Since $U$ has full column rank, its columns are linearly independent. Therefore $U$ is left-cancelable:

$$UVUV = UV \quad \Longrightarrow \quad VUV = V$$

**Step 3**: Right-cancel $V$.

Since $V$ has full row rank, its rows are linearly independent. Therefore $V$ is right-cancelable:

$$VUV = V \quad \Longrightarrow \quad VU = I_r$$

Done! ∎

### 2.3 Completing the Proof of the Discovery

Now we can explain **why** cross-filling a projection produces rank-1 projections.

Write $P = UV$ with $VU = I_r$. The rank-1 pieces from cross-filling are:

$$R_i = \mathbf{u}_i \mathbf{v}_i^T$$

where $\mathbf{u}_i$ is column $i$ of $U$ and $\mathbf{v}_i^T$ is row $i$ of $V$.

The condition $VU = I_r$ means:

$$\mathbf{v}_i^T \mathbf{u}_j = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}$$

This single fact proves everything:

**Each $R_i$ is a projection**:

$$R_i^2 = (\mathbf{u}_i \mathbf{v}_i^T)(\mathbf{u}_i \mathbf{v}_i^T) = \mathbf{u}_i (\mathbf{v}_i^T \mathbf{u}_i) \mathbf{v}_i^T = \mathbf{u}_i \cdot 1 \cdot \mathbf{v}_i^T = R_i \quad ✓$$

**Pieces are mutually annihilating**:

For $i \neq j$:

$$R_i R_j = (\mathbf{u}_i \mathbf{v}_i^T)(\mathbf{u}_j \mathbf{v}_j^T) = \mathbf{u}_i (\mathbf{v}_i^T \mathbf{u}_j) \mathbf{v}_j^T = \mathbf{u}_i \cdot 0 \cdot \mathbf{v}_j^T = 0 \quad ✓$$

::: remark
**The Trace Connection**

From $\mathbf{v}_i^T \mathbf{u}_i = 1$, we also get:

$$\operatorname{trace}(R_i) = \operatorname{trace}(\mathbf{u}_i \mathbf{v}_i^T) = \mathbf{v}_i^T \mathbf{u}_i = 1$$

Each rank-1 piece has trace exactly 1. Summing over all pieces:

$$\operatorname{trace}(P) = \sum_{i=1}^r \operatorname{trace}(R_i) = r = \operatorname{rank}(P)$$

This leads to the next major theorem.
:::

---

## 3. Rank Equals Trace for Projections

### 3.1 The Theorem

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

### 3.2 Why Only for Projections

::: remark
**This Identity Is Special to Projections**

For a general matrix $A = UV$, we still have $\operatorname{trace}(A) = \operatorname{trace}(UV) = \operatorname{trace}(VU)$. But $VU$ is NOT the identity, so we cannot conclude $\operatorname{trace}(A) = \operatorname{rank}(A)$.

Compare:
- **Example 1.1** (not a projection): $A = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$, $\operatorname{rank} = 1$, $\operatorname{trace} = 4$. Different!
- **Example 1.2** (projection): $P = \frac{1}{5}\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$, $\operatorname{rank} = 1$, $\operatorname{trace} = 1$. Equal!

The identity $\operatorname{rank} = \operatorname{trace}$ is a **fingerprint** of projection matrices.
:::

This identity now opens up three important branches.

---

## 4. Three Consequences

### 4.1 Rank-1 Projection Characterization

::: proposition
**Corollary 4.1 (Rank-1 Projection Characterization)**

For a square matrix $A$, consider the following three conditions:
1. $\operatorname{rank}(A) = 1$
2. $\operatorname{trace}(A) = 1$
3. $A^2 = A$ (projection)

**If any two of these conditions hold, then all three hold.**
:::

**Proof**:

**(1) + (2) $\implies$ (3)**: If $\operatorname{rank}(A) = 1$ and $\operatorname{trace}(A) = 1$.

Write $A = \mathbf{u}\mathbf{v}^T$ (rank 1). Then $\operatorname{trace}(A) = \mathbf{v}^T \mathbf{u} = 1$.

$$A^2 = (\mathbf{u}\mathbf{v}^T)(\mathbf{u}\mathbf{v}^T) = \mathbf{u}(\mathbf{v}^T \mathbf{u})\mathbf{v}^T = \mathbf{u} \cdot 1 \cdot \mathbf{v}^T = A \quad ✓$$

**(1) + (3) $\implies$ (2)**: If $\operatorname{rank}(A) = 1$ and $A^2 = A$.

Write $A = UV$ with $U$ being $n \times 1$ and $V$ being $1 \times n$. By Theorem 2.1: $VU = I_1 = 1$.

$$\operatorname{trace}(A) = \operatorname{trace}(UV) = \operatorname{trace}(VU) = 1 \quad ✓$$

**(2) + (3) $\implies$ (1)**: If $\operatorname{trace}(A) = 1$ and $A^2 = A$.

By Theorem 3.1: $\operatorname{rank}(A) = \operatorname{trace}(A) = 1$. ✓

Done! ∎

::: remark
**Why Is This Useful?**

To check whether a rank-1 matrix is a projection, we only need to compute its trace. If the trace is 1, the projection property $A^2 = A$ is **automatic**.
:::

### 4.2 The Reverse Question: What If $UV = I$?

In §2 we discovered: $P = UV$ with $P^2 = P$ forces $VU = I_r$. That went **projection → identity**.

Now reverse: suppose we **start** with $UV = I_n$. What is $VU$?

::: proposition
**Theorem 4.2 ($VU$ Is Always a Projection)**

If $U$ is $n \times r$ and $V$ is $r \times n$ with $UV = I_n$, then $(VU)^2 = VU$.
:::

**Proof**:

$$(VU)(VU) = V(UV)U = VI_nU = VU \qquad ∎$$

The circle closes: **Projection → Identity → Projection**.

**The rank is determined.** Since $VU$ is an $r \times r$ projection, by Theorem 3.1:

$$\operatorname{rank}(VU) = \operatorname{trace}(VU) = \operatorname{trace}(UV) = \operatorname{trace}(I_n) = n$$

So $VU$ is an $r \times r$ projection of rank $n$. Since $\operatorname{rank} \leq \text{size}$, we must have $n \leq r$.

**Three cases by shape.** With $U$ being $n \times r$, $V$ being $r \times n$, $UV = I_n$, and $n \leq r$:

| Case | Shape | What happens |
|------|-------|-------------|
| $r < n$ | thin $\times$ fat | $\operatorname{rank}(VU) \leq r < n$ — contradicts $\operatorname{rank} = n$. **Impossible.** |
| $r = n$ | square $\times$ square | $VU$ is a rank-$n$ projection on $\mathbb{R}^n$ — must be $I_n$. So $VU = I_n$. |
| $r > n$ | fat $\times$ thin | $VU$ is a **genuine** rank-$n$ projection on $\mathbb{R}^r$. |

::: remark
**Why the square case gives $VU = I_n$**

When $r = n$, the projection $VU$ has $\operatorname{rank}(VU) = n$ on $\mathbb{R}^n$. Then $I_n - VU$ is also a projection with:

$$\operatorname{rank}(I_n - VU) = \operatorname{trace}(I_n - VU) = n - n = 0$$

So $I_n - VU = 0$, giving $VU = I_n$.
:::

::: remark
**The $r > n$ case is genuine**

When $r > n$, $VU$ is an $r \times r$ projection of rank $n < r$ — a proper projection (not the identity). This means $UV = I_n$ does **not** force $VU = I_r$. The "one-sided implies two-sided" phenomenon is special to the **square** case.
:::

The square case yields an important corollary:

::: proposition
**Proposition 4.3 (One-Sided Inverse $\implies$ Two-Sided for Square Matrices)**

If $F$ and $V$ are both $n \times n$ and $FV = I_n$, then $VF = I_n$.
:::

**Proof**: This is the square case ($r = n$) of Theorem 4.2: from $FV = I_n$ (with $F$ being $n \times n$ and $V$ being $n \times n$), we get $VF = I_n$. ∎

::: remark
**Comparison with Lecture 1**

In Lecture 1, we defined "invertible" by assuming both $AB = I$ and $BA = I$. Proposition 4.3 shows that **for square matrices, one equation suffices**:

$$FV = I_n \quad \Longrightarrow \quad VF = I_n$$

This is a strictly stronger result: we no longer need to assume the existence of a two-sided inverse.
:::

### 4.3 Full-Rank Square Matrix Is Invertible

::: proposition
**Theorem 4.4 (Full Rank $\iff$ Invertible)**

An $n \times n$ matrix $X$ is invertible if and only if $\operatorname{rank}(X) = n$.
:::

**Proof**:

**$(\Longrightarrow)$ Invertible $\implies$ full rank**:

Suppose $XY = I_n$ for some $Y$. Cross-fill $X = UV$ where $U$ is $n \times k$, $V$ is $k \times n$, and $k = \operatorname{rank}(X) \leq n$.

Then:

$$U(VY) = I_n$$

where $U$ is $n \times k$ and $VY$ is $k \times n$ with $k \leq n$.

By Theorem 4.2 (the $r < n$ case is impossible): $k = n$. Therefore $\operatorname{rank}(X) = n$. ✓

**$(\Longleftarrow)$ Full rank $\implies$ invertible**:

Suppose $\operatorname{rank}(X) = n$. We construct an explicit inverse.

**Step 1**: Cross-fill $X = UV$ where $U$ and $V$ are both $n \times n$ (since rank $= n$, the decomposition uses $n$ rank-1 pieces).

**Step 2**: Augmented cross-filling (horizontal).

Apply cross-filling to the augmented matrix $(X \mid I_n)$ using the **same pivot selections** as in Step 1.

At each step, the pivot lies in the $X$ block. The column part $\mathbf{u}_k$ comes from $X$ (the same column as before). The row part extends across the full augmented matrix: $(\mathbf{v}_k^T \mid \mathbf{w}_k^T)$, where $\mathbf{v}_k^T$ comes from the $X$ block and $\mathbf{w}_k^T$ from the $I_n$ block.

Since $\operatorname{rank}(X) = n$, all $n$ rows are covered by the $n$ pivots. The $I_n$ block is completely transformed. The decomposition gives:

$$(X \mid I_n) = U(V \mid W)$$

Comparing both sides:
- Left part: $X = UV$ ✓ (same as before)
- Right part: $I_n = UW$

**Step 3**: From $UW = I_n$ (both $n \times n$), Proposition 4.3 gives $WU = I_n$.

Therefore $U$ is invertible with $U^{-1} = W$.

**Step 4**: Augmented cross-filling (vertical).

Similarly, apply cross-filling to $\begin{pmatrix} X \\ I_n \end{pmatrix}$ using the same pivots. At each step, the row part $\mathbf{v}_k^T$ comes from $X$. The column part extends: $\begin{pmatrix} \mathbf{u}_k \\ \mathbf{g}_k \end{pmatrix}$, where $\mathbf{u}_k$ comes from $X$ and $\mathbf{g}_k$ from $I_n$.

Since all $n$ columns are covered, the decomposition gives:

$$\begin{pmatrix} X \\ I_n \end{pmatrix} = \begin{pmatrix} U \\ G \end{pmatrix} V$$

This gives $I_n = GV$. By Proposition 4.3: $VG = I_n$.

Therefore $V$ is invertible with $V^{-1} = G$.

**Step 5**: $X = UV$ with both $U, V$ invertible, so:

$$X^{-1} = V^{-1}U^{-1} = GW$$

Done! ∎

::: example
**Example 4.1: Finding an Inverse via Augmented Cross-Filling**

Let $X = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. Since $\operatorname{rank}(X) = 2$, it should be invertible.

**Step 1**: Cross-fill $X$ at pivots $(1,1)$ and $(2,2)$.

Pivot $(1,1) = 2$: row $= (2, 1)$, column $= \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

$$R_1 = \frac{1}{2}\begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 2 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 1/2 \end{pmatrix}$$

Remainder: $X - R_1 = \begin{pmatrix} 0 & 0 \\ 0 & 1/2 \end{pmatrix}$.

Pivot $(2,2) = 1/2$:

$$R_2 = \frac{1}{1/2}\begin{pmatrix} 0 \\ 1/2 \end{pmatrix}\begin{pmatrix} 0 & 1/2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 1/2 \end{pmatrix}$$

Product form: $U = \begin{pmatrix} 2 & 0 \\ 1 & 1/2 \end{pmatrix}$, $V = \begin{pmatrix} 1 & 1/2 \\ 0 & 1 \end{pmatrix}$.

**Step 2**: Augmented cross-filling of $(X \mid I_2)$.

Apply the same pivots to $\begin{pmatrix} 2 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \end{pmatrix}$.

Pivot $(1,1) = 2$: row $= (2, 1, 1, 0)$, column $= \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

Peel off: $\frac{1}{2}\begin{pmatrix} 2 \\ 1 \end{pmatrix}(2, 1, 1, 0) = \begin{pmatrix} 2 & 1 & 1 & 0 \\ 1 & 1/2 & 1/2 & 0 \end{pmatrix}$

Remainder: $\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 1/2 & -1/2 & 1 \end{pmatrix}$

Pivot $(2,2) = 1/2$: row $= (0, 1/2, -1/2, 1)$.

So: $V = \begin{pmatrix} 1 & 1/2 \\ 0 & 1 \end{pmatrix}$, $W = \begin{pmatrix} 1/2 & 0 \\ -1 & 2 \end{pmatrix}$.

**Verify**: $UW = \begin{pmatrix} 2 & 0 \\ 1 & 1/2 \end{pmatrix}\begin{pmatrix} 1/2 & 0 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$ ✓

**Step 3**: $X^{-1} = V^{-1}U^{-1}$.

$U^{-1} = W = \begin{pmatrix} 1/2 & 0 \\ -1 & 2 \end{pmatrix}$, $V^{-1} = \begin{pmatrix} 1 & -1/2 \\ 0 & 1 \end{pmatrix}$.

$$X^{-1} = V^{-1}U^{-1} = \begin{pmatrix} 1 & -1/2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1/2 & 0 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$$

**Verify**: $X \cdot X^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ ✓
:::

::: remark
**The Augmented Cross-Filling and Classical Row Reduction**

The augmented cross-filling technique is analogous to the classical method of finding $X^{-1}$ by row-reducing $(X \mid I) \to (I \mid X^{-1})$. But here, the inverse emerges as a **by-product** of the cross-filling decomposition $X = UV$, and the proof of invertibility relies on the projection-theoretic Theorem 4.2 (three cases) rather than on row-reduction theory.
:::

---

## 5. Summary and Looking Ahead

::: success
**Key Theorems from This Lecture**

1. **The Discovery** (§1): Cross-filling a projection produces rank-1 projections that are mutually annihilating.

2. **$VU = I$ Automatic** (Theorem 2.1): If $P = UV$ with $P^2 = P$ and $U, V$ full rank, then $VU = I$.

3. **Rank = Trace** (Theorem 3.1): For any projection $P$, $\operatorname{rank}(P) = \operatorname{trace}(P)$.

4. **Rank-1 Characterization** (Corollary 4.1): Any two of $\{\operatorname{rank}=1, \operatorname{trace}=1, A^2=A\}$ imply the third.

5. **The Reverse Question** (§4.2): If $UV = I_n$ with $U$ being $n \times r$ and $V$ being $r \times n$, then $VU$ is always an $r \times r$ projection of rank $n$. Three cases by shape:
   - $r < n$ (thin $\times$ fat): **impossible** — rank contradiction.
   - $r = n$ (square $\times$ square): $VU = I_n$ — one-sided inverse $\Rightarrow$ two-sided.
   - $r > n$ (fat $\times$ thin): $VU$ is a **genuine** projection on $\mathbb{R}^r$.

6. **Orthogonal Projections** (§3.2): Diagonal cross-filling of an orthogonal projection produces orthonormal basis vectors for $\operatorname{Col}(P)$.

7. **Full Rank $\iff$ Invertible** (Theorem 4.4): An $n \times n$ matrix is invertible if and only if it has rank $n$.
:::

### Looking Ahead to Lecture 9

In this lecture, we proved that **cross-filling** a projection produces mutually annihilating rank-1 projections. But cross-filling is just one way to decompose a projection.

::: question
**Does this generalize?**

Suppose we write a projection as **any** sum $P = R_1 + \cdots + R_k$ (not necessarily from cross-filling), with $\sum \operatorname{rank}(R_i) \leq \operatorname{rank}(P)$.

Must each $R_i$ still be a projection? Must they still satisfy $R_i R_j = 0$?
:::

The answer is **yes** — this is the **projection decomposition theorem**, the central result of Lecture 9. This leads to:
- **Compatible families** of projections
- Powerful decomposition methods (inner cross-filling, diagonal cross-filling)
- The foundation for **spectral decomposition**

---

## Exercises

::: problem
**Exercise 1: Verify $VU = I$**

For the projection $P = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$:

(a) Find a cross-filling decomposition $P = UV$.

(b) Compute $VU$ and verify it equals $I_1$.

(c) Check that $\operatorname{rank}(P) = \operatorname{trace}(P)$.
:::

::: problem
**Exercise 2: Rank-1 Characterization**

For each matrix, check which two of the three conditions hold, then deduce the third:

(a) $A = \begin{pmatrix} 1/3 & 2/3 \\ 1/3 & 2/3 \end{pmatrix}$ (given: rank = 1, trace = 1)

(b) $B = \begin{pmatrix} 1 & -1 \\ 0 & 0 \end{pmatrix}$ (given: rank = 1, $B^2 = B$)

(c) $C = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$ (given: $C^2 = C$, trace = 1)
:::

::: problem
**Exercise 3: One-Sided Inverse**

Let $F = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$ and $V = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.

(a) Verify that $FV = I_2$.

(b) Without computing $VF$ directly, explain why Proposition 4.3 guarantees $VF = I_2$.

(c) Now verify $VF = I_2$ by direct computation.
:::

::: problem
**Exercise 4: Full Rank and Invertibility**

Determine which matrices are invertible using the rank criterion (Theorem 4.4):

(a) $A = \begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}$

(b) $B = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}$

(c) $C = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 3 \end{pmatrix}$

For invertible ones, find the inverse using augmented cross-filling.
:::

::: problem
**Exercise 5: Trace and Rank**

(a) Find a $3 \times 3$ projection with $\operatorname{rank} = 2$ and $\operatorname{trace} = 2$.

(b) Prove: if $P$ is a projection and $\operatorname{trace}(P) = 0$, then $P = 0$.

(c) Prove: if $P$ is a projection and $\operatorname{trace}(P) = n$ (where $P$ is $n \times n$), then $P = I_n$.
:::

::: problem
**Exercise 6** (Challenge)

Let $A$ be a **full-rank square matrix** ($n \times n$, $\operatorname{rank}(A) = n$). Suppose $A = R_1 + R_2 + \cdots + R_n$ is the cross-filling decomposition into rank-1 pieces.

Prove that $A^{-1}R_i$ is a projection for each $i = 1, \ldots, n$.

*Hint: Left-multiply $A = R_1 + \cdots + R_n$ by $A^{-1}$. What do you get on the left? Apply the discovery from Section 1.*
:::
