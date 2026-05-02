# Lecture 14: Cayley–Hamilton Theorem

> **Topics**: §4.4–4.5 — Annihilating polynomials, computing $A^n$, characteristic polynomial $\det(\lambda I - A)$, polynomial division (scalar and matrix), remainder theorem, adjugate proof of Cayley–Hamilton
> **Date**: May 4 – May 7, 2026

---

## Overview

Lecture 13 gave us the adjugate identity $A^* A = (\det A) I$ and the inverse formula $A^{-1} = \frac{1}{\det A} A^*$. This lecture asks a different question: **can we compute $A^{100}$ without multiplying $A$ by itself 99 times?**

The answer is the **Cayley–Hamilton Theorem**: the characteristic polynomial $\det(\lambda I - A)$ annihilates $A$. For a $2 \times 2$ matrix, this reduces every power $A^n$ to just $\alpha A + \beta I$ — two numbers instead of 99 multiplications.

The proof combines two ideas from earlier lectures:
- The **adjugate identity** (Lecture 13): $(\lambda I - A)^* \cdot (\lambda I - A) = \det(\lambda I - A) \cdot I$
- **Polynomial division** with matrix coefficients (new in this lecture)

---

## 1. How Do You Compute $A^{100}$?

### 1.1 The Problem

Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

To compute $A^{100}$ directly, we multiply $A$ by itself 100 times. That is 99 matrix multiplications. Very painful.

Is there a shortcut?

### 1.2 What If We Had a Shortcut for $A^2$?

Suppose someone told us:

$$A^2 = 5A + 2I$$

Then we can reduce **every** power of $A$:

$$A^3 = A \cdot A^2 = A(5A + 2I) = 5\underbrace{A^2}_{5A+2I} + 2A = 5(5A + 2I) + 2A = 27A + 10I$$

$$A^4 = A \cdot A^3 = A(27A + 10I) = 27\underbrace{A^2}_{5A+2I} + 10A = 27(5A + 2I) + 10A = 145A + 54I$$

Every power of $A$ is just $\alpha A + \beta I$ — **two numbers!**

$$A^n = \alpha_n A + \beta_n I$$

where $\alpha_n$ and $\beta_n$ satisfy a simple recurrence. Want $A^{100}$? Just find $\alpha_{100}$ and $\beta_{100}$.

### 1.3 Why Does This Work?

The relation $A^2 = 5A + 2I$ means:

$$A^2 - 5A - 2I = 0$$

So the polynomial $f(t) = t^2 - 5t - 2$ satisfies $f(A) = 0$.

It **kills** the matrix $A$.

::: proposition
**Definition (Annihilating Polynomial)**

A polynomial $f(t) = c_0 + c_1 t + c_2 t^2 + \cdots + c_n t^n$ is called an **annihilating polynomial** of a matrix $A$ if

$$f(A) = c_0 I + c_1 A + c_2 A^2 + \cdots + c_n A^n = 0.$$
:::

::: remark
**Why annihilating polynomials matter**

If $f$ annihilates $A$ and has degree $d$, then every $A^n$ can be written as a combination of $I, A, \ldots, A^{d-1}$.

The lower the degree, the shorter the formula for $A^n$.
:::

---

## 2. Does Every Matrix Have an Annihilating Polynomial?

### 2.1 The $2 \times 2$ Case

Consider a $2 \times 2$ matrix $A$. The space $\mathbb{R}^{2 \times 2}$ of all $2 \times 2$ matrices has dimension $\color{orange}{4}$.

Now look at these **five** matrices:

$$I, \quad A, \quad A^2, \quad A^3, \quad A^4$$

Five vectors in a 4-dimensional space $\implies$ **linearly dependent**.

So there exist coefficients $c_0, c_1, c_2, c_3, c_4$ (not all zero) with

$$c_0 I + c_1 A + c_2 A^2 + c_3 A^3 + c_4 A^4 = 0.$$

This is an annihilating polynomial of degree $\leq 4$.

### 2.2 The General Case

For an $n \times n$ matrix $A$:

- $\mathbb{R}^{n \times n}$ has dimension $n^2$.
- The $n^2 + 1$ matrices $I, A, A^2, \ldots, A^{n^2}$ must be **linearly dependent**.
- So an annihilating polynomial of degree $\leq n^2$ always exists.

