# Lecture 21: Positive Definite and Positive Semidefinite Matrices

> **Theme:** A real symmetric matrix is a machine for measuring a squared length. The lecture asks when this machine really comes from an ordinary squared norm after a linear transformation.

---

## 1. The Guiding Question

Start from the construction

$$
A=M^TM.
$$

Then for every vector $x$,

$$
x^TAx=x^TM^TMx=(Mx)^T(Mx)=\|Mx\|^2\ge0.
$$

So the guiding question is

$$
\boxed{\text{Which real symmetric matrices can be written as }A=M^TM?}
$$

The necessary condition is clear: $x^TAx$ must never be negative.

---

## 2. Three Geometries

The set

$$
\{x:x^TAx=1\}
$$

is the “unit circle” for the quadratic form. Three basic examples explain the classification.

### Ellipse: positive definite

$$
A=\begin{pmatrix}\frac14&0\\0&1\end{pmatrix},
\qquad
M=\begin{pmatrix}\frac12&0\\0&1\end{pmatrix},
\qquad
A=M^TM.
$$

Then

$$
x^TAx=1
\Longleftrightarrow
\frac{x^2}{4}+y^2=1.
$$

After applying $M$,

$$
Mx=\begin{pmatrix}x/2\\y\end{pmatrix},
\qquad
x^TAx=\|Mx\|^2,
$$

so the ellipse becomes the ordinary unit circle.

### Degenerate case: positive semidefinite

$$
A=\begin{pmatrix}0&0\\0&1\end{pmatrix},
\qquad
M=\begin{pmatrix}0&1\end{pmatrix},
\qquad
A=M^TM.
$$

Here

$$
x^TAx=1\Longleftrightarrow y^2=1.
$$

The map $M(x,y)=y$ projects into a one-dimensional target. The equation becomes

$$
\|M(x,y)\|^2=1,
$$

so the image is the two-point unit sphere $\{1,-1\}$ in $\mathbb R$.

### Hyperbola: indefinite

$$
A=\begin{pmatrix}-1&0\\0&1\end{pmatrix},
\qquad
x^TAx=1\Longleftrightarrow -x^2+y^2=1.
$$

There is no real matrix $M$ with $A=M^TM$, because squared lengths cannot become negative.

---

## 3. Definitions

Let $A$ be a real symmetric matrix.

- $A$ is **positive definite** if

$$
x^TAx>0\quad\text{for every }x\ne0.
$$

- $A$ is **positive semidefinite** if

$$
x^TAx\ge0\quad\text{for every }x.
$$

- $A$ is **negative definite** if

$$
x^TAx<0\quad\text{for every }x\ne0.
$$

- $A$ is **negative semidefinite** if

$$
x^TAx\le0\quad\text{for every }x.
$$

- $A$ is **indefinite** if $x^TAx$ takes both positive and negative values.

Positive definite is stronger than positive semidefinite:

$$
\text{positive definite}\Longrightarrow\text{positive semidefinite}.
$$

Similarly,

$$
\text{negative definite}\Longrightarrow\text{negative semidefinite}.
$$

Semidefinite is the broader category; definite is the strict case.

---

## 4. Factorization Criterion

For a real symmetric matrix $A$,

$$
\boxed{A=M^TM\text{ for some real matrix }M}
\quad\Longleftrightarrow\quad
\boxed{A\text{ is positive semidefinite}.}
$$

One direction is immediate:

$$
A=M^TM
\quad\Longrightarrow\quad
x^TAx=x^TM^TMx=\|Mx\|^2\ge0.
$$

For positive definite, the strengthened existence statement is

$$
\boxed{
A\text{ is positive definite}
\quad\Longleftrightarrow\quad
A=M^TM\text{ for some full-column-rank }M.
}
$$

Indeed, if $M$ has full column rank, then $x\ne0$ implies $Mx\ne0$, hence

$$
x^TM^TMx=\|Mx\|^2>0.
$$

The converse follows from the eigenvalue criterion below.

---

## 5. Matrix Entries as Inner Products

For a real symmetric matrix $A$, define

