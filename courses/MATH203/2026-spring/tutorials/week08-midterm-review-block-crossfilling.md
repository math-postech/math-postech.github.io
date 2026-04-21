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

Recall that rank-1 cross-filling has **two formulas**:

- **Matrix formula**: the rank-1 piece $= \dfrac{1}{p} \cdot \mathbf{u} \cdot \mathbf{v}^T$ (column $\times$ row, divided by pivot)
- **Entry formula**: each entry of the rank-1 piece $= \dfrac{u_i \cdot v_j}{p}$ (column entry $\times$ row entry, divided by pivot)

What happens when we pick **$k$ rows and $k$ columns** at once? Both formulas generalize.

### Sub-topic 1: The Matrix Formula — Rank-$k$ Piece (12 min)

#### Problem 3: Computing a Rank-2 Piece

Consider the $4 \times 4$ matrix:

$$A = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \\ 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$$

**(a)** Select the first two rows and first two columns. Define:

- **Pivot block** $P$: the $2 \times 2$ intersection of the selected rows and columns
- **Column block** $U$: the selected two columns, **all** rows (a $4 \times 2$ matrix)
- **Row block** $V$: the selected two rows, **all** columns (a $2 \times 4$ matrix)

$$P = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}, \quad U = \begin{pmatrix} 2 & 1 \\ 1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad V = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \end{pmatrix}$$

Note: $U$ is $4 \times 2$ and $V$ is $2 \times 4$ — just like rank-1 where the column is $n \times 1$ and the row is $1 \times n$. The pivot block $P$ sits inside both $U$ and $V$ (it is the top part of $U$ and the left part of $V$).

Compute the rank-2 piece: $U \cdot P^{-1} \cdot V$.

::: details Solution
First: $P^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.

$$UP^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ \frac{2}{3} & -\frac{1}{3} \\ -\frac{1}{3} & \frac{2}{3} \end{pmatrix}$$

(Notice: the top block of $UP^{-1}$ is $PP^{-1} = I_2$, automatically.)

$$UP^{-1}V = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ \frac{2}{3} & -\frac{1}{3} \\ -\frac{1}{3} & \frac{2}{3} \end{pmatrix} \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \\ 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$$

The rank-2 piece equals $A$ itself! So the remainder is zero, meaning $A$ has rank 2.
:::

**(b)** What is the remainder in general?

::: details Solution
Write the full column and row blocks in terms of the pivot block and the "extra" parts:

$$U = \begin{pmatrix} P \\ C \end{pmatrix}, \quad V = \begin{pmatrix} P & R \end{pmatrix}$$

where $C$ is the bottom part of the column block (remaining rows) and $R$ is the right part of the row block (remaining columns). Then:

$$UP^{-1}V = \begin{pmatrix} P \\ C \end{pmatrix} P^{-1} \begin{pmatrix} P & R \end{pmatrix} = \begin{pmatrix} P & R \\ C & CP^{-1}R \end{pmatrix}$$

The original matrix partitions as $A = \begin{pmatrix} P & R \\ C & D \end{pmatrix}$, so the remainder is:

$$A - UP^{-1}V = \begin{pmatrix} 0 & 0 \\ 0 & D - CP^{-1}R \end{pmatrix}$$

The quantity $D - CP^{-1}R$ is the **Schur complement** of $P$ in $A$. If it's zero, the matrix has the same rank as the pivot block.
:::

### Sub-topic 2: The Entry Formula (13 min)

In rank-1 cross-filling, any single entry of the rank-1 piece can be computed directly:

$$(\text{rank-1 piece})_{ij} = \frac{u_i \cdot v_j}{p}$$

where $u_i$ is the $i$-th entry of the column, $v_j$ is the $j$-th entry of the row, and $p$ is the pivot. You don't need to build the whole rank-1 matrix — you can compute any entry individually.

Block cross-filling has the same property. Each entry of $U \cdot P^{-1} \cdot V$ can be computed from the $i$-th row of $U$ and the $j$-th column of $V$:

$$(\text{rank-}k\text{ piece})_{ij} = \mathbf{u}_i^T \cdot P^{-1} \cdot \mathbf{v}_j$$

where $\mathbf{u}_i$ is the $i$-th row of $U$ (a $k$-vector — the entries of row $i$ at the selected columns) and $\mathbf{v}_j$ is the $j$-th column of $V$ (a $k$-vector — the entries of column $j$ at the selected rows).

#### Problem 4: Abstract Entry Formula — Block Letters

Consider a $3 \times 3$ block matrix where the blocks are themselves matrices:

$$M = \begin{pmatrix} A_{11} & A_{12} & A_{13} \\ A_{21} & A_{22} & A_{23} \\ A_{31} & A_{32} & A_{33} \end{pmatrix}$$

Here each $A_{ij}$ is a $2 \times 2$ matrix, so $M$ is $6 \times 6$ overall. Suppose we select the first two rows and first two columns as the pivot. Then $P = A_{11}$ (a $2 \times 2$ matrix).

**(a)** Using the entry formula, what is the rank-2 piece at each block position? Fill in the table:

| | Col block 1 | Col block 2 | Col block 3 |
|---|---|---|---|
| **Row block 1** | ? | ? | ? |
| **Row block 2** | ? | ? | ? |
| **Row block 3** | ? | ? | ? |

::: details Solution
For block position $(i,j)$: $\mathbf{u}_i$ = the $i$-th row-block of $U$ = $A_{i1}$ (column 1 entries at row block $i$), and $\mathbf{v}_j$ = the $j$-th column-block of $V$ = $A_{1j}$ (row 1 entries at column block $j$).

The entry formula gives: block $(i,j)$ of the rank-2 piece $= A_{i1} \cdot A_{11}^{-1} \cdot A_{1j}$.

| | Col block 1 | Col block 2 | Col block 3 |
|---|---|---|---|
| **Row block 1** | $A_{11} A_{11}^{-1} A_{11} = A_{11}$ | $A_{11} A_{11}^{-1} A_{12} = A_{12}$ | $A_{11} A_{11}^{-1} A_{13} = A_{13}$ |
| **Row block 2** | $A_{21} A_{11}^{-1} A_{11} = A_{21}$ | $A_{21} A_{11}^{-1} A_{12}$ | $A_{21} A_{11}^{-1} A_{13}$ |
| **Row block 3** | $A_{31} A_{11}^{-1} A_{11} = A_{31}$ | $A_{31} A_{11}^{-1} A_{12}$ | $A_{31} A_{11}^{-1} A_{13}$ |

Notice: the pivot row and pivot column of the rank-2 piece **match the original matrix exactly** (the first row of blocks and first column of blocks are unchanged). This is the same as rank-1 cross-filling, where the pivot row and pivot column are always reproduced.
:::

**(b)** What is the remainder at block position $(i,j)$ (for $i,j \geq 2$)?

::: details Solution
$$\text{remainder at block } (i,j) = A_{ij} - A_{i1} \cdot A_{11}^{-1} \cdot A_{1j}$$

This is the block Schur complement formula, applied entry by entry. If we write it for all blocks at once:

$$\text{Schur complement} = \begin{pmatrix} A_{22} - A_{21}A_{11}^{-1}A_{12} & A_{23} - A_{21}A_{11}^{-1}A_{13} \\ A_{32} - A_{31}A_{11}^{-1}A_{12} & A_{33} - A_{31}A_{11}^{-1}A_{13} \end{pmatrix}$$

**Compare with rank-1**: In rank-1 cross-filling, the remainder entry is $a_{ij} - \frac{a_{i,\text{pivot}} \cdot a_{\text{pivot},j}}{a_{\text{pivot,pivot}}}$. Here it is $A_{ij} - A_{i1} A_{11}^{-1} A_{1j}$ — the same pattern with matrices replacing numbers.
:::

**(c)** What condition makes $M$ a rank-2 matrix (i.e., the Schur complement is all zero)?

::: details Solution
$M$ has rank 2 if and only if every block of the Schur complement is zero:

$$A_{ij} = A_{i1} \cdot A_{11}^{-1} \cdot A_{1j} \quad \text{for all } i,j$$

This means: **every block of $M$ is determined by the first row of blocks, the first column of blocks, and the pivot block**. Just like a rank-1 matrix where every entry $a_{ij} = \frac{u_i v_j}{p}$ is determined by one column, one row, and the pivot.
:::

#### Problem 5: Concrete Entry Formula — A $6 \times 6$ Matrix

Consider the $6 \times 6$ matrix (select rows 1,2 and columns 1,2 as pivot):

$$M = \begin{pmatrix} 1 & 1 & \cdot & \cdot & \cdot & \cdot \\ 0 & 2 & \cdot & \cdot & \cdot & \cdot \\ 2 & 1 & \cdot & \cdot & \cdot & \cdot \\ 1 & 3 & \cdot & \cdot & \cdot & \cdot \\ 3 & 0 & \cdot & \cdot & \cdot & \cdot \\ 1 & 2 & \cdot & \cdot & \cdot & \cdot \end{pmatrix}$$

