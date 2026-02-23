# Lecture 4: Subspace and Linear Independence

> **Topics**: §2.1 — Subspaces, Column Space, Linear Independence, Basis, Dimension, Well-Definedness of Rank
> **Date**: Mar 13–19, 2026

---

## 🎯 Motivation: Is Rank Well-Defined?

In Lecture 3, we defined the **rank** of a matrix as:

::: definition
**Rank (Lecture 3 definition)**

$$\operatorname{rank}(A) = \text{number of rank-one pieces from cross-filling}$$
:::

This definition has a **subtle problem** we mentioned but didn't resolve:

::: warning
**The Well-Definedness Question**

Cross-filling allows **different pivot choices** at each step. For example:

$$A = \begin{pmatrix} 2 & 4 & 6 \\ 1 & 2 & 3 \\ 3 & 6 & 9 \end{pmatrix}$$

- **Choice 1**: Pick pivot at position $(1,1)$
- **Choice 2**: Pick pivot at position $(2,2)$
- **Choice 3**: Pick pivot at position $(3,3)$

Do all choices give the **same number** of rank-one pieces?

**What we know**: Experiments suggest yes.
**What we need**: A **proof** that rank doesn't depend on pivot choices.
:::

**Today's goal**: Prove that rank is **well-defined** by discovering a deeper truth:

::: success
**The Key Insight (Preview)**

Rank is not just "number of pieces from an algorithm" — it's a **geometric property** of the matrix:

$$\boxed{\operatorname{rank}(A) = \text{dimension of the column space}}$$

The column space is a **subspace** (a geometric object), and its **dimension** (number of basis vectors) doesn't depend on how we compute it.

**Strategy**:
1. Introduce **subspaces**, **column space**, **linear independence**, **basis**, **dimension**
2. Show that cross-filling produces a **basis for the column space**
3. Prove all bases have the **same size** (so dimension is well-defined)
4. Conclude: rank = dimension (so rank is well-defined) ✓
:::

This lecture **elevates our perspective** from algorithms to geometry.

---

## 1. Two Languages for Describing Subspaces

Before defining "subspace" formally, we need to understand **two fundamentally different ways** to describe sets.

### 1.1 The Daily Life Analogy

Suppose you want to tell someone **where your classroom is**:

**Method A (Descriptive)**: "Find the room that satisfies these properties:
- Has exactly 30 desks
- Has windows facing south
- Is on the 2nd floor"

**Method B (Constructive)**: "Go to the 2nd floor, walk to the end of the hall, turn left, it's the last door."

::: remark
**Key Difference**

| | **Descriptive (Equation-Based)** | **Constructive (Parametric)** |
|---|---|---|
| **How it works** | List **properties** members must satisfy | Provide a **recipe** to generate members |
| **Strength** | Easy to **verify** membership | Easy to **generate** new members |
| **Weakness** | Hard to **produce** members | Hard to **verify** membership |
| **Example** | "Everyone wearing a red hat" | "Go 2nd floor, last door left" |

**Neither is better** — they're **complementary**! We need both.
:::

### 1.2 Two Languages in Linear Algebra

This duality appears throughout linear algebra:

::: example
**Example 1.1: Describing a line through the origin in $\mathbb{R}^2$**

Consider the line $y = 2x$ through the origin:

**Descriptive language** (equation):
$$L = \left\{ \begin{pmatrix} x \\ y \end{pmatrix} : y = 2x \right\}$$

- To **verify** $\begin{pmatrix} 3 \\ 6 \end{pmatrix} \in L$: Check $6 = 2(3)$ ✓
- To **generate** members: Hard! Need to solve for $x$ given constraint

**Constructive language** (parametric):
$$L = \left\{ t \begin{pmatrix} 1 \\ 2 \end{pmatrix} : t \in \mathbb{R} \right\}$$

- To **generate** members: Pick any $t$! E.g., $t=3$ gives $\begin{pmatrix} 3 \\ 6 \end{pmatrix}$
- To **verify** $\begin{pmatrix} 3 \\ 6 \end{pmatrix} \in L$: Hard! Need to find $t$ such that $t \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$

**Both describe the same line**, but with opposite strengths!
:::

::: example
**Example 1.2: A plane through the origin in $\mathbb{R}^3$**

**Descriptive**: $P = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} : x + y + z = 0 \right\}$

**Constructive**: $P = \left\{ s \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} + t \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} : s,t \in \mathbb{R} \right\}$

Again, same plane, two languages!
:::

**Why does this matter for matrices?**

::: success
**The Connection to Matrices**

For a matrix $A$:
- **Null space** = {$x$ : $Ax = 0$} — **descriptive** (equation-based)
- **Column space** = {$Ax$ : $x \in \mathbb{R}^n$} — **constructive** (parametric)

Understanding both languages helps us **solve** $Ax = b$:
- **Question**: Is $b$ in the column space? (verification — hard in constructive language)
- **Answer**: Solve $Ax = b$ (finding parameters — hard in descriptive language)

They're **dual** views of the same problem!
:::

---

## 2. Subspaces: Flat Spaces Through the Origin

### 2.1 Definition

::: definition
**Subspace**

A **subspace** $W$ of $\mathbb{R}^n$ (or more generally, a vector space $V$) is a non-empty subset that is **closed under linear combinations**:

For any $\mathbf{u}, \mathbf{v} \in W$ and any scalars $\alpha, \beta \in \mathbb{R}$:
$$\alpha \mathbf{u} + \beta \mathbf{v} \in W$$

