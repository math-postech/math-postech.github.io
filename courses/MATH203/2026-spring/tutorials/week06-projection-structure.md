# Tutorial: Week 6 — Projection Structure

> **For**: Teaching Assistants conducting tutorial sessions (Apr 2, 2026)
> **Related Lectures**: [Lecture 7: Linear Transformation and Projection](../notes/linear-transformation-and-projection.md), [Lecture 8: Cross-Filling Projections](../notes/cross-filling-projections.md)
> **Duration**: 50 minutes
> **Prerequisites**: Projection definition ($P^2 = P$), cross-filling $P = UV$ with $VU = I$, $\operatorname{rank}(P) = \operatorname{trace}(P)$, rank-1 projection characterization (Corollary 4.1), rank subadditivity $\operatorname{rank}(A+B) \leq \operatorname{rank}(A) + \operatorname{rank}(B)$

---

## Problem 1: When Is a Sum of Projections a Projection?

Let $P_1, P_2$ be projections ($P_1^2 = P_1$, $P_2^2 = P_2$).

**(a)** Find the condition on $P_1, P_2$ so that $P_1 + P_2$ is also a projection.

*Hint*: Expand $(P_1 + P_2)^2 = P_1 + P_2$ and simplify using $P_i^2 = P_i$.

::: details Solution
$(P_1 + P_2)^2 = P_1 + P_2$ expands to:

$$P_1^2 + P_1 P_2 + P_2 P_1 + P_2^2 = P_1 + P_2$$

Since $P_i^2 = P_i$, this simplifies to:

$$P_1 P_2 + P_2 P_1 = 0$$

**Claim**: This forces $P_1 P_2 = P_2 P_1 = 0$.

**Proof** (**Note**: This argument requires $2 \neq 0$, i.e., we work over $\mathbb{R}$ or any field of characteristic $\neq 2$.)

Right-multiply the equation $P_1 P_2 + P_2 P_1 = 0$ by $P_1$:

$$P_1 P_2 P_1 + P_2 P_1 = 0 \quad \Longrightarrow \quad P_1 P_2 P_1 = -P_2 P_1 \tag{1}$$

Left-multiply the original equation by $P_1$:

$$P_1 P_2 + P_1 P_2 P_1 = 0 \quad \Longrightarrow \quad P_1 P_2 P_1 = -P_1 P_2 \tag{2}$$

From (1) and (2): $-P_2 P_1 = -P_1 P_2$, so $P_1 P_2 = P_2 P_1$.

Substituting back into $P_1 P_2 + P_2 P_1 = 0$:

$$2 P_1 P_2 = 0 \quad \Longrightarrow \quad P_1 P_2 = 0$$

Therefore $P_1 P_2 = P_2 P_1 = 0$.
:::

**(b)** Verify the converse: if $P_1 P_2 = P_2 P_1 = 0$, then $P_1 + P_2$ is a projection.

::: details Solution
$(P_1 + P_2)^2 = P_1^2 + P_1 P_2 + P_2 P_1 + P_2^2 = P_1 + 0 + 0 + P_2 = P_1 + P_2$. ✓
:::

**(c)** Give a pair of projections $P_1, P_2$ such that $P_1 + P_2$ is **not** a projection.

::: details Solution
Take $P_1 = P_2 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. Then $P_1 + P_2 = \begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}$, and $(P_1+P_2)^2 = \begin{pmatrix} 4 & 0 \\ 0 & 0 \end{pmatrix} \neq P_1 + P_2$.

(Here $P_1 P_2 = P_1 \neq 0$, so the condition fails.)
:::

::: remark
**Connection to Lecture 9**: The condition $P_1 P_2 = 0$ (with both being projections) is exactly the definition of a **compatible family** $\{P_1, P_2\}$. This problem shows: $P_1 + P_2$ is a projection if and only if $\{P_1, P_2\}$ is a compatible family.
:::

