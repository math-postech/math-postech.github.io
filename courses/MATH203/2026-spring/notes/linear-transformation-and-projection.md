# Lecture 7: Linear Transformation and Projection

> **Topics**: §4.1, §5.1 — Linear Transformations, Projection Operators (P²=P), Sunlight-Floor Model, Column Space and Null Space of Projections
> **Date**: Mar 30 – Apr 2, 2026

---

## 🎯 Motivation: From Static to Dynamic

In Lectures 1–6, we studied **matrices as static objects**:
- Lecture 1: How to multiply matrices (three views of $AB = C$)
- Lecture 2: How to manipulate matrices (row/column operations)
- Lecture 3: How to decompose matrices (cross-filling method)
- Lectures 4–6: What subspaces matrices contain (column space, null space)

**Today, we shift perspective**: Matrices are **dynamic transformations**. A matrix $A$ doesn't just sit there — it **acts on vectors**, transforming them:

$$\mathbf{v} \xrightarrow{\text{matrix } A} A\mathbf{v}$$

::: success
**Key Questions**

1. What does it mean for a transformation to be "linear"?
2. What happens when we **apply a transformation twice** to the same vector?
3. Is there a special class of transformations where **applying twice = applying once**?

Today we answer these questions and discover **projection operators** — one of the most important types of linear transformations.
:::

---

## 1. Linear Transformations

### 1.1 Definition

Consider a function $T$ that takes vectors from a vector space $V$ and produces vectors in another vector space $W$:

$$T: V \to W$$

::: definition
**Linear Transformation**

A function $T: V \to W$ is called a **linear transformation** if it satisfies:

1. **Additivity**: $T(\mathbf{v} + \mathbf{w}) = T(\mathbf{v}) + T(\mathbf{w})$ for all $\mathbf{v}, \mathbf{w} \in V$
2. **Homogeneity**: $T(\lambda \mathbf{v}) = \lambda T(\mathbf{v})$ for all $\mathbf{v} \in V$ and scalars $\lambda$

**Equivalent single condition**: $T(\lambda \mathbf{v} + \mathbf{w}) = \lambda T(\mathbf{v}) + T(\mathbf{w})$
:::

::: remark
**Why This Definition?**

These two properties say: $T$ **preserves the linear structure** of the vector space.
- It doesn't matter whether you add vectors first then transform, or transform first then add
- It doesn't matter whether you scale first then transform, or transform first then scale
:::

### 1.2 Geometric Intuition: Preserving Parallelism

::: proposition
**Geometric Characterization**

A transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is linear if and only if it **preserves parallelograms**:

If vectors $\mathbf{v}$ and $\mathbf{w}$ form a parallelogram, then $T(\mathbf{v})$ and $T(\mathbf{w})$ form a parallelogram with the same proportions.
:::

**Intuitive explanation**: Linear transformations:
- ✅ Preserve straight lines (lines → lines)
- ✅ Preserve parallel lines (parallel → parallel)
- ✅ Preserve origin ($T(\mathbf{0}) = \mathbf{0}$ always)
- ❌ Do NOT preserve lengths (can stretch/compress)
- ❌ Do NOT preserve angles (can shear)

### 1.3 Examples of Linear Transformations

::: example
**Example 1.1: Common Linear Transformations in $\mathbb{R}^2$**

1. **Rotation by 90° counterclockwise**:
   $$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix}$$

2. **Reflection across the $x$-axis**:
   $$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ -y \end{pmatrix}$$

3. **Scaling by factor 2**:
   $$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x \\ 2y \end{pmatrix}$$

4. **Projection onto the $x$-axis**:
   $$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ 0 \end{pmatrix}$$

All of these can be verified to satisfy $T(\lambda \mathbf{v} + \mathbf{w}) = \lambda T(\mathbf{v}) + T(\mathbf{w})$.
:::

### 1.4 Matrices as Linear Operators

::: proposition
**Matrix Representation Theorem**

Every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ can be represented by **left multiplication by a matrix**:

$$T(\mathbf{v}) = A\mathbf{v}$$

for some $m \times n$ matrix $A$.

Conversely, every matrix $A$ defines a linear transformation by $T(\mathbf{v}) = A\mathbf{v}$.
:::

::: remark
**Linear Operator**

When the domain and codomain are the same ($T: V \to V$), we call $T$ a **linear operator** rather than just a linear transformation.

**For this lecture**, we focus on linear operators represented by **square matrices** $A: \mathbb{R}^n \to \mathbb{R}^n$.
:::

**The key question**: What happens when we **compose** a linear operator with itself?

$$T \circ T: \mathbf{v} \mapsto T(T(\mathbf{v})) = A(A\mathbf{v}) = A^2\mathbf{v}$$

