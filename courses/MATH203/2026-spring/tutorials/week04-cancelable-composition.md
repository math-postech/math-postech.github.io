# Tutorial Suggestions: Week 4 — Composition Properties of Cancelable Matrices

> **For**: Teaching Assistants conducting tutorial sessions (Mar 19, 2026)
> **Related Lectures**: [Lecture 4: Subspace and Linear Independence](../notes/subspace-and-linear-independence.md), [Tutorial 3: Cancellation and Rank](./week03-cancellation-rank.md)
> **Duration**: 50 minutes
> **Prerequisites**: Students know left/right cancelable definitions, rank criteria (rank = columns for left cancel, rank = rows for right cancel), and linear independence

---

## Overview

This tutorial develops the **algebraic properties** of left/right cancelable matrices and shows how these properties generate a rich collection of **linear independence exercises**.

**Key topics**:
1. **Composition properties** — if $A, B$ are left cancelable, then $AB$ is left cancelable (and the dual for right cancelable)
2. **Factorization properties** — if $AB$ is left cancelable, then $B$ must be left cancelable
3. **Applications to linear independence** — using cancelable properties to prove theorems about transformed vectors
4. **Exercise construction** — how to generate practice problems from these properties

**Pedagogical goals**:
- Emphasize that cancelable matrices behave like "one-sided invertible" matrices
- Show the **logical structure**: composition → factorization → applications
- Build intuition for why "injective linear maps preserve linear independence"

---

## Topic 1: Composition Properties (12 min)

### Learning Goal

Students should understand and prove that left cancelable matrices compose (and similarly for right cancelable).

### Suggested Approach

#### Step 1: State the Main Results (3 min)

Present both properties side-by-side to emphasize symmetry:

::: proposition
**Proposition 1.1: Left Cancelable Matrices Compose**

If $A$ and $B$ are both left cancelable, then $AB$ is left cancelable.

**Proof**: We need to show $(AB)P = (AB)Q \Rightarrow P = Q$.

Given $(AB)P = (AB)Q$:
- By associativity: $A(BP) = A(BQ)$
- Since $A$ is left cancelable: $BP = BQ$
- Since $B$ is left cancelable: $P = Q$ ✓
:::

::: proposition
**Proposition 1.2: Right Cancelable Matrices Compose**

If $A$ and $B$ are both right cancelable, then $AB$ is right cancelable.

**Proof**: We need to show $P(AB) = Q(AB) \Rightarrow P = Q$.

Given $P(AB) = Q(AB)$:
- By associativity: $(PA)B = (QA)B$
- Since $B$ is right cancelable: $PA = QA$
- Since $A$ is right cancelable: $P = Q$ ✓
:::

::: attention
**Key Insight**

The proof uses **cancellation twice** — first cancel the "outside" matrix, then cancel the "inside" matrix.

**Pattern**:
- Left cancelable: cancel from left to right ($A$ first, then $B$)
- Right cancelable: cancel from right to left ($B$ first, then $A$)
:::

#### Step 2: Verify with Rank (4 min)

Connect to last week's rank criterion:

::: example
**Example 1.1: Verifying composition with rank**

Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ (3×2 matrix) and $B = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ (2×3 matrix)

**Check**: Are $A, B$ left cancelable?
- $\text{rank}(A) = 2$ = number of columns of $A$ → **Yes**, $A$ is left cancelable ✓
- $\text{rank}(B) = 2$ = number of columns of $B$? Check: columns are $\begin{pmatrix} 2 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}$
  - Column 3 = Column 2, so they're NOT linearly independent
  - Actually $\text{rank}(B) = 2 < 3$ → **No**, $B$ is NOT left cancelable ✗

**Conclusion**: Since $B$ is not left cancelable, we **cannot** apply Proposition 1.1. Indeed:

$$AB = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 3 & 2 & 1 \end{pmatrix}$$

$\text{rank}(AB) = 2 < 3$ columns → $AB$ is **not** left cancelable. ✓

This confirms: composition property **requires both** $A$ and $B$ to be left cancelable.
:::

::: example
**Example 1.2: Successful composition**

Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ (3×2) and $B = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ (2×2)

**Check**:
- $\text{rank}(A) = 2$ = 2 columns → $A$ is left cancelable ✓
- $\text{rank}(B) = 2$ = 2 columns (since $B$ is invertible) → $B$ is left cancelable ✓

**Predict**: By Proposition 1.1, $AB$ should be left cancelable.

