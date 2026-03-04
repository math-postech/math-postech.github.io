# Tutorial Suggestions: Week 2 — Block Matrix Multiplication and Rank

> **For**: Teaching Assistants conducting tutorial sessions (Mar 5, 2026)
> **Related Lecture**: [Lecture 3: Cross-Filling Method](../notes/cross-filling.md)
> **Duration**: 50 minutes
> **Prerequisites**: Students have learned matrix multiplication (four perspectives), cross-filling method, and rank-one decomposition

---

## Overview

This tutorial reinforces **block matrix multiplication** and introduces the **preliminary rank definition** via cross-filling. These concepts bridge Lecture 3 (cross-filling) and Lecture 4 (where rank will be proven well-defined).

**Key pedagogical notes**:
- Emphasize that the **rank definition is NOT yet well-defined** (students will prove well-definedness in Lecture 4)
- Use the **ingredient table framework** to explain block multiplication constraints
- Connect block matrices to the **sum-of-outer-products** perspective from Lecture 1

---

## Topic 1: Block Matrix Multiplication (15 min)

### Learning Goal

Students should understand:
1. The **separation matching condition**: row separation of $A$ must align with column separation of $B$
2. Block multiplication as a **natural extension** of the rank-one sum perspective

### Suggested Approach

#### Step 1: Separation Matching Condition (7 min)

Draw the separation diagram on the board:

```
        A              B
      | |
  c   c            -r-
  |   |            -r-
```

Explain:
- **Horizontal separation** in $A$ (splitting columns): Treats columns of $A$ as grouped
- **Vertical separation** in $B$ (splitting rows): Treats rows of $B$ as grouped
- **The critical rule**: The number of column-groups in $A$ must equal the number of row-groups in $B$

Work through a $4 \times 4$ example:

$$A = \begin{pmatrix}
\color{red}1 & \color{red}2 & \color{blue}0 & \color{blue}0 \\
\color{red}0 & \color{red}1 & \color{blue}1 & \color{blue}0 \\
\color{red}3 & \color{red}0 & \color{blue}0 & \color{blue}2 \\
\color{red}0 & \color{red}0 & \color{blue}1 & \color{blue}1
\end{pmatrix}, \quad
B = \begin{pmatrix}
\color{red}1 & \color{red}0 \\
\color{red}0 & \color{red}1 \\
\hline
\color{blue}2 & \color{blue}0 \\
\color{blue}0 & \color{blue}1
\end{pmatrix}$$

Here $A$ has **2 column-groups** (red, blue) and $B$ has **2 row-groups** (red, blue), so block multiplication works.

Compute one block entry together:

$$(AB)_{11} = A_{11}B_{11} + A_{12}B_{21} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$$

#### Step 2: Connection to Rank-One Sum (8 min)

**Critical insight**: Block multiplication is **not a new rule** — it's just the **rank-one sum formula** applied to grouped columns/rows.

Recall from Lecture 1:
$$AB = \mathbf{a}_1\mathbf{b}_1^T + \mathbf{a}_2\mathbf{b}_2^T + \cdots + \mathbf{a}_n\mathbf{b}_n^T$$

When we group columns $\{\mathbf{a}_1, \mathbf{a}_2\}$ into a block $A_1$ and rows $\{\mathbf{b}_1^T, \mathbf{b}_2^T\}$ into a block $B_1$:
$$\mathbf{a}_1\mathbf{b}_1^T + \mathbf{a}_2\mathbf{b}_2^T = A_1 B_1$$

This is why separations must match — the sum pairs up columns of $A$ with rows of $B$.

::: tip
**Teaching tip**: Draw the outer product diagrams side-by-side to show how grouping columns/rows creates block multiplication.
:::

---

## Topic 2: Two Formulations of Matrix Products (10 min)

### Learning Goal

Students should fluently use **both perspectives** for $AB$ and $BA$:
- $AB$ = **sum of outer products** (columns of $A$ ⊗ rows of $B$)
- $BA$ = **table of inner products** (rows of $B$ ⊗ columns of $A$)

