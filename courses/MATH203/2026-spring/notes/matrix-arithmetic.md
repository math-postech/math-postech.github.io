# Week 1: Matrix Arithmetic

> **Topics**: §1.1–1.2 — Matrix Product, Row and Column Operations
> **Date**: Feb 23–26, 2026

---

## Introduction

This week develops the foundational concepts of matrix computation. We will understand the matrix product $AB = C$ from **four complementary perspectives**: entry-by-entry computation, column view, row view, and sum-of-rank-one view. Mastering these multiple interpretations is essential for the entire course.

> [!RMK]
> **Pedagogical Philosophy**
> Traditional linear algebra courses teach one way to compute $AB$: the dot product formula. This course teaches **four equivalent ways**. Why? Because different problems require different perspectives. Cross-filling (§1.3) relies on the sum-of-rank-one view. Solving $Ax = b$ uses the column view. Understanding eigenvalues needs the row view. By developing all four perspectives now, we build a flexible foundation for advanced topics.

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

- **Rows** = raw materials (🍃, 🍋, 🫘, 🐄)
- **Columns** = beverages (🥛, ☕, 🍵)
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

We want a **direct recipe** from raw materials to final products:

$$C = \begin{array}{c|cc}
 & \text{🍱} & \text{🍜} \\
\hline
\text{🍃} & ? & ? \\
\text{🍋} & ? & ? \\
\text{🫘} & ? & ? \\
\text{🐄} & ? & ?
\end{array}$$

This operation of **combining two recipe tables** is called **matrix multiplication**: $C = AB$.

> [!RMK]
> **Why this order?**
> We write $AB$ (not $BA$) following the convention: left factor = earlier stage, right factor = later stage. The raw materials (rows of $A$) come before beverages (columns of $A$ = rows of $B$), which come before meal sets (columns of $B$).
>
> This is an arbitrary human convention. Aliens might use a different order. But on Earth, we must all agree, so remember: $AB$ means "$A$ feeds into $B$".

---

### Matrix Sizes and Compatibility

> [!PROP]
> **Compatibility Rule for Matrix Multiplication**
> The product $AB$ is defined **if and only if**:
> $$\text{number of columns of } A = \text{number of rows of } B$$

In our example:
- $A$ is $4 \times 3$ (4 raw materials, 3 beverages)
- $B$ is $3 \times 2$ (3 beverages, 2 meal sets)
- Compatible! Both middle numbers equal 3

> [!PROP]
> **Size of the Product**
> If $A$ is $m \times n$ and $B$ is $n \times p$, then $C = AB$ is $m \times p$.
>
> $$\underbrace{(m \times n)}_{A} \underbrace{(n \times p)}_{B} \longrightarrow \underbrace{(m \times p)}_{C}$$

**Mnemonic**: The "outer" dimensions survive; the "inner" dimension (which must match) disappears.

In our example: $(4 \times 3)(3 \times 2) \to (4 \times 2)$.

---

## How to Multiply Matrices: Four Perspectives

We now compute $C = AB$ using **four different methods**. All give the same answer.

---

### Perspective 0: Entry-by-Entry (Dot Product Formula)

This is the **direct computational formula** taught in most textbooks.

> [!PROP]
> **Entry-by-Entry Formula**
> The entry $c_{ij}$ (row $i$, column $j$ of $C$) is the **dot product** of row $i$ of $A$ with column $j$ of $B$:
> $$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{in}b_{nj}$$

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

> [!EXA]
> **Computing $c_{22}$ (lemon 🍋 needed for meal set 2 🍜)**
>
> Using our coffee shop example:
> $$A = \begin{pmatrix}
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
>
> Row 2 of $A$: $(0, 0, 1)$ — how much of each beverage uses 🍋
> Column 2 of $B$: $\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$ — how much of each beverage needed for 🍜
>
> $$c_{22} = (0)(1) + (0)(2) + (1)(1) = 0 + 0 + 1 = 1$$
>
> **Interpretation**: Meal set 2 needs 1 × 🍵, and 🍵 uses 1 × 🍋, so total: **1 lemon**.

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

Each entry is computed as:
- $c_{11} = (0)(2) + (0)(0) + (2)(1) = 2$
- $c_{12} = (0)(1) + (0)(2) + (2)(1) = 2$
- $c_{21} = (0)(2) + (0)(0) + (1)(1) = 1$
- $c_{22} = (0)(1) + (0)(2) + (1)(1) = 1$ ✓ (matches above)
- ... and so on for all 8 entries

