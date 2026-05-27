# Tutorial: Week 15 — SVD and Positive Semidefinite Geometry

> **For**: Teaching Assistants conducting tutorial sessions  
> **Related Lectures**: Lecture 20: Singular Value Decomposition, Lecture 21: Positive Definite Matrices  
> **Duration**: 50 minutes  
> **Core standard**: Use spectral projections, diagonal cross-filling, and positive-semidefinite order. Avoid determinant-only tests.

---

## 0. Session Goal

Only one main problem is used for each part.

| Part | Main problem | Main lesson |
|---|---|---|
| A | SVD from spectral projections of $A^TA$ | input-axis projections first, vectors second |
| B | PSD construction by diagonal cross-filling | cross-filling produces $MM^T$, not only tests PSD |
| C | product of positive definite matrices | $AB$ is not symmetric but has positive eigenvalues |
| D | projection lemma for PSD sums | a projection plus disjoint PSD part creates a small positive eigenvalue |
| E | disjoint PSD column spaces | decompose by spectral projections and apply the projection lemma |
| F | largest eigenvalue of PSD sums | the top eigenvalue is controlled by positive-semidefinite order |

The two central pictures are:

$$
\boxed{\text{round ball}\xrightarrow{\ A\ }\text{ellipsoid with orthogonal axes}}
$$

and

$$
\boxed{x^HAx\ge0\quad\text{means }A\text{ behaves like squared length}.}
$$

---

## Part A: SVD from Spectral Projections (12 min)

### Problem 1. Find the SVD without guessing eigenvectors first

Let

$$
A=\begin{pmatrix}
1&1\\
1&0\\
0&1
\end{pmatrix}.
$$

Compute an SVD

$$
A=U\Sigma V^T
$$

using the course method:

1. compute $A^TA$;
2. compute spectral projections of $A^TA$;
3. diagonal cross-fill the projections to get input axes;
4. apply $A$ to get output axes.

::: details Solution

First compute the squared-length machine on the input side:

$$
A^TA=
\begin{pmatrix}
2&1\\
1&2
\end{pmatrix}=:G.
$$

The spectral projections of $G$ are

$$
P_3=\frac{G-I}{3-1}
=\frac12
\begin{pmatrix}
1&1\\
1&1
\end{pmatrix},
$$

and

$$
P_1=\frac{G-3I}{1-3}
=\frac12
\begin{pmatrix}
1&-1\\
-1&1
\end{pmatrix}.
$$

These projections are the input-axis projections. Now diagonal cross-fill them.

For $P_3$:

$$
P_3=v_1v_1^T,
\qquad
v_1=\frac1{\sqrt2}
\begin{pmatrix}1\\1\end{pmatrix}.
$$

For $P_1$:

$$
P_1=v_2v_2^T,
\qquad
v_2=\frac1{\sqrt2}
\begin{pmatrix}1\\-1\end{pmatrix}.
$$

The eigenvalues of $A^TA$ are squared singular values:

$$
\sigma_1^2=3,
\qquad
\sigma_2^2=1.
$$

So

$$
\sigma_1=\sqrt3,
\qquad
\sigma_2=1.
$$

Now build the output axes from

$$
Av_i=\sigma_i u_i.
$$

For $v_1$:

$$
Av_1
=\frac1{\sqrt2}
\begin{pmatrix}2\\1\\1\end{pmatrix},
\qquad
u_1=\frac{Av_1}{\sqrt3}
=\frac1{\sqrt6}
\begin{pmatrix}2\\1\\1\end{pmatrix}.
$$

For $v_2$:

$$
Av_2
=\frac1{\sqrt2}
\begin{pmatrix}0\\1\\-1\end{pmatrix},
\qquad
u_2=Av_2
=\frac1{\sqrt2}
\begin{pmatrix}0\\1\\-1\end{pmatrix}.
$$

Complete the output axes by diagonal cross-filling the orthogonal complement:

$$
u_3=\frac1{\sqrt3}
\begin{pmatrix}-1\\1\\1\end{pmatrix}.
$$

Thus

$$
U=
\begin{pmatrix}
\frac2{\sqrt6}&0&-\frac1{\sqrt3}\\
\frac1{\sqrt6}&\frac1{\sqrt2}&\frac1{\sqrt3}\\
\frac1{\sqrt6}&-\frac1{\sqrt2}&\frac1{\sqrt3}
\end{pmatrix},
$$

$$
\Sigma=
\begin{pmatrix}
\sqrt3&0\\
0&1\\
0&0
\end{pmatrix},
\qquad
V=
\begin{pmatrix}
\frac1{\sqrt2}&\frac1{\sqrt2}\\
\frac1{\sqrt2}&-\frac1{\sqrt2}
\end{pmatrix}.
$$

Therefore

$$
\boxed{A=U\Sigma V^T.}
$$

