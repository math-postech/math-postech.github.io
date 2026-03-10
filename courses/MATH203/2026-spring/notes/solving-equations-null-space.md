# Lecture 5: Solving Linear Equations and Null Space

> **Topics**: §2.1–2.2 — Solving $A\mathbf{x}=\mathbf{b}$ via Cross-Filling, Null Space (Descriptive ↔ Constructive), Existence and Uniqueness
> **Date**: Mar 16–19, 2026

---

## 🎯 Motivation: Why We Need to Solve Equations

### The Two Languages (Recap from Lecture 4)

In Lecture 4, we learned that every subspace can be described in two complementary ways:

| Language | How it works | Example |
|----------|--------------|---------|
| **Descriptive** | List **equations** (constraints) members must satisfy | $\{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$ |
| **Constructive** | Provide **recipe** to generate all members | $\text{span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots\}$ |

**Each language has strengths and weaknesses:**

| | **Descriptive** | **Constructive** |
|---|---|---|
| **Good at** | ✅ **Verification** (checking membership) | ✅ **Generation** (producing members) |
| **Bad at** | ❌ Generation (hard to find examples) | ❌ Verification (hard to check membership) |

**Today's key insight**: **Solving equations helps both languages do what they're bad at!**

---

### Case 1: Column Space (Naturally Constructive)

The column space is **naturally constructive**:

$$\operatorname{Col}(A) = \text{span}\{\text{columns of } A\} = \{A\mathbf{x} : \mathbf{x} \in \mathbb{R}^n\}$$

::: example
**Example: Column space of meals**

$$A = \begin{array}{c|ccc}
 & \text{🥛} & \text{☕} & \text{🍵} \\
\hline
\text{🍃} & 0 & 0 & 2 \\
\text{🍋} & 0 & 0 & 1 \\
\text{🫘} & 0 & 2 & 4 \\
\text{🐄} & 1 & 0 & 1
\end{array}$$

**Constructive description**:
$$\operatorname{Col}(A) = \text{span}\left\{\begin{pmatrix} 0\\0\\0\\1 \end{pmatrix}, \begin{pmatrix} 0\\0\\2\\0 \end{pmatrix}, \begin{pmatrix} 2\\1\\4\\1 \end{pmatrix}\right\}$$

**Generation** (easy ✅): Want a vector in $\operatorname{Col}(A)$? Just pick coefficients:
$$2\begin{pmatrix} 0\\0\\0\\1 \end{pmatrix} + 3\begin{pmatrix} 0\\0\\2\\0 \end{pmatrix} = \begin{pmatrix} 0\\0\\6\\2 \end{pmatrix} \in \operatorname{Col}(A)$$

**Verification** (hard ❌): Is $\mathbf{b} = \begin{pmatrix} 4\\2\\10\\3 \end{pmatrix}$ in $\operatorname{Col}(A)$?

Can't tell by looking! Need to solve: $A\mathbf{x} = \mathbf{b}$
- If solution exists → $\mathbf{b} \in \operatorname{Col}(A)$ ✓
- If no solution → $\mathbf{b} \notin \operatorname{Col}(A)$ ✗

**Solving equations gives constructive description the power to verify!**
:::

---

### Case 2: Null Space (Naturally Descriptive)

The null space is **naturally descriptive**:

$$\operatorname{Null}(A) = \{\mathbf{x} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{0}\}$$

::: example
**Example: Null space of the same matrix**

Using the same matrix $A$ from above.

**Descriptive definition**:
$$\operatorname{Null}(A) = \left\{\mathbf{x} : \begin{pmatrix} 0&0&2\\0&0&1\\0&2&4\\1&0&1 \end{pmatrix}\mathbf{x} = \mathbf{0}\right\}$$

**Verification** (easy ✅): Is $\mathbf{v} = \begin{pmatrix} 0\\1\\-2 \end{pmatrix}$ in $\operatorname{Null}(A)$?

Just compute:
$$A\begin{pmatrix} 0\\1\\-2 \end{pmatrix} = \begin{pmatrix} -4\\-2\\-6\\0 \end{pmatrix} \neq \mathbf{0}$$

Not in null space! ✗ (Easy to check!)

**Generation** (hard ❌): Give me **any** vector in $\operatorname{Null}(A)$...

Staring at equations doesn't help! Need to **solve** $A\mathbf{x} = \mathbf{0}$ to get:
$$\operatorname{Null}(A) = \text{span}\left\{\begin{pmatrix} 0\\2\\-1 \end{pmatrix}\right\}$$

Now generation is easy: $t\begin{pmatrix} 0\\2\\-1 \end{pmatrix}$ for any $t \in \mathbb{R}$.

**Solving equations gives descriptive description the power to generate!**
:::

---

### The Power of Solving Equations: Summary

::: attention
**Why Solving Equations is the Universal Tool**

| Subspace | Natural form | Natural strength | Natural weakness | Solving equations provides |
|----------|-------------|------------------|------------------|---------------------------|
| **Col(A)** | Constructive (span) | ✅ Generation | ❌ Verification | Solve $A\mathbf{x}=\mathbf{b}$ → verify if $\mathbf{b} \in \operatorname{Col}(A)$ |
| **Null(A)** | Descriptive (equations) | ✅ Verification | ❌ Generation | Solve $A\mathbf{x}=\mathbf{0}$ → get basis → generate all solutions |

**Two roles of solving equations**:

1. **Language conversion**:
   - Descriptive → Constructive: Solve $A\mathbf{x} = \mathbf{0}$ to get basis for $\operatorname{Null}(A)$
   - Constructive → Descriptive: Solve left equation $\mathbf{x}^T A = \mathbf{0}$ to describe $\operatorname{Col}(A)$ as $\operatorname{Null}(B)$ (next lecture!)

2. **Complementing each language**:
   - Constructive needs verification → Solve $A\mathbf{x} = \mathbf{b}$ (existence check)
   - Descriptive needs generation → Solve $A\mathbf{x} = \mathbf{0}$ (find basis)
:::

**Today's focus**: Develop a **native cross-filling method** to solve $A\mathbf{x} = \mathbf{b}$, which simultaneously:
- Gives constructive description of $\operatorname{Null}(A)$ (find basis)
- Checks existence: Does $\mathbf{b} \in \operatorname{Col}(A)$?
- Determines uniqueness: Is $\operatorname{Null}(A) = \{\mathbf{0}\}$?
- Finds all solutions when they exist

---

## 1. Null Space: Starting with the Descriptive Definition

### 1.1 Definition

::: definition
**Null Space (Kernel)**

For a matrix $A \in \mathbb{R}^{m \times n}$, the **null space** is:

$$\operatorname{Null}(A) = \{\mathbf{x} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{0}\}$$

**Descriptive language**: "All input combinations that produce zero output."

**Coffee shop**: "All meal combinations requiring zero raw materials."

Also called the **kernel**, denoted $\ker(A)$.
:::

::: proposition
**Null Space is a Subspace**

$\operatorname{Null}(A)$ is a subspace of $\mathbb{R}^n$.

**Quick proof**: Verify the three axioms:
1. $\mathbf{0} \in \operatorname{Null}(A)$ since $A\mathbf{0} = \mathbf{0}$ ✓
2. If $A\mathbf{x}_1 = \mathbf{0}$ and $A\mathbf{x}_2 = \mathbf{0}$, then $A(\mathbf{x}_1 + \mathbf{x}_2) = \mathbf{0}$ ✓
3. If $A\mathbf{x} = \mathbf{0}$, then $A(c\mathbf{x}) = c(A\mathbf{x}) = \mathbf{0}$ ✓
:::

### 1.2 The Problem: We Need Constructive Description

As we saw in the motivation, **descriptive definitions are good at verification but bad at generation**.

::: example
**Example 1.1: The verification-generation gap**

$$A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6
\end{pmatrix}$$

**Descriptive definition**: $\operatorname{Null}(A) = \{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$

**Verification** (easy): Is $\mathbf{v} = \begin{pmatrix} 3 \\ -2 \\ 1 \end{pmatrix}$ in $\operatorname{Null}(A)$?

Check: $A\mathbf{v} = \begin{pmatrix} 1 \cdot 3 + 2 \cdot (-2) + 3 \cdot 1 \\ 2 \cdot 3 + 4 \cdot (-2) + 6 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \end{pmatrix} \neq \mathbf{0}$

Not in null space! ✗

**Generation** (hard): Find **any** non-zero vector in $\operatorname{Null}(A)$...

Random guessing doesn't work! We need a **systematic method**.
:::

::: attention
**The Goal**

Convert from **descriptive** (easy to verify, hard to generate):
$$\operatorname{Null}(A) = \{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$$

to **constructive** (easy to generate, basis):
$$\operatorname{Null}(A) = \text{span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$$

**Method**: Solve the equation $A\mathbf{x} = \mathbf{0}$ using cross-filling!

More generally, we'll develop a method for $A\mathbf{x} = \mathbf{b}$ which handles both null space and column space questions.
:::

---

## 2. The Cross-Filling Method for Solving $A\mathbf{x} = \mathbf{b}$

Now we develop the **native method** for solving linear equations using cross-filling. This method will:
- Give constructive description of null space
- Determine existence and uniqueness of solutions
- Find all solutions when they exist

### 2.1 The Key Idea: Equations from Rank-One Pieces

Recall from Lecture 3: any matrix can be decomposed via cross-filling:

$$A = R_1 + R_2 + \cdots + R_r$$

where each $R_i$ is a **rank-one matrix**.

**Key observation**: For the **augmented matrix** $(A \mid \mathbf{b})$, we can similarly decompose:

$$(A \mid \mathbf{b}) = (R_1 \mid \mathbf{b}_1) + (R_2 \mid \mathbf{b}_2) + \cdots + (R_r \mid \mathbf{b}_r)$$

**Crucial insight**: Since each $(R_i \mid \mathbf{b}_i)$ is rank-one, **all its rows are scalar multiples of each other** — they represent the **same equation**!

::: example
**Example 2.1: Rank-one matrix = one equation**

Consider a rank-one augmented matrix:

$$(R_1 \mid \mathbf{b}_1) = \begin{pmatrix}
2 & 4 & 6 & | & 8 \\
1 & 2 & 3 & | & 4 \\
3 & 6 & 9 & | & 12
\end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 2 & 3 & | & 4 \end{pmatrix}$$

**All three rows represent the same equation**:
- Row 1: $2x_1 + 4x_2 + 6x_3 = 8$ (divide by 2) → $x_1 + 2x_2 + 3x_3 = 4$
- Row 2: $1x_1 + 2x_2 + 3x_3 = 4$
- Row 3: $3x_1 + 6x_2 + 9x_3 = 12$ (divide by 3) → $x_1 + 2x_2 + 3x_3 = 4$

**Same equation!** So one rank-one piece contributes **one independent equation**.
:::

::: attention
**The Strategy**

When we cross-fill $(A \mid \mathbf{b})$:
1. Each rank-one piece $(R_i \mid \mathbf{b}_i)$ gives **one equation**
2. Each successive piece has **fewer variables** (because cross-filling eliminates variables)
3. We get a **sequence of equations with decreasing number of variables**
4. This makes the system **easy to solve** by back-substitution!

**Moreover**: Each equation is a **valid consequence** of the original system.
:::

### 2.2 Why Each Equation is Valid (关键论证)

::: proposition
**Validity of Cross-Filling Equations**

Each equation obtained from a rank-one piece $(R_i \mid \mathbf{b}_i)$ is a **valid consequence** of the original system $A\mathbf{x} = \mathbf{b}$.

**Proof idea**:

When we cross-fill $(A \mid \mathbf{b})$:

$$(A \mid \mathbf{b}) = (R_1 \mid \mathbf{b}_1) + (A_2 \mid \mathbf{b}_2)$$

where $A_2 = A - R_1$ is the remainder.

**Step 1**: The rank-one piece $(R_1 \mid \mathbf{b}_1)$ comes from:
- Selecting a **pivot row $i$** from $A$
- Forming cross pattern from row $i$ and some column $j$

**The row of $(R_1 \mid \mathbf{b}_1)$ is a scalar multiple of the pivot row from the original matrix $A$.**

Therefore, the equation from $(R_1 \mid \mathbf{b}_1)$ is a **scalar multiple of an original equation** → valid! ✓

**Step 2**: When we compute the remainder:

$$(A_2 \mid \mathbf{b}_2) = (A \mid \mathbf{b}) - (R_1 \mid \mathbf{b}_1)$$

Each row of $(A_2 \mid \mathbf{b}_2)$ is a **linear combination** of:
- The corresponding row from $(A \mid \mathbf{b})$ (original equation)
- Minus a multiple of the pivot row (which is valid)

**Linear combinations of valid equations are valid!** ✓

**Step 3**: By induction, all subsequent rank-one pieces $(R_2 \mid \mathbf{b}_2), (R_3 \mid \mathbf{b}_3), \ldots$ are derived from valid equations.

**Conclusion**: Every equation we obtain is a **fact** derived from the original system.
:::

**Physical interpretation**:

When we decompose ingredient requirements, we're not inventing new constraints — we're just **reorganizing** the original requirements into simpler pieces that are easier to work with.

### 2.3 The Complete Algorithm

::: proposition
**Cross-Filling Algorithm for Solving $A\mathbf{x} = \mathbf{b}$**

**Input**: Augmented matrix $(A \mid \mathbf{b})$ where $A$ is $m \times n$

**Step 1: Cross-fill the augmented matrix**

Apply cross-filling to $(A \mid \mathbf{b})$:

$$(A \mid \mathbf{b}) = (R_1 \mid \mathbf{b}_1) + (R_2 \mid \mathbf{b}_2) + \cdots + (R_r \mid \mathbf{b}_r)$$

where $r = \operatorname{rank}(A \mid \mathbf{b})$.

**Step 2: Check each rank-one piece**

For each $(R_i \mid \mathbf{b}_i)$:
- If $R_i \neq 0$: This gives a **valid equation** relating variables
- If $R_i = 0$ but $\mathbf{b}_i \neq 0$: This gives a **contradiction** like $0 = c$ (where $c \neq 0$)

**Step 3: Existence check**

- If **any** $(R_i \mid \mathbf{b}_i)$ has $R_i = 0$ but $\mathbf{b}_i \neq 0$ → **No solution** exists (contradiction)
- If **all** non-zero $R_i$ pieces also have non-zero $\mathbf{b}_i$ → **Solution exists**

Equivalently: **Solution exists** $\iff$ $\operatorname{rank}(A \mid \mathbf{b}) = \operatorname{rank}(A)$

**Step 4: Identify pivot and free variables**

For each rank-one piece $(R_i \mid \mathbf{b}_i)$ where $R_i \neq 0$:
- The piece was formed using a pivot in column $j_i$
- Variable $x_{j_i}$ is a **pivot variable** (can be solved in terms of others)
- Variables in non-pivot columns are **free variables** (can take any value)

**Step 5: Solve for pivot variables**

From each equation $(R_i \mid \mathbf{b}_i)$ (reading any non-zero row):
- Express pivot variable $x_{j_i}$ in terms of free variables
- The equations naturally have **decreasing number of variables**

**Step 6: Write general solution**

$$\mathbf{x} = \mathbf{x}_{\text{particular}} + c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k$$

where:
- $\mathbf{x}_{\text{particular}}$ is a particular solution (set all free variables to 0)
- $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ form a basis for $\operatorname{Null}(A)$ (one per free variable)
- $c_1, \ldots, c_k$ are arbitrary constants (the free variables)

**Step 7: Uniqueness check**

- If there are **no free variables** ($k = 0$) → **Unique solution**
- If there are **free variables** ($k > 0$) → **Infinitely many solutions**
:::

This seems abstract. Let's see detailed examples!

### 2.4 Detailed Example: The Complete Process

::: example
**Example 2.2: Solving a system using cross-filling**

Solve:
$$\begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 2 \\
3 & 6 & 1 & 3
\end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 5 \\ 11 \\ 16 \end{pmatrix}$$

**Step 1: Form augmented matrix**

$$(A \mid \mathbf{b}) = \left[\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 5 \\
2 & 4 & 1 & 2 & 11 \\
3 & 6 & 1 & 3 & 16
\end{array}\right]$$

**Step 2: Cross-fill**

Choose pivot at position $(1,1)$ (entry is 1):

**Cross through pivot**:
- Row 1: $(1, 2, 0, 1 \mid 5)$
- Column 1: $(1, 2, 3)^T$

**Form rank-one piece**:
$$(R_1 \mid \mathbf{b}_1) = \frac{1}{1} \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 2 & 0 & 1 & | & 5 \end{pmatrix}$$

$$= \left[\begin{array}{cccc|c}
1 & 2 & 0 & 1 & 5 \\
2 & 4 & 0 & 2 & 10 \\
3 & 6 & 0 & 3 & 15
\end{array}\right]$$

**Remainder**:
$$(A_2 \mid \mathbf{b}_2) = (A \mid \mathbf{b}) - (R_1 \mid \mathbf{b}_1)$$

$$= \left[\begin{array}{cccc|c}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & 1
\end{array}\right]$$

Continue cross-filling the remainder. Choose pivot at $(2,3)$ (entry is 1):

$$(R_2 \mid \mathbf{b}_2) = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} \begin{pmatrix} 0 & 0 & 1 & 0 & | & 1 \end{pmatrix}$$

$$= \left[\begin{array}{cccc|c}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & 1
\end{array}\right]$$

**Final remainder**: All zeros. Done!

**Summary**:
$$(A \mid \mathbf{b}) = (R_1 \mid \mathbf{b}_1) + (R_2 \mid \mathbf{b}_2)$$

**Step 3: Check existence**

- $(R_1 \mid \mathbf{b}_1)$: $R_1 \neq 0$ and $\mathbf{b}_1 \neq 0$ ✓
- $(R_2 \mid \mathbf{b}_2)$: $R_2 \neq 0$ and $\mathbf{b}_2 \neq 0$ ✓

No contradictions! **Solution exists.** ✓

Also: $\operatorname{rank}(A \mid \mathbf{b}) = 2 = \operatorname{rank}(A)$ ✓

**Step 4: Identify variables**

- Pivot columns: 1, 3 (used as pivots)
- Non-pivot columns: 2, 4
- **Pivot variables**: $x_1, x_3$
- **Free variables**: $x_2, x_4$

**Step 5: Extract equations**

From $(R_1 \mid \mathbf{b}_1)$ (read row 1):
$$1 \cdot x_1 + 2 \cdot x_2 + 0 \cdot x_3 + 1 \cdot x_4 = 5$$
$$\Rightarrow x_1 = 5 - 2x_2 - x_4$$

From $(R_2 \mid \mathbf{b}_2)$ (read row 2 or 3):
$$0 \cdot x_1 + 0 \cdot x_2 + 1 \cdot x_3 + 0 \cdot x_4 = 1$$
$$\Rightarrow x_3 = 1$$

**Step 6: General solution**

Set free variables: $x_2 = s$, $x_4 = t$ (parameters)

Then:
- $x_3 = 1$
- $x_1 = 5 - 2s - t$

$$\boxed{\mathbf{x} = \begin{pmatrix} 5 - 2s - t \\ s \\ 1 \\ t \end{pmatrix} = \begin{pmatrix} 5 \\ 0 \\ 1 \\ 0 \end{pmatrix} + s\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ 0 \\ 1 \end{pmatrix}}$$

**Particular solution** (set $s = t = 0$): $\mathbf{x}_p = (5, 0, 1, 0)^T$

**Null space basis**: $\left\{\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 0 \\ 1 \end{pmatrix}\right\}$

**Step 7: Uniqueness**

Two free variables → **Infinitely many solutions** (2-parameter family)
:::

### 2.5 Reading Equations from Cross-Filling

::: remark
**Quick Method for Reading Solutions**

Once you've cross-filled $(A \mid \mathbf{b})$, you can **directly read** the solution:

1. **Each rank-one piece** $(R_i \mid \mathbf{b}_i)$ corresponds to a pivot column $j_i$
2. **Read any non-zero row** of $(R_i \mid \mathbf{b}_i)$ to get the equation
3. **Solve for** $x_{j_i}$ in terms of non-pivot variables
4. **Back-substitute** from later equations to earlier ones

**Pattern**: Equations naturally have **fewer active variables** as you progress through the cross-filling pieces.
:::

---

## 3. Applications to Specific Cases

Now we apply the general method to specific important cases.

### 3.1 Application 1: Finding Null Space Basis (Constructive Description)

::: proposition
**Finding $\operatorname{Null}(A)$ via Cross-Filling**

To find a basis for $\operatorname{Null}(A)$:

1. Solve $A\mathbf{x} = \mathbf{0}$ using cross-filling on $(A \mid \mathbf{0})$
2. Identify free variables: $x_{j_1}, \ldots, x_{j_k}$
3. For each free variable $x_{j_i}$, create a basis vector:
   - Set $x_{j_i} = 1$
   - Set other free variables to 0
   - Solve for pivot variables
4. The resulting $k$ vectors form a **basis** for $\operatorname{Null}(A)$

**Result**:
$$\operatorname{Null}(A) = \text{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$$

We've converted from **descriptive** to **constructive**! ✓
:::

::: example
**Example 3.1: Null space from Example 2.2**

From Example 2.2, we found:

$$\operatorname{Null}(A) = \text{span}\left\{\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \\ 0 \\ 1 \end{pmatrix}\right\}$$

**Descriptive → Constructive conversion complete!**

**Verification** (easy with descriptive definition):

$$A\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} = -2\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + 1\begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$ ✓

$$A\begin{pmatrix} -1 \\ 0 \\ 0 \\ 1 \end{pmatrix} = -1\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + 1\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$$ ✓

**Dimension**: $\dim(\operatorname{Null}(A)) = 2$
:::

::: example
**Example 3.2: Matrix with trivial null space**

$$A = \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
0 & 0 & 1
\end{pmatrix}$$

Cross-filling $(A \mid \mathbf{0})$:

All three columns are pivot columns → **No free variables**

**General solution**: Only $\mathbf{x} = \mathbf{0}$

$$\operatorname{Null}(A) = \{\mathbf{0}\}$$

**Dimension**: $\dim(\operatorname{Null}(A)) = 0$
:::

### 3.2 Application 2: Existence Criterion

::: theorem
**Existence of Solutions**

The equation $A\mathbf{x} = \mathbf{b}$ has a solution **if and only if**:

$$\boxed{\operatorname{rank}(A \mid \mathbf{b}) = \operatorname{rank}(A)}$$

**Proof via cross-filling**:

Cross-fill $(A \mid \mathbf{b})$ to get:
$$(A \mid \mathbf{b}) = (R_1 \mid \mathbf{b}_1) + \cdots + (R_r \mid \mathbf{b}_r)$$

where $r = \operatorname{rank}(A \mid \mathbf{b})$.

**Case 1**: $\operatorname{rank}(A \mid \mathbf{b}) = \operatorname{rank}(A)$

- This means when we delete the last column: $A = R_1 + \cdots + R_r$ (possibly with some $R_i = 0$)
- But $\operatorname{rank}(A) = r$, so actually **none** of the $R_i$ are zero
- Each $(R_i \mid \mathbf{b}_i)$ gives a valid equation (no contradictions)
- **Solution exists** ✓

**Case 2**: $\operatorname{rank}(A \mid \mathbf{b}) > \operatorname{rank}(A)$

- This means $\operatorname{rank}(A) = r - k$ for some $k \geq 1$
- When we delete the last column, $k$ of the $R_i$ become zero
- But the corresponding $\mathbf{b}_i$ are non-zero (otherwise rank would be lower)
- This gives contradictions: $\mathbf{0} = \mathbf{b}_i \neq \mathbf{0}$
- **No solution** ✗
:::

**Geometric interpretation**:

$$\mathbf{b} \in \operatorname{Col}(A) \iff \operatorname{rank}(A \mid \mathbf{b}) = \operatorname{rank}(A)$$

Adding $\mathbf{b}$ as a column doesn't increase rank $\iff$ $\mathbf{b}$ is already in the span of $A$'s columns.

### 3.3 Application 3: Uniqueness Criterion

::: theorem
**Uniqueness of Solutions**

If $A\mathbf{x} = \mathbf{b}$ has a solution, the solution is **unique** if and only if:

$$\boxed{\operatorname{Null}(A) = \{\mathbf{0}\}}$$

Equivalently: **No free variables** (all columns are pivot columns).

Also equivalently: $\operatorname{rank}(A) = n$ (number of columns).

**Proof**:

Suppose $\mathbf{x}_1$ and $\mathbf{x}_2$ are both solutions. Then:

$$A\mathbf{x}_1 = \mathbf{b} \quad \text{and} \quad A\mathbf{x}_2 = \mathbf{b}$$

Subtracting:
$$A(\mathbf{x}_1 - \mathbf{x}_2) = \mathbf{0}$$

So $\mathbf{x}_1 - \mathbf{x}_2 \in \operatorname{Null}(A)$.

- If $\operatorname{Null}(A) = \{\mathbf{0}\}$, then $\mathbf{x}_1 - \mathbf{x}_2 = \mathbf{0}$, i.e., $\mathbf{x}_1 = \mathbf{x}_2$ → **Unique** ✓
- If $\operatorname{Null}(A) \neq \{\mathbf{0}\}$, take any $\mathbf{v} \in \operatorname{Null}(A)$ with $\mathbf{v} \neq \mathbf{0}$. Then $\mathbf{x}_1 + \mathbf{v}$ is also a solution → **Not unique** ✗
:::

### 3.4 Application 4: Structure of Solution Set

::: theorem
**General Solution = Particular + Null Space**

If $A\mathbf{x} = \mathbf{b}$ has a solution, then **all solutions** have the form:

$$\boxed{\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n}$$

where:
- $\mathbf{x}_p$ is any **particular solution** (one specific solution)
- $\mathbf{x}_n \in \operatorname{Null}(A)$ is **arbitrary**

**Proof**:

($\Rightarrow$) Suppose $\mathbf{x}$ is a solution. Pick any particular solution $\mathbf{x}_p$. Let $\mathbf{x}_n = \mathbf{x} - \mathbf{x}_p$.

Then:
$$A\mathbf{x}_n = A(\mathbf{x} - \mathbf{x}_p) = A\mathbf{x} - A\mathbf{x}_p = \mathbf{b} - \mathbf{b} = \mathbf{0}$$

So $\mathbf{x}_n \in \operatorname{Null}(A)$ and $\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n$ ✓

($\Leftarrow$) Conversely, if $\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n$ where $A\mathbf{x}_p = \mathbf{b}$ and $\mathbf{x}_n \in \operatorname{Null}(A)$:

$$A\mathbf{x} = A(\mathbf{x}_p + \mathbf{x}_n) = A\mathbf{x}_p + A\mathbf{x}_n = \mathbf{b} + \mathbf{0} = \mathbf{b}$$ ✓
:::

**Geometric picture**:

The solution set is a **translated subspace** (affine subspace):
- Start at $\mathbf{x}_p$ (particular solution)
- Add any vector from $\operatorname{Null}(A)$ (a subspace through origin)
- Get a **parallel copy** of $\operatorname{Null}(A)$ shifted to $\mathbf{x}_p$

```
     Solution set = x_p + Null(A)

     ╱──────────────╲
    ╱  Null(A)      ╲   (subspace through origin)
   ╱                 ╲
  •───────────────────•
  0

          ↓ shift by x_p

     ╱──────────────╲
    ╱                ╲   (affine subspace through x_p)
   ╱        x_p       ╲
  •───────────────────•
```

---

## 4. Dimension Formula: Rank-Nullity Theorem (Preview)

From the cross-filling method, we observed:

::: proposition
**Counting Pivot and Free Variables**

When cross-filling an $m \times n$ matrix $A$:
- Number of pivot columns = $\operatorname{rank}(A)$
- Number of free variables = $\dim(\operatorname{Null}(A))$
- Total columns = $n$

Therefore:
$$\boxed{\operatorname{rank}(A) + \dim(\operatorname{Null}(A)) = n}$$

This is called the **Rank-Nullity Theorem**.
:::

**Proof idea**: Every column is either a pivot column or a non-pivot column (contributing to null space basis), so they sum to the total number of columns.

**We'll prove this more rigorously in the next lecture using the four fundamental subspaces.**

::: example
**Example 4.1: Verifying rank-nullity**

From Example 2.2:
- $A$ is $3 \times 4$
- $\operatorname{rank}(A) = 2$ (two pivot columns)
- $\dim(\operatorname{Null}(A)) = 2$ (two free variables)
- Check: $2 + 2 = 4$ ✓
:::

---

## 5. Null Space and Row Space: Orthogonality

### 5.1 The Natural Orthogonality

::: theorem
**Null Space is Perpendicular to Row Space**

$$\operatorname{Null}(A) \perp \operatorname{Row}(A)$$

More precisely: Every vector in $\operatorname{Null}(A)$ is orthogonal to every vector in $\operatorname{Row}(A)$.

**Proof**:

Let $\mathbf{x} \in \operatorname{Null}(A)$ and let $\mathbf{r}_i$ be the $i$-th row of $A$.

By definition of null space: $A\mathbf{x} = \mathbf{0}$

This means:
$$\begin{pmatrix} — \mathbf{r}_1 — \\ — \mathbf{r}_2 — \\ \vdots \\ — \mathbf{r}_m — \end{pmatrix} \mathbf{x} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}$$

The $i$-th component gives: $\mathbf{r}_i \cdot \mathbf{x} = 0$

**So $\mathbf{x}$ is orthogonal to every row of $A$!**

Since $\operatorname{Row}(A) = \text{span}\{\mathbf{r}_1, \ldots, \mathbf{r}_m\}$, and $\mathbf{x}$ is orthogonal to each $\mathbf{r}_i$, it's orthogonal to all linear combinations of them.

Therefore $\mathbf{x} \perp \operatorname{Row}(A)$ ✓
:::

**Physical interpretation**:

If $A$ represents "meals → ingredients", then:
- **Row space**: All possible ingredient combinations that can result from meals
- **Null space**: Meal combinations that produce zero ingredients

**These are perpendicular**: A meal combination producing zero ingredients has nothing in common with actual ingredient requirements!

### 5.2 Geometric Picture

For an $m \times n$ matrix $A$:

```
Input space ℝⁿ splits into two perpendicular subspaces:

    Row(Aᵀ) = Col(A) ⊕ Null(A)

    ℝⁿ = Row(Aᵀ) ⊥ Null(A)
         ↑           ↑
    dim = rank(A)  dim = n - rank(A)
```

This is the foundation of the **four fundamental subspaces**, which we'll explore in detail next week!

---

## 6. Summary: The Complete Picture

::: success
**What We Achieved Today**

**1. Null Space**:
- **Descriptive definition**: $\{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$
- **Constructive description**: $\text{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ (basis from solving)
- **Conversion**: Descriptive → Constructive requires **solving equations**

**2. Cross-Filling Method for $A\mathbf{x} = \mathbf{b}$**:
- Each rank-one piece = one equation
- Equations are **valid** (derived from original system)
- Variables **decrease** with each piece
- **Natural solution** by back-substitution

**3. Existence**: $\operatorname{rank}(A \mid \mathbf{b}) = \operatorname{rank}(A)$ $\iff$ solution exists

**4. Uniqueness**: $\operatorname{Null}(A) = \{\mathbf{0}\}$ $\iff$ solution unique

**5. General Solution**: $\mathbf{x} = \mathbf{x}_p + \mathbf{x}_n$ where $\mathbf{x}_n \in \operatorname{Null}(A)$

**6. Rank-Nullity**: $\operatorname{rank}(A) + \dim(\operatorname{Null}(A)) = n$

**7. Orthogonality**: $\operatorname{Null}(A) \perp \operatorname{Row}(A)$
:::

::: tip
**Conceptual Elevation**

**From Lecture 4**: Column space shows what we **can make** (constructive)

**From Lecture 5**: Null space shows what **makes zero** (descriptive ↔ constructive via solving)

**Together**: These dual perspectives give complete understanding of linear systems!

- **Existence** (can we reach $\mathbf{b}$?) → Column space question
- **Uniqueness** (one solution or many?) → Null space question
- **All solutions** → Structure via particular + null space

**Next lecture**: Four fundamental subspaces and the complete orthogonal decomposition!
:::

---

## 7. Comparison: Cross-Filling vs. Traditional Methods

::: remark
**How This Differs from Textbook Methods**

**Traditional approach** (Gaussian elimination):
1. Use row operations to get RREF (reduced row echelon form)
2. Read solutions from the simplified form
3. **Focus**: Algorithmic procedure

**Our cross-filling approach**:
1. Decompose augmented matrix into rank-one pieces
2. Each piece gives one equation with decreasing variables
3. **Focus**: Understanding structure (why it works, what each piece means)

**Advantages of cross-filling**:
- **Conceptual clarity**: See why each step is valid
- **Natural connection**: Same method for rank, factorization, solving, null space
- **Geometric insight**: Rank-one pieces have clear meaning
- **Flexibility**: Can choose pivots strategically for different purposes

**Both give the same answer!** Cross-filling is the **conceptual lens** for understanding; RREF is a **computational optimization**.
:::

---

## Exercises

### Conceptual Understanding

1. **Descriptive vs. Constructive**:

   (a) Explain why the null space definition $\{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$ is "descriptive"

   (b) Why is finding a basis for null space a "constructive" description?

   (c) What computational step converts descriptive → constructive?

2. **Validity of equations**: Explain in your own words why each equation obtained from a rank-one piece $(R_i \mid \mathbf{b}_i)$ during cross-filling is a valid consequence of the original system.

### Computing Null Space

3. **Find null space basis**: For each matrix, use cross-filling to find a basis for $\operatorname{Null}(A)$:

   (a) $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$

   (b) $A = \begin{pmatrix} 1 & 0 & 2 & 0 \\ 0 & 1 & 3 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$

   (c) $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & 5 \end{pmatrix}$

4. **Verify rank-nullity**: For each matrix in Exercise 3, verify:
   $$\operatorname{rank}(A) + \dim(\operatorname{Null}(A)) = n$$

### Solving Linear Systems

5. **Complete solution via cross-filling**: Solve using cross-filling or show no solution exists:

   (a) $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$

   (b) $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$

   (c) $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \\ 5 \end{pmatrix}$

6. **Existence and uniqueness**: For each system in Exercise 5:

   (a) Check the rank condition for existence

   (b) Determine if the solution (when it exists) is unique

   (c) If not unique, describe the solution set as particular + null space

### Orthogonality

7. **Null space perpendicular to rows**:

   (a) For $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$, find a basis for $\operatorname{Null}(A)$

   (b) Verify that each basis vector is orthogonal to both rows of $A$

   (c) Express this geometrically: what is $\operatorname{Null}(A)$ in $\mathbb{R}^3$?

8. **Dimension formula**: An $m \times n$ matrix has $\operatorname{rank}(A) = r$.

   (a) What is $\dim(\operatorname{Null}(A))$?

   (b) If $m < n$, can the null space be trivial? Why or why not?

   (c) If $m > n$ and $A$ has full rank, what is $\operatorname{Null}(A)$?

### Challenge Problems

9. **Structure of solution sets**:

   (a) Prove that if $A\mathbf{x} = \mathbf{b}$ has solutions, the solution set is never a subspace (unless $\mathbf{b} = \mathbf{0}$)

   (b) What geometric object is the solution set? (Hint: affine subspace)

10. **Null space of products**:

    (a) Prove: $\operatorname{Null}(B) \subseteq \operatorname{Null}(AB)$

    (b) Find an example where the inclusion is strict

    (c) When does equality hold?

11. **Cross-filling vs. RREF**:

    (a) Apply both cross-filling and traditional row reduction to solve:
        $$\begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 3 \\ 3 & 6 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 3 \\ 7 \\ 10 \end{pmatrix}$$

    (b) Compare the intermediate steps. How are the rank-one pieces related to elementary row operations?

12. **Dimension and orthogonality**:

    (a) Prove using rank-nullity that $\dim(\operatorname{Row}(A)) + \dim(\operatorname{Null}(A)) = n$

    (b) Combine with orthogonality to conclude: $\mathbb{R}^n = \operatorname{Row}(A) \oplus \operatorname{Null}(A)$ (orthogonal direct sum)

---

*This lecture established the native cross-filling method for solving linear equations, revealing the deep connection between descriptive and constructive descriptions of subspaces. Next: the four fundamental subspaces and complete orthogonal structure!*
