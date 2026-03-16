# Tutorial Suggestions: Week 4 — Composition and Decomposition Rules

> **For**: Teaching Assistants conducting tutorial sessions (Mar 19, 2026)
> **Related Lectures**: [Lecture 4: Subspace and Linear Independence](../notes/subspace-and-linear-independence.md), [Tutorial 3: Cancellation and Rank](./week03-cancellation-rank.md)
> **Duration**: 50 minutes
> **Prerequisites**: Students know left/right cancelable definitions, rank criteria (rank = columns ⟺ left cancel, rank = rows ⟺ right cancel)

---

## Overview

Last week we established rank criteria for cancellation. This week we derive two powerful rules — **composition** and **decomposition** — for both left and right cancelable matrices. These two rules become an **exercise generation machine**:

- **Left cancelable** → exercises about **linear independence**
- **Right cancelable** → exercises about **spanning**

**Key topics**:
1. **Composition rule** — left/right cancelable matrices compose (both sides)
2. **Decomposition rule** — left/right cancelable passes to a factor, with contrapositive
3. **Left cancelable applications** — linear independence exercises from composition and decomposition
4. **Right cancelable applications** — spanning exercises from composition and decomposition

**Pedagogical goals**:
- Every exercise is a **one-line proof** citing the appropriate rule
- Left and right are treated **symmetrically** throughout
- Students learn to **recognize** which rule applies, not re-derive from scratch

---

## Topic 1: Composition Rule (8 min)

### Learning Goal

Students understand that left (resp. right) cancelable matrices compose.

### Suggested Approach

Present both rules side-by-side:

::: proposition
**Composition Rule (Left)**

If $A$ and $B$ are both left cancelable, then $AB$ is left cancelable.

**Proof**: Given $(AB)P = (AB)Q$:

$$A(BP) = A(BQ) \xRightarrow{A \text{ left cancel}} BP = BQ \xRightarrow{B \text{ left cancel}} P = Q \quad \checkmark$$
:::

::: proposition
**Composition Rule (Right)**

If $A$ and $B$ are both right cancelable, then $AB$ is right cancelable.

**Proof**: Given $P(AB) = Q(AB)$:

$$(PA)B = (QA)B \xRightarrow{B \text{ right cancel}} PA = QA \xRightarrow{A \text{ right cancel}} P = Q \quad \checkmark$$
:::

::: attention
**Pattern**

- Left composition: cancel **left to right** ($A$ first, then $B$)
- Right composition: cancel **right to left** ($B$ first, then $A$)
:::

::: example
**Example 1.1: Applying the composition rule**

$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ (3×2, rank 2 = 2 columns → left cancelable ✓)

$B = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ (2×2, rank 2 = 2 columns → left cancelable ✓)

By the composition rule: $AB$ is left cancelable. ✓

**No need to compute $AB$!** The rule gives the answer immediately.
:::

::: proposition
**Corollary: Multiple Compositions**

If $A_1, A_2, \ldots, A_k$ are all left cancelable (and compatible for multiplication), then $A_1 A_2 \cdots A_k$ is left cancelable. (By induction on the composition rule.)

Dually for right cancelable.
:::

---

## Topic 2: Decomposition Rule (12 min)

### Learning Goal

Students understand the decomposition rule and its **contrapositive** for instant conclusions.

### Suggested Approach

#### Step 1: State the Decomposition Rules (4 min)

::: proposition
**Decomposition Rule (Left)**

If $AB$ is left cancelable, then $B$ (the **right factor**) is left cancelable.

**Proof**: Given $BP = BQ$:

$$ABP = ABQ \xRightarrow{AB \text{ left cancel}} P = Q \quad \checkmark$$
:::

::: proposition
**Decomposition Rule (Right)**

If $AB$ is right cancelable, then $A$ (the **left factor**) is right cancelable.

**Proof**: Given $PA = QA$:

$$PAB = QAB \xRightarrow{AB \text{ right cancel}} P = Q \quad \checkmark$$
:::

::: attention
**Direction Pattern**

- **Left cancelable**: passes to the **right** factor ($AB$ left cancel → $B$ left cancel)
- **Right cancelable**: passes to the **left** factor ($AB$ right cancel → $A$ right cancel)
:::

#### Step 2: The Contrapositive (4 min)

::: proposition
**Contrapositive Forms**

- If $B$ is **not** left cancelable → $AB$ is **not** left cancelable (for **any** $A$)
- If $A$ is **not** right cancelable → $AB$ is **not** right cancelable (for **any** $B$)

