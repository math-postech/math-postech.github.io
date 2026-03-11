# Lecture 6: Four Fundamental Subspaces

> **Topics**: §2.3–2.4 — Transpose, Orthogonality Relationships, Four Fundamental Subspaces
> **Date**: Mar 23–26, 2026

---

## 🎯 Overview

In previous lectures, we learned:
- **Lecture 4**: Subspaces have two languages (descriptive ↔ constructive)
- **Lecture 5**: Solving equations bridges the two languages

Today, we discover deeper relationships between subspaces:
1. When do combined operations $AB$ preserve null spaces?
2. What happens when we "flip" a production table (transpose)?
3. How do the four fundamental subspaces of a matrix relate to each other?

---

## 1. Subspaces of Matrix Products

### 1.1 Setup: Combining Two Transformations

Consider two matrices that we compose:

::: example
**Example: Two Matrices $B$ and $A$**

$$B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix} \quad (3 \times 3 \text{ matrix})$$

$$A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix} \quad (2 \times 3 \text{ matrix})$$

**Product** $AB$:

$$AB = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 5 \\ 1 & 0 & 2 \end{pmatrix}$$
:::

**Question**: How do the column spaces and null spaces of $A$, $B$, and $AB$ relate?

---

### 1.2 Theorem 1: Column Space of Product is Contained

::: proposition
**Theorem 1: $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$**

The column space of $AB$ is always contained in the column space of $A$.
:::

**Proof:**

Write $B$ with columns $\mathbf{b}_1, \ldots, \mathbf{b}_n$:
$$B = \begin{pmatrix} | & | & & | \\ \mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_n \\ | & | & & | \end{pmatrix}$$

Then $AB$ has columns:
$$AB = \begin{pmatrix} | & | & & | \\ A\mathbf{b}_1 & A\mathbf{b}_2 & \cdots & A\mathbf{b}_n \\ | & | & & | \end{pmatrix}$$

**Key observation**: Each column of $AB$ is $A\mathbf{b}_j$, which is a **linear combination of the columns of $A$** (with coefficients from $\mathbf{b}_j$).

Therefore, every column of $AB$ lies in $\operatorname{Col}(A)$.

Since $\operatorname{Col}(AB)$ is spanned by the columns of $AB$, we have:
$$\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$$ □

::: remark
**Why this makes sense: Columns of $AB$ are linear combinations of columns of $A$**

Recall from Lecture 1: the $j$-th column of $AB$ equals $A$ times the $j$-th column of $B$:
$$(AB)_j = A \mathbf{b}_j$$

But $A\mathbf{b}_j$ is precisely a linear combination of $A$'s columns, with coefficients from $\mathbf{b}_j$.

**Example**: If $\mathbf{b}_j = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ and $A$ has columns $\mathbf{a}_1, \mathbf{a}_2, \mathbf{a}_3$, then:
$$A\mathbf{b}_j = 2\mathbf{a}_1 - 1\mathbf{a}_2 + 3\mathbf{a}_3 \in \operatorname{Col}(A)$$

So every column of $AB$ is built from $A$'s columns!
:::

**Verification with our example:**

$$\operatorname{Col}(AB) = \operatorname{span}\left\{\begin{pmatrix} 2\\1 \end{pmatrix}, \begin{pmatrix} 1\\0 \end{pmatrix}, \begin{pmatrix} 5\\2 \end{pmatrix}\right\}$$

Note that $\begin{pmatrix} 5\\2 \end{pmatrix} = 2\begin{pmatrix} 2\\1 \end{pmatrix} + 1\begin{pmatrix} 1\\0 \end{pmatrix}$, so actually:
$$\operatorname{Col}(AB) = \operatorname{span}\left\{\begin{pmatrix} 2\\1 \end{pmatrix}, \begin{pmatrix} 1\\0 \end{pmatrix}\right\} = \mathbb{R}^2$$

And indeed, $\operatorname{Col}(A) = \operatorname{span}\left\{\begin{pmatrix} 2\\1 \end{pmatrix}, \begin{pmatrix} 1\\0 \end{pmatrix}, \begin{pmatrix} 0\\0 \end{pmatrix}\right\} = \mathbb{R}^2$.

So $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$ ✓ (In this case, equality holds!)

---

### 1.3 Theorem 2: Null Space Inclusion

::: proposition
**Theorem 2: $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$**

The null space of $B$ is always contained in the null space of $AB$.
:::

**Proof:**