> [!RMK]
> **When to use this perspective**
> Use entry-by-entry computation when you need a **single specific entry** of $C$. If you need the entire matrix or a specific column/row, the next perspectives are more efficient.

---

### Perspective 1: Column View (Linear Combinations of Columns)

Instead of computing entries one-by-one, compute **entire columns at once**.

> [!PROP]
> **Column Perspective of Matrix Multiplication**
> The $j$-th column of $C$ is a **linear combination** of the columns of $A$, with coefficients from the $j$-th column of $B$.

**Detailed explanation**:

Let's denote:
- $A = \begin{pmatrix} | & | & & | \\ \mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n \\ | & | & & | \end{pmatrix}$ (columns of $A$)
- $\mathbf{b}_j = \begin{pmatrix} b_{1j} \\ b_{2j} \\ \vdots \\ b_{nj} \end{pmatrix}$ (the $j$-th column of $B$)
- $\mathbf{c}_j = $ the $j$-th column of $C$

Then:
$$\mathbf{c}_j = A \mathbf{b}_j = b_{1j} \mathbf{a}_1 + b_{2j} \mathbf{a}_2 + \cdots + b_{nj} \mathbf{a}_n$$

This says: "The $j$-th column of $C$ is made by taking $b_{1j}$ copies of the first column of $A$, plus $b_{2j}$ copies of the second column of $A$, and so on."

> [!EXA]
> **Computing the first column of $C$ (ingredients for meal set 1 🍱)**
>
> Using our coffee shop matrices:
> $$A = \begin{pmatrix}
\color{red}0 & \color{blue}0 & \color{green}2 \\
\color{red}0 & \color{blue}0 & \color{green}1 \\
\color{red}0 & \color{blue}2 & \color{green}0 \\
\color{red}1 & \color{blue}0 & \color{green}0
\end{pmatrix}
= \begin{pmatrix}
| & | & | \\
\color{red}\mathbf{a}_1 & \color{blue}\mathbf{a}_2 & \color{green}\mathbf{a}_3 \\
| & | & |
\end{pmatrix}, \quad
B = \begin{pmatrix}
\color{red}2 & 1 \\
\color{blue}0 & 2 \\
\color{green}1 & 1
\end{pmatrix}$$
>
> The first column of $B$ is: $\mathbf{b}_1 = \begin{pmatrix} \color{red}2 \\ \color{blue}0 \\ \color{green}1 \end{pmatrix}$
>
> This tells us: **Meal set 1** needs $\color{red}2$ × 🥛 + $\color{blue}0$ × ☕ + $\color{green}1$ × 🍵.
>
> **Step-by-step breakdown**:
>
> | Beverage | Amount needed | Raw materials for that beverage | Contribution to meal set |
> |----------|---------------|--------------------------------|-------------------------|
> | 🥛 (milk) | $\color{red}2$ | $\mathbf{a}_1 = \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix}$ | $\color{red}2 \times \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix} = \begin{pmatrix} 0\\0\\0\\2 \end{pmatrix}$ |
> | ☕ (coffee) | $\color{blue}0$ | $\mathbf{a}_2 = \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix}$ | $\color{blue}0 \times \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix} = \begin{pmatrix} 0\\0\\0\\0 \end{pmatrix}$ |
> | 🍵 (tea) | $\color{green}1$ | $\mathbf{a}_3 = \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix}$ | $\color{green}1 \times \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix} = \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix}$ |
> | **Total** |  |  | $\begin{pmatrix} 2\\1\\0\\2 \end{pmatrix}$ |
>
> **As a linear combination**:
> $$\mathbf{c}_1 = A\mathbf{b}_1 = \color{red}2 \begin{pmatrix} 0\\0\\0\\1 \end{pmatrix} + \color{blue}0 \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix} + \color{green}1 \begin{pmatrix} 2\\1\\0\\0 \end{pmatrix} = \begin{pmatrix} 2\\1\\0\\2 \end{pmatrix}$$
>
> **Interpretation**: Meal set 1 🍱 requires:
> - 2 × 🍃 (leaf)
> - 1 × 🍋 (lemon)
> - 0 × 🫘 (bean)
> - 2 × 🐄 (cow)

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

