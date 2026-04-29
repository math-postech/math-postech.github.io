# Lecture 15: Spectral Decomposition

> **Topics**: §5.1–5.4 — Eigenvalues and Eigenvectors, Lagrange Interpolation as Generalized Remainder Theorem, Spectral Decomposition $A = \sum \lambda_i P_i$, Value Table Method, Compatible Projections from Value Tables, Eigenvectors from Projection Columns
> **Date**: Apr 28 – May 2, 2026

---

## Overview

In Lecture 14 we learned the **Cayley–Hamilton Theorem**: the characteristic polynomial $\det(tI - A)$ annihilates $A$. That let us reduce $A^2$ to a linear combination of $A$ and $I$ — but it didn't give us a **closed formula** for $A^n$.

This lecture delivers that formula. We will:

1. See why $A^n$ matters — recurrences, probability, economics all reduce to matrix powers
2. Name the key ingredients: **eigenvalues** and **eigenvectors**
3. Build the **Lagrange interpolation** tool by generalizing Lecture 14's Remainder Theorem
4. Combine Lagrange + Cayley–Hamilton to obtain the **spectral decomposition** $A = \lambda_1 P_1 + \cdots + \lambda_m P_m$
5. Develop the **value table method** — a way to compute $g(A)$ for any polynomial $g$ without any matrix multiplication

---

## 1. Why Do We Need $A^n$?

### 1.1 Three Problems, One Shape

**Recurrence.** Consider the sequence $a_0 = 0$, $a_1 = 1$, $a_{n+1} = 3a_n - 2a_{n-1}$. The first few terms: $0, 1, 3, 7, 15, 31, \ldots$ What is $a_{100}$?

Rewrite as a matrix recurrence:

$$\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = \underbrace{\begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}}_{B} \begin{pmatrix} a_n \\ a_{n-1} \end{pmatrix} \qquad \implies \qquad \begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = B^n \begin{pmatrix} 1 \\ 0 \end{pmatrix}$$

To answer the question, we need $B^{100}$.

**Probability.** Flip a coin repeatedly. Heads → walk 3 meters. Tails → walk 2 meters. What is the probability of landing exactly on the $n$-meter mark? This satisfies a recurrence $p_n = \tfrac{1}{2} p_{n-2} + \tfrac{1}{2} p_{n-3}$, which again reduces to $A^n$.

**Money sharing.** Three cousins pool half their money each round and split equally. After $n$ rounds: $\vec{m}_n = M^n \vec{m}_0$. Does everyone end up with the same amount as $n \to \infty$?

All three problems reduce to computing $A^n$.

### 1.2 Lecture 14's Method Breaks at Scale

Lecture 14 taught us $A^2 = 5A + 2I$ for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. But:

$$A^3 = 27A + 10I, \qquad A^4 = 145A + 54I, \qquad A^5 = 781A + 290I, \qquad \ldots$$

Each power requires the previous power. Want $A^{100}$? Repeat 99 times. This is bookkeeping, not a formula.

### 1.3 The Dream: Projections Make Powers Trivial

From Lectures 7–10, we know projections satisfy $P^2 = P$, so $P^n = P$ for all $n \geq 1$.

What if we could decompose $A$ into projections?

$$A = \underbrace{2}_{\lambda_1} \cdot P_1 + \underbrace{3}_{\lambda_2} \cdot P_2$$

Then:

$$A^n = 2^n \cdot \underbrace{P_1^n}_{= P_1} + 3^n \cdot \underbrace{P_2^n}_{= P_2} = \boxed{2^n P_1 + 3^n P_2}$$

A **closed formula**. Plug in $n = 100$? Done.

::: success
**Slogan**: Projections are the simplest matrices. To understand any matrix, decompose it into projections.
:::

---

## 2. Eigenvalues and Eigenvectors

### 2.1 Some Vectors Are Special

Multiply three vectors by $M = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$:

- $\vec{v}_1 = (1, 0)$: stays on the same line, stretched by $2$
- $\vec{v}_2 = (1, -1)$: stays on the same line, unchanged (multiplied by $1$)
- $\vec{u} = (1, 1) \to (3, 1)$: **direction changed** — not special

