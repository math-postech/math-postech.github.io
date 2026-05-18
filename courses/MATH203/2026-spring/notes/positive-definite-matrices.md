# Lecture 21: Positive Definite and Positive Semidefinite Matrices

> **Theme:** A real symmetric matrix should be read as a machine for measuring squared length. Positive definiteness asks when this measurement is genuinely length-like, when it degenerates, and when it becomes hyperbola-like.

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

So the motivating question is:

$$
\boxed{\text{Which real symmetric matrices can be written as }A=M^TM?}
$$

This forces us to study matrices whose quadratic form never becomes negative.

---

## 2. Three Geometries

The set

$$
\{x:x^TAx=1\}
$$

can look very different depending on the signs in the matrix.

| Matrix type | Shape of $x^TAx=1$ | Meaning |
|---|---|---|
| positive definite | ellipse/circle | genuine length geometry |
| positive semidefinite | degenerate ellipse, lines, cylinder-like shape | some directions have zero length |
| indefinite | hyperbola | not length geometry |

Definitions:

$$
A\succ0
\quad\Longleftrightarrow\quad
x^TAx>0\quad\text{for every }x\ne0.
$$

$$
A\succeq0
\quad\Longleftrightarrow\quad
x^TAx\ge0\quad\text{for every }x.
$$

---

## 3. Matrix as Value Table

For a real symmetric matrix $A$, define

$$
\langle v,w\rangle_A=v^TAw.
$$

The entries of $A$ are values of this form on standard basis vectors:

$$
\boxed{a_{ij}=e_i^TAe_j.}
$$

In particular,

$$
a_{ii}=e_i^TAe_i
$$

is the squared $A$-length of the $i$-th standard basis vector.

---

## 4. Eigenvalue Criterion

If $A$ is real symmetric, then

$$
A=\Omega\Lambda\Omega^T
$$

with $\Omega$ orthogonal and $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$.

Set $y=\Omega^Tx$. Then

$$
x^TAx=y^T\Lambda y
=\lambda_1y_1^2+\cdots+\lambda_ny_n^2.
$$

Therefore:

$$
\boxed{A\succeq0\Longleftrightarrow \lambda_i\ge0\text{ for all }i.}
$$

$$
\boxed{A\succ0\Longleftrightarrow \lambda_i>0\text{ for all }i.}
$$

---

## 5. Factorization Criterion

The opening question has the answer:

$$
\boxed{A=M^TM\Longleftrightarrow A\succeq0.}
$$

One direction is immediate:

$$
A=M^TM
\quad\Longrightarrow\quad
x^TAx=\|Mx\|^2\ge0.
$$

For the converse, use the eigenvalue criterion. If

$$
A=\Omega\Lambda\Omega^T,
\qquad \lambda_i\ge0,
$$

then define

$$
\sqrt\Lambda=\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_n}).
$$

Then

$$
A=\Omega\sqrt\Lambda\sqrt\Lambda\Omega^T
=(\sqrt\Lambda\Omega^T)^T(\sqrt\Lambda\Omega^T).
$$

So one may take

$$
M=\sqrt\Lambda\Omega^T.
$$

---

## 6. Cauchy Inequality for PSD Forms

If $A\succeq0$, then

$$
\boxed{
\langle x,y\rangle_A^2
\le
\langle x,x\rangle_A\langle y,y\rangle_A.
}
$$

This is the main tool for the cross-filling proof.

It implies the zero diagonal lemma:

$$
A\succeq0,\quad a_{ii}=0
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

## 7. Diagonal Cross-Filling Criterion

Diagonal cross-filling at a positive pivot splits

$$
A=P+R.
$$

The rank-one piece satisfies

$$
v^TPv
=
\frac{\langle v,e_i\rangle_A^2}{\langle e_i,e_i\rangle_A}
\ge0.
$$

The remainder satisfies

$$
v^TRv
=
\langle v,v\rangle_A
-
\frac{\langle v,e_i\rangle_A^2}{\langle e_i,e_i\rangle_A}
\ge0
$$

by Cauchy.

So for PSD matrices, positive diagonal pivots produce PSD rank-one pieces and PSD remainders.

Practical criterion:

| Cross-filling behavior | Conclusion |
|---|---|
| positive pivots until zero remainder | positive definite |
| positive pivots plus zero rows/columns | positive semidefinite |
| zero diagonal but nonzero row/column | not positive semidefinite |
| negative diagonal in a remainder | not positive semidefinite |

---

## 8. Determinant Criteria and Literature

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

Our determinant lecture explains the connection:

$$
\boxed{\det A_k=d_1d_2\cdots d_k,}
$$

where $d_1,\ldots,d_k$ are the diagonal cross-filling pivots.

Thus determinant criteria record cumulative products of pivots, while cross-filling records the pivots and remainders themselves.

For semidefinite matrices, leading determinants are not enough. A zero pivot makes products vanish and can hide a later negative direction. Literature then checks all principal minors, which means $2^n-1$ determinants for an $n\times n$ matrix.

Cross-filling is more structural: it checks pivots, zero rows/columns, and remainders directly.

---

## 9. Summary

For real symmetric matrices:

| Test | Positive semidefinite criterion |
|---|---|
| Quadratic form | $x^TAx\ge0$ for all $x$ |
| Eigenvalues | every $\lambda_i\ge0$ |
| Factorization | $A=M^TM$ |
| Cross-filling | positive pivots plus zero-row rule |
| Literature determinant test | all principal minors nonnegative |

Positive definite means the strict version: no nonzero vector has zero $A$-length.