> [!RMK]
> **When to use this perspective**
> - Solving linear systems $Ax = b$ (the solution $x$ gives coefficients for a linear combination)
> - Understanding column space: $\text{Col}(AB) \subseteq \text{Col}(A)$
> - Determining if a vector is in the span of a set of vectors

---

### Perspective 2: Row View (Linear Combinations of Rows)

By symmetry, we can also compute **entire rows at once**.

> [!PROP]
> **Row Perspective of Matrix Multiplication**
> The $i$-th row of $C$ is a **linear combination** of the rows of $B$, with coefficients from the $i$-th row of $A$.

**Detailed explanation**:

Let's denote:
- $\mathbf{a}_i^T =$ the $i$-th row of $A$ (a row vector)
- $B = \begin{pmatrix} - \mathbf{b}_1^T - \\ - \mathbf{b}_2^T - \\ \vdots \\ - \mathbf{b}_n^T - \end{pmatrix}$ (rows of $B$)
- $\mathbf{c}_i^T =$ the $i$-th row of $C$

Then:
$$\mathbf{c}_i^T = \mathbf{a}_i^T B = a_{i1} \mathbf{b}_1^T + a_{i2} \mathbf{b}_2^T + \cdots + a_{in} \mathbf{b}_n^T$$

> [!EXA]
> **Computing the first row of $C$ (leaf 🍃 requirements for both meal sets)**
>
> $$A = \begin{pmatrix}
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
>
> First row of $A$: $\mathbf{a}_1^T = (\color{red}0, \color{red}0, \color{red}2)$
> This tells us: leaf 🍃 is used by: $\color{red}0$ × 🥛 + $\color{red}0$ × ☕ + $\color{red}2$ × 🍵
>
> $$\mathbf{c}_1^T = \color{red}0 \times (\color{blue}2, \color{blue}1) + \color{red}0 \times (\color{green}0, \color{green}2) + \color{red}2 \times (\color{orange}1, \color{orange}1)$$
> $$= (0, 0) + (0, 0) + (2, 2) = (2, 2)$$
>
> **Interpretation**: Since only tea uses leaf, and tea is needed $2 \times 1 = 2$ times for each meal set, we need 2 leaves for 🍱 and 2 leaves for 🍜.

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

> [!RMK]
> **When to use this perspective**
> - Understanding row space: $\text{Row}(AB) \subseteq \text{Row}(B)$
> - Left multiplication by row vectors (e.g., computing $\mathbf{y}^T A$)
> - Eigenvalue problems later in the course

---

### Perspective 3: Sum-of-Rank-One (Outer Product View)

This is the most important perspective for this course's **cross-filling method** (§1.3).

> [!PROP]
> **Sum-of-Rank-One Decomposition**
> The product $AB$ can be written as a **sum of rank-one matrices**:
> $$AB = \sum_{k=1}^{n} \mathbf{a}_k \mathbf{b}_k^T = \mathbf{a}_1 \mathbf{b}_1^T + \mathbf{a}_2 \mathbf{b}_2^T + \cdots + \mathbf{a}_n \mathbf{b}_n^T$$
> where $\mathbf{a}_k$ is the $k$-th column of $A$ and $\mathbf{b}_k^T$ is the $k$-th row of $B$.

**What is a rank-one matrix?**

A **rank-one matrix** has the form $\mathbf{u} \mathbf{v}^T$ where $\mathbf{u}$ is a column vector and $\mathbf{v}^T$ is a row vector.

> [!EXA]
> **Rank-one matrix example**
>
> $$\mathbf{u} = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}, \quad \mathbf{v}^T = \begin{pmatrix} 4 & 5 \end{pmatrix}$$
>
> $$\mathbf{u} \mathbf{v}^T = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} \begin{pmatrix} 4 & 5 \end{pmatrix} = \begin{pmatrix}
2 \cdot 4 & 2 \cdot 5 \\
1 \cdot 4 & 1 \cdot 5 \\
3 \cdot 4 & 3 \cdot 5
\end{pmatrix} = \begin{pmatrix}
8 & 10 \\
4 & 5 \\
12 & 15
\end{pmatrix}$$
>
> Notice: **every row is a multiple of $\mathbf{v}^T = (4, 5)$**, and **every column is a multiple of $\mathbf{u} = (2, 1, 3)^T$**. This is the defining property of rank-one matrices.

**Decomposing $AB$ into rank-one pieces**:

$$A = \begin{pmatrix}
| & | & & | \\
\mathbf{a}_1 & \mathbf{a}_2 & \cdots & \mathbf{a}_n \\
| & | & & |
\end{pmatrix}, \quad
B = \begin{pmatrix}
- \mathbf{b}_1^T - \\
- \mathbf{b}_2^T - \\
\vdots \\
- \mathbf{b}_n^T -
\end{pmatrix}$$

Then:
$$AB = \mathbf{a}_1 \mathbf{b}_1^T + \mathbf{a}_2 \mathbf{b}_2^T + \cdots + \mathbf{a}_n \mathbf{b}_n^T$$

Each term $\mathbf{a}_k \mathbf{b}_k^T$ is a rank-one matrix.

> [!EXA]
> **Decomposing our coffee shop product**
>
> $$A = \begin{pmatrix}
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
>
> **Step 1**: Identify columns of $A$ and rows of $B$:
> $$\mathbf{a}_1 = \begin{pmatrix} \color{red}0\\\color{red}0\\\color{red}0\\\color{red}1 \end{pmatrix}, \quad
\mathbf{a}_2 = \begin{pmatrix} \color{blue}0\\\color{blue}0\\\color{blue}2\\\color{blue}0 \end{pmatrix}, \quad
\mathbf{a}_3 = \begin{pmatrix} \color{green}2\\\color{green}1\\\color{green}0\\\color{green}0 \end{pmatrix}$$
>
> $$\mathbf{b}_1^T = \begin{pmatrix} \color{red}2 & \color{red}1 \end{pmatrix}, \quad
\mathbf{b}_2^T = \begin{pmatrix} \color{blue}0 & \color{blue}2 \end{pmatrix}, \quad
\mathbf{b}_3^T = \begin{pmatrix} \color{green}1 & \color{green}1 \end{pmatrix}$$
>
> **Step 2**: Compute each rank-one piece:
>
> $$R_1 = \mathbf{a}_1 \mathbf{b}_1^T = \begin{pmatrix} \color{red}0\\\color{red}0\\\color{red}0\\\color{red}1 \end{pmatrix} \begin{pmatrix} \color{red}2 & \color{red}1 \end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
0 & 0 \\
\color{red}2 & \color{red}1
\end{pmatrix}$$
>
> $$R_2 = \mathbf{a}_2 \mathbf{b}_2^T = \begin{pmatrix} \color{blue}0\\\color{blue}0\\\color{blue}2\\\color{blue}0 \end{pmatrix} \begin{pmatrix} \color{blue}0 & \color{blue}2 \end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\color{blue}0 & \color{blue}4 \\
0 & 0
\end{pmatrix}$$
>
> $$R_3 = \mathbf{a}_3 \mathbf{b}_3^T = \begin{pmatrix} \color{green}2\\\color{green}1\\\color{green}0\\\color{green}0 \end{pmatrix} \begin{pmatrix} \color{green}1 & \color{green}1 \end{pmatrix} = \begin{pmatrix}
\color{green}2 & \color{green}2 \\
\color{green}1 & \color{green}1 \\
0 & 0 \\
0 & 0
\end{pmatrix}$$
>
> **Step 3**: Sum the rank-one pieces:
> $$C = AB = R_1 + R_2 + R_3 = \begin{pmatrix}
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

This matches our previous answer!

> [!RMK]
> **Why is this perspective important?**
> The sum-of-rank-one view reveals the **additive structure** of matrices. This is the foundation for:
> - **Cross-filling method** (§1.3): decompose $A$ into rank-one pieces
> - **Rank computation**: rank = number of nonzero rank-one pieces
> - **Matrix factorization**: $A = UV$ where columns of $U$ and rows of $V$ give the rank-one pieces
> - **Spectral decomposition** (Chapter 5): $A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots$
>
> This is the **central insight** of the course: matrices are sums of simple (rank-one) pieces.

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

## The Ingredient Table Metaphor (Revisited)

> [!RMK]
> **Interpreting $C = AB$ as a production pipeline**
>
> ```mermaid
> ---
> config:
>   theme: 'neutral'
> ---
> graph LR
>     x[Basic Ingredients] -->|B| Bx[Semi-finished Products]
>     Bx -->|A| ABx[Final Products]
>     x -->|C = AB| ABx
> ```
>
> - Matrix $A$: recipe converting **basic ingredients** → **semi-finished products**
> - Matrix $B$: recipe converting **semi-finished products** → **final products**
> - Matrix $C = AB$: **combined recipe** converting basic ingredients → final products **directly**
>
> **Key insight**: Matrix multiplication is **composition of processes**. We skip the intermediate step.

