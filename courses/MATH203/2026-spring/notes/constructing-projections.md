# Lecture 9: Constructing Projections

> **Topics**: §3.5 — Uniqueness of Projections, Construction Formula
> **Date**: Apr 20–23, 2026

---

## 🎯 Overview

In previous lectures, we learned:
- **Lecture 7**: Definition of projection ($P^2 = P$), geometric model, interchanging property ($\operatorname{Col}(P) = \operatorname{Null}(I-P)$)
- **Lecture 8**: Decomposition properties, $\operatorname{rank}(P) = \operatorname{trace}(P)$, compatible families

Today, we solve the **construction problem**: Given two subspaces $W$ and $S$, how do we construct a projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$?

**Key questions:**
1. Is such a projection unique?
2. What conditions on $W$ and $S$ guarantee existence?
3. How do we compute $P$ explicitly?

---

## 1. Uniqueness: Projection Determined by Column and Null Space

The first question: if a projection exists with given column and null spaces, is it unique?

::: proposition
**Theorem 1.1 (Uniqueness of Projection)**

If two projections $P$ and $Q$ satisfy:
$$\operatorname{Col}(P) = \operatorname{Col}(Q) \quad \text{and} \quad \operatorname{Null}(P) = \operatorname{Null}(Q)$$

then $P = Q$.
:::

**Proof:**

We prove $P = Q$ using the interchanging property from Lecture 7.

**Step 1**: Show $P = QP$.

Since $\operatorname{Col}(P) = \operatorname{Col}(Q)$, we can apply the interchanging property to $Q$:
$$\operatorname{Col}(Q) = \operatorname{Null}(I-Q)$$

Thus:
$$\operatorname{Col}(P) = \operatorname{Null}(I-Q)$$

This means $(I-Q)P = 0$, so:
$$P = QP$$

**Step 2**: Show $Q = QP$.

Since $\operatorname{Null}(P) = \operatorname{Null}(Q)$, we can apply the interchanging property to $P$:
$$\operatorname{Null}(P) = \operatorname{Col}(I-P)$$

Thus:
$$\operatorname{Null}(Q) = \operatorname{Col}(I-P)$$

This means $Q(I-P) = 0$, so:
$$Q = QP$$

**Step 3**: Combine.

From Steps 1 and 2:
$$P = QP = Q$$

Therefore $P = Q$. □

::: remark
**Why This Makes Sense: Two Subspaces Determine the Projection**

Recall from Lecture 7 that a projection $P$ splits the space into two complementary parts:
- $\operatorname{Col}(P)$ = vectors that are "projected onto"
- $\operatorname{Null}(P)$ = vectors that are "projected away" (killed)

The interchanging property showed these two subspaces are complementary: $\operatorname{Col}(P) \oplus \operatorname{Null}(P) = \mathbb{R}^n$ (every vector $\mathbf{v}$ has a unique decomposition $\mathbf{v} = P\mathbf{v} + (I-P)\mathbf{v}$).

**Theorem 1.1 says**: This decomposition is *unique*. If you specify which vectors to keep ($\operatorname{Col}(P)$) and which to kill ($\operatorname{Null}(P)$), there is exactly one projection doing this job.
:::

---

## 2. Bridge Theorem: Disjoint Subspaces and Null Space Equality

Before constructing projections, we need a key tool from Lecture 6.

::: proposition
**Theorem 2.1 (Lecture 6, Theorem 3)**

For matrices $A$ and $B$:
$$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \quad \Longleftrightarrow \quad \operatorname{Null}(AB) = \operatorname{Null}(B)$$
:::

::: remark
**Why We Need This Theorem**

This theorem bridges two perspectives:
- **Geometric**: The subspaces $\operatorname{Null}(A)$ and $\operatorname{Col}(B)$ are disjoint (intersect only at zero)
- **Algebraic**: The null space of the product $AB$ equals the null space of $B$ (no new dependencies created)

For projection construction, this translates a **geometric condition** (the desired column and null spaces must be disjoint) into an **algebraic condition** ($AB$ is invertible).
:::

We will not reprove this theorem (see Lecture 6, §1.4). Instead, we use it as a tool.

---

## 3. The Construction Problem

**Setup**: Given two subspaces $W$ and $S$ of $\mathbb{R}^n$, we want to construct a projection $P$ such that:
$$\operatorname{Col}(P) = W \quad \text{and} \quad \operatorname{Null}(P) = S$$

**Strategy**: Express the subspaces using matrices.

::: example
**Example 3.1: Two Subspaces in $\mathbb{R}^4$**

