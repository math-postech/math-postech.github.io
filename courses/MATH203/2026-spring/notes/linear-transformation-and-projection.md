# Lecture 7: Linear Transformation and Projection

> **Topics**: §4.1, §5.1 — Linear Transformations, Projection Operators (P²=P), Sunlight-Floor Model, Orthogonal Projections (P=P^T)
> **Date**: Mar 30 – Apr 2, 2026

---

## 1. Linear Transformations

In this lecture, we shift from viewing matrices as **static objects** (Lectures 1–6) to viewing them as **dynamic transformations** that act on vectors.

### 1.1 Definition

::: definition
**Linear Transformation**

A function $T: V \to W$ between vector spaces is called a **linear transformation** if:

$$T(\lambda \mathbf{v} + \mathbf{w}) = \lambda T(\mathbf{v}) + T(\mathbf{w})$$

for all $\mathbf{v}, \mathbf{w} \in V$ and all scalars $\lambda$.
:::

::: remark
**Equivalent Properties**

The single condition above is equivalent to the following two properties together:
1. **Additivity**: $T(\mathbf{v} + \mathbf{w}) = T(\mathbf{v}) + T(\mathbf{w})$
2. **Homogeneity**: $T(\lambda \mathbf{v}) = \lambda T(\mathbf{v})$
:::

### 1.2 Geometric Interpretation

Geometrically, linear transformations **preserve the linear structure** of space:
- Straight lines remain straight lines
- Parallel lines remain parallel
- The origin stays fixed: $T(\mathbf{0}) = \mathbf{0}$

::: example
**Example 1.1: Common Linear Transformations in $\mathbb{R}^2$**

1. **Rotation by 90° counterclockwise**: $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix}$

2. **Reflection across $x$-axis**: $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ -y \end{pmatrix}$

3. **Scaling by factor 2**: $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x \\ 2y \end{pmatrix}$

4. **Projection onto $x$-axis**: $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ 0 \end{pmatrix}$
:::

### 1.3 Matrix Representation

::: proposition
**Matrix Representation Theorem**

Every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ can be represented by left multiplication by a matrix:

$$T(\mathbf{v}) = A\mathbf{v}$$

for some $m \times n$ matrix $A$.

Conversely, every matrix defines a linear transformation by $\mathbf{v} \mapsto A\mathbf{v}$.
:::

::: definition
**Linear Operator**

When the domain and codomain are the same ($T: V \to V$), we call $T$ a **linear operator**.

For the rest of this lecture, we focus on linear operators represented by **square matrices**.
:::

---

## 2. Projection Operators

Projection operators are the most simple and intuitive, yet also the most important linear transformations.

### 2.1 Definition

::: definition
**Projection Operator (Idempotent)**

A matrix $P$ is called a **projection operator** (or **idempotent**) if:

$$P^2 = P$$
:::

The name "idempotent" comes from Latin: *idem* (same) + *potent* (power) — applying the operation multiple times gives the same result as applying it once.

### 2.2 Geometric Explanation: The Sunlight Model

We introduce the idea of projection operators through the **sunlight model** before explaining the definition $P^2 = P$.

::: example
**Example 2.1: Shadows on the Floor**

Imagine:
- A **vector $\mathbf{v}$** standing straight at the origin (like a tree)
- **Sunlight** shining from some direction
- The projection $P$ maps any vector $\mathbf{v}$ to its **shadow $\mathbf{w} := P\mathbf{v}$** on the floor

**Key observation**: The direction of sunlight need not be perpendicular to the floor. In our model, we choose:
- One direction for the **floor**
- One direction for the **sunlight**

These two directions are independent.
:::

::: remark
**Why $P^2 = P$?**

In the definition, we required $P^2 = P$. Algebraically, this means $P^2\mathbf{v} = P\mathbf{v}$ for any vector $\mathbf{v}$.

**Geometrically**, it means: **the shadow of a shadow is the shadow itself**.

Why? Since $\mathbf{w} := P\mathbf{v}$ represents the shadow of $\mathbf{v}$, the vector $\mathbf{w}$ lies on the floor. The shadow of a vector already on the floor is itself. Therefore $P\mathbf{w} = \mathbf{w}$.