The first two vectors just get **scaled**. No rotation, no shearing.

### 2.2 Definition

::: proposition
**Definition (Eigenvalue and Eigenvector)**

A **non-zero** vector $\vec{v}$ is an **eigenvector** of $A$ for **eigenvalue** $\lambda$ if

$$A\vec{v} = \lambda\vec{v}$$
:::

In words: $A$ acts on $\vec{v}$ by just **scaling**.

| $\lambda$ | Effect |
|---|---|
| $\lambda > 1$ | vector gets **stretched** |
| $0 < \lambda < 1$ | vector gets **shrunk** |
| $\lambda = 0$ | vector gets **killed** (sent to $\vec{0}$) |
| $\lambda < 0$ | vector gets **flipped** and scaled |
| $\lambda = 1$ | vector **doesn't move** |

### 2.3 Where Do Eigenvalues Come From?

From Lecture 14: the **characteristic polynomial**

$$\det(tI - A) = (t - \lambda_1)(t - \lambda_2) \cdots (t - \lambda_n)$$

The roots $\lambda_1, \ldots, \lambda_n$ are the **eigenvalues**.

**Running example for today:**

$$A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}, \qquad \det(tI - A) = t(t-1)(t-2)$$

Eigenvalues: $\lambda_1 = 0$, $\lambda_2 = 1$, $\lambda_3 = 2$.

### 2.4 The Cayley–Hamilton Connection

Recall: the characteristic polynomial **annihilates** $A$. For our example:

$$\underbrace{A(A - I)(A - 2I)}_{\text{product of }(A - \lambda_i I)\text{ over all eigenvalues}} = 0$$

The eigenvalues give us an annihilating polynomial that **factors into linear terms**. This factored form is the key to everything that follows.

### 2.5 Why This Changes Everything

Take **any** polynomial $g(t)$. Divide by the annihilating polynomial:

$$g(t) = Q(t) \cdot \underbrace{t(t-1)(t-2)}_{\det(tI - A)} + \underbrace{R(t)}_{\deg < 3}$$

Plug in $t = A$:

$$g(A) = Q(A) \cdot \underbrace{A(A - I)(A - 2I)}_{= 0\text{ by Cayley–Hamilton!}} + R(A) = R(A)$$

So $g(A)$ depends only on the **remainder** $R(t)$. Since $R(t)$ has degree $< 3$, it is determined by **three values**:

$$g(0), \quad g(1), \quad g(2) \qquad \text{(the values at the eigenvalues!)}$$

If we can express $R$ in terms of these values, we get:

$$g(A) = g(0) \cdot P_0 + g(1) \cdot P_1 + g(2) \cdot P_2$$

for some matrices $P_0, P_1, P_2$. **The dream from §1!**

---

## 3. From Remainder Theorem to Lagrange Interpolation

### 3.1 $m = 1$: The Remainder Theorem (Lecture 14)

Start with what we know. Dividing $g(t)$ by **one** factor $(t - a)$:

$$g(t) = Q(t) \cdot (t - a) + \underbrace{g(a)}_{\text{remainder}}$$

Rewrite:

$$g(t) = Q(t) \cdot (t - a) + g(a) \cdot \underbrace{1}_{f_a(t)}$$

The "Lagrange basis" for **1 point** is just $f_a(t) = 1$:

| | $f_a(t) = 1$ |
|---|---|
| $t = a$ | $1$ |

One point → one value determines the remainder.

### 3.2 $m = 2$: Two Points

Dividing $g(t)$ by $(t - 1)(t - 2)$: remainder has degree $\leq 1$, determined by **two** values: $g(1)$ and $g(2)$.

Need **basis polynomials** that pick out each value:

| | $\underbrace{-(t-2)}_{f_1(t)}$ | $\underbrace{(t-1)}_{f_2(t)}$ |
|---|---|---|
| $t = 1$ | $1$ | $0$ |
| $t = 2$ | $0$ | $1$ |

