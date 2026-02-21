# Week 1: Matrix Arithmetic

> **Topics**: §1.1–1.2 — Matrix Product, Row and Column Operations
> **Date**: Feb 23–26, 2026

---

## Introduction

This week develops the foundational concepts of matrix computation. We will understand the matrix product $AB = C$ from **four complementary perspectives**: entry-by-entry computation, column view, row view, and sum-of-rank-one view. Mastering these multiple interpretations is essential for the entire course.

---

## §1.1 Matrix Product $AB = C$

### Motivating Example: The Ingredient Table

Consider a coffee shop that makes three beverages from four raw materials:

**Beverage Recipes (Semi-finished products from raw materials)**:
- Milk 🥛: needs 1 × 🐄 (cow)
- Coffee ☕: needs 2 × 🫘 (bean)
- Tea 🍵: needs 2 × 🍃 (leaf) + 1 × 🍋 (lemon)

We organize this as a **recipe table** (matrix $A$):

$$A = \begin{array}{c|ccc}
 & \text{🥛} & \text{☕} & \text{🍵} \\
\hline
\text{🍃} & 0 & 0 & 2 \\
\text{🍋} & 0 & 0 & 1 \\
\text{🫘} & 0 & 2 & 0 \\
\text{🐄} & 1 & 0 & 0
\end{array}
= \begin{pmatrix}
0 & 0 & 2 \\
0 & 0 & 1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}$$

- **Rows** = raw materials (basic ingredients 🍃🍋🫘🐄)
- **Columns** = beverages (middle products 🥛☕🍵)
- **Entry $a_{ij}$** = amount of material $i$ needed for beverage $j$

Now the shop creates **meal sets** (final products from beverages):

**Meal Set Recipes**:
- Set 1 🍱: needs 2 × 🥛 + 1 × 🍵
- Set 2 🍜: needs 1 × 🥛 + 2 × ☕ + 1 × 🍵

We organize this as another recipe table (matrix $B$):

$$B = \begin{array}{c|cc}
 & \text{🍱} & \text{🍜} \\
\hline
\text{🥛} & 2 & 1 \\
\text{☕} & 0 & 2 \\
\text{🍵} & 1 & 1
\end{array}
= \begin{pmatrix}
2 & 1 \\
0 & 2 \\
1 & 1
\end{pmatrix}$$

**Question**: To make meal sets, how many raw materials do I need?

We want a **direct recipe** from raw materials to final products. This operation of **combining two recipe tables** is called **matrix multiplication**: $C = AB$.

```mermaid
---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#BB2528'
    primaryTextColor: '#fff'
    primaryBorderColor: '#7C0000'
    lineColor: '#F8B229'
    secondaryColor: '#006100'
    tertiaryColor: '#fff'
---
graph LR
    x[Basic Ingredients] -->|A| Ax[Middle Products]
    Ax -->|B| BAx[Final Products]
    x -->|C = AB| BAx
```

**The production pipeline**:
- Matrix $A$: Basic ingredients → Middle products
- Matrix $B$: Middle products → Final products
- Matrix $C = AB$: Basic ingredients → Final products (direct)

::: remark
**Why $AB$ not $BA$?**
This is Earth's convention: left factor comes first in the production chain, right factor comes later. We write $AB$ meaning "$A$ feeds into $B$". The basic ingredients (rows of $A$) → middle products (columns of $A$ = rows of $B$) → final products (columns of $B$).
:::

---

### Updating the Ingredient Table: Row and Column Operations

What happens when we **update** the ingredient table?

::: proposition
**Changing basic ingredients = Row operations on $A$ and $C$**

Suppose we decide to change our measurement unit for basic ingredients (e.g., from kg to grams). This affects:
- Matrix $A$ (rows change: different amounts of basic ingredients)
- Matrix $C$ (rows change: direct recipe from basic ingredients also updates)
- Matrix $B$ is **unchanged** (middle products → final products relationship stays the same)
:::

::: proposition
**Changing final products = Column operations on $B$ and $C$**

Suppose we add a new meal set (a new final product). This affects:
- Matrix $B$ (columns change: new column for the new meal set)
- Matrix $C$ (columns change: we need a new direct recipe for the new meal set)
- Matrix $A$ is **unchanged** (basic ingredients → middle products relationship stays the same)
:::

**Visual summary**:

In the equation $C = AB$:
- **Basic ingredients** appear in: rows of $A$, rows of $C$
- **Middle products** appear in: columns of $A$, rows of $B$
- **Final products** appear in: columns of $B$, columns of $C$

Therefore:
- Updating basic ingredients → row operations on $A$ and $C$ simultaneously
- Updating final products → column operations on $B$ and $C$ simultaneously

::: remark
**The key insight**
Simultaneous row operations on $A$ and $C$ preserve the equation $C = AB$ because $B$ stays unchanged. Similarly, simultaneous column operations on $B$ and $C$ preserve the equation because $A$ stays unchanged.