**Verify**:
$$AB = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 0 & 3 \\ 2 & 4 \end{pmatrix}$$

Columns of $AB$: $\begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}, \begin{pmatrix} 1 \\ 3 \\ 4 \end{pmatrix}$ are linearly independent.

$\text{rank}(AB) = 2$ = 2 columns → $AB$ is left cancelable ✓
:::

#### Step 3: Extend to Multiple Matrices (5 min)

::: proposition
**Corollary: Composition of Multiple Left Cancelable Matrices**

If $A_1, A_2, \ldots, A_k$ are all left cancelable (and compatible for multiplication), then the product $A_1 A_2 \cdots A_k$ is left cancelable.

**Proof**: Induction using Proposition 1.1.
- Base case: $k=1$ is trivial
- Inductive step: $(A_1 A_2 \cdots A_{k-1}) A_k$ = (left cancelable) · (left cancelable) = left cancelable ✓
:::

::: example
**Example 1.3: Three-matrix product**

If $A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ 3 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ are all left cancelable, then $ABC$ is left cancelable.

(No need to compute the product — the theorem guarantees the result!)
:::

---

## Topic 2: Factorization Properties (10 min)

### Learning Goal

Students should understand that being left cancelable can be **factored out** — if $AB$ is left cancelable, then the "outside factor" $B$ must be left cancelable.

### Suggested Approach

#### Step 1: State the Factorization Theorem (3 min)

::: proposition
**Proposition 2.1: Left Cancelable Factors**

If $AB$ is left cancelable, then $B$ is left cancelable.

**Proof**: We need to show $BP = BQ \Rightarrow P = Q$.

Given $BP = BQ$:
- Multiply both sides on the left by $A$: $A(BP) = A(BQ)$
- By associativity: $(AB)P = (AB)Q$
- Since $AB$ is left cancelable: $P = Q$ ✓

**Contrapositive form**: If $B$ is **not** left cancelable, then $AB$ is **not** left cancelable (for any $A$).
:::

::: proposition
**Proposition 2.2: Right Cancelable Factors**

If $AB$ is right cancelable, then $A$ is right cancelable.

**Proof**: We need to show $PA = QA \Rightarrow P = Q$.

Given $PA = QA$:
- Multiply both sides on the right by $B$: $(PA)B = (QA)B$
- By associativity: $P(AB) = Q(AB)$
- Since $AB$ is right cancelable: $P = Q$ ✓
:::

::: attention
**Pattern to Notice**

- **Left cancelable**: The condition passes to the **right** factor ($AB$ left cancel → $B$ left cancel)
- **Right cancelable**: The condition passes to the **left** factor ($AB$ right cancel → $A$ right cancel)

**Mnemonic**: "Cancel toward the factor — left cancel looks right, right cancel looks left"
:::

#### Step 2: Non-Example (3 min)

::: example
**Example 2.1: What the theorem does NOT say**

If $AB$ is left cancelable, can we conclude that $A$ is left cancelable?

**Answer**: **No!**

**Counterexample**: Let $A = \begin{pmatrix} 1 & 1 \end{pmatrix}$ (1×2 matrix), $B = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (2×1 matrix)

Then:
$$AB = \begin{pmatrix} 1 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \end{pmatrix}$$

$AB$ is 1×1 invertible → $AB$ is left cancelable ✓

But $\text{rank}(A) = 1 < 2$ columns → $A$ is **not** left cancelable ✗

**Lesson**: The factorization property is **directional**. Left cancelable passes to the **right** factor, not the left.
:::

#### Step 3: Combining Composition and Factorization (4 min)

::: example
**Example 2.2: Using both properties**

Suppose $ABC$ is left cancelable. What can we conclude?

**Answer**:
- By Proposition 2.1 (applied to $ABC = (AB) \cdot C$): $C$ is left cancelable ✓
- By Proposition 2.1 (applied to $AB \cdot C$ and using that $C$ is left cancel): Actually, we only know $(AB)$ might not be left cancelable directly...

**Careful!** We can only conclude: $C$ and $BC$ are left cancelable.

**Why?** Apply Proposition 2.1 twice:
1. $ABC$ is left cancel → $C$ is left cancel (factor out from right)
2. $ABC = A(BC)$ is left cancel → $BC$ is left cancel (factor out from right)

But we **cannot** conclude $A$ or $B$ are left cancelable individually!
:::

::: remark
**General Pattern**