---

### Row and Column Operations as Changing Recipes

> [!PROP]
> **Operations on Matrix Products**
>
> 1. **Changing basic ingredients** = Performing **row operations** on both $A$ and $C$ (leaves $B$ unchanged)
>    - If we decide to measure flour in grams instead of cups, we modify the ingredient list ($A$) and the final recipe ($C$), but the intermediate step ($B$) is unaffected.
>
> 2. **Changing final products** = Performing **column operations** on both $B$ and $C$ (leaves $A$ unchanged)
>    - If we add a new meal set (new column to $B$), we must compute a new column for $C$, but $A$ stays the same.

This observation will become precise in §1.2.

---

## Inverse Matrices

### Definition and Basic Properties

> [!PROP]
> **Definition of Matrix Inverse**
> A square matrix $A$ is **invertible** (or **nonsingular**) if there exists a matrix $A^{-1}$ such that:
> $$A^{-1}A = I \quad \text{and} \quad AA^{-1} = I$$
> where $I$ is the identity matrix.

**What is the identity matrix?**

The **identity matrix** $I_n$ is the $n \times n$ matrix with 1's on the diagonal and 0's elsewhere:

$$I_3 = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}$$

**Property**: $IA = A$ and $AI = A$ for any compatible matrix $A$.

In the recipe metaphor: $I$ is the "do nothing" recipe. If you apply the identity transformation, ingredients stay unchanged.

> [!LEM]
> **Only square matrices can have inverses**
>
> **Proof**: Suppose $A$ is $m \times n$ and has a left inverse $B$ (so $BA = I_n$) and a right inverse $C$ (so $AC = I_m$).
>
> From $BA = I_n$, taking traces:
> $$\text{tr}(BA) = \text{tr}(I_n) = n$$
>
> From $AC = I_m$, we have $C^T A^T = I_m^T = I_m$. Taking traces:
> $$\text{tr}(C^T A^T) = \text{tr}(I_m) = m$$
>
> But the trace is **cyclic**: $\text{tr}(XY) = \text{tr}(YX)$. Therefore:
> $$\text{tr}(BA) = \text{tr}(AB) = \text{tr}(A^T B^T) = \text{tr}(B^T A^T)$$
>
> Also, $\text{tr}(C^T A^T) = \text{tr}(A^T C^T) = \text{tr}((CA)^T) = \text{tr}(CA)$, and from $BA = I_n$, left-multiplying by $C$:
> $$CBA = CI_n = C, \quad \text{but also } CBA = (CB)A$$
>
> We need a cleaner argument. Actually, let's use this:
>
> If $BA = I_n$ and $AC = I_m$, then:
> $$B = BI_m = B(AC) = (BA)C = I_n C = C$$
>
> So $B = C$. But $B$ is $n \times m$ and $C$ is $m \times n$, so they can only be equal if $n = m$. ∎

**Simpler trace-based proof** (the one in the notes):

If $AB = I_m$ and $BA = I_n$, then $\text{tr}(AB) = m$ and $\text{tr}(BA) = n$. But $\text{tr}(AB) = \text{tr}(BA)$ by the cyclic property, so $m = n$. ∎

> [!RMK]
> **Why is this important?**
> This proof shows that **inverses are only possible for square matrices**. A non-square matrix might have a left inverse OR a right inverse, but never both. Only square matrices can have $A^{-1}$ satisfying both $A^{-1}A = I$ and $AA^{-1} = I$.

---

### Inverse of a Product

> [!PROP]
> **Inverse of a Product (Socks and Shoes Rule)**
> If $A$ and $B$ are both invertible square matrices of the same size, then:
> $$(AB)^{-1} = B^{-1}A^{-1}$$
>
> **Proof**: Verify both conditions:
>
> **(1) Right inverse**:
> $$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$$
>
> **(2) Left inverse**:
> $$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = B^{-1}B = I$$
>
> Since $(AB)(B^{-1}A^{-1}) = I$ and $(B^{-1}A^{-1})(AB) = I$, we have $(AB)^{-1} = B^{-1}A^{-1}$. ∎