This observation is the foundation of **row reduction** and **Gaussian elimination**, which we'll develop in Week 2-3 using the **cross-filling method**.
:::

---

### Matrix Sizes and Compatibility

::: proposition
**Compatibility Rule for Matrix Multiplication**
The product $AB$ is defined **if and only if**:
$$\text{number of columns of } A = \text{number of rows of } B$$
:::

In our example:
- $A$ is $4 \times 3$ (4 raw materials, 3 beverages)
- $B$ is $3 \times 2$ (3 beverages, 2 meal sets)
- Compatible! Both middle numbers equal 3

::: proposition
**Size of the Product**
If $A$ is $m \times n$ and $B$ is $n \times p$, then $C = AB$ is $m \times p$.

$$\underbrace{(m \times n)}_{A} \underbrace{(n \times p)}_{B} \longrightarrow \underbrace{(m \times p)}_{C}$$
:::

**Mnemonic**: The "outer" dimensions survive; the "inner" dimension (which must match) disappears.

---

## How to Multiply Matrices: Four Perspectives

We now compute $C = AB$ using **four different methods**. All give the same answer.

---

### Perspective 0: Entry-by-Entry (Dot Product Formula)

This is the **direct computational formula** taught in most textbooks.

::: proposition
**Entry-by-Entry Formula**
The entry $c_{ij}$ (row $i$, column $j$ of $C$) is the **dot product** of row $i$ of $A$ with column $j$ of $B$:
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{in}b_{nj}$$
:::

**Visual**: To compute $c_{ij}$, place row $i$ of $A$ **over** column $j$ of $B$, multiply corresponding entries, and sum:

$$\begin{pmatrix}
  &   & \cdot &   &   \\
  &   & \cdot &   &   \\
\color{red}a_{i1} & \color{red}a_{i2} & \color{red}\cdots & \color{red}a_{in} &   \\
  &   & \cdot &   &   \\
  &   & \cdot &   &
\end{pmatrix}
\begin{pmatrix}
  &   & \color{blue}b_{1j} &   &   \\
  &   & \color{blue}b_{2j} &   &   \\
  &   & \color{blue}\vdots &   &   \\
  &   & \color{blue}b_{nj} &   &
\end{pmatrix}
= \begin{pmatrix}
  &   & \cdot &   &   \\
  &   & \cdot &   &   \\
  &   & \color{purple}c_{ij} &   &   \\
  &   & \cdot &   &   \\
  &   & \cdot &   &
\end{pmatrix}$$

where $\color{purple}c_{ij} = \color{red}a_{i1}\color{blue}b_{1j} + \color{red}a_{i2}\color{blue}b_{2j} + \cdots + \color{red}a_{in}\color{blue}b_{nj}$.

::: example
**Computing $c_{22}$ (lemon 🍋 needed for meal set 2 🍜)**

Using our coffee shop example:
$$A = \begin{pmatrix}
0 & 0 & 2 \\
\color{red}0 & \color{red}0 & \color{red}1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}, \quad
B = \begin{pmatrix}
2 & \color{blue}1 \\
0 & \color{blue}2 \\
1 & \color{blue}1
\end{pmatrix}$$

Row 2 of $A$: $(0, 0, 1)$ — how much of each beverage uses 🍋
Column 2 of $B$: $\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$ — how much of each beverage needed for 🍜

$$c_{22} = (0)(1) + (0)(2) + (1)(1) = 0 + 0 + 1 = 1$$

**Interpretation**: Meal set 2 needs 1 × 🍵, and 🍵 uses 1 × 🍋, so total: **1 lemon**.
:::

**Complete computation**:

$$C = AB = \begin{pmatrix}
0 & 0 & 2 \\
0 & 0 & 1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}
\begin{pmatrix}
2 & 1 \\
0 & 2 \\
1 & 1
\end{pmatrix}
= \begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix}$$

::: remark
**When to use this perspective**
Use entry-by-entry computation when you need a **single specific entry** of $C$. If you need the entire matrix or a specific column/row, the next perspectives are more efficient.
:::

---

### Perspective 1: Column View (Linear Combinations of Columns)

Instead of computing entries one-by-one, compute **entire columns at once**.

::: proposition
**Column Perspective of Matrix Multiplication**
The $j$-th column of $C$ is a **linear combination** of the columns of $A$, with coefficients from the $j$-th column of $B$.
:::

**Detailed explanation**:

Let's denote:
- $A = \begin{pmatrix} | & | & & | \\ \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n \\ | & | & & | \end{pmatrix}$ (columns of $A$)
- $\mathbf{b}_j = \begin{pmatrix} b_{1j} \\ b_{2j} \\ \vdots \\ b_{nj} \end{pmatrix}$ (the $j$-th column of $B$)
- $\mathbf{c}_j = $ the $j$-th column of $C$

Then:
$$\mathbf{c}_j = A \mathbf{b}_j = b_{1j} \mathbf{a}_1 + b_{2j} \mathbf{a}_2 + \cdots + b_{nj} \mathbf{a}_n$$

