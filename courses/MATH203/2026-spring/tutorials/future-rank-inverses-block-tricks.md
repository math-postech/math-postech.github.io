# Tutorial Material: Block Matrix Tricks, Left/Right Inverses, and Moore-Penrose

> **Status**: Material for future tutorials (not yet scheduled)
> **Origin**: Extracted from Week 5 draft (2026-03-25) to better align tutorial pacing with lecture progress across all sections.
> **Prerequisites**: Lectures 1–9 (through compatible projections), or at minimum Lectures 1–8.

---

## Topic: The $I - AB$ and $I - BA$ Trick (10 min)

This is a beautiful block-matrix argument that connects $I - AB$ and $I - BA$.

**Setup**: Let $A$ be $n \times m$ and $B$ be $m \times n$. Consider three block matrices, each $(n+m) \times (n+m)$:

$$L_1 = \begin{pmatrix} I_n & -A \\ 0 & I_m \end{pmatrix}, \quad M = \begin{pmatrix} I_n & A \\ B & I_m \end{pmatrix}, \quad L_2 = \begin{pmatrix} I_n & 0 \\ -B & I_m \end{pmatrix}$$

::: proposition
**Identity 1**

$$L_1 \cdot M \cdot L_2 = \begin{pmatrix} I_n - AB & 0 \\ 0 & I_m \end{pmatrix}$$
:::

**Verification** (just matrix multiplication):

**Step 1**: $L_1 \cdot M$:

$$\begin{pmatrix} I & -A \\ 0 & I \end{pmatrix}\begin{pmatrix} I & A \\ B & I \end{pmatrix} = \begin{pmatrix} I - AB & 0 \\ B & I \end{pmatrix}$$

**Step 2**: multiply by $L_2$:

$$\begin{pmatrix} I-AB & 0 \\ B & I \end{pmatrix}\begin{pmatrix} I & 0 \\ -B & I \end{pmatrix} = \begin{pmatrix} I-AB & 0 \\ 0 & I \end{pmatrix} \quad \checkmark$$

::: proposition
**Identity 2** (swap roles of $A$ and $B$)

$$L_2 \cdot M \cdot L_1 = \begin{pmatrix} I_n & 0 \\ 0 & I_m - BA \end{pmatrix}$$
:::

**Verification** (exercise for students, same computation):

$L_2 \cdot M = \begin{pmatrix} I & A \\ 0 & I - BA \end{pmatrix}$, then multiply by $L_1$ on the right. ✓

::: attention
**Key Observation**

Both $L_1$ and $L_2$ are **invertible**: their inverses are

$$L_1^{-1} = \begin{pmatrix} I & A \\ 0 & I \end{pmatrix}, \qquad L_2^{-1} = \begin{pmatrix} I & 0 \\ B & I \end{pmatrix}$$

(Verify: $L_1 L_1^{-1} = I$ by direct multiplication.)

The identities say: **the same matrix $M$ is sandwiched between invertible factors to produce either $I-AB$ or $I-BA$ (up to block diagonal placement)**.
:::

::: proposition
**Consequence: $I - AB$ invertible $\iff$ $I - BA$ invertible**

From Identity 1: $\begin{pmatrix}I-AB & 0 \\ 0 & I\end{pmatrix}$ is the product of $L_1$, $M$, $L_2$.

- This product is invertible $\iff$ all three factors are invertible $\iff$ $M$ is invertible (since $L_1, L_2$ are always invertible).

From Identity 2: $\begin{pmatrix}I & 0 \\ 0 & I-BA\end{pmatrix}$ is the product of $L_2$, $M$, $L_1$.

- This product is invertible $\iff$ $M$ is invertible (same $M$!).

Now, the block diagonal $\begin{pmatrix}I-AB & 0 \\ 0 & I\end{pmatrix}$ is invertible $\iff$ $I-AB$ is invertible. (Its inverse is $\begin{pmatrix}(I-AB)^{-1} & 0 \\ 0 & I\end{pmatrix}$.)

Similarly, $\begin{pmatrix}I & 0 \\ 0 & I-BA\end{pmatrix}$ is invertible $\iff$ $I-BA$ is invertible.