$$g(t) = Q(t)(t-1)(t-2) + g(1) \cdot f_1(t) + g(2) \cdot f_2(t)$$

Same shape as $m = 1$, but with **2 points** instead of 1.

### 3.3 $m = 3$: Three Points — at $0, 1, 2$

Dividing $g(t)$ by $t(t-1)(t-2)$: remainder has degree $\leq 2$, determined by **three** values: $g(0)$, $g(1)$, $g(2)$.

| | $\underbrace{\frac{(t-1)(t-2)}{2}}_{f_0(t)}$ | $\underbrace{-t(t-2)}_{f_1(t)}$ | $\underbrace{\frac{t(t-1)}{2}}_{f_2(t)}$ |
|---|---|---|---|
| $t = 0$ | $1$ | $0$ | $0$ |
| $t = 1$ | $0$ | $1$ | $0$ |
| $t = 2$ | $0$ | $0$ | $1$ |

$$g(t) = Q(t) \cdot t(t-1)(t-2) + g(0) \cdot f_0(t) + g(1) \cdot f_1(t) + g(2) \cdot f_2(t)$$

General pattern:

$$f_{\lambda_i}(t) = \frac{\text{product of all }(t - \lambda_j)\text{ for }j \neq i}{\text{same product evaluated at }\lambda_i}$$

### 3.4 Why Does Lagrange Always Work?

Polynomials of degree $< m$ form a **vector space** of dimension $m$.

**Natural basis:** $\{1, t, t^2, \ldots, t^{m-1}\}$ — these are $m$ vectors.

The Lagrange polynomials $f_{\lambda_1}(t), \ldots, f_{\lambda_m}(t)$ are **also** $m$ polynomials of degree $< m$. Are they linearly independent? Look at their value tables:

| | $\lambda_1$ | $\lambda_2$ | $\cdots$ | $\lambda_m$ |
|---|---|---|---|---|
| $f_{\lambda_1}$ | **1** | $0$ | $\cdots$ | $0$ |
| $f_{\lambda_2}$ | $0$ | **1** | $\cdots$ | $0$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ | $\vdots$ |
| $f_{\lambda_m}$ | $0$ | $0$ | $\cdots$ | **1** |

The value table is the **identity matrix** — so they are **linearly independent**.

$m$ independent vectors in an $m$-dimensional space $\implies$ they form a **basis**. Every polynomial of degree $< m$ is a unique linear combination of the Lagrange basis.

**Two bases for the same space:**

$$\underbrace{1, \; t, \; \ldots, \; t^{m-1}}_{\text{natural basis}} \quad \longleftrightarrow \quad \underbrace{f_{\lambda_1}, \; f_{\lambda_2}, \; \ldots, \; f_{\lambda_m}}_{\text{Lagrange basis}}$$

### 3.5 The General Theorem

::: proposition
**Theorem (Lagrange Interpolation = Generalized Remainder Theorem)**

For any polynomial $g(t)$ and distinct points $\lambda_1, \ldots, \lambda_m$:

$$g(t) = Q(t)(t - \lambda_1) \cdots (t - \lambda_m) + g(\lambda_1) f_{\lambda_1}(t) + \cdots + g(\lambda_m) f_{\lambda_m}(t)$$
:::

| Dividing by | Remainder determined by | Name |
|---|---|---|
| $(t - a)$ | **1** value: $g(a)$ | Remainder Thm (L14) |
| $(t - a)(t - b)$ | **2** values: $g(a), g(b)$ | Lagrange, 2 pts |
| $(t - \lambda_1) \cdots (t - \lambda_m)$ | **$m$** values: $g(\lambda_1), \ldots, g(\lambda_m)$ | Lagrange, $m$ pts |

The Remainder Theorem is the **special case $m = 1$**.

---

## 4. Spectral Decomposition

### 4.1 The Trick: Plug In $A$

Apply Lagrange to $g(t) = t^n$ at the eigenvalues $0, 1, 2$:

$$t^n = Q(t) \cdot \underbrace{t(t-1)(t-2)}_{\det(tI - A)} + 0^n f_0(t) + 1^n f_1(t) + 2^n f_2(t)$$