> [!RMK]
> **Why "socks and shoes"?**
> To reverse the process of putting on socks and then shoes, you must:
> 1. First remove **shoes** (inverse of $B$)
> 2. Then remove **socks** (inverse of $A$)
>
> The order reverses! Same with matrix inverses: $(AB)^{-1} = B^{-1}A^{-1}$ (right to left).
>
> ```mermaid
> ---
> config:
>   theme: 'neutral'
> ---
> graph LR
>     1[Bare Feet] -->|A: Put on socks| 2[Socks On]
>     2 -->|B: Put on shoes| 3[Shoes On]
>     3 -->|B^-1: Remove shoes| 2
>     2 -->|A^-1: Remove socks| 1
> ```

---

### Invariance Under Simultaneous Operations

> [!PROP]
> **Products unchanged by simultaneous operations**
>
> 1. **$A^{-1}B$ is invariant** under the same row operations on $A$ and $B$
>    **Reason**: If we apply a row operation represented by left multiplication by $E$, then:
>    $$(EA)^{-1}(EB) = A^{-1}E^{-1}EB = A^{-1}B$$
>
> 2. **$AB^{-1}$ is invariant** under the same column operations on $A$ and $B$
>    **Reason**: If we apply a column operation represented by right multiplication by $F$, then:
>    $$(AF)(BF)^{-1} = AFF^{-1}B^{-1} = AB^{-1}$$

**Visual representation**:

- For $A^{-1}B$: both $A$ and $B$ receive inputs from a common source
$$\begin{array}{ccc}
\text{Output} & \xleftarrow{A} & \text{Intermediate} & \xleftarrow{B} & \text{Input}
\end{array}$$
If we change "Intermediate" (apply row ops to $A$ and $B$), the relation from Input to Output is unchanged.

- For $AB^{-1}$: both $A$ and $B$ send outputs to a common destination
$$\begin{array}{ccc}
\text{Input} & \xrightarrow{B} & \text{Intermediate} & \xrightarrow{A} & \text{Output}
\end{array}$$
If we change "Intermediate" (apply column ops), the relation is unchanged.

> [!RMK]
> **Practical use**
> When simplifying expressions like $A^{-1}B$ or $BA^{-1}$, we can perform row/column operations on $A$ and $B$ **simultaneously** without changing the result. This avoids computing $A^{-1}$ explicitly.

---

## §1.2 Row and Column Operations

### Two Interpretations of $AB = C$

We've seen that $AB = C$ means "$A$ acts on $B$ to produce $C$". But we can interpret the "action" in two symmetric ways.

> [!PROP]
> **$AB = C$ encodes operations in two ways**
>
> **Row Perspective** (Left multiplication = row operations):
> - Start with $IB = B$ (identity does nothing)
> - Transform $I \to A$ by applying row operations
> - Apply **the same row operations** to $B \to C$
> - Result: $AB = C$
> - **Interpretation**: $A$ is a "recipe" for row operations that transform $B$ into $C$
>
> **Column Perspective** (Right multiplication = column operations):
> - Start with $AI = A$ (identity does nothing)
> - Transform $I \to B$ by applying column operations
> - Apply **the same column operations** to $A \to C$
> - Result: $AB = C$
> - **Interpretation**: $B$ is a "recipe" for column operations that transform $A$ into $C$

> [!EXA]
> **Row operations: transforming $I$ to $A$, and $B$ accordingly**
>
> Suppose $A = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}$. How is this obtained from $I$?
>
> $$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \xrightarrow{\text{Add } 3R_1 \text{ to } R_2} \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix} = A$$
>
> Now apply the same operation to $B = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$:
>
> $$B = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} \xrightarrow{\text{Add } 3R_1 \text{ to } R_2} \begin{pmatrix} 2 & 1 \\ 10 & 6 \end{pmatrix} = C$$
>
> Verify by direct multiplication:
> $$AB = \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 6+4 & 3+3 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 10 & 6 \end{pmatrix}$$ ✓

> [!RMK]
> **Key insight**
> Matrices are not just "arrays of numbers"—they are **operators**. Left multiplication performs row operations. Right multiplication performs column operations. The identity matrix $I$ is the "neutral" operator.

---

### Elementary vs. Non-Invertible Operations

Not all operations are reversible.