| matrix size | dimension of $\mathbb{R}^{n \times n}$ | guaranteed degree |
|---|---|---|
| $2 \times 2$ | 4 | $\leq 4$ |
| $3 \times 3$ | 9 | $\leq 9$ |
| $10 \times 10$ | 100 | $\leq 100$ |

**Problem**: $n^2$ is big. And this argument does not tell us **how** to find the polynomial.

Can we find an annihilating polynomial of degree $n$ (not $n^2$), **systematically**?

---

## 3. The Characteristic Polynomial

### 3.1 Definition

::: proposition
**Definition (Characteristic Polynomial)**

For an $n \times n$ matrix $A$, the expression

$$\det(\lambda I - A)$$

is a polynomial in $\lambda$ of degree $n$. It is called the **characteristic polynomial** of $A$.
:::

**Why degree $n$?** Each entry of $\lambda I - A$ is at most degree 1 in $\lambda$. The determinant multiplies $n$ entries (one per column), so the result has degree $\leq n$. The leading term comes from the diagonal:

$$(\lambda - a_{11})(\lambda - a_{22}) \cdots (\lambda - a_{nn}) = \lambda^n + \cdots$$

### 3.2 Example: $2 \times 2$ Matrix

Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.

$$\det(\lambda I - A) = \det\begin{pmatrix} \lambda - 1 & -2 \\ -3 & \lambda - 4 \end{pmatrix}$$

$$= (\lambda - 1)(\lambda - 4) - (-2)(-3)$$

$$= \lambda^2 - 5\lambda + 4 - 6$$

$$= \lambda^2 - 5\lambda - 2$$

This is a polynomial of degree 2 in $\lambda$.

### 3.3 The $2 \times 2$ Formula

For a general $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\det(\lambda I - A) = \lambda^2 - \underbrace{(a+d)}_{\operatorname{tr}(A)}\lambda + \underbrace{(ad - bc)}_{\det(A)}$$

The coefficients are the **trace** and the **determinant** — two quantities we already know.

---

## 4. The Cayley–Hamilton Theorem

### 4.1 Statement

::: proposition
**Theorem (Cayley–Hamilton)**

For any $n \times n$ matrix $A$, the characteristic polynomial $\det(\lambda I - A)$ is an **annihilating polynomial** of $A$.

That is: if $\det(\lambda I - A) = \lambda^n + c_{n-1}\lambda^{n-1} + \cdots + c_0$,

then $A^n + c_{n-1}A^{n-1} + \cdots + c_0 I = 0.$
:::

This gives us an annihilating polynomial of degree exactly $n$, computed **systematically** from $\det(\lambda I - A)$.

| matrix size | dimension argument | Cayley–Hamilton |
|---|---|---|
| $2 \times 2$ | degree $\leq 4$ | degree $\leq \color{orange}{2}$ |
| $3 \times 3$ | degree $\leq 9$ | degree $\leq \color{orange}{3}$ |
| $10 \times 10$ | degree $\leq 100$ | degree $\leq \color{orange}{10}$ |

### 4.2 Verification

Let's check it for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ with $\det(\lambda I - A) = \lambda^2 - 5\lambda - 2$.

We need to verify: $A^2 - 5A - 2I = 0$.

$$A^2 = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix}$$

$$A^2 - 5A - 2I = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix} - \begin{pmatrix} 5 & 10 \\ 15 & 20 \end{pmatrix} - \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \quad \checkmark$$

It works! But **why** does it always work? We need a proof.

---

## 5. Polynomial Division

### 5.1 Proof Idea from the Adjugate

Recall the adjugate identity: for any square matrix $M$,

$$M^* \cdot M = \det(M) \cdot I.$$

Apply this to $M = \lambda I - A$:

$$\underbrace{(\lambda I - A)^*}_{\text{adjugate}} \cdot (\lambda I - A) = \det(\lambda I - A) \cdot I$$

Rearrange:

$$\frac{\det(\lambda I - A) \cdot I}{\lambda I - A} = (\lambda I - A)^*$$

The right side is a **polynomial** in $\lambda$ (each entry of the adjugate is a cofactor — a determinant of a submatrix of $\lambda I - A$, hence a polynomial in $\lambda$).

