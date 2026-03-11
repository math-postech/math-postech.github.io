# Tutorial Suggestions: Week 3 — Cancellation Properties and Rank

> **For**: Teaching Assistants conducting tutorial sessions (Mar 12, 2026)
> **Related Lectures**: [Lecture 2: Row and Column Operations](../notes/matrix-equations.md), [Lecture 4: Subspace and Linear Independence](../notes/subspace-and-linear-independence.md)
> **Duration**: 50 minutes
> **Prerequisites**: Students have learned simultaneous row/column operations, cross-filling, linear independence, and preliminary rank definition

---

## Overview

This tutorial bridges **computational techniques** (simultaneous operations) with **theoretical concepts** (linear independence and cancellation). It fills important gaps left by the lectures:

**Key topics**:
1. Simultaneous row/column operations on matrix equations
2. **Cancellation principles** — simplified criteria for left/right cancellation
3. Properties of cross-filling factorization $A = UV$
4. Using cross-filling to determine rank conditions

**Pedagogical goals**:
- Emphasize the **symmetry** between row and column linear independence
- Provide **simple criteria**: rank = columns → left cancel, rank = rows → right cancel
- Connect abstract concepts (linear independence) to concrete computations (cross-filling)

---

## Topic 1: Simultaneous Row and Column Operations (12 min)

### Learning Goal

Students should understand when and how to perform simultaneous operations on matrix equations to simplify computations.

### Suggested Approach

#### Step 1: Review from Lecture 2 (3 min)

Recall the two fundamental invariance properties:

::: proposition
**Simultaneous Operations Preserve Equations**

Given $C = AB$:
- **Row operations**: Perform the same row operation on both $A$ and $C$ simultaneously → equation remains valid
- **Column operations**: Perform the same column operation on both $B$ and $C$ simultaneously → equation remains valid
:::

**Why this matters**: We can simplify matrix equations without computing inverses explicitly.

#### Step 2: The A^{-1}B and AB^{-1} Forms (9 min)

Work through two concrete examples side-by-side.

::: example
**Example 1.1: Using A^{-1}B form (simultaneous row operations)**

Solve for $X$ in the equation $AX = C$ where:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 7 & 4 \\ 4 & 3 \end{pmatrix}$$

**Solution**:

Rewrite as $X = A^{-1}C$. Instead of computing $A^{-1}$, perform row operations on both "$A$" and "$C$" simultaneously:

$$X = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 7 & 4 \\ 4 & 3 \end{pmatrix}$$

**Step 1** ($r_1 \leftrightarrow r_2$):
$$X = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 4 & 3 \\ 7 & 4 \end{pmatrix}$$

**Step 2** ($r_2 \to r_2 - 2r_1$):
$$X = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}^{-1} \begin{pmatrix} 4 & 3 \\ -1 & -2 \end{pmatrix}$$

**Step 3** ($r_2 \to -r_2$):
$$X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix}$$

**Step 4** ($r_1 \to r_1 - r_2$):
$$X = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = I^{-1} \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$$

**Answer**: $X = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$
:::

::: example
**Example 1.2: Using XB^{-1} form (simultaneous column operations)**

Solve for $X$ in the equation $XB = C$ where:

$$B = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad C = \begin{pmatrix} 5 & 11 \\ 2 & 4 \end{pmatrix}$$

**Solution**:

Rewrite as $X = CB^{-1}$. Perform column operations on both "$C$" and "$B$" simultaneously:

$$X = \begin{pmatrix} 5 & 11 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}^{-1}$$

**Step 1** ($c_2 \to c_2 - 2c_1$):
$$X = \begin{pmatrix} 5 & 1 \\ 2 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 5 & 1 \\ 2 & 0 \end{pmatrix}$$

**Answer**: $X = \begin{pmatrix} 5 & 1 \\ 2 & 0 \end{pmatrix}$
:::

::: attention
**Key Pattern to Emphasize**

- **$A^{-1}B$ form** → $A$ is on the **left** → use **row** operations
- **$AB^{-1}$ form** → $B$ is on the **right** → use **column** operations

**Mnemonic**: "Rows affect what's on the left, columns affect what's on the right"
:::

---

## Topic 2: Cancellation Properties and Rank (15 min)

### Learning Goal

Students should understand the **simplified criteria** for when cancellation is valid, and how to check these criteria using rank.

### Suggested Approach

#### Step 1: The Simplified Cancellation Criteria (5 min)

Present the main results clearly:

::: proposition
**Cancellation Criteria (Simplified Form)**

For a matrix $M$:

1. **Left cancellation**: $MP = MQ \Rightarrow P = Q$ holds **if and only if** $\text{rank}(M) = \text{number of columns of } M$

2. **Right cancellation**: $PM = QM \Rightarrow P = Q$ holds **if and only if** $\text{rank}(M) = \text{number of rows of } M$
:::