By definition:
- $\operatorname{Null}(B) = \{\mathbf{x} : B\mathbf{x} = \mathbf{0}\}$
- $\operatorname{Null}(AB) = \{\mathbf{x} : (AB)\mathbf{x} = \mathbf{0}\}$

If $\mathbf{x} \in \operatorname{Null}(B)$, then $B\mathbf{x} = \mathbf{0}$. Thus:
$$(AB)\mathbf{x} = A(B\mathbf{x}) = A(\mathbf{0}) = \mathbf{0}$$

Therefore $\mathbf{x} \in \operatorname{Null}(AB)$, proving $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$. □

::: remark
**Why this makes sense: Linear dependence relations persist**

Recall from Lecture 5: a vector $\mathbf{x} \in \operatorname{Null}(B)$ **records a linear dependence relation** among the columns of $B$.

For example, if $\mathbf{x} = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} \in \operatorname{Null}(B)$, this says:
$$2\mathbf{b}_1 - 1\mathbf{b}_2 + 0\mathbf{b}_3 = \mathbf{0}$$

Now, what happens when we apply $A$ to this relation?
$$A(2\mathbf{b}_1 - 1\mathbf{b}_2) = 2(A\mathbf{b}_1) - 1(A\mathbf{b}_2) = 2(AB)_1 - 1(AB)_2$$

Since the original columns of $B$ had a linear dependence, the transformed columns of $AB$ inherit the **same** linear dependence!

**General principle**: Applying $A$ preserves all linear relations that already existed in $B$'s columns.

Could there be **new** linear dependencies in $AB$ that weren't in $B$? That's the next theorem...
:::

**Verification with our example:**

$$\operatorname{Null}(B) = \left\{\mathbf{x} : \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}\mathbf{x} = \mathbf{0}\right\}$$

Solving (by inspection or cross-filling):
$$\operatorname{Null}(B) = \operatorname{span}\left\{\begin{pmatrix} -2\\-1\\1 \end{pmatrix}\right\}$$

This says: $-2(\text{原料1}) - 1(\text{原料2}) + 1(\text{原料3}) = \mathbf{0}$ in all three semi-products.

Check: Does this also work for $AB$?
$$AB\begin{pmatrix} -2\\-1\\1 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 5 \\ 1 & 0 & 2 \end{pmatrix}\begin{pmatrix} -2\\-1\\1 \end{pmatrix} = \begin{pmatrix} 0\\0 \end{pmatrix}$$ ✓

So $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$ is confirmed!

**Question**: Is $\operatorname{Null}(AB)$ strictly larger? Let's find out:

$$\operatorname{Null}(AB) = \left\{\mathbf{x} : \begin{pmatrix} 2 & 1 & 5 \\ 1 & 0 & 2 \end{pmatrix}\mathbf{x} = \mathbf{0}\right\} = \operatorname{span}\left\{\begin{pmatrix} -2\\-1\\1 \end{pmatrix}\right\}$$

In this example, $\operatorname{Null}(AB) = \operatorname{Null}(B)$ (equality!). Why?

---

### 1.4 Theorem 3: When Are the Null Spaces Equal?

The key question: **When is $\operatorname{Null}(AB) = \operatorname{Null}(B)$ exactly (no extra "victims")?**

::: proposition
**Theorem 3: The Equivalence**

$$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \quad \Longleftrightarrow \quad \operatorname{Null}(AB) = \operatorname{Null}(B)$$
:::

This theorem has two directions. Let's prove both.

**Direction (a): $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \implies \operatorname{Null}(AB) = \operatorname{Null}(B)$**

*Proof:*

From Theorem 2, we already know $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$.

To show equality, we need $\operatorname{Null}(AB) \subseteq \operatorname{Null}(B)$.

Take any $\mathbf{x} \in \operatorname{Null}(AB)$. Then $(AB)\mathbf{x} = \mathbf{0}$, so $A(B\mathbf{x}) = \mathbf{0}$.

This means $B\mathbf{x} \in \operatorname{Null}(A)$.

At the same time, $B\mathbf{x} \in \operatorname{Col}(B)$ (by definition of column space).

Hence, $B\mathbf{x} \in \operatorname{Null}(A) \cap \operatorname{Col}(B)$.

By assumption, $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$. Thus, $B\mathbf{x} = \mathbf{0}$.

Therefore, $\mathbf{x} \in \operatorname{Null}(B)$.

This proves $\operatorname{Null}(AB) \subseteq \operatorname{Null}(B)$. Combined with Theorem 2, we have $\operatorname{Null}(AB) = \operatorname{Null}(B)$. □