> [!PROP]
> **Three elementary (invertible) row/column operations**
>
> 1. **Swap** two rows (or columns)
>    - **Reverse**: Swap them again
>
> 2. **Scale** a row (or column) by a nonzero constant $c \neq 0$
>    - **Reverse**: Scale by $1/c$
>
> 3. **Add** a multiple of one row (or column) to another
>    - **Reverse**: Subtract the same multiple

These are called **elementary operations** because they can be undone. Each corresponds to multiplying by an **elementary matrix**, which is invertible.

> [!PROP]
> **Three non-invertible operations**
>
> 1. **Copy** a row (or column)
>    - **Cannot reverse**: Information lost (which was the original?)
>
> 2. **Delete** a row (or column)
>    - **Cannot reverse**: Information permanently lost
>
> 3. **Scale by zero** (multiply a row/column by 0)
>    - **Cannot reverse**: Original values are gone

> [!EXA]
> **Elementary operations are reversible**
>
> | Operation | Matrix | Reverse operation | Inverse matrix |
> |-----------|--------|-------------------|----------------|
> | Swap $R_1 \leftrightarrow R_2$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ | Swap $R_1 \leftrightarrow R_2$ again | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (same!) |
> | Multiply $R_1$ by 5 | $\begin{pmatrix} 5 & 0 \\ 0 & 1 \end{pmatrix}$ | Multiply $R_1$ by $1/5$ | $\begin{pmatrix} 1/5 & 0 \\ 0 & 1 \end{pmatrix}$ |
> | Add $3R_2$ to $R_1$ | $\begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$ | Add $-3R_2$ to $R_1$ | $\begin{pmatrix} 1 & -3 \\ 0 & 1 \end{pmatrix}$ |

> [!RMK]
> **Why is this important?**
> - **Gaussian elimination** uses only elementary operations, so it doesn't lose information about solutions
> - **Invertible matrices** can be built from elementary operations
> - **Non-invertible operations** destroy information, making a system unsolvable or ambiguous

---

### Finding $A^{-1}$ Without Augmented Matrices

Traditional textbooks teach computing $A^{-1}$ using the augmented matrix $[A | I]$ and row-reducing to $[I | A^{-1}]$. This course uses a different approach based on the **row/column operation perspective**.

> [!PROP]
> **Row Operation Method for Computing $A^{-1}$**
>
> **Procedure**:
> 1. Write the equation $A^{-1} = A^{-1} \cdot I$
> 2. Apply elementary row operations to $A$ (on the left) to transform it into $I$
> 3. Apply **the same row operations** to $I$ (on the right side)
> 4. When $A$ becomes $I$, cancel $I^{-1} = I$ from the left
> 5. The result is $A^{-1}$
>
> **Why it works**: If $A \to I$ via row operations represented by matrices $E_1, E_2, \ldots, E_k$, then:
> $$E_k E_{k-1} \cdots E_1 A = I$$
> So $A^{-1} = E_k E_{k-1} \cdots E_1$. Applying the same operations to $I$ gives:
> $$E_k E_{k-1} \cdots E_1 I = A^{-1}$$

> [!PROP]
> **Column Operation Method for Computing $A^{-1}$**
>
> **Procedure**:
> 1. Write the equation $A^{-1} = I \cdot A^{-1}$
> 2. Apply elementary column operations to $A$ (on the right) to transform it into $I$
> 3. Apply **the same column operations** to $I$ (on the left side)
> 4. When $A$ becomes $I$, cancel $I^{-1} = I$ from the right
> 5. The result is $A^{-1}$

> [!EXA]
> **Computing $A^{-1}$ using row operations (detailed)**
>
> Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Find $A^{-1}$.
>
> **Setup**: Write $A^{-1} = A^{-1} \cdot I$
> $$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
>
> **Step 1**: $R_2 \gets R_2 - 3R_1$ (eliminate below pivot)
> $$\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -3 & 1 \end{pmatrix}$$
>
> **Step 2**: $R_2 \gets -\frac{1}{2}R_2$ (make pivot = 1)
> $$\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 3/2 & -1/2 \end{pmatrix}$$
>
> **Step 3**: $R_1 \gets R_1 - 2R_2$ (eliminate above pivot)
> $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$$
>
> **Step 4**: Cancel $I^{-1} = I$ from the left:
> $$A^{-1} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$$
>
> **Verification**:
> $$AA^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} = \begin{pmatrix} -2+3 & 1-1 \\ -6+6 & 3-2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$ ✓