**Connection to linear independence** (from Lecture 4):
- Rank = number of columns ⟺ columns are linearly independent
- Rank = number of rows ⟺ rows are linearly independent

**But for practical checking**: Just compare rank to dimensions!

#### Step 2: Why This Works (3 min)

::: remark
**Connection to Linear Independence**

From Lecture 4:
- Columns linearly independent ⟺ rank = number of columns
- Rows linearly independent ⟺ rank = number of rows

From Lecture 4 Proposition (Left Cancellation):
- Columns linearly independent ⟺ left cancellation works

By symmetry:
- Rows linearly independent ⟺ right cancellation works

**Therefore**:
- rank = columns → left cancellation ✓
- rank = rows → right cancellation ✓

That's the entire logic! Just compare rank to dimensions.
:::

#### Step 3: Examples and Non-Examples (5 min)

::: example
**Example 2.1: Checking cancellation via rank**

Consider $M = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$

**Quick rank check** (cross-filling):
$$M = \begin{pmatrix} 1 \\ 2 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$$

One rank-one piece → $\text{rank}(M) = 1$

**Can we left-cancel $M$?**
- Need: rank = number of columns = 3
- Have: rank = 1
- **No!** ✗

**Can we right-cancel $M$?**
- Need: rank = number of rows = 2
- Have: rank = 1
- **No!** ✗

**Verify failure of left cancellation**:

Take $P = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, Q = \begin{pmatrix} 0 \\ 0.5 \\ 0 \end{pmatrix}$

Then:
$$MP = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad MQ = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$

But $P \neq Q$! So left cancellation fails. ✓
:::

::: example
**Example 2.2: Full rank cases**

**(a)** $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$ (3×2 matrix)

Cross-filling gives rank = 2 = number of columns
→ **Left cancellation works** ✓

**(b)** $B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ (2×3 matrix)

Cross-filling gives rank = 2 = number of rows
→ **Right cancellation works** ✓

**(c)** $C = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ (2×2 invertible matrix)

Cross-filling gives rank = 2 = number of rows = number of columns
→ **Both left AND right cancellation work** ✓ ✓
:::

---

## Topic 3: Properties of Cross-Filling Factorization (8 min)

### Learning Goal

Students should understand the **guaranteed properties** of the $A = UV$ factorization from cross-filling.

### Suggested Approach

Present the key results as a summary table:

::: proposition
**Cross-Filling Factorization Properties**

When cross-filling produces $A = UV$ where $A$ is $m \times n$ with rank $r$:

| Matrix | Size | Key Property | Consequence |
|--------|------|--------------|-------------|
| $U$ | $m \times r$ | **Columns are linearly independent** | $\text{rank}(U) = r$ = number of columns |
| | | (proven in Lecture 4) | **$U$ has left cancellation** |
| $V$ | $r \times n$ | **Rows are linearly independent** | $\text{rank}(V) = r$ = number of rows |
| | | (symmetric argument) | **$V$ has right cancellation** |
| $A$ | $m \times n$ | $\text{rank}(A) = r$ | Number of rank-1 pieces |
:::

::: remark
**Why V's rows are linearly independent**

The proof is **symmetric** to the proof for $U$'s columns (Lecture 4 §5.1):

**For $U$** (column independence):
- Each column $\mathbf{u}_i$ comes from a pivot at position $(p_i, j_i)$
- After peeling earlier pieces, row $p_i$ of the remainder has a unique nonzero entry
- This creates a **staircase pattern** in pivot rows
- Backward substitution shows linear independence

**For $V$** (row independence):
- Each row $\mathbf{v}_i^T$ comes from the same pivot at position $(p_i, j_i)$
- After peeling earlier pieces, column $j_i$ of the remainder has a unique nonzero entry
- This creates a **staircase pattern** in pivot columns
- Backward substitution shows linear independence (same argument, transposed!)

**Key insight**: Cross-filling is **self-dual** — what's true for columns of $U$ is true for rows of $V$.
:::

---

## Topic 4: Practice Problem — Rank via Cross-Filling (15 min)

### Learning Goal

Students should apply cross-filling to determine rank conditions for parametric matrices, similar to HW1 Problem 6.

### Suggested Approach

Work through a **modified version** of the homework problem:

::: example
**Example 4.1: Determining rank conditions**

Consider the matrix depending on parameters $a, b, c$:

$$M = \begin{pmatrix}
1 & a & 2a \\
0 & 1 & b \\
0 & 0 & c
\end{pmatrix}$$

**(a)** Show that $\text{rank}(M) \geq 2$ for all values of $a, b, c$.

**(b)** Find a polynomial $f(a, b, c)$ such that $\text{rank}(M) = 2$ if and only if $f(a, b, c) = 0$.

**Solution**:

**(a)** Proving $\text{rank}(M) \geq 2$ for all values:

Look at the first two columns:
- Column 1: $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$
- Column 2: $\begin{pmatrix} a \\ 1 \\ 0 \end{pmatrix}$

Check linear independence: If $k_1\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + k_2\begin{pmatrix} a \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

Then:
- From row 1: $k_1 + ak_2 = 0$
- From row 2: $k_2 = 0$
- Therefore: $k_1 = 0$

So columns 1 and 2 are **always linearly independent** (for all values of $a, b, c$). ✓

Therefore: $\text{rank}(M) \geq 2$ for all parameter values. ✓

**(b)** Finding the rank = 2 condition using cross-filling:

**Step 1**: Choose pivot at $(1,1) = 1$

$$R_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \begin{pmatrix} 1 & a & 2a \end{pmatrix} = \begin{pmatrix}
1 & a & 2a \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

Remainder:
$$M - R_1 = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & b \\
0 & 0 & c
\end{pmatrix}$$

**Step 2**: Choose pivot at $(2,2) = 1$

$$R_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & b \end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & b \\
0 & 0 & 0
\end{pmatrix}$$

Second remainder:
$$\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & c
\end{pmatrix}$$

**Step 3**: Check if we need a third piece

- If $c = 0$: Second remainder = $\mathbf{0}$ → Stop → $\text{rank}(M) = 2$ ✓
- If $c \neq 0$: Need $R_3$ with pivot at $(3,3) = c$ → $\text{rank}(M) = 3$

**Answer**: $$\boxed{f(a,b,c) = c, \quad \text{i.e., } \text{rank}(M) = 2 \iff c = 0}$$
:::

**Teaching note**: Walk through the cross-filling step-by-step on the board, emphasizing:
1. Count rank-1 pieces as you go
2. The condition for rank = 2 emerges from when the remainder becomes zero
3. Cross-filling makes the computation **mechanical** — no need to remember determinant formulas!

---

## Time Management Recommendations

| Topic | Suggested Time | Adjustment Strategy |
|-------|---------------|---------------------|
| Simultaneous operations | 12 min | If running short, do only one example (prefer the $A^{-1}B$ form) |
| Cancellation properties | 15 min | **Essential** — do not skip. This is the main conceptual point |
| Cross-filling properties | 8 min | Can be shortened to 5 min by presenting only the summary table |
| Practice problem | 15 min | If short on time, do only part (a) and state part (b) as a challenge |

---

## Common Student Mistakes to Address

### Mistake 1: Confusing row and column operations

**Symptom**: Trying to use column operations on $A^{-1}B$ form

**Fix**: Emphasize the **position** mnemonic: "Left = rows, Right = columns"

### Mistake 2: Thinking "more rank = more cancellation"

**Symptom**: Believing higher rank always means better cancellation

**Fix**: Clarify:
- Left cancellation needs rank = **columns** (not just "high rank")
- Right cancellation needs rank = **rows**
- A $100 \times 2$ matrix with rank 100 is impossible! Maximum rank = min(rows, columns)

### Mistake 3: Forgetting rank ≤ min(m, n)

**Symptom**: Computing rank > number of rows or columns

**Fix**: After every cross-filling, check: "Is my rank count reasonable? Can't exceed the smaller dimension!"

---

## Questions to Check Understanding

1. **Simultaneous operations (form recognition)**:
   - (a) "For $X = A^{-1}B$, do we use row operations or column operations?"
     - Expected answer: **Row operations** — apply to both $A$ and $B$ simultaneously
   - (b) "For $X = AB^{-1}$, do we use row operations or column operations?"
     - Expected answer: **Column operations** — apply to both $A$ and $B$ simultaneously
   - (c) "If I want to simplify $A^{-1}B$ where $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 5 \\ 3 \end{pmatrix}$, which matrices should I apply row operations to?"
     - Expected answer: Apply row operations to both $A$ and $B$ simultaneously

2. **Cancellation**: "I have a $3 \times 5$ matrix $M$ with rank 3. Can I use left cancellation? Right cancellation?"
   - Expected answer: Yes to left (rank = columns), No to right (rank ≠ rows)

3. **Cross-filling**: "Why do the rows of $V$ in $A = UV$ have linear independence?"
   - Expected answer: By symmetry with the column argument for $U$ — pivot structure creates a staircase pattern in columns

---

## Materials to Prepare

- [ ] Pre-worked example of simultaneous row operations (Example 1.1)
- [ ] Summary table of cancellation criteria (write on board before class)
- [ ] Parametric matrix example for practice problem
- [ ] Whiteboard markers in different colors (for highlighting row/column operations)

---

## Connections to Future Material

- **Lecture 5** will use these cancellation properties to analyze solutions of $Ax = b$
- **Rank-nullity theorem** will connect rank to dimension of null space
- **Four fundamental subspaces** will use row/column independence systematically

---

**Last Updated**: 2026-03-10
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