:::

---

## Part B: Positive Semidefinite Matrices from Cross-Filling (10 min)

### Problem 2. Build and classify PSD matrices without determinant tests

For a real parameter $a$, let

$$
C_a=\begin{pmatrix}
2&a\\
a&3
\end{pmatrix}.
$$

Use diagonal cross-filling to answer the following questions.

1. Cross-fill $C_a$ from its first diagonal entry.
2. When the remainder is nonnegative, write $C_a$ explicitly as

$$
C_a=MM^T
$$

by stacking the cross-filled column vectors into $M$.

3. Decide when $C_a$ is positive definite, positive semidefinite, or indefinite.

::: details Solution

Use the first diagonal pivot:

$$
2>0.
$$

Diagonal cross-filling gives

$$
C_a
=
\frac1{2}
\begin{pmatrix}2\\a\end{pmatrix}
\begin{pmatrix}2&a\end{pmatrix}
+
\begin{pmatrix}
0&0\\
0&3-\frac{a^2}{2}
\end{pmatrix}.
$$

Rewrite the first piece as a column times its transpose:

$$
\frac1{2}
\begin{pmatrix}2\\a\end{pmatrix}
\begin{pmatrix}2&a\end{pmatrix}
=
\begin{pmatrix}\sqrt2\\ \frac{a}{\sqrt2}\end{pmatrix}
\begin{pmatrix}\sqrt2& \frac{a}{\sqrt2}\end{pmatrix}.
$$

So if

$$
r:=3-\frac{a^2}{2}\ge0,
$$

then the remainder is also a square:

$$
\begin{pmatrix}
0&0\\
0&r
\end{pmatrix}
=
\begin{pmatrix}0\\\sqrt r\end{pmatrix}
\begin{pmatrix}0&\sqrt r\end{pmatrix}.
$$

Therefore

If

$$
r=3-\frac{a^2}{2}\ge0,
$$

then

$$
C_a
=
\begin{pmatrix}\sqrt2\\ \frac{a}{\sqrt2}\end{pmatrix}
\begin{pmatrix}\sqrt2& \frac{a}{\sqrt2}\end{pmatrix}
+
\begin{pmatrix}0\\\sqrt r\end{pmatrix}
\begin{pmatrix}0&\sqrt r\end{pmatrix}.
$$

Stack the two produced columns:

$$
M=
\begin{pmatrix}
\sqrt2&0\\
\frac{a}{\sqrt2}&\sqrt r
\end{pmatrix}.
$$

Then

$$
\boxed{C_a=MM^T.}
$$

Thus diagonal cross-filling does not merely verify positive semidefiniteness. It constructs the square-root factor $M$ directly.

Now classify the cases.

If

$$
r>0,
$$

then the two stacked columns are independent, so $M$ is invertible and

$$
C_a=MM^T
$$

is positive definite. This means

$$
|a|<\sqrt6.
$$

If

$$
r=0,
$$

then the matrix is a single positive rank-one square, hence positive semidefinite but not definite:

$$
|a|=\sqrt6.
$$

If

$$
r<0,
$$

then the remainder has a negative squared-length direction, hence the matrix is indefinite:

$$
|a|>\sqrt6.
$$

Thus

$$
\boxed{
\begin{array}{c|c}
\text{range of }a&\text{type}\\
\hline
|a|<\sqrt6&\text{positive definite}\\
|a|=\sqrt6&\text{positive semidefinite, not definite}\\
|a|>\sqrt6&\text{indefinite}
\end{array}}
$$

At the semidefinite boundary, for example $a=\sqrt6$,

$$
C_{\sqrt6}
=
\begin{pmatrix}\sqrt2&\sqrt3\end{pmatrix}^T
\begin{pmatrix}\sqrt2&\sqrt3\end{pmatrix}.
$$

:::

::: attention
This is deliberately not a determinant test. The cross-filling display creates the positive squared pieces. When the remainder is nonnegative, stacking those pieces gives $C_a=MM^T$.
:::

---

## Part C: Product of Two Positive Definite Matrices (8 min)

### Problem 3. Why does $AB$ still have positive eigenvalues?

Let $A,B$ be real positive definite matrices:

$$
A=A^T>0,
\qquad
B=B^T>0.
$$

The product $AB$ is usually not symmetric. Prove that all eigenvalues of $AB$ are still positive real numbers.

::: details Solution

Use the positive square root of $A$:

$$
S=A^{1/2}.
$$

Then

$$
AB=S(SBS)S^{-1}.
$$

Therefore

$$
\boxed{AB\sim SBS.}
$$

Now

$$
SBS
$$

is symmetric, because $S=S^T$ and $B=B^T$:

$$
(SBS)^T=SBS.
$$

It is positive definite because for every nonzero vector $x$,