---

## Problem 2: The Rank-1 Projection Characterization

**(a)** If a matrix $A$ has $\operatorname{rank}(A) = 1$ and $\operatorname{trace}(A) = 1$, prove that $A$ is a projection.

::: details Proof
Since $\operatorname{rank}(A) = 1$, write $A = \mathbf{u}\mathbf{v}^T$ for some column vectors $\mathbf{u}, \mathbf{v}$.

Then $\operatorname{trace}(A) = \operatorname{trace}(\mathbf{u}\mathbf{v}^T) = \mathbf{v}^T \mathbf{u} = 1$.

Compute:

$$A^2 = (\mathbf{u}\mathbf{v}^T)(\mathbf{u}\mathbf{v}^T) = \mathbf{u}(\mathbf{v}^T \mathbf{u})\mathbf{v}^T = \mathbf{u} \cdot 1 \cdot \mathbf{v}^T = A \quad \square$$
:::

**(b)** Does this generalize? Give an example of a matrix with $\operatorname{rank}(A) = 2$ and $\operatorname{trace}(A) = 2$ that is **not** a projection.

::: details Solution
$$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$

$\operatorname{rank}(A) = 2$, $\operatorname{trace}(A) = 1 + 1 = 2$.

But $A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \neq A$, so $A$ is not a projection.
:::

::: remark
**Why Does Rank 1 Work But Rank 2 Doesn't?**

For rank-1 matrices, the entire structure is captured by the single number $\mathbf{v}^T\mathbf{u}$: $A^2 = (\mathbf{v}^T\mathbf{u}) \cdot A$. So $\operatorname{trace} = 1$ directly forces $A^2 = A$.

For rank $\geq 2$, the product form $A = UV$ gives $A^2 = U(VU)V$, and $VU$ is a matrix (not a scalar). Knowing $\operatorname{trace}(VU) = 2$ does not force $VU = I_2$. In the example above, $VU = A$ itself, which has $\operatorname{trace} = 2$ but $VU \neq I_2$.

This is what makes Lecture 8's theorem ($P^2 = P \Rightarrow VU = I$) so remarkable: the projection property, not the trace, is what forces $VU = I$.
:::

---

## Problem 3: Cross-Filling a Projection (Worked Example)

Consider the projection from Lecture 8:

$$P = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

**(a)** Verify $\operatorname{rank}(P) = \operatorname{trace}(P)$.

::: details Solution
$\operatorname{trace}(P) = 0 + 1 + 1 = 2$.

$\operatorname{rank}(P) = 2$ (rows 2 and 3 are linearly independent; row 1 is zero).

Equal! ✓
:::

**(b)** Cross-fill $P = UV$ and verify $VU = I_2$.

::: details Solution
Cross-fill at pivot $(2,2)$ with value $1$:

$$R_1 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}\begin{pmatrix} -1 & 1 & 0 \end{pmatrix}$$

Remainder $P - R_1 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$. Cross-fill at pivot $(3,3)$:

$$R_2 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\begin{pmatrix} -1 & 0 & 1 \end{pmatrix}$$

Product form:

$$U = \begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad V = \begin{pmatrix} -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}$$

$$VU = \begin{pmatrix} -1 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2 \quad ✓$$
:::

**(c)** Verify that the rank-1 pieces $R_1, R_2$ are each projections and satisfy $R_1 R_2 = 0$.

::: details Solution
$R_1^2 = \begin{pmatrix} 0 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}^2$: row 2 times column 1 gives $(-1)(0)+(1)(-1)+(0)(0) = -1$, row 2 times column 2 gives $(-1)(0)+(1)(1)+(0)(0) = 1$. So $R_1^2 = R_1$. ✓

$R_2^2 = R_2$ similarly. ✓

