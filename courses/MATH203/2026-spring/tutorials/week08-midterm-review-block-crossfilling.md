# Tutorial: Week 8 — Midterm Review and Block Cross-Filling

> **For**: Teaching Assistants conducting tutorial sessions (Apr 23, 2026)
> **Related Lectures**: [Lecture 8: Cross-Filling Projections](../notes/cross-filling-projections.md), [Lecture 10: Constructing Projections](../notes/constructing-projections.md), Lecture 12: Determinant
> **Duration**: 50 minutes
> **Context**: This is the first tutorial after the midterm exam. Part A reviews two conceptually challenging True/False questions from the exam. Part B introduces block cross-filling — a unifying idea that appeared in Lectures 10 and 12 but was never isolated as a standalone method. Students should leave understanding: (1) how projection theory connects rank and trace, (2) how to cross-fill block matrices by treating a submatrix as the "pivot block."

---

## Part A: Midterm Review — Two Key Ideas (25 min)

### Problem 1: If $AB = I_n$, does switching the order preserve rank? (12 min)

**True or False**: If $AB = I_n$, then $\operatorname{rank}(BA) = n$.

**(a)** Start by asking: what can we say about $BA$? Compute $(BA)^2$.

::: details Solution
$$(BA)^2 = B(AB)A = B \cdot I_n \cdot A = BA$$

So $BA$ is a **projection** ($P^2 = P$).
:::

**(b)** Now use the projection theory from Lecture 8: for any projection $P$, what is the relationship between $\operatorname{rank}(P)$ and $\operatorname{tr}(P)$?

::: details Solution
From Lecture 8: if $P^2 = P$, then $\operatorname{rank}(P) = \operatorname{tr}(P)$.

*Quick reminder why*: Cross-fill $P = R_1 + \cdots + R_r$. Each $R_i$ is a rank-1 projection, so $\operatorname{tr}(R_i) = 1$. Therefore $\operatorname{tr}(P) = r = \operatorname{rank}(P)$.
:::

**(c)** Combine (a) and (b) to show $\operatorname{rank}(BA) = n$.

::: details Solution
Since $BA$ is a projection: $\operatorname{rank}(BA) = \operatorname{tr}(BA)$.

Now use the trace-cycling property:
$$\operatorname{tr}(BA) = \operatorname{tr}(AB) = \operatorname{tr}(I_n) = n$$

Therefore $\operatorname{rank}(BA) = n$. $\square$
:::

::: attention
**The Power of This Argument**

Three ingredients combine in one line:
1. **$AB = I \Rightarrow (BA)^2 = BA$** — algebraic manipulation
2. **Projection $\Rightarrow$ rank = trace** — the Lecture 8 theorem
3. **Trace cycling: $\operatorname{tr}(BA) = \operatorname{tr}(AB)$** — a basic trace property

Note: we do **not** get $BA = I_m$. If $A$ is $n \times m$ and $B$ is $m \times n$ with $m > n$, then $BA$ is an $m \times m$ projection of rank $n < m$. It projects $\mathbb{R}^m$ onto an $n$-dimensional subspace.
:::

### Problem 2: Projection $\Leftrightarrow$ Disjoint Column Spaces (13 min)

**True or False**: For any square matrix $P$, the conditions $P^2 = P$ and $\operatorname{Col}(I-P) \cap \operatorname{Col}(P) = \{0\}$ are equivalent.

**(a)** Forward direction ($\Rightarrow$): Assume $P^2 = P$. Show $\operatorname{Col}(I-P) \cap \operatorname{Col}(P) = \{0\}$.

::: details Solution
Let $\mathbf{v} \in \operatorname{Col}(P) \cap \operatorname{Col}(I-P)$.

Since $\mathbf{v} \in \operatorname{Col}(P)$: write $\mathbf{v} = P\mathbf{w}$ for some $\mathbf{w}$. Then:
$$P\mathbf{v} = P^2\mathbf{w} = P\mathbf{w} = \mathbf{v}$$

Since $\mathbf{v} \in \operatorname{Col}(I-P)$: write $\mathbf{v} = (I-P)\mathbf{u}$ for some $\mathbf{u}$. Then:
$$P\mathbf{v} = P(I-P)\mathbf{u} = (P - P^2)\mathbf{u} = 0$$

From both: $\mathbf{v} = P\mathbf{v} = 0$. $\square$
:::