**Direction (b): $\operatorname{Null}(AB) = \operatorname{Null}(B) \implies \operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$**

*Proof:*

Assume $\operatorname{Null}(AB) = \operatorname{Null}(B)$.

We want to show $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$.

Suppose $\mathbf{v} \in \operatorname{Null}(A) \cap \operatorname{Col}(B)$.

Then $\mathbf{v} \in \operatorname{Null}(A)$, so $A\mathbf{v} = \mathbf{0}$.

Also, $\mathbf{v} \in \operatorname{Col}(B)$, so $\mathbf{v} = B\mathbf{x}$ for some $\mathbf{x}$.

Combining these:
$$A(B\mathbf{x}) = \mathbf{0} \quad \Rightarrow \quad (AB)\mathbf{x} = \mathbf{0}$$

Thus, $\mathbf{x} \in \operatorname{Null}(AB)$. By hypothesis, $\operatorname{Null}(AB) = \operatorname{Null}(B)$, so $\mathbf{x} \in \operatorname{Null}(B)$.

Therefore, $B\mathbf{x} = \mathbf{0}$, which implies $\mathbf{v} = \mathbf{0}$.

Hence, $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$. □

---

### 1.5 Understanding the Equivalence: Two Perspectives

The equivalence $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \Longleftrightarrow \operatorname{Null}(AB) = \operatorname{Null}(B)$ has a beautiful geometric interpretation.

::: remark
**Two Ways to Think About It**

**Perspective 1: Domain of $B$ (where $\mathbf{x}$ lives)**

$$\operatorname{Null}(AB) = \operatorname{Null}(B)$$

**Meaning**: All linear dependence relations among columns of $AB$ were **already present** in columns of $B$. The transformation $A$ didn't create any **new** dependencies.

**Equivalently**: If $\mathbf{x}$ satisfies $(AB)\mathbf{x} = \mathbf{0}$, then it already satisfied $B\mathbf{x} = \mathbf{0}$.

---

**Perspective 2: Codomain of $B$ (where $B\mathbf{x}$ lives)**

$$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$$

**Meaning**: Among all vectors that $B$ can produce (i.e., $\operatorname{Col}(B)$), **none** of the nonzero ones land in $\operatorname{Null}(A)$.

**Equivalently**: If $\mathbf{v} = B\mathbf{x}$ for some $\mathbf{x}$ and $A\mathbf{v} = \mathbf{0}$, then $\mathbf{v} = \mathbf{0}$ (which forces $B\mathbf{x} = \mathbf{0}$).

---

**Why are these equivalent?**

- **If** $\operatorname{Null}(AB)$ is strictly larger than $\operatorname{Null}(B)$, there exists $\mathbf{x}$ with $B\mathbf{x} \neq \mathbf{0}$ but $(AB)\mathbf{x} = \mathbf{0}$
- This means $\mathbf{v} = B\mathbf{x}$ is a **nonzero** vector in $\operatorname{Col}(B)$ that satisfies $A\mathbf{v} = \mathbf{0}$
- So $\mathbf{v} \in \operatorname{Null}(A) \cap \operatorname{Col}(B)$ with $\mathbf{v} \neq \mathbf{0}$

**Conversely**:
- **If** $\operatorname{Null}(A) \cap \operatorname{Col}(B)$ contains a nonzero vector $\mathbf{v}$, write $\mathbf{v} = B\mathbf{x}$ for some $\mathbf{x}$
- Then $(AB)\mathbf{x} = A(B\mathbf{x}) = A\mathbf{v} = \mathbf{0}$ but $B\mathbf{x} = \mathbf{v} \neq \mathbf{0}$
- So $\mathbf{x} \in \operatorname{Null}(AB)$ but $\mathbf{x} \notin \operatorname{Null}(B)$

**Conclusion**: The two conditions detect the same phenomenon from different viewpoints!
:::

---

### 1.6 Summary of Matrix Product Subspaces

::: tip
**Three Key Relationships**

1. **$\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$**
   - The output of $AB$ is limited by what $A$ can produce

2. **$\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$**
   - Anything $B$ kills, $AB$ also kills

3. **$\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \Longleftrightarrow \operatorname{Null}(AB) = \operatorname{Null}(B)$**
   - No "second-round killing" ⟺ Judge $A$ spares all of $B$'s living survivors
:::

---

## 2. Transpose: Flipping the Production Table

### 2.1 What is Transpose?

