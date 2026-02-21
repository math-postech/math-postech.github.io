# Lecture 2: Row and Column Operations

> **Topics**: §1.2–1.3 — Row/Column Operations, Matrix Inverses, Solving Matrix Equations

---

## §1.2 Row and Column Operations

This lecture develops the theory of row and column operations based on the ingredient table interpretation from Lecture 1. The key insight is that rows and columns follow different logical patterns when we redefine materials or products.

::: remark
**Quick Review from Lecture 1**: In $C = AB$:
- **Raw materials** appear in rows of $A$ and $C$
- **Semi-finished products** appear in columns of $A$ and rows of $B$
- **Final products** appear in columns of $B$ and $C$

When we redefine one concept, all matrices referencing it must update.
:::

---

### Row Operations: The Contravariant Logic

Row operations correspond to **redefining raw materials**.

::: attention
**The Subtle Point - Contravariant (Inverse) Logic**

Row operations have **inverse logic** because rows and materials have a **multiplication relationship**:

$$\text{(demand coefficient)} \times \text{(material)} = \text{(total amount needed)}$$

When the material changes, the demand coefficient must change in the **opposite direction** to maintain the same total amount.

**Example**: $4 \cdot x_2 = 2 \cdot (2x_2)$

If material $x_2 \to 2x_2$ (doubles), then demand coefficient $4 \to 2$ (halves).
:::

#### Type 1: Row Multiplication

**Operation**: Replace row $i$ with $k \cdot$ row $i$ (where $k \neq 0$).

::: example
**Example 1.1 (Row Multiplication)**: Bean 🫘 → Double bean 🫘🫘

**Original table**:
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Material redefinition**: $x_3 \to 2x_3$ (one "double bean" unit = two old bean units)

The new unit is **larger**, so we need **fewer** of them.

**What happens to demand?** Original equation for Set 2:
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 4 \cdot \text{🫘} + 1 \cdot \text{🐄}$$

With new material where $(2\text{🫘})$ is the new unit:
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} + r_3 \cdot (2\text{🫘}) + 1 \cdot \text{🐄}$$

For this to equal the original total:
$$r_3 \cdot (2\text{🫘}) = 4 \cdot \text{🫘}$$
$$r_3 = 2$$

So we need 2 units of the new "double bean" (which equals 4 old beans). The demand coefficient decreased from 4 to 2.

**Updated table** (row 3 **divided by 2**):
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Double bean 🫘🫘} & 0 & 2 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Matrix notation**: Perform $r_3 \to \frac{1}{2}r_3$:
$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{r_3 \to \frac{1}{2}r_3} \begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 2 \\
2 & 1
\end{pmatrix}$$

**Key**: Material $\times 2$ → Row $\times \frac{1}{2}$ (contravariant!)
:::

::: remark
**Why contravariant?** Because:
$$\text{demand} \times \text{material} = \text{constant}$$
If material increases by factor $k$, demand decreases by factor $\frac{1}{k}$.

**Notation**: The row operation "$r_i \to \frac{1}{k}r_i$" corresponds to material changing by factor $k$.
:::

#### Type 2: Row Switching

**Operation**: Swap row $i$ and row $j$.

::: example
**Example 1.2 (Row Switching)**: Swap leaf 🍃 and lemon 🍋

Reordering materials in the table doesn't change any production relationships.

$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{r_1 \leftrightarrow r_2} \begin{pmatrix}
1 & 1 \\
2 & 2 \\
0 & 4 \\
2 & 1
\end{pmatrix}$$
:::

#### Type 3: Row Addition

**Operation**: Replace row $i$ with row $i + k \times$ row $j$.

::: example
**Example 1.3 (Row Addition)**: Lemon → Lemon + 2 Leaf (🍋 → 🍋+2🍃)

**Original table**:
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Material redefinition**: $x_2 \to x_2 + 2x_1$ (each lemon now comes bundled with 2 free tea leaves)

**What happens to demand?** Original equation for Set 1:
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$

With new bundled material $(\text{🍋} + 2\text{🍃})$:
$$r_1 \cdot \text{🍃} + 1 \cdot (\text{🍋} + 2\text{🍃}) + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$
$$= r_1 \cdot \text{🍃} + 1 \cdot \text{🍋} + 2 \cdot \text{🍃} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$
$$= (r_1 + 2) \cdot \text{🍃} + 1 \cdot \text{🍋} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$

For this to equal the original: $r_1 + 2 = 2$, so $r_1 = 0$.

**Contravariant logic**: Since each new lemon bundle **includes** 2 tea leaves, we need **2 fewer** separate tea leaves.

