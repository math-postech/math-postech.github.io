# Lecture 13: Laplace Expansion, Adjugate & Cramer's Rule

> **Topics**: §4.4–4.5 — Cofactor (algebraic complement), Laplace expansion (column/row), cofactor orthogonality, adjugate matrix $A^*$, the equation $A^* A = (\det A) I$, inverse formula $A^{-1} = \frac{1}{\det A} A^*$, invertibility criterion ($\det A \neq 0$), Cramer's rule
> **Date**: May 4 – May 7, 2026

---

## Overview

Lecture 12 established the three determinant axioms and the cross-filling formula $\det = a_1 \cdots a_n \cdot \det(S)$. This lecture discovers that multilinearity (P1) lets us **expand** the determinant along any single column — the **Laplace expansion**. This leads to the **cofactor orthogonality** trick, the **adjugate matrix**, an explicit **inverse formula**, and **Cramer's rule** for solving linear systems.

---

## 1. From Cross-Filling to Cofactor

### 1.1 The Idea

Write one column of $A$ in terms of standard basis vectors:

$$\text{col } j = a_{1j}\vec{e}_1 + a_{2j}\vec{e}_2 + \cdots + a_{nj}\vec{e}_n$$

By multilinearity (P1), the determinant splits into $n$ terms — one for each $\vec{e}_i$ plugged into column $j$:

$$\det(A) = \sum_{i=1}^{n} a_{ij} \cdot A_{ij}$$

where the **algebraic cofactor** $A_{ij}$ is the determinant of the matrix with column $j$ replaced by $\vec{e}_i$ (all other columns unchanged).

### 1.2 The $3 \times 3$ Example

For $A = \begin{pmatrix} 2 & 1 & 2 \\ 1 & 3 & 1 \\ 2 & 1 & 3 \end{pmatrix}$, expanding along column 1:

$$\det(A) = 2 \cdot A_{11} + 1 \cdot A_{21} + 2 \cdot A_{31}$$

Each cofactor is computed by plugging $\vec{e}_i$ into column 1:

- $A_{11} = \det\begin{pmatrix} 1 & 1 & 2 \\ 0 & 3 & 1 \\ 0 & 1 & 3 \end{pmatrix} = 8$
- $A_{21} = \det\begin{pmatrix} 0 & 1 & 2 \\ 1 & 3 & 1 \\ 0 & 1 & 3 \end{pmatrix} = -1$
- $A_{31} = \det\begin{pmatrix} 0 & 1 & 2 \\ 0 & 3 & 1 \\ 1 & 1 & 3 \end{pmatrix} = -5$

$$\det(A) = 2(8) + 1(-1) + 2(-5) = 16 - 1 - 10 = 5$$

### 1.3 Row Expansion

Since $\det(A^T) = \det(A)$, we also get expansion along any **row**:

$$\det(A) = \sum_{j=1}^{n} a_{ij} \cdot A_{ij} \quad \text{(along row } i\text{)}$$

---

## 2. Cofactor Orthogonality

### 2.1 Right Column = $\det(A)$

Expanding along column $j$ with column $j$'s own entries gives $\det(A)$ — that's just the Laplace expansion.

### 2.2 Wrong Column = 0

What if we pair column $k$'s entries with column $j$'s cofactors ($k \neq j$)?

$$\sum_{i=1}^{n} a_{ik} \cdot A_{ij} = \;?$$

This equals the determinant of a matrix where column $j$ is **replaced** by column $k$ — but then two columns are identical! By the alternating property (P2): $\det = 0$.

### 2.3 The Orthogonality Formula

$$\sum_{i=1}^{n} a_{ik} \cdot A_{ij} = \begin{cases} \det(A) & \text{if } k = j \\ 0 & \text{if } k \neq j \end{cases}$$

This is the engine behind the adjugate matrix.

---

## 3. Adjugate Matrix

### 3.1 $2 \times 2$ Case First

For $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ with $\det(A) = 5$:

The **adjugate** $A^*$ packs all cofactors (transposed):

$$A^* = \begin{pmatrix} A_{11} & A_{21} \\ A_{12} & A_{22} \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -1 & 2 \end{pmatrix}$$

**Shortcut** for $2 \times 2$: swap diagonal entries, negate off-diagonal entries.

### 3.2 Why $A^* A = \det(A) \cdot I$

Multiply $A^* \cdot A$. Each entry of the product is a dot product: **row $i$ of $A^*$** (= cofactors of column $i$) dotted with **column $j$ of $A$** (= entries of column $j$).

**Diagonal entries** ($i = j$): cofactors matched with their own column's entries. This is exactly the Laplace expansion — it equals $\det(A)$.

$$\text{Entry } (1,1): \quad 2 \cdot \underbrace{\det\begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix}}_{A_{11}} + 1 \cdot \underbrace{\det\begin{pmatrix} 0 & 1 \\ 1 & 3 \end{pmatrix}}_{A_{21}} = \det\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = 5$$

**Off-diagonal entries** ($i \neq j$): cofactors of column $i$ matched with column $j$'s entries. The entries go into the wrong column position, creating **two identical columns**. By P2: $\det = 0$.

$$\text{Entry } (1,2): \quad 1 \cdot \underbrace{\det\begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix}}_{A_{11}} + 3 \cdot \underbrace{\det\begin{pmatrix} 0 & 1 \\ 1 & 3 \end{pmatrix}}_{A_{21}} = \det\begin{pmatrix} 1 & 1 \\ 3 & 3 \end{pmatrix} = 0$$

### 3.3 Definition and Theorem

::: proposition
**Definition (Adjugate)**