::: example
**Computing the first column of $C$ (ingredients for meal set 1 🍱)**

Using our coffee shop matrices:
$$A = \begin{pmatrix}
\color{red}0 & \color{blue}0 & \color{green}2 \\
\color{red}0 & \color{blue}0 & \color{green}1 \\
\color{red}0 & \color{blue}2 & \color{green}0 \\
\color{red}1 & \color{blue}0 & \color{green}0
\end{pmatrix}
= \begin{pmatrix}
| & | & | \\
\color{red}\mathbf{a}_1 & \color{blue}\mathbf{a}_2 & \color{green}\mathbf{a}_3 \\
| & | & |
\end{pmatrix}$$

$$B = \begin{pmatrix}
\color{red}2 & 1 \\
\color{blue}0 & 2 \\
\color{green}1 & 1
\end{pmatrix}$$

The first column of $B$ is: $\mathbf{b}_1 = \begin{pmatrix} \color{red}2 \\ \color{blue}0 \\ \color{green}1 \end{pmatrix}$

This tells us: **Meal set 1** needs $\color{red}2$ × 🥛 + $\color{blue}0$ × ☕ + $\color{green}1$ × 🍵.

**Step-by-step breakdown**:

| Beverage | Amount needed | Raw materials for that beverage | Contribution to meal set |
|----------|---------------|--------------------------------|-------------------------|
| 🥛 (milk) | $\color{red}2$ | $\mathbf{a}_1 = \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix}$ | $\color{red}2 \times \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix} = \begin{pmatrix} 0\\0\\0\\2 \end{pmatrix}$ |
| ☕ (coffee) | $\color{blue}0$ | $\mathbf{a}_2 = \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix}$ | $\color{blue}0 \times \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix} = \begin{pmatrix} 0\\0\\0\\0 \end{pmatrix}$ |
| 🍵 (tea) | $\color{green}1$ | $\mathbf{a}_3 = \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix}$ | $\color{green}1 \times \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix} = \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix}$ |
| **Total** |  |  | $\begin{pmatrix} 2\\1\\0\\2 \end{pmatrix}$ |

**As a linear combination**:
$$\mathbf{c}_1 = A\mathbf{b}_1 = \color{red}2 \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix} + \color{blue}0 \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix} + \color{green}1 \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix} = \begin{pmatrix} 2\\1\\0\\2 \end{pmatrix}$$

**Interpretation**: Meal set 1 🍱 requires:
- 2 × 🍃 (leaf)
- 1 × 🍋 (lemon)
- 0 × 🫘 (bean)
- 2 × 🐄 (cow)
:::

**General formula**:

$$C = AB = A \begin{pmatrix}
| & | & & | \\
\mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_p \\
| & | & & |
\end{pmatrix}
= \begin{pmatrix}
| & | & & | \\
A\mathbf{b}_1 & A\mathbf{b}_2 & \cdots & A\mathbf{b}_p \\
| & | & & |
\end{pmatrix}$$

Each column of $C$ is computed independently as $A$ times the corresponding column of $B$.

::: remark
**When to use this perspective**
- Solving linear systems $Ax = b$ (the solution $x$ gives coefficients for a linear combination)
- Understanding column space: $\text{Col}(AB) \subseteq \text{Col}(A)$
- Determining if a vector is in the span of a set of vectors
:::

---

### Perspective 2: Row View (Linear Combinations of Rows)

By symmetry, we can also compute **entire rows at once**.

::: proposition
**Row Perspective of Matrix Multiplication**
The $i$-th row of $C$ is a **linear combination** of the rows of $B$, with coefficients from the $i$-th row of $A$.
:::

**Detailed explanation**:

Let's denote:
- $\mathbf{a}_i^T =$ the $i$-th row of $A$ (a row vector)
- $B = \begin{pmatrix} - \mathbf{b}_1^T - \\ - \mathbf{b}_2^T - \\ \vdots \\ - \mathbf{b}_n^T - \end{pmatrix}$ (rows of $B$)
- $\mathbf{c}_i^T =$ the $i$-th row of $C$

Then:
$$\mathbf{c}_i^T = \mathbf{a}_i^T B = a_{i1} \mathbf{b}_1^T + a_{i2} \mathbf{b}_2^T + \cdots + a_{in} \mathbf{b}_n^T$$

::: example
**Computing the first row of $C$ (leaf 🍃 requirements for both meal sets)**

$$A = \begin{pmatrix}
\color{red}0 & \color{red}0 & \color{red}2 \\
0 & 0 & 1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}, \quad
B = \begin{pmatrix}
- \color{blue}\mathbf{b}_1^T - \\
- \color{green}\mathbf{b}_2^T - \\
- \color{orange}\mathbf{b}_3^T -
\end{pmatrix}
= \begin{pmatrix}
\color{blue}2 & \color{blue}1 \\
\color{green}0 & \color{green}2 \\
\color{orange}1 & \color{orange}1
\end{pmatrix}$$