The dots are unknown. All we know is the first two columns (the column block $U$) and the first two rows (the row block $V$):

$$P = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}, \quad U = \begin{pmatrix} 1 & 1 \\ 0 & 2 \\ 2 & 1 \\ 1 & 3 \\ 3 & 0 \\ 1 & 2 \end{pmatrix}, \quad V = \begin{pmatrix} 1 & 1 & 3 & 0 & 2 & 1 \\ 0 & 2 & 1 & 4 & 0 & 3 \end{pmatrix}$$

**Suppose $M$ has rank 2.** Then $M = UP^{-1}V$ (the rank-2 piece is the entire matrix).

**(a)** Compute $P^{-1}$.

::: details Solution
$$P^{-1} = \frac{1}{2}\begin{pmatrix} 2 & -1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix}$$
:::

**(b)** Use the entry formula to find the $(3,4)$ entry of $M$.

::: details Solution
$\mathbf{u}_3 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ (row 3 at columns 1,2), $\;\mathbf{v}_4 = \begin{pmatrix} 0 \\ 4 \end{pmatrix}$ (column 4 at rows 1,2).

$$m_{3,4} = \mathbf{u}_3^T \cdot P^{-1} \cdot \mathbf{v}_4 = \begin{pmatrix} 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 0 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 & -\frac{1}{2} \end{pmatrix} \begin{pmatrix} 0 \\ 4 \end{pmatrix} = -2$$
:::

**(c)** Use the entry formula to find the $(5,6)$ entry of $M$.

::: details Solution
$\mathbf{u}_5 = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ (row 5 at columns 1,2), $\;\mathbf{v}_6 = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$ (column 6 at rows 1,2).

$$m_{5,6} = \mathbf{u}_5^T \cdot P^{-1} \cdot \mathbf{v}_6 = \begin{pmatrix} 3 & 0 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix} \begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 3 & -\frac{3}{2} \end{pmatrix} \begin{pmatrix} 1 \\ 3 \end{pmatrix} = 3 - \frac{9}{2} = -\frac{3}{2}$$
:::

**(d)** Fill in the entire $6 \times 6$ matrix $M$.

::: details Solution
Compute $UP^{-1}$:

$$UP^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 2 \\ 2 & 1 \\ 1 & 3 \\ 3 & 0 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ 0 & \frac{1}{2} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 2 & -\frac{1}{2} \\ 1 & 1 \\ 3 & -\frac{3}{2} \\ 1 & \frac{1}{2} \end{pmatrix}$$

Then $M = (UP^{-1})V$:

$$M = \begin{pmatrix} 1 & 1 & 3 & 0 & 2 & 1 \\ 0 & 2 & 1 & 4 & 0 & 3 \\ 2 & 1 & \frac{11}{2} & -2 & 4 & -\frac{1}{2} \\ 1 & 3 & 4 & 4 & 2 & 4 \\ 3 & 0 & \frac{15}{2} & -6 & 6 & -\frac{3}{2} \\ 1 & 2 & \frac{7}{2} & 2 & 2 & \frac{5}{2} \end{pmatrix}$$

Every entry is determined by the first two rows and first two columns — because $M$ has rank 2. The entry formula lets you compute any single entry (like $m_{3,4} = -2$) without computing the whole matrix.
:::

#### Problem 6: The Remainder Entry Formula

The remainder also has an entry formula. In rank-1 cross-filling, the remainder at position $(i,j)$ is:

$$a_{ij} - \frac{u_i \cdot v_j}{p}$$

**(a)** What is the block version? Write the remainder entry using the entry formula.

::: details Solution
For a position $(i,j)$ outside the pivot block (i.e., $i$ is a non-selected row, $j$ is a non-selected column):

$$\text{remainder}_{ij} = a_{ij} - \mathbf{u}_i^T \cdot P^{-1} \cdot \mathbf{v}_j$$

where $\mathbf{u}_i$ is row $i$'s entries at the selected columns, $\mathbf{v}_j$ is column $j$'s entries at the selected rows, and $P$ is the pivot block.

This is exactly $d - \frac{c \cdot r}{p}$ with vectors and a matrix replacing scalars.
:::

**(b)** Verify: compute the $(4,3)$ entry of the remainder for the matrix $A$ from Problem 3.

::: details Solution
$\mathbf{u}_4 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (row 4 at columns 1,2), $\;\mathbf{v}_3 = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$ (column 3 at rows 1,2).

$$\text{remainder}_{4,3} = a_{4,3} - \mathbf{u}_4^T \cdot P^{-1} \cdot \mathbf{v}_3 = 1 - \begin{pmatrix} 0 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \cdot \begin{pmatrix} 5 \\ 4 \end{pmatrix}$$