Substitute $t = A$:

$$A^n = Q(A) \cdot \underbrace{A(A - I)(A - 2I)}_{= 0\text{ by Cayley–Hamilton!}} + 0^n f_0(A) + 1^n f_1(A) + 2^n f_2(A)$$

The quotient term **vanishes**! For $n \geq 1$:

$$\boxed{A^n = f_1(A) + 2^n \cdot f_2(A)}$$

**Closed formula.** Just plug in $n$.

### 4.2 Compute $A^n$ Explicitly

$$f_1(A) = -A(A - 2I) = -\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} -1 & 0 & 1 \\ 0 & -1 & 0 \\ 1 & 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

$$f_2(A) = \frac{A(A - I)}{2} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$$

For $n \geq 1$:

$$\boxed{A^n = \begin{pmatrix} 2^{n-1} & 0 & 2^{n-1} \\ 0 & 1 & 0 \\ 2^{n-1} & 0 & 2^{n-1} \end{pmatrix}}$$

### 4.3 The General Principle

::: proposition
**Theorem (Spectral Substitution)**

If $\det(tI - A) = (t - \lambda_1) \cdots (t - \lambda_m)$ with **distinct** $\lambda_i$, then:

$$g(A) = g(\lambda_1) \cdot \underbrace{f_{\lambda_1}(A)}_{P_{\lambda_1}} + g(\lambda_2) \cdot \underbrace{f_{\lambda_2}(A)}_{P_{\lambda_2}} + \cdots + g(\lambda_m) \cdot \underbrace{f_{\lambda_m}(A)}_{P_{\lambda_m}}$$
:::

$g(A)$ is completely determined by its **value table**: $(g(\lambda_1), g(\lambda_2), \ldots, g(\lambda_m))$.

The matrices $P_{\lambda_i} := f_{\lambda_i}(A)$ are the **spectral projections**.

---

## 5. The Value Table Method

### 5.1 The Value Table: ID Card for $g(A)$

For our $A$ with eigenvalues $0, 1, 2$: every $g(A)$ is determined by three numbers $(g(0), g(1), g(2))$.

| $g(t)$ | $g(0)$ | $g(1)$ | $g(2)$ | $g(A)$ |
|---|---|---|---|---|
| $1$ | $1$ | $1$ | $1$ | $I$ |
| $t$ | $0$ | $1$ | $2$ | $A$ |
| $t^2$ | $0$ | $1$ | $4$ | $A^2$ |
| $t^n$ | $0$ | $1$ | $2^n$ | $A^n$ |

Two polynomials with the **same value table** give the **same matrix**.

### 5.2 Arithmetic in Value Tables

**Addition:** value tables add entry-wise.

$$(0, 1, 2)_A + (1, 1, 1)_I = (1, 2, 3)_{A + I} \quad \checkmark$$

**Multiplication:** value tables **multiply entry-wise**!

$$(0, 1, 2)_A \cdot (0, 1, 2)_A = (0, 1, 4)_{A^2} \quad \checkmark$$

Why? Because $g(A) \cdot h(A) = (g \cdot h)(A)$, and $(g \cdot h)(\lambda_i) = g(\lambda_i) \cdot h(\lambda_i)$.

::: success
Matrix multiplication (hard) $\longleftrightarrow$ entry-wise multiplication (easy). The value table turns matrix algebra into **$\mathbb{R}^3$ arithmetic**.
:::

### 5.3 Spectral Projections = Standard Basis

| Matrix | $t = 0$ | $t = 1$ | $t = 2$ |
|---|---|---|---|
| $P_0 = f_0(A)$ | **1** | $0$ | $0$ |
| $P_1 = f_1(A)$ | $0$ | **1** | $0$ |
| $P_2 = f_2(A)$ | $0$ | $0$ | **1** |

These are the **standard basis vectors** of value-table space!

Any value table $(a, b, c)$ decomposes as:

$$(a, b, c) = a \cdot (1,0,0) + b \cdot (0,1,0) + c \cdot (0,0,1)$$

