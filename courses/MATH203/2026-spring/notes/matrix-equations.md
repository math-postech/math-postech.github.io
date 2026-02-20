# Lecture 2: Row and Column Operations

> **Topics**: §1.2–1.3 — Row/Column Operations, Matrix Inverses, Solving Matrix Equations

---

## §1.2 Row and Column Operations

### Review: The Ingredient Table Interpretation

Recall from Week 1 that the matrix product $C = AB$ represents composition of recipe tables:

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

**Matrix $A$**: Semi-finished ← Raw materials (rows = raw materials, columns = semi-finished)
**Matrix $B$**: Final products ← Semi-finished (rows = semi-finished, columns = final products)
**Matrix $C = AB$**: Final products ← Raw materials (rows = raw materials, columns = final products)

**Key observation**:

| Concept | Appears in Matrix $A$ | Appears in Matrix $B$ | Appears in Matrix $C$ |
|---------|----------------------|----------------------|----------------------|
| Raw materials | rows | ✗ | rows |
| Semi-finished products | columns | rows | ✗ |
| Final products | ✗ | columns | columns |

When we **redefine** one of these three concepts (change the unit, repackage, etc.), all matrices that reference this concept must update their representation. But the underlying production relationships remain unchanged.

---

### The Three Types of Row Operations

Before studying how operations affect equations, we define the three types of **invertible** row operations:

> [!RMK]
> **Row operations are table updates when we redefine raw materials.**
>
> When we change what "1 unit of material" means, we must update all tables that reference this material.

**Row Multiplication**: Replace row $i$ with $k \cdot$ row $i$ (where $k \neq 0$).

**Example**: Coffee beans → Double coffee beans. If we use 2 "new units", the demand becomes $\frac{1}{2}$ of the old demand. The row gets multiplied by 2.

**Row Switching**: Swap row $i$ and row $j$.

**Example**: Reorder ingredients in the table. The table expresses the same facts.

**Row Addition**: Replace row $i$ with row $i$ + $k \times$ row $j$.

**Example**: Each lemon comes with 2 free tea leaves (lemon → lemon + 2 tea). When using 1 lemon (includes 2 free tea), we need 2 fewer tea leaves. Tea row gets subtracted by $2 \times$ lemon row.

> [!RMK]
> **Column operations** (column multiplication, switching, addition) work the same way but apply to **redefining products** instead of materials.

---

### Simultaneous Row Operations Preserve Equations

> [!PROP]
> **Proposition 1.1 (Row Operation Invariance)**
>
> In the equation $C = AB$, if we perform the **same row operation** on both $A$ and $C$ simultaneously, the equality remains valid.

**Why?** Raw materials appear in the rows of both $A$ and $C$. When we redefine raw materials, both $A$ and $C$ must update their representations to reflect the new definition. Since the underlying production relationship hasn't changed, the equation $C = AB$ remains true.

**Note**: Matrix $B$ does not change, because it doesn't reference raw materials at all.

> [!EXA]
> **Example 1.1**: Consider the equation
>
> $$\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 3 \end{pmatrix}$$
>
> Redefine row 1 materials by multiplying by 2 (coffee beans → double coffee beans). Perform $r_1 \to 2r_1$ on both left factor and product:
>
> $$\begin{pmatrix} 4 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 4 & 4 \\ 2 & 3 \end{pmatrix}$$
>
> The equation still holds! The middle factor (matrix $B$) remains unchanged.

> [!PROP]
> **Proposition 1.2 (Column Operation Invariance)**
>
> In the equation $C = AB$, if we perform the **same column operation** on both $B$ and $C$ simultaneously, the equality remains valid.

**Why?** Final products appear in the columns of both $B$ and $C$. When we redefine final products, both must update. Matrix $A$ doesn't change because it doesn't reference final products.

> [!RMK]
> **What about redefining semi-finished products?**
>
> Semi-finished products appear in:
> - Columns of $A$ (as outputs)
> - Rows of $B$ (as inputs)
>
> This would require **column operations on $A$** and **row operations on $B$** simultaneously. While this is theoretically valid, it's more complex than the previous two cases. We won't use this in this course.

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
> **Example 1.2**: Consider the recipe table
>
> $$A = \begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Coffee} & \text{Milk} \\ \hline \text{Beans} & 0 & 2 \\ \text{Cow} & 1 & 0 \end{array}$$
>
> Coffee needs 0 cows + 2 beans. Milk needs 1 cow + 0 beans.
>
> The inverse recipe (products → materials) would be:
>
> $$A^{-1} = \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{array}{c|cc} & \text{Beans} & \text{Cow} \\ \hline \text{Coffee} & 0 & 1 \\ \text{Milk} & \frac{1}{2} & 0 \end{array}$$
>
> Beans = $0 \times$ coffee + $1 \times$ milk. Cow = $\frac{1}{2} \times$ coffee + $0 \times$ milk.
>
> **Verification**:
> $$\begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ \frac{1}{2} & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

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

