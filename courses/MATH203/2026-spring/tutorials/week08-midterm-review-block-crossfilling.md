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

In ordinary cross-filling, we pick **one row and one column**, form a rank-1 piece, and divide by the **pivot** (a single number). What happens if we pick **$k$ rows and $k$ columns** at once?

### Problem 3: Rank-$k$ Cross-Filling (10 min)

Consider the $4 \times 4$ matrix:

$$A = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \\ 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$$

**(a)** Select the first two rows and first two columns as the "pivot block":

$$\text{Pivot block: } P = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}, \quad \text{Column block: } C = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \text{Row block: } R = \begin{pmatrix} 5 & 5 \\ 4 & 7 \end{pmatrix}$$

where $C$ consists of the selected two columns restricted to the remaining rows, and $R$ consists of the selected two rows restricted to the remaining columns.

Compute the "rank-2 piece": $\begin{pmatrix} P \\ C \end{pmatrix} P^{-1} \begin{pmatrix} P & R \end{pmatrix}$.

::: details Solution
First: $P^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.

The column factor is $\begin{pmatrix} P \\ C \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$, and the row factor is $\begin{pmatrix} P & R \end{pmatrix} = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \end{pmatrix}$.

$$\begin{pmatrix} P \\ C \end{pmatrix} P^{-1} \begin{pmatrix} P & R \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} \cdot \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \end{pmatrix}$$

First compute $\begin{pmatrix} P \\ C \end{pmatrix} P^{-1} = \begin{pmatrix} I_2 \\ C P^{-1} \end{pmatrix}$:
$$CP^{-1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \cdot \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$$

Then $P^{-1} \begin{pmatrix} P & R \end{pmatrix} = \begin{pmatrix} I_2 & P^{-1}R \end{pmatrix}$:
$$P^{-1}R = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 5 & 5 \\ 4 & 7 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 6 & 3 \\ 3 & 9 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$$

So the rank-2 piece is:
$$\begin{pmatrix} I_2 \\ CP^{-1} \end{pmatrix} \begin{pmatrix} P & R \end{pmatrix} = \begin{pmatrix} 2 & 1 & 5 & 5 \\ 1 & 2 & 4 & 7 \\ \frac{2}{3} & \frac{1}{3} & 2 & 1 \\ -\frac{1}{3} & \frac{2}{3} & 1 & 3 \end{pmatrix} \cdot \;\text{(Hmm, let's just compute it directly.)}$$

Actually, the cleaner approach: the rank-$k$ piece matches $A$ exactly on the selected rows and columns. The **remainder** is:
$$A - \text{(rank-2 piece)} = \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 2 - CP^{-1}R_{11} & 1 - CP^{-1}R_{12} \\ 0 & 0 & 1 - CP^{-1}R_{21} & 3 - CP^{-1}R_{22} \end{pmatrix}$$

The bottom-right block of the remainder is:
$$\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} - CP^{-1}R = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} - \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

The remainder is **zero**! This means $A$ has rank 2.
:::

**(b)** What is the "bottom-right remainder" in general?

::: details Solution
If a matrix $A$ is partitioned as $A = \begin{pmatrix} P & R \\ C & D \end{pmatrix}$ where $P$ is the $k \times k$ invertible pivot block, then the remainder after a single block cross-filling step is:

$$\text{Remainder} = \begin{pmatrix} 0 & 0 \\ 0 & D - CP^{-1}R \end{pmatrix}$$

The quantity $D - CP^{-1}R$ is called the **Schur complement** of $P$ in $A$. It plays the same role as the "remainder entry" in ordinary cross-filling — if it's zero, the original matrix has the same rank as the pivot block.

**Analogy with rank-1 cross-filling**: In rank-1 cross-filling, you divide by the pivot (a number). In block cross-filling, you divide by the **inverse of the pivot block** (a matrix). The formula $D - CP^{-1}R$ generalizes $d - \frac{c \cdot r}{p}$.
:::

::: attention
**Block Cross-Filling Rule**

Select $k$ rows and $k$ columns. Let $P$ be their $k \times k$ intersection (the pivot block).

$$\text{Rank-}k\text{ piece: column} \times P^{-1} \times \text{row}$$

$$\text{Remainder bottom-right: } D - CP^{-1}R$$

This is exactly the same as rank-1 cross-filling, but with $P^{-1}$ replacing $\frac{1}{p}$.
:::

### Problem 4: Block Cross-Filling for the Inverse — from Lecture 10 (7 min)

Recall the Lecture 10 trick: to cross-fill $A^{-1}$ without computing it, form the block matrix

$$M = \begin{pmatrix} A & I \\ I & 0 \end{pmatrix}$$

and cross-fill with pivots in $A$.

**(a)** Using the block cross-filling formula from Problem 3, do this in a single step: treat $A$ as the entire pivot block. What is the Schur complement?

::: details Solution
Partition $M = \begin{pmatrix} P & R \\ C & D \end{pmatrix}$ where $P = A$, $R = I$, $C = I$, $D = 0$.

The Schur complement is:
$$D - CP^{-1}R = 0 - I \cdot A^{-1} \cdot I = -A^{-1}$$

So the remainder is $\begin{pmatrix} 0 & 0 \\ 0 & -A^{-1} \end{pmatrix}$.

Since $M = \begin{pmatrix} A & I \\ I & A^{-1} \end{pmatrix}$ has rank $r$ (we proved this in Lecture 10), the remainder must be zero when cross-filling completes. But this block formula shows the bottom-right **directly reveals** $-A^{-1}$, whether we do the cross-filling in one block step or $r$ individual steps.
:::

**(b)** Verify with a concrete example: $A = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$.

::: details Solution
$$M = \begin{pmatrix} 3 & 3 & 1 & 0 \\ 3 & 5 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix}$$