This gives us $P(P\mathbf{v}) = P\mathbf{v}$, which is exactly $P^2 = P$.
:::

### 2.3 Understanding the Sunlight Model: Three Questions

Intuitively, a projection needs to specify **the floor** and **the sunlight direction**. But we defined projection only by $P^2 = P$. Therefore, we need to answer:

::: question
**Three Key Questions**

1. If $P^2 = P$, how do we define **the floor**?
2. If $P^2 = P$, how do we define **the direction of sunlight**?
3. After specifying these, why is $P\mathbf{v}$ exactly the shadow of $\mathbf{v}$?
:::

To answer these questions, we examine what happens to specific types of vectors under an actual projection.

#### Question 1: What if a vector points toward the sun?

::: problem
**Problem 2.1: Vectors Pointing Toward the Sun**

Assume $P$ is an actual projection. If a vector $\mathbf{v}$ is pointing toward the sun, what does its shadow look like?

What is $\mathbf{w} = P\mathbf{v}$ in this case?

**Answer**: $P\mathbf{v} = \mathbf{0}$ (no shadow, because the vector points directly toward the light source)

Should $\mathbf{v}$ be an element of the following set?

$$\{\mathbf{v} \in V : P\mathbf{v} = \mathbf{0}\}$$

**Yes!** This set describes **the direction of sunlight**.
:::

#### Question 2: What if a vector lies on the ground?

::: problem
**Problem 2.2: Vectors on the Floor**

Assume $P$ is an actual projection. If a vector $\mathbf{w}$ is lying on the ground, what does its shadow look like?

What is $P\mathbf{w}$ in this case? Is $\mathbf{w}$ the same as $P\mathbf{w}$?

**Answer**: $P\mathbf{w} = \mathbf{w}$ (a vector on the floor is its own shadow)

Should $\mathbf{w}$ be an element of the following set?

$$\{\mathbf{w} : \mathbf{w} = P\mathbf{v} \text{ for some } \mathbf{v} \in V\}$$

**Yes!** Furthermore, when $P$ is a projection, the following two statements are equivalent:

$$\mathbf{w} = P\mathbf{v} \text{ for some } \mathbf{v} \in V \quad \iff \quad P\mathbf{w} = \mathbf{w}$$

Which of the following sets describes **the floor**? (Both do!)

$$\{\mathbf{w} : \mathbf{w} = P\mathbf{v} \text{ for some } \mathbf{v} \in V\} \quad = \quad \{\mathbf{w} \in V : P\mathbf{w} = \mathbf{w}\}$$
:::

### 2.4 Column Space and Null Space

From Lectures 4–5, we already know:

::: definition
**Column Space and Null Space (Review)**

For any matrix $P$:

$$\operatorname{Null}(P) := \{\mathbf{v} : P\mathbf{v} = \mathbf{0}\}$$

$$\operatorname{Col}(P) := \{\mathbf{w} : \mathbf{w} = P\mathbf{v} \text{ for some } \mathbf{v} \in V\}$$
:::

From our geometric analysis above:
- $\operatorname{Null}(P)$ = direction of sunlight
- $\operatorname{Col}(P)$ = the floor

### 2.5 Why $P\mathbf{v}$ Is the Shadow: The Proof

Now we prove that if $P^2 = P$, then $P\mathbf{v}$ is indeed the shadow of $\mathbf{v}$ when projecting onto $\operatorname{Col}(P)$ along the direction parallel to $\operatorname{Null}(P)$.

::: proposition
**Proposition 2.1: $P^2 = P$ Implies Geometric Projection**

Let $P$ be an operator with $P^2 = P$. Given $\mathbf{v} \in V$, let $\mathbf{w}$ be the **geometric shadow** of $\mathbf{v}$ found by:
- Drawing the floor $\operatorname{Col}(P)$
- Drawing the sunlight direction $\operatorname{Null}(P)$
- Finding where the line through $\mathbf{v}$ parallel to $\operatorname{Null}(P)$ intersects $\operatorname{Col}(P)$

Then $\mathbf{w} = P\mathbf{v}$.

**Proof**:

Intuitively, $\mathbf{w}$ is the shadow if and only if it satisfies:
1. **Shadows lie on the floor**: $\mathbf{w} \in \operatorname{Col}(P)$
2. **The line from $\mathbf{v}$ to $\mathbf{w}$ follows the sunlight direction**: $\mathbf{v} - \mathbf{w} \in \operatorname{Null}(P)$

