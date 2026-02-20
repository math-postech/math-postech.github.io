# Lecture 2: Row and Column Operations

> **Topics**: §1.2–1.3 — Row/Column Operations, Matrix Inverses, Solving Matrix Equations

---

## §1.2 Row and Column Operations

### Review: The Ingredient Table Interpretation

Recall from Lecture 1 that the matrix product $C = AB$ represents composition of recipe tables:

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
    RM[Raw Materials] -->|A| SP[Semi-finished Products]
    SP -->|B| FP[Final Products]
    RM -->|C = AB| FP
```

**Concrete example** from a coffee shop:

**Matrix $A$** (Semi-finished ← Raw materials):

$$A = \begin{array}{c|ccc}
 & \text{Milk 🥛} & \text{Coffee ☕} & \text{Tea 🍵} \\
\hline
\text{Leaf 🍃} & 0 & 0 & 2 \\
\text{Lemon 🍋} & 0 & 0 & 1 \\
\text{Bean 🫘} & 0 & 2 & 0 \\
\text{Cow 🐄} & 1 & 0 & 0
\end{array} = \begin{pmatrix}
0 & 0 & 2 \\
0 & 0 & 1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix}$$

**Matrix $B$** (Final products ← Semi-finished):

$$B = \begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Milk 🥛} & 2 & 1 \\
\text{Coffee ☕} & 0 & 2 \\
\text{Tea 🍵} & 1 & 1
\end{array} = \begin{pmatrix}
2 & 1 \\
0 & 2 \\
1 & 1
\end{pmatrix}$$

**Matrix $C = AB$** (Final products ← Raw materials):

$$C = AB = \begin{pmatrix}
0 & 0 & 2 \\
0 & 0 & 1 \\
0 & 2 & 0 \\
1 & 0 & 0
\end{pmatrix} \begin{pmatrix}
2 & 1 \\
0 & 2 \\
1 & 1
\end{pmatrix} = \begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix}$$

$$C = \begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Key observation - Where each concept appears**:

| Concept | Appears in Matrix $A$ | Appears in Matrix $B$ | Appears in Matrix $C$ |
|---------|----------------------|----------------------|----------------------|
| Raw materials 🍃🍋🫘🐄 | **rows** | ✗ | **rows** |
| Semi-finished 🥛☕🍵 | **columns** | **rows** | ✗ |
| Final products 🍱🍜 | ✗ | **columns** | **columns** |

> [!RMK]
> **The fundamental principle**: When we **redefine** one of these three concepts (change the unit, repackage, bundling), all matrices that reference this concept must update their representation. But the underlying production relationships remain unchanged.

---

### The Three Types of Row Operations

Row operations correspond to **redefining raw materials**.

> [!RMK]
> **Philosophical point**: We are not "manipulating matrices." We are **updating our representation** when the definition of raw materials changes.

#### Type 1: Row Multiplication

**Operation**: Replace row $i$ with $k \cdot$ row $i$ (where $k \neq 0$).

> [!EXA]
> **Example 1.1 (Row Multiplication)**: Beans 🫘 → Double beans 🫘🫘
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> If we redefine "1 new bean unit" = "2 old bean units", then each product now needs **half** the number of new bean units.
>
> **Updated table** (row 3 multiplied by 2):
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Double bean 🫘🫘} & 0 & 2 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> **In matrix notation**: Perform $r_3 \to 2 \cdot r_3$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{r_3 \to 2r_3} \begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 2 \\
> 2 & 1
> \end{pmatrix}$$

#### Type 2: Row Switching

**Operation**: Swap row $i$ and row $j$.

> [!EXA]
> **Example 1.2 (Row Switching)**: Swap leaf 🍃 and lemon 🍋
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> Reorder the rows (swap rows 1 and 2):
>
> **Updated table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> The table expresses the same facts, just in different order.
>
> **In matrix notation**: Perform $r_1 \leftrightarrow r_2$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{r_1 \leftrightarrow r_2} \begin{pmatrix}
> 1 & 1 \\
> 2 & 2 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix}$$

#### Type 3: Row Addition

**Operation**: Replace row $i$ with row $i + k \times$ row $j$.

> [!EXA]
> **Example 1.3 (Row Addition)**: Lemon → Lemon + 2 Leaf (🍋 → 🍋+2🍃)
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> If each lemon now comes **bundled with 2 free tea leaves**, then when using 1 lemon (which includes 2 leaves), we need 2 fewer leaves from our original stock.
>
> **Updated table** (leaf row - 2 × lemon row):
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2-2(1) = 0 & 2-2(1) = 0 \\
> \text{Lemon+2Leaf 🍋+2🍃} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> Now leaf 🍃 is no longer needed separately!
>
> **In matrix notation**: Perform $r_1 \to r_1 - 2r_2$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{r_1 \to r_1 - 2r_2} \begin{pmatrix}
> 0 & 0 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix}$$

---

### The Three Types of Column Operations

Column operations correspond to **redefining final products**.

> [!RMK]
> **Important**: Column operations work similarly to row operations, but they apply to **products** instead of raw materials. We will write them out in full detail.

#### Type 1: Column Multiplication

**Operation**: Replace column $j$ with $k \cdot$ column $j$ (where $k \neq 0$).

> [!EXA]
> **Example 1.4 (Column Multiplication)**: Set 1 → Double Set 1 (🍱 → 🍱🍱)
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> If we redefine "1 new Set 1 unit" = "2 old Set 1 units", then making the new double-set requires **twice** the ingredients.
>
> **Updated table** (column 1 multiplied by 2):
> $$\begin{array}{c|cc}
>  & \text{Double Set 1 🍱🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 4 & 2 \\
> \text{Lemon 🍋} & 2 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 4 & 1
> \end{array}$$
>
> **In matrix notation**: Perform $c_1 \to 2 \cdot c_1$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{c_1 \to 2c_1} \begin{pmatrix}
> 4 & 2 \\
> 2 & 1 \\
> 0 & 4 \\
> 4 & 1
> \end{pmatrix}$$

#### Type 2: Column Switching

**Operation**: Swap column $i$ and column $j$.

> [!EXA]
> **Example 1.5 (Column Switching)**: Swap Set 1 🍱 and Set 2 🍜
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> Reorder the columns (swap columns 1 and 2):
>
> **Updated table**:
> $$\begin{array}{c|cc}
>  & \text{Set 2 🍜} & \text{Set 1 🍱} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 4 & 0 \\
> \text{Cow 🐄} & 1 & 2
> \end{array}$$
>
> The table expresses the same facts, just reordered.
>
> **In matrix notation**: Perform $c_1 \leftrightarrow c_2$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{c_1 \leftrightarrow c_2} \begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 4 & 0 \\
> 1 & 2
> \end{pmatrix}$$

#### Type 3: Column Addition

**Operation**: Replace column $j$ with column $j + k \times$ column $i$.

> [!EXA]
> **Example 1.6 (Column Addition)**: Set 2 → Set 2 + Set 1 (🍜 → 🍜+🍱)
>
> **Original table**:
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Set 2 🍜} \\
> \hline
> \text{Leaf 🍃} & 2 & 2 \\
> \text{Lemon 🍋} & 1 & 1 \\
> \text{Bean 🫘} & 0 & 4 \\
> \text{Cow 🐄} & 2 & 1
> \end{array}$$
>
> If we bundle Set 2 with Set 1 (new product = Set 2 + Set 1), then making this combo requires ingredients for **both** sets.
>
> **Updated table** (column 2 + column 1):
> $$\begin{array}{c|cc}
>  & \text{Set 1 🍱} & \text{Combo 🍜+🍱} \\
> \hline
> \text{Leaf 🍃} & 2 & 2+2 = 4 \\
> \text{Lemon 🍋} & 1 & 1+1 = 2 \\
> \text{Bean 🫘} & 0 & 4+0 = 4 \\
> \text{Cow 🐄} & 2 & 1+2 = 3
> \end{array}$$
>
> **In matrix notation**: Perform $c_2 \to c_2 + c_1$:
> $$\begin{pmatrix}
> 2 & 2 \\
> 1 & 1 \\
> 0 & 4 \\
> 2 & 1
> \end{pmatrix} \xrightarrow{c_2 \to c_2 + c_1} \begin{pmatrix}
> 2 & 4 \\
> 1 & 2 \\
> 0 & 4 \\
> 2 & 3
> \end{pmatrix}$$

---

### Simultaneous Operations Preserve Equations

Now we state the fundamental propositions:

> [!PROP]
> **Proposition 1.1 (Row Operation Invariance)**
>
> In the equation $C = AB$, if we perform the **same row operation** on both $A$ and $C$ simultaneously, the equality remains valid.

**Why?** Raw materials appear in the **rows** of both $A$ and $C$:

- Matrix $A$: rows = raw materials
- Matrix $C$: rows = raw materials
- Matrix $B$: rows = semi-finished (NOT raw materials)

When we redefine raw materials (e.g., beans → double beans), both $A$ and $C$ must update their representations. Matrix $B$ doesn't change because it doesn't reference raw materials.

> [!EXA]
> **Example 1.7**: Consider the equation
>
> $$\underbrace{\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}}_{A} \underbrace{\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}}_{B} = \underbrace{\begin{pmatrix} 2 & 2 \\ 2 & 3 \end{pmatrix}}_{C}$$
>
> Redefine row 1 materials by multiplying by 2. Perform $r_1 \to 2r_1$ on **both $A$ and $C$**:
>
> $$\underbrace{\begin{pmatrix} 4 & 0 \\ 0 & 1 \end{pmatrix}}_{A'} \underbrace{\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}}_{B \text{ unchanged}} = \underbrace{\begin{pmatrix} 4 & 4 \\ 2 & 3 \end{pmatrix}}_{C'}$$
>
> The equation still holds! Verify: $A'B = \begin{pmatrix} 4 & 0 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 4 & 4 \\ 2 & 3 \end{pmatrix} = C'$ ✓

> [!PROP]
> **Proposition 1.2 (Column Operation Invariance)**
>
> In the equation $C = AB$, if we perform the **same column operation** on both $B$ and $C$ simultaneously, the equality remains valid.

**Why?** Final products appear in the **columns** of both $B$ and $C$:

- Matrix $A$: columns = semi-finished (NOT final products)
- Matrix $B$: columns = final products
- Matrix $C$: columns = final products

When we redefine final products (e.g., Set 1 → Double Set 1), both $B$ and $C$ must update their representations. Matrix $A$ doesn't change because it doesn't reference final products.

> [!EXA]
> **Example 1.8**: Consider the equation
>
> $$\underbrace{\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}}_{A} \underbrace{\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}}_{B} = \underbrace{\begin{pmatrix} 2 & 1 \\ 2 & 6 \end{pmatrix}}_{C}$$
>
> Redefine column 1 products by multiplying by 3. Perform $c_1 \to 3c_1$ on **both $B$ and $C$**:
>
> $$\underbrace{\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}}_{A \text{ unchanged}} \underbrace{\begin{pmatrix} 6 & 1 \\ 3 & 3 \end{pmatrix}}_{B'} = \underbrace{\begin{pmatrix} 6 & 1 \\ 6 & 6 \end{pmatrix}}_{C'}$$
>
> The equation still holds! Verify: $AB' = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 6 & 1 \\ 3 & 3 \end{pmatrix} = \begin{pmatrix} 6 & 1 \\ 6 & 6 \end{pmatrix} = C'$ ✓

> [!RMK]
> **What about redefining semi-finished products?**
>
> Semi-finished products appear in:
> - **Columns of $A$** (as outputs)
> - **Rows of $B$** (as inputs)
>
> This would require **column operations on $A$** and **row operations on $B$** simultaneously. While this is theoretically valid, it involves two different types of operations. We won't use this in this course for simplicity.

---

## §1.3 Matrix Inverses

### Definition

For an $n \times n$ square matrix $A$, we ask: is there a matrix that "undoes" the transformation represented by $A$?

> [!attention]
> **Definition 1.1 (Matrix Inverse)**
>
> An $n \times n$ matrix $A$ is called **invertible** if there exists an $n \times n$ matrix $B$ such that
>
> $$AB = BA = I_n$$
>
> where $I_n$ is the $n \times n$ identity matrix. We call $B$ the **inverse** of $A$ and denote it $A^{-1}$.

**Interpretation**: If $A$ is the recipe "raw materials → products", then $A^{-1}$ is the recipe "products → raw materials" (reverse synthesis).

> [!EXA]
> **Example 1.9**: Consider the recipe table
>
> $$A = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Coffee ☕} & \text{Milk 🥛} \\ \hline \text{Bean 🫘} & 0 & 2 \\ \text{Cow 🐄} & 1 & 0 \end{array}$$
>
> **Forward recipe** (products ← materials):
> - Coffee ☕: needs 0 cows + 2 beans → $(0, 2)^T$
> - Milk 🥛: needs 1 cow + 0 beans → $(1, 0)^T$
>
> The **inverse recipe** (materials ← products) should tell us: if I have coffee and milk, how many beans and cows do I need?
>
> $$A^{-1} = \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Bean 🫘} & \text{Cow 🐄} \\ \hline \text{Coffee ☕} & 0 & 1 \\ \text{Milk 🥛} & \frac{1}{2} & 0 \end{array}$$
>
> **Reverse recipe** (materials ← products):
> - Bean 🫘: needs $0 \times$ coffee + $1 \times$ milk → requires 1 milk per bean
> - Cow 🐄: needs $\frac{1}{2} \times$ coffee + $0 \times$ milk → requires $\frac{1}{2}$ coffee per cow
>
> **Verification**:
> $$AA^{-1} = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \quad \checkmark$$
>
> $$A^{-1}A = \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \quad \checkmark$$

> [!RMK]
> **Why introduce inverses?**
>
> The inverse is **notational convenience**. When solving matrix equations using row operations, we want to track the invariant "$B$ doesn't change." Writing $B = A^{-1}C$ allows us to express this invariant more compactly:
>
> - Instead of tracking: $A_0, C_0 \to A_1, C_1 \to A_2, C_2 \to \cdots$ with $B$ constant
> - We track: $A_0^{-1}C_0 = A_1^{-1}C_1 = A_2^{-1}C_2 = \cdots = B$
>
> This makes the invariance explicit in our notation.

---

### Properties of Inverses

> [!PROP]
> **Proposition 1.3 (Inverse is Unique)**
>
> If $A$ has an inverse, it is unique.

**Proof**: Suppose $B$ and $C$ both satisfy $AB = BA = I$ and $AC = CA = I$. Then:
$$B = BI = B(AC) = (BA)C = IC = C$$
Therefore $B = C$. □

> [!PROP]
> **Proposition 1.4 (Product of Invertible Matrices)**
>
> If $A$ and $B$ are invertible, then $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$.

**Proof**: We verify that $B^{-1}A^{-1}$ satisfies the definition:
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$$
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = B^{-1}B = I$$
Therefore $(AB)^{-1} = B^{-1}A^{-1}$. □

> [!RMK]
> **Note the order reversal**: $(AB)^{-1} = B^{-1}A^{-1}$, not $A^{-1}B^{-1}$.
>
> **Intuition**: If you put on socks then shoes, to undo this you must remove shoes first, then socks.

---

## §1.4 Solving Matrix Equations Using Row Operations

### The Problem

**Given**: Matrices $A$ and $C$ satisfying $AB = C$
**Find**: Matrix $B$

**Naive approach** (wasteful):
1. Compute $A^{-1}$ explicitly
2. Compute $B = A^{-1}C$

This requires two separate computations!

**Better approach**: Use row operations to transform "$A$" into $I$ while simultaneously transforming "$C$".

### The Method

**Key idea**: From $AB = C$, multiply both sides by $A^{-1}$ on the left:

$$A^{-1}(AB) = A^{-1}C$$
$$(A^{-1}A)B = A^{-1}C$$
$$IB = A^{-1}C$$
$$B = A^{-1}C$$

Now the key: instead of computing $A^{-1}$ explicitly, we perform row operations on **both "$A$" and "$C$"** in the expression $A^{-1}C$. By Proposition 1.1, the **value** $A^{-1}C$ doesn't change - only the representation of "$A$" changes.

**Goal**: Transform "$A$" into $I$ through row operations.

When "$A$" becomes $I$, we have:
$$B = I^{-1}C'' = IC'' = C''$$
where $C''$ is the transformed $C$.

> [!EXA]
> **Example 1.10**: Solve $AB = C$ for $B$ where
>
> $$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$
>
> **Solution**:
>
> Rewrite as $B = A^{-1}C$:
> $$B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$
>
> **Step 1**: Perform $r_1 \leftrightarrow r_2$ on both "$A$" and "$C$":
> $$B = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 5 & 8 \end{pmatrix}$$
>
> **Explanation**: Row 1 and row 2 in "$A$" are swapped. Same for "$C$". The **value** $B$ doesn't change (Proposition 1.1).
>
> **Step 2**: Perform $r_2 \to r_2 - 2r_1$ on both "$A$" and "$C$":
> $$B = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ -1 & -2 \end{pmatrix}$$
>
> **Explanation**: Row 2 of "$A$": $(2, 1) - 2(1, 1) = (0, -1)$. Row 2 of "$C$": $(5, 8) - 2(3, 5) = (-1, -2)$.
>
> **Step 3**: Perform $r_2 \to (-1) \cdot r_2$ on both "$A$" and "$C$":
> $$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$$
>
> **Explanation**: Row 2 of "$A$": $(-1)(0, -1) = (0, 1)$. Row 2 of "$C$": $(-1)(-1, -2) = (1, 2)$.
>
> **Step 4**: Perform $r_1 \to r_1 - r_2$ on both "$A$" and "$C$":
> $$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$$
>
> **Explanation**: Row 1 of "$A$": $(1, 1) - (0, 1) = (1, 0)$. Row 1 of "$C$": $(3, 5) - (1, 2) = (2, 3)$.
>
> **Final step**: Now "$A$" = $I$, so:
> $$B = I^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$$
>
> **Answer**: $B = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$
>
> **Verification**:
> $$AB = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix} = C \quad \checkmark$$

> [!RMK]
> **The invariant principle**: Throughout all row operations, the **value** $B = A^{-1}C$ never changes. We're just transforming how "$A$" and "$C$" are represented. When "$A$" becomes $I$, the value becomes obvious: $B = I^{-1}C = C$.

---

## §1.5 Finding Matrix Inverses

### The Method (Row Operations)

Finding $A^{-1}$ is a special case of solving $AB = C$: set $B = A^{-1}$ and $C = I$.

From $AA^{-1} = I$, multiply both sides by $A^{-1}$ on the left:
$$A^{-1}(AA^{-1}) = A^{-1}I$$
$$(A^{-1}A)A^{-1} = A^{-1}I$$
$$IA^{-1} = A^{-1}I$$
$$A^{-1} = A^{-1}I$$

Now perform row operations on both "$A$" and "$I$" in the expression $A^{-1}I$ to transform "$A$" into $I$.

> [!EXA]
> **Example 1.11**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$.
>
> **Solution**:
>
> Setup the equation $A^{-1} = A^{-1}I$:
> $$A^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
>
> **Step 1**: Perform $r_2 \to r_2 - r_1$ on both "$A$" and "$I$":
>
> - Row 2 of "$A$": $(3, 2) - (2, 1) = (1, 1)$
> - Row 2 of "$I$": $(0, 1) - (1, 0) = (-1, 1)$
>
> $$A^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$$
>
> **Step 2**: Perform $r_1 \leftrightarrow r_2$ on both "$A$" and "$I$":
> $$A^{-1} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$$
>
> **Step 3**: Perform $r_2 \to r_2 - 2r_1$ on both "$A$" and "$I$":
>
> - Row 2 of "$A$": $(2, 1) - 2(1, 1) = (0, -1)$
> - Row 2 of "$I$": $(1, 0) - 2(-1, 1) = (3, -2)$
>
> $$A^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 3 & -2 \end{pmatrix}$$
>
> **Step 4**: Perform $r_2 \to (-1) \cdot r_2$ on both "$A$" and "$I$":
>
> - Row 2 of "$A$": $(-1)(0, -1) = (0, 1)$
> - Row 2 of "$I$": $(-1)(3, -2) = (-3, 2)$
>
> $$A^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ -3 & 2 \end{pmatrix}$$
>
> **Step 5**: Perform $r_1 \to r_1 - r_2$ on both "$A$" and "$I$":
>
> - Row 1 of "$A$": $(1, 1) - (0, 1) = (1, 0)$
> - Row 1 of "$I$": $(-1, 1) - (-3, 2) = (2, -1)$
>
> $$A^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
>
> **Final step**: Now "$A$" = $I$, so:
> $$A^{-1} = I^{-1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
>
> **Answer**: $A^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$
>
> **Verification**:
> $$AA^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \checkmark$$

---

### The Method (Column Operations)

We can also use **column operations** instead of row operations. From $A^{-1}A = I$, multiply both sides by $A^{-1}$ on the right:

$$(A^{-1}A)A^{-1} = IA^{-1}$$
$$A^{-1}(AA^{-1}) = IA^{-1}$$
$$A^{-1}I = IA^{-1}$$
$$IA^{-1} = A^{-1}$$

Now perform **column operations** on both "$I$" and "$A$" in the expression $IA^{-1}$ to transform "$A$" into $I$.

> [!EXA]
> **Example 1.12**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$ using **column operations**.
>
> **Solution**:
>
> Setup the equation $IA^{-1} = A^{-1}$:
> $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} = A^{-1}$$
>
> **Step 1**: Perform $c_1 \to c_1 - c_2$ on both "$I$" and "$A$":
>
> - Column 1 of "$I$": $\begin{pmatrix} 1 \\ 0 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$
> - Column 1 of "$A$": $\begin{pmatrix} 2 \\ 3 \end{pmatrix} - \begin{pmatrix} 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$
>
> $$\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1} = A^{-1}$$
>
> **Step 2**: Perform $c_2 \to c_2 - c_1$ on both "$I$" and "$A$":
>
> - Column 2 of "$I$": $\begin{pmatrix} 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$
> - Column 2 of "$A$": $\begin{pmatrix} 1 \\ 2 \end{pmatrix} - \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$
>
> $$\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}^{-1} = A^{-1}$$
>
> **Step 3**: Perform $c_1 \to c_1 - c_2$ on both "$I$" and "$A$":
>
> - Column 1 of "$I$": $\begin{pmatrix} 1 \\ -1 \end{pmatrix} - \begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$
> - Column 1 of "$A$": $\begin{pmatrix} 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$
>
> $$\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = A^{-1}$$
>
> **Final step**: Now "$A$" = $I$, so:
> $$\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} I^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = A^{-1}$$
>
> **Answer**: $A^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$ (same as row method!) ✓

> [!RMK]
> **Both methods give the same answer**. Row operations and column operations are equally valid for finding inverses. In practice, most people use row operations because it's the standard convention, but column operations work just as well.

---

## §1.6 When Does an Inverse Exist?

> [!RMK]
> **Not all matrices are invertible**
>
> Consider:
> $$A = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$$
>
> Notice that row 2 = $2 \times$ row 1. This means the recipe table contains redundant information - the second material is just double the first.
>
> Try to find the inverse using row operations:
>
> $$A^{-1} = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
>
> Perform $r_2 \to r_2 - 2r_1$:
> $$A^{-1} = \begin{pmatrix} 2 & 1 \\ 0 & 0 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$$
>
> **Stuck!** The second row became all zeros. No matter what row operations we perform, we cannot transform "$A$" into $I$ because the second row is permanently zero. Therefore, this matrix **has no inverse**.

**Intuitive reason**: If two rows are linearly dependent (one is a multiple of the other), the recipe table doesn't contain full information about all raw materials. We cannot reverse the process uniquely.

**Formal criterion** (to be developed in Chapter 2): An $n \times n$ matrix $A$ is invertible if and only if we can transform it to $I$ using row operations (equivalently: its **rank** equals $n$).

---

## Exercises

> [!PROB]
> **Exercise 1.1**: Consider the equation
> $$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad B = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}, \quad C = AB$$
>
> (a) Compute $C$.
>
> (b) Perform the row operation $r_1 \to 2r_1$ on both $A$ and $C$. Verify that the equation $C' = A'B$ still holds.
>
> (c) Explain using the ingredient table interpretation why $B$ remains unchanged when we perform row operations on $A$ and $C$.

> [!PROB]
> **Exercise 1.2**: Solve for $B$ in the equation $AB = C$ where
> $$A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 4 & 7 \\ 3 & 5 \\ 2 & 3 \end{pmatrix}$$
>
> Use row operations on $B = A^{-1}C$ to transform "$A$" into $I$.

> [!PROB]
> **Exercise 1.3**: Find the inverses of the following matrices using row operations on $A^{-1} = A^{-1}I$:
>
> (a) $A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$
>
> (b) $A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$

> [!PROB]
> **Exercise 1.4**: Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ using **column operations** on $IA^{-1} = A^{-1}$. Verify your answer matches the row operation method.

> [!PROB]
> **Exercise 1.5**: Try to find the inverse of $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ using row operations. What happens? Explain why this matrix does not have an inverse.

> [!PROB]
> **Exercise 1.6**: Compute the following products using row operations (don't compute $A^{-1}$ explicitly):
>
> (a) $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 1 \\ 0 & 2 & 9 \end{pmatrix}$
>
> (b) $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 & 7 \\ 2 & 3 & 4 \end{pmatrix}$

> [!PROB]
> **Exercise 1.7**: Show that if $A$ and $B$ are invertible $n \times n$ matrices, then:
>
> (a) $(A^{-1})^{-1} = A$
>
> (b) $(A^T)^{-1} = (A^{-1})^T$ (where $A^T$ denotes the transpose)

---

## Summary

> [!TIP]
> **Key Takeaways**:
>
> 1. **Row operations** update tables when we redefine raw materials (three types: multiplication, switching, addition). **Column operations** update tables when we redefine products (same three types).
>
> 2. **Equation $C = AB$ is invariant** under simultaneous row operations on $A$ and $C$ (Proposition 1.1), or simultaneous column operations on $B$ and $C$ (Proposition 1.2).
>
> 3. **Inverse $A^{-1}$ is notational convenience** for tracking the invariant "$B$ doesn't change" when solving $AB = C$. We write $B = A^{-1}C$ to make this explicit.
>
> 4. **Don't compute inverses explicitly.** Instead, use operations on equations:
>    - To solve $AB = C$ for $B$: use row ops on $B = A^{-1}C$ until "$A$" becomes $I$
>    - To find $A^{-1}$: use row ops on $A^{-1} = A^{-1}I$ until "$A$" becomes $I$, or column ops on $A^{-1} = IA^{-1}$ until "$A$" becomes $I$
>
> 5. **Keep equations throughout.** Always write $B = ...$, $A^{-1} = ...$, etc. The left side never changes - it's the value. The right side representations change through operations, but the value remains constant.