**Warning**: These are **contrapositives** (correct), not negations. The negation "$B$ left cancel ⟹ $AB$ left cancel" is **FALSE**.
:::

::: example
**Example 2.1: Instant conclusion via contrapositive**

$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}$ (3×2), $B = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ (2×3)

**Question**: Is $AB$ left cancelable?

**Answer**: $B$ is $2 \times 3$, so $\text{rank}(B) \leq 2 < 3$ columns. Thus $B$ is **not** left cancelable.

By the **contrapositive of the decomposition rule**: $AB$ is **not** left cancelable. ∎

**One line. No computation of $AB$ needed.**
:::

#### Step 3: What decomposition does NOT say (4 min)

::: example
**Example 2.2: Decomposition is directional**

$AB$ is left cancelable ⟹ $A$ is left cancelable? **No!**

$A = \begin{pmatrix} 1 & 1 \end{pmatrix}$ (1×2), $B = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (2×1).

$AB = (1)$ → left cancelable ✓

But $\text{rank}(A) = 1 < 2$ columns → $A$ is **not** left cancelable ✗

Left cancelable passes to the **right** factor only.
:::

::: remark
**General Pattern for Products**

If $A_1 A_2 \cdots A_k$ is left cancelable:
- **Guaranteed left cancelable**: all right suffixes $A_k$, $A_{k-1}A_k$, ..., $A_2 \cdots A_k$
- **NOT guaranteed**: $A_1, A_2, \ldots, A_{k-1}$ individually

Dually, if $A_1 A_2 \cdots A_k$ is right cancelable:
- **Guaranteed right cancelable**: all left prefixes $A_1$, $A_1 A_2$, ..., $A_1 \cdots A_{k-1}$
- **NOT guaranteed**: $A_2, A_3, \ldots, A_k$ individually
:::

---

## Topic 3: Applications to Linear Independence — Left Cancelable (15 min)

### Learning Goal

Students see that linear independence exercises are **instances** of the composition and decomposition rules applied to the product $A \cdot (v_1 | \cdots | v_k)$.

### Suggested Approach

#### Step 1: The Key Translation (3 min)

::: attention
**Key Observation**

Let $V = (v_1 | v_2 | \cdots | v_k)$ be an $n \times k$ matrix. Then:

$$V \text{ is left cancelable} \iff \text{rank}(V) = k \iff v_1, \ldots, v_k \text{ are linearly independent}$$

Now consider the product $AV = (Av_1 | Av_2 | \cdots | Av_k)$:

$$AV \text{ is left cancelable} \iff Av_1, \ldots, Av_k \text{ are linearly independent}$$

**Every left cancelable statement about $A \cdot V$ translates directly into a linear independence statement!**
:::

#### Step 2: Exercise from Decomposition Rule (4 min)

::: proposition
**Exercise Type 1 (Left Decomposition)**

If $Av_1, \ldots, Av_k$ are linearly independent, then $v_1, \ldots, v_k$ are linearly independent.

**Proof**: $AV$ is left cancelable. By the **decomposition rule**, $V$ (the right factor) is left cancelable. ∎

**Note**: No condition on $A$ is needed!
:::

::: example
**Example 3.1**

Let $A$ be any $5 \times 3$ matrix. If $Av_1, Av_2$ are linearly independent vectors in $\mathbb{R}^5$, then $v_1, v_2$ are linearly independent in $\mathbb{R}^3$.

**One-line proof**: Decomposition rule applied to $A \cdot (v_1 | v_2)$. ∎
:::

#### Step 3: Exercise from Composition Rule (3 min)

::: proposition
**Exercise Type 2 (Left Composition)**

If $A$ has linearly independent columns and $v_1, \ldots, v_k$ are linearly independent, then $Av_1, \ldots, Av_k$ are linearly independent.

**Proof**: $A$ is left cancelable + $V$ is left cancelable → by **composition rule**, $AV$ is left cancelable. ∎
:::

#### Step 4: The Combined Equivalence (5 min)

::: proposition
**Exercise Type 3 (Equivalence = Composition + Decomposition)**

If $A$ has linearly independent columns, then:

$$v_1, \ldots, v_k \text{ linearly independent} \iff Av_1, \ldots, Av_k \text{ linearly independent}$$