$$
\langle v,w\rangle_A=v^TAw.
$$

The entries of $A$ are values of this form on standard basis vectors:

$$
\boxed{a_{ij}=e_i^TAe_j=\langle e_i,e_j\rangle_A.}
$$

In particular,

$$
a_{ii}=e_i^TAe_i=\langle e_i,e_i\rangle_A
$$

is the squared $A$-length of the $i$-th standard basis vector. This is why diagonal entries become pivots in diagonal cross-filling.

---

## 6. Eigenvalue Criterion

If $A$ is real symmetric, then

$$
A=\Omega\Lambda\Omega^T,
\qquad
\Omega^T\Omega=I,
$$

with $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$.

Set $y=\Omega^Tx$. Then

$$
x^TAx=y^T\Lambda y
=\lambda_1y_1^2+\cdots+\lambda_ny_n^2.
$$

Therefore:

$$
\boxed{A\succ0\Longleftrightarrow \lambda_i>0\text{ for all }i.}
$$

$$
\boxed{A\succeq0\Longleftrightarrow \lambda_i\ge0\text{ for all }i.}
$$

If the eigenvalues have both positive and negative signs, then $A$ is indefinite.

This continues the eigenvalue picture from normal matrices: for real symmetric matrices, all eigenvalues lie on the real line, and now their positions relative to $0$ decide the geometry.

To finish the factorization criterion, if $A\succeq0$, then all $\lambda_i\ge0$, so

$$
\sqrt\Lambda=\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n})
$$

exists. Hence

$$
A=\Omega\sqrt\Lambda\sqrt\Lambda\Omega^T
=(\sqrt\Lambda\Omega^T)^T(\sqrt\Lambda\Omega^T),
$$

so one may take

$$
M=\sqrt\Lambda\Omega^T.
$$

---

## 7. Diagonal Cross-Filling Test

Perform diagonal cross-filling on a real symmetric matrix $A$.

| Cross-filling behavior | Conclusion |
|---|---|
| process gets stuck at a zero diagonal with nonzero row/column | indefinite |
| nonzero pivots contain both positive and negative numbers | indefinite |
| all pivots are nonnegative and diagonal cross-filling proceeds with no difficulties | positive semidefinite |
| all pivots are nonpositive and diagonal cross-filling proceeds with no difficulties | negative semidefinite |
| number of positive pivots equals the size of the matrix | positive definite |
| number of negative pivots equals the size of the matrix | negative definite |

Running examples:

| Matrix | Pivots | Cross-filling proceeds with no difficulties? | Conclusion |
|---|---:|---|---|
| $\begin{pmatrix}2&0\\0&3\end{pmatrix}$ | $2,3$ | yes | positive definite |
| $\begin{pmatrix}2&0\\0&0\end{pmatrix}$ | $2,0$ | yes: zero row/column | positive semidefinite |
| $\begin{pmatrix}2&0\\0&-3\end{pmatrix}$ | $2,-3$ | yes | indefinite |
| $\begin{pmatrix}-2&0\\0&-3\end{pmatrix}$ | $-2,-3$ | yes | negative definite |

A zero diagonal with a nonzero row/column means the process gets stuck. For example,

$$
A=\begin{pmatrix}1&2\\2&0\end{pmatrix}
$$

has $a_{22}=0$ but row/column $2$ is not zero. Indeed,

$$
\begin{pmatrix}t&1\end{pmatrix}
\begin{pmatrix}1&2\\2&0\end{pmatrix}
\begin{pmatrix}t\\1\end{pmatrix}
=t^2+4t,
$$

which takes both positive and negative values.

---

## 8. Why Positive Pivots Work

Suppose the diagonal pivot is positive:

$$
a_{ii}=\langle e_i,e_i\rangle_A>0.
$$

The diagonal cross-filled rank-one piece $P$ is positive semidefinite because it has the form

$$
P=mm^T.
$$

At pivot direction $e_i$, the column is divided by $\sqrt{\langle e_i,e_i\rangle_A}$. For any vector $v$,