$$
x^TSBSx=(Sx)^TB(Sx)>0.
$$

So $SBS$ is symmetric positive definite. Hence all eigenvalues of $SBS$ are positive real numbers.

Since $AB$ is similar to $SBS$, $AB$ has the same eigenvalues. Therefore

$$
\boxed{\text{all eigenvalues of }AB\text{ are positive real numbers}.}
$$

:::

::: remark
The product $AB$ loses symmetry, but it is only a disguised positive definite symmetric matrix. The disguise is removed by square-root conjugation:

$$
AB\sim A^{1/2}BA^{1/2}.
$$
:::

---

## Part D: Projection Lemma for PSD Sums (10 min)

### Problem 4. A projection plus a disjoint PSD matrix creates a small eigenvalue

Let $A$ be a Hermitian positive semidefinite matrix. Let $P$ be a Hermitian orthogonal projection:

$$
P^2=P=P^H.
$$

Assume

$$
\operatorname{Col}(P)\cap\operatorname{Col}(A)=0.
$$

Show that $P+A$ is positive definite on its column space and has a positive eigenvalue $\lambda$ satisfying

$$
0<\lambda\le1.
$$

::: details Solution

First, $P+A$ is positive semidefinite because both $P$ and $A$ are positive semidefinite.

Also

$$
\operatorname{Null}(P+A)=\operatorname{Null}(P)\cap\operatorname{Null}(A),
$$

so $P+A$ is positive definite on

$$
\operatorname{Col}(P+A).
$$

Now we construct the vector that detects the small eigenvalue.

Since $A$ is Hermitian positive semidefinite,

$$
\operatorname{Col}(A)=\operatorname{Null}(A)^\perp.
$$

The condition

$$
\operatorname{Col}(P)\cap\operatorname{Col}(A)=0
$$

implies that inside

$$
\operatorname{Col}(P+A)=\operatorname{Col}(P)+\operatorname{Col}(A),
$$

there is a nonzero vector perpendicular to $\operatorname{Col}(A)$. Choose a unit vector

$$
v\in\operatorname{Col}(P+A),
\qquad
v\perp\operatorname{Col}(A),
\qquad
\|v\|=1.
$$

Then

$$
Av=0.
$$

Therefore

$$
v^H(P+A)v=v^HPv.
$$

Because $P$ is an orthogonal projection,

$$
0\le v^HPv\le v^Hv=1.
$$

Since $v\in\operatorname{Col}(P+A)$ and $v\ne0$, positive definiteness on the column space gives

$$
v^H(P+A)v>0.
$$

Thus

$$
0<v^H(P+A)v\le1.
$$

By spectral decomposition on $\operatorname{Col}(P+A)$, the smallest positive eigenvalue of $P+A$ is at most this Rayleigh quotient. Hence $P+A$ has a positive eigenvalue $\lambda$ such that

$$
\boxed{0<\lambda\le1.}
$$

:::

---

## Part E: Disjoint PSD Column Spaces (10 min)

### Problem 5. One small eigenvalue in $A+B$

Let $A,B$ be nonzero Hermitian positive semidefinite matrices satisfying

$$
\operatorname{Col}(A)\cap\operatorname{Col}(B)=0.
$$

Prove that $A+B$ has a positive eigenvalue $\lambda$ satisfying

$$
0<\lambda\le
\min\{\lambda_{\min}^+(A),\lambda_{\min}^+(B)\}.
$$

::: details Solution

Let

$$
\alpha=\lambda_{\min}^+(A),
\qquad
\beta=\lambda_{\min}^+(B),
\qquad
m=\min\{\alpha,\beta\}.
$$

We prove the statement using the matrix whose smallest positive eigenvalue is $m$.

If $m=\alpha$, use spectral decomposition of $A$:

$$
A=\sum_i \lambda_i P_i.
$$

Let $P$ be the spectral projection onto the eigenspace of $A$ with eigenvalue $\alpha$. Then

$$
A=\alpha P+A_1,
$$

where $A_1\succeq0$.

The disjointness condition gives

$$
\operatorname{Col}(P)\cap\operatorname{Col}(A_1+B)=0.
$$

Indeed, if

$$
u\in\operatorname{Col}(P)\cap\operatorname{Col}(A_1+B),
$$

then

$$
u=a_1+b,
\qquad
 a_1\in\operatorname{Col}(A_1),
\qquad
 b\in\operatorname{Col}(B).
$$

Since $u,a_1\in\operatorname{Col}(A)$, we get

$$
b=u-a_1\in\operatorname{Col}(A)\cap\operatorname{Col}(B)=0.
$$

Thus $b=0$, and then

$$
u=a_1\in\operatorname{Col}(P)\cap\operatorname{Col}(A_1)=0.
$$

So the disjointness holds.

Now write