The **adjugate** (or **classical adjoint**) of $A$ is:

$$A^* := (\text{cofactor matrix})^T, \qquad (A^*)_{ij} = A_{ji}$$
:::

::: proposition
**Theorem (Adjugate Identity)**

$$\boxed{A^* A = (\det A) \cdot I_n}$$
:::

### 3.4 The Cross-Out Rule

For efficient computation of cofactors:

$$A_{ij} = (-1)^{i+j} \cdot \det(\text{delete row } i, \text{col } j \text{ from } A)$$

The sign follows a checkerboard pattern: $\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$

### 3.5 All 9 Cofactors of the Running Example

For $A = \begin{pmatrix} 2 & 1 & 2 \\ 1 & 3 & 1 \\ 2 & 1 & 3 \end{pmatrix}$:

| | col 1 | col 2 | col 3 |
|---|---|---|---|
| row 1 | $8$ | $-1$ | $-5$ |
| row 2 | $-1$ | $2$ | $0$ |
| row 3 | $-5$ | $0$ | $5$ |

$$A^* = \begin{pmatrix} 8 & -1 & -5 \\ -1 & 2 & 0 \\ -5 & 0 & 5 \end{pmatrix}$$

---

## 4. Inverse via Adjugate

### 4.1 The Inverse Formula

From $A^* A = (\det A) I$, divide by $\det A$:

::: proposition
**Theorem (Inverse Formula)**

If $\det(A) \neq 0$:

$$\boxed{A^{-1} = \frac{1}{\det(A)} \, A^*}$$
:::

For our example: $A^{-1} = \frac{1}{5}\begin{pmatrix} 8 & -1 & -5 \\ -1 & 2 & 0 \\ -5 & 0 & 5 \end{pmatrix}$

### 4.2 $2 \times 2$ Inverse

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

### 4.3 Invertibility Criterion

::: proposition
**Theorem (Invertibility $\Leftrightarrow$ Nonzero Determinant)**

$$\boxed{A \text{ is invertible} \;\Longleftrightarrow\; \det(A) \neq 0}$$
:::

**Proof** ($\Leftarrow$): If $\det(A) \neq 0$, we construct $A^{-1} = \frac{1}{\det A} A^*$.

**Proof** ($\Rightarrow$): If $A$ is invertible, then $\det(A)\det(A^{-1}) = \det(I) = 1$, so $\det(A) \neq 0$.

**Contrapositive**: $\det(A) = 0$ implies $A$ is not invertible (columns are linearly dependent).

---

## 5. Cramer's Rule

### 5.1 Setup

Given $Ax = b$ with $A$ invertible, we want to find $x_i$.

From the adjugate inverse: $x = A^{-1}b = \frac{1}{\det A} A^* b$.

### 5.2 The Formula

The $i$-th component:

$$x_i = \frac{1}{\det A} \sum_k (A^*)_{ik} b_k = \frac{1}{\det A} \sum_k A_{ki} \cdot b_k$$

The numerator $\sum_k A_{ki} b_k$ is the Laplace expansion along column $i$ — but with column $i$'s entries replaced by $b$:

::: proposition
**Theorem (Cramer's Rule)**

$$\boxed{x_i = \frac{\det(A_i)}{\det(A)}}$$

where $A_i$ is $A$ with column $i$ replaced by $b$.
:::

### 5.3 $2 \times 2$ Example

$$\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$$

$$x = \frac{\det\begin{pmatrix} 5 & 1 \\ 5 & 3 \end{pmatrix}}{\det\begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}} = \frac{15-5}{5} = \frac{10}{5} = 2$$

$$y = \frac{\det\begin{pmatrix} 2 & 5 \\ 1 & 5 \end{pmatrix}}{5} = \frac{10-5}{5} = \frac{5}{5} = 1$$

### 5.4 $3 \times 3$ Practice

$$\begin{pmatrix} 2 & 1 & 2 \\ 1 & 3 & 1 \\ 2 & 1 & 3 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 7 \\ 6 \\ 8 \end{pmatrix}$$

Answer: $(x_1, x_2, x_3) = (2, 1, 1)$.

---

## Summary

All results in this lecture flow from just two axioms:

| Result | Source |
|---|---|
| Laplace expansion | P1 (multilinearity) — split one column into $\vec{e}_i$ pieces |
| Cofactor orthogonality | P1 + P2 — wrong column creates two identical columns |
| Adjugate identity $A^*A = (\det A)I$ | Orthogonality packaged as matrix multiplication |
| Inverse formula | Divide by $\det A$ |
| Cramer's rule | Inverse formula + Laplace expansion of numerator |

---

## Exercises

::: problem
**Exercise 1: Cofactor Computation**

For $A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 1 & 1 \\ 0 & 2 & 1 \end{pmatrix}$, compute $A_{11}$, $A_{21}$, $A_{31}$ and verify $\det(A)$ by Laplace expansion along column 1.
:::

::: problem
**Exercise 2: $2 \times 2$ Inverse**

Find the inverse of $\begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$ using the adjugate formula. Verify by multiplication.
:::

::: problem
**Exercise 3: Cramer's Rule ($2 \times 2$)**

Solve using Cramer's rule:

$$\begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 8 \\ 6 \end{pmatrix}$$
:::

::: problem
**Exercise 4: True or False**

(a) If $\det(A) = 0$, then $Ax = b$ has no solution.

(b) The adjugate of a $2 \times 2$ matrix is obtained by swapping diagonal entries and negating off-diagonal entries.

(c) Cramer's rule requires computing $n+1$ determinants to solve an $n \times n$ system.
:::

---

*Questions?* {{SHELL_PREFIX}}el
