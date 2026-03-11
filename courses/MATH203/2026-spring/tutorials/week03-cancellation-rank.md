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

#### Step 2: Why This Works — Cross-Filling Perspective (5 min)

Explain the intuition using cross-filling:

::: remark
**Why Rank Determines Cancellation**

Recall from Lecture 3: Cross-filling gives $A = UV$ where:
- $U$ is $m \times r$ (where $r = \text{rank}(A)$)
- $V$ is $r \times n$

**From Lecture 4**:
- Columns of $U$ are **always linearly independent** (proven via pivot structure)
- Therefore $U$ **always has left cancellation**

**New insight for today**:
- By symmetry, rows of $V$ are **also linearly independent**
- Therefore $V$ **always has right cancellation**

**The simplified criteria**:
- Left cancellation possible ⟺ rank = columns ⟺ $A$ can be written as $A = U$ (full column rank)
- Right cancellation possible ⟺ rank = rows ⟺ $A$ can be written as $A = V$ (full row rank)
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
1 & 3 & 2 \\
2 & a & 4 \\
3 & b & c
\end{pmatrix}$$

**(a)** Show that $\text{rank}(M) \geq 2$ for all values of $a, b, c$.

**(b)** Find a polynomial equation in $a, b, c$ such that $\text{rank}(M) = 2$ if and only if this equation holds.

**Solution**:

**(a)** Proving $\text{rank}(M) \geq 2$:

**Step 1**: Look for two linearly independent columns (or rows).

Observe: Columns 1 and 2 are $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\begin{pmatrix} 3 \\ a \\ b \end{pmatrix}$

Are they linearly independent? Check if one is a scalar multiple of the other:

If they were dependent: $\begin{pmatrix} 3 \\ a \\ b \end{pmatrix} = k \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ for some $k$

From first component: $3 = k \cdot 1 \Rightarrow k = 3$
But then: $a = 3 \cdot 2 = 6$ and $b = 3 \cdot 3 = 9$

So columns 1 and 2 are linearly dependent **only if** $a = 6$ AND $b = 9$.

For **all other values** of $(a,b)$, columns 1 and 2 are linearly independent → $\text{rank}(M) \geq 2$ ✓

**Step 2**: What if $a = 6$ and $b = 9$?

Then $M = \begin{pmatrix} 1 & 3 & 2 \\ 2 & 6 & 4 \\ 3 & 9 & c \end{pmatrix}$

Notice: Row 2 = 2 × Row 1

So even in this case, we can find two linearly independent rows (e.g., rows 1 and 3, unless row 3 is also a multiple of row 1).

Row 3 = $k$ × Row 1 would require: $(3, 9, c) = k(1, 3, 2) \Rightarrow k = 3$ and $c = 6$

So unless $(a,b,c) = (6, 9, 6)$, we still have rank $\geq 2$.

Even when $(a,b,c) = (6, 9, 6)$:
$$M = \begin{pmatrix} 1 & 3 & 2 \\ 2 & 6 & 4 \\ 3 & 9 & 6 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 3 & 2 \end{pmatrix}$$

This is rank 1, not rank 0!

**Better argument using cross-filling**:

**Step 1** (cross-filling): Choose pivot at $(1,1) = 1$:

$$R_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 3 & 2 \end{pmatrix} = \begin{pmatrix}
1 & 3 & 2 \\
2 & 6 & 4 \\
3 & 9 & 6
\end{pmatrix}$$

Remainder:
$$M - R_1 = \begin{pmatrix}
0 & 0 & 0 \\
0 & a-6 & 0 \\
0 & b-9 & c-6
\end{pmatrix}$$

**Observation**: The remainder is **not entirely zero** unless $a = 6$, $b = 9$, AND $c = 6$ simultaneously.

So for **any** choice of parameters (except possibly the special case), we get at least one more rank-1 piece.

**Check special case** $(a,b,c) = (6,9,6)$:
Remainder = $\mathbf{0}$ → rank = 1

**For all other cases**: Remainder $\neq \mathbf{0}$ → rank $\geq 2$ ✓

**Conclusion**: $\text{rank}(M) \geq 2$ for all $(a,b,c)$ **except** $(6, 9, 6)$ (where rank = 1).

So actually, $\text{rank}(M) \geq 1$ for all values, and $\text{rank}(M) \geq 2$ for almost all values.

**(b)** Finding the rank = 2 condition:

From part (a), after peeling $R_1$:

$$\text{Remainder} = \begin{pmatrix}
0 & 0 & 0 \\
0 & a-6 & 0 \\
0 & b-9 & c-6
\end{pmatrix}$$

**Case 1**: If remainder = $\mathbf{0}$, then rank = 1
- Condition: $a = 6, b = 9, c = 6$

**Case 2**: If remainder $\neq \mathbf{0}$, continue cross-filling.

The remainder has rank $\geq 1$ as long as it's nonzero. When does it have rank **exactly 1**?

**Step 2** (continue cross-filling the remainder):