$$
v^TPv
=
\frac{\langle v,e_i\rangle_A^2}{\langle e_i,e_i\rangle_A}
\ge0.
$$

This formula says: $P$ measures only the component of $v$ seen by the pivot direction $e_i$.

The remainder is

$$
R=A-P.
$$

Then

$$
v^TRv
=
\langle v,v\rangle_A
-
\frac{\langle v,e_i\rangle_A^2}{\langle e_i,e_i\rangle_A}.
$$

Cauchy inequality for PSD forms gives

$$
\langle v,e_i\rangle_A^2
\le
\langle v,v\rangle_A\langle e_i,e_i\rangle_A,
$$

so $v^TRv\ge0$. Thus positive pivots split a PSD matrix into a PSD rank-one piece plus a PSD remainder.

---

## 9. Cauchy Inequality for PSD Forms

If $A\succeq0$, then

$$
\boxed{
\langle x,y\rangle_A^2
\le
\langle x,x\rangle_A\langle y,y\rangle_A.
}
$$

### Geometric meaning of the proof

When $\langle x,x\rangle_A>0$, the component of $y$ along $x$ in the $A$-geometry is

$$
\frac{\langle x,y\rangle_A}{\langle x,x\rangle_A}x.
$$

The perpendicular residual is

$$
u=y-\frac{\langle x,y\rangle_A}{\langle x,x\rangle_A}x.
$$

It satisfies

$$
\langle x,u\rangle_A=0.
$$

To avoid fractions in the proof, multiply by $\langle x,x\rangle_A$:

$$
\boxed{
w=\langle x,x\rangle_Ay-\langle x,y\rangle_Ax.
}
$$

This is the same perpendicular segment, scaled for clean algebra. Since $A\succeq0$,

$$
0\le\langle w,w\rangle_A.
$$

Expanding this inequality gives

$$
\langle x,y\rangle_A^2
\le
\langle x,x\rangle_A\langle y,y\rangle_A.
$$

The zero-length case is handled separately: if $\langle x,x\rangle_A=0$, then for all real $t$,

$$
0\le\langle x+ty,x+ty\rangle_A,
$$

which forces $\langle x,y\rangle_A=0$.

### Zero diagonal lemma

Cauchy implies:

$$
A\succeq0,
\quad
 a_{ii}=0
\quad\Longrightarrow\quad
\text{the whole }i\text{-th row and column are zero.}
$$

Indeed,

$$
a_{ij}^2
=\langle e_i,e_j\rangle_A^2
\le
\langle e_i,e_i\rangle_A\langle e_j,e_j\rangle_A
=0.
$$

---

## 10. Determinant Criteria and Literature

Textbooks often state determinant criteria instead of cross-filling.

For positive definite matrices, Sylvester's criterion says:

$$
\det A_1>0,
\quad
\det A_2>0,
\quad\ldots\quad,
\det A_n>0,
$$

where $A_k$ is the $k\times k$ leading principal submatrix.

From the determinant lecture,

$$
\boxed{\det A_k=d_1d_2\cdots d_k,}
$$

where $d_1,\ldots,d_k$ are the diagonal cross-filling pivots.

Thus determinant criteria record cumulative products of pivots, while cross-filling records the pivots and remainders themselves.

For semidefinite matrices, leading determinants are not enough. A zero pivot makes products vanish and can hide a later negative direction. Literature then checks all principal minors, which means $2^n-1$ determinants for an $n\times n$ matrix.

Cross-filling is more structural: it checks pivots, zero rows/columns, and remainders directly.

---

## 11. Summary

For real symmetric matrices:

| Test | Positive semidefinite criterion |
|---|---|
| Quadratic form | $x^TAx\ge0$ for all $x$ |
| Eigenvalues | every $\lambda_i\ge0$ |
| Factorization | $A=M^TM$ |
| Cross-filling | nonnegative pivots and diagonal cross-filling proceeds with no difficulties |
| Literature determinant test | all principal minors nonnegative |

Positive definite is the strict version: the number of positive pivots equals the size of the matrix, equivalently no nonzero vector has zero $A$-length.