We must show:

$$\begin{cases}
P^2 = P \\
\mathbf{w} \in \operatorname{Col}(P) \\
\mathbf{v} - \mathbf{w} \in \operatorname{Null}(P)
\end{cases}
\implies \mathbf{w} = P\mathbf{v}$$

Since $\mathbf{w} \in \operatorname{Col}(P)$, we have $\mathbf{w} = P\mathbf{x}$ for some $\mathbf{x} \in V$.

Then:
$$P\mathbf{w} = P(P\mathbf{x}) = P^2\mathbf{x} = P\mathbf{x} = \mathbf{w}$$

Since $\mathbf{v} - \mathbf{w} \in \operatorname{Null}(P)$:
$$P(\mathbf{v} - \mathbf{w}) = \mathbf{0}$$
$$P\mathbf{v} - P\mathbf{w} = \mathbf{0}$$
$$P\mathbf{v} = P\mathbf{w}$$

Combining with $P\mathbf{w} = \mathbf{w}$:
$$P\mathbf{v} = \mathbf{w}$$

This proves that $P^2 = P$ implies $P\mathbf{v}$ is the shadow of $\mathbf{v}$ when projecting to $\operatorname{Col}(P)$ along $\operatorname{Null}(P)$. ∎
:::

::: success
**Summary: Projection Operators**

As long as an operator $P: V \to V$ satisfies $P^2 = P$, it is a projection such that:

1. For any vector $\mathbf{v} \in V$:
   - $P\mathbf{v}$ represents the shadow
   - $\mathbf{v} - P\mathbf{v} = (I - P)\mathbf{v}$ is a vector pointing in the direction of the sun

2. $\operatorname{Null}(P)$ describes the **direction of sunlight** (vectors $\mathbf{v}$ with $P\mathbf{v} = \mathbf{0}$)

3. $\operatorname{Col}(P)$ describes the **floor** (all possible shadows $\mathbf{w} = P\mathbf{v}$)
   - In particular, for any $\mathbf{w} \in \operatorname{Col}(P)$, we have $P\mathbf{w} = \mathbf{w}$
:::

---

## 3. Basic Properties of Projections

### 3.1 Column Space Characterization

::: proposition
**Proposition 3.1: Column Space Membership Test**

Let $P$ be a projection matrix. For any vector $\mathbf{y} \in \mathbb{R}^n$:

$$\mathbf{y} \in \operatorname{Col}(P) \quad \iff \quad P\mathbf{y} = \mathbf{y}$$

**Proof**:

**($\implies$)**: If $\mathbf{y} \in \operatorname{Col}(P)$, then $\mathbf{y} = P\mathbf{x}$ for some $\mathbf{x}$.

Then:
$$P\mathbf{y} = P(P\mathbf{x}) = P^2\mathbf{x} = P\mathbf{x} = \mathbf{y}$$

**($\impliedby$)**: If $P\mathbf{y} = \mathbf{y}$, then $\mathbf{y} \in \operatorname{Col}(P)$ by definition of column space. ∎
:::

::: remark
**Geometric Meaning**

This says: **a vector is on the floor if and only if it equals its own shadow**.
:::

### 3.2 The Companion Projection: $I - P$

::: proposition
**Proposition 3.2: $I - P$ Is Also a Projection**

If $P$ is a projection ($P^2 = P$), then $I - P$ is also a projection.

**Proof**:

$$(I - P)^2 = (I - P)(I - P) = I - P - P + P^2 = I - 2P + P = I - P$$

Therefore $(I - P)^2 = I - P$. ∎
:::

::: remark
**Geometric Interpretation**

If $P$ projects onto the floor, then $I - P$ measures the **vertical displacement**:

$$P\mathbf{v} = \text{shadow on the floor}$$
$$(I - P)\mathbf{v} = \mathbf{v} - P\mathbf{v} = \text{vector from shadow to original position}$$

In the sunlight model:
- $P$ projects **onto the floor**
- $I - P$ projects **in the direction of sunlight**
:::

### 3.3 The Interchanging Property