So $\det(\lambda I - A) \cdot I$ is **divisible** by $(\lambda I - A)$, with **zero remainder**!

The remainder of dividing by $(\lambda - A)$ equals the value at $\lambda = A$. Since the remainder is zero: $f(A) = 0$.

To make this rigorous, we need to understand **polynomial division** — first for scalars, then for matrices.

### 5.2 Dividing Numbers: A Warm-Up

When the numerator is bigger than the denominator, extract the integer part:

$$\frac{7}{2} = \underbrace{3}_{\text{quotient}} + \frac{\overbrace{1}^{\text{remainder}}}{2}$$

$$\frac{13}{5} = \underbrace{2}_{\text{quotient}} + \frac{\overbrace{3}^{\text{remainder}}}{5}$$

The pattern: $\dfrac{\text{big number}}{\text{small number}} = \text{integer} + \dfrac{\text{remainder}}{\text{small number}}$

Can we do the same thing for polynomials?

### 5.3 Dividing Polynomials

Consider the fraction $\dfrac{t^3 + 2}{t - 1}$.

The numerator $t^3 + 2$ has degree 3, the denominator $t - 1$ has degree 1. Since degree of numerator > degree of denominator, we can extract a **polynomial quotient**:

$$\frac{t^3 + 2}{t - 1} = \underbrace{(\cdots)}_{\text{quotient (degree 2)}} + \frac{\text{remainder}}{t - 1}$$

**Long division** gives us the quotient and remainder:

$$\begin{array}{r}
t^2 + t + 1 \\[-3pt]
t - 1 \enclose{longdiv}{t^3 \phantom{{}+t^2+t} + 2} \\[-3pt]
\underline{t^3 - t^2} \\[-3pt]
t^2 \phantom{{}+t+2} \\[-3pt]
\underline{t^2 - t} \\[-3pt]
t + 2 \\[-3pt]
\underline{t - 1} \\[-3pt]
3
\end{array}$$

Quotient: $t^2 + t + 1$. Remainder: $\color{red}{3}$.

$$\frac{t^3 + 2}{t - 1} = t^2 + t + 1 + \frac{\color{red}{3}}{t - 1}$$

Multiply both sides by $(t - 1)$:

$$\boxed{t^3 + 2 = (t-1)(t^2 + t + 1) + \color{red}{3}}$$

This is the **division formula**:

$$f(t) = \underbrace{(t - a)}_{\text{divisor}} \cdot \underbrace{Q(t)}_{\text{quotient}} + \underbrace{R}_{\text{remainder}}$$

---

## 6. The Remainder Theorem

### 6.1 The Remainder Equals $f(a)$

Look at the division formula again:

$$t^3 + 2 = (t - 1)(t^2 + t + 1) + \color{red}{3}$$

Plug in $t = 1$:

$$\underbrace{1^3 + 2}_{= 3} = \underbrace{(1 - 1)}_{= 0} \cdot (\cdots) + \color{red}{3}$$

$$3 = 0 + \color{red}{3} \quad \checkmark$$

The remainder $\color{red}{3}$ equals the value of $f(t) = t^3 + 2$ at $t = 1$. Is this a coincidence?

### 6.2 Why It Always Works

Dividing $f(t)$ by $(t - a)$ gives:

$$f(t) = (t - a) \cdot Q(t) + R$$

where $R$ is a constant (degree of remainder < degree of divisor). Now plug in $t = a$:

$$f(a) = \underbrace{(a - a)}_{= 0} \cdot Q(a) + R = R$$

So the remainder is **always** equal to $f(a)$.

::: proposition
**Theorem (Remainder Theorem)**

Let $f(t)$ be any polynomial and let $a$ be any number. Then

$$f(t) = (t - a) \cdot Q(t) + f(a)$$

for some polynomial $Q(t)$. In words: the **remainder** of dividing $f(t)$ by $(t - a)$ equals $f(a)$.
:::

Two ways to find the remainder:
1. **Long division** — divide step by step, read off the remainder.
2. **Direct substitution** — just compute $f(a)$. That **is** the remainder.

### 6.3 Examples

::: example
**Example 6.1**: $(t^2 - 5t - 2) \div (t - 1)$

**Step 1**. Predict the remainder by direct substitution:

$$f(1) = 1^2 - 5(1) - 2 = 1 - 5 - 2 = \color{red}{-6}$$