**Naive approach** (don't do this):
1. Compute $A^{-1}$ explicitly
2. Compute $B = A^{-1}C$

This is wasteful - we're doing twice the work!

**Better approach**: Use row operations to transform $A$ into $I$ while simultaneously transforming $C$.

### The Method

**Key idea**: If $AB = C$, then $B = A^{-1}C$. Instead of computing $A^{-1}$ explicitly, we perform row operations on "$A$" in "$A^{-1}C$" to turn it into $I$.

**Setup**: From $AB = C$, multiply both sides by $A^{-1}$ on the left:
$$B = A^{-1}C$$

Now we perform row operations on both "$A$" and "$C$" simultaneously (which doesn't change the value of $A^{-1}C$ by Proposition 1.1). Our goal is to transform "$A$" into $I$:

$$B = A^{-1}C \xrightarrow{\text{row ops}} (A')^{-1}C' \xrightarrow{\text{row ops}} \cdots \xrightarrow{\text{row ops}} I^{-1}C'' = C''$$

When "$A$" becomes $I$, we have $B = I^{-1}C'' = C''$ (the transformed $C$).

> [!EXA]
> **Example 1.3**: Solve $AB = C$ for $B$ where
>
> $$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$
>
> **Solution**:
>
> Rewrite as $B = A^{-1}C$:
> $$B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix}$$
>
> **Step 1**: Perform $r_1 \leftrightarrow r_2$ (swap rows) on both "$A$" and "$C$":
> $$B = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 5 & 8 \end{pmatrix}$$
>
> **Step 2**: Perform $r_2 \to r_2 - 2r_1$ on both:
> $$B = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ -1 & -2 \end{pmatrix}$$
>
> **Step 3**: Perform $r_2 \to (-1) \cdot r_2$ on both:
> $$B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$$
>
> **Step 4**: Perform $r_1 \to r_1 - r_2$ on both:
> $$B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = I^{-1} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$$
>
> Therefore:
> $$B = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$$
>
> **Verification**:
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 8 \\ 3 & 5 \end{pmatrix} \quad \checkmark$$

> [!RMK]
> **The invariant principle**: Throughout the row operations, the value $A^{-1}C$ never changes. We're just transforming how "$A$" is represented until it becomes $I$.
>
> This is the power of using equation-based thinking instead of "doing operations to matrices."

---

## §1.5 Finding Matrix Inverses

### The Method

Finding $A^{-1}$ is a special case of solving $AB = C$: set $B = A^{-1}$ and $C = I$.

From $AA^{-1} = I$, we can write:
$$A^{-1} = A^{-1}I$$

Now perform row operations on both "$A$" and "$I$" simultaneously to transform "$A$" into $I$:

$$A^{-1}I \xrightarrow{\text{row ops}} (A')^{-1}I' \xrightarrow{\text{row ops}} \cdots \xrightarrow{\text{row ops}} I^{-1}I'' = I''$$

When "$A$" becomes $I$, we have $A^{-1} = I''$ (the transformed identity matrix).

> [!EXA]
> **Example 1.4**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$.
>
> **Solution**:
>
> Setup the equation $A^{-1} = A^{-1}I$:
> $$\begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
>
> **Step 1**: Perform $r_2 \to r_2 - r_1$ on both "$A$" and "$I$":
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$$
>
> **Step 2**: Perform $r_1 \leftrightarrow r_2$ (swap) on both:
> $$\begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$$
>
> **Step 3**: Perform $r_2 \to r_2 - 2r_1$ on both:
> $$\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ 3 & -2 \end{pmatrix}$$
>
> **Step 4**: Perform $r_2 \to (-1) \cdot r_2$ on both:
> $$\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} -1 & 1 \\ -3 & 2 \end{pmatrix}$$
>
> **Step 5**: Perform $r_1 \to r_1 - r_2$ on both:
> $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
>
> Therefore:
> $$A^{-1} = I^{-1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
>
> **Verification**:
> $$\begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad \checkmark$$

> [!RMK]
> **Alternative: Column operations**
>
> We can also use column operations. From $A^{-1}A = I$, we write:
> $$IA^{-1} = A^{-1}$$
>
> Then perform column operations on both "$A$" and "$I$" to transform "$A$" into $I$. When "$A$" becomes $I$, the transformed "$I$" is $A^{-1}$.

> [!EXA]
> **Example 1.5**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$ using column operations.
>
> **Solution**:
>
> Setup the equation $IA^{-1} = A^{-1}$:
> $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1}$$
>
> **Step 1**: Perform $c_1 \to c_1 - c_2$ on both "$I$" and "$A$":
> $$\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1}$$
>
> **Step 2**: Perform $c_2 \to c_2 - c_1$ on both:
> $$\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}^{-1}$$
>
> **Step 3**: Perform $c_1 \to c_1 - c_2$ on both:
> $$\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1}$$
>
> Therefore:
> $$A^{-1} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$
>
> Same answer! Both row and column methods work.