First row of $A$: $\mathbf{a}_1^T = (\color{red}0, \color{red}0, \color{red}2)$
This tells us: leaf 🍃 is used by: $\color{red}0$ × 🥛 + $\color{red}0$ × ☕ + $\color{red}2$ × 🍵

$$\mathbf{c}_1^T = \color{red}0 \times (\color{blue}2, \color{blue}1) + \color{red}0 \times (\color{green}0, \color{green}2) + \color{red}2 \times (\color{orange}1, \color{orange}1)$$
$$= (0, 0) + (0, 0) + (2, 2) = (2, 2)$$

**Interpretation**: Since only tea uses leaf, and tea is needed $2 \times 1 = 2$ times for each meal set, we need 2 leaves for 🍱 and 2 leaves for 🍜.
:::

**General formula**:

$$C = AB = \begin{pmatrix}
- \mathbf{a}_1^T - \\
- \mathbf{a}_2^T - \\
\vdots \\
- \mathbf{a}_m^T -
\end{pmatrix} B
= \begin{pmatrix}
- \mathbf{a}_1^T B - \\
- \mathbf{a}_2^T B - \\
\vdots \\
- \mathbf{a}_m^T B -
\end{pmatrix}$$

::: remark
**When to use this perspective**
- Understanding row space: $\text{Row}(AB) \subseteq \text{Row}(B)$
- Left multiplication by row vectors (e.g., computing $\mathbf{y}^T A$)
- Eigenvalue problems later in the course
:::

---

### Perspective 3: Sum-of-Rank-One (Outer Product View)

This is the most important perspective for this course's **cross-filling method** (§1.3).

::: proposition
**Sum-of-Rank-One Decomposition**
The product $AB$ can be written as a **sum of rank-one matrices**:
$$AB = \sum_{k=1}^{n} \mathbf{a}_k \mathbf{b}_k^T = \mathbf{a}_1 \mathbf{b}_1^T + \mathbf{a}_2 \mathbf{b}_2^T + \cdots + \mathbf{a}_n \mathbf{b}_n^T$$
where $\mathbf{a}_k$ is the $k$-th column of $A$ and $\mathbf{b}_k^T$ is the $k$-th row of $B$.
:::

**What is a rank-one matrix?**

A **rank-one matrix** has the form $\mathbf{u} \mathbf{v}^T$ where $\mathbf{u}$ is a column vector and $\mathbf{v}^T$ is a row vector.

::: example
**Rank-one matrix example**

$$\mathbf{u} = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}, \quad \mathbf{v}^T = \begin{pmatrix} 4 & 5 \end{pmatrix}$$

$$\mathbf{u} \mathbf{v}^T = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} \begin{pmatrix} 4 & 5 \end{pmatrix} = \begin{pmatrix}
2 \cdot 4 & 2 \cdot 5 \\
1 \cdot 4 & 1 \cdot 5 \\
3 \cdot 4 & 3 \cdot 5
\end{pmatrix} = \begin{pmatrix}
8 & 10 \\
4 & 5 \\
12 & 15
\end{pmatrix}$$

Notice: **every row is a multiple of $(4, 5)$**, and **every column is a multiple of $(2, 1, 3)^T$**. This is the defining property of rank-one matrices.
:::

**Decomposing $AB$ into rank-one pieces**:

::: example
**Decomposing our coffee shop product**

$$A = \begin{pmatrix}
\color{red}0 & \color{blue}0 & \color{green}2 \\
\color{red}0 & \color{blue}0 & \color{green}1 \\
\color{red}0 & \color{blue}2 & \color{green}0 \\
\color{red}1 & \color{blue}0 & \color{green}0
\end{pmatrix}, \quad
B = \begin{pmatrix}
\color{red}2 & \color{red}1 \\
\color{blue}0 & \color{blue}2 \\
\color{green}1 & \color{green}1
\end{pmatrix}$$

**Step 1**: Identify columns of $A$ and rows of $B$:
$$\mathbf{a}_1 = \begin{pmatrix} \color{red}0\\\color{red}0\\\color{red}0\\\color{red}1 \end{pmatrix}, \quad
\mathbf{a}_2 = \begin{pmatrix} \color{blue}0\\\color{blue}0\\\color{blue}2\\\color{blue}0 \end{pmatrix}, \quad
\mathbf{a}_3 = \begin{pmatrix} \color{green}2\\\color{green}1\\\color{green}0\\\color{green}0 \end{pmatrix}$$

$$\mathbf{b}_1^T = \begin{pmatrix} \color{red}2 & \color{red}1 \end{pmatrix}, \quad
\mathbf{b}_2^T = \begin{pmatrix} \color{blue}0 & \color{blue}2 \end{pmatrix}, \quad
\mathbf{b}_3^T = \begin{pmatrix} \color{green}1 & \color{green}1 \end{pmatrix}$$