**Equivalently** (check these conditions):
1. $\mathbf{0} \in W$ (contains the zero vector)
2. If $\mathbf{u}, \mathbf{v} \in W$, then $\mathbf{u} + \mathbf{v} \in W$ (closed under addition)
3. If $\mathbf{u} \in W$ and $\alpha \in \mathbb{R}$, then $\alpha \mathbf{u} \in W$ (closed under scaling)
:::

::: tip
**Geometric Intuition**

A subspace is a **flat space** that:
- Passes through the **origin** (must contain $\mathbf{0}$)
- Is **closed** under vector operations (if you add/scale vectors in the space, you stay in the space)

**Visual**: Lines through origin, planes through origin, $\mathbb{R}^n$ itself, or just {$\mathbf{0}$}.

**Non-examples**:
- Line $y = 2x + 1$ (doesn't pass through origin)
- Unit circle (not closed under scaling)
:::

### 2.2 Verifying Subspaces

::: example
**Example 2.1: Is $W = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} : x + 2y - z = 0 \right\}$ a subspace of $\mathbb{R}^3$?**

**Strategy**: Check closure under linear combinations.

**Step 1**: Check $\mathbf{0} \in W$

$$\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} : \quad 0 + 2(0) - 0 = 0 \quad \checkmark$$

**Step 2**: Check closure

Take any $\mathbf{u} = \begin{pmatrix} u_1 \\ u_2 \\ u_3 \end{pmatrix}, \mathbf{v} = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} \in W$

This means:
- $u_1 + 2u_2 - u_3 = 0$ (since $\mathbf{u} \in W$)
- $v_1 + 2v_2 - v_3 = 0$ (since $\mathbf{v} \in W$)

Now check $\alpha \mathbf{u} + \beta \mathbf{v}$ for any scalars $\alpha, \beta$:

$$\alpha \mathbf{u} + \beta \mathbf{v} = \begin{pmatrix} \alpha u_1 + \beta v_1 \\ \alpha u_2 + \beta v_2 \\ \alpha u_3 + \beta v_3 \end{pmatrix}$$

Verify the equation:
$$(\alpha u_1 + \beta v_1) + 2(\alpha u_2 + \beta v_2) - (\alpha u_3 + \beta v_3)$$
$$= \alpha(u_1 + 2u_2 - u_3) + \beta(v_1 + 2v_2 - v_3)$$
$$= \alpha(0) + \beta(0) = 0 \quad \checkmark$$

**Conclusion**: $W$ is a subspace! ✓
:::

::: example
**Example 2.2: Is $U = \left\{ \begin{pmatrix} x \\ y \end{pmatrix} : x + y = 1 \right\}$ a subspace of $\mathbb{R}^2$?**

**Quick check**: Is $\mathbf{0} \in U$?

$$\begin{pmatrix} 0 \\ 0 \end{pmatrix} : \quad 0 + 0 = 0 \neq 1 \quad \times$$

**Conclusion**: Not a subspace! (It's a line not through the origin)
:::

---

## 3. Column Space: The Constructive Subspace

Recall from Lecture 3 that matrices transform vectors via **linear combinations of columns**.

### 3.1 Definition

::: definition
**Column Space**

For an $m \times n$ matrix $A = \begin{pmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n \end{pmatrix}$ (columns $\mathbf{a}_1, \ldots, \mathbf{a}_n \in \mathbb{R}^m$):

$$\operatorname{Col}(A) = \{ A\mathbf{x} : \mathbf{x} \in \mathbb{R}^n \}$$

**Equivalently** (column combination view):
$$\operatorname{Col}(A) = \{ x_1 \mathbf{a}_1 + x_2 \mathbf{a}_2 + \cdots + x_n \mathbf{a}_n : x_1, \ldots, x_n \in \mathbb{R} \}$$

This is the set of **all linear combinations of the columns** of $A$.

**Language**: Column space is **constructive** — it's defined by giving a **recipe** to generate members (pick coefficients $x_1, \ldots, x_n$, form the combination).
:::

::: proposition
**Column space is a subspace**

$\operatorname{Col}(A)$ is a subspace of $\mathbb{R}^m$.

**Proof**:

1. **Contains** $\mathbf{0}$: Take $\mathbf{x} = \mathbf{0}$, then $A\mathbf{0} = \mathbf{0} \in \operatorname{Col}(A)$ ✓

2. **Closed under linear combinations**:
   - Take $\mathbf{b}_1, \mathbf{b}_2 \in \operatorname{Col}(A)$
   - Then $\mathbf{b}_1 = A\mathbf{x}_1$ and $\mathbf{b}_2 = A\mathbf{x}_2$ for some $\mathbf{x}_1, \mathbf{x}_2$
   - For any $\alpha, \beta$:
   $$\alpha \mathbf{b}_1 + \beta \mathbf{b}_2 = \alpha A\mathbf{x}_1 + \beta A\mathbf{x}_2 = A(\alpha \mathbf{x}_1 + \beta \mathbf{x}_2) \in \operatorname{Col}(A)$$ ✓
:::

### 3.2 Examples and Visualization

::: example
**Example 3.1: Column space of a rank-one matrix**

$$A = \begin{pmatrix} 2 & 4 & 6 \\ 1 & 2 & 3 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$$

All columns are multiples of $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$:

$$\operatorname{Col}(A) = \left\{ t \begin{pmatrix} 2 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}$$

This is a **line through the origin** in $\mathbb{R}^2$! 📏

**Visual**:
```
  y
  │    ╱ Line: y = (1/2)x
  │   ╱
  │  ╱ ← All points have form t(2,1)
  │ ╱
  │╱_____ x
  O
```
:::

::: example
**Example 3.2: Column space of a general matrix**

$$B = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$

$$\operatorname{Col}(B) = \left\{ x_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} : x_1, x_2, x_3 \in \mathbb{R} \right\}$$

**Observation**: Column 3 = Column 1 + Column 2, so it's **redundant**!

$$\operatorname{Col}(B) = \left\{ x_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} : x_1, x_2 \in \mathbb{R} \right\}$$