**Step 2**. Verify by long division:

$$\frac{t^2 - 5t - 2}{t - 1} = t - 4 + \frac{\color{red}{-6}}{t - 1} \quad \checkmark$$
:::

::: example
**Example 6.2**: $(t^2 - 5t - 2) \div (t - 3)$

**Step 1**. Predict: $f(3) = 9 - 15 - 2 = \color{red}{-8}$

**Step 2**. Verify:

$$\frac{t^2 - 5t - 2}{t - 3} = t - 2 + \frac{\color{red}{-8}}{t - 3} \quad \checkmark$$
:::

### 6.4 When Is the Remainder Zero?

From $f(t) = (t - a) \cdot Q(t) + f(a)$:

If $f(a) = 0$, the remainder vanishes and $(t - a)$ **divides** $f(t)$ exactly:

$$f(t) = (t - a) \cdot Q(t)$$

::: proposition
**Corollary (Factor Theorem)**

$(t - a)$ divides $f(t)$ if and only if $a$ is a root of $f$, i.e., $f(a) = 0$.
:::

::: example
**Example 6.3**: $f(t) = t^2 - 5t + 6$. Then $f(2) = 4 - 10 + 6 = 0$,

so $(t - 2)$ divides $f(t)$. Indeed $t^2 - 5t + 6 = (t - 2)(t - 3)$.
:::

---

## 7. Dividing by $(\lambda - A)$: Matrix Polynomial Division

### 7.1 Back to Cayley–Hamilton

Recall our proof strategy:

1. The adjugate identity tells us $\det(\lambda I - A) \cdot I = (\lambda I - A)^* \cdot (\lambda I - A)$, so $\det(\lambda I - A) \cdot I$ is **divisible** by $(\lambda I - A)$.

2. The remainder of dividing by $(\lambda - A)$ equals the value at $\lambda = A$.

3. Since the division is exact (zero remainder), plugging in $\lambda = A$ gives 0.

To make this rigorous, we need polynomial division with **matrix coefficients**.

### 7.2 A Tempting but Wrong Proof

::: attention
**The False Proof**

"Proof" of Cayley–Hamilton:

$$\det(\lambda I - A)\Big|_{\lambda = A} = \det(AI - A) = \det(0) = 0. \qquad \color{red}{\textbf{WRONG!}}$$

The error: you **cannot** plug a matrix into $\det(\lambda I - A)$ directly.

The $\lambda$ inside $\det(\lambda I - A)$ sits in a **scalar** slot. Replacing it with a matrix changes the meaning of the expression entirely.
:::

Consider $\det(\lambda I_2) = \lambda^2$. The scalar polynomial is $f(\lambda) = \lambda^2$.

Plug in $B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$:

- **Correct**: expand first, then substitute. $f(B) = B^2 = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix}$ (a $2 \times 2$ matrix)
- **Wrong**: substitute inside the determinant. $\det(B \cdot I_2) = \det(B) = -2$ (a number!)

$$\begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix} \neq -2 \qquad \text{They are not even the same type of object.}$$

The correct approach:

::: attention
**The Correct Procedure**

**Step 1.** Expand $\det(\lambda I - A)$ to get a **scalar** polynomial:

$$\det(\lambda I - A) = \lambda^2 - 5\lambda - 2$$

**Step 2.** Substitute $\lambda = A$ into the **expanded** polynomial:

$$f(A) = A^2 - 5A - 2I$$

**Expand first, then substitute.** Never substitute a matrix directly into a determinant.
:::

### 7.3 Long Division with Matrix Coefficients

We treat $A$ as a **constant** and divide:

$$\frac{\lambda^2 - 5\lambda - 2}{\lambda - A}$$

The divisor $(\lambda - A)$ has leading coefficient 1 (it is **monic**), so long division works exactly as before. The only difference: quotient and remainder now have **matrix** coefficients.

$$\begin{array}{r}
\lambda + (A - 5I) \\[-3pt]
\lambda - A \enclose{longdiv}{\lambda^2 - 5\lambda \phantom{+2} - 2I} \\[-3pt]
\underline{\lambda^2 - A\lambda} \\[-3pt]
(A - 5I)\lambda - 2I \\[-3pt]
\underline{(A - 5I)\lambda - (A^2 - 5A)} \\[-3pt]
A^2 - 5A - 2I
\end{array}$$