**(b)** Backward direction ($\Leftarrow$): Assume $\operatorname{Col}(I-P) \cap \operatorname{Col}(P) = \{0\}$. Show $P^2 = P$.

*Hint*: Consider the vector $P\mathbf{x} - P^2\mathbf{x}$ for any $\mathbf{x}$. Show it belongs to both $\operatorname{Col}(P)$ and $\operatorname{Col}(I-P)$.

::: details Solution
For any $\mathbf{x}$, consider $P\mathbf{x} - P^2\mathbf{x}$.

**It belongs to $\operatorname{Col}(P)$**: Both $P\mathbf{x}$ and $P^2\mathbf{x} = P(P\mathbf{x})$ are in $\operatorname{Col}(P)$ (column space is a subspace, so closed under subtraction). Hence $P\mathbf{x} - P^2\mathbf{x} \in \operatorname{Col}(P)$.

**It belongs to $\operatorname{Col}(I-P)$**: Write it as $(I-P)(P\mathbf{x})$. This is clearly in $\operatorname{Col}(I-P)$.

By assumption, $\operatorname{Col}(P) \cap \operatorname{Col}(I-P) = \{0\}$, so:
$$P\mathbf{x} - P^2\mathbf{x} = 0 \quad \text{for all } \mathbf{x}$$

Therefore $P^2 = P$. $\square$
:::

::: attention
**Why This Characterization Matters**

The condition "$P^2 = P$" is algebraic. The condition "$\operatorname{Col}(I-P) \cap \operatorname{Col}(P) = \{0\}$" is geometric — it says the "floor" and the "sunlight direction" don't overlap.

This equivalence tells us: **a matrix is a projection if and only if its floor and sunlight direction are disjoint**. The "$P^2 = P$" equation is just the algebraic encoding of this geometric fact.
:::

---

## Part B: Block Cross-Filling (25 min)

### The Main Idea

In rank-1 cross-filling, picking one row and one column determines a rank-1 piece: column $\times$ row $\div$ pivot. **What happens when we pick $k$ rows and $k$ columns at once?** The next problems answer this — starting from a puzzle.

### Sub-topic 1: The Matrix Formula — Rank-$k$ Piece (10 min)

#### Problem 3: Complete the Matrix

The first two rows and first two columns of this $4 \times 4$ matrix are given, but the bottom-right block is hidden:

$$A = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \\ 1 & 0 & ? & ? \\ 0 & 1 & ? & ? \end{pmatrix}$$

**You are told that $A$ has rank $2$. Find the four missing entries.**

**(a)** Since $\operatorname{rank}(A) = 2$, row 3 must be a linear combination of rows 1 and 2. Use columns 1 and 2 (which you can see) to find the coefficients, then fill in the missing entries of row 3.

::: details Solution
$\text{row}_3 = \alpha \cdot \text{row}_1 + \beta \cdot \text{row}_2$. At columns 1 and 2:

$$2\alpha + \beta = 1, \quad \alpha + 2\beta = 0$$

Solving: $\alpha = \frac{2}{3},\; \beta = -\frac{1}{3}$.

Row 3 $= \frac{2}{3}(2, 1, 5, 5) - \frac{1}{3}(1, 2, 4, 7) = (1, 0, \mathbf{2}, \mathbf{1})$.
:::

**(b)** Do the same for row 4.

::: details Solution
$2\alpha + \beta = 0, \quad \alpha + 2\beta = 1$

Solving: $\alpha = -\frac{1}{3},\; \beta = \frac{2}{3}$.

Row 4 $= -\frac{1}{3}(2, 1, 5, 5) + \frac{2}{3}(1, 2, 4, 7) = (0, 1, \mathbf{1}, \mathbf{3})$.
:::

::: attention
**What you just did is block cross-filling.**

Name the three pieces:

- **Pivot block** $P = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ — the $2 \times 2$ intersection of selected rows and columns
- **Column block** $U = \begin{pmatrix} 2 & 1 \\ 1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$ — all rows at the selected columns ($4 \times 2$)
- **Row block** $V = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \end{pmatrix}$ — the selected rows, all columns ($2 \times 4$)

The completed matrix is $A = U \cdot P^{-1} \cdot V$ — the **rank-$k$ piece**.