---

## §1.6 When Does an Inverse Exist?

> [!RMK]
> **Not all matrices are invertible**
>
> Consider:
> $$A = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$$
>
> Notice that row 2 = $2 \times$ row 1. This means the recipe table contains redundant information. Try to find the inverse using row operations:
>
> $$\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$
>
> Perform $r_2 \to r_2 - 2r_1$:
> $$\begin{pmatrix} 2 & 1 \\ 0 & 0 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 0 & 0 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$$
>
> We're stuck! The second row became all zeros. No matter what row operations we perform, we cannot transform "$A$" into $I$. Therefore, this matrix has no inverse.

**Intuitive reason**: If two rows are linearly dependent (one is a multiple of the other), the recipe table doesn't contain full information about all raw materials. We cannot reverse the process.

**Formal criterion** (to be developed in Chapter 2): An $n \times n$ matrix $A$ is invertible if and only if its **rank** equals $n$.

---

## Exercises

> [!PROB]
> **Exercise 1.1**: Consider the equation $AB = C$ where
> $$A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad B = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}, \quad C = \begin{pmatrix} 7 & 9 \\ 2 & 4 \end{pmatrix}$$
>
> (a) Verify that $AB = C$.
>
> (b) Perform the row operation $r_1 \to 2r_1$ on both $A$ and $C$. Write the new equation and verify it still holds.
>
> (c) Explain using the ingredient table why $B$ remains unchanged when we perform row operations on $A$ and $C$.

> [!PROB]
> **Exercise 1.2**: Solve for $B$ in the equation $AB = C$ where
> $$A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 4 & 7 \\ 3 & 5 \\ 2 & 3 \end{pmatrix}$$
>
> Use row operations on $B = A^{-1}C$ to transform "$A$" into $I$.

> [!PROB]
> **Exercise 1.3**: Find the inverses of the following matrices using row operations on $A^{-1}I$:
>
> (a) $A = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$
>
> (b) $A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$

> [!PROB]
> **Exercise 1.4**: Try to find the inverse of $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ using row operations. What happens? Explain why this matrix does not have an inverse.

> [!PROB]
> **Exercise 1.5**: Compute the following products using row operations (don't compute $A^{-1}$ explicitly):
>
> (a) $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 1 \\ 0 & 2 & 9 \end{pmatrix}$
>
> (b) $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 5 & 7 \\ 2 & 3 & 4 \end{pmatrix}$

> [!PROB]
> **Exercise 1.6**: Show that if $A$ and $B$ are invertible $n \times n$ matrices, then:
>
> (a) $(A^{-1})^{-1} = A$
>
> (b) $(A^T)^{-1} = (A^{-1})^T$ (where $A^T$ denotes the transpose)

---

## Summary

> [!TIP]
> **Key Takeaways**:
>
> 1. **Row operations update tables when we redefine raw materials.** Column operations update tables when we redefine products.
>
> 2. **Equation $C = AB$ is invariant** under simultaneous row operations on $A$ and $C$, or simultaneous column operations on $B$ and $C$.
>
> 3. **Inverse $A^{-1}$ is notational convenience** for tracking the invariant "$B$ doesn't change" when solving $AB = C$.
>
> 4. **Don't compute inverses explicitly.** Instead, use row operations:
>    - To solve $AB = C$ for $B$: use row ops on $B = A^{-1}C$ until "$A$" becomes $I$
>    - To find $A^{-1}$: use row ops on $A^{-1}I$ until "$A$" becomes $I$
>
> 5. **Keep equations throughout.** Write $A^{-1}C$ or $A^{-1}I$, then transform using $\xrightarrow{\text{row ops}}$ notation. The value never changes - only the representation changes.