Quotient: $\lambda I + (A - 5I)$. Remainder: $\color{red}{A^2 - 5A - 2I}$.

$$\frac{\lambda^2 - 5\lambda - 2}{\lambda - A} = \lambda I + (A - 5I) + \frac{\color{red}{A^2 - 5A - 2I}}{\lambda - A}$$

Multiply both sides by $(\lambda - A)$:

$$(\lambda^2 - 5\lambda - 2) \cdot I = [\lambda I + (A - 5I)] \cdot (\lambda I - A) + \color{red}{A^2 - 5A - 2I}$$

The remainder $\color{red}{A^2 - 5A - 2I}$ is exactly $f(A)$ — just like the scalar case!

### 7.4 Matrix Remainder Theorem

Why does the remainder equal $f(A)$? The same argument as before. We have the division formula:

$$f(\lambda) \cdot I = Q(\lambda) \cdot (\lambda I - A) + R$$

where $R$ is a **constant matrix** (does not depend on $\lambda$). Plug in $\lambda = A$ into the **expanded** polynomial:

$$f(A) = Q(A) \cdot \underbrace{(AI - A)}_{= 0} + R = R$$

So $R = f(A)$, exactly as in the scalar case.

::: proposition
**Theorem (Matrix Remainder Theorem)**

$$f(\lambda) \cdot I = Q(\lambda) \cdot (\lambda I - A) + f(A)$$

The remainder of dividing $f(\lambda) \cdot I$ by $(\lambda I - A)$ equals $f(A)$.
:::

::: proposition
**Existence and Uniqueness of Matrix Polynomial Division**

For any **monic** divisor $d(\lambda)$ (leading coefficient $= I$), the division

$$F(\lambda) = Q(\lambda) \cdot d(\lambda) + R(\lambda), \qquad \deg R < \deg d$$

always **exists** and is **unique**.

- *Existence*: the long division algorithm works because the leading coefficient $I$ is invertible — each step reduces the degree by 1.
- *Uniqueness*: if two decompositions exist, their difference forces a degree contradiction.
:::

---

## 8. Proof of the Cayley–Hamilton Theorem

Now we have all the tools.

### 8.1 The Adjugate Identity

Recall: for any square matrix $M$, the adjugate identity gives $M^* \cdot M = \det(M) \cdot I$.

Apply this to $M = \lambda I - A$:

$$(\lambda I - A)^* \cdot (\lambda I - A) = \det(\lambda I - A) \cdot I$$

Rearrange:

$$\frac{\det(\lambda I - A) \cdot I}{\lambda I - A} = (\lambda I - A)^*$$

### 8.2 The Adjugate Is a Polynomial

For $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, the matrix $\lambda I - A = \begin{pmatrix} \lambda - 1 & -2 \\ -3 & \lambda - 4 \end{pmatrix}$.

The adjugate (swap diagonal, negate off-diagonal):

$$(\lambda I - A)^* = \begin{pmatrix} \lambda - 4 & 2 \\ 3 & \lambda - 1 \end{pmatrix}$$

Write as a polynomial in $\lambda$ with matrix coefficients:

$$(\lambda I - A)^* = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \lambda + \begin{pmatrix} -4 & 2 \\ 3 & -1 \end{pmatrix}$$

Each entry of $(\lambda I - A)^*$ is a cofactor = determinant of a submatrix of $\lambda I - A$, hence a **polynomial in $\lambda$**. There is no $(\lambda I - A)^{-1}$ term — the adjugate is a **pure polynomial**.

**Verify** that $(\lambda I - A)^* \cdot (\lambda I - A) = \det(\lambda I - A) \cdot I$:

$$\begin{pmatrix} \lambda - 4 & 2 \\ 3 & \lambda - 1 \end{pmatrix}\begin{pmatrix} \lambda - 1 & -2 \\ -3 & \lambda - 4 \end{pmatrix}$$

$$= \begin{pmatrix} (\lambda-4)(\lambda-1) - 6 & -2(\lambda-4) + 2(\lambda-4) \\ 3(\lambda-1) - 3(\lambda-1) & -6 + (\lambda-1)(\lambda-4) \end{pmatrix}$$