**Proof**:
- ($\Rightarrow$): **Composition rule** — $A$ left cancel + $V$ left cancel ⟹ $AV$ left cancel
- ($\Leftarrow$): **Decomposition rule** — $AV$ left cancel ⟹ $V$ (right factor) left cancel ∎

**Note**: The ($\Leftarrow$) direction is always true (decomposition needs no condition on $A$). The ($\Rightarrow$) direction requires $A$ left cancelable (composition needs both factors).
:::

::: example
**Example 3.2: The equivalence in action**

$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 2 & 3 \end{pmatrix}$ has linearly independent columns (rank 2 = 2 columns).

Therefore: $v_1, v_2 \in \mathbb{R}^2$ linearly independent $\iff$ $Av_1, Av_2 \in \mathbb{R}^3$ linearly independent.

Sometimes it's easier to check one side than the other!
:::

::: example
**Example 3.3: Why the ($\Rightarrow$) direction fails without left cancelable**

$A = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ (rank 1 < 2 columns, NOT left cancelable)

$v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ are linearly independent ✓

But $Av_1 = Av_2 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ → NOT linearly independent ✗

Without $A$ left cancelable, composition rule doesn't apply, and the forward direction fails.
:::

---

## Topic 4: Applications to Spanning — Right Cancelable (15 min)

### Learning Goal

Students see that spanning exercises are **instances** of the composition and decomposition rules for **right cancelable**, just as independence exercises come from left cancelable.

### Suggested Approach

#### Step 1: The Key Translation (3 min)

::: attention
**Key Observation**

Let $V = (v_1 | v_2 | \cdots | v_k)$ be an $n \times k$ matrix. Then:

$$V \text{ is right cancelable} \iff \text{rank}(V) = n \iff v_1, \ldots, v_k \text{ span } \mathbb{R}^n$$

(Right cancelable means rank = number of **rows** = $n$, which means columns span the entire space $\mathbb{R}^n$.)

**Comparison**:
- $V$ **left** cancelable (rank = $k$ = columns) ⟺ $v_i$ **linearly independent**
- $V$ **right** cancelable (rank = $n$ = rows) ⟺ $v_i$ **span** $\mathbb{R}^n$
:::

#### Step 2: Exercise from Decomposition Rule (5 min)

::: proposition
**Exercise Type 4 (Right Decomposition)**

If some linear combinations of $v_1, \ldots, v_k$ span $\mathbb{R}^n$, then $v_1, \ldots, v_k$ themselves span $\mathbb{R}^n$.

**Setup**: Write $w_j = c_{j1}v_1 + \cdots + c_{jk}v_k$ for $j = 1, \ldots, s$.

In matrix form: $(w_1 | \cdots | w_s) = (v_1 | \cdots | v_k) \cdot C = V \cdot C$

where $C$ is the $k \times s$ coefficient matrix.

**Proof**: $VC$ is right cancelable (the $w_j$ span $\mathbb{R}^n$). By the **decomposition rule**, $V$ (the **left** factor) is right cancelable. So $v_1, \ldots, v_k$ span $\mathbb{R}^n$. ∎

**Note**: No condition on the coefficient matrix $C$ is needed!
:::

::: example
**Example 4.1**

Let $w_1 = 2v_1 + 3v_2$, $w_2 = v_1 - v_2$, $w_3 = v_2 + 4v_3$.

If $w_1, w_2, w_3$ span $\mathbb{R}^n$, then $v_1, v_2, v_3$ span $\mathbb{R}^n$.

**One-line proof**: $(w_1|w_2|w_3) = (v_1|v_2|v_3) \cdot C$. Right decomposition: $V$ (left factor) is right cancelable. ∎
:::

#### Step 3: Exercise from Composition Rule (3 min)

::: proposition
**Exercise Type 5 (Right Composition)**

If $A$ is $m \times n$ with linearly independent rows (rank $= m$, i.e., $A$ is right cancelable) and $v_1, \ldots, v_k$ span $\mathbb{R}^n$, then $Av_1, \ldots, Av_k$ span $\mathbb{R}^m$.

**Proof**: $A$ is right cancelable + $V$ is right cancelable → by **composition rule**, $AV$ is right cancelable. ∎
:::

::: example
**Example 4.2**

$A = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \end{pmatrix}$ (2×3, rank 2 = 2 rows → right cancelable ✓)

If $v_1, v_2, v_3, v_4 \in \mathbb{R}^3$ span $\mathbb{R}^3$, then $Av_1, Av_2, Av_3, Av_4$ span $\mathbb{R}^2$.