::: proposition
**Proposition 3.3: Column Space and Null Space Interchange**

For any projection $P$:

$$\operatorname{Col}(P) = \operatorname{Null}(I - P)$$
$$\operatorname{Col}(I - P) = \operatorname{Null}(P)$$

**Proof** (first equality):

**($\subseteq$)**: Let $\mathbf{v} \in \operatorname{Col}(P)$.

Then $P\mathbf{v} = \mathbf{v}$ (by Proposition 3.1).

So $(I - P)\mathbf{v} = \mathbf{v} - P\mathbf{v} = \mathbf{0}$.

Thus $\mathbf{v} \in \operatorname{Null}(I - P)$.

**($\supseteq$)**: Let $\mathbf{v} \in \operatorname{Null}(I - P)$.

Then $(I - P)\mathbf{v} = \mathbf{0}$, which means $\mathbf{v} = P\mathbf{v}$.

So $\mathbf{v} \in \operatorname{Col}(P)$ (by Proposition 3.1).

The proof of the second equality is similar. ∎
:::

::: remark
**Beautiful Phenomenon**

The projections $P$ and $I - P$ **interchange** their column spaces and null spaces!

| For $P$ | For $I - P$ |
|---------|-------------|
| $\operatorname{Col}(P)$ | $= \operatorname{Null}(I - P)$ |
| $\operatorname{Null}(P)$ | $= \operatorname{Col}(I - P)$ |
:::

### 3.4 Disjoint Property

::: proposition
**Proposition 3.4: Column Space and Null Space Are Disjoint**

For any projection $P$:

$$\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$$

**Proof**:

Let $\mathbf{v} \in \operatorname{Col}(P) \cap \operatorname{Null}(P)$.

Since $\mathbf{v} \in \operatorname{Col}(P)$:
$$P\mathbf{v} = \mathbf{v} \quad \text{(by Proposition 3.1)}$$

Since $\mathbf{v} \in \operatorname{Null}(P)$:
$$P\mathbf{v} = \mathbf{0} \quad \text{(by definition of null space)}$$

Therefore $\mathbf{v} = \mathbf{0}$. ∎
:::

::: remark
**Geometric Interpretation**

In the sunlight-floor model:
- $\operatorname{Col}(P)$ = the floor
- $\operatorname{Null}(P)$ = the direction of sunlight

These two subspaces **only meet at the origin**.

A non-zero vector cannot simultaneously be on the floor and point toward the sun.
:::

---

## 4. Orthogonal Projections

In Lecture 6, we discovered that for any matrix $A$:

$$\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$$

where $\mathbf{u} \perp \mathbf{v}$ means $\mathbf{u}^T \mathbf{v} = 0$. This orthogonality relationship is a fundamental feature of the four subspaces.

A natural question arises in the sunlight-floor model: **Can the sunlight shine perpendicular to the floor?**

### 4.1 Definition

::: definition
**Orthogonal Projection**

A projection $P$ (satisfying $P^2 = P$) is called an **orthogonal projection** if the floor and the sunlight direction are perpendicular:

$$\operatorname{Col}(P) \perp \operatorname{Null}(P)$$

That is, $\mathbf{v}^T \mathbf{w} = 0$ for every $\mathbf{v} \in \operatorname{Col}(P)$ and $\mathbf{w} \in \operatorname{Null}(P)$.
:::

### 4.2 Orthogonal vs Oblique: Same Floor, Different Sunlight

::: example
**Example 4.1: Two Projections onto the Line $y = x$**

Consider the line $W = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}\right\}$ in $\mathbb{R}^2$. We construct two projections onto this same floor.

**Orthogonal projection**: $P_1 = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$

Verify: $P_1^2 = \frac{1}{4}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = P_1$ ✓

- $\operatorname{Col}(P_1) = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}\right\}$ (the line $y = x$)
- $\operatorname{Null}(P_1) = \operatorname{span}\left\{\begin{pmatrix} 1 \\ -1 \end{pmatrix}\right\}$ (the line $y = -x$)
- $\begin{pmatrix} 1 \\ 1 \end{pmatrix}^T \begin{pmatrix} 1 \\ -1 \end{pmatrix} = 1 - 1 = 0$ ✓ **Sunlight perpendicular to floor!**
- Also note: $P_1 = P_1^T$ ✓