This is the **$xy$-plane** in $\mathbb{R}^3$ (all vectors with $z=0$)!
:::

::: remark
**Connection to Solvability**

Recall from Lecture 3:

$$Ax = b \text{ has a solution} \quad \Longleftrightarrow \quad b \in \operatorname{Col}(A)$$

**Why?** Because $Ax$ is a linear combination of columns of $A$, and $\operatorname{Col}(A)$ is exactly the set of all such combinations!

**Column space** captures **which vectors can be reached** by the transformation $x \mapsto Ax$.
:::

---

## 4. Linear Independence and Basis

To understand when column space is "efficiently" described, we need **linear independence**.

### 4.1 Linear Independence

::: definition
**Linearly Independent**

A list of vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ is **linearly independent** if:

$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_k \mathbf{v}_k = \mathbf{0} \quad \Longrightarrow \quad c_1 = c_2 = \cdots = c_k = 0$$

**Intuition**: The only way to combine them to get zero is the **trivial way** (all coefficients zero).

**Negation** (linearly dependent): There exists a **non-trivial** combination giving zero:
$$c_1 \mathbf{v}_1 + \cdots + c_k \mathbf{v}_k = \mathbf{0} \quad \text{with some } c_i \neq 0$$
:::

::: example
**Example 4.1: Are $\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ linearly independent?**

Check: $c_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$$\begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

Only solution: $c_1 = 0, c_2 = 0$ ✓

**Conclusion**: Linearly independent!
:::

::: example
**Example 4.2: Are $\begin{pmatrix} 2 \\ 1 \end{pmatrix}, \begin{pmatrix} 4 \\ 2 \end{pmatrix}, \begin{pmatrix} 6 \\ 3 \end{pmatrix}$ linearly independent?**

Check: $c_1 \begin{pmatrix} 2 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 4 \\ 2 \end{pmatrix} + c_3 \begin{pmatrix} 6 \\ 3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

**Observe**: Column 2 = 2·Column 1, Column 3 = 3·Column 1

Try $c_1 = 3, c_2 = 0, c_3 = -1$:
$$3 \begin{pmatrix} 2 \\ 1 \end{pmatrix} + 0 \begin{pmatrix} 4 \\ 2 \end{pmatrix} + (-1) \begin{pmatrix} 6 \\ 3 \end{pmatrix} = \begin{pmatrix} 6 \\ 3 \end{pmatrix} - \begin{pmatrix} 6 \\ 3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$ ✓

**Non-trivial solution exists!**

**Conclusion**: Linearly **dependent**!
:::

### 4.2 Left Cancellation Property (Equivalent Characterization)

Linear independence has a powerful **matrix interpretation**:

::: proposition
**Linear Independence ⟺ Left Cancellation**

Let $U = \begin{pmatrix} \mathbf{u}_1 & \mathbf{u}_2 & \cdots & \mathbf{u}_r \end{pmatrix}$ (columns $\mathbf{u}_1, \ldots, \mathbf{u}_r$).

**The following are equivalent**:

1. Columns of $U$ are **linearly independent**
2. **Left cancellation holds**: $UP = UQ \Longrightarrow P = Q$
3. **Null space is trivial**: $U\mathbf{x} = \mathbf{0} \Longrightarrow \mathbf{x} = \mathbf{0}$

**Why equivalent?**

(1) ⟺ (3): By definition! Linear independence says $\sum c_i \mathbf{u}_i = \mathbf{0} \Rightarrow$ all $c_i = 0$, which is exactly $U\mathbf{c} = \mathbf{0} \Rightarrow \mathbf{c} = \mathbf{0}$.

(3) ⟹ (2): If $UP = UQ$, then $U(P - Q) = \mathbf{0}$. By (3), each column of $P-Q$ must be zero, so $P = Q$.

(2) ⟹ (3): Special case where $Q = O$ (zero matrix).
:::

::: tip
**Why "Left" Cancellation?**

The matrix $U$ appears on the **left** in $UP = UQ$, and we can "cancel" it to get $P = Q$.

**Contrast**: If columns are **dependent**, we **cannot** cancel!

Example: $\begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 0 \\ 0.5 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

But $\begin{pmatrix} 1 \\ 0 \end{pmatrix} \neq \begin{pmatrix} 0 \\ 0.5 \end{pmatrix}$! Cancellation fails because columns are dependent.
:::

### 4.3 Span

::: definition
**Span**

The **span** of vectors $\mathbf{v}_1, \ldots, \mathbf{v}_k$ is the set of all their linear combinations:

$$\operatorname{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\} = \{ c_1 \mathbf{v}_1 + \cdots + c_k \mathbf{v}_k : c_1, \ldots, c_k \in \mathbb{R} \}$$

**Terminology**: We say $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ **spans** $W$ if $\operatorname{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\} = W$.
:::

::: remark
**Connection to Column Space**

$$\operatorname{Col}(A) = \operatorname{span}\{\text{columns of } A\}$$

They're the same thing! Column space **is** the span of columns.
:::

### 4.4 Basis

::: definition
**Basis**