$R_1 R_2$: Row 2 of $R_1$ is $(-1, 1, 0)$. Applied to columns of $R_2$: $(-1)(0)+(1)(0)+(0)(-1) = 0$, etc. All entries zero. $R_1 R_2 = 0$. ✓

This confirms Lecture 8's discovery: cross-filling a projection automatically produces a compatible family.
:::

**(d)** Is $P$ an orthogonal projection?

::: details Solution
$P^T = \begin{pmatrix} 0 & -1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \neq P$.

So $P$ is **not** an orthogonal projection — it is an oblique projection.

$\operatorname{Col}(P) = \operatorname{span}\left\{\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\right\}$ (the $yz$-plane), $\operatorname{Null}(P) = \operatorname{span}\left\{\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}\right\}$.

The null direction $(1,1,1)$ is not perpendicular to the $yz$-plane, confirming obliqueness.
:::

---

## Problem 4 (Challenge): A Characterization of Projections by Rank

Prove: $\operatorname{rank}(I - P) + \operatorname{rank}(P) = n$ if and only if $P^2 = P$.

*Note*: This problem may be deferred to a future tutorial depending on time.

**(a) ($\Leftarrow$)**: If $P^2 = P$, show that $\operatorname{rank}(I-P) + \operatorname{rank}(P) = n$.

*Hint*: Use $\operatorname{rank} = \operatorname{trace}$ for projections.

::: details Proof
If $P^2 = P$, then $I - P$ is also a projection: $(I-P)^2 = I - 2P + P^2 = I - P$.

By rank = trace (Lecture 8, Theorem 3.1):

$$\operatorname{rank}(I-P) + \operatorname{rank}(P) = \operatorname{trace}(I-P) + \operatorname{trace}(P) = \operatorname{trace}(I) = n \quad \square$$
:::

**(b) ($\Rightarrow$)**: This is the harder direction. If $\operatorname{rank}(I-P) + \operatorname{rank}(P) = n$, show that $P^2 = P$.

*Hint*: It suffices to show $P(I-P) = 0$. Use the block matrix rank technique: embed $P$ and $I-P$ into a block matrix, apply rank subadditivity, then use the cross-filling philosophy (cf. Lecture 9 slides) to conclude the off-diagonal block vanishes.

::: details Proof

**Goal**: Show $P(I-P) = 0$, which is equivalent to $P = P^2$.

**Step 1: Embed into block matrices.**

Observe that:

$$\operatorname{rank}\begin{pmatrix} P & 0 \\ P & 0 \end{pmatrix} = \operatorname{rank}(P), \qquad \operatorname{rank}\begin{pmatrix} I-P & I-P \\ 0 & 0 \end{pmatrix} = \operatorname{rank}(I-P)$$

(Each block matrix has the same column space, respectively row space, as its nonzero block.)

**Step 2: Apply rank subadditivity.**

Their sum is:

$$\begin{pmatrix} P & 0 \\ P & 0 \end{pmatrix} + \begin{pmatrix} I-P & I-P \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} I & I-P \\ P & 0 \end{pmatrix}$$

By $\operatorname{rank}(A + B) \leq \operatorname{rank}(A) + \operatorname{rank}(B)$:

$$\operatorname{rank}\begin{pmatrix} I & I-P \\ P & 0 \end{pmatrix} \leq \operatorname{rank}(P) + \operatorname{rank}(I-P) = n$$

**Step 3: Use the cross-filling lower bound.**

The block matrix $\begin{pmatrix} I & I-P \\ P & 0 \end{pmatrix}$ contains the $n \times n$ identity $I$ in its top-left corner. Cross-filling $I$ into $n$ rank-1 pieces, each piece is supported on a single row and column of the top-left block — none of these pieces touch the bottom-right block. Therefore:

$$\operatorname{rank}\begin{pmatrix} I & I-P \\ P & 0 \end{pmatrix} \geq n$$

(The $n$ rank-1 pieces from $I$ alone contribute rank $n$.)

**Step 4: Combine and conclude.**