$$
A+B=\alpha\left(P+\frac{A_1+B}{\alpha}\right).
$$

By Problem 4, the matrix

$$
P+\frac{A_1+B}{\alpha}
$$

has a positive eigenvalue $\rho$ with

$$
0<\rho\le1.
$$

Therefore $A+B$ has a positive eigenvalue

$$
\lambda=\alpha\rho
$$

satisfying

$$
0<\lambda\le\alpha=m
=\min\{\lambda_{\min}^+(A),\lambda_{\min}^+(B)\}.
$$

If instead $m=\beta$, repeat the same argument with $A$ and $B$ exchanged. This gives a positive eigenvalue $\lambda$ of $A+B$ satisfying

$$
0<\lambda\le\beta=m.
$$

Hence in all cases,

$$
\boxed{0<\lambda\le
\min\{\lambda_{\min}^+(A),\lambda_{\min}^+(B)\}.}
$$

:::

::: remark
There is only one eigenvalue conclusion needed. Choose the summand with the smaller smallest-positive eigenvalue, decompose that summand into its bottom spectral projection plus the rest, and apply the projection lemma.
:::

---

## Part F: Largest Eigenvalue of a PSD Sum (6 min)

### Problem 6. The top eigenvalue cannot go down

Let $A,B$ be Hermitian positive semidefinite matrices. Prove that

$$
\boxed{
\max\{\lambda_{\max}(A),\lambda_{\max}(B)\}
\le
\lambda_{\max}(A+B)
\le
\lambda_{\max}(A)+\lambda_{\max}(B).}
$$

Compare this with Problem 5: the smallest positive eigenvalue can become smaller when two PSD column spaces are added, but the largest eigenvalue is trapped between these simple bounds.

::: details Solution

Use spectral decomposition. For every vector $x$,

$$
x^HAx\le \lambda_{\max}(A)\|x\|^2,
\qquad
x^HBx\le \lambda_{\max}(B)\|x\|^2.
$$

Adding gives

$$
x^H(A+B)x
\le
\bigl(\lambda_{\max}(A)+\lambda_{\max}(B)\bigr)\|x\|^2.
$$

Therefore

$$
\lambda_{\max}(A+B)
\le
\lambda_{\max}(A)+\lambda_{\max}(B).
$$

For the lower bound, choose a unit eigenvector $u$ of $A$ for $\lambda_{\max}(A)$. Since $B\succeq0$,

$$
u^H(A+B)u
=u^HAu+u^HBu
\ge
\lambda_{\max}(A).
$$

Hence

$$
\lambda_{\max}(A+B)\ge \lambda_{\max}(A).
$$

The same argument using a top eigenvector of $B$ gives

$$
\lambda_{\max}(A+B)\ge \lambda_{\max}(B).
$$

Thus

$$
\boxed{
\max\{\lambda_{\max}(A),\lambda_{\max}(B)\}
\le
\lambda_{\max}(A+B)
\le
\lambda_{\max}(A)+\lambda_{\max}(B).}
$$

:::

::: remark
The bottom and the top of the spectrum behave differently. The top eigenvalue is monotone under adding PSD matrices:

$$
A\preceq A+B
\quad\Longrightarrow\quad
\lambda_{\max}(A)\le\lambda_{\max}(A+B).
$$

But the smallest positive eigenvalue is not monotone. Adding a PSD matrix in a new column-space direction can create a new very small positive eigenvalue. That is the phenomenon captured by Problem 5.
:::

---

## Suggested Timing for TAs

| Time | Activity | Target |
|---:|---|---|
| 0–12 min | Problem 1 | SVD via spectral projections of $A^TA$ |
| 12–22 min | Problem 2 | PSD/PD test by diagonal cross-filling |
| 22–30 min | Problem 3 | product of positive definite matrices |
| 30–38 min | Problem 4 | projection lemma for small eigenvalue |
| 38–46 min | Problem 5 | general PSD sum by spectral decomposition |
| 46–50 min | Problem 6 | largest eigenvalue bounds |

::: tip
The final exam-level summary is:

$$
\boxed{A^TA\text{ gives spectral projections onto input axes}.}
$$

$$
\boxed{\text{PSD matrices are sums of positive squared pieces}.}
$$

$$
\boxed{AB\sim A^{1/2}BA^{1/2}\quad(A,B>0).}
$$

$$
\boxed{\operatorname{Col}(A)\cap\operatorname{Col}(B)=0
\Rightarrow
\lambda_{\min}^+(A+B)\le\min\{\lambda_{\min}^+(A),\lambda_{\min}^+(B)\}.}
$$

$$
\boxed{
\max\{\lambda_{\max}(A),\lambda_{\max}(B)\}
\le
\lambda_{\max}(A+B)
\le
\lambda_{\max}(A)+\lambda_{\max}(B).}
$$
:::