$$= \begin{pmatrix} \lambda^2 - 5\lambda - 2 & 0 \\ 0 & \lambda^2 - 5\lambda - 2 \end{pmatrix} = (\lambda^2 - 5\lambda - 2) \cdot I \quad \checkmark$$

### 8.3 Two Decompositions of the Same Fraction

We now have two ways to write $\dfrac{\det(\lambda I - A) \cdot I}{\lambda I - A}$:

**Way 1** — polynomial division (from §7):

$$\frac{f(\lambda) \cdot I}{\lambda I - A} = Q(\lambda) + \frac{f(A)}{\lambda I - A}$$

where $f(A) = A^2 - 5A - 2I$ is the remainder.

**Way 2** — adjugate identity (from §8.1):

$$\frac{f(\lambda) \cdot I}{\lambda I - A} = (\lambda I - A)^*$$

The right side is a **pure polynomial** — no $(\lambda I - A)^{-1}$ term!

### 8.4 Comparing the Two

Setting them equal:

$$\underbrace{Q(\lambda)}_{\text{polynomial}} + \underbrace{\frac{f(A)}{\lambda I - A}}_{\text{not polynomial}} = \underbrace{(\lambda I - A)^*}_{\text{polynomial}}$$

Move the polynomial parts to one side:

$$\frac{f(A)}{\lambda I - A} = \underbrace{(\lambda I - A)^* - Q(\lambda)}_{\text{polynomial in } \lambda}$$

The left side has $(\lambda I - A)^{-1}$, which $\to 0$ as $\lambda \to \infty$.

A polynomial that $\to 0$ as $\lambda \to \infty$ must be **identically zero**.

Therefore $f(A) \cdot (\lambda I - A)^{-1} = 0$, so $f(A) = 0$. $\square$

### 8.5 The Full Theorem

::: proposition
**Theorem (Cayley–Hamilton) — Proved!**

For any $n \times n$ matrix $A$:

if $\det(\lambda I - A) = \lambda^n + c_{n-1}\lambda^{n-1} + \cdots + c_0$,

then $A^n + c_{n-1}A^{n-1} + \cdots + c_0 I = 0.$
:::

**Proof summary**:

1. Expand $\det(\lambda I - A) = f(\lambda)$, a scalar polynomial of degree $n$.
2. Polynomial division: $f(\lambda) \cdot I = Q(\lambda) \cdot (\lambda I - A) + f(A)$.
3. Adjugate identity: $f(\lambda) \cdot I = (\lambda I - A)^* \cdot (\lambda I - A)$.
4. Comparing: the adjugate decomposition has **zero remainder**.
5. By uniqueness: $f(A) = 0$. $\square$

::: remark
**A beautiful side product: the adjugate is a polynomial in $A$**

This proof gives us more than just Cayley–Hamilton. The zero remainder tells us that $f(A) = 0$ — but look at what happens to the **quotient**.

Comparing the two decompositions:

$$f(\lambda) \cdot I = \underbrace{Q(\lambda)}_{\text{quotient}} \cdot (\lambda I - A) = \underbrace{(\lambda I - A)^*}_{\text{adjugate}} \cdot (\lambda I - A)$$

By uniqueness: $Q(\lambda) = (\lambda I - A)^*$.

This means the adjugate $(\lambda I - A)^*$ — which we defined using cofactors and determinants — is exactly the quotient from polynomial division of the characteristic polynomial by $(\lambda - A)$. It is a **polynomial in $\lambda$ with matrix coefficients**, with no mysterious $(\lambda I - A)^{-1}$ term.

In other words, the adjugate identity $M^* M = \det(M) I$ is not just a tool we borrowed from Lecture 13 — it **is** the polynomial division. The entire machinery fits together: the adjugate provides the quotient, zero provides the remainder, and Cayley–Hamilton falls out as a consequence.

This is why the proof via the adjugate is considered one of the most elegant in linear algebra: every piece has a clear interpretation, and there are no wasted parts.
:::

---

## 9. Application: Computing Matrix Powers

### 9.1 The Method

For $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, Cayley–Hamilton gives $A^2 = 5A + 2I$.

Every power reduces to $A^n = \alpha_n A + \beta_n I$:

$$A^3 = A \cdot A^2 = A(5A + 2I) = 5A^2 + 2A = 5(5A + 2I) + 2A = 27A + 10I$$

