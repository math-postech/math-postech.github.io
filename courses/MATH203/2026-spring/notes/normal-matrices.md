# Lecture 19: Normal Matrices

> **Topics**: §6.1–6.2 — Hermitian Inner Product, Hermitian Conjugate, Normal Matrices, Hermitian/Skew-Hermitian/Unitary Special Cases, Radical Polynomial Test, Normal Nilpotent Collapse, Hermitian Spectral Projections, Orthogonal Eigenspace Decomposition, Unitary Diagonalization
> **Date**: May 18, 2026

---

## Overview

Lecture 16 gave spectral projections once a matrix is diagonalizable:

$$
A=\lambda_1P_1+\lambda_2P_2+\cdots+\lambda_kP_k,
$$

with

$$
P_i^2=P_i,\qquad P_iP_j=0\ (i\neq j),\qquad P_1+\cdots+P_k=I.
$$

These projections split vectors into eigenspace pieces. But a projection can be **oblique**. Algebraic splitting does not automatically mean perpendicular splitting.

This lecture identifies the matrices for which spectral decomposition becomes an orthogonal decomposition:

$$
\mathbb C^n=E_{\lambda_1}\oplus_{\perp_H}E_{\lambda_2}\oplus_{\perp_H}\cdots\oplus_{\perp_H}E_{\lambda_k}.
$$

Those matrices are the **normal matrices**.

::: attention
Normal matrices are not merely diagonalizable. They are diagonalizable in a way compatible with Hermitian geometry: their spectral projections are Hermitian projections.
:::

The main result is:

$$
A\text{ normal}
\quad\Longleftrightarrow\quad
A\text{ is diagonalizable and all eigenspaces of }A\text{ are mutually Hermitian-orthogonal.}
$$

This is the geometric form of the theorem. In projection language, it says equivalently that every spectral projection $P_i$ satisfies

$$
P_i^H=P_i.
$$

---

## 1. Complex Length Forces Hermitian Geometry

### 1.1 The One-Dimensional Starting Point

For one complex number

$$z=a+bi,$$

ordinary absolute value satisfies

$$|z|^2=a^2+b^2.$$

The algebraic way to obtain this positive number is not $z^2$. It is

$$
\overline z z=(a-bi)(a+bi)=a^2+b^2.
$$

So in one complex dimension, the rule is already:

$$
\boxed{|z|^2=\overline z z.}
$$

Hermitian length is the vector version of this fact.

### 1.2 Why the Usual Dot Product Fails

Take

$$
\mathbf v=\begin{pmatrix}1\\ i\end{pmatrix}\in\mathbb C^2.
$$

If we use the real dot-product formula without conjugation, we get

$$
\mathbf v^T\mathbf v
=\begin{pmatrix}1&i\end{pmatrix}
\begin{pmatrix}1\\ i\end{pmatrix}
=1+i^2=0.
$$

This says a nonzero vector has zero length. The problem is that the multiplication

$$i\cdot i=i^2=-1$$

has the wrong sign for length.

The one-dimensional rule tells us to conjugate first:

$$(-i)i=1.$$

### 1.3 Hermitian Transpose and Hermitian Inner Product

For a complex column vector $\mathbf v$, define its **Hermitian transpose** by

$$
\mathbf v^H=\overline{\mathbf v}^{\,T}.
$$

For example,

$$
\mathbf v=\begin{pmatrix}1\\ i\end{pmatrix}
\quad\Longrightarrow\quad
\mathbf v^H=\begin{pmatrix}1&-i\end{pmatrix}.
$$

Now

$$
\mathbf v^H\mathbf v
=\begin{pmatrix}1&-i\end{pmatrix}
\begin{pmatrix}1\\ i\end{pmatrix}
=1+(-i)i=2.
$$

::: proposition
For complex vectors $\mathbf v,\mathbf w\in\mathbb C^n$, define

$$
\langle \mathbf v,\mathbf w\rangle_H=\mathbf v^H\mathbf w.
$$

This is the **Hermitian inner product**.
:::

If

$$
\mathbf v=\begin{pmatrix}v_1\\ \vdots\\ v_n\end{pmatrix},\qquad
\mathbf w=\begin{pmatrix}w_1\\ \vdots\\ w_n\end{pmatrix},
$$