A **basis** for a subspace $W$ is a list of vectors $\{\mathbf{e}_1, \ldots, \mathbf{e}_r\}$ that:
1. **Spans** $W$: Every vector in $W$ can be written as a linear combination of $\mathbf{e}_1, \ldots, \mathbf{e}_r$
2. Is **linearly independent**: No redundancy

**Equivalently**: A basis is a **minimal spanning set** or a **maximal independent set**.
:::

::: tip
**Basis = Efficient Coordinates**

A basis gives a **unique coordinate system** for $W$:

If $\{\mathbf{e}_1, \ldots, \mathbf{e}_r\}$ is a basis, then **every** $\mathbf{v} \in W$ can be written **uniquely** as:
$$\mathbf{v} = c_1 \mathbf{e}_1 + \cdots + c_r \mathbf{e}_r$$

**Why unique?**
- Spanning ensures existence (you can write $\mathbf{v}$ this way)
- Independence ensures uniqueness (only one way to do it)

**Proof of uniqueness**: Suppose $\mathbf{v} = c_1 \mathbf{e}_1 + \cdots + c_r \mathbf{e}_r = d_1 \mathbf{e}_1 + \cdots + d_r \mathbf{e}_r$. Then:
$$(c_1 - d_1)\mathbf{e}_1 + \cdots + (c_r - d_r)\mathbf{e}_r = \mathbf{0}$$
By independence, all $c_i - d_i = 0$, so $c_i = d_i$ for all $i$. ✓
:::

::: example
**Example 4.3: Standard basis for $\mathbb{R}^3$**

$$\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$

- **Linearly independent**: $c_1 \mathbf{e}_1 + c_2 \mathbf{e}_2 + c_3 \mathbf{e}_3 = \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = \mathbf{0}$ only if all $c_i = 0$ ✓
- **Spans** $\mathbb{R}^3$: Any $\begin{pmatrix} x \\ y \\ z \end{pmatrix} = x\mathbf{e}_1 + y\mathbf{e}_2 + z\mathbf{e}_3$ ✓

So $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ is a **basis** for $\mathbb{R}^3$!
:::

::: example
**Example 4.4: Another basis for $\mathbb{R}^2$**

$$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$

**Check independence**:
$$c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} c_1 + c_2 \\ c_1 - c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

From top: $c_1 + c_2 = 0$
From bottom: $c_1 - c_2 = 0$
Add: $2c_1 = 0 \Rightarrow c_1 = 0 \Rightarrow c_2 = 0$ ✓

**Check spanning**: For any $\begin{pmatrix} x \\ y \end{pmatrix}$, solve:
$$c_1 \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$$

$$c_1 + c_2 = x, \quad c_1 - c_2 = y$$

Solution: $c_1 = \frac{x+y}{2}, \quad c_2 = \frac{x-y}{2}$ (always exists!) ✓

**Conclusion**: $\{\mathbf{v}_1, \mathbf{v}_2\}$ is another basis for $\mathbb{R}^2$!
:::

### 4.5 Dimension (Not Yet Well-Defined!)

::: definition
**Dimension (Tentative)**

Let $W$ be a subspace. If $W$ has a basis consisting of $r$ vectors, we **tentatively** define:

$$\dim(W) = r \quad \text{(number of basis vectors)}$$

**Special case**: $\dim(\{\mathbf{0}\}) = 0$ (the zero subspace has dimension 0)
:::

::: warning
**Is Dimension Well-Defined?**

We have a **problem**: What if $W$ has **two different bases** with **different numbers** of vectors?

**Example (hypothetical)**: Suppose $W$ has:
- Basis 1: $\{\mathbf{u}_1, \mathbf{u}_2, \mathbf{u}_3\}$ (3 vectors)
- Basis 2: $\{\mathbf{v}_1, \mathbf{v}_2\}$ (2 vectors)

Then is $\dim(W) = 3$ or $\dim(W) = 2$? 🤔

**We don't know yet** if this can happen!

**Goal for later**: Prove all bases of $W$ have the **same size**, so dimension is **well-defined**.
:::

**Current status**: We've defined dimension, but we haven't proven it's **well-defined**. Similarly, rank (defined via cross-filling) isn't yet proven well-defined.

**Next**: Connect these concepts by analyzing cross-filling!

---

## 5. Cross-Filling Produces a Basis for Col(A)

Now we return to cross-filling with new tools. Recall from Lecture 3:

$$A = UV = \sum_{i=1}^r \mathbf{u}_i \mathbf{v}_i^T$$

where $U = \begin{pmatrix} \mathbf{u}_1 & \cdots & \mathbf{u}_r \end{pmatrix}$ collects the **column vectors** from each rank-one piece.

**Key question**: What is special about $U$'s columns?

### 5.1 Property 1: $U$'s Columns Are Linearly Independent

::: proposition
**Columns of $U$ (from cross-filling) are linearly independent**

Let $A = UV$ be the factorization from cross-filling, where $U = \begin{pmatrix} \mathbf{u}_1 & \cdots & \mathbf{u}_r \end{pmatrix}$.

Then $\{\mathbf{u}_1, \ldots, \mathbf{u}_r\}$ are **linearly independent**.

**Proof idea**: Use the **pivot structure** from cross-filling. Each $\mathbf{u}_i$ came from a rank-one piece with a specific pivot position, and these pivots form a "staircase" pattern that forces independence.
:::

::: example
**Example 5.1: Why cross-filling gives independent columns**

Recall Example 2.3 from Lecture 3:

$$A = \begin{pmatrix} 2 & 4 & 6 \\ 1 & 2 & 4 \\ 3 & 6 & 9 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 1 & 1 \\ 3 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix}$$