In our ingredient table framework, a matrix $A$ represents:
- **Rows** = raw materials (inputs)
- **Columns** = products (outputs)
- **Entry $A_{ij}$** = how much material $i$ is needed for product $j$

**What if we flip our perspective?** Instead of asking "how much material does each product need?", we ask "how much of each product uses a given material?"

This is the **transpose**.

::: example
**Example: Flipping the Ingredient Table**

Original table $A$:

$$A = \begin{array}{c|ccc}
 & \text{🥛} & \text{☕} & \text{🍵} \\
\hline
\text{🍃} & 0 & 0 & 2 \\
\text{🍋} & 0 & 0 & 1 \\
\text{🫘} & 0 & 2 & 4 \\
\text{🐄} & 1 & 0 & 1
\end{array} = \begin{pmatrix} 0 & 0 & 2 \\ 0 & 0 & 1 \\ 0 & 2 & 4 \\ 1 & 0 & 1 \end{pmatrix}$$

**Interpretation**: Rows = materials, Columns = products
- Column 🥛: needs (0🍃, 0🍋, 0🫘, 1🐄)
- Row 🍃: used in products with amounts (0, 0, 2)

**Flipped table** $A^T$ (transpose):

$$A^T = \begin{array}{c|cccc}
 & \text{🍃} & \text{🍋} & \text{🫘} & \text{🐄} \\
\hline
\text{🥛} & 0 & 0 & 0 & 1 \\
\text{☕} & 0 & 0 & 2 & 0 \\
\text{🍵} & 2 & 1 & 4 & 1
\end{array} = \begin{pmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 2 & 0 \\ 2 & 1 & 4 & 1 \end{pmatrix}$$

**New interpretation**: Rows = products, Columns = materials
- Row 🥛: contains amounts (0🍃, 0🍋, 0🫘, 1🐄) from each material
- Column 🍃: distributed to products with amounts (0, 0, 2)

**Notice**: The rows of $A$ become the columns of $A^T$, and vice versa.
:::

**Formal definition:**

::: proposition
**Definition: Transpose**

For an $m \times n$ matrix $A$, its **transpose** $A^T$ is the $n \times m$ matrix obtained by:
$$(A^T)_{ij} = A_{ji}$$

The rows of $A$ become the columns of $A^T$, and the columns of $A$ become the rows of $A^T$.
:::

---

### 2.2 Properties of Transpose

::: proposition
**Three Key Properties of Transpose**

1. **$(AB)^T = B^T A^T$** (order reverses)
2. **$(A^{-1})^T = (A^T)^{-1}$** (transpose and inverse commute)
3. **$(A + B)^T = A^T + B^T$** (transpose is linear)
:::

**Proof of Property 1: $(AB)^T = B^T A^T$**

We verify entry-by-entry. The $(i,j)$-entry of $(AB)^T$ is:
$$(AB)^T_{ij} = (AB)_{ji} = \sum_k A_{jk} B_{ki}$$

The $(i,j)$-entry of $B^T A^T$ is:
$$(B^T A^T)_{ij} = \sum_k (B^T)_{ik} (A^T)_{kj} = \sum_k B_{ki} A_{jk}$$

Since multiplication of numbers is commutative, $\sum_k A_{jk} B_{ki} = \sum_k B_{ki} A_{jk}$. □

::: remark
**Why the order reverses (production table view)**

In a two-stage production $A \cdot B$:
- $B$: raw materials → semi-products
- $A$: semi-products → final products

From the **raw materials' perspective** ($B^T$): Each material distributes to various semi-products.

From the **final products' perspective** ($A^T$): Each product sources from various semi-products.

To trace backwards from final products to raw materials, we must:
1. First follow $A^T$: final product → semi-products it uses
2. Then follow $B^T$: semi-products → raw materials they need

Hence $(AB)^T = B^T A^T$ — the order flips!
:::

**Proof of Property 2: $(A^{-1})^T = (A^T)^{-1}$** (assuming $A$ is invertible)

We show that $A^T \cdot (A^{-1})^T = I$.

Starting from $A \cdot A^{-1} = I$, transpose both sides:
$$(A \cdot A^{-1})^T = I^T = I$$

Using Property 1:
$$(A^{-1})^T \cdot A^T = I$$

Similarly, $(A^{-1} \cdot A)^T = I$ gives $A^T \cdot (A^{-1})^T = I$.

Therefore, $(A^{-1})^T$ is the inverse of $A^T$, so $(A^{-1})^T = (A^T)^{-1}$. □

**Proof of Property 3: $(A + B)^T = A^T + B^T$**

Entry-by-entry:
$$(A + B)^T_{ij} = (A + B)_{ji} = A_{ji} + B_{ji} = (A^T)_{ij} + (B^T)_{ij} = (A^T + B^T)_{ij}$$ □

---

### 2.3 Symmetric Matrices

::: proposition
**Definition: Symmetric Matrix**

A matrix $S$ is **symmetric** if $S^T = S$.

**Meaning**: The ingredient table looks the same when flipped!
:::

::: example
**Example: A Symmetric Matrix**

$$S = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix}$$