**Oblique projection**: $P_2 = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$

Verify: $P_2^2 = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} = P_2$ ✓

- $\operatorname{Col}(P_2) = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}\right\}$ (same floor!)
- $\operatorname{Null}(P_2) = \operatorname{span}\left\{\begin{pmatrix} 0 \\ 1 \end{pmatrix}\right\}$ (sunlight from a different direction)
- $\begin{pmatrix} 1 \\ 1 \end{pmatrix}^T \begin{pmatrix} 0 \\ 1 \end{pmatrix} = 0 + 1 = 1 \neq 0$ ✗ **Not perpendicular!**
- Also note: $P_2 \neq P_2^T$ ✗

Both projections land on the same floor, but the sunlight direction differs. Only $P_1$ has perpendicular sunlight.
:::

### 4.3 The Characterization Theorem

How do we check whether a projection is orthogonal? Testing all pairs of vectors in $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$ seems hopeless. The following theorem gives a single, elegant algebraic test.

::: proposition
**Theorem 4.1 (Orthogonal Projection ↔ Symmetry)**

Let $P$ be a projection ($P^2 = P$). The following are equivalent:

1. **Geometric condition**: $\operatorname{Col}(P) \perp \operatorname{Null}(P)$
2. **Algebraic condition**: $P = P^T$
:::

**Proof**:

**(2 $\implies$ 1): Symmetry implies perpendicularity**

Assume $P = P^T$. Take any $\mathbf{v} \in \operatorname{Col}(P)$ and $\mathbf{w} \in \operatorname{Null}(P)$.

By Proposition 3.1: $P\mathbf{v} = \mathbf{v}$.

By the interchanging property (Proposition 3.3): $\mathbf{w} \in \operatorname{Null}(P) = \operatorname{Col}(I - P)$, so $\mathbf{w} = (I - P)\mathbf{u}$ for some $\mathbf{u}$.

Compute:
$$\mathbf{v}^T \mathbf{w} = (P\mathbf{v})^T (I - P)\mathbf{u} = \mathbf{v}^T P^T(I - P)\mathbf{u}$$

Since $P^T = P$:

$$= \mathbf{v}^T P(I - P)\mathbf{u} = \mathbf{v}^T (P - P^2)\mathbf{u} = \mathbf{v}^T \cdot \mathbf{0} = 0$$

Therefore $\operatorname{Col}(P) \perp \operatorname{Null}(P)$. ✓

**(1 $\implies$ 2): Perpendicularity implies symmetry**

Assume $\operatorname{Col}(P) \perp \operatorname{Null}(P)$.

For any standard basis vectors $\mathbf{e}_i$ and $\mathbf{e}_j$:
- $P\mathbf{e}_i \in \operatorname{Col}(P)$
- $(I - P)\mathbf{e}_j \in \operatorname{Null}(P)$ (by the interchanging property)

By the orthogonality assumption:

$$(P\mathbf{e}_i)^T (I - P)\mathbf{e}_j = 0$$

The left side is the $(i,j)$-entry of the matrix $P^T(I - P)$. Since this holds for all $i, j$:

$$P^T(I - P) = 0 \quad \Longrightarrow \quad P^T = P^T P$$

Taking the transpose of both sides:

$$P = (P^T P)^T = P^T P$$

Therefore $P = P^T P = P^T$. ∎

::: success
**Orthogonal Projection: Two Algebraic Conditions**

An orthogonal projection is completely characterized by:

$$P^2 = P \quad \text{and} \quad P = P^T$$

The geometry of "sunlight perpendicular to floor" is captured algebraically by **matrix symmetry**.
:::

::: remark
**Why This Characterization Is Powerful**

To check $P = P^T$, we simply compare entries: $p_{ij} = p_{ji}$. No need to compute column spaces, null spaces, or inner products.

In later lectures, this characterization will lead to an explicit construction formula for the orthogonal projection onto $\operatorname{Col}(B)$:

$$P = B(B^T B)^{-1} B^T$$
:::

---

## 5. Summary

::: success
**Key Concepts from This Lecture**