This leads us to study $A^2$ and, more importantly, a special case where $A^2 = A$.

---

## 2. Projection Operators: The $P^2 = P$ Condition

### 2.1 Motivating Question

::: question
**What happens when applying a transformation twice gives the same result as applying it once?**

Consider a linear operator $P: \mathbb{R}^n \to \mathbb{R}^n$ such that:

$$P^2 = P$$

What does this mean geometrically? What special property does $P$ have?
:::

### 2.2 The Sunlight-and-Floor Geometric Model

To understand $P^2 = P$, we introduce a **geometric model**:

::: example
**Example 2.1: Shadow on the Floor**

Imagine:
- A **floor** (a plane in 3D space)
- **Sunlight** shining from some direction (not necessarily perpendicular to the floor)
- A **tree** standing at the origin (represented by a vector $\mathbf{v}$)

The tree casts a **shadow** on the floor. Call this shadow $\mathbf{w} = P\mathbf{v}$.

**Key observation**: If you take the shadow $\mathbf{w}$ and compute its shadow, you get... the same shadow $\mathbf{w}$!

Why? Because $\mathbf{w}$ is already lying on the floor. Its shadow is itself.

$$P(P\mathbf{v}) = P\mathbf{w} = \mathbf{w} = P\mathbf{v}$$

This gives us $P^2 = P$.
:::

This geometric model has two key components:
1. **The floor** — where shadows land (some subspace of $\mathbb{R}^n$)
2. **The direction of sunlight** — the direction along which objects collapse to their shadows (another subspace)

::: definition
**Projection Operator (Idempotent Operator)**

A matrix $P$ is called a **projection operator** (or **idempotent**) if:

$$P^2 = P$$

This is the defining property of projections.
:::

::: remark
**Why "Idempotent"?**

The word "idempotent" comes from Latin:
- *idem* = same
- *potent* = power

So "idempotent" means "same power" — applying the operation multiple times gives the same result as applying it once:

$$P^3 = P \cdot P^2 = P \cdot P = P^2 = P$$
$$P^4 = P \cdot P^3 = P \cdot P = P$$

And so on. After the first application, nothing changes.
:::

### 2.3 The Companion Projection: $I - P$

::: proposition
**Proposition 2.1: $I - P$ is Also a Projection**

If $P$ is a projection ($P^2 = P$), then $I - P$ is also a projection.

**Proof**:
\begin{align*}
(I - P)^2 &= (I - P)(I - P) \\
&= I \cdot I - I \cdot P - P \cdot I + P \cdot P \\
&= I - P - P + P^2 \\
&= I - 2P + P \quad (\text{since } P^2 = P) \\
&= I - P
\end{align*}

Therefore $(I - P)^2 = I - P$. ∎
:::

::: remark
**Geometric Interpretation**

If $P$ projects vectors onto the floor, then $I - P$ measures the **vertical displacement** from the original vector to its shadow.

- $P\mathbf{v}$ = shadow of $\mathbf{v}$ on the floor
- $(I - P)\mathbf{v} = \mathbf{v} - P\mathbf{v}$ = vector from shadow back to original position

In the sunlight model:
- $P$ projects **onto the floor**
- $I - P$ projects **along the floor** (in the direction of sunlight)
:::

---

## 3. Column Space and Null Space of Projections

Just like any matrix, a projection $P$ has a **column space** and a **null space**. But for projections, these spaces have special geometric meaning.

### 3.1 Two Languages for Column Space

Recall from Lecture 4 that we have **two ways** to describe subspaces:

::: tip
**Two Languages Framework (Review)**

| **Descriptive Language** | **Constructive Language** |
|---|---|
| **Equations**: Which vectors satisfy certain properties? | **Span**: Which vectors can be generated as linear combinations? |
| {$\mathbf{v}$: $\mathbf{v}$ satisfies conditions} | span{$\mathbf{v}_1, \ldots, \mathbf{v}_k$} |
| Easy to **verify** membership | Easy to **generate** members |
| Hard to **generate** members | Hard to **verify** membership |
:::

For a projection $P$, both languages give us useful perspectives on the column space.

#### Descriptive Language: $\operatorname{Col}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{v}\}$

::: proposition
**Proposition 3.1: Column Space in Descriptive Language**

For any projection $P$:

$$\operatorname{Col}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{v}\}$$

In words: The column space consists of **exactly those vectors that stay fixed** under the projection.

**Proof**: We prove both inclusions.

**($\subseteq$)**: Let $\mathbf{v} \in \operatorname{Col}(P)$.

Then $\mathbf{v} = P\mathbf{x}$ for some $\mathbf{x} \in \mathbb{R}^n$.