From Steps 2 and 3:

$$\operatorname{rank}\begin{pmatrix} I & I-P \\ P & 0 \end{pmatrix} = n$$

Now, the general principle for block matrices of the form $\begin{pmatrix} I & A \\ B & C \end{pmatrix}$:

Cross-filling the identity $I$ produces $n$ rank-1 pieces. After subtracting these from the full matrix, the remainder is concentrated in the bottom-right block: $C - BA$. Therefore:

$$\operatorname{rank}\begin{pmatrix} I & A \\ B & C \end{pmatrix} = n + \operatorname{rank}(C - BA)$$

Applying this with $A = I-P$, $B = P$, $C = 0$:

$$n = n + \operatorname{rank}(0 - P(I-P))$$

So $\operatorname{rank}(P(I-P)) = 0$, which means $P(I-P) = 0$, i.e., $P = P^2$. $\square$
:::

::: remark
**What This Tells Us**

The condition "$\operatorname{rank}(I-P) + \operatorname{rank}(P) = n$" says that $P$ and $I-P$ together account for all $n$ dimensions with no overlap and no waste. This is exactly the geometric content of being a projection: the space splits cleanly into the "floor" $\operatorname{Col}(P)$ and the "sunlight direction" $\operatorname{Null}(P) = \operatorname{Col}(I-P)$.

For non-projections, $\operatorname{rank}(I-P) + \operatorname{rank}(P) > n$ — dimensions are "double-counted."
:::

---

## TA Notes

### Time allocation

| Problem | Suggested Time | Priority |
|---------|---------------|----------|
| Problem 1 (sum of projections) | 15 min | Core — the main result of this tutorial |
| Problem 2 (rank-1 characterization + counterexample) | 12 min | Core — (a) is a warm-up proof, (b) shows the boundary |
| Problem 3 (cross-filling worked example) | 10 min | Students compute $VU$, verify $R_i^2 = R_i$; reinforces Lecture 8 |
| Problem 4 (rank characterization) | 13 min | Challenge — defer if short on time |

### Suggested flow

1. **Start with Problem 2** as a warm-up — it reviews Lecture 8's Corollary 4.1 and the counterexample in (b) motivates "what makes projections special."
2. **Problem 3** reinforces the $VU = I$ mechanism and compatible family through the Lecture 8 example. Let students do the cross-filling and compute $VU$ themselves. Part (d) gives a concrete oblique projection.
3. **Problem 1** is the main result: students discover the compatible family condition. Let them expand $(P_1+P_2)^2$ themselves before showing the right/left multiply trick.
4. **Problem 4** only if time permits. The ($\Leftarrow$) direction is a quick application of rank = trace. The ($\Rightarrow$) direction uses block matrix rank techniques from Lecture 9 slides and can be presented as a "preview" of the cross-filling philosophy applied to block matrices.

### Common mistakes

- **Problem 1**: Students may stop at $P_1P_2 + P_2P_1 = 0$ and not realize this forces $P_1P_2 = 0$. The right/left multiply trick is the key insight. Emphasize that we need $\operatorname{char} \neq 2$.
- **Problem 2(a)**: Students may try to verify $A^2 = A$ by brute force instead of using the $\mathbf{v}^T\mathbf{u} = 1$ shortcut. Remind them: for rank-1 matrices, everything reduces to a single scalar.
- **Problem 2(b)**: The simplest counterexample is $I + N$ where $N$ is nilpotent (e.g., $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$). If students struggle, suggest: "find a matrix with all diagonal entries 1 but $A^2 \neq A$."
- **Problem 4**: The block rank equality $\operatorname{rank}\begin{pmatrix} I & A \\ B & C \end{pmatrix} = n + \operatorname{rank}(C - BA)$ is the key tool. Students may accept it on faith for now; it will be fully justified in later material on block elimination.

---

**Last Updated**: 2026-03-30