If $A_1 A_2 \cdots A_k$ is left cancelable, then:
- **Guaranteed left cancelable**: All "right suffixes" $A_i A_{i+1} \cdots A_k$ for $i = 2, 3, \ldots, k$
- **NOT guaranteed**: Individual matrices $A_1, A_2, \ldots, A_{k-1}$
:::

---

## Topic 3: Applications to Linear Independence (18 min)

### Learning Goal

Students should use cancelable properties to prove standard theorems about how linear transformations interact with linear independence and spanning.

### Suggested Approach

#### Step 1: Main Theorem (5 min)

::: proposition
**Theorem 3.1: Injective Maps Preserve Linear Independence**

If $A$ is left cancelable and $v_1, \ldots, v_k$ are linearly independent, then $Av_1, \ldots, Av_k$ are linearly independent.

**Proof**: Suppose $c_1(Av_1) + \cdots + c_k(Av_k) = 0$.

Rewrite using matrix multiplication:
$$A(c_1 v_1 + \cdots + c_k v_k) = 0 = A \cdot 0$$

Since $A$ is left cancelable (hence $A \cdot P = A \cdot Q \Rightarrow P = Q$):
$$c_1 v_1 + \cdots + c_k v_k = 0$$

Since $v_1, \ldots, v_k$ are linearly independent: $c_1 = \cdots = c_k = 0$ ✓

Therefore $Av_1, \ldots, Av_k$ are linearly independent. ✓
:::

::: attention
**Converse is NOT True**

If $Av_1, \ldots, Av_k$ are linearly independent, we **cannot** conclude $v_1, \ldots, v_k$ are linearly independent.

**Counterexample**: Let $A = \begin{pmatrix} 1 & 0 \end{pmatrix}$, $v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

Then $Av_1 = 1, Av_2 = 1$ → $Av_1 = Av_2$ → NOT linearly independent!

Wait, let me reconsider... Actually if $Av_1, \ldots, Av_k$ are linearly independent, then we need $A$ to be "recovering" the information, which requires a different condition.
:::

#### Step 2: The Reverse Direction (5 min)

::: proposition
**Theorem 3.2: When Linear Independence is Preserved Backward**

If $Av_1, \ldots, Av_k$ are linearly independent, then $v_1, \ldots, v_k$ are linearly independent.

**Proof**: We prove the contrapositive: if $v_1, \ldots, v_k$ are linearly **dependent**, then $Av_1, \ldots, Av_k$ are linearly **dependent**.

If $v_1, \ldots, v_k$ are linearly dependent, then there exist $c_1, \ldots, c_k$ (not all zero) such that:
$$c_1 v_1 + \cdots + c_k v_k = 0$$

Apply $A$ to both sides:
$$c_1(Av_1) + \cdots + c_k(Av_k) = A \cdot 0 = 0$$

Since not all $c_i$ are zero, $Av_1, \ldots, Av_k$ are linearly dependent. ✓
:::

::: remark
**Key Observation**

Theorem 3.2 **does not require $A$ to be left cancelable**! It works for **any** matrix $A$.

**Summary**:
- **Forward** (independent → independent): Requires $A$ left cancelable
- **Backward** (dependent → dependent): Always true
:::

#### Step 3: Combining Both Directions (8 min)

::: proposition
**Theorem 3.3: Equivalence under Left Cancelable Condition**

If $A$ has **linearly independent columns** (i.e., $A$ is left cancelable), then:

$$v_1, \ldots, v_k \text{ are linearly independent} \iff Av_1, \ldots, Av_k \text{ are linearly independent}$$

**Proof**:
- ($\Rightarrow$): By Theorem 3.1 (using $A$ left cancelable)
- ($\Leftarrow$): By Theorem 3.2 (no assumption needed)
:::

::: example
**Example 3.1: Applying the equivalence**

Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 2 & 3 \end{pmatrix}$ and $v_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, v_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$

**Question**: Are $Av_1, Av_2$ linearly independent?

**Solution**:

**Step 1**: Check if $A$ has linearly independent columns.
- Columns: $\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}$ are clearly independent (standard basis extended)
- So $A$ is left cancelable ✓

**Step 2**: Check if $v_1, v_2$ are linearly independent.
- $\begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ are independent (determinant = $1 \cdot 4 - 2 \cdot 3 = -2 \neq 0$) ✓

**Step 3**: By Theorem 3.3, $Av_1, Av_2$ are linearly independent ✓