Let:
$$W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1\\0 \end{pmatrix}, \begin{pmatrix} 0\\1\\0\\1 \end{pmatrix}\right\}$$

$$S = \operatorname{span}\left\{\begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix}, \begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix}\right\}$$

**Observation**:
- $\dim(W) = 2$, $\dim(S) = 2$
- $\dim(W) + \dim(S) = 4 = n$ (dimensions add up to the ambient dimension)

**Question**: Do $W$ and $S$ intersect only at $\mathbf{0}$?

Check: Is there a nonzero vector in both spaces?

A vector in $W$ has the form $\begin{pmatrix} a\\b\\a\\b \end{pmatrix}$.

A vector in $S$ has the form $c\begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix} + d\begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix} = \begin{pmatrix} c+d\\c-d\\-c-d\\-c+d \end{pmatrix}$.

For these to be equal:
$$\begin{cases}
a = c+d \\
b = c-d \\
a = -c-d \\
b = -c+d
\end{cases}$$

From equations 1 and 3: $c+d = -c-d$, so $c+d = 0$.

From equations 2 and 4: $c-d = -c+d$, so $c-d = 0$.

Thus $c = d = 0$, giving $a = b = 0$.

Therefore $W \cap S = \{\mathbf{0}\}$ ✓
:::

**Key observation**: For a projection to exist with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$, we need:
1. $W \cap S = \{\mathbf{0}\}$ (disjoint)
2. $\dim(W) + \dim(S) = n$ (complementary)

These conditions ensure every vector $\mathbf{v} \in \mathbb{R}^n$ has a unique decomposition $\mathbf{v} = \mathbf{w} + \mathbf{s}$ with $\mathbf{w} \in W$ and $\mathbf{s} \in S$.

---

## 4. Matrix Representation and the AB Invertible Condition

**Step 1**: Represent the subspaces using matrices.

- **Column space** (constructive form): Write $W = \operatorname{Col}(B)$, where $B$ is an $n \times r$ matrix with columns forming a basis of $W$. Since the columns are linearly independent, $B$ has **full column rank** (rank $r = \dim(W)$).

- **Null space** (descriptive form): Write $S = \operatorname{Null}(A)$, where $A$ is a $k \times n$ matrix whose rows give the equations defining $S$. Since the equations are linearly independent, $A$ has **full row rank**.

From the complementary condition $\dim(W) + \dim(S) = n$, we have $\dim(S) = n - r$. Since $S = \operatorname{Null}(A)$:
$$\dim(\operatorname{Null}(A)) = n - \operatorname{rank}(A) = n - r$$

Therefore $\operatorname{rank}(A) = r$. If $A$ has full row rank, then $A$ must be $r \times n$.

**Summary**:
- $B$ is $n \times r$ with full column rank (rank $r$)
- $A$ is $r \times n$ with full row rank (rank $r$)
- $AB$ is $r \times r$ (square matrix)

::: example
**Example 3.1 (Continued): Matrix Representation**

For $W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1\\0 \end{pmatrix}, \begin{pmatrix} 0\\1\\0\\1 \end{pmatrix}\right\}$, we take:
$$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$$

For $S = \operatorname{span}\left\{\begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix}, \begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix}\right\}$, we need to find $A$ such that $\operatorname{Null}(A) = S$.

**Observation**: Check if $W$ and $S$ are orthogonal complements.

Compute inner products:
- $\begin{pmatrix} 1\\0\\1\\0 \end{pmatrix} \cdot \begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix} = 1 + 0 - 1 + 0 = 0$ ✓
- $\begin{pmatrix} 1\\0\\1\\0 \end{pmatrix} \cdot \begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix} = 1 + 0 - 1 + 0 = 0$ ✓
- $\begin{pmatrix} 0\\1\\0\\1 \end{pmatrix} \cdot \begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix} = 0 + 1 + 0 - 1 = 0$ ✓
- $\begin{pmatrix} 0\\1\\0\\1 \end{pmatrix} \cdot \begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix} = 0 - 1 + 0 + 1 = 0$ ✓

Therefore $S = W^\perp$. The rows of $A$ should be the basis vectors of $W^T$:
$$A = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \end{pmatrix}$$

**Verify**:
$$A \begin{pmatrix} 1\\1\\-1\\-1 \end{pmatrix} = \begin{pmatrix} 1 + 0 - 1 + 0 \\ 0 + 1 + 0 - 1 \end{pmatrix} = \begin{pmatrix} 0\\0 \end{pmatrix}$$ ✓