Schur complement of $A$: $0 - I \cdot A^{-1} \cdot I = -A^{-1}$.

$A^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$, so the remainder bottom-right is $-\frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$.

This matches what we computed step-by-step in Lecture 10 (two rank-1 slices summing to $A^{-1}$), but now we see the **whole picture at once** through the block formula.
:::

### Problem 5: Block Cross-Filling for the Product — from Lecture 12 (8 min)

In Lecture 12, we proved $\det(AB) = \det(A)\det(B)$ by forming the block matrix

$$M = \begin{pmatrix} A & 0 \\ I & B \end{pmatrix}$$

and cross-filling with pivots in $I$.

**(a)** Using block cross-filling: treat $I$ (bottom-left) as the pivot block. What is the Schur complement?

::: details Solution
Rearrange: we select the $n$ rows and $n$ columns where $I$ sits. The partition is:
- Pivot block $P = I$ (bottom-left rows, left columns)
- $C = A$ (top rows, left columns)
- $R = B$ (bottom-left rows, right columns)
- $D = 0$ (top rows, right columns)

Schur complement: $D - CP^{-1}R = 0 - A \cdot I^{-1} \cdot B = -AB$.

So the remainder is $\begin{pmatrix} 0 & -AB \\ 0 & 0 \end{pmatrix}$.

This is precisely what Lecture 12 showed: cross-filling the $I$ block makes $AB$ appear passively in the top-right!
:::

**(b)** Now use the **determinant** of the block triangular matrix to conclude:

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
| What appears | $-A^{-1}$ | $-AB$ |
| Schur complement | $0 - I \cdot A^{-1} \cdot I = -A^{-1}$ | $0 - A \cdot I^{-1} \cdot B = -AB$ |

**Common pattern**: Place the "known" block at the pivot position. The "unknown" block (inverse, product) materializes in the passive position through the Schur complement.
:::

---

## TA Notes

### Time allocation

| Part | Problem | Suggested Time | Priority |
|------|---------|---------------|----------|
| A | Problem 1 ($AB = I_n \Rightarrow \operatorname{rank}(BA) = n$) | 12 min | Core — walk through (a)–(c), emphasize the three-ingredient proof |
| A | Problem 2 ($P^2 = P \Leftrightarrow$ disjoint columns) | 13 min | Core — both directions, students attempt (b) before reveal |
| B | Problem 3 (block cross-filling formula) | 10 min | Core — the new concept, concrete computation |
| B | Problem 4 (inverse via block) | 7 min | Core — connects to Lecture 10, quick with the formula |
| B | Problem 5 (product via block) | 8 min | Core — connects to Lecture 12, the "aha" moment |

### Suggested flow

1. **Start with Problem 1**: Students just took the exam, so this is a natural debrief. Walk through (a)–(b) quickly, then let students try (c). The one-line proof is satisfying — emphasize that three separate ideas (algebra, projection theory, trace) combine cleanly.

2. **Problem 2**: This was the hardest True/False on the exam. The forward direction (a) is mechanical. For the backward direction (b), give the hint and let students struggle for 2–3 minutes before revealing. The key trick is to show $P\mathbf{x} - P^2\mathbf{x}$ lives in both subspaces.

3. **Transition to Part B**: "Both of these problems used ideas we've built up. Now let's look at a technique that connects two different lectures — Lecture 10 (inverse) and Lecture 12 (determinant). The common thread is **block cross-filling**."

4. **Problem 3**: This introduces the general formula. The concrete $4 \times 4$ example makes it tangible. Emphasize the analogy: "divide by the pivot" becomes "multiply by the inverse of the pivot block."

5. **Problems 4 and 5**: These are retrospective — students now see the Lecture 10 and 12 tricks as instances of one idea. The comparison table in the attention box is the payoff.

### Common mistakes

- **Problem 1**: Students may try to prove $BA = I_m$ (which is false when $m \neq n$). Emphasize: we get $\operatorname{rank} = n$, not invertibility.
- **Problem 2(b)**: Students may try to show $P\mathbf{x} - P^2\mathbf{x} \in \operatorname{Col}(P)$ by writing it as $P(\mathbf{x} - P\mathbf{x})$. This gives $\operatorname{Col}(P)$ membership but the other inclusion is trickier. The key observation is $P\mathbf{x} - P^2\mathbf{x} = (I-P)(P\mathbf{x})$ for $\operatorname{Col}(I-P)$ membership.
- **Problem 3**: Students may confuse which block is $C$ and which is $R$. Remind them: $C$ = same Columns as pivot, remaining rows. $R$ = same Rows as pivot, remaining columns.
- **Block cross-filling**: Students may forget that $P^{-1}$ replaces $\frac{1}{p}$. If $P$ is not invertible, block cross-filling at this stage doesn't apply (just like rank-1 cross-filling fails when the pivot is zero).

### If time is short

Drop Problem 3(a) computation and just state the block cross-filling formula. Go directly to Problems 4 and 5, which give the formula concrete meaning through the two applications students already know.

---

**Last Updated**: 2026-04-21