This is the block version of "column $\times$ row $\div$ pivot": the scalar pivot $p$ is replaced by the pivot block $P$, and $\div p$ becomes $\times P^{-1}$.
:::

### Sub-topic 2: The Entry Formula (15 min)

The matrix formula $UP^{-1}V$ builds the entire rank-$k$ piece at once. But sometimes you only need **one entry**. In rank-1 cross-filling, a single entry is $u_i \cdot v_j / p$. Is there a block version?

#### Problem 4: Complete the Block Matrix

A $6 \times 6$ matrix is partitioned into $2 \times 2$ blocks. The first row of blocks and the first column of blocks are known, but the four interior blocks are hidden:

$$M = \begin{pmatrix} A_{11} & A_{12} & A_{13} \\ A_{21} & ? & ? \\ A_{31} & ? & ? \end{pmatrix}$$

where each $A_{ij}$ is $2 \times 2$ and $A_{11}$ is invertible.

**Suppose $M$ has rank $2$. Express each $?$ in terms of the known blocks.**

*Hint*: Apply the same idea as Problem 3, but with block "rows" and block "columns."

::: details Solution
Same method as Problem 3, at the block level. For block position $(i,j)$:

$$\text{block } (i,j) = A_{i1} \cdot A_{11}^{-1} \cdot A_{1j}$$

| | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| **Row 1** | $A_{11}$ | $A_{12}$ | $A_{13}$ |
| **Row 2** | $A_{21}$ | $A_{21} A_{11}^{-1} A_{12}$ | $A_{21} A_{11}^{-1} A_{13}$ |
| **Row 3** | $A_{31}$ | $A_{31} A_{11}^{-1} A_{12}$ | $A_{31} A_{11}^{-1} A_{13}$ |

This is the **entry formula** for block cross-filling:

$$(\text{rank-}k \text{ piece})_{ij} = \mathbf{u}_i^T \cdot P^{-1} \cdot \mathbf{v}_j$$

where $\mathbf{u}_i$ is row $i$'s entries at the selected columns (a $k$-vector) and $\mathbf{v}_j$ is column $j$'s entries at the selected rows (a $k$-vector). The block-letter version makes the pattern visible: **row-side $\times$ pivot-inverse $\times$ column-side**.
:::

#### Problem 5: Find the Missing Entries

The first two rows and first two columns are given. The rest is hidden:

$$M = \begin{pmatrix} 1 & 1 & 3 & 0 & 2 & 1 \\ 0 & 2 & 1 & 4 & 0 & 3 \\ 2 & 1 & ? & ? & ? & ? \\ 1 & 3 & ? & ? & ? & ? \\ 3 & 0 & ? & ? & ? & ? \\ 1 & 2 & ? & ? & ? & ? \end{pmatrix}$$

**Suppose $M$ has rank $2$.** Select the first 2 rows and columns as pivot.

**(a)** Find $m_{3,4}$ using the entry formula.

::: details Solution
$P = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$, $\;P^{-1} = \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix}$.

$\mathbf{u}_3 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$, $\;\mathbf{v}_4 = \begin{pmatrix} 0 \\ 4 \end{pmatrix}$.

$$m_{3,4} = \mathbf{u}_3^T P^{-1} \mathbf{v}_4 = \begin{pmatrix} 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 0 \\ 4 \end{pmatrix} = -2$$
:::

**(b)** Find $m_{5,6}$.

::: details Solution
$\mathbf{u}_5 = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$, $\;\mathbf{v}_6 = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$.

$$m_{5,6} = \mathbf{u}_5^T P^{-1} \mathbf{v}_6 = \begin{pmatrix} 3 & 0 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 1 \\ 3 \end{pmatrix} = -\frac{3}{2}$$
:::

**(c)** Fill in all 16 missing entries at once using the block formula.

::: details Solution
Partition $M = \begin{pmatrix} P & R \\ C & ? \end{pmatrix}$ where $C = \begin{pmatrix} 2 & 1 \\ 1 & 3 \\ 3 & 0 \\ 1 & 2 \end{pmatrix}$, $\;R = \begin{pmatrix} 3 & 0 & 2 & 1 \\ 1 & 4 & 0 & 3 \end{pmatrix}$.

Since rank $= 2$, the missing block is $CP^{-1}R$:

$$CP^{-1} = \begin{pmatrix} 2 & -\frac{1}{2} \\ 1 & 1 \\ 3 & -\frac{3}{2} \\ 1 & \frac{1}{2} \end{pmatrix}, \quad CP^{-1}R = \begin{pmatrix} \frac{11}{2} & -2 & 4 & -\frac{1}{2} \\ 4 & 4 & 2 & 4 \\ \frac{15}{2} & -6 & 6 & -\frac{3}{2} \\ \frac{7}{2} & 2 & 2 & \frac{5}{2} \end{pmatrix}$$
:::

#### Problem 6: The Remainder

Partition any matrix into four blocks with an invertible $k \times k$ pivot block:

$$A = \begin{pmatrix} P & R \\ C & D \end{pmatrix}$$

**(a)** For which $D$ does $A$ have rank $k$?

::: details Solution
From Problems 3–5: if $A$ has rank $k$, the bottom-right block is completely determined — it must equal $CP^{-1}R$. So:

$$A \text{ has rank } k \iff D = CP^{-1}R$$
:::

**(b)** If $D \neq CP^{-1}R$, what is the remainder after cross-filling with pivot block $P$?

::: details Solution
The rank-$k$ piece predicts $D$ as $CP^{-1}R$. The remainder is:

$$D - CP^{-1}R$$

This is the **Schur complement** of $P$ in $A$ — the block version of $d - cr/p$ from rank-1 cross-filling.

The entry formula for the remainder: $\;\text{remainder}_{ij} = a_{ij} - \mathbf{u}_i^T \cdot P^{-1} \cdot \mathbf{v}_j$.
:::

::: attention
**Block Cross-Filling: Two Formulas**

| | Rank-1 | Block (rank-$k$) |
|---|---|---|
| **Pivot** | number $p$ | $k \times k$ matrix $P$ |
| **Column** | vector $\mathbf{u}$ ($n \times 1$) | block $U$ ($n \times k$) |
| **Row** | vector $\mathbf{v}^T$ ($1 \times n$) | block $V$ ($k \times n$) |
| **Matrix formula** | $\dfrac{1}{p} \cdot \mathbf{u} \cdot \mathbf{v}^T$ | $U \cdot P^{-1} \cdot V$ |
| **Entry formula** | $\dfrac{u_i \cdot v_j}{p}$ | $\mathbf{u}_i^T \cdot P^{-1} \cdot \mathbf{v}_j$ |
| **Remainder entry** | $a_{ij} - \dfrac{u_i v_j}{p}$ | $a_{ij} - \mathbf{u}_i^T P^{-1} \mathbf{v}_j$ |

In every formula, $\frac{1}{p}$ is replaced by $P^{-1}$, scalar multiplication becomes matrix multiplication, and the structure is otherwise identical.
:::

---

### Applications (optional, if time permits)

#### Problem 7: Block Cross-Filling for the Inverse — from Lecture 10

Recall the Lecture 10 trick: to cross-fill $A^{-1}$ without computing it, form the block matrix

$$M = \begin{pmatrix} A & I \\ I & 0 \end{pmatrix}$$

and cross-fill with pivots in $A$.

**(a)** Using the block cross-filling formula, do this in a single step: treat $A$ as the entire pivot block. What is the Schur complement?

::: details Solution
Partition $M = \begin{pmatrix} P & R \\ C & D \end{pmatrix}$ where $P = A$, $R = I$, $C = I$, $D = 0$.

The Schur complement is:
$$D - CP^{-1}R = 0 - I \cdot A^{-1} \cdot I = -A^{-1}$$

So the remainder is $\begin{pmatrix} 0 & 0 \\ 0 & -A^{-1} \end{pmatrix}$.

Since $M = \begin{pmatrix} A & I \\ I & A^{-1} \end{pmatrix}$ has rank $r$ (we proved this in Lecture 10), the remainder must be zero when cross-filling completes. But this block formula shows the bottom-right **directly reveals** $-A^{-1}$, whether we do the cross-filling in one block step or $r$ individual steps.
:::

**(b)** Use the **entry formula** to see what happens at a specific position. What is the $(i,j)$ entry of the bottom-right remainder?

::: details Solution
For position $(i,j)$ in the bottom-right block: $\mathbf{u}_i$ = column $i$ of $I$ = $\mathbf{e}_i$, and $\mathbf{v}_j$ = row $j$ of $I$ = $\mathbf{e}_j$. So:

$$\text{remainder}_{ij} = 0 - \mathbf{e}_i^T \cdot A^{-1} \cdot \mathbf{e}_j = -(A^{-1})_{ij}$$

Each entry of $A^{-1}$ appears individually in the remainder — this is exactly what Lecture 10 showed step by step: each rank-1 cross-filling step reveals one "slice" of $A^{-1}$, and the entry formula tells you which entries of the slice are determined by which pivot column and row.
:::

#### Problem 8: Block Cross-Filling for the Product — from Lecture 12

In Lecture 12, we proved $\det(AB) = \det(A)\det(B)$ by forming the block matrix

$$M = \begin{pmatrix} A & 0 \\ I & B \end{pmatrix}$$

and cross-filling with pivots in $I$.

**(a)** Using block cross-filling: treat $I$ (bottom-left) as the pivot block. What is the Schur complement?

::: details Solution
We select the $n$ rows and $n$ columns where $I$ sits. The partition is:
- Pivot block $P = I$ (bottom rows, left columns)
- $C = A$ (top rows, left columns)
- $R = B$ (bottom rows, right columns)
- $D = 0$ (top rows, right columns)

Schur complement: $D - CP^{-1}R = 0 - A \cdot I^{-1} \cdot B = -AB$.

So the remainder is $\begin{pmatrix} 0 & -AB \\ 0 & 0 \end{pmatrix}$.

This is precisely what Lecture 12 showed: cross-filling the $I$ block makes $AB$ appear passively in the top-right!
:::

**(b)** Use the **entry formula** to see how $AB$ is built entry by entry.

::: details Solution
For position $(i,j)$ in the top-right block: $\mathbf{u}_i$ = row $i$ of $A$ (the top rows at the left columns) and $\mathbf{v}_j$ = column $j$ of $B$ (the bottom rows at the right columns). Since $P = I$:

$$\text{rank-}n\text{ piece}_{ij} = \mathbf{u}_i^T \cdot I^{-1} \cdot \mathbf{v}_j = (\text{row } i \text{ of } A) \cdot (\text{column } j \text{ of } B) = (AB)_{ij}$$

Each entry of $AB$ appears as a single entry-formula computation! This is the block cross-filling perspective on matrix multiplication itself: the product $AB$ is what you get when $I$ is the pivot block and $A$, $B$ are the column and row blocks.
:::

**(c)** Now use the **determinant** of the block triangular matrix to conclude:

::: details Solution
$M = \begin{pmatrix} A & 0 \\ I & B \end{pmatrix}$ is block **lower** triangular.

By the block triangular determinant theorem:
$$\det(M) = \det(A) \cdot \det(B)$$

But cross-filling $M$ produces pivots from $I$ (all equal to 1) and then pivots from $-AB$ (in the remainder). So:
$$\det(M) = \det(AB) \quad \text{(after accounting for signs)}$$

Combining: $\det(A)\det(B) = \det(AB)$. $\square$

**(TA note**: The full sign analysis using zigzag loops was done in Lecture 12. The point here is that students see the block cross-filling viewpoint — the $I$ block acts as the pivot, the passive block reveals $AB$, and the block triangular structure gives the determinant factorization.)
:::

::: attention
**Two Applications of One Idea**

| | Lecture 10: Inverse | Lecture 12: Product |
|---|---|---|
| Block matrix | $\begin{pmatrix} A & I \\ I & 0 \end{pmatrix}$ | $\begin{pmatrix} A & 0 \\ I & B \end{pmatrix}$ |
| Pivot block | $A$ | $I$ |
| Passive block | bottom-right ($= 0$) | top-right ($= 0$) |
| What appears (matrix formula) | $-A^{-1}$ | $-AB$ |
| What appears (entry formula) | $-(A^{-1})_{ij} = -\mathbf{e}_i^T A^{-1} \mathbf{e}_j$ | $(AB)_{ij} = \mathbf{a}_i^T \cdot \mathbf{b}_j$ |

**Common pattern**: Place the "known" block at the pivot position. The "unknown" block (inverse, product) materializes in the passive position — visible either as a whole matrix (Schur complement) or entry by entry (entry formula).
:::

---

## TA Notes

### Time allocation