$$A \begin{pmatrix} 1\\-1\\-1\\1 \end{pmatrix} = \begin{pmatrix} 1 + 0 - 1 + 0 \\ 0 - 1 + 0 + 1 \end{pmatrix} = \begin{pmatrix} 0\\0 \end{pmatrix}$$ ✓

Therefore $\operatorname{Null}(A) \supseteq S$. Since $A$ is $2 \times 4$ with rank $2$, we have $\dim(\operatorname{Null}(A)) = 4 - 2 = 2 = \dim(S)$, so $\operatorname{Null}(A) = S$ ✓
:::

---

::: proposition
**Theorem 4.1 (Matrix Representation)**

Suppose $W$ and $S$ are subspaces of $\mathbb{R}^n$ with:
- $\dim(W) + \dim(S) = n$
- $W \cap S = \{\mathbf{0}\}$

Then we can write:
- $W = \operatorname{Col}(B)$ where $B$ is $n \times r$ with full column rank (rank $r = \dim(W)$)
- $S = \operatorname{Null}(A)$ where $A$ is $r \times n$ with full row rank (rank $r$)

The product $AB$ is an $r \times r$ square matrix.
:::

::: proposition
**Theorem 4.2 (AB Invertible Condition)**

With notation as in Theorem 4.1, the following are equivalent:
1. $W \cap S = \{\mathbf{0}\}$
2. $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$
3. $\operatorname{Null}(AB) = \operatorname{Null}(B) = \{\mathbf{0}\}$
4. $AB$ is invertible
:::

**Proof:**

The equivalence $(1) \Leftrightarrow (2)$ is immediate from $W = \operatorname{Col}(B)$ and $S = \operatorname{Null}(A)$.

The equivalence $(2) \Leftrightarrow (3)$ follows from **Theorem 2.1** (the bridge theorem from Lecture 6):
$$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \quad \Longleftrightarrow \quad \operatorname{Null}(AB) = \operatorname{Null}(B)$$

Since $B$ has full column rank, $\operatorname{Null}(B) = \{\mathbf{0}\}$. Thus:
$$\operatorname{Null}(AB) = \operatorname{Null}(B) = \{\mathbf{0}\}$$

The equivalence $(3) \Leftrightarrow (4)$: Since $AB$ is $r \times r$ (square), $AB$ is invertible if and only if $\operatorname{Null}(AB) = \{\mathbf{0}\}$. □

::: remark
**Interpretation: Geometric Condition Becomes Algebraic**

The **geometric condition** "$W$ and $S$ are disjoint" translates precisely to the **algebraic condition** "$AB$ is invertible."

This is the power of the bridge theorem: it converts a question about subspace intersection into a question about matrix invertibility, which we can compute!
:::

---

## 5. Construction Formula

Now we can state the main result.

::: proposition
**Theorem 5.1 (Construction of Projection)**

Suppose:
- $W = \operatorname{Col}(B)$ where $B$ is $n \times r$ with full column rank
- $S = \operatorname{Null}(A)$ where $A$ is $r \times n$ with full row rank
- $W \cap S = \{\mathbf{0}\}$ (equivalently, $AB$ is invertible)

Then the unique projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$ is:
$$P = B(AB)^{-1}A$$
:::

**Proof:**

We must verify three things:
1. $P^2 = P$ (projection property)
2. $\operatorname{Col}(P) = \operatorname{Col}(B) = W$
3. $\operatorname{Null}(P) = \operatorname{Null}(A) = S$

**Verification 1**: $P^2 = P$.

\begin{align*}
P^2 &= \left(B(AB)^{-1}A\right) \left(B(AB)^{-1}A\right) \\
&= B(AB)^{-1} (AB) (AB)^{-1} A \\
&= B(AB)^{-1} A \\
&= P \quad ✓
\end{align*}

**Verification 2**: $\operatorname{Col}(P) = \operatorname{Col}(B)$.

Since $P = B(AB)^{-1}A$:
$$\operatorname{Col}(P) = \operatorname{Col}(B(AB)^{-1}A) \subseteq \operatorname{Col}(B)$$

(Every column of $P$ is a linear combination of columns of $B$.)

To show the reverse inclusion, note that:
$$PB = B(AB)^{-1}A \cdot B = B(AB)^{-1}(AB) = B$$

Thus every column of $B$ is in $\operatorname{Col}(P)$, so $\operatorname{Col}(B) \subseteq \operatorname{Col}(P)$.

Therefore $\operatorname{Col}(P) = \operatorname{Col}(B)$ ✓

