# Lecture 8: Cross-Filling Properties of Projections

> **Topics**: §5.2–5.3 — Cross-Filling Decomposition, VU=I Automatic, rank(P)=trace(P), Compatible Families
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

This lecture answers the second question. We will discover that **cross-filling projections reveals magical properties** that do not hold for general matrices.

---

## 1. Cross-Filling a Projection

### 1.1 Review: Cross-Filling Any Matrix

Recall from Lecture 3 that any matrix $A$ can be decomposed into a sum of rank-1 matrices:

$$A = R_1 + R_2 + \cdots + R_r$$

where $r = \operatorname{rank}(A)$. We can collect these rank-1 pieces into a product form:

$$A = UV$$

where:
- $U$ is an $m \times r$ matrix whose columns are the "left parts" of each $R_i$
- $V$ is an $r \times n$ matrix whose rows are the "right parts" of each $R_i$

::: example
**Example 1.1: Cross-Filling a General Matrix**

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
**Example 1.2: Cross-Filling a Projection**

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

## 2. The Fundamental Theorem: VU = I Automatic

### 2.1 Statement

::: proposition
**Theorem 2.1 (VU = I Automatic)**

Let $P$ be a projection ($P^2 = P$). Write $P = UV$ as a cross-filling decomposition where:
- $U$ is $m \times r$ with $r = \operatorname{rank}(P)$
- $V$ is $r \times n$

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

### 3.1 Trace of a Rank-1 Projection

First, let's compute the trace of a rank-1 projection.

::: example
**Example 3.1: Trace of a Rank-1 Projection**

Consider $P = \begin{pmatrix} 1 \\ 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$.

This is a rank-1 projection. Its trace is:

$$\operatorname{trace}(P) = 1 + 0 = 1$$

Consider $P = \frac{1}{2}\begin{pmatrix} 1 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$.

Its trace is:

$$\operatorname{trace}(P) = \frac{1}{2}(1 + 1) = 1$$
:::

::: proposition
**Lemma 3.1 (Rank-1 Projection Has Trace 1)**

If $P = \mathbf{u}\mathbf{v}^T$ is a rank-1 projection ($P^2 = P$), then:

$$\operatorname{trace}(P) = 1$$

**Proof**:

From $VU = I$ (where $U = \mathbf{u}$ and $V = \mathbf{v}^T$ are both $1 \times 1$ after reduction to rank-1 case), we have:

$$\operatorname{trace}(P) = \operatorname{trace}(UV) = \operatorname{trace}(VU) = \operatorname{trace}(I_1) = 1$$

∎
:::

### 3.2 The Rank = Trace Theorem

::: proposition
**Theorem 3.2 (Rank = Trace for Projections)**

For any projection $P$ (satisfying $P^2 = P$):

$$\operatorname{rank}(P) = \operatorname{trace}(P)$$
:::

**Proof**:

Cross-fill $P$ into a sum of rank-1 projections:

$$P = R_1 + R_2 + \cdots + R_r$$

where $r = \operatorname{rank}(P)$ and each $R_i$ is a rank-1 matrix.

**Key observation**: Since $P = UV$ with $VU = I$, we can write each $R_i$ as a rank-1 projection:

$$R_i = U \mathbf{e}_i \mathbf{e}_i^T V$$

where $\mathbf{e}_i$ is the $i$-th standard basis vector in $\mathbb{R}^r$.

Each $R_i$ satisfies:

$$R_i^2 = (U \mathbf{e}_i \mathbf{e}_i^T V)(U \mathbf{e}_i \mathbf{e}_i^T V) = U \mathbf{e}_i \mathbf{e}_i^T (VU) \mathbf{e}_i \mathbf{e}_i^T V = U \mathbf{e}_i \mathbf{e}_i^T I \mathbf{e}_i \mathbf{e}_i^T V = U \mathbf{e}_i \mathbf{e}_i^T V = R_i$$

So each $R_i$ is a projection! By Lemma 3.1, $\operatorname{trace}(R_i) = 1$.

Therefore:

$$\operatorname{trace}(P) = \sum_{i=1}^r \operatorname{trace}(R_i) = \sum_{i=1}^r 1 = r = \operatorname{rank}(P)$$

∎

::: remark
**Why Doesn't This Work for General Matrices?**

For a general matrix $A = UV$, we do NOT have $VU = I$, so the rank-1 pieces $R_i = \mathbf{u}_i \mathbf{v}_i^T$ are NOT projections.

Without the projection property, we cannot conclude that $\operatorname{trace}(R_i) = 1$, and the whole argument breaks down.

**This is why rank = trace is special to projections.**
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

If $\{P_1, \ldots, P_k\}$ is a compatible family:

1. **$P_1 + \cdots + P_k = I$** means: every vector $\mathbf{v}$ can be uniquely decomposed as:

   $$\mathbf{v} = P_1\mathbf{v} + P_2\mathbf{v} + \cdots + P_k\mathbf{v}$$

2. **$P_i P_j = 0$ for $i \neq j$** means: the "floors" are mutually orthogonal in the sense that:

   $$\operatorname{Col}(P_i) \cap \operatorname{Col}(P_j) = \{\mathbf{0}\} \quad \text{for } i \neq j$$

The space is **decomposed** into $k$ subspaces that are "perpendicular" (in a generalized sense).
:::

---

## 5. The Automatic Compatibility Theorem

Here comes the most surprising result of this lecture.

### 5.1 The Conjecture

Suppose we have projections $P_1, \ldots, P_k$ (each $P_i^2 = P_i$), and we know:

$$P_1 + P_2 + \cdots + P_k = P$$

where $P$ is also a projection ($P^2 = P$).

**Question**: Does this automatically imply $P_i P_j = 0$ for $i \neq j$?

You might think: "This looks like a hard theorem to prove!" But using our cross-filling tools, the proof is almost trivial.

### 5.2 The Theorem

::: proposition
**Theorem 5.1 (Automatic Compatibility)**

Let $P_1, \ldots, P_k$ be projections ($P_i^2 = P_i$). If:

$$P_1 + P_2 + \cdots + P_k = P$$

where $P$ is also a projection ($P^2 = P$), then **automatically**:

$$P_i P_j = 0 \quad \text{for all } i \neq j$$
:::

::: remark
**Why Is This Surprising?**

The condition $P_i P_j = 0$ seems completely independent from the condition $P_1 + \cdots + P_k = P$.

But the projection property $P^2 = P$ **forces them to be orthogonal** — no extra assumptions needed!
:::

### 5.3 Proof Using Cross-Filling and Trace

**Proof**:

Cross-fill each $P_i$ as $P_i = U_i V_i$. Since $P_i^2 = P_i$, we know $V_i U_i = I_{r_i}$ where $r_i = \operatorname{rank}(P_i)$.

Now collect all the columns of all $U_i$ into one big matrix $U$, and stack all the rows of all $V_i$ into one big matrix $V$:

$$P = P_1 + \cdots + P_k = U_1 V_1 + \cdots + U_k V_k = \begin{pmatrix} U_1 & U_2 & \cdots & U_k \end{pmatrix} \begin{pmatrix} V_1 \\ V_2 \\ \vdots \\ V_k \end{pmatrix} = UV$$

**Step 1**: Count the rank.

By the trace = rank theorem:

$$\operatorname{rank}(P) = \operatorname{trace}(P) = \operatorname{trace}(P_1) + \cdots + \operatorname{trace}(P_k) = \operatorname{rank}(P_1) + \cdots + \operatorname{rank}(P_k)$$

So:

$$\operatorname{rank}(P) = r_1 + r_2 + \cdots + r_k$$

**Step 2**: Count the columns of $U$.

The matrix $U = \begin{pmatrix} U_1 & U_2 & \cdots & U_k \end{pmatrix}$ has exactly $r_1 + r_2 + \cdots + r_k$ columns.

Since $\operatorname{rank}(P) = r_1 + \cdots + r_k$, and $\operatorname{Col}(P) \subseteq \operatorname{Col}(U)$, we must have:

$$\operatorname{rank}(U) \geq \operatorname{rank}(P) = r_1 + \cdots + r_k$$

But $U$ has exactly $r_1 + \cdots + r_k$ columns, so:

$$\operatorname{rank}(U) = r_1 + \cdots + r_k$$

This means **$U$ has full column rank**!

**Step 3**: Conclude $VU = I$.

Since $P = UV$ is a projection and $U$ has full column rank, by Theorem 2.1:

$$VU = I_{r_1 + \cdots + r_k}$$

**Step 4**: Block structure implies orthogonality.

Write out $VU$ in block form:

$$VU = \begin{pmatrix} V_1 \\ V_2 \\ \vdots \\ V_k \end{pmatrix} \begin{pmatrix} U_1 & U_2 & \cdots & U_k \end{pmatrix} = \begin{pmatrix} V_1 U_1 & V_1 U_2 & \cdots & V_1 U_k \\ V_2 U_1 & V_2 U_2 & \cdots & V_2 U_k \\ \vdots & \vdots & \ddots & \vdots \\ V_k U_1 & V_k U_2 & \cdots & V_k U_k \end{pmatrix}$$

Since $VU = I$, this must be a block diagonal matrix:

$$\begin{pmatrix} I_{r_1} & 0 & \cdots & 0 \\ 0 & I_{r_2} & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & I_{r_k} \end{pmatrix}$$

Therefore, $V_i U_j = 0$ for all $i \neq j$.

**Step 5**: Compute $P_i P_j$.

For $i \neq j$:

$$P_i P_j = (U_i V_i)(U_j V_j) = U_i (V_i U_j) V_j = U_i \cdot 0 \cdot V_j = 0$$

Done! ∎

::: remark
**The Magic of Cross-Filling**

This proof would be much harder without the cross-filling perspective!

The key insight is:
1. **Trace = rank** tells us how many columns $U$ must have
2. **VU = I** forces a block diagonal structure
3. The block diagonal structure **forces orthogonality**

All of this flows naturally from $P^2 = P$. No additional conditions needed!
:::

---

## 6. Summary and Looking Ahead

In this lecture, we discovered the **magical properties of cross-filling projections**:

::: tip
**Key Theorems**

1. **VU = I Automatic** (Theorem 2.1): If $P = UV$ with $P^2 = P$, then $VU = I$.

2. **Rank = Trace** (Theorem 3.2): For any projection $P$, $\operatorname{rank}(P) = \operatorname{trace}(P)$.

3. **Automatic Compatibility** (Theorem 5.1): If $P_1 + \cdots + P_k = P$ with each $P_i^2 = P_i$ and $P^2 = P$, then $P_i P_j = 0$ for $i \neq j$.
:::

These results show that **projections have extremely rigid structure**. The single equation $P^2 = P$ imposes so many constraints that:
- Cross-filling automatically produces left/right inverses
- Rank equals trace
- Sums of projections are automatically orthogonal

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
:::