| Part | Topic | Suggested Time | Priority |
|------|-------|---------------|----------|
| A | Problem 1 ($AB = I_n \Rightarrow \operatorname{rank}(BA) = n$) | 12 min | Core |
| A | Problem 2 ($P^2 = P \Leftrightarrow$ disjoint columns) | 13 min | Core |
| B1 | Problem 3 (complete a rank-2 matrix — discover the matrix formula) | 10 min | Core |
| B2 | Problem 4 (complete a block matrix — discover the entry formula) | 5 min | Core |
| B2 | Problem 5 (find missing entries of a 6×6 matrix) | 5 min | Core |
| B2 | Problem 6 (remainder — for which $D$ is it rank $k$?) | 3 min | Core |
| Apps | Problems 7–8 (Lecture 10/12 applications) | bonus | If time permits |

### Suggested flow

1. **Start with Problem 1**: Students just took the exam, so this is a natural debrief. Walk through (a)–(b) quickly, then let students try (c). The one-line proof is satisfying — emphasize that three separate ideas (algebra, projection theory, trace) combine cleanly.

2. **Problem 2**: This was the hardest True/False on the exam. The forward direction (a) is mechanical. For the backward direction (b), give the hint and let students struggle for 2–3 minutes before revealing. The key trick is to show $P\mathbf{x} - P^2\mathbf{x}$ lives in both subspaces.

3. **Transition to Part B**: "Both of these problems used ideas we've built up. Now let's look at a technique that connects two different lectures — Lecture 10 (inverse) and Lecture 12 (determinant). The common thread is **block cross-filling**."

4. **Problem 3 — the key moment**: Put the $4 \times 4$ matrix with the missing block on the board. Ask: "This has rank 2 — what are the four missing numbers?" Give students 2–3 minutes. Some will try column reduction, others will guess. The insight is: rank 2 means row 3 is a combination of rows 1 and 2, and you can find the coefficients from the visible columns. After the class solves it, reveal the attention box: what they just did is $UP^{-1}V$.

5. **Problem 4 — abstract block version**: Now put the $3 \times 3$ block matrix with hidden blocks on the board. "Same game, but with block letters." Students should be faster now — they apply the same logic at the block level and discover $A_{i1} A_{11}^{-1} A_{1j}$.

6. **Problem 5 — numerical drill**: The $6 \times 6$ matrix. Students practice the entry formula on specific entries (a, b) before filling the whole matrix (c). This shows the computational power: any single entry without building the entire matrix.

7. **Problem 6 — remainder**: General $\begin{pmatrix} P & R \\ C & D \end{pmatrix}$ partition. "For which $D$ is this rank $k$?" Answer: $D = CP^{-1}R$. "If not?" Remainder $= D - CP^{-1}R$ (the Schur complement). Quick and conceptual — builds on everything they've done.

8. **Applications (Problems 7–8)**: If time permits, show how Lectures 10 and 12 are both instances of this framework.

### Common mistakes

- **Problem 1**: Students may try to prove $BA = I_m$ (which is false when $m \neq n$). Emphasize: we get $\operatorname{rank} = n$, not invertibility.
- **Problem 2(b)**: Students may try to show $P\mathbf{x} - P^2\mathbf{x} \in \operatorname{Col}(P)$ by writing it as $P(\mathbf{x} - P\mathbf{x})$. This gives $\operatorname{Col}(P)$ membership but the other inclusion is trickier. The key observation is $P\mathbf{x} - P^2\mathbf{x} = (I-P)(P\mathbf{x})$ for $\operatorname{Col}(I-P)$ membership.
- **Problem 3**: Some students may try to solve a $4 \times 4$ system or do column reduction. Redirect: "You know it's rank 2 — what does that tell you about each row?"
- **Entry formula confusion**: Students may confuse $\mathbf{u}_i$ (row $i$ of the column block $U$, a $k$-vector) with $u_i$ (the $i$-th entry of a column vector). Emphasize: in rank-1, each "entry" of the column is a number; in block cross-filling, each "entry" of the column block is a $k$-vector.
- **Problem 6**: Students may struggle to see why $D = CP^{-1}R$ is the right condition. Connect back: "In Problem 3, the missing block had to be $CP^{-1}R$ — that's the only $D$ making rank $= k$."

### If time is short

Focus on Problems 3 and 4 (discover matrix formula, then entry formula). Skip Problem 5 (students can practice on their own) and abbreviate Problem 6 to just part (a). The applications (Problems 7–8) can be assigned as reading.

---

**Last Updated**: 2026-04-21