$$U = \begin{pmatrix} 2 & 0 \\ 1 & 1 \\ 3 & 0 \end{pmatrix}, \quad \mathbf{u}_1 = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}, \quad \mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$

**Check independence**: $c_1 \mathbf{u}_1 + c_2 \mathbf{u}_2 = \mathbf{0}$

$$c_1 \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2c_1 \\ c_1 + c_2 \\ 3c_1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$

**Solve backwards** (this is the key technique!):

- From row 2: The pivot for $\mathbf{u}_2$ was in position $(2,3)$ (column 3 of $A$, which became column 2 of $U$)
- In the **remainder after peeling $\mathbf{u}_1$**, row 1 was zero, so $\mathbf{u}_2$ has a unique nonzero entry in **row 2**
- From equation: $c_1 + c_2 = 0$ and $\mathbf{u}_1$ had row 1 already nonzero
- Looking at row 2: $c_1 + c_2 = 0$, but wait, let me recalculate...

Actually, let me use the **pivot row method** more carefully:

**Observation**:
- $\mathbf{u}_1$ came from pivot at position $(1,1)$ — row 1 was the pivot row
- $\mathbf{u}_2$ came from pivot at position $(2,3)$ — row 2 was the pivot row (in the remainder)

**Key property**: After peeling $\mathbf{u}_1$, **row 1 of the remainder was zero**. So $\mathbf{u}_2$ doesn't "care" about row 1.

Looking at the structure:
$$\mathbf{u}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \quad \leftarrow \text{First entry is 0 (row 1 was eliminated)}$$

**Backward substitution**:
- Row 3: $3c_1 = 0 \Rightarrow c_1 = 0$
- Row 1: $2c_1 = 0$ ✓ (consistent)
- Row 2: $c_1 + c_2 = 0 + c_2 = 0 \Rightarrow c_2 = 0$

**All coefficients zero!** So independent ✓

**Why did this work?** The pivot structure creates a **triangular pattern** — later pivots don't interfere with earlier pivot rows, allowing backward substitution to uniquely determine all coefficients must be zero.
:::

::: proof
**Proof (General Case): Pivot Row Method**

Let $\mathbf{u}_1, \ldots, \mathbf{u}_r$ be the columns from cross-filling, where $\mathbf{u}_i$ came from the rank-one piece with pivot in row $p_i$.

**Key observation**: After peeling $R_1, \ldots, R_{i-1}$, rows $p_1, \ldots, p_{i-1}$ of the remainder are **zero**. Therefore:

$$\mathbf{u}_i[\text{row } p_j] = 0 \quad \text{for all } j < i$$

(The $i$-th column has zeros in all previous pivot rows)

**Check independence**: Suppose $c_1 \mathbf{u}_1 + \cdots + c_r \mathbf{u}_r = \mathbf{0}$.

**Solve backwards**:
1. Look at pivot row $p_r$ (last pivot):
   - All $\mathbf{u}_1, \ldots, \mathbf{u}_{r-1}$ have zero in row $p_r$ (by observation above)
   - So: $c_r \cdot (\mathbf{u}_r[\text{row } p_r]) = 0$
   - Since pivot entry is nonzero: $\mathbf{u}_r[\text{row } p_r] \neq 0$
   - Therefore: $c_r = 0$ ✓

2. Look at pivot row $p_{r-1}$ (second-to-last):
   - All $\mathbf{u}_1, \ldots, \mathbf{u}_{r-2}$ have zero in row $p_{r-1}$
   - We know $c_r = 0$
   - So: $c_{r-1} \cdot (\mathbf{u}_{r-1}[\text{row } p_{r-1}]) = 0$
   - Since pivot entry nonzero: $c_{r-1} = 0$ ✓

3. Continue backwards: $c_{r-2} = 0, \ldots, c_1 = 0$

**All coefficients zero**, so the columns are **linearly independent**! ✓
:::

### 5.2 Property 2: $\operatorname{Col}(U) = \operatorname{Col}(A)$ (The "Mother Body" Argument)

::: proposition
**Column spaces are equal**

If $A = UV$ is from cross-filling, then:
$$\operatorname{Col}(U) = \operatorname{Col}(A)$$

**Proof (Two inclusions)**:

**Part 1**: $\operatorname{Col}(A) \subseteq \operatorname{Col}(U)$

Since $A = UV$, any vector in $\operatorname{Col}(A)$ has the form:
$$A\mathbf{x} = UV\mathbf{x} = U(V\mathbf{x})$$

Let $\mathbf{y} = V\mathbf{x}$. Then $A\mathbf{x} = U\mathbf{y} \in \operatorname{Col}(U)$ ✓

**Part 2**: $\operatorname{Col}(U) \subseteq \operatorname{Col}(A)$ — **The Mother Body Argument** 🔬

This is the deeper direction! We need to show **every column of $U$** is a linear combination of **columns of $A$**.

**Key idea**: Cross-filling **peels columns from the mother matrix** $A$. Each $\mathbf{u}_i$ is obtained by taking a column of a **remainder matrix**, and remainders are built from $A$.

**Detailed argument**:

Recall cross-filling process:
- Start with $A_1 = A$
- Peel off $R_1 = \mathbf{u}_1 \mathbf{v}_1^T$, where $\mathbf{u}_1$ is a column of $A_1$ (possibly scaled)
- Remainder: $A_2 = A_1 - R_1$
- Peel off $R_2 = \mathbf{u}_2 \mathbf{v}_2^T$, where $\mathbf{u}_2$ is a column of $A_2$ (possibly scaled)
- And so on...