then

$$
\langle \mathbf v,\mathbf w\rangle_H
=\overline{v_1}w_1+
\overline{v_2}w_2+
\cdots+
\overline{v_n}w_n.
$$

In particular,

$$
\langle \mathbf v,\mathbf v\rangle_H
=|v_1|^2+|v_2|^2+
\cdots+|v_n|^2\geq 0.
$$

### 1.4 Hermitian Orthogonality

Two complex vectors are **Hermitian orthogonal** if

$$
\langle \mathbf v,\mathbf w\rangle_H=0.
$$

Two subspaces $V,W\subseteq\mathbb C^n$ are Hermitian orthogonal if every vector in $V$ is Hermitian orthogonal to every vector in $W$.

This is the complex replacement for perpendicularity.

---

## 2. Hermitian Conjugate of a Matrix

For a complex matrix $A$, define

$$
A^H=\overline{A}^{\,T}.
$$

This is the **Hermitian conjugate** or **conjugate transpose**.

If

$$
A=\begin{pmatrix}
1&i\\
2-i&3
\end{pmatrix},
$$

then

$$
A^H=\begin{pmatrix}
1&2+i\\
-i&3
\end{pmatrix}.
$$

If all entries of $A$ are real, conjugation changes nothing, so

$$
A^H=A^T.
$$

::: proposition
Hermitian conjugate reverses multiplication order:

$$
(AB)^H=B^HA^H.
$$
:::

The matrix-level reason $A^H$ is the correct mirror of $A$ is:

$$
(A\mathbf v)^H\mathbf w
=\mathbf v^HA^H\mathbf w.
$$

Equivalently,

$$
\langle A\mathbf v,\mathbf w\rangle_H
=
\langle \mathbf v,A^H\mathbf w\rangle_H.
$$

::: attention
No extra abstract structure is being introduced here. In this lecture, $A^H$ means exactly conjugate transpose.
:::

---

## 3. Normal Matrices and Special Cases

### 3.1 Definition

::: proposition
A complex square matrix $A$ is **normal** if

$$
AA^H=A^HA.
$$
:::

In words: $A$ commutes with its Hermitian conjugate.

If $A$ is real, then $A^H=A^T$, so the real version is

$$
AA^T=A^TA.
$$

The reason this condition matters is not obvious from the definition alone. The point is what it does to spectral projections.

### 3.2 Hermitian Symmetric Matrices

A matrix $A$ is **Hermitian symmetric** if

$$
A^H=A.
$$

Example:

$$
A=\begin{pmatrix}2&i\\-i&3\end{pmatrix},
\qquad A^H=A.
$$

If all entries are real, this is exactly the condition for a real symmetric matrix:

$$A^T=A.$$

Hermitian symmetric matrices are automatically normal:

$$
AA^H=A^2=A^HA.
$$

### 3.3 Skew-Hermitian Symmetric Matrices

A matrix $A$ is **skew-Hermitian symmetric** if

$$
A^H=-A.
$$

Example:

$$
A=\begin{pmatrix}i&2+i\\-2+i&3i\end{pmatrix},
\qquad A^H=-A.
$$

If all entries are real, this is exactly the condition for a real skew-symmetric matrix:

$$A^T=-A.$$

Skew-Hermitian symmetric matrices are automatically normal:

$$
AA^H=A(-A)=-A^2=(-A)A=A^HA.
$$

### 3.4 Unitary Matrices

A matrix $U$ is **unitary** if

$$
U^HU=UU^H=I.
$$

If all entries are real, this is exactly a real orthogonal matrix:

$$U^TU=UU^T=I.$$

Write the columns of $U$ as

$$
U=\begin{pmatrix}|&|& &|\\
{\color{blue}\mathbf u_1}&{\color{red}\mathbf u_2}&\cdots&{\color{green}\mathbf u_n}\\
|&|& &|
\end{pmatrix}.
$$

Then $U^HU$ is the Hermitian inner-product table of the columns:

$$
U^HU=
\begin{pmatrix}
\langle {\color{blue}\mathbf u_1},{\color{blue}\mathbf u_1}\rangle_H &
\langle {\color{blue}\mathbf u_1},{\color{red}\mathbf u_2}\rangle_H & \cdots\\
\langle {\color{red}\mathbf u_2},{\color{blue}\mathbf u_1}\rangle_H &
\langle {\color{red}\mathbf u_2},{\color{red}\mathbf u_2}\rangle_H & \cdots\\
\vdots&\vdots&\ddots
\end{pmatrix}.
$$

Thus $U^HU=I$ means the columns form a Hermitian orthonormal basis.

Unitary matrices are automatically normal:

$$
UU^H=I=U^HU.
$$

---

## 4. The Diagonalizability Goal Trace

Before using spectral projections, we must know that the matrix is diagonalizable.

From Lecture 16, diagonalizability can be tested by deleting repeated powers from the characteristic polynomial.

Write the characteristic polynomial honestly as a determinant:

$$
\det(tI-A)=\prod_{i=1}^k(t-\lambda_i)^{m_i}.
$$

Define the radical polynomial by deleting repeated powers:

$$
r_A(t)=\prod_{i=1}^k(t-\lambda_i).
$$

The practical criterion is:

$$
A\text{ diagonalizable}
\quad\Longleftrightarrow\quad
r_A(A)=0.
$$

So the goal is not a linear list of steps. The goal is the single obstruction:

$$
\boxed{r_A(A)}.
$$

For normal matrices, we want to prove

$$
r_A(A)=0.
$$

The trace of the argument is:

| Object | Reason |
|---|---|
| $N=r_A(A)$ | radical polynomial plugged into $A$ |
| $N$ is nilpotent | follows from Cayley--Hamilton and repeated powers |
| $N$ is normal | polynomial output of a normal matrix |
| normal + nilpotent implies the zero matrix | proof below |
| therefore $N=0$ | hence $r_A(A)=0$ |
| therefore $A$ is diagonalizable | by the practical criterion |

---

## 5. Why $r_A(A)$ Is Nilpotent

A matrix $N$ is **nilpotent** if some power of it is zero:

$$
N^m=0
$$

for some positive integer $m$.

Now write

$$
\det(tI-A)=\prod_{i=1}^k(t-\lambda_i)^{m_i},
\qquad
r_A(t)=\prod_{i=1}^k(t-\lambda_i).
$$

Let

$$
M=\max\{m_1,\ldots,m_k\}.
$$

Then every exponent in $r_A(t)^M$ is large enough to contain the corresponding exponent in $\det(tI-A)$:

$$
r_A(t)^M
=\prod_{i=1}^k(t-\lambda_i)^M
=\det(tI-A)\,q(t)
$$

for some polynomial $q(t)$.

Plug in $A$:

$$
r_A(A)^M
=\left.\det(tI-A)\right|_{t=A}q(A)=0
$$

by Cayley--Hamilton.

::: proposition
For every matrix $A$, the matrix $r_A(A)$ is nilpotent.
:::

---

## 6. Normal Nilpotent Matrices Collapse to Zero

Assume $N$ is both normal and nilpotent.

Nilpotent means that some power is zero. Choose a power of two beyond that exponent:

$$
N^{2^r}=0.
$$

Because $N$ is normal,

$$
NN^H=N^HN,
$$

so powers of $N$ commute with powers of $N^H$.

Start with

$$
N^{2^r}=0.
$$

Multiply by $(N^H)^{2^r}$:

$$
N^{2^r}(N^H)^{2^r}=0.
$$

Since powers commute, fold the product as

$$
\bigl(N^{2^{r-1}}(N^H)^{2^{r-1}}\bigr)
\bigl(N^{2^{r-1}}(N^H)^{2^{r-1}}\bigr)=0.
$$

Set

$$
M=N^{2^{r-1}}.
$$

Then the equation becomes

$$
(MM^H)(MM^H)^H=0.
$$

### 6.1 The Hidden Tool: $XX^H=0\Rightarrow X=0$

Write the rows of $X$ as colored vectors:

$$
X=\begin{pmatrix}
{\color{blue}\mathbf r_1}\\
{\color{red}\mathbf r_2}\\
{\color{green}\mathbf r_3}\\
\vdots
\end{pmatrix}.
$$

Then $XX^H$ is the Hermitian inner-product table of these row vectors:

$$
XX^H=
\begin{pmatrix}
\langle {\color{blue}\mathbf r_1},{\color{blue}\mathbf r_1}\rangle_H &
\langle {\color{blue}\mathbf r_1},{\color{red}\mathbf r_2}\rangle_H &
\langle {\color{blue}\mathbf r_1},{\color{green}\mathbf r_3}\rangle_H & \cdots\\
\langle {\color{red}\mathbf r_2},{\color{blue}\mathbf r_1}\rangle_H &
\langle {\color{red}\mathbf r_2},{\color{red}\mathbf r_2}\rangle_H &
\langle {\color{red}\mathbf r_2},{\color{green}\mathbf r_3}\rangle_H & \cdots\\
\langle {\color{green}\mathbf r_3},{\color{blue}\mathbf r_1}\rangle_H &
\langle {\color{green}\mathbf r_3},{\color{red}\mathbf r_2}\rangle_H &
\langle {\color{green}\mathbf r_3},{\color{green}\mathbf r_3}\rangle_H & \cdots\\
\vdots&\vdots&\vdots&\ddots
\end{pmatrix}.
$$

If $XX^H=0$, then the diagonal entries are zero:

$$
\|{\color{blue}\mathbf r_1}\|_H^2=0,
\qquad
\|{\color{red}\mathbf r_2}\|_H^2=0,
\qquad
\|{\color{green}\mathbf r_3}\|_H^2=0,
\quad\ldots
$$

So every row vector is zero, hence $X=0$.

### 6.2 Use the Tool Twice

We had

$$
(MM^H)(MM^H)^H=0.
$$

Apply the table fact to

$$X=MM^H.$$

This gives

$$MM^H=0.$$

Apply the same table fact again to

$$X=M.$$

This gives

$$M=0.$$

Since $M=N^{2^{r-1}}$, we have shown

$$
N^{2^r}=0\quad\Longrightarrow\quad N^{2^{r-1}}=0.
$$

Repeat the descent:

$$
N^{2^r}=0
\Longrightarrow
N^{2^{r-1}}=0
\Longrightarrow
N^{2^{r-2}}=0
\Longrightarrow
\cdots
\Longrightarrow
N^2=0
\Longrightarrow
N=0.
$$

::: proposition
Normal nilpotent matrices must be zero.
:::

---

## 7. Why $r_A(A)$ Is Normal

We still need to show that for a normal matrix $A$,

$$
r_A(A)\text{ is normal}.
$$

This is a polynomial question.

If

$$AA^H=A^HA,$$

then powers of $A$ commute with powers of $A^H$:

$$
A^m(A^H)^n=(A^H)^nA^m.
$$

Also, for a polynomial $f$,

$$
f(A)^H=\overline f(A^H),
$$

where $\overline f$ conjugates the coefficients of $f$.

Therefore $f(A)$ commutes with $f(A)^H$.

::: proposition
If $A$ is normal, then every polynomial $f(A)$ is normal.
:::

For example, if

$$f(A)=A^2+2A+I,$$

then

$$f(A)^H=(A^H)^2+2A^H+I.$$

A typical term commutes because

$$
A^2(A^H)^2
=AA A^HA^H
=AA^HAA^H
=(A^H)^2A^2.
$$

Term by term, the same commuting changes

$$
f(A)f(A)^H
\quad\text{into}\quad
f(A)^Hf(A).
$$

Now close the trace:

$$
N=r_A(A).
$$

Then

| Statement | Reason |
|---|---|
| $N$ is nilpotent | $r_A(A)$ is always nilpotent |
| $N$ is normal | $A$ is normal and polynomial outputs preserve normality |
| $N=0$ | normal nilpotent collapse |

Therefore

$$r_A(A)=0.$$

By the practical criterion, $A$ is diagonalizable.

::: proposition
Every normal matrix over $\mathbb C$ is diagonalizable.
:::

---

## 8. Spectral Projections of Normal Matrices

Now diagonalizability is legitimate, so we may use spectral projections:

$$
A=\lambda_1P_1+
\lambda_2P_2+
\cdots+
\lambda_kP_k,
$$

where

$$
P_i=f_i(A),\qquad P_i^2=P_i,
\qquad P_iP_j=0\ (i\neq j),
\qquad P_1+
\cdots+P_k=I.
$$

