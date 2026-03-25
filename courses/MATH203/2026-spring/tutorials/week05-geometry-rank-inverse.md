# Tutorial: Week 5 — Geometry of Rank and Rank Inequalities

> **For**: Teaching Assistants conducting tutorial sessions (Mar 26, 2026)
> **Related Lectures**: [Lecture 5: Solving Equations and Null Space](../notes/solving-equations-null-space.md), [Lecture 6: Four Fundamental Subspaces](../notes/four-fundamental-subspaces.md)
> **Duration**: 50 minutes
> **Prerequisites**: Cross-filling, rank, left/right cancellation, $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$, $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$, four fundamental subspaces, $\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$

---

## Problem 1: The Rank Formula for $VU$

Let $U$ be $m \times r$ with $\operatorname{rank}(U) = r$ and $V$ be $r \times m$ with $\operatorname{rank}(V) = r$.

::: attention
**Recall**: $UV$ is $m \times m$ with $\operatorname{rank}(UV) = r$ (since $\operatorname{Null}(U) = \{\mathbf{0}\}$, Lecture 6 Theorem 3 gives $\operatorname{Null}(UV) = \operatorname{Null}(V)$).

Now flip the order: $VU$ is $r \times r$ (square). What is its rank?
:::

**(a)** Prove the following rank formula:

$$\operatorname{rank}(VU) = r - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$$

*Idea*: Show that $\mathbf{x} \mapsto U\mathbf{x}$ gives a one-to-one correspondence between $\operatorname{Null}(VU)$ and $\operatorname{Null}(V) \cap \operatorname{Col}(U)$, then use rank-nullity.

::: details Proof
We show that $\mathbf{x} \mapsto U\mathbf{x}$ is a bijection from $\operatorname{Null}(VU)$ to $\operatorname{Null}(V) \cap \operatorname{Col}(U)$.

**Well-defined**: If $\mathbf{x} \in \operatorname{Null}(VU)$, then $VU\mathbf{x} = \mathbf{0}$, so $U\mathbf{x} \in \operatorname{Null}(V)$. Also $U\mathbf{x} \in \operatorname{Col}(U)$ trivially. ✓

**Injective**: If $U\mathbf{x}_1 = U\mathbf{x}_2$, then $U(\mathbf{x}_1 - \mathbf{x}_2) = \mathbf{0}$. Since $\operatorname{Null}(U) = \{\mathbf{0}\}$ (left cancelable), $\mathbf{x}_1 = \mathbf{x}_2$. ✓

**Surjective**: Take $\mathbf{w} \in \operatorname{Null}(V) \cap \operatorname{Col}(U)$. Since $\mathbf{w} \in \operatorname{Col}(U)$, write $\mathbf{w} = U\mathbf{x}$. Since $\mathbf{w} \in \operatorname{Null}(V)$, $VU\mathbf{x} = V\mathbf{w} = \mathbf{0}$, so $\mathbf{x} \in \operatorname{Null}(VU)$. ✓

Therefore $\dim(\operatorname{Null}(VU)) = \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U))$. By rank-nullity on the $r \times r$ matrix $VU$:

$$\operatorname{rank}(VU) = r - \dim(\operatorname{Null}(VU)) = r - \dim(\operatorname{Null}(V) \cap \operatorname{Col}(U)) \quad \square$$
:::

::: remark
**Geometric picture**: $\operatorname{Null}(V) \cap \operatorname{Col}(U)$ is the "dead zone" — vectors that $U$ produces but $V$ kills. If the overlap is $\{\mathbf{0}\}$, then $VU$ is invertible.
:::

**(b)** Verify the formula for the following pair:

$$U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