### Suggested Approach

#### Example with Explicit Comparison

Use a simple $3 \times 2$ matrix $A$ and $2 \times 3$ matrix $B$:

$$A = \begin{pmatrix}
1 & 0 \\
2 & 1 \\
0 & 3
\end{pmatrix}, \quad
B = \begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & 1
\end{pmatrix}$$

**Compute $AB$ (outer product sum)**:

$$AB = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}\begin{pmatrix} 1 & 2 & 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}\begin{pmatrix} 0 & 1 & 1 \end{pmatrix}$$

$$= \begin{pmatrix}
1 & 2 & 0 \\
2 & 4 & 0 \\
0 & 0 & 0
\end{pmatrix} + \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 1 \\
0 & 3 & 3
\end{pmatrix} = \begin{pmatrix}
1 & 2 & 0 \\
2 & 5 & 1 \\
0 & 3 & 3
\end{pmatrix}$$

**Compute $BA$ (inner product table)**:

$$BA = \begin{pmatrix}
\langle \mathbf{b}_1^T, \mathbf{a}_1 \rangle & \langle \mathbf{b}_1^T, \mathbf{a}_2 \rangle \\
\langle \mathbf{b}_2^T, \mathbf{a}_1 \rangle & \langle \mathbf{b}_2^T, \mathbf{a}_2 \rangle \\
\langle \mathbf{b}_3^T, \mathbf{a}_1 \rangle & \langle \mathbf{b}_3^T, \mathbf{a}_2 \rangle
\end{pmatrix}$$

Compute explicitly:
- $(BA)_{11} = (1)(1) + (2)(2) + (0)(0) = 5$
- $(BA)_{12} = (1)(0) + (2)(1) + (0)(3) = 2$
- etc.

**Summary table** (write on board):

| Product | Structure | $(i,j)$-entry formula | Geometric interpretation |
|---------|-----------|---------------------|------------------------|
| $AB$ | **Sum** of rank-1 matrices | $\sum_k \mathbf{a}_k (\mathbf{b}_k^T)_{ij}$ | Superposition of outer products |
| $BA$ | **Table** of numbers | $\sum_k (\mathbf{b}^T)_{ik} (\mathbf{a})_{kj}$ | Grid of inner products |

::: attention
**Emphasize**: These are **not different formulas** — they're the same multiplication viewed from different angles. Understanding both perspectives is essential for cross-filling.
:::

---

## Topic 3: Rank Definition via Cross-Filling (15 min)

### Learning Goal

Students should:
1. Understand the **preliminary rank definition**: rank = number of rank-1 matrices in cross-filling decomposition
2. **Recognize this is not yet well-defined** (different cross-filling paths might give different counts)
3. Compute rank of diagonal matrices using this method

### Suggested Approach

#### Step 1: Motivate the Definition (3 min)

Recall from Lecture 3: Every matrix can be written as a sum of rank-1 matrices via cross-filling:

$$A = R_1 + R_2 + \cdots + R_k$$

where each $R_i = \mathbf{u}_i \mathbf{v}_i^T$ is rank-1.

**Natural question**: How many rank-1 pieces do we need? This number should measure the "complexity" of $A$.

::: proposition
**Preliminary Definition: Rank via Cross-Filling**

The **rank** of a matrix $A$ is the number of rank-1 matrices that appear in its cross-filling decomposition.
:::

#### Step 2: Critical Warning (4 min)

::: attention
**IMPORTANT: This definition is NOT yet well-defined**

**Problem**: Different cross-filling paths might produce different numbers of rank-1 pieces.

**Example**:
$$A = \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$$

- Path 1 (start at $(1,1)$): Peel off $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \end{pmatrix}$ → **1 piece**
- Path 2 (start at $(1,1)$, then $(2,2)$): Might get 2 pieces if done inefficiently

**Resolution**: In **Lecture 4**, we will prove that the rank is actually **well-defined** — all cross-filling paths produce the same count if done correctly (always choosing the largest possible rank-1 piece).