**Updated table** (leaf row $r_1 \to r_1 - 2r_2$, **subtract not add**):
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 0 & 0 \\
\text{Lemon+2Leaf 🍋+2🍃} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Matrix notation**: Perform $r_1 \to r_1 - 2r_2$:
$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{r_1 \to r_1 - 2r_2} \begin{pmatrix}
0 & 0 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix}$$

**Key**: Lemon becomes $(🍋 + 2🍃)$ → Leaf demand **subtracts** $2 \times$ lemon demand (contravariant!)
:::

::: remark
**Summary of contravariant logic for rows**:

- Material $x_i \to kx_i$ → Row operation $r_i \to \frac{1}{k}r_i$ (reciprocal scaling)
- Material $x_i \to x_i + kx_j$ → Row operation $r_j \to r_j - kr_i$ (opposite sign!)

This is because: $r_i x_i + r_j x_j = \text{constant}$
:::

---

### Column Operations: The Covariant Logic

Column operations correspond to **redefining products**.

::: attention
**The Crucial Difference - Covariant (Direct) Logic**

Column operations have **direct logic** because columns and products have an **equation relationship**:

$$\text{(product)} = \text{(recipe)}$$

They appear on **opposite sides** of the equals sign. When the product changes, the recipe changes in the **same direction**.

**Example**: $y_1 = c_1$ implies $2y_1 = 2c_1$

If product $y_1 \to 2y_1$ (doubles), then recipe $c_1 \to 2c_1$ (also doubles).
:::

#### Type 1: Column Multiplication

**Operation**: Replace column $j$ with $k \cdot$ column $j$ (where $k \neq 0$).

::: example
**Example 1.4 (Column Multiplication)**: Set 1 → Double Set 1 (🍱 → 🍱🍱)

**Original table**:
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Product redefinition**: $y_1 \to 2y_1$ (make double portion of Set 1)

**What happens to recipe?** Original equation:
$$y_1 = 2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$

With new product $2y_1$:
$$2y_1 = 2 \times (2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄})$$
$$2y_1 = 4 \cdot \text{🍃} + 2 \cdot \text{🍋} + 0 \cdot \text{🫘} + 4 \cdot \text{🐄}$$

**Covariant logic**: Making twice the product requires twice the ingredients!

**Updated table** (column 1 **multiplied by 2**, same direction):
$$\begin{array}{c|cc}
 & \text{Double Set 1 🍱🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 4 & 2 \\
\text{Lemon 🍋} & 2 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 4 & 1
\end{array}$$

**Matrix notation**: Perform $c_1 \to 2c_1$:
$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{c_1 \to 2c_1} \begin{pmatrix}
4 & 2 \\
2 & 1 \\
0 & 4 \\
4 & 1
\end{pmatrix}$$

**Key**: Product $\times 2$ → Column $\times 2$ (same direction!)
:::

#### Type 2: Column Switching

**Operation**: Swap column $i$ and column $j$.

::: example
**Example 1.5 (Column Switching)**: Swap Set 1 🍱 and Set 2 🍜

Reordering products in the table doesn't change production relationships.

$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{c_1 \leftrightarrow c_2} \begin{pmatrix}
2 & 2 \\
1 & 1 \\
4 & 0 \\
1 & 2
\end{pmatrix}$$
:::

#### Type 3: Column Addition

**Operation**: Replace column $j$ with column $j + k \times$ column $i$.

::: example
**Example 1.6 (Column Addition)**: Set 2 → Set 2 + Set 1 (🍜 → 🍜+🍱)

**Original table**:
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 2 \\
\text{Lemon 🍋} & 1 & 1 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 1
\end{array}$$

**Product redefinition**: $y_2 \to y_2 + y_1$ (bundle Set 2 with Set 1)

**What happens to recipe?** Original equations:
$$y_1 = 2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 0 \cdot \text{🫘} + 2 \cdot \text{🐄}$$
$$y_2 = 2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 4 \cdot \text{🫘} + 1 \cdot \text{🐄}$$

With new bundled product $(y_2 + y_1)$:
$$(y_2 + y_1) = \text{(recipe for } y_2\text{)} + \text{(recipe for } y_1\text{)}$$
$$= (2 + 2) \cdot \text{🍃} + (1 + 1) \cdot \text{🍋} + (4 + 0) \cdot \text{🫘} + (1 + 2) \cdot \text{🐄}$$
$$= 4 \cdot \text{🍃} + 2 \cdot \text{🍋} + 4 \cdot \text{🫘} + 3 \cdot \text{🐄}$$

**Covariant logic**: Making the bundle requires ingredients for **both** products added together!

**Updated table** (column 2 $c_2 \to c_2 + c_1$, **add not subtract**):
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Combo 🍜+🍱} \\
\hline
\text{Leaf 🍃} & 2 & 4 \\
\text{Lemon 🍋} & 1 & 2 \\
\text{Bean 🫘} & 0 & 4 \\
\text{Cow 🐄} & 2 & 3
\end{array}$$