So: $g(A) = g(0) \cdot P_0 + g(1) \cdot P_1 + g(2) \cdot P_2$.

The spectral projections play the role of **coordinate axes**.

### 5.4 Testing Properties with Value Tables

**Is $P_1$ a projection?** Value table: $(0, 1, 0)$. Square entry-wise: $(0, 1, 0)$. Same! $P_1^2 = P_1$ ✓

**Is $A$ a projection?** Value table: $(0, 1, 2)$. Square entry-wise: $(0, 1, 4) \neq (0, 1, 2)$. $A^2 \neq A$ ✗

**Is $P_0 + P_1$ a projection?** Value table: $(1, 1, 0) + (0, 1, 0) = (1, 2, 0)$. Since $2^2 = 4 \neq 2$: not a projection.

**Is $P_0 + P_2$ a projection?** Value table: $(1, 0, 0) + (0, 0, 1) = (1, 0, 1)$. Square: $(1, 0, 1)$. Same! $(P_0 + P_2)^2 = P_0 + P_2$ ✓

::: proposition
**Rule.** $g(A)$ is a projection $\iff$ every entry of its value table is **$0$ or $1$**.
:::

### 5.5 Compatible Projections — Instantly

Are $\{P_0, P_1, P_2\}$ a **compatible family** (from Lecture 9)? Need $P_i P_j = 0$ for $i \neq j$.

Multiply value tables entry-wise:

$$P_0 \cdot P_1: \quad (1,0,0) \cdot (0,1,0) = (0,0,0) \implies P_0 P_1 = 0 \quad \checkmark$$

$$P_0 \cdot P_2: \quad (1,0,0) \cdot (0,0,1) = (0,0,0) \implies P_0 P_2 = 0 \quad \checkmark$$

$$P_1 \cdot P_2: \quad (0,1,0) \cdot (0,0,1) = (0,0,0) \implies P_1 P_2 = 0 \quad \checkmark$$

**Compatible family** — no matrix multiplication needed!

And $P_0 + P_1 + P_2$: value table $(1,0,0) + (0,1,0) + (0,0,1) = (1,1,1)$ = value table of $I$.

$$\boxed{P_0 + P_1 + P_2 = I}$$

The projections **partition the identity** — just like Lectures 7–9!

### 5.6 Spectral Decomposition: The Dream Comes True

What has value table $(0, 1, 2)$?

$$0 \cdot \underbrace{(1,0,0)}_{P_0} + 1 \cdot \underbrace{(0,1,0)}_{P_1} + 2 \cdot \underbrace{(0,0,1)}_{P_2} = (0,1,2) = \text{value table of } A$$

$$\boxed{A = 0 \cdot P_0 + 1 \cdot P_1 + 2 \cdot P_2 = P_1 + 2P_2}$$

Verify with concrete matrices:

$$1 \cdot \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} + 2 \cdot \frac{1}{2} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix} = A \quad \checkmark$$

**The dream from §1 is real:** $A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots + \lambda_m P_m$.

### 5.7 $(A - \lambda_i I) \cdot P_{\lambda_i} = 0$ — by Value Tables

**$\lambda_1 = 0$:** value table of $A - 0I = A$ is $(0, 1, 2)$.

$(0,1,2) \cdot (1,0,0) = (0,0,0) = 0$ ✓

**$\lambda_2 = 1$:** value table of $A - I$ is $(0-1, 1-1, 2-1) = (-1, 0, 1)$.

$(-1,0,1) \cdot (0,1,0) = (0,0,0) = 0$ ✓

**$\lambda_3 = 2$:** value table of $A - 2I$ is $(-2, -1, 0)$.

$(-2,-1,0) \cdot (0,0,1) = (0,0,0) = 0$ ✓

**Why it works:** $(t - \lambda_i)$ is zero at $\lambda_i$, and $P_{\lambda_i}$ is zero everywhere **else**. Their product is zero at **every** eigenvalue $\implies (A - \lambda_i I) P_{\lambda_i} = 0$.

### 5.8 Eigenvectors: Just Read the Columns