Since each $P_i$ is a polynomial in $A$, and $A$ is normal, each $P_i$ is normal.

But each $P_i$ is also a projection. We need one more fact.

::: proposition
If

$$P^2=P\qquad\text{and}\qquad PP^H=P^HP,$$

then

$$P=P^H.$$
:::

So a normal projection cannot be oblique. It must be a Hermitian projection.

The proof measures the obliqueness by

$$M=P-P^HP.$$

If $M=0$, then

$$P=P^HP.$$

Taking Hermitian conjugates gives

$$P^H=P^HP,$$

so $P=P^H$.

Now compute

$$
MM^H=(P-P^HP)(P^H-P^HP).
$$

Expanding:

$$
MM^H
=PP^H-PP^HP-P^HPP^H+P^HPP^HP.
$$

Using

$$P^2=P,\qquad (P^H)^2=P^H,\qquad PP^H=P^HP,$$

each term simplifies, and

$$MM^H=0.$$

By the table fact $XX^H=0\Rightarrow X=0$, we get $M=0$. Therefore $P=P^H$.

Applying this to spectral projections:

$$
P_i=f_i(A),\quad A\text{ normal}
\quad\Longrightarrow\quad
P_i\text{ normal}.
$$

Since $P_i^2=P_i$, the normal projection lemma gives

$$
P_i^H=P_i.
$$

::: proposition
For a normal matrix, all spectral projections are Hermitian projections.
:::

---

## 9. Hermitian Spectral Projections Give Perpendicular Eigenspaces

The goal here is not merely to prove that the column space of one projection is perpendicular to its null space.  The goal is stronger and more specific:

$$
E_{\lambda_i}\perp_H E_{\lambda_j}
\qquad(i\neq j).
$$

Since spectral projections satisfy

$$
\operatorname{Im}(P_i)=E_{\lambda_i},
$$

this becomes the following question:

> If $\mathbf v$ comes from the image of $P_i$ and $\mathbf w$ comes from the image of $P_j$, why is their Hermitian inner product zero?

Take two different spectral projections $P_i$ and $P_j$.

Let

$$
\mathbf v\in\operatorname{Im}(P_i),
\qquad
\mathbf w\in\operatorname{Im}(P_j),
\qquad i\neq j.
$$

Then

$$P_i\mathbf v=\mathbf v,
\qquad
P_j\mathbf w=\mathbf w.
$$

So

$$
\langle \mathbf v,\mathbf w\rangle_H
=\langle P_i\mathbf v,P_j\mathbf w\rangle_H
=(P_i\mathbf v)^H(P_j\mathbf w).
$$

Because $P_i^H=P_i$ and compatible projections satisfy $P_iP_j=0$,

$$
(P_i\mathbf v)^H(P_j\mathbf w)
=\mathbf v^HP_i^HP_j\mathbf w
=\mathbf v^HP_iP_j\mathbf w
=0.
$$

Therefore different eigenspaces are Hermitian perpendicular:

$$
E_{\lambda_i}\perp_H E_{\lambda_j}\qquad (i\neq j).
$$

---

## 10. The Converse Direction

Suppose $A$ is diagonalizable and every spectral projection is Hermitian:

$$
A=\sum_i\lambda_iP_i,
\qquad
P_i^H=P_i.
$$

Then

$$
A^H=
\left(\sum_i\lambda_iP_i\right)^H
=\sum_i\overline{\lambda_i}P_i.
$$

Because compatible projections multiply by killing different indices,

$$
AA^H=
\sum_i |\lambda_i|^2P_i
= A^HA.
$$

So $A$ is normal.

::: proposition
A complex matrix $A$ is normal if and only if it is diagonalizable and all of its spectral projections are Hermitian.
:::

This is the spectral-projection form of the theorem.

---

## 11. From Spectral Projections to Unitary Diagonalization

For normal $A$, we now know:

$$
P_i^H=P_i,
\qquad
\operatorname{Col}(P_i)=E_{\lambda_i}.
$$

From the orthogonal projection lectures, diagonal cross-filling of a Hermitian projection produces an orthonormal basis for its column space.

Write the cross-filled columns as