> [!RMK]
> **When should you compute $A^{-1}$ explicitly?**
>
> **Compute $A^{-1}$ when**:
> - The problem explicitly asks for the matrix form of $A^{-1}$
> - You need to multiply $A^{-1}$ by many different vectors/matrices
>
> **Don't compute $A^{-1}$ when**:
> - You only need $A^{-1}\mathbf{b}$ for one vector $\mathbf{b}$ → just solve $A\mathbf{x} = \mathbf{b}$
> - You're simplifying an expression like $A^{-1}BA$ → use row/column operations directly
> - You're checking invertibility → check $\det(A) \neq 0$ or use row reduction
>
> **Reason**: Computing $A^{-1}$ requires $O(n^3)$ operations. Solving $A\mathbf{x} = \mathbf{b}$ also takes $O(n^3)$ but with better numerical stability.

---

## Summary and Looking Ahead

This week we established **four perspectives on matrix multiplication $AB = C$**:

| Perspective | Computes | Formula | Key Use |
|-------------|----------|---------|---------|
| **Entry-by-entry** | Individual $c_{ij}$ | $c_{ij} = \sum_k a_{ik}b_{kj}$ | Direct computation |
| **Column view** | Each column of $C$ | $\mathbf{c}_j = A\mathbf{b}_j$ | Linear systems, column space |
| **Row view** | Each row of $C$ | $\mathbf{c}_i^T = \mathbf{a}_i^T B$ | Row space |
| **Rank-one sum** | Full matrix | $C = \sum_k \mathbf{a}_k\mathbf{b}_k^T$ | **Cross-filling (§1.3)**, rank, factorization |

We also learned:
- **Inverse matrices** exist only for square matrices
- **Elementary operations** (swap, scale, add) are reversible
- **Row operations** = left multiplication, **Column operations** = right multiplication
- How to find $A^{-1}$ using row or column operations (without augmented matrices)

> [!RMK]
> **Next week preview: The Cross-Filling Method**
>
> The **rank-one sum view** ($AB = \sum \mathbf{a}_k \mathbf{b}_k^T$) is the gateway to the **cross-filling method**, the central computational technique of this course.
>
> Cross-filling provides a unified framework for:
> - Decomposing any matrix $A$ into rank-one pieces: $A = R_1 + R_2 + \cdots + R_r$
> - Factorizing matrices: $A = UV$ where $U$ collects column vectors, $V$ collects row vectors
> - Computing rank: rank$(A) = $ number of rank-one pieces
> - Solving linear systems $Ax = b$ by isolating variables one at a time
>
> This **single method** replaces traditional Gaussian elimination with a more general, elegant, and powerful technique. We will explore it in depth next week.

---

## Exercises

### Practice Problems

1. **Entry-by-entry computation**: Compute $AB$ using the dot product formula for all entries.
   $$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 4 \\ 2 & 0 \end{pmatrix}$$

2. **Column view**: For the same $A$ and $B$, compute each column of $AB$ as a linear combination of columns of $A$.

3. **Row view**: For the same $A$ and $B$, compute each row of $AB$ as a linear combination of rows of $B$.

4. **Rank-one sum**: Decompose $AB$ into a sum of rank-one matrices $\mathbf{a}_k \mathbf{b}_k^T$.

5. **Verifying inverses**: Show that $B = \begin{pmatrix} 2 & -1 \\ 0 & 1/3 \end{pmatrix}$ is the inverse of $A$ from problem 1 by computing both $AB$ and $BA$.

6. **Inverse of a product**: If $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, compute $(AB)^{-1}$ using the formula $(AB)^{-1} = B^{-1}A^{-1}$.

7. **Computing an inverse**: Find $A^{-1}$ using row operations for:
   $$A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$$
   Show all intermediate steps.

8. **Comparing perspectives**: For $A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$:
   - Compute $c_{22}$ (the (2,2)-entry) using the dot product formula
   - Compute the second column of $AB$ using the column view
   - Verify they give the same answer for $c_{22}$

9. **Size compatibility**: Which of the following products are defined? For those that are defined, what is the size of the result?
   - $(3 \times 2)(2 \times 5)$
   - $(4 \times 3)(4 \times 3)$
   - $(5 \times 1)(1 \times 5)$
   - $(2 \times 2)(2 \times 2)(2 \times 2)$

10. **Conceptual**: Explain in your own words why only square matrices can have inverses. Use the trace argument from the notes.

---

*Last updated: 2026-02-20*