**Matrix notation**: Perform $c_2 \to c_2 + c_1$:
$$\begin{pmatrix}
2 & 2 \\
1 & 1 \\
0 & 4 \\
2 & 1
\end{pmatrix} \xrightarrow{c_2 \to c_2 + c_1} \begin{pmatrix}
2 & 4 \\
1 & 2 \\
0 & 4 \\
2 & 3
\end{pmatrix}$$

**Key**: Product becomes $(🍜 + 🍱)$ → Recipe **adds** the two recipes (same direction!)
:::

::: remark
**Summary of covariant logic for columns**:

- Product $y_j \to ky_j$ → Column operation $c_j \to kc_j$ (same scaling)
- Product $y_j \to y_j + ky_i$ → Column operation $c_j \to c_j + kc_i$ (same sign!)

This is because: $y_j = c_j$ (product equals its recipe)
:::

::: attention
**THE KEY DISTINCTION**

|  | **Rows (Materials)** | **Columns (Products)** |
|--|---------------------|----------------------|
| **Relationship** | Multiplication: demand × material | Equation: product = recipe |
| **Logic** | **Contravariant** (inverse) | **Covariant** (direct) |
| **Scaling** | Material $\times k$ → Row $\times \frac{1}{k}$ | Product $\times k$ → Column $\times k$ |
| **Addition** | Material $x_i \to x_i + kx_j$ → Row $r_j \to r_j - kr_i$ | Product $y_j \to y_j + ky_i$ → Column $c_j \to c_j + kc_i$ |

**Rows work backwards. Columns work forwards.**
:::

---

### Simultaneous Operations Preserve Equations

::: remark
**Change of Perspective**

In the previous sections, we traced **how row/column operations arise from redefining materials/products**. This helps us understand:
- **Why** rows are contravariant (multiplication relationship)
- **Why** columns are covariant (equation relationship)
- **Why** updating semi-finished products is complex (affects both A's columns and B's rows with different logic)

**From this point forward**, we **forget about materials/products** and focus only on:
- **What**: Matrices $A$, $B$, $C$
- **How**: Simultaneous operations keep equations valid

This simplifies our work: we only track matrix changes, not material redefinitions.
:::

Now we state the fundamental propositions:

::: proposition
**Proposition 1.1 (Row Operation Invariance)**

In the equation $C = AB$, if we perform the **same row operation** on both $A$ and $C$ simultaneously, the equality remains valid.
:::

**Why?** Raw materials appear in the **rows** of both $A$ and $C$. When we redefine raw materials, both must update. Matrix $B$ doesn't reference raw materials, so it doesn't change.

**But from now on**, we don't need to think about "why" - we just use the fact that **simultaneous row operations on $A$ and $C$ preserve the equation**.

::: example
**Example 1.7**: Consider
$$\underbrace{\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}}_{A} \underbrace{\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}}_{B} = \underbrace{\begin{pmatrix} 2 & 2 \\ 2 & 3 \end{pmatrix}}_{C}$$

Perform $r_1 \to 2r_1$ on both $A$ and $C$:
$$\underbrace{\begin{pmatrix} 4 & 0 \\ 0 & 1 \end{pmatrix}}_{A'} \underbrace{\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}}_{B} = \underbrace{\begin{pmatrix} 4 & 4 \\ 2 & 3 \end{pmatrix}}_{C'}$$

Still valid! ✓
:::

::: proposition
**Proposition 1.2 (Column Operation Invariance)**

In the equation $C = AB$, if we perform the **same column operation** on both $B$ and $C$ simultaneously, the equality remains valid.
:::

**Why?** Final products appear in the **columns** of both $B$ and $C$. When we redefine final products, both must update. Matrix $A$ doesn't reference final products, so it doesn't change.

**But from now on**, we don't need to think about products - we just use the fact that **simultaneous column operations on $B$ and $C$ preserve the equation**.

::: example
**Example 1.8**: Consider
$$\underbrace{\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}}_{A} \underbrace{\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}}_{B} = \underbrace{\begin{pmatrix} 2 & 1 \\ 2 & 6 \end{pmatrix}}_{C}$$