**One-line proof**: Right composition rule. ∎
:::

#### Step 4: Another Exercise from Decomposition (4 min)

::: proposition
**Exercise Type 6 (Right Decomposition applied to $A \cdot V$)**

If $Av_1, \ldots, Av_k$ span $\mathbb{R}^m$ (where $A$ is $m \times n$), then $A$ has linearly independent rows (rank $= m$, i.e., $A$ is right cancelable).

**Proof**: $AV$ is right cancelable. By the **decomposition rule**, $A$ (the **left** factor) is right cancelable. ∎
:::

::: example
**Example 4.3: The decomposition catches impossibility**

$A$ is a $3 \times 2$ matrix. Can $Av_1, Av_2$ span $\mathbb{R}^3$?

By Exercise Type 6, that would require $A$ to be right cancelable: rank$(A) = 3$. But $A$ is $3 \times 2$, so rank$(A) \leq 2 < 3$. **Impossible!**

(Equivalently: by contrapositive, $A$ not right cancelable ⟹ $AV$ not right cancelable.)
:::

---

## Summary: The Exercise Generation Machine

::: attention
**The Complete Pattern**

| Rule | Left Cancelable (↔ **Independence**) | Right Cancelable (↔ **Spanning**) |
|------|---------------------------------------|-----------------------------------|
| **Decomposition** | $Av_i$ indep ⟹ $v_i$ indep | lin. comb. of $v_i$ span $\mathbb{R}^n$ ⟹ $v_i$ span $\mathbb{R}^n$ |
| **Composition** | $A$ col indep + $v_i$ indep ⟹ $Av_i$ indep | $A$ row indep + $v_i$ span $\mathbb{R}^n$ ⟹ $Av_i$ span $\mathbb{R}^m$ |
| **Equivalence** | $A$ col indep: $v_i$ indep ⟺ $Av_i$ indep | — |

Each proof is **one line**: cite the appropriate rule. ∎
:::

---

## Practice Problems

### Problem Set A: Rank of Matrix Products

**A1**: Let $A$ be $3 \times 2$ with rank 2 and $B$ be $2 \times 4$ with rank 2. Are the columns of $AB$ linearly independent? Do the rows of $AB$ span $\mathbb{R}^3$?

**A2**: $B$ is a $4 \times 7$ matrix. Can the columns of $AB$ be linearly independent for any choice of $A$?

**A3**: Suppose $A$ is $m \times n$ and $B$ is $n \times p$. If $\text{rank}(A) = n$ and $\text{rank}(B) = p$, prove $\text{rank}(AB) = p$.

**A4**: Suppose $\text{rank}(AB) = m$ (number of rows of $A$). Prove $\text{rank}(A) = m$.

**A5**: The columns of $ABC$ are linearly independent. What can you conclude about $\text{rank}(C)$? About $\text{rank}(BC)$? Can you conclude anything about $\text{rank}(A)$ or $\text{rank}(B)$ individually?

### Problem Set B: Linear Independence

**B1**: If $Av_1, Av_2, Av_3$ are linearly independent, prove $v_1, v_2, v_3$ are linearly independent.

**B2**: Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 1 & 1 \end{pmatrix}$. Prove: $v_1, v_2 \in \mathbb{R}^3$ are linearly independent $\iff$ $Av_1, Av_2 \in \mathbb{R}^4$ are linearly independent.

**B3**: Let $A$ be $m \times n$ with $\text{rank}(A) = n$ and $B$ be $n \times p$ with $\text{rank}(B) = p$. Prove: $v_1, \ldots, v_k$ linearly independent $\iff$ $ABv_1, \ldots, ABv_k$ linearly independent.

**B4**: Let $A$ be $5 \times 3$ with rank 2. Give an example where $v_1, v_2$ are linearly independent but $Av_1, Av_2$ are linearly dependent. Why doesn't the composition rule apply?

### Problem Set C: Spanning

**C1**: Let $w_1 = v_1 + v_2$, $w_2 = v_2 + v_3$, $w_3 = v_1 + v_3$. If $w_1, w_2, w_3$ span $\mathbb{R}^3$, prove $v_1, v_2, v_3$ span $\mathbb{R}^3$.

**C2**: Let $A$ be $3 \times 5$ with rank 3. If $v_1, \ldots, v_7$ span $\mathbb{R}^5$, prove $Av_1, \ldots, Av_7$ span $\mathbb{R}^3$.