**Step 2**: Compute each rank-one piece:

$$R_1 = \mathbf{a}_1 \mathbf{b}_1^T = \begin{pmatrix} \color{red}0\\\color{red}0\\\color{red}0\\\color{red}1 \end{pmatrix} \begin{pmatrix} \color{red}2 & \color{red}1 \end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
0 & 0 \\
\color{red}2 & \color{red}1
\end{pmatrix}$$

$$R_2 = \mathbf{a}_2 \mathbf{b}_2^T = \begin{pmatrix} \color{blue}0\\\color{blue}0\\\color{blue}2\\\color{blue}0 \end{pmatrix} \begin{pmatrix} \color{blue}0 & \color{blue}2 \end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\color{blue}0 & \color{blue}4 \\
0 & 0
\end{pmatrix}$$

$$R_3 = \mathbf{a}_3 \mathbf{b}_3^T = \begin{pmatrix} \color{green}2\\\color{green}1\\\color{green}0\\\color{green}0 \end{pmatrix} \begin{pmatrix} \color{green}1 & \color{green}1 \end{pmatrix} = \begin{pmatrix}
\color{green}2 & \color{green}2 \\
\color{green}1 & \color{green}1 \\
0 & 0 \\
0 & 0
\end{pmatrix}$$

**Step 3**: Sum the rank-one pieces:
$$C = AB = R_1 + R_2 + R_3 = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
0 & 0 \\
2 & 1
\end{pmatrix} + \begin{pmatrix}
0 & 0 \\
0 & 0 \\
0 & 4 \\
0 & 0
\end{pmatrix} + \begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 0 \\
0 & 0
\end{pmatrix} = \begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix}$$
:::

::: remark
**Why is this perspective important?**
The sum-of-rank-one view reveals the **additive structure** of matrices. This is the foundation for:
- **Cross-filling method** (§1.3): decompose $A$ into rank-one pieces
- **Rank computation**: rank = number of nonzero rank-one pieces
- **Matrix factorization**: $A = UV$ where columns of $U$ and rows of $V$ give the rank-one pieces
- **Spectral decomposition** (Chapter 5): $A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots$

This is the **central insight** of the course: matrices are sums of simple (rank-one) pieces.
:::

---

## Summary: Four Perspectives on $AB = C$

| Perspective | What it computes | Formula | Best for |
|-------------|------------------|---------|----------|
| **0. Entry-by-entry** | Individual entries $c_{ij}$ | $c_{ij} = \sum_k a_{ik}b_{kj}$ | Single entry needed |
| **1. Column view** | Columns of $C$ | $\mathbf{c}_j = A\mathbf{b}_j = \sum_k b_{kj} \mathbf{a}_k$ | Solving $Ax=b$, column space |
| **2. Row view** | Rows of $C$ | $\mathbf{c}_i^T = \mathbf{a}_i^T B = \sum_k a_{ik} \mathbf{b}_k^T$ | Row space, eigenvalues |
| **3. Rank-one sum** | Full matrix as sum | $C = \sum_k \mathbf{a}_k \mathbf{b}_k^T$ | Cross-filling, rank, factorization |

All four perspectives give the **same matrix $C$**. They are not four different products—they are four ways to understand the **same operation**.

---

## Inverse Matrices

### The Identity Matrix: "Do Nothing" Recipe

Before discussing inverses, we introduce the **identity matrix** — the matrix that represents "doing nothing".

::: example
**What if the ingredient table says "tea = tea"?**

Suppose our recipe table says:
$$\begin{array}{c|ccc}
  & \text{🍵} & \text{🥛} & \text{☕} \\
\hline
\text{🍵} & 1 & 0 & 0 \\
\text{🥛} & 0 & 1 & 0 \\
\text{☕} & 0 & 0 & 1
\end{array}$$

This table says:
- 🍵 = 1 × 🍵 + 0 × 🥛 + 0 × ☕ (tea equals tea)
- 🥛 = 0 × 🍵 + 1 × 🥛 + 0 × ☕ (milk equals milk)
- ☕ = 0 × 🍵 + 0 × 🥛 + 1 × ☕ (coffee equals coffee)

This is a **trivial statement** — it says nothing! The ingredients and products are **identical** and in the same order. Only the diagonal has 1's, all other entries are 0.
:::

::: proposition
**Definition of Identity Matrix**
An $n \times n$ matrix with 1's on the diagonal and 0's elsewhere is called the **$n$-th order identity matrix**, denoted $I_n$ or simply $I$.

$$I_3 = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}$$
:::

::: proposition
**Property of the Identity Matrix**
For any $m \times n$ matrix $A$:
$$I_m A = A \quad \text{and} \quad A I_n = A$$
The identity matrix "does nothing" when multiplied.
:::

**Why?**
- $I_m A = A$: If basic ingredients = middle products (left factor is $I$), then the direct recipe equals the original recipe.
- $A I_n = A$: If middle products = final products (right factor is $I$), then the direct recipe equals the original recipe.