::: details Solution
$\operatorname{Col}(U) = \operatorname{span}\left\{\begin{pmatrix}1\\0\\0\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$, $\quad \operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$.

Overlap: $\operatorname{Null}(V) \cap \operatorname{Col}(U) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$, dimension 1.

Prediction: $\operatorname{rank}(VU) = 2 - 1 = 1$.

Verify: $VU = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Rank 1. ✓
:::

**(c)** Now change $V = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ (same $U$). What happens?

::: details Solution
$\operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$. This is not in $\operatorname{Col}(U)$, so the overlap is $\{\mathbf{0}\}$.

Prediction: $\operatorname{rank}(VU) = 2 - 0 = 2$.

Verify: $VU = I_2$. ✓
:::

---

## Problem 2: Rank of Block Diagonal Matrices

Prove:

$$\operatorname{rank}\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \operatorname{rank}(A) + \operatorname{rank}(B)$$

*Idea*: Cross-fill $A$ and $B$ separately. The rank-one pieces don't interact.

::: details Proof
Cross-fill $A = R_1 + \cdots + R_s$ and $B = Q_1 + \cdots + Q_t$ into rank-one pieces. Each $R_i$ embeds as a rank-one piece of the block matrix (padded with zeros in the $B$ rows/columns), and similarly for each $Q_j$. The pieces are supported on disjoint row/column sets, so they don't interact. Total: $s + t$ rank-one pieces. ∎
:::

**Example**: Compute the rank of $\begin{pmatrix} 1 & 2 & 0 & 0 \\ 2 & 4 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$.

::: details Solution
Top-left block: rank 1. Bottom-right block: rank 2. Total rank = $1 + 2 = 3$. ✓
:::

---

## Problem 3: Invertible Factor Preserves Rank

If $P$ is invertible, prove that $\operatorname{rank}(AP) = \operatorname{rank}(A) = \operatorname{rank}(PA)$.

*Idea*: For $AP$, use column spaces and the chain $\operatorname{Col}(AP) \subseteq \operatorname{Col}(A) = \operatorname{Col}(APP^{-1}) \subseteq \operatorname{Col}(AP)$. For $PA$, use null spaces.

::: details Proof
**$\operatorname{rank}(AP) = \operatorname{rank}(A)$**: By Lecture 6 Theorem 1, $\operatorname{Col}(AP) \subseteq \operatorname{Col}(A)$. Applying Theorem 1 again with $AP$ in place of $A$: $\operatorname{Col}(A) = \operatorname{Col}(APP^{-1}) \subseteq \operatorname{Col}(AP)$. So $\operatorname{Col}(AP) = \operatorname{Col}(A)$, hence same rank. ∎

**$\operatorname{rank}(PA) = \operatorname{rank}(A)$**: By Lecture 6 Theorem 2, $\operatorname{Null}(A) \subseteq \operatorname{Null}(PA)$. For the reverse: if $PA\mathbf{x} = \mathbf{0}$, left-cancel $P$ to get $A\mathbf{x} = \mathbf{0}$. So $\operatorname{Null}(PA) = \operatorname{Null}(A)$. Same null space dimension → same rank. ∎
:::

---

## Problem 4: Finding $\operatorname{Null}(A) \cap \operatorname{Col}(B)$

Let $A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$.

**(a)** Find $\operatorname{Null}(A)$.

**(b)** Find $\operatorname{Col}(B)$.

**(c)** Determine whether $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$.

**(d)** What does this tell you about $\operatorname{rank}(AB)$?

::: details Solution
**(a)** Solve $A\mathbf{x} = \mathbf{0}$: $x_1 + 2x_3 = 0$, $x_2 + x_3 = 0$. Free variable $x_3 = t$:

$$\operatorname{Null}(A) = \operatorname{span}\left\{\begin{pmatrix}-2\\-1\\1\end{pmatrix}\right\}$$

**(b)** $\operatorname{Col}(B) = \operatorname{span}\left\{\begin{pmatrix}1\\0\\1\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$

**(c)** Check if $\begin{pmatrix}-2\\-1\\1\end{pmatrix} \in \operatorname{Col}(B)$: solve $c_1\begin{pmatrix}1\\0\\1\end{pmatrix} + c_2\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}-2\\-1\\1\end{pmatrix}$.

Row 1: $c_1 = -2$. Row 3: $c_1 = 1$. Contradiction. So $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$. ✓

**(d)** Since $\operatorname{Null}(A) \cap \operatorname{Col}(B) = \{\mathbf{0}\}$, no columns of $B$ are "wasted" by $A$. Therefore $\operatorname{rank}(AB) = \operatorname{rank}(B) = 2$.

Verify: $AB = \begin{pmatrix}3 & 0 \\ 1 & 1\end{pmatrix}$, rank 2. ✓
:::

---

## Problem 5: Rank Inequalities

**(a)** Prove: $\operatorname{rank}(AB) \leq \operatorname{rank}(A)$.

*Idea*: $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$.

::: details Proof
By Lecture 6 Theorem 1, $\operatorname{Col}(AB) \subseteq \operatorname{Col}(A)$. A subspace contained in another has at most the same dimension:

$$\operatorname{rank}(AB) = \dim(\operatorname{Col}(AB)) \leq \dim(\operatorname{Col}(A)) = \operatorname{rank}(A) \quad \square$$
:::

**(b)** Prove: $\operatorname{rank}(A + B) \leq \operatorname{rank}(A) + \operatorname{rank}(B)$.

*Idea*: Write each matrix as a sum of rank-one pieces via cross-filling.

::: details Proof
Cross-fill $A$ into $r$ rank-one pieces and $B$ into $s$ rank-one pieces. Then $A + B$ is a sum of $r + s$ rank-one matrices. Since each rank-one piece adds at most 1 to the rank:

$$\operatorname{rank}(A+B) \leq r + s = \operatorname{rank}(A) + \operatorname{rank}(B) \quad \square$$
:::

**(c)** (Sylvester's inequality) Let $A$ be $m \times n$, $B$ be $n \times p$. Prove: $\operatorname{rank}(AB) \geq \operatorname{rank}(A) + \operatorname{rank}(B) - n$.

*Idea*: The rank drop from $B$ to $AB$ is controlled by $\dim(\operatorname{Null}(A) \cap \operatorname{Col}(B))$, which is at most $\dim(\operatorname{Null}(A)) = n - \operatorname{rank}(A)$.

::: details Proof
We have $\operatorname{rank}(AB) = \operatorname{rank}(B) - \dim(\operatorname{Null}(A) \cap \operatorname{Col}(B))$.

(To see this: $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$ by Lecture 6, and the "extra" null vectors in $\operatorname{Null}(AB) \setminus \operatorname{Null}(B)$ correspond exactly to vectors in $\operatorname{Col}(B) \cap \operatorname{Null}(A)$ via the map $\mathbf{x} \mapsto B\mathbf{x}$, by the same bijection argument as Problem 1.)

Since $\operatorname{Null}(A) \cap \operatorname{Col}(B) \subseteq \operatorname{Null}(A)$:

$$\dim(\operatorname{Null}(A) \cap \operatorname{Col}(B)) \leq \dim(\operatorname{Null}(A)) = n - \operatorname{rank}(A)$$

Therefore:

$$\operatorname{rank}(AB) \geq \operatorname{rank}(B) - (n - \operatorname{rank}(A)) = \operatorname{rank}(A) + \operatorname{rank}(B) - n \quad \square$$
:::

**Quick check**: If $A$ is $3 \times 5$ with rank 3 and $B$ is $5 \times 4$ with rank 4, what are the bounds on $\operatorname{rank}(AB)$?

::: details Answer
Upper: $\min\{3, 4\} = 3$. Lower (Sylvester): $3 + 4 - 5 = 2$. So $2 \leq \operatorname{rank}(AB) \leq 3$.
:::

---

## Problem 6: $\operatorname{Null}(A^T A) = \operatorname{Null}(A)$

Let $A$ be any $m \times n$ real matrix.

**(a)** Prove: $\operatorname{Null}(A^T A) = \operatorname{Null}(A)$.

*Idea*: One inclusion is immediate. For the other, use $\|A\mathbf{x}\|^2 = \mathbf{x}^T A^T A \mathbf{x}$.

::: details Proof
($\supseteq$): If $A\mathbf{x} = \mathbf{0}$, then $A^TA\mathbf{x} = A^T\mathbf{0} = \mathbf{0}$. ✓

($\subseteq$): If $A^TA\mathbf{x} = \mathbf{0}$, multiply on the left by $\mathbf{x}^T$:

$$\mathbf{x}^T A^T A \mathbf{x} = 0 \implies (A\mathbf{x})^T(A\mathbf{x}) = 0 \implies \|A\mathbf{x}\|^2 = 0 \implies A\mathbf{x} = \mathbf{0} \quad \square$$
:::

**(b)** Conclude: $\operatorname{rank}(A^T A) = \operatorname{rank}(A)$.

::: details Proof
By rank-nullity, $\operatorname{rank}(A) = n - \dim(\operatorname{Null}(A)) = n - \dim(\operatorname{Null}(A^TA)) = \operatorname{rank}(A^TA)$. ∎
:::

---

## Problem 7: $AB = 0$ and Rank

Let $A$ be $m \times n$ and $B$ be $n \times p$ with $AB = 0$.

**(a)** Prove: $\operatorname{rank}(A) + \operatorname{rank}(B) \leq n$.

*Idea*: Show $\operatorname{Col}(B) \subseteq \operatorname{Null}(A)$, then take dimensions.

::: details Proof
If $AB = 0$, then for every column $\mathbf{b}_j$ of $B$: $A\mathbf{b}_j = \mathbf{0}$. So $\operatorname{Col}(B) \subseteq \operatorname{Null}(A)$.

Taking dimensions:

$$\operatorname{rank}(B) = \dim(\operatorname{Col}(B)) \leq \dim(\operatorname{Null}(A)) = n - \operatorname{rank}(A)$$

Rearranging: $\operatorname{rank}(A) + \operatorname{rank}(B) \leq n$. ∎
:::

**(b)** Does $AB = 0$ imply $BA = 0$?

::: details Answer
No. $AB = 0$ means $\operatorname{Col}(B) \subseteq \operatorname{Null}(A)$. This says nothing about $\operatorname{Col}(A)$ vs $\operatorname{Null}(B)$.

Counterexample: $A = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix}$, $B = \begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix}$. Then $AB = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix} \cdot \begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix} = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix} \neq 0$.