1. **Linear Transformation**: $T(\lambda \mathbf{v} + \mathbf{w}) = \lambda T(\mathbf{v}) + T(\mathbf{w})$
   - Represented by matrices: $T(\mathbf{v}) = A\mathbf{v}$
   - Preserves linear structure

2. **Projection Operator**: $P^2 = P$
   - Geometric model: sunlight casting shadows on floor
   - $\operatorname{Col}(P)$ = the floor (where shadows land)
   - $\operatorname{Null}(P)$ = direction of sunlight

3. **Basic Properties**:
   - $I - P$ is also a projection (measures displacement from floor)
   - $\mathbf{y} \in \operatorname{Col}(P) \iff P\mathbf{y} = \mathbf{y}$ (floor membership test)
   - $\operatorname{Col}(P) = \operatorname{Null}(I - P)$ (interchanging property)
   - $\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$ (disjoint property)

4. **Orthogonal Projection**: $P^2 = P$ and $P = P^T$
   - Sunlight perpendicular to floor
   - Geometric orthogonality $\iff$ algebraic symmetry
:::

### Looking Ahead to Lecture 8

In **Lecture 8**, we apply **cross-filling** to projection matrices and discover something remarkable:

When you decompose a projection $P = R_1 + R_2 + \cdots + R_r$ into rank-one pieces, **each $R_i$ is automatically a projection too!**

This will lead to:
- The fundamental identity $\operatorname{rank}(P) = \operatorname{trace}(P)$ — true **only** for projections
- A criterion: when a product of matrices equals $I$, the factors must be square and invertible
- A proof that **full-rank square matrices are always invertible**

---

## Exercises

::: problem
**Exercise 1: Verifying Projections**

Verify whether the following matrices are projections (check $P^2 = P$):

(a) $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$

(b) $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.5 & 0.5 \end{pmatrix}$

(c) $P = \begin{pmatrix} 0.6 & 0.8 \\ 0.8 & 0.4 \end{pmatrix}$

For those that are projections, find $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.
:::

::: problem
**Exercise 2: Column Space Membership**

The following matrix is a projection:
$$P = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

Calculate $P\begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix}$. Is $\begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix} \in \operatorname{Col}(P)$?

(Hint: Use Proposition 3.1)
:::

::: problem
**Exercise 3: Interchanging Property**

Let $P = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

(a) Verify that $P$ is a projection.

(b) Find bases for $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.

(c) Compute $I - P$ and verify:
   - $\operatorname{Col}(P) = \operatorname{Null}(I - P)$
   - $\operatorname{Null}(P) = \operatorname{Col}(I - P)$
:::

::: problem
**Exercise 4: Geometric Interpretation**

Consider the projection $P\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ 0 \end{pmatrix}$ in $\mathbb{R}^2$.

(a) In the sunlight-floor model:
   - What is the floor?
   - What is the direction of sunlight?

(b) Draw a diagram showing how $P$ transforms $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.

(c) What does $I - P$ do geometrically?
:::

::: problem
**Exercise 5: Fill in the Blanks**

Fill in the blanks so that the following matrix is a projection:

$$P = \begin{pmatrix} 0.5 & \square \\ 0.5 & \square \end{pmatrix}$$

Verify your answer by checking $P^2 = P$.
:::

::: problem
**Exercise 6: Orthogonal vs Oblique**

(a) The following matrix is a projection (verify!):
$$P = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$$
Is $P$ an orthogonal projection? Check both $P^2 = P$ and $P = P^T$.

(b) The following matrix is also a projection (verify!):
$$Q = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$$
Is $Q$ an orthogonal projection?

(c) Find $\operatorname{Col}(P)$ and $\operatorname{Col}(Q)$. What do you notice?

(d) Find $\operatorname{Null}(P)$ and $\operatorname{Null}(Q)$. For which projection is the null space perpendicular to the column space?
:::

::: problem
**Exercise 7: Orthogonal Projection in $\mathbb{R}^3$**

Let $P = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ (from Exercise 2).

(a) Is $P$ an orthogonal projection? (Check $P = P^T$.)

(b) Find a vector $\mathbf{v} \in \operatorname{Col}(P)$ and a vector $\mathbf{w} \in \operatorname{Null}(P)$ such that $\mathbf{v}^T \mathbf{w} \neq 0$. This confirms geometrically that $P$ is not orthogonal.
:::