**Verification** (not necessary, but reassuring):
$$Av_1 = \begin{pmatrix} 1 \\ 2 \\ 8 \end{pmatrix}, \quad Av_2 = \begin{pmatrix} 3 \\ 4 \\ 18 \end{pmatrix}$$

These are independent (check: $3 \cdot 8 = 24 \neq 18 \cdot 1$) ✓
:::

::: example
**Example 3.2: What if $A$ is not left cancelable?**

Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ and $v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$

**Check**:
- $v_1, v_2$ are linearly independent (standard basis) ✓
- But $Av_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, Av_2 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ → $Av_1 = Av_2$ → NOT linearly independent ✗

This confirms: **without** $A$ being left cancelable, Theorem 3.1 fails!
:::

---

## Topic 4: Application to Spanning (10 min)

### Learning Goal

Students should understand the dual property for spanning sets.

### Suggested Approach

#### Step 1: Spanning Under Linear Maps (6 min)

::: proposition
**Theorem 4.1: Surjective Maps Preserve Spanning**

If $A$ is right cancelable (rows are linearly independent, i.e., $A$ is "surjective onto its row space") and $v_1, \ldots, v_k$ span $\mathbb{R}^n$, then $Av_1, \ldots, Av_k$ span the row space of $A$.

**Actually, let me reconsider this statement...**

Better statement:

If $v_1, \ldots, v_k$ span some space that **includes the row space** of $A$, then $Av_1, \ldots, Av_k$ span the row space of $A$.
:::

Actually, let me think about this more carefully. The spanning property is more delicate. Let me present a simpler, correct version:

::: proposition
**Theorem 4.1: Linear Combinations Preserve Spanning**

If $\text{span}(v_1, \ldots, v_k) = \mathbb{R}^n$ (i.e., $v_1, \ldots, v_k$ span the whole space), then for any matrix $A$ (with $n$ columns):

$$\text{span}(Av_1, \ldots, Av_k) = \text{Col}(A) \quad \text{(column space of } A\text{)}$$

**Proof**:

**Step 1**: Show $\text{span}(Av_1, \ldots, Av_k) \subseteq \text{Col}(A)$

Each $Av_i$ is in $\text{Col}(A)$ by definition, so any linear combination is also in $\text{Col}(A)$. ✓

**Step 2**: Show $\text{Col}(A) \subseteq \text{span}(Av_1, \ldots, Av_k)$

Any vector in $\text{Col}(A)$ has the form $Aw$ for some $w \in \mathbb{R}^n$.

Since $v_1, \ldots, v_k$ span $\mathbb{R}^n$, we can write:
$$w = c_1 v_1 + \cdots + c_k v_k$$

Therefore:
$$Aw = A(c_1 v_1 + \cdots + c_k v_k) = c_1(Av_1) + \cdots + c_k(Av_k) \in \text{span}(Av_1, \ldots, Av_k)$$

So $\text{Col}(A) \subseteq \text{span}(Av_1, \ldots, Av_k)$ ✓
:::

::: example
**Example 4.1: Spanning application**

Let $v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (standard basis for $\mathbb{R}^2$)

Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$

**Question**: What is $\text{span}(Av_1, Av_2)$?

**Solution**:

Since $v_1, v_2$ span $\mathbb{R}^2$, by Theorem 4.1:
$$\text{span}(Av_1, Av_2) = \text{Col}(A)$$

Compute:
$$Av_1 = \begin{pmatrix} 1 \\ 3 \\ 5 \end{pmatrix}, \quad Av_2 = \begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}$$

Notice: $Av_2 = 2Av_1$, so $\text{rank}(A) = 1$.

Therefore $\text{span}(Av_1, Av_2) = \text{span}(Av_1) = \text{span}\left\{\begin{pmatrix} 1 \\ 3 \\ 5 \end{pmatrix}\right\}$
:::

#### Step 2: Corollary (4 min)

::: proposition
**Corollary 4.2: Sufficient Condition for Full Column Span**

If $v_1, \ldots, v_k$ span $\mathbb{R}^n$ and $Av_1, \ldots, Av_k$ span $\mathbb{R}^m$ (where $A$ is $m \times n$), then $A$ has **full row rank** (rank = $m$).

**Proof**:

By Theorem 4.1, $\text{span}(Av_1, \ldots, Av_k) = \text{Col}(A)$.

Given that $\text{span}(Av_1, \ldots, Av_k) = \mathbb{R}^m$, we have $\text{Col}(A) = \mathbb{R}^m$.

Therefore $\text{rank}(A) = \dim(\text{Col}(A)) = m$ ✓
:::