Flipping rows ↔ columns gives the same matrix:

$$S^T = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix} = S$$
:::

::: proposition
**Theorem: $AA^T$ and $A^T A$ are Always Symmetric**

For any matrix $A$:
1. $AA^T$ is symmetric
2. $A^T A$ is symmetric
:::

**Proof:**

Using property $(AB)^T = B^T A^T$:

$$(AA^T)^T = (A^T)^T A^T = A A^T$$

So $AA^T$ is symmetric.

Similarly:
$$(A^T A)^T = A^T (A^T)^T = A^T A$$

So $A^T A$ is symmetric. □

::: example
**Verification with a Concrete Matrix**

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}, \quad A^T = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix}$$

**Compute $AA^T$:**

$$AA^T = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix} = \begin{pmatrix} 5 & 11 & 17 \\ 11 & 25 & 39 \\ 17 & 39 & 61 \end{pmatrix}$$

Check symmetry: $(AA^T)^T = AA^T$ ✓ (matrix is symmetric about diagonal)

**Compute $A^T A$:**

$$A^T A = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} = \begin{pmatrix} 35 & 44 \\ 44 & 56 \end{pmatrix}$$

Check symmetry: $(A^T A)^T = A^T A$ ✓
:::

---

::: remark
**Change of Perspective**

So far, we have used the ingredient table metaphor to understand transpose: flipping the table swaps the roles of materials and products.

**From this point forward**, we work with abstract matrices $A$, $B$, $C$ without referring back to coffee shops. The key properties we've established ($(AB)^T = B^T A^T$, symmetry of $AA^T$, etc.) apply to all matrices, and we can now use them to discover deeper relationships.

The next section reveals a beautiful geometric relationship: **orthogonality** between certain subspaces.
:::

---

## 3. Orthogonality Relationships of the Four Fundamental Subspaces

### 3.1 The Four Fundamental Subspaces

For any $m \times n$ matrix $A$, there are **four fundamental subspaces**:

| Subspace | Definition | Lives in | Dimension |
|----------|------------|----------|-----------|
| $\operatorname{Col}(A)$ | $\{A\mathbf{x} : \mathbf{x} \in \mathbb{R}^n\}$ | $\mathbb{R}^m$ (codomain) | $\operatorname{rank}(A)$ |
| $\operatorname{Null}(A)$ | $\{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$ | $\mathbb{R}^n$ (domain) | $n - \operatorname{rank}(A)$ |
| $\operatorname{Col}(A^T)$ | $\{A^T \mathbf{y} : \mathbf{y} \in \mathbb{R}^m\}$ | $\mathbb{R}^n$ (domain) | $\operatorname{rank}(A^T) = \operatorname{rank}(A)$ |
| $\operatorname{Null}(A^T)$ | $\{\mathbf{y} : A^T \mathbf{y} = \mathbf{0}\}$ | $\mathbb{R}^m$ (codomain) | $m - \operatorname{rank}(A)$ |

**Key observations:**

1. **Two subspaces in $\mathbb{R}^n$ (domain)**:
   - $\operatorname{Null}(A)$ (descriptive: solutions to $A\mathbf{x} = \mathbf{0}$)
   - $\operatorname{Col}(A^T)$ (constructive: linear combinations of rows of $A$)

2. **Two subspaces in $\mathbb{R}^m$ (codomain)**:
   - $\operatorname{Col}(A)$ (constructive: linear combinations of columns of $A$)
   - $\operatorname{Null}(A^T)$ (descriptive: solutions to $A^T \mathbf{y} = \mathbf{0}$)

**Today's main discovery**: These pairs are **orthogonal** to each other!

---

### 3.2 Theorem: $\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$

::: proposition
**Theorem 4: $\operatorname{Col}(A^T)$ is Orthogonal to $\operatorname{Null}(A)$**

Every vector in $\operatorname{Col}(A^T)$ is orthogonal to every vector in $\operatorname{Null}(A)$.

Precisely: For any $\mathbf{x} \in \operatorname{Null}(A)$ and any $\mathbf{y} \in \operatorname{Col}(A^T)$,
$$\mathbf{y}^T \mathbf{x} = 0$$
:::

**Proof (Inner Product View):**

Let $\mathbf{x} \in \operatorname{Null}(A)$ and $\mathbf{y} \in \operatorname{Col}(A^T)$.

By definition:
- $\mathbf{x} \in \operatorname{Null}(A)$ means $A\mathbf{x} = \mathbf{0}$
- $\mathbf{y} \in \operatorname{Col}(A^T)$ means $\mathbf{y} = A^T \mathbf{z}$ for some $\mathbf{z} \in \mathbb{R}^m$

Compute the inner product:
$$\mathbf{y}^T \mathbf{x} = (A^T \mathbf{z})^T \mathbf{x} = \mathbf{z}^T (A^T)^T \mathbf{x} = \mathbf{z}^T A \mathbf{x}$$

Since $\mathbf{x} \in \operatorname{Null}(A)$, we have $A\mathbf{x} = \mathbf{0}$. Therefore:
$$\mathbf{z}^T A \mathbf{x} = \mathbf{z}^T \mathbf{0} = 0$$

Thus, $\mathbf{y}^T \mathbf{x} = 0$, proving orthogonality. □

**Proof (Geometric View: Rows as Normal Vectors):**

The equation $A\mathbf{x} = \mathbf{0}$ can be written row-by-row:
$$\begin{pmatrix} \text{—} \mathbf{r}_1^T \text{—} \\ \text{—} \mathbf{r}_2^T \text{—} \\ \vdots \\ \text{—} \mathbf{r}_m^T \text{—} \end{pmatrix} \mathbf{x} = \begin{pmatrix} \mathbf{r}_1^T \mathbf{x} \\ \mathbf{r}_2^T \mathbf{x} \\ \vdots \\ \mathbf{r}_m^T \mathbf{x} \end{pmatrix} = \mathbf{0}$$

This means:
$$\mathbf{r}_1^T \mathbf{x} = 0, \quad \mathbf{r}_2^T \mathbf{x} = 0, \quad \ldots, \quad \mathbf{r}_m^T \mathbf{x} = 0$$

**Interpretation**: Each row $\mathbf{r}_i$ of $A$ is **perpendicular** to every vector $\mathbf{x} \in \operatorname{Null}(A)$.

**But** the rows of $A$ are exactly the columns of $A^T$!

Therefore, $\operatorname{Col}(A^T) = \operatorname{span}\{\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_m\}$ consists of vectors perpendicular to $\operatorname{Null}(A)$. □

::: example
**Concrete Example**

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$$

**Find $\operatorname{Null}(A)$:**

$$A\mathbf{x} = \mathbf{0} \implies \begin{cases} x_1 + 2x_2 + 3x_3 = 0 \\ 2x_1 + 4x_2 + 6x_3 = 0 \end{cases}$$

The second equation is $2 \times$ the first, so we have one independent equation:
$$x_1 + 2x_2 + 3x_3 = 0$$

Basis for $\operatorname{Null}(A)$:
$$\operatorname{Null}(A) = \operatorname{span}\left\{\begin{pmatrix} -2\\1\\0 \end{pmatrix}, \begin{pmatrix} -3\\0\\1 \end{pmatrix}\right\}$$

**Find $\operatorname{Col}(A^T)$:**

$$A^T = \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{pmatrix}$$

$$\operatorname{Col}(A^T) = \operatorname{span}\left\{\begin{pmatrix} 1\\2\\3 \end{pmatrix}, \begin{pmatrix} 2\\4\\6 \end{pmatrix}\right\} = \operatorname{span}\left\{\begin{pmatrix} 1\\2\\3 \end{pmatrix}\right\}$$

(The second vector is $2 \times$ the first.)

**Check orthogonality:**

$$\begin{pmatrix} 1\\2\\3 \end{pmatrix}^T \begin{pmatrix} -2\\1\\0 \end{pmatrix} = -2 + 2 + 0 = 0 \quad ✓$$

$$\begin{pmatrix} 1\\2\\3 \end{pmatrix}^T \begin{pmatrix} -3\\0\\1 \end{pmatrix} = -3 + 0 + 3 = 0 \quad ✓$$

Indeed, $\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$!
:::

---

### 3.3 Theorem: $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$

::: proposition
**Theorem 5: $\operatorname{Col}(A)$ is Orthogonal to $\operatorname{Null}(A^T)$**

Every vector in $\operatorname{Col}(A)$ is orthogonal to every vector in $\operatorname{Null}(A^T)$.

Precisely: For any $\mathbf{x} \in \operatorname{Col}(A)$ and any $\mathbf{y} \in \operatorname{Null}(A^T)$,
$$\mathbf{y}^T \mathbf{x} = 0$$
:::

**Proof:**

Let $\mathbf{y} \in \operatorname{Null}(A^T)$ and $\mathbf{x} \in \operatorname{Col}(A)$.

By definition:
- $\mathbf{y} \in \operatorname{Null}(A^T)$ means $A^T \mathbf{y} = \mathbf{0}$
- $\mathbf{x} \in \operatorname{Col}(A)$ means $\mathbf{x} = A\mathbf{z}$ for some $\mathbf{z} \in \mathbb{R}^n$

Compute the inner product:
$$\mathbf{y}^T \mathbf{x} = \mathbf{y}^T (A\mathbf{z}) = (A^T \mathbf{y})^T \mathbf{z}$$

Since $\mathbf{y} \in \operatorname{Null}(A^T)$, we have $A^T \mathbf{y} = \mathbf{0}$. Therefore:
$$(A^T \mathbf{y})^T \mathbf{z} = \mathbf{0}^T \mathbf{z} = 0$$

Thus, $\mathbf{y}^T \mathbf{x} = 0$, proving orthogonality. □

::: remark
**Symmetry of the Orthogonality Relationships**

Notice the beautiful duality:
- **Theorem 4**: $\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$ (both live in $\mathbb{R}^n$)
- **Theorem 5**: $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$ (both live in $\mathbb{R}^m$)

These are **not** two separate facts — they are the **same theorem applied to $A$ and $A^T$**!

If you apply Theorem 4 to the matrix $A^T$ (instead of $A$), you get:
$$\operatorname{Col}((A^T)^T) \perp \operatorname{Null}(A^T) \quad \implies \quad \operatorname{Col}(A) \perp \operatorname{Null}(A^T)$$

which is exactly Theorem 5!

This reveals a deep symmetry in the structure of linear algebra.
:::

::: example
**Concrete Example (Dual of Previous)**

Using the same matrix:
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$$

**Find $\operatorname{Col}(A)$:**

$$\operatorname{Col}(A) = \operatorname{span}\left\{\begin{pmatrix} 1\\2 \end{pmatrix}, \begin{pmatrix} 2\\4 \end{pmatrix}, \begin{pmatrix} 3\\6 \end{pmatrix}\right\} = \operatorname{span}\left\{\begin{pmatrix} 1\\2 \end{pmatrix}\right\}$$

**Find $\operatorname{Null}(A^T)$:**

$$A^T \mathbf{y} = \mathbf{0} \implies \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{pmatrix} \begin{pmatrix} y_1\\y_2 \end{pmatrix} = \mathbf{0}$$

$$\implies \begin{cases} y_1 + 2y_2 = 0 \\ 2y_1 + 4y_2 = 0 \\ 3y_1 + 6y_2 = 0 \end{cases}$$

All three equations are proportional: $y_1 + 2y_2 = 0$.

Basis:
$$\operatorname{Null}(A^T) = \operatorname{span}\left\{\begin{pmatrix} -2\\1 \end{pmatrix}\right\}$$

**Check orthogonality:**

$$\begin{pmatrix} -2\\1 \end{pmatrix}^T \begin{pmatrix} 1\\2 \end{pmatrix} = -2 + 2 = 0 \quad ✓$$

Indeed, $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$!
:::

---

### 3.4 The Big Picture: Four Subspaces

::: tip
**The Four Fundamental Subspaces and Their Relationships**

For an $m \times n$ matrix $A$ with $\operatorname{rank}(A) = r$:

**In $\mathbb{R}^n$ (domain):**
- $\operatorname{Col}(A^T)$ (dimension $r$) ⊥ $\operatorname{Null}(A)$ (dimension $n-r$)
- Together they "fill" $\mathbb{R}^n$: $\dim(\operatorname{Col}(A^T)) + \dim(\operatorname{Null}(A)) = r + (n-r) = n$

**In $\mathbb{R}^m$ (codomain):**
- $\operatorname{Col}(A)$ (dimension $r$) ⊥ $\operatorname{Null}(A^T)$ (dimension $m-r$)
- Together they "fill" $\mathbb{R}^m$: $\dim(\operatorname{Col}(A)) + \dim(\operatorname{Null}(A^T)) = r + (m-r) = m$

**Orthogonality relationships:**
$$\operatorname{Col}(A^T) \perp \operatorname{Null}(A) \quad \text{(both in } \mathbb{R}^n\text{)}$$
$$\operatorname{Col}(A) \perp \operatorname{Null}(A^T) \quad \text{(both in } \mathbb{R}^m\text{)}$$

These relationships are foundational for understanding projections, least squares, and the geometry of linear transformations.
:::

---

## 4. Dimension Relationships

### 4.1 Row Rank Equals Column Rank

::: proposition
**Theorem 6: $\operatorname{rank}(A) = \operatorname{rank}(A^T)$**

The dimension of $\operatorname{Col}(A)$ equals the dimension of $\operatorname{Col}(A^T)$.

**In other words**: Column rank = Row rank.
:::

**Proof idea** (using cross-filling):

Recall from Lecture 3 that any matrix can be decomposed via cross-filling:
$$A = R_1 + R_2 + \cdots + R_r = UV$$

where:
- $U$ is $m \times r$ with columns $\{\mathbf{u}_1, \ldots, \mathbf{u}_r\}$ (the cross-columns)
- $V$ is $r \times n$ with rows $\{\mathbf{v}_1^T, \ldots, \mathbf{v}_r^T\}$ (the cross-rows)
- $r = \operatorname{rank}(A)$ = number of rank-1 pieces

**Column rank**: $\operatorname{Col}(A) = \operatorname{Col}(UV) = \operatorname{Col}(U)$, so $\dim(\operatorname{Col}(A)) = r$.

**Row rank**: The rows of $A$ are linear combinations of the rows of $V$ (since $A = UV$). The rows of $V$ span the same space as the rows of $A$. Since $V$ has $r$ linearly independent rows, $\dim(\operatorname{Col}(A^T)) = r$.

Therefore, $\operatorname{rank}(A) = \operatorname{rank}(A^T) = r$. □

(A complete rigorous proof requires showing the rows of $V$ are linearly independent, which follows from the cross-filling construction. We will not go into full detail here, but the key idea is that cross-filling produces exactly $r$ independent rows and $r$ independent columns.)

---

### 4.2 Dimension Formulas

From the rank-nullity theorem (Lecture 5) and the orthogonality relationships, we have:

::: proposition
**Dimension Relationships for the Four Fundamental Subspaces**

For an $m \times n$ matrix $A$ with $\operatorname{rank}(A) = r$:

**In $\mathbb{R}^n$ (domain):**
$$\dim(\operatorname{Col}(A^T)) + \dim(\operatorname{Null}(A)) = r + (n - r) = n$$

**In $\mathbb{R}^m$ (codomain):**
$$\dim(\operatorname{Col}(A)) + \dim(\operatorname{Null}(A^T)) = r + (m - r) = m$$

**These formulas confirm**: The orthogonal pairs $(\operatorname{Col}(A^T), \operatorname{Null}(A))$ and $(\operatorname{Col}(A), \operatorname{Null}(A^T))$ together span their entire ambient spaces.
:::

---

## 5. Summary

::: tip
**What We Learned**

**1. Subspaces of Matrix Products** (§1):
- $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$
- $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$
- $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\} \Longleftrightarrow \operatorname{Null}(AB) = \operatorname{Null}(B)$

**2. Transpose** (§2):
- $(AB)^T = B^T A^T$ (order reverses)
- $(A^{-1})^T = (A^T)^{-1}$
- $AA^T$ and $A^T A$ are always symmetric

**3. Four Fundamental Subspaces** (§3):
- $\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$ (in $\mathbb{R}^n$)
- $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$ (in $\mathbb{R}^m$)

**4. Dimension Relationships** (§4):
- $\operatorname{rank}(A) = \operatorname{rank}(A^T)$
- $\dim(\operatorname{Col}(A^T)) + \dim(\operatorname{Null}(A)) = n$
- $\dim(\operatorname{Col}(A)) + \dim(\operatorname{Null}(A^T)) = m$

**Key Insight**: The four fundamental subspaces form two orthogonal pairs that completely describe the geometry of a linear transformation.
:::

---

## Further Reading

- The orthogonality relationships will be crucial for understanding **projections** (Lecture 7)
- The "two cities" framework connects to the **fundamental theorem of linear algebra**
- Transpose will reappear in **symmetric matrices** and **spectral decomposition** (later lectures)