$$
{\color{blue}U_i}=\begin{pmatrix}
|&|& &|\\
\mathbf u_{i,1}&\mathbf u_{i,2}&\cdots&\mathbf u_{i,r_i}\\
|&|& &|
\end{pmatrix}.
$$

Then the old tool gives

$$
{\color{red}P_i}
={\color{blue}U_i}{\color{blue}U_i}^H,
\qquad
{\color{blue}U_i}^H{\color{blue}U_i}=I_{r_i}.
$$

Also

$$
\operatorname{Col}({\color{blue}U_i})
=\operatorname{Col}({\color{red}P_i})
=E_{\lambda_i}.
$$

### 11.1 The AB/BA Reversal Mechanism

We use the projection-theoretic reversal theorem from [Lecture 8: Cross-Filling Projections](./cross-filling-projections.md#42-the-reverse-question-if-uv--i-what-about-vu).

::: proposition
If $A$ and $B$ are square matrices and

$$
AB=I,
$$

then

$$
BA=I.
$$
:::

The proof in Lecture 8 is not an inverse shortcut. It is projection-theoretic:

1. $AB=I$ implies $BA$ is a projection.
2. Then $I-BA$ is also a projection.
3. Trace reversal gives $\operatorname{tr}(BA)=\operatorname{tr}(AB)=\operatorname{tr}(I)$.
4. Hence $\operatorname{tr}(I-BA)=0$.
5. For projections, trace equals rank, so $\operatorname{rank}(I-BA)=0$.
6. Therefore $I-BA=0$, hence $BA=I$.

We will only apply this theorem here.

### 11.2 Stack the Blocks

Stack all eigenspace bases:

$$
{\color{teal}\Omega}
=
\begin{pmatrix}
{\color{blue}U_1}&{\color{red}U_2}&\cdots&{\color{green}U_k}
\end{pmatrix}.
$$

Then

$$
{\color{teal}\Omega}{\color{teal}\Omega}^H
=U_1U_1^H+U_2U_2^H+
\cdots+U_kU_k^H.
$$

But these are exactly the spectral projections:

$$
{\color{teal}\Omega}{\color{teal}\Omega}^H
=P_1+P_2+
\cdots+P_k=I.
$$

Now apply the AB/BA reversal mechanism to

$$
A={\color{teal}\Omega},
\qquad
B={\color{teal}\Omega}^H.
$$

Since

$$
{\color{teal}\Omega}{\color{teal}\Omega}^H=I,
$$

the reversed order also gives

$$
{\color{teal}\Omega}^H{\color{teal}\Omega}=I.
$$

Therefore $\Omega$ is unitary.

Each column of $\Omega$ is an eigenvector of $A$. Thus

$$
A\Omega=\Omega\Lambda,
$$

where $\Lambda$ is diagonal with the eigenvalues repeated according to eigenspace dimensions.

Multiplying by $\Omega^H$ gives

$$
\boxed{\Omega^HA\Omega=\Lambda.}
$$

::: proposition
Normal matrices are unitarily diagonalizable.
:::

---

## 12. Example

Consider

$$
A=\begin{pmatrix}
-2&1&1\\
1&-2&1\\
1&1&-2
\end{pmatrix}.
$$

This matrix is real symmetric, so

$$A^H=A^T=A.$$

Therefore $A$ is normal.

The eigenvalues are

$$0,-3,-3.$$

The radical polynomial is

$$t(t+3).$$

The spectral projections are

$$
P_0=\frac{A+3I}{3}
=\frac13
\begin{pmatrix}
1&1&1\\
1&1&1\\
1&1&1
\end{pmatrix}
$$

and

$$
P_{-3}=I-P_0
=\frac13
\begin{pmatrix}
2&-1&-1\\
-1&2&-1\\
-1&-1&2
\end{pmatrix}.
$$

The first projection gives the unit eigenvector

$$
\mathbf u_0=rac1{\sqrt3}\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

Cross-filling $P_{-3}$ gives two orthonormal eigenvectors spanning the $-3$ eigenspace. Stacking the one vector from $P_0$ and the two vectors from $P_{-3}$ produces a unitary matrix $\Omega$ such that

$$
\Omega^HA\Omega=
\begin{pmatrix}
0&&\\
&-3&\\
&&-3
\end{pmatrix}.
$$

The important point is not the arithmetic of this example. The important point is the mechanism:

$$
\text{normal}
\Longrightarrow
\text{Hermitian spectral projections}
\Longrightarrow
\text{orthogonal eigenspaces}
\Longrightarrow
\text{unitary diagonalization}.
$$

---

## 13. Eigenvalue Geometry of Special Normal Matrices

For a normal matrix,

$$
A=\sum_i\lambda_iP_i,
\qquad
P_i^H=P_i.
$$

Taking Hermitian conjugate gives

$$
A^H=\sum_i\overline{\lambda_i}P_i.
$$

So $A^H$ acts on the same orthogonal eigenspaces, with conjugated eigenvalues.

### 13.1 Hermitian Symmetric

If $A^H=A$, then

$$
\overline{\lambda_i}=\lambda_i.
$$

So all eigenvalues are real.

Hermitian symmetric normal matrices have eigenvalues on the real axis.

### 13.2 Skew-Hermitian Symmetric

If $A^H=-A$, then

$$
\overline{\lambda_i}=-\lambda_i.
$$

So all eigenvalues are purely imaginary.

Skew-Hermitian normal matrices have eigenvalues on the imaginary axis.

### 13.3 Unitary

If $U^HU=I$, then on an eigenvector

$$
U\mathbf v=\lambda\mathbf v
$$

and length is preserved:

$$
\|U\mathbf v\|_H=\|\mathbf v\|_H.
$$

Thus

$$
|\lambda|=1.
$$

Unitary normal matrices have eigenvalues on the unit circle.

---

## 14. Summary

Normal matrices are the matrices whose spectral decomposition respects Hermitian geometry.

| Concept | Condition | Real special case | Eigenvalue geometry |
|---|---|---|---|
| Normal | $AA^H=A^HA$ | $AA^T=A^TA$ | orthogonal spectral decomposition |
| Hermitian | $A^H=A$ | symmetric $A^T=A$ | eigenvalues real |
| Skew-Hermitian | $A^H=-A$ | skew-symmetric $A^T=-A$ | eigenvalues imaginary |
| Unitary | $U^HU=UU^H=I$ | orthogonal $U^TU=UU^T=I$ | eigenvalues on unit circle |

The proof pipeline is:

$$
A\text{ normal}
\Longrightarrow
r_A(A)\text{ normal and nilpotent}
\Longrightarrow
r_A(A)=0
\Longrightarrow
A\text{ diagonalizable}.
$$

Then spectral projections become Hermitian:

$$
P_i=f_i(A),\quad A\text{ normal}
\Longrightarrow
P_i\text{ normal},
\quad P_i^2=P_i
\Longrightarrow
P_i^H=P_i.
$$

Finally:

$$
P_i^H=P_i
\Longrightarrow
E_{\lambda_i}\perp_HE_{\lambda_j}
\Longrightarrow
\Omega^HA\Omega=\Lambda.
$$

::: tip
The slogan is:

$$
\boxed{\text{normal} = \text{diagonalizable with orthogonal spectral projections}.}
$$
:::

---

## Exercises

1. Let
   $$A=\begin{pmatrix}1&i\\-i&2\end{pmatrix}.$$
   Verify that $A$ is Hermitian symmetric and hence normal.

2. Let
   $$U=\frac1{\sqrt2}\begin{pmatrix}1&i\\ i&1\end{pmatrix}.$$
   Compute $U^HU$ and verify that the columns form a Hermitian orthonormal basis.

3. Suppose $A$ is normal and
   $$\det(tI-A)=(t-2)^3(t+1)^2.$$
   Write the radical polynomial $r_A(t)$. What must $r_A(A)$ be?

4. Let $P^2=P$ and $P^H=P$. Prove directly that
   $$\operatorname{Col}(P)\perp_H\operatorname{Null}(P).$$

5. Suppose $AB=I$ for square matrices. Let $Q=BA$. Prove that $Q$ is a projection, then use $I-Q$ and trace equals rank for projections to conclude $BA=I$.

6. For a normal matrix with spectral projections $P_i$, prove directly that vectors in $\operatorname{Im}(P_i)$ and $\operatorname{Im}(P_j)$ are Hermitian orthogonal when $i\neq j$.