Compute:
$$P\mathbf{v} = P(P\mathbf{x}) = P^2\mathbf{x} = P\mathbf{x} = \mathbf{v}$$

So $\mathbf{v}$ satisfies $P\mathbf{v} = \mathbf{v}$. ✓

**($\supseteq$)**: Let $\mathbf{v}$ satisfy $P\mathbf{v} = \mathbf{v}$.

Then $\mathbf{v} = P\mathbf{v} \in \operatorname{Col}(P)$ by definition of column space. ✓

Therefore $\operatorname{Col}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{v}\}$. ∎
:::

::: remark
**Geometric Interpretation: The Floor**

In the sunlight-floor model, $\operatorname{Col}(P)$ is **the floor itself**.

- Vectors in $\operatorname{Col}(P)$ are those **already lying on the floor**
- When you project such a vector, it stays where it is (its shadow is itself)
- This is why $P\mathbf{v} = \mathbf{v}$ for $\mathbf{v} \in \operatorname{Col}(P)$
:::

#### Constructive Language: $\operatorname{Col}(P) = \operatorname{span}\{\text{columns of } P\}$

The standard definition from Lecture 4 still applies:

$$\operatorname{Col}(P) = \operatorname{span}\{P\mathbf{e}_1, P\mathbf{e}_2, \ldots, P\mathbf{e}_n\}$$

where $\mathbf{e}_1, \ldots, \mathbf{e}_n$ are the standard basis vectors.

**Both descriptions are equivalent** and useful in different contexts!

### 3.2 Two Languages for Null Space

Similarly, the null space of a projection has both descriptive and constructive descriptions.

#### Descriptive Language: $\operatorname{Null}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{0}\}$

This is the standard definition from Lecture 5:

$$\operatorname{Null}(P) = \{\mathbf{v} : P\mathbf{v} = \mathbf{0}\}$$

::: remark
**Geometric Interpretation: The Direction of Sunlight**

In the sunlight-floor model, $\operatorname{Null}(P)$ is **the direction of sunlight**.

- Vectors in $\operatorname{Null}(P)$ are those **pointing toward the sun**
- When you project such a vector onto the floor, you get the zero vector (no shadow)
- This is why $P\mathbf{v} = \mathbf{0}$ for $\mathbf{v} \in \operatorname{Null}(P)$
:::

::: attention
**Important**: Null space vectors record **linear dependence relations** (from Lecture 5), not "vectors that produce nothing."

If $\mathbf{x} \in \operatorname{Null}(P)$, it means the columns of $P$ satisfy a linear dependence relation with coefficients from $\mathbf{x}$.
:::

### 3.3 The Interchanging Property

::: proposition
**Proposition 3.2: Column Space and Null Space Interchange**

For any projection $P$:

1. $\operatorname{Col}(P) = \operatorname{Null}(I - P)$
2. $\operatorname{Null}(P) = \operatorname{Col}(I - P)$

**Proof of (1)**:

**($\subseteq$)**: Let $\mathbf{v} \in \operatorname{Col}(P)$.

Then $P\mathbf{v} = \mathbf{v}$ (by Proposition 3.1).

So $(I - P)\mathbf{v} = \mathbf{v} - P\mathbf{v} = \mathbf{v} - \mathbf{v} = \mathbf{0}$.

Thus $\mathbf{v} \in \operatorname{Null}(I - P)$. ✓

**($\supseteq$)**: Let $\mathbf{v} \in \operatorname{Null}(I - P)$.

Then $(I - P)\mathbf{v} = \mathbf{0}$, which means $\mathbf{v} - P\mathbf{v} = \mathbf{0}$.

So $\mathbf{v} = P\mathbf{v} \in \operatorname{Col}(P)$. ✓

**Proof of (2)** is similar and left as an exercise. ∎
:::

::: tip
**Summary: The Interchanging Property**

| For $P$ | For $I - P$ |
|---|---|
| $\operatorname{Col}(P)$ | $= \operatorname{Null}(I - P)$ |
| $\operatorname{Null}(P)$ | $= \operatorname{Col}(I - P)$ |

The projections $P$ and $I - P$ **interchange** their column spaces and null spaces!
:::

---

## 4. Column Space and Null Space Are Disjoint

One of the most important properties of projections is that their column space and null space are **completely separated**.

::: proposition
**Proposition 4.1: Column Space and Null Space Intersection**

For any projection $P$:

$$\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$$

**Proof**:

Let $\mathbf{v} \in \operatorname{Col}(P) \cap \operatorname{Null}(P)$.

We must show $\mathbf{v} = \mathbf{0}$.