**Claim**: Every column of $A_k$ is a linear combination of columns of $A$.

**Proof by induction**:
- **Base**: $A_1 = A$ ✓
- **Step**: $A_{k+1} = A_k - R_k = A_k - \mathbf{u}_k \mathbf{v}_k^T$

  Each column of $A_{k+1}$ has the form:
  $$(A_k)_j - (\mathbf{u}_k \mathbf{v}_k^T)_j = (A_k)_j - v_{kj} \mathbf{u}_k$$

  This is a linear combination of:
  - Column $j$ of $A_k$ (by induction hypothesis, is a combination of $A$'s columns)
  - $\mathbf{u}_k$ (which is a column of $A_k$, so also a combination of $A$'s columns)

  **Both are combinations of $A$'s columns**, so their combination is too! ✓

**Conclusion**: Since $\mathbf{u}_i$ is a column of some $A_k$, it's a linear combination of $A$'s columns.

Therefore $\mathbf{u}_i \in \operatorname{Col}(A)$ for all $i$, which means $\operatorname{Col}(U) \subseteq \operatorname{Col}(A)$ ✓

**Combining both parts**: $\operatorname{Col}(U) = \operatorname{Col}(A)$ ✓
:::

::: tip
**The "Mother Body" Metaphor** 🧬

Think of $A$ as the **mother body** (母体) that contains all the genetic material.

Cross-filling **peels off** layers ($R_1, R_2, \ldots$), but each peeled piece is made from:
- **Columns of the current remainder** (which inherit from $A$)
- **Scaled and combined** from $A$'s columns

**No new material is introduced** — everything comes from the mother body $A$!

This is why $\operatorname{Col}(U) \subseteq \operatorname{Col}(A)$: the columns we collect ($\mathbf{u}_1, \ldots, \mathbf{u}_r$) are all **descendants** of $A$'s columns.
:::

### 5.3 Conclusion: $U$'s Columns Form a Basis for $\operatorname{Col}(A)$

::: success
**Main Result: Cross-Filling Extracts a Basis**

If $A = UV$ is the factorization from cross-filling, then:

**The columns of $U$** form a **basis** for $\operatorname{Col}(A)$!

**Proof**:
1. ✓ **Linearly independent** (§5.1 — pivot structure)
2. ✓ **Spans $\operatorname{Col}(A)$** (§5.2 — $\operatorname{Col}(U) = \operatorname{Col}(A)$)

Therefore $\{\mathbf{u}_1, \ldots, \mathbf{u}_r\}$ is a basis! ✓
:::

::: example
**Example 5.2: Verifying the basis property**

From Example 2.3 (Lecture 3):

$$A = \begin{pmatrix} 2 & 4 & 6 \\ 1 & 2 & 4 \\ 3 & 6 & 9 \end{pmatrix}, \quad U = \begin{pmatrix} 2 & 0 \\ 1 & 1 \\ 3 & 0 \end{pmatrix}$$

**Claim**: $\left\{ \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \right\}$ is a basis for $\operatorname{Col}(A)$.

**Verify spanning**: Any linear combination of $A$'s columns:
$$c_1 \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} + c_2 \begin{pmatrix} 4 \\ 2 \\ 6 \end{pmatrix} + c_3 \begin{pmatrix} 6 \\ 4 \\ 9 \end{pmatrix}$$

Rewrite using $A = UV$:
$$A \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = UV \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = U \underbrace{\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix}}_{= \begin{pmatrix} c_1 + 2c_2 + 3c_3 \\ c_3 \end{pmatrix}}$$

$$= (c_1 + 2c_2 + 3c_3) \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} + c_3 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$$

**Any combination of $A$'s columns** can be written as a combination of $U$'s columns! ✓

**Verify independence**: Already done in Example 5.1 ✓

**Conclusion**: $\left\{ \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \right\}$ is a **basis** for $\operatorname{Col}(A)$, which is a **2-dimensional subspace** of $\mathbb{R}^3$.
:::

---

## 6. Well-Definedness: Dimension and Rank

Now we prove the **main theorems** that make dimension and rank well-defined.

### 6.1 Dimension is Well-Defined

::: theorem
**All Bases Have the Same Size**

Let $W$ be a subspace. If $\{\mathbf{u}_1, \ldots, \mathbf{u}_m\}$ and $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ are both bases for $W$, then:
$$m = n$$

**Consequence**: Dimension is **well-defined** — it doesn't matter which basis we use to count!
:::

::: proof
**Proof (Change-of-Basis Matrices + Trace)**

