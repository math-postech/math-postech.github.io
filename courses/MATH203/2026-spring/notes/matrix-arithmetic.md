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

## Looking Ahead

This week we established the **foundational understanding of matrix multiplication** through four complementary perspectives and introduced the concepts of the identity matrix and matrix inverses.

**Next lecture**, we will explore:
- **Row and Column Operations**: The deep logic behind contravariant (row) and covariant (column) operations
- **Solving Matrix Equations**: How to find $B$ from $AB = C$ using simultaneous operations
- **Computing Inverses**: Systematic methods for finding $A^{-1}$
- **Cross-Filling Method**: A unified computational technique based on the rank-one sum perspective

The key insight we developed today—that matrices are sums of rank-one pieces—will become the foundation for all our computational methods going forward.

---

## Exercises

1. **Entry-by-entry**: Compute $AB$ for $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 4 \\ 2 & 0 \end{pmatrix}$.

2. **Column view**: For the same $A, B$, compute each column of $AB$ as a linear combination.

3. **Row view**: Compute each row of $AB$ as a linear combination.

4. **Rank-one sum**: Decompose $AB$ into rank-one pieces.

5. **Size compatibility**: Which products are defined? What are their sizes?
   - $(3 \times 2)(2 \times 5)$
   - $(4 \times 3)(4 \times 3)$
   - $(5 \times 1)(1 \times 5)$

6. **Conceptual**: Explain using the ingredient table metaphor why changing basic ingredients requires row operations on both $A$ and $C$.

7. **Identity verification**: Verify that $I_2 A = A I_2 = A$ for $A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$.

---

*Last updated: 2026-02-21*