Therefore:

$$I - AB \text{ invertible} \iff M \text{ invertible} \iff I - BA \text{ invertible} \quad \square$$
:::

::: example
**Example**

$A = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ ($2 \times 1$), $B = \begin{pmatrix} 3 & 1 \end{pmatrix}$ ($1 \times 2$).

$AB = \begin{pmatrix} 3 & 1 \\ 6 & 2 \end{pmatrix}$ ($2 \times 2$), so $I_2 - AB = \begin{pmatrix} -2 & -1 \\ -6 & -1 \end{pmatrix}$, rank 2 → invertible ✓

$BA = (3 \cdot 1 + 1 \cdot 2) = (5)$ ($1 \times 1$), so $I_1 - BA = (-4)$ → invertible ✓

Both invertible, as predicted. ✓
:::

::: remark
**What if we replace $I - AB$ by $\lambda I - AB$?**

Just replace $A$ by $\frac{1}{\lambda}A$ (for $\lambda \neq 0$). Then:

$$\lambda I - AB = \lambda\left(I - \frac{1}{\lambda}AB\right) \text{ invertible} \iff I - \frac{1}{\lambda}AB \text{ invertible} \iff I - BA\frac{1}{\lambda} \text{ invertible} \iff \lambda I - BA \text{ invertible}$$

So: **$\lambda I - AB$ and $\lambda I - BA$ are invertible for the same values of $\lambda$**. This will be important when we study eigenvalues in Chapter 5!
:::

---

## Topic: Left and Right Inverses (20 min)

### Learning Goal

Students understand that left inverses exist for thin full-rank matrices, are **not unique**, and the choice of left inverse corresponds to a choice of **subspace complement**.

### Suggested Approach

#### Step 1: When Do Inverses Exist? (3 min)

::: attention
**Key Principle**

A **left inverse** of $U$ is a matrix $U_L$ such that $U_L U = I$.

**Left inverse requires left cancelable**: If $U$ is not left cancelable, there exist $X \neq Y$ with $UX = UY$. But if a left inverse $U_L$ existed, then $X = U_L UX = U_L UY = Y$ — contradiction.

Similarly, a **right inverse** of $V$ (i.e., $VV_R = I$) requires $V$ to be right cancelable.

**Summary**:
- Left inverse exists → $U$ must be left cancelable (rank = columns), typically **thin full rank**
- Right inverse exists → $V$ must be right cancelable (rank = rows), typically **fat full rank**
- Thin (not square) → has left inverse but **no right inverse** (since $\operatorname{Col}(UX) \subseteq \operatorname{Col}(U) \subsetneq \mathbb{R}^m$, so $UX = I_m$ is impossible)
- Fat (not square) → has right inverse but **no left inverse** (dual argument)
:::

#### Step 2: Constructing a Left Inverse (5 min)

::: proposition
**Construction**

Let $U$ be $m \times r$ with rank $r$. Choose **any** $r \times m$ matrix $V$ such that $VU$ is invertible. Then:

$$U_L = (VU)^{-1}V$$

is a left inverse of $U$.
:::

**Verification**: $U_L U = (VU)^{-1}V \cdot U = (VU)^{-1}(VU) = I_r$. ✓

**When is $VU$ invertible?** By the rank formula for $VU$: $\operatorname{rank}(VU) = r \iff \operatorname{Null}(V) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$.

So we just need $V$ whose null space doesn't overlap with $\operatorname{Col}(U)$.

::: example
**Example**

$U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ ($3 \times 2$, rank 2).

**Choice 1**: $V_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.

$V_1 U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2$ (already invertible!)

$U_{L_1} = (I_2)^{-1} V_1 = V_1 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$

Check: $U_{L_1} U = I_2$ ✓. Note: $\operatorname{Null}(U_{L_1}) = \operatorname{span}\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}\right\}$.

**Choice 2**: $V_2 = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \end{pmatrix}$.

$V_2 U = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$, $(V_2 U)^{-1} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$

$U_{L_2} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \end{pmatrix}$