**Verification 3**: $\operatorname{Null}(P) = \operatorname{Null}(A)$.

**Direction 1**: $\operatorname{Null}(A) \subseteq \operatorname{Null}(P)$.

If $\mathbf{x} \in \operatorname{Null}(A)$, then $A\mathbf{x} = \mathbf{0}$. Thus:
$$P\mathbf{x} = B(AB)^{-1}A\mathbf{x} = B(AB)^{-1}\mathbf{0} = \mathbf{0}$$

So $\mathbf{x} \in \operatorname{Null}(P)$.

**Direction 2**: $\operatorname{Null}(P) \subseteq \operatorname{Null}(A)$.

If $\mathbf{x} \in \operatorname{Null}(P)$, then $P\mathbf{x} = \mathbf{0}$:
$$B(AB)^{-1}A\mathbf{x} = \mathbf{0}$$

Since $B$ has full column rank, $\operatorname{Null}(B) = \{\mathbf{0}\}$. Thus:
$$(AB)^{-1}A\mathbf{x} = \mathbf{0}$$

Multiplying both sides by $AB$:
$$A\mathbf{x} = \mathbf{0}$$

So $\mathbf{x} \in \operatorname{Null}(A)$.

Therefore $\operatorname{Null}(P) = \operatorname{Null}(A)$ ✓

**Conclusion**: $P = B(AB)^{-1}A$ is a projection with the desired column and null spaces. By Theorem 1.1 (uniqueness), it is the **unique** such projection. □

::: remark
**Understanding the Formula**

The formula $P = B(AB)^{-1}A$ has a beautiful structure:
- $A$ on the right: "Test" whether the input is in $\operatorname{Null}(A) = S$
- $(AB)^{-1}$ in the middle: Rescaling factor (needed to make $P^2 = P$)
- $B$ on the left: Output vectors in $\operatorname{Col}(B) = W$

The formula simultaneously projects onto $W$ and along $S$ (kills vectors in $S$).
:::

---

## 6. Examples

::: example
**Example 6.1: Projection in $\mathbb{R}^3$**

Let:
$$W = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1 \end{pmatrix}\right\}, \quad S = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\-1 \end{pmatrix}, \begin{pmatrix} 0\\1\\0 \end{pmatrix}\right\}$$

**Step 1**: Check dimensions.
- $\dim(W) = 1$, $\dim(S) = 2$
- $\dim(W) + \dim(S) = 3$ ✓

**Step 2**: Check disjointness.

A vector in $W$ has the form $\begin{pmatrix} a\\0\\a \end{pmatrix}$.

A vector in $S$ has the form $b\begin{pmatrix} 1\\0\\-1 \end{pmatrix} + c\begin{pmatrix} 0\\1\\0 \end{pmatrix} = \begin{pmatrix} b\\c\\-b \end{pmatrix}$.

For these to be equal: $a = b$, $0 = c$, $a = -b$. Thus $a = -a$, so $a = 0$.

Therefore $W \cap S = \{\mathbf{0}\}$ ✓

**Step 3**: Construct $B$ and $A$.

$$B = \begin{pmatrix} 1\\0\\1 \end{pmatrix} \quad \text{(column basis for } W\text{)}$$

For $S = \operatorname{Null}(A)$, we need $A$ to be $1 \times 3$ (since $r = \dim(W) = 1$) with $\operatorname{Null}(A) = S$.

The vectors in $S$ satisfy $x_1 + x_3 = 0$ (check: $(1, 0, -1)$ gives $1 + (-1) = 0$ ✓, $(0, 1, 0)$ gives $0 + 0 = 0$ ✓).

Thus:
$$A = \begin{pmatrix} 1 & 0 & 1 \end{pmatrix}$$

**Step 4**: Compute $AB$.

$$AB = \begin{pmatrix} 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1\\0\\1 \end{pmatrix} = 2$$

Since $AB = 2 \neq 0$, it is invertible with $(AB)^{-1} = \frac{1}{2}$.

**Step 5**: Compute $P = B(AB)^{-1}A$.

$$P = \begin{pmatrix} 1\\0\\1 \end{pmatrix} \cdot \frac{1}{2} \cdot \begin{pmatrix} 1 & 0 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$$

**Step 6**: Verify.

$$P^2 = \frac{1}{4}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix} = \frac{1}{4}\begin{pmatrix} 2 & 0 & 2 \\ 0 & 0 & 0 \\ 2 & 0 & 2 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix} = P \quad ✓$$