---

### Definition of Inverse

::: proposition
**Definition of Matrix Inverse**
A square matrix $A$ is **invertible** (or **nonsingular**) if there exists a matrix $A^{-1}$ such that:
$$A^{-1}A = I \quad \text{and} \quad AA^{-1} = I$$
:::

**Interpretation**: $A^{-1}$ **reverses** the process of $A$. If $A$ converts basic ingredients to middle products, then $A^{-1}$ converts middle products back to basic ingredients.

::: proposition
**Only square matrices can have inverses**

**Intuitive argument**: If $A$ is $m \times n$, a left inverse $B$ would be $n \times m$. For $BA = I_n$ and $AC = I_m$ to both hold, we'd need $m = n$ (the dimensions must match on both sides).

**Formal proof** (using properties beyond our current scope): This follows from the **rank-nullity theorem** and the fact that invertible matrices must have full rank. We will prove this rigorously in Chapter 2 after developing the theory of vector spaces and dimension.
:::

::: remark
**Note**: Some textbooks prove this using the trace (sum of diagonal elements). However, we have not yet introduced the trace, and that proof requires additional theory (trace is well-defined, trace is independent of basis). We defer the full justification until we have the necessary tools.
:::

---

### Inverse of a Product

::: proposition
**Inverse of a Product (Socks and Shoes Rule)**
If $A$ and $B$ are both invertible square matrices of the same size, then:
$$(AB)^{-1} = B^{-1}A^{-1}$$

**Proof**: Verify both conditions:

**(1) Right inverse**:
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$$

**(2) Left inverse**:
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = B^{-1}B = I$$

Since $(AB)(B^{-1}A^{-1}) = I$ and $(B^{-1}A^{-1})(AB) = I$, we have $(AB)^{-1} = B^{-1}A^{-1}$. ∎
:::

::: remark
**Why "socks and shoes"?**
To reverse putting on socks then shoes:
1. First remove **shoes** ($B^{-1}$)
2. Then remove **socks** ($A^{-1}$)

The order reverses! Same with matrix inverses.

```mermaid
---
config:
  theme: 'base'
  themeVariables:
    primaryColor: '#BB2528'
    primaryTextColor: '#fff'
    primaryBorderColor: '#7C0000'
    lineColor: '#F8B229'
    secondaryColor: '#006100'
    tertiaryColor: '#fff'
---
graph LR
    1[Bare Feet] -->|A: Socks| 2[Socks On]
    2 -->|B: Shoes| 3[Shoes On]
    3 -->|B^-1: Remove Shoes| 2
    2 -->|A^-1: Remove Socks| 1
```
:::

---

### Invariance Under Simultaneous Operations

::: proposition
**Products unchanged by simultaneous operations**

1. **$A^{-1}B$ is invariant** under the same row operations on $A$ and $B$
   **Reason**: $A(A^{-1}B) = B$. If we apply row ops to $A$ and $B$ simultaneously, the equation remains true.

2. **$AB^{-1}$ is invariant** under the same column operations on $A$ and $B$
   **Reason**: $(AB^{-1})B = A$. If we apply column ops to $A$ and $B$ simultaneously, the equation remains true.
:::

**Visual representation** (production pipelines):

- For $A^{-1}B$:
$$\begin{array}{ccc}
\text{Output} & \xleftarrow{A} & \text{Intermediate} & \xleftarrow{B} & \text{Input}
\end{array}$$

- For $AB^{-1}$:
$$\begin{array}{ccc}
\text{Input} & \xrightarrow{B} & \text{Intermediate} & \xrightarrow{A} & \text{Output}
\end{array}$$

::: remark
**Practical use**
When simplifying $A^{-1}B$, perform row operations on $A$ and $B$ simultaneously — no need to compute $A^{-1}$ explicitly!
:::

---

## §1.2 Row and Column Operations

We now formalize the observations from §1.1 about updating ingredient tables.

### The Identity Matrix as Starting Point

The identity matrix $I$ represents the "neutral" or "do-nothing" transformation. We can think of $I$ as our **starting recipe**, and other matrices as **modifications** of this starting point.

::: proposition
**Any matrix can be viewed as a transformation of $I$**

**Row perspective**: If $A$ can be obtained from $I_n$ by a sequence of row operations, then applying those same row operations to any matrix $B$ produces $AB$.

**Column perspective**: If $B$ can be obtained from $I_n$ by a sequence of column operations, then applying those same column operations to any matrix $A$ produces $AB$.
:::

This observation is **fundamental**: it says that matrices **encode operations**.

---

### Left Multiplication = Row Operations

::: example
**Computing a product via row operations**

Suppose we want to compute:
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} ? & ? \\ ? & ? \\ ? & ? \end{pmatrix}$$

**Step 1**: Notice that the left factor can be obtained from $I$ by one row operation:
$$I = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \xrightarrow{R_2 \gets R_2 + R_3} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$$