Perform $c_1 \to 3c_1$ on both $B$ and $C$:
$$\underbrace{\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}}_{A} \underbrace{\begin{pmatrix} 6 & 1 \\ 3 & 3 \end{pmatrix}}_{B'} = \underbrace{\begin{pmatrix} 6 & 1 \\ 6 & 6 \end{pmatrix}}_{C'}$$

Still valid! ✓
:::

::: remark
**Why we don't discuss updating semi-finished products**:

Semi-finished products appear in:
- **Columns of $A$** (as outputs) → would need column operations (covariant)
- **Rows of $B$** (as inputs) → would need row operations (contravariant)

Updating semi-finished would require **two different types of operations with opposite logic**. This is significantly more complex than the cases we've discussed. We avoid this complication.
:::

---

## §1.3 Matrix Inverses

### Definition

::: attention
**Definition 1.1 (Matrix Inverse)**

An $n \times n$ matrix $A$ is called **invertible** if there exists an $n \times n$ matrix $B$ such that

$$AB = BA = I_n$$

where $I_n$ is the $n \times n$ identity matrix. We call $B$ the **inverse** of $A$ and denote it $A^{-1}$.
:::

**Interpretation**: If $A$ is the recipe "raw materials → products", then $A^{-1}$ is the recipe "products → raw materials".

::: example
**Example 1.9**: Consider

$$A = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Coffee ☕} & \text{Milk 🥛} \\ \hline \text{Bean 🫘} & 0 & 2 \\ \text{Cow 🐄} & 1 & 0 \end{array}$$

Then:
$$A^{-1} = \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Bean 🫘} & \text{Cow 🐄} \\ \hline \text{Coffee ☕} & 0 & 1 \\ \text{Milk 🥛} & \frac{1}{2} & 0 \end{array}$$

**Verification**:
$$AA^{-1} = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \quad \checkmark$$
:::

---

### Properties of Inverses

::: proposition
**Proposition 1.3 (Inverse is Unique)**

If $A$ has an inverse, it is unique.
:::

**Proof**: Suppose $B$ and $C$ both satisfy the definition. Then:
$$B = BI = B(AC) = (BA)C = IC = C$$
Therefore $B = C$. □

::: proposition
**Proposition 1.4 (Left Inverse Equals Right Inverse)**

For a square matrix $A$, if $AB = I$, then $B = A^{-1}$ (and automatically $BA = I$).
:::

**Proof**: Suppose $AB = I$. We need to show $BA = I$.

Since $A$ is square and $AB = I$, we know $A$ has a left inverse. Let $CA = I$ for some matrix $C$.

Then:
$$B = IB = (CA)B = C(AB) = CI = C$$

Therefore $BA = CA = I$.

So $AB = BA = I$, which means $B = A^{-1}$. □

::: remark
**Practical implication**: To verify that $B$ is the inverse of square matrix $A$, you only need to check **one direction**! If $AB = I$, then automatically $BA = I$.
:::

::: proposition
**Proposition 1.5 (Product of Invertible Matrices)**

If $A$ and $B$ are invertible, then $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$.
:::

**Proof**:
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$$

By Proposition 1.4, this proves $(AB)^{-1} = B^{-1}A^{-1}$. □

::: remark
**Order reversal**: $(AB)^{-1} = B^{-1}A^{-1}$, not $A^{-1}B^{-1}$.

**Intuition**: Socks then shoes → undo by removing shoes first, then socks.
:::

::: remark
**Why introduce inverses?**

The inverse is **notational convenience** for tracking invariants when solving equations. Writing $B = A^{-1}C$ makes explicit that "$B$ doesn't change when we perform row operations on $A$ and $C$."
:::

---

## §1.4 Solving Matrix Equations Using Row Operations

### The Problem (When $A$ is Invertible)

**Given**: Matrices $A$ and $C$ satisfying $AB = C$, where **$A$ is invertible**
**Find**: Matrix $B$

::: attention
**Important Prerequisite**: This method only works when $A$ is invertible.

If $A$ is not invertible, the equation $AB = C$ may have:
- No solutions
- Infinitely many solutions

The systematic treatment of such cases will be covered in Chapter 2 (Linear Equations).

In this section, we focus on applying the inverse matrix method when $A$ is known to be invertible.
:::

### The Method

From $AB = C$, multiply by $A^{-1}$ on the left:
$$B = A^{-1}C$$

**Key idea**: Instead of computing $A^{-1}$ explicitly, perform row operations on "$A$" and "$C$" in the expression $A^{-1}C$ to transform "$A$" into $I$.

::: example
**Example 1.10**: Solve $AB = C$ for $B$ where

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$

**Solution**:

Rewrite as $B = A^{-1}C$:
$$B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$