$$= 27 \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + 10 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 37 & 54 \\ 81 & 118 \end{pmatrix}$$

$$A^4 = A \cdot A^3 = A(27A + 10I) = 27A^2 + 10A = 27(5A + 2I) + 10A = 145A + 54I$$

$$= \begin{pmatrix} 199 & 290 \\ 435 & 634 \end{pmatrix}$$

### 9.2 The Recurrence

The coefficients follow a pattern. If $A^n = \alpha_n A + \beta_n I$, then:

$$A^{n+1} = \alpha_n A^2 + \beta_n A = \alpha_n(5A + 2I) + \beta_n A = (5\alpha_n + \beta_n) A + 2\alpha_n I$$

So: $\alpha_{n+1} = 5\alpha_n + \beta_n$, $\beta_{n+1} = 2\alpha_n$.

Starting from $A^1 = 1 \cdot A + 0 \cdot I$ (i.e., $\alpha_1 = 1, \beta_1 = 0$):

| $n$ | $\alpha_n$ | $\beta_n$ |
|---|---|---|
| 1 | 1 | 0 |
| 2 | 5 | 2 |
| 3 | 27 | 10 |
| 4 | 145 | 54 |

::: remark
**Looking ahead**

The Cayley–Hamilton Theorem reduces $A^n$ to a linear combination of $I, A, \ldots, A^{n-1}$ — but the coefficients $\alpha_n, \beta_n$ still grow via a recurrence. In Lecture 15, we will discover the **spectral decomposition** $A = \lambda_1 P_1 + \lambda_2 P_2$, which gives a **closed formula**:

$$A^n = \lambda_1^n P_1 + \lambda_2^n P_2$$

No recurrence needed — just plug in $n$. The key tool will be **Lagrange interpolation**, which generalizes this lecture's Remainder Theorem to multiple roots.
:::

---

## Summary

| Result | Source |
|---|---|
| Annihilating polynomial exists (degree $\leq n^2$) | Dimension argument |
| Characteristic polynomial $\det(\lambda I - A)$ | Degree $n$, computable |
| Remainder Theorem: remainder of $f(t) \div (t-a) = f(a)$ | Plug $t = a$ into division formula |
| Matrix Remainder Theorem | Same argument with matrix coefficients |
| Adjugate identity: $(\lambda I - A)^* \cdot (\lambda I - A) = f(\lambda) \cdot I$ | Zero remainder (from Lecture 13) |
| **Cayley–Hamilton**: $f(A) = 0$ | Uniqueness of polynomial division |

---

## Exercises

::: problem
**Exercise 1: Characteristic Polynomial**

Let $B = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$.

(a) Compute $\det(\lambda I - B)$.

(b) Use the Cayley–Hamilton theorem to express $B^2$ in terms of $B$ and $I$.

(c) Compute $B^5$.
:::

::: problem
**Exercise 2: The False Proof**

Explain precisely why the following "proof" of Cayley–Hamilton is wrong:

$$f(A) = \det(AI - A) = \det(0) = 0.$$

Give a concrete $2 \times 2$ example showing that $\det(B \cdot I_2) \neq f(B)$ in general.
:::

::: problem
**Exercise 3: Remainder Theorem Practice**

Find the remainder when $f(t) = t^3 - 2t^2 + t - 5$ is divided by:

(a) $(t - 1)$ \
(b) $(t - 2)$ \
(c) $(t + 1)$
:::

::: problem
**Exercise 4: $3 \times 3$ Cayley–Hamilton**

Let $C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

(a) Compute $\det(\lambda I - C)$.

(b) Verify the Cayley–Hamilton theorem by showing $f(C) = 0$.

(c) Express $C^2$ in terms of $C^2$... wait — for a diagonal matrix, can you see directly why Cayley–Hamilton holds? (*Hint: what are the roots of $f$?*)
:::

::: problem
**Exercise 5: Matrix Polynomial Division**

Perform the long division $(\lambda^2 - 5\lambda + 6) \div (\lambda - A)$ where $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$.

What is the remainder? Verify that it equals $f(A) = A^2 - 5A + 6I$.
:::

---

*Questions? Email [qiruili@postech.ac.kr](mailto:qiruili@postech.ac.kr)*