**Step 2**: We know that $IB = B$:
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix}$$

**Step 3**: Apply the same row operation ($R_2 \gets R_2 + R_3$) to both sides:
- Left side: $I \to \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$
- Right side: $B \to \begin{pmatrix} 1 & 2 \\ 1+2 & 3+1 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 2 & 1 \end{pmatrix}$

**Answer**:
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 2 & 1 \end{pmatrix}$$
:::

::: proposition
**Left Multiplication Performs Row Operations**

If $A$ is obtained from $I_n$ by a sequence of row operations, then for any matrix $B$:
$$C = AB \text{ is obtained by applying those same row operations to } B$$

**In other words**: Record how $I$ transforms into $A$. Apply that exact same transformation to $B$. The result is $AB$.
:::

::: remark
**Key insight**: The matrix $A$ **stores and records** the row operations. We can think of $A$ as a "**container**" or "**recipe**" for row operations.
:::

---

### Right Multiplication = Column Operations

By complete symmetry:

::: proposition
**Right Multiplication Performs Column Operations**

If $B$ is obtained from $I_n$ by a sequence of column operations, then for any matrix $A$:
$$C = AB \text{ is obtained by applying those same column operations to } A$$

**In other words**: Record how $I$ transforms into $B$. Apply that exact same transformation to $A$. The result is $AB$.
:::

::: example
**Computing via column operations**

$$\begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = ?$$

The right factor is obtained from $I_2$ by: $C_1 \gets C_1 + 2C_2$.

Starting from:
$$\begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix}$$

Apply $C_1 \gets C_1 + 2C_2$ to the left factor and product:
$$\begin{pmatrix} 1 & 2 \\ 1 & 3 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1+2(2) & 2 \\ 1+2(3) & 3 \\ 2+2(1) & 1 \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 7 & 3 \\ 4 & 1 \end{pmatrix}$$
:::

---

### Transformation Matrices: Containers for Operations

We can now formalize the concept of using matrices to **store** operations.

::: proposition
**Matrices as Operation Containers**

- A **row transformation matrix** $E$ stores a row operation. Left-multiplying by $E$ applies that operation:
  $$EA \text{ applies the row operation to } A$$

- A **column transformation matrix** $F$ stores a column operation. Right-multiplying by $F$ applies that operation:
  $$AF \text{ applies the column operation to } A$$
:::

::: example
**Elementary row operations as matrices**

| Operation | Matrix $E$ | Effect of $EA$ |
|-----------|------------|----------------|
| Swap $R_1 \leftrightarrow R_2$ | $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ | Swaps first two rows of $A$ |
| Multiply $R_2$ by 5 | $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ | Multiplies second row of $A$ by 5 |
| Add $3R_2$ to $R_1$ | $\begin{pmatrix} 1 & 3 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ | Adds 3 times second row to first row |
:::

---

### Composition of Operations

What happens when we apply **multiple** row operations?

::: proposition
**Composition of Transformation Matrices**

If $E_1$ and $E_2$ are row transformation matrices, then $E_2 E_1$ represents:
1. First apply $E_1$'s operation
2. Then apply $E_2$'s operation

**Reason**:
$$A \xrightarrow{E_1} E_1 A \xrightarrow{E_2} E_2(E_1 A) = (E_2 E_1)A$$
:::

::: remark
**Order matters!**
- **Left multiplication** $E_2 E_1 A$: apply $E_1$ first, then $E_2$
- **Right multiplication** $A F_1 F_2$: apply $F_1$ first, then $F_2$

The order is opposite! This is because matrix multiplication is read from right to left for transformations.
:::

---

### Types of Row/Column Operations

Not all operations are reversible. We classify them:

::: proposition
**Elementary (Reversible) Operations**

The following three operations are **invertible** (can be undone):

1. **Swap** two rows (or columns)
   - **Reverse**: Swap them again
   - **Why reversible**: Information preserved

2. **Scale** a row (or column) by nonzero $c \neq 0$
   - **Reverse**: Scale by $1/c$
   - **Why reversible**: Can recover original by dividing

3. **Add** a multiple of one row (or column) to another
   - **Reverse**: Subtract the same multiple
   - **Why reversible**: Can undo by opposite operation
:::

These correspond to **invertible matrices** (elementary matrices).

::: proposition
**Non-Elementary (Non-Reversible) Operations**

The following operations **lose information** and cannot be undone:

1. **Copy** a row (or column)
   - **Why not reversible**: Which was the original?

2. **Delete** a row (or column)
   - **Why not reversible**: Information permanently lost

3. **Scale by zero** (multiply a row/column by 0)
   - **Why not reversible**: Original values gone
:::

::: remark
**Why does this matter?**
- **Gaussian elimination** uses only elementary operations → preserves information about solutions
- **Invertible matrices** correspond to sequences of elementary operations
- **Non-elementary operations** change the solution set or destroy solvability
:::