We showed: $(A - \lambda_i I) P_{\lambda_i} = 0$, i.e. $A P_{\lambda_i} = \lambda_i P_{\lambda_i}$.

Column by column: every **non-zero column** of $P_{\lambda_i}$ is an **eigenvector** for $\lambda_i$.

| $\lambda$ | $P_{\lambda_i}$ | Eigenvector | Verify |
|---|---|---|---|
| $0$ | $\frac{1}{2}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ | $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$ | $A\vec{v} = \vec{0} = 0\vec{v}$ ✓ |
| $1$ | $\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ | $\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ | $A\vec{v} = \vec{v} = 1\vec{v}$ ✓ |
| $2$ | $\frac{1}{2}\begin{pmatrix} 1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ | $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ | $A\vec{v} = 2\vec{v}$ ✓ |

No equation solving. No Gaussian elimination. Just **read the columns**.

---

## 6. Full Example: The Value Table Method from Scratch

### 6.1 New Matrix

$$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 5 \end{pmatrix}, \qquad \det(tI - A) = (t-1)(t-3)(t-5)$$

Eigenvalues: $\lambda_1 = 1$, $\lambda_2 = 3$, $\lambda_3 = 5$.

**Goal:** find $A^n$ using value tables.

### 6.2 Step 1: Build the Value Tables

| $g(t)$ | $g(1)$ | $g(3)$ | $g(5)$ | $g(A)$ |
|---|---|---|---|---|
| $1$ | $1$ | $1$ | $1$ | $I$ |
| $t$ | $1$ | $3$ | $5$ | $A$ |
| $t^2$ | $1$ | $9$ | $25$ | $A^2$ |
| $t^n$ | $1$ | $3^n$ | $5^n$ | $A^n$ **(this is what we want!)** |

We need the **projections** $P_1, P_3, P_5$ with value tables $(1,0,0)$, $(0,1,0)$, $(0,0,1)$.

Then $A^n = 1^n \cdot P_1 + 3^n \cdot P_3 + 5^n \cdot P_5$.

### 6.3 Step 2: Find Polynomials That Realize the Value Tables

**Goal:** find polynomials with value tables $(1,0,0)$, $(0,1,0)$, $(0,0,1)$.

**Method 1: Lagrange.**

| | $\underbrace{\frac{(t-3)(t-5)}{8}}_{P_1}$ | $\underbrace{\frac{(t-1)(t-5)}{-4}}_{P_3}$ | $\underbrace{\frac{(t-1)(t-3)}{8}}_{P_5}$ |
|---|---|---|---|
| $t = 1$ | $\frac{(-2)(-4)}{8} = \mathbf{1}$ | $0$ | $0$ |
| $t = 3$ | $0$ | $\frac{(2)(-2)}{-4} = \mathbf{1}$ | $0$ |
| $t = 5$ | $0$ | $0$ | $\frac{(4)(2)}{8} = \mathbf{1}$ |

Value tables match the targets! Plug in $t = A$:

$$P_1 = \frac{(A-3I)(A-5I)}{8} = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

$$P_3 = \frac{(A-I)(A-5I)}{-4} = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

$$P_5 = \frac{(A-I)(A-3I)}{8} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

**Why Lagrange?** It builds polynomials that realize target value tables. That's its only job.

### 6.4 Alternative: Find Projections by Solving a System

Forgot the Lagrange formula? The **value table is the goal** — Lagrange is just one tool.

**Alternative:** write $P_1 = \alpha_1 I + \alpha_2 A + \alpha_3 A^2$ and match value tables:

$$\alpha_1 \underbrace{(1,1,1)}_{I} + \alpha_2 \underbrace{(1,3,5)}_{A} + \alpha_3 \underbrace{(1,9,25)}_{A^2} = (\mathbf{1},0,0)$$

Entry by entry — a $3 \times 3$ system:

$$\begin{pmatrix} 1 & 1 & 1 \\ 1 & 3 & 9 \\ 1 & 5 & 25 \end{pmatrix} \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \alpha_3 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \qquad \implies \qquad \alpha_1 = \tfrac{15}{8}, \;\; \alpha_2 = -1, \;\; \alpha_3 = \tfrac{1}{8}$$