---

## Practice Problems for Students

### Problem Set A: Composition and Factorization

**Problem A1**: If $A$ is a $3 \times 5$ matrix with rank 3 and $B$ is a $5 \times 2$ matrix with rank 2, is $AB$ left cancelable? Right cancelable?

**Problem A2**: If $ABC$ is a $4 \times 6$ matrix with rank 4, what can you conclude about $A$, $B$, $C$?

**Problem A3**: Give an example of matrices $A, B$ where $A$ is not left cancelable, $B$ is left cancelable, but $AB$ is left cancelable.

### Problem Set B: Linear Independence

**Problem B1**: Suppose $A$ is a $4 \times 3$ matrix with linearly independent columns. If $v_1, v_2 \in \mathbb{R}^3$ are linearly independent, prove that $Av_1, Av_2$ are linearly independent.

**Problem B2**: Suppose $Av_1, Av_2, Av_3$ are linearly independent. Can you conclude that $v_1, v_2, v_3$ are linearly independent? Prove or give a counterexample.

**Problem B3**: If $A$ has rank 5 and $Av_1, \ldots, Av_k$ are linearly independent, what can you conclude about $v_1, \ldots, v_k$?

### Problem Set C: Spanning

**Problem C1**: If $v_1, v_2, v_3$ span $\mathbb{R}^3$ and $A$ is a $2 \times 3$ matrix, what is $\text{span}(Av_1, Av_2, Av_3)$?

**Problem C2**: Suppose $v_1, \ldots, v_k$ span $\mathbb{R}^4$ and $Av_1, \ldots, Av_k$ span $\mathbb{R}^3$ (where $A$ is $3 \times 4$). What is $\text{rank}(A)$?

---

## Time Management Recommendations

| Topic | Suggested Time | Adjustment Strategy |
|-------|---------------|---------------------|
| Composition properties | 12 min | Essential — show both left and right cases for symmetry |
| Factorization properties | 10 min | Can compress to 7 min by skipping Example 2.2 |
| Linear independence apps | 18 min | **Core content** — do not skip Theorems 3.1, 3.2, 3.3 |
| Spanning applications | 10 min | If short on time, state Theorem 4.1 and assign as reading |

---

## Common Student Mistakes to Address

### Mistake 1: Assuming composition works in reverse

**Symptom**: "If $AB$ is left cancelable, then $A$ and $B$ are both left cancelable"

**Fix**: Emphasize **directionality** — only the right factor inherits left cancelable property.

### Mistake 2: Confusing linear independence directions

**Symptom**: "Since $Av_1, Av_2$ are independent, $v_1, v_2$ must be independent"

**Fix**: Show Example 3.2 to demonstrate this fails without $A$ being left cancelable.

### Mistake 3: Applying theorems without checking hypotheses

**Symptom**: Using Theorem 3.1 without verifying $A$ has independent columns

**Fix**: Before every theorem application, explicitly check: "Does $A$ satisfy the hypothesis?"

---

## Questions to Check Understanding

1. **Composition**: "If $A$ is $3 \times 2$ with rank 2 and $B$ is $2 \times 4$ with rank 2, is $AB$ left cancelable?"
   - Expected answer: Yes (both are left cancelable, so composition is left cancelable)

2. **Factorization**: "If $AB$ is right cancelable, which of $A$ or $B$ must be right cancelable?"
   - Expected answer: $A$ must be right cancelable (left factor inherits right cancelable property)

3. **Linear independence**: "I know $Av_1, Av_2$ are linearly dependent. Can I conclude anything about $v_1, v_2$?"
   - Expected answer: No direct conclusion. But if $v_1, v_2$ were independent and $A$ were left cancelable, we'd have a contradiction. So either $v_1, v_2$ are dependent OR $A$ is not left cancelable.

---

## Materials to Prepare

- [ ] Summary table of composition properties (left vs right cancelable)
- [ ] Summary table of factorization properties (which factor inherits cancelability)
- [ ] Pre-worked Example 3.1 (with explicit matrix computations)
- [ ] Practice problem handout (Problem Sets A, B, C)

---

## Connections to Future Material

- **Fundamental Theorem of Linear Maps** will formalize "injective maps preserve independence, surjective maps preserve spanning"
- **Rank-nullity theorem** will connect rank to kernel dimension
- **Change of basis** will use these properties to show basis vectors map to basis vectors under invertible transformations

---

**Last Updated**: 2026-03-16
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