Let:
- Basis 1: $U = \begin{pmatrix} \mathbf{u}_1 & \cdots & \mathbf{u}_m \end{pmatrix}$ (columns)
- Basis 2: $V = \begin{pmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_n \end{pmatrix}$ (columns)

**Step 1**: Since **Basis 2 spans** $W$, every vector in Basis 1 can be written as a combination of Basis 2:

$$U = V P$$

for some $n \times m$ matrix $P$ (change-of-basis matrix from $U$ to $V$).

**Step 2**: Similarly, since **Basis 1 spans** $W$:

$$V = U Q$$

for some $m \times n$ matrix $Q$ (change-of-basis matrix from $V$ to $U$).

**Step 3**: Substitute the second into the first:

$$U = V P = (UQ)P = U(QP)$$

**Step 4**: Since **columns of $U$ are linearly independent**, we can apply **left cancellation**:

$$U = U(QP) \quad \Longrightarrow \quad QP = I_m$$

(Here $I_m$ is the $m \times m$ identity matrix)

**Step 5**: Similarly, substitute the first into the second:

$$V = U Q = (VP)Q = V(PQ)$$

Since **columns of $V$ are linearly independent**:

$$V = V(PQ) \quad \Longrightarrow \quad PQ = I_n$$

**Step 6**: Now we have:
- $QP = I_m$ (an $m \times m$ matrix)
- $PQ = I_n$ (an $n \times n$ matrix)

Take the **trace** of both:
$$\operatorname{tr}(QP) = \operatorname{tr}(I_m) = m$$
$$\operatorname{tr}(PQ) = \operatorname{tr}(I_n) = n$$

**Step 7**: Use the **cyclic property of trace**:

$$\operatorname{tr}(QP) = \operatorname{tr}(PQ)$$

(For any matrices $A$ (size $k \times \ell$) and $B$ (size $\ell \times k$), we have $\operatorname{tr}(AB) = \operatorname{tr}(BA)$)

**Step 8**: Combine:
$$m = \operatorname{tr}(QP) = \operatorname{tr}(PQ) = n$$

**Therefore**: $m = n$ ✓

**Conclusion**: Any two bases for $W$ have the **same number of vectors**!
:::

::: remark
**Why the Trace Trick Works** 🎩

The trace $\operatorname{tr}(M) = m_{11} + m_{22} + \cdots + m_{kk}$ (sum of diagonal) has a special property:

$$\operatorname{tr}(AB) = \operatorname{tr}(BA)$$

**Example**:
$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$$

$$AB = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}, \quad \operatorname{tr}(AB) = 19 + 50 = 69$$

$$BA = \begin{pmatrix} 23 & 34 \\ 31 & 46 \end{pmatrix}, \quad \operatorname{tr}(BA) = 23 + 46 = 69$$ ✓

**Why true in general?**
$$(AB)_{ii} = \sum_{j} a_{ij} b_{ji}, \quad (BA)_{jj} = \sum_{i} b_{ji} a_{ij}$$

Summing over $i$ vs $j$ gives the same double sum!

**In our proof**: Even though $QP$ is $m \times m$ and $PQ$ is $n \times n$ (different sizes!), their traces are equal, forcing $m = n$.
:::

::: success
**Dimension is Now Well-Defined!**

For any subspace $W$:
$$\boxed{\dim(W) = \text{number of vectors in any basis for } W}$$

This is **independent of which basis** we choose! 🎉
:::

### 6.2 Rank is Well-Defined

Now we connect rank to dimension:

::: theorem
**Rank = Dimension of Column Space**

For any matrix $A$:
$$\operatorname{rank}(A) = \dim(\operatorname{Col}(A))$$

**Proof**:

From §5.3, we know:
- Cross-filling produces $A = UV$ where $U$ has $r$ columns
- The columns of $U$ form a **basis** for $\operatorname{Col}(A)$
- Therefore $\dim(\operatorname{Col}(A)) = r$ (number of basis vectors)

But by Lecture 3 definition:
- $\operatorname{rank}(A) = r$ (number of rank-one pieces from cross-filling)

**Therefore**: $\operatorname{rank}(A) = \dim(\operatorname{Col}(A))$ ✓
:::

::: success
**Rank is Well-Defined!** 🎊