**Step 1**: $r_1 \leftrightarrow r_2$:
$$B = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 5 & 8 \end{pmatrix}$$

**Step 2**: $r_2 \to r_2 - 2r_1$:
$$B = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ -1 & -2 \end{pmatrix}$$

**Step 3**: $r_2 \to (-1) \cdot r_2$:
$$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$$

**Step 4**: $r_1 \to r_1 - r_2$:
$$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = I^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$$

**Answer**: $B = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$
:::

---

## §1.5 Finding Matrix Inverses

### The Method (Row Operations)

Finding $A^{-1}$ is a special case: solve $AA^{-1} = I$ for $A^{-1}$.

From $A^{-1} = A^{-1}I$, perform row operations to transform "$A$" into $I$.

::: example
**Example 1.11**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$.

**Solution**:

$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

**Step 1**: $r_2 \to r_2 - r_1$:
$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$$

**Step 2**: $r_1 \leftrightarrow r_2$:
$$A^{-1} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$$

**Step 3**: $r_2 \to r_2 - 2r_1$:
$$A^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 3 & -2 \end{pmatrix}$$

**Step 4**: $r_2 \to (-1) \cdot r_2$:
$$A^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ -3 & 2 \end{pmatrix}$$

**Step 5**: $r_1 \to r_1 - r_2$:
$$A^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
:::

---

### The Method (Column Operations)

Alternatively, use column operations on $IA^{-1} = A^{-1}$.

::: example
**Example 1.12**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$ using column operations.

**Solution**:

$$A^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1}$$

**Step 1**: $c_1 \to c_1 - c_2$:
$$A^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1}$$

**Step 2**: $c_2 \to c_2 - c_1$:
$$A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}^{-1}$$

**Step 3**: $c_1 \to c_1 - c_2$:
$$A^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$

Same answer! ✓
:::

---

## §1.6 When Does an Inverse Exist?

::: remark
**Not all matrices are invertible**

$$A = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$$

Row 2 = $2 \times$ row 1 (redundant information).

Try to find inverse:
$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

Perform $r_2 \to r_2 - 2r_1$:
$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 0 & 0 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$$

**Stuck!** Cannot transform to $I$. This matrix has **no inverse**.
:::

**Criterion** (Chapter 2): An $n \times n$ matrix is invertible iff it can be transformed to $I$ using row operations (equivalently: rank = $n$).

---

## Exercises

::: problem
**Exercise 1.1**: Verify Proposition 1.4 for:
$$A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$$

Check that $AB = I$, then verify that $BA = I$ also holds.
:::

::: problem
**Exercise 1.2**: Consider the equation $AB = C$ where
$$A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 4 & 7 \\ 3 & 5 \\ 2 & 3 \end{pmatrix}$$

Solve for $B$ using row operations on $B = A^{-1}C$.
:::

::: problem
**Exercise 1.3**: Find the inverses using row operations:

(a) $A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$

(b) $A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$
:::

::: problem
**Exercise 1.4**: Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ using column operations. Verify it matches the row operation result.
:::

::: problem
**Exercise 1.5**: Try to find the inverse of $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. What happens? Explain why this matrix is not invertible.
:::

::: problem
**Exercise 1.6**: Show that if $A$ and $B$ are invertible, then:

(a) $(A^{-1})^{-1} = A$

(b) $(A^T)^{-1} = (A^{-1})^T$
:::

---

## Summary

::: tip
**Key Takeaways**:

1. **Row operations**: **Contravariant** (inverse logic) because demand × material = constant
   - Material $\times k$ → Row $\times \frac{1}{k}$ (reciprocal)
   - Material $x_i \to x_i + kx_j$ → Row $r_j \to r_j - kr_i$ (opposite sign!)

2. **Column operations**: **Covariant** (direct logic) because product = recipe
   - Product $\times k$ → Column $\times k$ (same)
   - Product $y_j \to y_j + ky_i$ → Column $c_j \to c_j + kc_i$ (same sign!)

3. **Equation $C = AB$ is invariant** under:
   - Simultaneous row ops on $A$ and $C$ (Prop 1.1)
   - Simultaneous column ops on $B$ and $C$ (Prop 1.2)
   - (Semi-finished updates avoided due to mixed logic)

4. **Left inverse = right inverse** for square matrices (Prop 1.4)

5. **Solving $AB = C$** (when $A$ invertible): use row ops on $B = A^{-1}C$ until "$A$" becomes $I$

6. **Finding $A^{-1}$**: use row ops on $A^{-1}I$ or column ops on $IA^{-1}$ until "$A$" becomes $I$
:::