Since $\mathbf{v} \in \operatorname{Col}(P)$:
$$P\mathbf{v} = \mathbf{v} \quad \text{(by Proposition 3.1)}$$

Since $\mathbf{v} \in \operatorname{Null}(P)$:
$$P\mathbf{v} = \mathbf{0} \quad \text{(by definition of null space)}$$

Combining these:
$$\mathbf{v} = P\mathbf{v} = \mathbf{0}$$

Therefore $\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$. ∎
:::

::: remark
**Geometric Interpretation**

In the sunlight-floor model:
- $\operatorname{Col}(P)$ = the floor
- $\operatorname{Null}(P)$ = the direction of sunlight

These two subspaces **only meet at the origin**.

- If a vector is on the floor AND pointing toward the sun, it must be the zero vector
- Non-zero vectors on the floor don't point toward the sun
- Non-zero vectors pointing toward the sun aren't on the floor
:::

::: attention
**Why This Matters**

This property $\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$ will be crucial in:
- **Lecture 8**: Proving that cross-filling decomposition of projections has special properties
- **Lecture 9**: Constructing projections with specified column space and null space

The separation between "floor" and "sunlight direction" is what makes projections so useful!
:::

---

## 5. Summary and Looking Ahead

### What We Learned Today

::: success
**Key Concepts**

1. **Linear Transformation**: $T(\lambda \mathbf{v} + \mathbf{w}) = \lambda T(\mathbf{v}) + T(\mathbf{w})$
   - Preserves linear structure
   - Represented by matrices: $T(\mathbf{v}) = A\mathbf{v}$

2. **Projection Operator**: $P^2 = P$
   - Geometric model: sunlight casting shadows on floor
   - $I - P$ is also a projection (complementary projection)

3. **Column Space of $P$**: Two languages
   - Descriptive: {$\mathbf{v}$ : $P\mathbf{v} = \mathbf{v}$} (vectors that stay fixed)
   - Constructive: span{columns of $P$}
   - Geometric: the floor

4. **Null Space of $P$**:
   - Descriptive: {$\mathbf{v}$ : $P\mathbf{v} = \mathbf{0}$} (vectors mapping to zero)
   - Geometric: the direction of sunlight

5. **Interchanging Property**: $\operatorname{Col}(P) = \operatorname{Null}(I - P)$ and $\operatorname{Null}(P) = \operatorname{Col}(I - P)$

6. **Disjoint Property**: $\operatorname{Col}(P) \cap \operatorname{Null}(P) = \{\mathbf{0}\}$
:::

### What's Next

In **Lecture 8**, we will discover something remarkable:

When you apply **cross-filling** to a projection $P$, you get:

$$P = UV$$

where $VU = I$ **automatically**! This leads to:

- Decomposition into rank-one projections: $P = R_1 + \cdots + R_m$
- The crucial identity: $\operatorname{rank}(P) = \operatorname{trace}(P)$ (true only for projections!)
- Compatible families of projections
- Preview of spectral decomposition

The $P^2 = P$ condition we introduced today will unlock a cascade of beautiful theorems.

---

## Exercises

::: problem
**Exercise 1: Verifying Projections**

Verify that the following matrices are projections (i.e., check $P^2 = P$):

(a) $P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$

(b) $P = \begin{pmatrix} 0.5 & 0.5 \\ 0.5 & 0.5 \end{pmatrix}$

(c) $P = \begin{pmatrix} 0.6 & 0.8 \\ 0.8 & 0.4 \end{pmatrix}$ (Hint: This is NOT a projection)

For (a) and (b), find $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.
:::

::: problem
**Exercise 2: Testing Linear Transformations**

Determine which of the following transformations $T: \mathbb{R}^2 \to \mathbb{R}^2$ are linear:

(a) $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x + 3y \\ x - y \end{pmatrix}$

(b) $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + 1 \\ y \end{pmatrix}$

(c) $T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} xy \\ 0 \end{pmatrix}$
:::

::: problem
**Exercise 3: Interchanging Property**

Let $P = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.

(a) Verify that $P$ is a projection.

(b) Find a basis for $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$.

(c) Compute $I - P$ and verify that:
   - $\operatorname{Col}(P) = \operatorname{Null}(I - P)$
   - $\operatorname{Null}(P) = \operatorname{Col}(I - P)$
:::

::: problem
**Exercise 4: Geometric Interpretation**

Consider the projection $P\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ 0 \end{pmatrix}$ in $\mathbb{R}^2$.

(a) In the sunlight-floor model:
   - What is the floor?
   - What is the direction of sunlight?

(b) Draw a picture showing how $P$ transforms vectors $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\begin{pmatrix} -1 \\ 3 \end{pmatrix}$.

(c) What does $I - P$ do geometrically?
:::