For now, when computing rank:
- Choose your cross-filling carefully (largest pivot each time)
- Trust that the result will be consistent
:::

#### Step 3: Example — Rank of Diagonal Matrix (8 min)

Work through a concrete example showing the rank equals the number of nonzero diagonal entries.

::: example
**Example: Rank of Diagonal Matrix**

Compute the rank of:
$$D = \begin{pmatrix}
3 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 5
\end{pmatrix}$$

**Cross-filling process**:

**Step 1**: Choose pivot at $(1,1) = 3$:
$$R_1 = \begin{pmatrix} 3 \\ 0 \\ 0 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 \end{pmatrix} = \begin{pmatrix}
3 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

Remainder: $D - R_1 = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 5
\end{pmatrix}$

**Step 2**: Choose pivot at $(3,3) = 5$:
$$R_2 = \begin{pmatrix} 0 \\ 0 \\ 5 \end{pmatrix} \begin{pmatrix} 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 5
\end{pmatrix}$$

Remainder: $D - R_1 - R_2 = \mathbf{0}$

**Result**: $D = R_1 + R_2$ → **rank = 2**

**Observation**: This equals the number of **nonzero diagonal entries** (entries 3 and 5).
:::

::: remark
**Why this works for diagonal matrices**

**Critical emphasis**: The rank we compute here comes **directly from the cross-filling decomposition**. We currently **only accept** rank-1 counts obtained through the cross-filling process as the definition of rank.

Diagonal matrices have a special structure: each nonzero diagonal entry $(i,i)$ contributes exactly one rank-1 piece in the cross-filling:

$$\text{diag}(d_1, d_2, \ldots, d_n) = \sum_{i: d_i \neq 0} d_i \cdot \mathbf{e}_i \mathbf{e}_i^T$$

where $\mathbf{e}_i$ is the $i$-th standard basis vector.

Each $\mathbf{e}_i \mathbf{e}_i^T$ is rank-1, and they don't overlap (different rows and columns), so when we perform cross-filling, we peel off exactly one rank-1 matrix per nonzero diagonal entry.

**Important**: While you may know from previous linear algebra courses that "rank = number of linearly independent rows/columns", at this stage in the course, we **only use the cross-filling definition**. The equivalence will be proven in Lecture 4.
:::

---

## Time Management Recommendations

| Topic | Suggested Time | Adjustment Strategy |
|-------|---------------|---------------------|
| Block matrix multiplication | 15 min | If running over, skip the full $(AB)$ computation and just show the block structure |
| Two formulations ($AB$ vs $BA$) | 10 min | **Essential** — do not skip. This is critical for understanding cross-filling in Lecture 4 |
| Rank definition | 15 min | If short on time, emphasize the "not yet well-defined" warning and save diagonal example for next tutorial |
| Questions & wrap-up | 5 min | Reserve for student questions |

::: tip
**If you have extra time**:
- Introduce the concept of **linear independence** informally: "Can we write one column as a combination of others?"
- Preview that Lecture 4 will connect rank to linear independence of columns/rows
- Work through an additional rank example with a $2 \times 3$ matrix
:::

---

## Common Student Mistakes to Address

### Mistake 1: Forgetting Separation Matching

**Symptom**: Students try to multiply blocks without checking if separations align.

**Fix**: Always draw the separation diagram:
```
     A        B
   | | |    -r-
   | | |    -r-
            -r-
```
Count: $A$ has 3 column-groups, $B$ has 3 row-groups ✓

### Mistake 2: Confusing Outer Product vs Inner Product Order

**Symptom**: Writing $(AB)_{ij} = \langle \mathbf{a}_i, \mathbf{b}_j \rangle$ (wrong dimensions)

**Fix**: Emphasize:
- **Outer product** $\mathbf{u}\mathbf{v}^T$: column $\times$ row → matrix
- **Inner product** $\langle \mathbf{u}, \mathbf{v} \rangle$: row $\times$ column → scalar