$$P_1 = \tfrac{15}{8} I - A + \tfrac{1}{8} A^2 = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \quad \checkmark \quad \text{Same answer!}$$

The **value table determines the matrix**. How you find the polynomial doesn't matter.

### 6.5 Quick Check: Value Table Tests

**Projections?** Square each value table entry-wise:

$$P_1: \; (1,0,0)^2 = (1,0,0) \implies P_1^2 = P_1 \; \checkmark$$

$$P_3: \; (0,1,0)^2 = (0,1,0) \implies P_3^2 = P_3 \; \checkmark$$

$$P_5: \; (0,0,1)^2 = (0,0,1) \implies P_5^2 = P_5 \; \checkmark$$

**Compatible?** Multiply value tables entry-wise:

$$(1,0,0) \cdot (0,1,0) = (0,0,0) \implies P_1 P_3 = 0 \; \checkmark$$

$$(1,0,0) \cdot (0,0,1) = (0,0,0) \implies P_1 P_5 = 0 \; \checkmark$$

$$(0,1,0) \cdot (0,0,1) = (0,0,0) \implies P_3 P_5 = 0 \; \checkmark$$

**Partition of $I$?** $(1,0,0) + (0,1,0) + (0,0,1) = (1,1,1) \implies P_1 + P_3 + P_5 = I$

**All verified** — without any matrix multiplication.

### 6.6 Step 3: $A^n$ by Value Tables

$A^n$ has value table $(1^n, 3^n, 5^n) = (1, 3^n, 5^n)$.

Express in the standard basis:

$$(1, 3^n, 5^n) = 1 \cdot \underbrace{(1,0,0)}_{P_1} + 3^n \cdot \underbrace{(0,1,0)}_{P_3} + 5^n \cdot \underbrace{(0,0,1)}_{P_5}$$

**Value tables match** $\implies$ **matrices are equal**:

$$\boxed{A^n = P_1 + 3^n P_3 + 5^n P_5 = \begin{pmatrix} 1 & 3^n - 1 & 0 \\ 0 & 3^n & 0 \\ 0 & 0 & 5^n \end{pmatrix}}$$

Check: $A^1 = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 5 \end{pmatrix}$ ✓ $\qquad A^2 = \begin{pmatrix} 1 & 8 & 0 \\ 0 & 9 & 0 \\ 0 & 0 & 25 \end{pmatrix}$ ✓

### 6.7 Solving the Recurrence: $a_{n+1} = 3a_n - 2a_{n-1}$

$B = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}$, $\quad \det(tI - B) = (t-1)(t-2)$. Eigenvalues: $1, 2$.

**Projections by value tables:**

$P_1$: value table $(1, 0)$, zero at $t = 2$: $\; P_1 = -(B - 2I) = \begin{pmatrix} -1 & 2 \\ -1 & 2 \end{pmatrix}$

$P_2$: value table $(0, 1)$, zero at $t = 1$: $\; P_2 = B - I = \begin{pmatrix} 2 & -2 \\ 1 & -1 \end{pmatrix}$

**$B^n$ by value tables:** $(1^n, 2^n) = 1 \cdot (1, 0) + 2^n \cdot (0, 1)$, so $B^n = P_1 + 2^n P_2$.

$$\begin{pmatrix} a_{n+1} \\ a_n \end{pmatrix} = B^n \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} -1 \\ -1 \end{pmatrix} + 2^n \begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2^{n+1} - 1 \\ 2^n - 1 \end{pmatrix}$$

$$\boxed{a_n = 2^n - 1}$$

Check: $a_0 = 0$, $a_1 = 1$, $a_2 = 3$, $a_3 = 7$ ✓

---

## 7. Summary

::: success
**Key Results from This Lecture**

1. **Eigenvalues and Eigenvectors** (§2): $A\vec{v} = \lambda\vec{v}$. Eigenvalues come from $\det(tI - A)$.