Check: $U_{L_2} U = \begin{pmatrix} 0+0 & -1+1 \\ -1+0 & 0+1\end{pmatrix} = I_2$ ✓. Note: $\operatorname{Null}(U_{L_2}) = \operatorname{span}\left\{\begin{pmatrix}1\\1\\1\end{pmatrix}\right\}$.

**Two different left inverses!** They differ because they have different null spaces.
:::

#### Step 3: Uniqueness Given Null Space (7 min)

The example above shows: different null spaces → different left inverses. Is this the **only** source of non-uniqueness?

::: proposition
**Theorem: Unique Left Inverse Given Complement**

Let $U$ be $m \times r$ with rank $r$. Let $W$ be a subspace of $\mathbb{R}^m$ that is a **complement** of $\operatorname{Col}(U)$, meaning:

1. $\operatorname{Col}(U) \cap W = \{\mathbf{0}\}$ (no overlap)
2. Every vector in $\mathbb{R}^m$ can be written as $\mathbf{v} + \mathbf{w}$ with $\mathbf{v} \in \operatorname{Col}(U)$, $\mathbf{w} \in W$

Then there is **exactly one** left inverse $U_L$ with $\operatorname{Null}(U_L) = W$.
:::

**Proof**:

Suppose $U_1$ and $U_2$ are two left inverses of $U$ with the same null space $W$.

Then $(U_1 - U_2)U = I - I = 0$.

Take any $\mathbf{x} \in \mathbb{R}^m$ and decompose it: $\mathbf{x} = \mathbf{v} + \mathbf{w}$ where $\mathbf{v} \in \operatorname{Col}(U)$ and $\mathbf{w} \in W$.

**On $\operatorname{Col}(U)$**: Write $\mathbf{v} = U\mathbf{c}$ for some $\mathbf{c}$. Then:
$$U_1 \mathbf{v} = U_1 U\mathbf{c} = I\mathbf{c} = \mathbf{c} = U_2 U\mathbf{c} = U_2 \mathbf{v}$$

**On $W$**: Since both have null space $W$:
$$U_1 \mathbf{w} = \mathbf{0} = U_2 \mathbf{w}$$

**Combine**: $U_1 \mathbf{x} = U_1(\mathbf{v} + \mathbf{w}) = \mathbf{c} + \mathbf{0} = U_2(\mathbf{v} + \mathbf{w}) = U_2 \mathbf{x}$.

This holds for every $\mathbf{x}$, so $U_1 = U_2$. ∎

::: attention
**One-to-One Correspondence**

$$\boxed{\text{Left inverses of } U \quad \longleftrightarrow \quad \text{Complements of } \operatorname{Col}(U)}$$

Each complement $W$ determines exactly one left inverse (with null space $W$). Different complements give different left inverses.
:::

#### Step 4: The Moore-Penrose Choice (5 min)

Among all complements of $\operatorname{Col}(U)$, there is one **canonical** choice: the **orthogonal complement**.

From Lecture 6: $\operatorname{Col}(U) \perp \operatorname{Null}(U^T)$, and their dimensions add up: $r + (m-r) = m$. So $\operatorname{Null}(U^T)$ is a complement of $\operatorname{Col}(U)$ — the **perpendicular** one.

::: proposition
**The Moore-Penrose Left Inverse**

The unique left inverse of $U$ with null space $\operatorname{Null}(U^T)$ is:

$$U^+ = (U^T U)^{-1} U^T$$

This is called the **(Moore-Penrose) pseudoinverse** of $U$.
:::

**Why $U^T U$ is invertible**: From the rank formula, $\operatorname{rank}(U^T U) = r - \dim(\operatorname{Null}(U^T) \cap \operatorname{Col}(U))$. But $\operatorname{Col}(U) \perp \operatorname{Null}(U^T)$ (Lecture 6), so $\operatorname{Null}(U^T) \cap \operatorname{Col}(U) = \{\mathbf{0}\}$. Therefore $\operatorname{rank}(U^T U) = r$, and $U^T U$ is invertible.

**Verify it's a left inverse**: $U^+ U = (U^T U)^{-1} U^T U = I_r$ ✓