$$= 1 - \begin{pmatrix} 0 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 6 \\ 3 \end{pmatrix} = 1 - \begin{pmatrix} 0 & 1 \end{pmatrix} \cdot \begin{pmatrix} 2 \\ 1 \end{pmatrix} = 1 - 1 = 0$$

The remainder is zero at this entry. ✓ (We already know the whole remainder is zero since $A$ has rank 2.)
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
| B1 | Problem 3 (matrix formula: rank-$k$ piece $= UP^{-1}V$) | 10 min | Core |
| B2 | Problem 4 (abstract entry formula with block letters) | 7 min | Core |
| B2 | Problem 5 (concrete 6×6 entry formula) | 8 min | Core |
| B2 | Problem 6 (remainder entry formula) | 5 min | Core — quick with the pattern established |
| Apps | Problems 7–8 (Lecture 10/12 applications) | bonus | If time permits |

### Suggested flow

1. **Start with Problem 1**: Students just took the exam, so this is a natural debrief. Walk through (a)–(b) quickly, then let students try (c). The one-line proof is satisfying — emphasize that three separate ideas (algebra, projection theory, trace) combine cleanly.

2. **Problem 2**: This was the hardest True/False on the exam. The forward direction (a) is mechanical. For the backward direction (b), give the hint and let students struggle for 2–3 minutes before revealing. The key trick is to show $P\mathbf{x} - P^2\mathbf{x}$ lives in both subspaces.

3. **Transition to Part B**: "Both of these problems used ideas we've built up. Now let's look at a technique that connects two different lectures — Lecture 10 (inverse) and Lecture 12 (determinant). The common thread is **block cross-filling**."

4. **Sub-topic 1 (Problem 3)**: Introduce the matrix formula. The concrete $4 \times 4$ example makes it tangible. Emphasize: "divide by the pivot" becomes "multiply by the inverse of the pivot block." The rank-$k$ piece $= UP^{-1}V$ — same shape as $\frac{1}{p} \cdot \mathbf{u} \cdot \mathbf{v}^T$.

5. **Sub-topic 2 — Abstract (Problem 4)**: The $3 \times 3$ block-letter example. Students fill in the table: block $(i,j)$ of the rank-$k$ piece $= A_{i1} A_{11}^{-1} A_{1j}$. This makes the pattern visible without numerical clutter. The remainder formula $A_{ij} - A_{i1} A_{11}^{-1} A_{1j}$ is the key takeaway.

6. **Sub-topic 2 — Concrete (Problem 5)**: The $6 \times 6$ matrix with two rows and two columns given. Students practice the entry formula on specific entries before filling the whole matrix. This shows the computational power: you can find any single entry without building the entire rank-2 piece.

7. **Problem 6 (remainder)**: Quick — students already see the pattern from Problems 4–5.

8. **Applications (Problems 7–8)**: If time permits, show how Lectures 10 and 12 are both instances of this framework. The entry formula adds a new perspective: it shows how individual entries of $A^{-1}$ or $AB$ emerge from the block structure.

### Common mistakes

- **Problem 1**: Students may try to prove $BA = I_m$ (which is false when $m \neq n$). Emphasize: we get $\operatorname{rank} = n$, not invertibility.
- **Problem 2(b)**: Students may try to show $P\mathbf{x} - P^2\mathbf{x} \in \operatorname{Col}(P)$ by writing it as $P(\mathbf{x} - P\mathbf{x})$. This gives $\operatorname{Col}(P)$ membership but the other inclusion is trickier. The key observation is $P\mathbf{x} - P^2\mathbf{x} = (I-P)(P\mathbf{x})$ for $\operatorname{Col}(I-P)$ membership.
- **Entry formula confusion**: Students may confuse $\mathbf{u}_i$ (row $i$ of the column block $U$, a $k$-vector) with $u_i$ (the $i$-th entry of a column vector). Emphasize: in rank-1, each "entry" of the column is a number; in block cross-filling, each "entry" of the column block is a $k$-vector.
- **Block cross-filling**: Students may forget that $P^{-1}$ replaces $\frac{1}{p}$. If $P$ is not invertible, block cross-filling at this stage doesn't apply (just like rank-1 cross-filling fails when the pivot is zero).

### If time is short

Focus on Problems 3–4 (matrix formula + abstract entry formula). Skip Problem 5 (concrete 6×6) and Problem 6 (remainder) — students can do these as practice. The applications (Problems 7–8) can be assigned as reading or covered in a future tutorial.

---

**Last Updated**: 2026-04-21