**Why?** Because:
1. $\operatorname{rank}(A) = \dim(\operatorname{Col}(A))$ (just proved)
2. $\dim(\operatorname{Col}(A))$ is well-defined (§6.1 — all bases have same size)
3. Therefore $\operatorname{rank}(A)$ is well-defined (doesn't depend on pivot choices!) ✓

**Different cross-filling runs** (with different pivot choices) may give:
- Different $U$ matrices
- Different $V$ matrices
- Different rank-one pieces $R_1, R_2, \ldots$

**But they all give**:
- **Same number $r$ of pieces** (because $r = \dim(\operatorname{Col}(A))$, a geometric property)
- **Same column space** $\operatorname{Col}(A)$
:::

::: example
**Example 6.1: Rank is independent of pivot choices**

$$A = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$$

**Pivot choice 1** (position $(1,1)$):
$$A = \begin{pmatrix} 2 \\ 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \end{pmatrix}$$

One rank-one piece → $\operatorname{rank}(A) = 1$

**Pivot choice 2** (position $(2,2)$):
$$A = \begin{pmatrix} 1 \\ 0.5 \end{pmatrix} \begin{pmatrix} 2 & 4 \end{pmatrix}$$

One rank-one piece → $\operatorname{rank}(A) = 1$

**Both give rank 1** because:
$$\operatorname{Col}(A) = \left\{ t \begin{pmatrix} 2 \\ 1 \end{pmatrix} : t \in \mathbb{R} \right\}$$

is a **1-dimensional** subspace (a line), regardless of how we compute it!
:::

---

## 7. Summary and Perspective Elevation

### What We Achieved Today 🎯

::: success
**From Algorithm to Geometry**

**Lecture 3**: Rank was defined **algorithmically** (count rank-one pieces from cross-filling)
- **Problem**: Different pivot choices might give different counts (not well-defined)

**Lecture 4**: Rank is redefined **geometrically**:
$$\boxed{\operatorname{rank}(A) = \dim(\operatorname{Col}(A))}$$
- **Solution**: Dimension is well-defined (all bases have same size)
- Therefore rank is well-defined (independent of algorithm choices) ✓

**The key insight**: Cross-filling doesn't just decompose $A$ — it **finds a basis** for $\operatorname{Col}(A)$!
:::

### The Conceptual Framework

::: tip
**Two Languages for Subspaces**

| | **Descriptive (Equations)** | **Constructive (Parameters)** |
|---|---|---|
| **Definition** | List constraints members must satisfy | Give recipe to generate members |
| **Example** | Null space: {$x$ : $Ax = 0$} | Column space: {$Ax$ : $x \in \mathbb{R}^n$} |
| **Strength** | Easy to verify membership | Easy to generate members |
| **Role in solving $Ax=b$** | Constraints on $x$ | Is $b$ reachable? |

**Both are essential** for understanding linear systems!
:::

::: tip
**The Hierarchy of Concepts**

```
Subspace
  │
  ├─→ Column Space (constructive)
  │   └─→ Span of columns
  │
  ├─→ Linear Independence
  │   └─→ Left Cancellation
  │
  ├─→ Basis = Independent + Spanning
  │   └─→ Gives unique coordinates
  │
  ├─→ Dimension = Size of any basis
  │   └─→ Well-defined (all bases same size)
  │
  └─→ Rank = dim(Col(A))
      └─→ Well-defined geometric property
```
:::

### Key Theorems Proved

::: theorem
**Summary of Main Results**

1. **Cross-filling extracts a basis**: If $A = UV$ from cross-filling, then columns of $U$ form a basis for $\operatorname{Col}(A)$

2. **Dimension is well-defined**: All bases for a subspace have the same number of vectors

3. **Rank is well-defined**: $\operatorname{rank}(A) = \dim(\operatorname{Col}(A))$, independent of cross-filling choices
:::

### Looking Ahead 🔭

**Week 5**:
- **Null space** (the descriptive dual of column space)
- **Rank-Nullity Theorem**: $\dim(\operatorname{Null}(A)) + \dim(\operatorname{Col}(A)) = n$
- Applications to solving $Ax = b$

**Chapter 3**:
- Orthogonality and projections
- Orthonormal bases
- Gram-Schmidt process (finding orthogonal bases)

**The big picture**: Linear algebra is about **understanding structure** through:
- **Decomposition** (breaking complex objects into simple pieces)
- **Duality** (seeing the same object from different perspectives)
- **Invariants** (finding properties that don't depend on choices)

Today we elevated rank from "algorithmic count" to "geometric dimension" — this is the **spirit of modern mathematics**! 🚀

---

## Exercises

### Conceptual Understanding

1. **Two languages**: For each of the following subspaces, provide **both** descriptive and constructive descriptions:

   (a) The $xy$-plane in $\mathbb{R}^3$

   (b) The line $y = 3x$ in $\mathbb{R}^2$

   (c) The set of all vectors $\begin{pmatrix} x \\ y \\ z \end{pmatrix}$ with $x + y + z = 0$

2. **Verifying subspaces**: Determine whether each set is a subspace. If yes, prove it. If no, give a counterexample.

   (a) $W = \left\{ \begin{pmatrix} x \\ y \end{pmatrix} : x \geq 0, y \geq 0 \right\}$ (first quadrant)

   (b) $U = \left\{ \begin{pmatrix} x \\ y \\ z \end{pmatrix} : x + 2y - z = 0 \right\}$

   (c) $V = \left\{ \begin{pmatrix} x \\ y \end{pmatrix} : xy = 0 \right\}$ (axes union)

### Linear Independence and Basis

3. **Testing independence**: Determine whether the following vectors are linearly independent:

   (a) $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}$

   (b) $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$

   (c) $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 1 \\ 4 \\ 9 \end{pmatrix}$

4. **Finding a basis**: Find a basis for $\operatorname{Col}(A)$ for:

   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$$

   Use cross-filling, then verify your basis is linearly independent and spans.

5. **Dimension practice**: What is $\dim(\operatorname{Col}(B))$ for:

   $$B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 0 \end{pmatrix}$$

### Understanding the Proof

6. **Why trace works**:

   (a) Verify $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ for:
   $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

   (b) Explain why this property is **crucial** for proving all bases have the same size

7. **Change-of-basis matrices**: For $W = \operatorname{span}\left\{ \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ -1 \end{pmatrix} \right\}$:

   (a) Verify this is a basis for $\mathbb{R}^2$

   (b) Find another basis $\{\mathbf{v}_1, \mathbf{v}_2\}$ for $\mathbb{R}^2$

   (c) Find the change-of-basis matrices $P$ and $Q$ relating them

   (d) Verify $PQ$ and $QP$ are identity matrices

### Applications

8. **Rank via dimension**: For each matrix, find $\operatorname{rank}(A)$ by finding $\dim(\operatorname{Col}(A))$:

   (a) $A = \begin{pmatrix} 1 & 2 \\ 3 & 6 \end{pmatrix}$

   (b) $B = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$

   Compare with cross-filling — do you get the same rank?

9. **Mother body argument**: For:

   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$$

   Show explicitly that $\mathbf{u} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ (column of $U$) is a linear combination of columns of $A$.

### Challenge Problems

10. **Different bases, same dimension**: Find **three different bases** for $\mathbb{R}^2$ and verify they all have 2 vectors.

11. **Rank inequalities**:

    (a) Prove: $\operatorname{rank}(A + B) \leq \operatorname{rank}(A) + \operatorname{rank}(B)$

    (b) Find examples where equality holds and where strict inequality holds

12. **Left vs Right cancellation**:

    (a) We proved linear independence gives **left** cancellation ($UP = UQ \Rightarrow P = Q$). What about **right** cancellation ($PU = QU \Rightarrow P = Q$)?

    (b) When does right cancellation hold? (Hint: Think about rows instead of columns)