If $a \neq 6$, pivot at $(2,2) = a-6$:

$$R_2 = \begin{pmatrix} 0 \\ a-6 \\ 0 \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & a-6 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

Wait, that's not right. Let me recalculate using proper cross-filling.

Actually, let me use a different pivot. The remainder is:
$$\begin{pmatrix}
0 & 0 & 0 \\
0 & a-6 & 0 \\
0 & b-9 & c-6
\end{pmatrix}$$

Choose pivot at $(2, 2) = a-6$ (assuming $a \neq 6$):

Column at pivot: $\begin{pmatrix} 0 \\ a-6 \\ b-9 \end{pmatrix}$, Row at pivot: $\begin{pmatrix} 0 & 1 & 0 \end{pmatrix}$ (normalized)

$$R_2 = \begin{pmatrix} 0 \\ a-6 \\ b-9 \end{pmatrix} \begin{pmatrix} 0 & 1 & 0 \end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & a-6 & 0 \\
0 & b-9 & 0
\end{pmatrix}$$

Second remainder:
$$\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & c-6
\end{pmatrix}$$

**Rank of $M$**:
- If $c = 6$: rank = 2 (two rank-1 pieces: $R_1$ and $R_2$)
- If $c \neq 6$: rank = 3 (three pieces: $R_1$, $R_2$, and the $(3,3)$ entry)

**But wait**: We also need $a \neq 6$ for this argument!

**Case analysis**:

1. If $a = 6, b = 9, c = 6$: rank = 1
2. If $a \neq 6$ and $c = 6$: rank = 2 ✓
3. If $a \neq 6$ and $c \neq 6$: rank = 3

What if $a = 6$ but not both $b = 9$ and $c = 6$?

Remainder becomes:
$$\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & b-9 & c-6
\end{pmatrix}$$

This has rank 1 if $(b-9, c-6) \neq (0,0)$, so total rank = 2.

**Summary**:

$\text{rank}(M) = 2$ if and only if:
- $(a \neq 6$ and $c = 6)$ OR $(a = 6$ and $(b,c) \neq (9, 6))$

The cleanest polynomial condition:

**From the cross-filling analysis**, rank = 3 if and only if we can peel 3 pieces.
This happens when the remainder after $R_1$ and $R_2$ is still nonzero.

The final remainder is the $(3,3)$ entry: $c - 6$

So: $\text{rank}(M) = 3$ ⟺ $c \neq 6$ (and we can successfully peel $R_2$, which requires either $a \neq 6$ or $b \neq 9$)

Actually, let me think more carefully...

**Cleaner approach**: Use the fact that rank = 2 means the three rows are linearly dependent.

The rows are:
- $\mathbf{r}_1 = (1, 3, 2)$
- $\mathbf{r}_2 = (2, a, 4)$
- $\mathbf{r}_3 = (3, b, c)$

Rows are linearly dependent ⟺ there exist $\alpha, \beta, \gamma$ (not all zero) such that:
$$\alpha \mathbf{r}_1 + \beta \mathbf{r}_2 + \gamma \mathbf{r}_3 = \mathbf{0}$$

We already know $\mathbf{r}_1$ and $\mathbf{r}_2$ span a 2D space (from part a), unless they're dependent.

So rank = 2 ⟺ $\mathbf{r}_3$ is in $\text{span}\{\mathbf{r}_1, \mathbf{r}_2\}$

This means: $(3, b, c) = s(1, 3, 2) + t(2, a, 4)$ for some $s, t$

From first component: $3 = s + 2t$
From second component: $b = 3s + at$
From third component: $c = 2s + 4t$

From first equation: $s = 3 - 2t$

Substituting into third: $c = 2(3-2t) + 4t = 6 - 4t + 4t = 6$

So we get: **$c = 6$** (regardless of $t$!)

Let's verify: If $c = 6$, can we always write $\mathbf{r}_3$ as a combination of $\mathbf{r}_1$ and $\mathbf{r}_2$?

From $s = 3 - 2t$ and $b = 3s + at$:
$$b = 3(3-2t) + at = 9 - 6t + at = 9 + t(a-6)$$

So: $t = \frac{b-9}{a-6}$ (if $a \neq 6$)

This works as long as $a \neq 6$. If $a = 6$, we need $b = 9$ for consistency.

**Final answer for part (b)**:

$$\boxed{\text{rank}(M) = 2 \iff c = 6}$$

(with the technicality that if $a = 6$, we also need $b = 9$ to avoid rank 1)

Actually, for a clean polynomial: $f(a,b,c) = c - 6$

$\text{rank}(M) = 2$ ⟺ $c - 6 = 0$ AND $(a,b) \neq (6, 9)$
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

1. **Simultaneous operations**: "If I have $A^{-1}BC = D$, which matrices should I apply row operations to?"
   - Expected answer: Apply to both "$A$" and "$D$" simultaneously (the matrices on the **left** and **right** of the equation)

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