**C3**: Vectors $w_1, w_2, w_3$ are linear combinations of $v_1, v_2 \in \mathbb{R}^3$. Can $w_1, w_2, w_3$ span $\mathbb{R}^3$? Explain why or why not.

**C4**: If $Av_1, \ldots, Av_k$ span $\mathbb{R}^m$ (where $A$ is $m \times n$), prove $\text{rank}(A) = m$. Give an example showing that $v_1, \ldots, v_k$ need not span $\mathbb{R}^n$.

---

## Time Management Recommendations

| Topic | Suggested Time | Adjustment Strategy |
|-------|---------------|---------------------|
| Composition rule | 8 min | Can compress to 5 min by showing left version, stating right as dual |
| Decomposition rule | 12 min | **Essential** — contrapositive and directionality are key |
| Independence apps (left) | 15 min | **Core** — show all three exercise types with key translation |
| Spanning apps (right) | 15 min | **Core** — parallel structure to independence, show decomposition and composition |

---

## Common Student Mistakes to Address

### Mistake 1: Confusing contrapositive with negation

**Symptom**: "If $B$ is left cancelable, then $AB$ is left cancelable"

**Fix**: That's the **negation** (FALSE). The **contrapositive** reverses AND negates:
- Original: $AB$ left cancel ⟹ $B$ left cancel
- Contrapositive: $B$ NOT left cancel ⟹ $AB$ NOT left cancel ✓
- Negation (WRONG): $B$ left cancel ⟹ $AB$ left cancel ✗

### Mistake 2: Applying decomposition in the wrong direction

**Symptom**: "$AB$ left cancel ⟹ $A$ left cancel"

**Fix**: Left cancel passes to the **right** factor. Draw on the board:
- Left cancel: $AB \xrightarrow{\text{passes to}} B$ (right factor)
- Right cancel: $AB \xrightarrow{\text{passes to}} A$ (left factor)

### Mistake 3: Re-deriving instead of citing the rule

**Symptom**: Proving "$Av_i$ independent ⟹ $v_i$ independent" from scratch using contrapositive of dependence, instead of just citing the decomposition rule.

**Fix**: The whole point of composition/decomposition is that exercises become **one-line proofs**. Recognize the pattern: $A \cdot (v_1|\cdots|v_k)$, decomposition rule, done.

---

## Questions to Check Understanding

1. **Rank of product**: "If $\text{rank}(AB) = m$ (number of rows of $A$), what can you say about $\text{rank}(A)$? About $\text{rank}(B)$?"
   - Expected: $\text{rank}(A) = m$ (decomposition rule). Nothing guaranteed about $\text{rank}(B)$.

2. **Rank constraint**: "$B$ is a $4 \times 7$ matrix. Can $\text{rank}(AB) = 7$ (= number of columns of $AB$)?"
   - Expected: No — $\text{rank}(B) \leq 4 < 7$, so the columns of $B$ are not linearly independent. By decomposition, the columns of $AB$ can't be independent either.

3. **Independence**: "$Av_1, Av_2$ are linearly independent. Are $v_1, v_2$ independent? Do I need any condition on $A$?"
   - Expected: Yes they are, by decomposition rule. No condition on $A$ needed.

4. **Spanning**: "Vectors $w_1, w_2, w_3$ are linear combinations of $v_1, v_2 \in \mathbb{R}^3$ and span $\mathbb{R}^3$. Do $v_1, v_2$ span $\mathbb{R}^3$?"
   - Expected: Decomposition would force $\text{rank}(v_1|v_2) = 3$. But $(v_1|v_2)$ is $3 \times 2$, so rank $\leq 2 < 3$. **Contradiction** — the hypothesis is impossible! Two vectors can never have linear combinations spanning $\mathbb{R}^3$.

---

## Materials to Prepare

- [ ] Summary table: composition and decomposition rules (left AND right)
- [ ] Arrow diagram showing which factor inherits cancelability
- [ ] Pre-worked Example 3.2 (equivalence for independence)
- [ ] Pre-worked Example 4.1 (spanning from decomposition)
- [ ] Practice problem handout (Problem Sets A, B, C)

---

## Connections to Future Material

- **Rank-nullity theorem** will connect rank to kernel dimension
- **Four fundamental subspaces** will use row/column independence systematically
- **Change of basis**: invertible matrices are both left and right cancelable → independence and spanning both preserved

---

**Last Updated**: 2026-03-16
**Contact**: For questions about these suggestions, reach out to the course instructor or head TA.