Hmm, let me fix: $A = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix}$, $B = \begin{pmatrix}1 & 0 \\ 0 & 0\end{pmatrix}$. Then $AB = \begin{pmatrix}0 & 0 \\ 0 & 0\end{pmatrix} = 0$, but $BA = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix} \neq 0$. ✓
:::

---

## TA Notes

### Time allocation

| Problem | Suggested Time | Priority |
|---------|---------------|----------|
| Problem 1 (rank of $VU$) | 12 min | Core — state the formula, sketch the proof, do one example |
| Problems 2–3 (block diagonal, invertible factor) | 8 min | State and prove; can abbreviate if short on time |
| Problem 4 ($\operatorname{Null} \cap \operatorname{Col}$) | 8 min | Let students try (a)–(c) before showing solution |
| Problem 5 (rank inequalities) | 10 min | Focus on (a) and (c); (b) is quick |
| Problem 6 ($\operatorname{Null}(A^TA)$) | 7 min | Key trick: let students find the $\|\cdot\|^2$ idea |
| Problem 7 ($AB = 0$) | 5 min | Quick if time remains |

### Common mistakes

- **Confusing $UV$ and $VU$**: $UV$ is $m \times m$ (big, not necessarily invertible). $VU$ is $r \times r$ (square, can be invertible).
- **$\operatorname{rank}(AB) \leq \operatorname{rank}(B)$**: Students often prove $\leq \operatorname{rank}(A)$ but forget the transpose trick: apply $\operatorname{Col}((AB)^T) \subseteq \operatorname{Col}(B^T)$.
- **$\operatorname{Null}(A^TA) = \operatorname{Null}(A)$**: The $\|\cdot\|^2$ trick only works over $\mathbb{R}$. Students may try to left-cancel $A^T$, which is wrong (not necessarily cancelable).

---

**Last Updated**: 2026-03-25