2. **Lagrange Interpolation** (§3): Generalized Remainder Theorem. Dividing by $m$ linear factors, the remainder is determined by $m$ values. The Lagrange polynomials form a **basis** for the polynomial space (their value table is the identity matrix).

3. **Spectral Decomposition** (§4): If $\det(tI - A) = (t - \lambda_1) \cdots (t - \lambda_m)$ with distinct $\lambda_i$:

$$\boxed{A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots + \lambda_m P_m}$$

where $P_1, \ldots, P_m$ are **compatible projections** that **partition $I$**.

4. **Value Table Method** (§5): Any $g(A) = g(\lambda_1) P_1 + \cdots + g(\lambda_m) P_m$. The value table $(g(\lambda_1), \ldots, g(\lambda_m))$ gives the coefficients. Same value table $\implies$ same matrix.

5. **Eigenvectors from Projections** (§5.8): Non-zero columns of $P_{\lambda_i}$ are eigenvectors for $\lambda_i$. No equation solving needed.
:::

### Looking Ahead

Today we found the spectral projections $P_1, \ldots, P_m$ as **polynomials of $A$**. But what ARE these projections, geometrically?

- What **subspace** does each $P_i$ project onto?
- These subspaces are the **eigenspaces** of $A$
- When the eigenspaces span $\mathbb{R}^n$: **diagonalization**

**Next time: Eigenspaces and Diagonalization.**

---

## Exercises

::: problem
**Exercise 1: Value Tables**

Let $A$ be a $3 \times 3$ matrix with eigenvalues $1, 2, 4$.

(a) Write the value table for $I$, $A$, $A^2$, and $A^n$.

(b) What is the value table for $A + 3I$?

(c) What is the value table for $A^2 - 5A + 4I$? What matrix does this equal?
:::

::: problem
**Exercise 2: Projection Test**

A matrix $B$ has eigenvalues $0, 1, 3$.

(a) Is $B$ a projection? (Check the value table.)

(b) Find a polynomial $g(t)$ such that $g(B)$ is a projection with value table $(1, 1, 0)$.

(c) What is $g(B)^{100}$?
:::

::: problem
**Exercise 3: Spectral Decomposition**

$$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$$

(a) Find the eigenvalues of $A$.

(b) Find the spectral projections $P_2$ and $P_3$ using Lagrange interpolation. Verify: value table of $P_2$ is $(1, 0)$, value table of $P_3$ is $(0, 1)$.

(c) Verify $P_2 + P_3 = I$ and $P_2 P_3 = 0$ (both by value tables and by explicit matrices).

(d) Write $A^n$ as a closed formula.
:::

::: problem
**Exercise 4: Alternative Method**

For the matrix in Exercise 3, find $P_2$ by solving $P_2 = \alpha_1 I + \alpha_2 A$ with value table $(1, 0)$. Verify you get the same answer as Lagrange.
:::

::: problem
**Exercise 5: Recurrence**

The Fibonacci-like sequence: $b_0 = 0$, $b_1 = 1$, $b_{n+1} = b_n + 2b_{n-1}$.

(a) Write this as $\vec{w}_{n+1} = C \vec{w}_n$ for a $2 \times 2$ matrix $C$.

(b) Find the eigenvalues of $C$.

(c) Find the spectral projections and write $C^n$ as a closed formula.

(d) Find $b_n$ explicitly.
:::

::: problem
**Exercise 6: Why Lagrange Works**

Let $\lambda_1 = 0$, $\lambda_2 = 1$, $\lambda_3 = 3$.

(a) Write down the three Lagrange basis polynomials $f_0(t)$, $f_1(t)$, $f_3(t)$.

(b) Verify that the value table of these three polynomials is the $3 \times 3$ identity matrix.

(c) Express $g(t) = t^2 + 1$ as a linear combination of $f_0, f_1, f_3$. (Hint: what is $g(0)$, $g(1)$, $g(3)$?)

(d) If $A$ has eigenvalues $0, 1, 3$, what does $g(A) = A^2 + I$ equal in terms of the spectral projections?
:::