$$\operatorname{Col}(P) = \operatorname{span}\left\{\begin{pmatrix} 1\\0\\1 \end{pmatrix}\right\} = W \quad ✓$$

Check $\operatorname{Null}(P)$:
$$P\begin{pmatrix} 1\\0\\-1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1\\0\\-1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 0\\0\\0 \end{pmatrix} = \mathbf{0} \quad ✓$$

$$P\begin{pmatrix} 0\\1\\0 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0\\1\\0 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 0\\0\\0 \end{pmatrix} = \mathbf{0} \quad ✓$$

Therefore $\operatorname{Null}(P) \supseteq S$. Since $\dim(\operatorname{Null}(P)) = 3 - \operatorname{rank}(P) = 3 - 1 = 2 = \dim(S)$, we have $\operatorname{Null}(P) = S$ ✓
:::

::: example
**Example 6.2: Identity as Projection**

Take $W = \mathbb{R}^n$ and $S = \{\mathbf{0}\}$.

Then:
$$B = I_n \quad \text{(columns form basis of } \mathbb{R}^n\text{)}$$
$$A = I_n \quad \text{(}\operatorname{Null}(I_n) = \{\mathbf{0}\}\text{)}$$

$$AB = I_n \cdot I_n = I_n$$

$$P = I_n (I_n)^{-1} I_n = I_n$$

Indeed, the identity is the projection onto $\mathbb{R}^n$ along $\{\mathbf{0}\}$ ✓
:::

---

## 7. Summary

::: tip
**What We Learned**

**1. Uniqueness** (§1):
- A projection is uniquely determined by its column space and null space
- If $\operatorname{Col}(P) = \operatorname{Col}(Q)$ and $\operatorname{Null}(P) = \operatorname{Null}(Q)$, then $P = Q$

**2. Bridge Theorem** (§2):
- $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \Longleftrightarrow \operatorname{Null}(AB) = \operatorname{Null}(B)$
- Connects geometric disjointness to algebraic properties

**3. Construction Formula** (§3–5):
- Given $W = \operatorname{Col}(B)$ and $S = \operatorname{Null}(A)$ with $W \cap S = \{\mathbf{0}\}$
- The projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$ is:
$$P = B(AB)^{-1}A$$
- The condition $W \cap S = \{\mathbf{0}\}$ is equivalent to $AB$ being invertible

**4. Verification** (§5):
- $P^2 = P$ follows from $(AB)(AB)^{-1} = I$
- $\operatorname{Col}(P) = \operatorname{Col}(B)$ follows from $PB = B$
- $\operatorname{Null}(P) = \operatorname{Null}(A)$ follows from the full-rank properties of $A$ and $B$

**Key Insight**: The construction formula $P = B(AB)^{-1}A$ provides an explicit, computable way to construct any projection from its desired column and null spaces.
:::

---

## Exercises

::: problem
**Exercise 9.1**

Find the projection $P$ onto $W$ along $S$ where:
$$W = \operatorname{span}\left\{\begin{pmatrix} 1\\1\\0 \end{pmatrix}\right\}, \quad S = \operatorname{span}\left\{\begin{pmatrix} 1\\-1\\0 \end{pmatrix}, \begin{pmatrix} 0\\0\\1 \end{pmatrix}\right\}$$

Verify that $P^2 = P$, $\operatorname{Col}(P) = W$, and $\operatorname{Null}(P) = S$.
:::

::: problem
**Exercise 9.2**

Let $P$ be the projection onto the $xy$-plane in $\mathbb{R}^3$.
(a) What are $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$?
(b) Find matrices $B$ and $A$ such that $\operatorname{Col}(B) = \operatorname{Col}(P)$ and $\operatorname{Null}(A) = \operatorname{Null}(P)$.
(c) Use the construction formula to compute $P$.
:::

::: problem
**Exercise 9.3**

Suppose $B$ is $n \times r$ with full column rank, and $A$ is $r \times n$ with full row rank.
(a) Show that if $AB = I_r$, then $P = BA$ is a projection.
(b) What are $\operatorname{Col}(P)$ and $\operatorname{Null}(P)$?
(c) How does this relate to Theorem 5.1?

*Hint*: This appeared in Lecture 8. Compare with the construction formula.
:::

::: problem
**Exercise 9.4**

True or false: If $W$ and $S$ are subspaces with $\dim(W) + \dim(S) = n$, then there always exists a projection $P$ with $\operatorname{Col}(P) = W$ and $\operatorname{Null}(P) = S$.

Justify your answer. If false, give a counterexample. If true, prove it.
:::