For $AB$: columns of $A$ combine with rows of $B$ (outer), not rows with rows (inner).

### Mistake 3: Treating Rank as "Dimensions" or "Size"

**Symptom**: Saying "rank of $3 \times 4$ matrix is 3" (confusing rank with row count)

**Fix**: Emphasize rank measures **complexity** (number of rank-1 building blocks), not size. A $100 \times 100$ matrix can have rank 1 if all rows are proportional.

---

## Connections to Future Material

Prepare students for Lecture 4 by mentioning:

1. **Well-definedness of rank**: "Next lecture, we'll prove that no matter which cross-filling path you choose, the rank count is always the same."

2. **Connection to linear independence**: "The rank also equals the maximum number of linearly independent columns (or rows). We'll see why these two definitions are equivalent."

3. **Solvability of $Ax = b$**: "Rank determines when $Ax = b$ has solutions — this connects cross-filling to solving linear systems."

---

## Materials to Prepare

- [ ] Whiteboard markers (at least 3 colors for block separation diagrams)
- [ ] Pre-written $4 \times 4$ block matrix example on board before class
- [ ] Handout (optional) with the two-formulations summary table
- [ ] Diagonal matrix example for cross-filling demonstration

---

## Questions to Check Understanding

Use these to gauge whether students are ready to move on:

1. **Block multiplication**: "If $A$ is $3 \times 5$ with column separation $[2 | 3]$, what row separation must $B$ have for block multiplication to work?"
   - Expected answer: $B$ must have row separation $[2 | 3]$ (matching column groups)

2. **Outer vs inner products**: "Given $A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 0 & 3 \end{pmatrix}$, write $AB$ as a sum of outer products by decomposing $A$ into its **column vectors** and $B$ into its **row vectors**."
   - Expected answer: Write $A = [\mathbf{a}_1 \mid \mathbf{a}_2 \mid \mathbf{a}_3]$ where $\mathbf{a}_1 = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$, $\mathbf{a}_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$, $\mathbf{a}_3 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, and $B = \begin{pmatrix} \mathbf{b}_1^T \\ \mathbf{b}_2^T \\ \mathbf{b}_3^T \end{pmatrix}$ where $\mathbf{b}_1^T = \begin{pmatrix} 1 & 0 \end{pmatrix}$, $\mathbf{b}_2^T = \begin{pmatrix} 2 & 1 \end{pmatrix}$, $\mathbf{b}_3^T = \begin{pmatrix} 0 & 3 \end{pmatrix}$. Then:
   $$AB = \mathbf{a}_1\mathbf{b}_1^T + \mathbf{a}_2\mathbf{b}_2^T + \mathbf{a}_3\mathbf{b}_3^T = \begin{pmatrix} 1 \\ 3 \end{pmatrix}\begin{pmatrix} 1 & 0 \end{pmatrix} + \begin{pmatrix} 2 \\ 1 \end{pmatrix}\begin{pmatrix} 2 & 1 \end{pmatrix} + \begin{pmatrix} 0 \\ 1 \end{pmatrix}\begin{pmatrix} 0 & 3 \end{pmatrix}$$

3. **Rank**: "Can a $5 \times 5$ matrix have rank 10?"
   - Expected answer: No — rank cannot exceed the smaller dimension (at most 5 rank-1 pieces for a $5 \times 5$ matrix)

---

## Pedagogical Notes

::: remark
**Alignment with Course Philosophy**

This tutorial follows the course's **ingredient table pedagogy**:
- **Concrete before abstract**: Start with block matrices as "grouped ingredients", then formalize
- **Why before what**: Explain separation matching via the rank-one sum formula, not as a memorized rule
- **Multiple perspectives**: Present both outer product and inner product views
- **Pedagogical transparency**: Explicitly warn students that rank is "not yet well-defined"

The goal is **understanding through logical principles**, not memorization of procedures.
:::

---

**Last Updated**: 2026-03-04
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