**Verify null space**: $U^+ \mathbf{w} = (U^T U)^{-1} U^T \mathbf{w}$. If $\mathbf{w} \in \operatorname{Null}(U^T)$, then $U^T \mathbf{w} = \mathbf{0}$, so $U^+ \mathbf{w} = \mathbf{0}$. Therefore $\operatorname{Null}(U^T) \subseteq \operatorname{Null}(U^+)$. Since both have dimension $m - r$ (by cross-filling counting), they are equal. ✓

::: example
**Example**

Same $U = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$.

$U^T U = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

$(U^T U)^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$

$U^+ = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \end{pmatrix}$

Check: $U^+ U = \frac{1}{3}\begin{pmatrix}2+0 & 0-1 \\ -1+0 & 0+2\end{pmatrix} = I_2$ ✓

This left inverse is neither $U_{L_1}$ nor $U_{L_2}$ from the previous example — it's the one orthogonal to $\operatorname{Col}(U)$.
:::

---

## Challenging Problem

::: example
**Challenge: Finding a Basis of $\operatorname{Col}(U) \cap \operatorname{Null}(V)$**

**Given**: $U = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ ($4 \times 3$, rank 3), $\quad V = \begin{pmatrix} 1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \end{pmatrix}$ ($2 \times 4$, rank 2)

**Goal**: Find a basis for $\operatorname{Col}(U) \cap \operatorname{Null}(V)$.

**Method** (from the rank formula proof):

**Step 1**: Compute $VU$:
$$VU = \begin{pmatrix} 1 & 0 & -1 & 0 \\ 0 & 1 & 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 & -1 \\ -1 & 0 & 0 \end{pmatrix}$$

**Step 2**: Find $\operatorname{Null}(VU)$ by cross-filling $(VU \mid \mathbf{0})$:

Pivot at $(1,1)$: row $(1, 0, -1)$, column $\begin{pmatrix}1\\-1\end{pmatrix}$.

$R_1 = \frac{1}{1}\begin{pmatrix}1\\-1\end{pmatrix}(1\;\; 0\;\; {-1}) = \begin{pmatrix} 1 & 0 & -1 \\ -1 & 0 & 1\end{pmatrix}$

Remainder: $\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

Pivot at $(2,3)$: gives equation $x_3 = 0$.

From $R_1$: $x_1 - x_3 = 0 \Rightarrow x_1 = x_3 = 0$.

Free variable: $x_2$. So $\operatorname{Null}(VU) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\end{pmatrix}\right\}$.

**Step 3**: Map through $U$:

$$U\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}0\\1\\0\\1\end{pmatrix}$$

**Answer**: $\operatorname{Col}(U) \cap \operatorname{Null}(V) = \operatorname{span}\left\{\begin{pmatrix}0\\1\\0\\1\end{pmatrix}\right\}$.

**Verify**: $\begin{pmatrix}0\\1\\0\\1\end{pmatrix} \in \operatorname{Col}(U)$? Yes, $U\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}0\\1\\0\\1\end{pmatrix}$ ✓

$\begin{pmatrix}0\\1\\0\\1\end{pmatrix} \in \operatorname{Null}(V)$? $V\begin{pmatrix}0\\1\\0\\1\end{pmatrix} = \begin{pmatrix}0\\0\end{pmatrix}$ ✓

**Also**: $\operatorname{rank}(VU) = 3 - 1 = 2$, confirmed by the cross-filling above. ✓
:::

---

## Connections to Future Material

- **Lecture 7–8 (Projections)**: $UU_L$ is a projection ($P^2 = P$). Different left inverses give different projections onto $\operatorname{Col}(U)$. The Moore-Penrose choice gives the **orthogonal** projection.
- **Lecture 8 (Theorem 4.4)**: Full rank square ⟺ invertible — the result referenced in the rank formula topic.
- **Lecture 10 (Constructing Projections)**: The formula $P = B(AB)^{-1}A$ is exactly the left-inverse construction in disguise.
- **Chapter 5 (Eigenvalues)**: The $\lambda I - AB$ / $\lambda I - BA$ equivalence means $AB$ and $BA$ share all nonzero eigenvalues.

---

**Last Updated**: 2026-03-25
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