---

### Finding $A^{-1}$ Using Row Operations

We can now formalize the process of computing inverses.

::: proposition
**Row Operation Method for Computing $A^{-1}$**

**Procedure**:
1. Write the equation $A^{-1} = A^{-1} \cdot I$
2. Transform $A \to I$ using elementary row operations
3. Apply the **same row operations** to $I$ on the right side
4. When $A$ becomes $I$, cancel $I^{-1} = I$ from the left
5. The result is $A^{-1}$

**Why it works**: If row operations $E_k \cdots E_1$ transform $A \to I$, then:
$$E_k \cdots E_1 \cdot A = I \implies A^{-1} = E_k \cdots E_1$$
Applying the same operations to $I$ gives $E_k \cdots E_1 \cdot I = A^{-1}$.
:::

::: example
**Computing $A^{-1}$ using row operations**

Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Find $A^{-1}$.

**Setup**: Write $A^{-1} = A^{-1} \cdot I$
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

**Step 1**: $R_2 \gets R_2 - 3R_1$ (eliminate below pivot)
$$\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -3 & 1 \end{pmatrix}$$

**Step 2**: $R_2 \gets -\frac{1}{2}R_2$ (make pivot = 1)
$$\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 3/2 & -1/2 \end{pmatrix}$$

**Step 3**: $R_1 \gets R_1 - 2R_2$ (eliminate above pivot)
$$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$$

**Step 4**: Cancel $I^{-1} = I$:
$$A^{-1} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$$

**Verification**:
$$AA^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$ ✓
:::

::: remark
**Column operation method**
By symmetry, we can also compute $A^{-1}$ using column operations:
1. Write $A^{-1} = I \cdot A^{-1}$
2. Transform $A \to I$ using column operations
3. Apply same operations to $I$ on the left
4. When $A$ becomes $I$, the result is $A^{-1}$
:::

::: remark
**When to compute $A^{-1}$ explicitly?**

**DO compute** when:
- Problem explicitly asks for $A^{-1}$
- You need to multiply $A^{-1}$ by many different vectors

**DON'T compute** when:
- You only need $A^{-1}\mathbf{b}$ once → solve $A\mathbf{x} = \mathbf{b}$ instead
- Simplifying expressions like $A^{-1}BA$ → use row/column operations directly
:::

---

## Summary and Looking Ahead

This week we established **four perspectives on matrix multiplication $AB = C$**:

| Perspective | Computes | Key Use |
|-------------|----------|---------|
| **Entry-by-entry** | Individual $c_{ij}$ | Direct computation |
| **Column view** | Each column of $C$ | Linear systems, column space |
| **Row view** | Each row of $C$ | Row space |
| **Rank-one sum** | Full matrix | **Cross-filling (§1.3)**, rank |

We also learned:
- **Ingredient table metaphor**: $A$ = basic → middle, $B$ = middle → final, $C = AB$ = basic → final
- **Updating tables**: Row ops on $A,C$ or column ops on $B,C$ preserve $C = AB$
- **Identity matrix**: "Do nothing" transformation
- **Inverses**: Only square matrices, $(AB)^{-1} = B^{-1}A^{-1}$
- **Transformation matrices**: $E$ stores operations, $EA$ applies them
- **Elementary operations** are reversible, non-elementary operations lose information
- How to compute $A^{-1}$ using row/column operations

::: remark
**Next week: The Cross-Filling Method**

The **rank-one sum view** is the foundation for **cross-filling**, our unified computational technique for:
- Decomposing $A = R_1 + R_2 + \cdots + R_r$ (rank-one pieces)
- Factorizing $A = UV$
- Computing rank
- Solving $Ax = b$

This replaces traditional Gaussian elimination with a more elegant and general method.
:::

---

## Exercises

1. **Entry-by-entry**: Compute $AB$ for $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 4 \\ 2 & 0 \end{pmatrix}$.

2. **Column view**: For the same $A, B$, compute each column of $AB$ as a linear combination.

3. **Row view**: Compute each row of $AB$ as a linear combination.

4. **Rank-one sum**: Decompose $AB$ into rank-one pieces.

5. **Row operations**: What matrix $E$ swaps rows 1 and 3 of a $3 \times n$ matrix?

6. **Computing products**: Use row operations to compute:
   $$\begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$$

7. **Inverse**: Find $A^{-1}$ using row operations for $A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$.

8. **Composition**: If $E_1 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ (add $2R_2$ to $R_1$) and $E_2 = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$ (scale $R_2$ by 3), what operation does $E_2E_1$ represent?

9. **Size compatibility**: Which products are defined? What are their sizes?
   - $(3 \times 2)(2 \times 5)$
   - $(4 \times 3)(4 \times 3)$
   - $(5 \times 1)(1 \times 5)$

10. **Conceptual**: Explain using the ingredient table metaphor why changing basic ingredients requires row operations on both $A$ and $C$.

---

*Last updated: 2026-02-20*
