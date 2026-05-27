# Tutorial: Week 14 — Normal Matrices and Eigenvalue Geometry

> **For**: Teaching Assistants conducting tutorial sessions  
> **Related Lecture**: Lecture 19: Normal Matrices  
> **Duration**: 50 minutes  
> **Core standard**: For normal matrices, matrix equations become geometric restrictions on eigenvalues. Hermitian means real line, skew-Hermitian means imaginary line, unitary means unit circle, and Möbius transformations move these shapes.

---

## 0. Session Goal

This tutorial has seven standard exercises.

| Part | Standard exercise | Main lesson |
|---|---|---|
| A | read eigenvalue shapes | Hermitian / skew-Hermitian / unitary are geometric conditions |
| B | solve $X^H=X^2$ | matrix equation becomes scalar equation $\overline\lambda=\lambda^2$ |
| C | nilpotent normal checkpoint | why Hermitian conjugate is essential, not transpose |
| D | Cayley transform | skew-Hermitian matrices produce unitary matrices |
| E | inverse Cayley transform | unitary matrices without $-1$ come from skew-Hermitian matrices |
| F | real version | real skew-symmetric matrices produce real orthogonal matrices |
| G | unitary diagonalization | spectral projections, diagonal cross-filling, then stacking |

The guiding principle is:

$$
A\text{ normal},\qquad A=\sum_i\lambda_iP_i,
\qquad A^H=\sum_i\overline{\lambda_i}P_i.
$$

So a matrix equation involving $A$ and $A^H$ becomes a scalar equation involving each eigenvalue $\lambda_i$.

::: attention
This shortcut depends on normality. Without normality, eigenvalue information may miss nilpotent or non-orthogonal behavior.
:::

---

## Part A: Eigenvalue Shapes (8 min)

### Problem 1. Match the matrix condition to the eigenvalue shape

Assume $A$ is normal. Determine where the eigenvalues must lie in each case:

1. $A^H=A$;
2. $A^H=-A$;
3. $A^HA=I$.

::: details Solution

Because $A$ is normal, write

$$
A=\sum_i\lambda_iP_i,
\qquad
A^H=\sum_i\overline{\lambda_i}P_i,
$$

with Hermitian spectral projections $P_i$.

**Case 1: $A^H=A$.**

Comparing the action on each spectral projection gives

$$
\overline{\lambda_i}=\lambda_i.
$$

So each eigenvalue is real. The eigenvalues lie on the real axis.

**Case 2: $A^H=-A$.**

Comparing eigenvalues gives

$$
\overline{\lambda_i}=-\lambda_i.
$$

So each eigenvalue is purely imaginary. The eigenvalues lie on the imaginary axis.

**Case 3: $A^HA=I$.**

On the $\lambda_i$-eigenspace, $A$ acts by $\lambda_i$ and $A^H$ acts by $\overline{\lambda_i}$. Therefore

$$
A^HA\text{ acts by }\overline{\lambda_i}\lambda_i=|\lambda_i|^2.
$$

Since $A^HA=I$, we get

$$
|\lambda_i|^2=1.
$$

So the eigenvalues lie on the unit circle.

:::

::: tip
For normal matrices:

| Matrix condition | Eigenvalue shape |
|---|---|
| $A^H=A$ | real axis |
| $A^H=-A$ | imaginary axis |
| $A^HA=I$ | unit circle |
:::

---

## Part B: A Matrix Equation with $X^H$ (10 min)

### Problem 2. Possible eigenvalues of $X^H=X^2$

Let $X$ be a complex square matrix satisfying

$$
X^H=X^2.
$$

Find all possible eigenvalues of $X$.

::: details Solution

First observe that $X$ is normal. Indeed,

$$
XX^H=X X^2=X^3,
$$

and

$$
X^HX=X^2X=X^3.
$$

Thus

$$
XX^H=X^HX.
$$

So $X$ is normal, and we may use the eigenvalue-shape method.

Let $\lambda$ be an eigenvalue of $X$. Since

$$
X^H=X^2,
$$

we compare eigenvalues on the same spectral piece:

$$
\overline\lambda=\lambda^2.
$$

Now solve the scalar equation.

If $\lambda=0$, then it works.

If $\lambda\neq0$, write $\lambda=re^{i\theta}$ with $r>0$. Then

$$
\overline\lambda=re^{-i\theta},
\qquad
\lambda^2=r^2e^{2i\theta}.
$$

The equation $\overline\lambda=\lambda^2$ gives

$$
r=r^2,
\qquad
 e^{-i\theta}=e^{2i\theta}.
$$

Since $r>0$, we get $r=1$. The angle equation gives

$$
e^{3i\theta}=1.
$$

Therefore

$$
\lambda\in\left\{1,\ e^{2\pi i/3},\ e^{4\pi i/3}\right\}.
$$

Together with $0$, the possible eigenvalues are

$$
\boxed{\lambda\in\left\{0,\ 1,\ e^{2\pi i/3},\ e^{4\pi i/3}\right\}.}
$$

:::

::: remark
The equation $X^H=X^2$ is not first an entry-by-entry equation. The useful way to read it is as an eigenvalue-shape equation:

$$
\overline z=z^2.
$$

This curve consists of $0$ and the three cube roots of unity.
:::

---

## Part C: Why We Need Hermitian Conjugate, Not Transpose (10 min)

### Problem 3. Transpose-normal nilpotents and isotropic vectors

Over $\mathbb C$, construct a nonzero nilpotent matrix $N$ such that

$$
NN^T=N^TN.
$$

Do this through the following steps.

1. Suppose $N$ is nilpotent and commutes with its transpose. Show that

$$
M:=NN^T
$$

is symmetric and nilpotent.

2. From now on, suppose $M$ is symmetric:

$$
M=M^T.
$$

Show that if

$$
MM^T=0,
$$

then every column of $M$ is isotropic for the bilinear form

$$
\langle u,v\rangle_T=u^Tv.
$$

3. Show that

$$
MM^T=0
$$

if and only if all columns of $M$ are pairwise orthogonal isotropic vectors for $u^Tv$.

4. Find a nonzero isotropic vector in $\mathbb C^2$.

5. Find two nonzero isotropic vectors in $\mathbb C^2$ that are perpendicular to each other.

6. Use them to construct a nonzero nilpotent matrix that is normal in the transpose sense.

::: details Solution

### Step 1: commuting with transpose creates a symmetric nilpotent

Assume

$$
N^k=0
$$

for some $k$, and

$$
NN^T=N^TN.
$$

Set

$$
M=NN^T.
$$

First, $M$ is symmetric:

$$
M^T=(NN^T)^T=NN^T=M.
$$

Second, $M$ is nilpotent. Since $N$ commutes with $N^T$, we have

$$
M^k=(NN^T)^k=N^k(N^T)^k=0.
$$

So the transpose-normal nilpotent problem produces a symmetric nilpotent matrix.

### Step 2: $MM^T=0$ means columns are isotropic

Write the columns of $M$ as

$$
M=\begin{pmatrix}|&|&&|\\
m_1&m_2&\cdots&m_n\\
|&|&&|
\end{pmatrix}.
$$

Then

$$
M^TM=
\begin{pmatrix}
m_1^Tm_1&m_1^Tm_2&\cdots&m_1^Tm_n\\
m_2^Tm_1&m_2^Tm_2&\cdots&m_2^Tm_n\\
\vdots&\vdots&\ddots&\vdots\\
m_n^Tm_1&m_n^Tm_2&\cdots&m_n^Tm_n
\end{pmatrix}.
$$

Because $M=M^T$, the equation

$$
MM^T=0
$$

is the same as

$$
M^TM=0.
$$

Therefore the diagonal entries give

$$
m_j^Tm_j=0
$$

for every $j$. Thus every column is isotropic.

### Step 3: the full meaning is pairwise orthogonal isotropic columns

The same table says more. The equation

$$
M^TM=0
$$

is equivalent to

$$
m_i^Tm_j=0
\qquad
\text{for all }i,j.
$$

So

$$
MM^T=0
$$

if and only if the columns of $M$ are pairwise orthogonal for $u^Tv$. In particular, each column is isotropic because the case $i=j$ gives

$$
m_i^Tm_i=0.
$$

Thus the transpose-normal nilpotent phenomenon is exactly the existence of mutually orthogonal isotropic columns.

### Step 4: an isotropic vector in $\mathbb C^2$

Take

$$
u=\begin{pmatrix}1\\ i\end{pmatrix}.
$$

Then

$$
u^Tu=1+i^2=0.
$$

So $u$ is nonzero isotropic for the bilinear form $u^Tv$.

### Step 5: two perpendicular isotropic vectors

In $\mathbb C^2$, the orthogonal complement of this isotropic vector contains the vector itself:

$$
u^Tu=0.
$$

So the two perpendicular isotropic vectors can be chosen as

$$
u_1=u,
\qquad
u_2=u.
$$

This repetition is allowed for building a nonzero rank-one table. The point is that the vector is orthogonal to itself.

### Step 6: construct the transpose-normal nilpotent

Use the isotropic vector to form

$$
N=uu^T.
$$

Explicitly,

$$
N=
\begin{pmatrix}1\\ i\end{pmatrix}
\begin{pmatrix}1&i\end{pmatrix}
=
\begin{pmatrix}
1&i\\
i&-1
\end{pmatrix}.
$$

This matrix is symmetric:

$$
N^T=N.
$$

Therefore

$$
NN^T=N^TN.
$$

And it is nilpotent because

$$
N^2=(uu^T)(uu^T)=u(u^Tu)u^T=0.
$$

Thus

$$
\boxed{N\neq0,
\qquad
N^2=0,
\qquad
NN^T=N^TN.}
$$

:::

::: remark
This is why transpose is not enough over $\mathbb C$. The transpose table $u^Tv$ has nonzero isotropic vectors, so symmetric nilpotents can survive. Hermitian conjugation replaces $u^Tv$ by $u^Hu$, and then no nonzero vector is isotropic.
:::

### Problem 4. Why nilpotent normal matrices collapse

Assume $N$ is normal:

$$
NN^H=N^HN,
$$

and nilpotent:

$$
N^m=0
$$

for some $m\ge1$. Prove that

$$
N=0.
$$

::: details Solution

Choose $m$ minimal such that

$$
N^m=0.
$$

Suppose $m>1$. Put

$$
M=N^{m-1}.
$$

Then

$$
M\neq0,
\qquad
M^2=0.
$$

Since $N$ is normal, every polynomial in $N$ is normal, so $M$ is normal:

$$
MM^H=M^HM.
$$

Now use $M^2=0$. Compute

$$
(M^HM)^2
=M^HMM^HM
=M^H(MM^H)M.
$$

Because $M$ is normal,

$$
MM^H=M^HM.
$$

Therefore

$$
(M^HM)^2
=M^H(M^HM)M
=(M^H)^2M^2=0.
$$

But $M^HM$ is Hermitian positive semidefinite. If a positive semidefinite matrix has square zero, then it is zero. Hence

$$
M^HM=0.
$$

The diagonal entries of $M^HM$ are the squared lengths of the columns of $M$. Therefore every column of $M$ is zero, so

$$
M=0.
$$

This contradicts the minimality of $m$. Hence $m=1$, and

$$
\boxed{N=0.}
$$

:::

::: remark
This is the key collapse in the proof that normal matrices are diagonalizable. The radical polynomial output is nilpotent. Normality makes that output normal. Normal plus nilpotent forces zero.

Conceptually, this is the Hermitian version of the previous transpose example. The previous problem built a nonzero nilpotent symmetric matrix over $\mathbb C$:

$$
N^T=N,
\qquad
N^2=0,
\qquad
N\neq0.
$$

So it is a counterexample to the false statement that every complex symmetric matrix is diagonalizable. This is exactly where isotropic vectors enter. In the transpose world, nilpotent normal matrices can survive because the bilinear form $u^Tv$ has nonzero isotropic vectors. In the Hermitian world, the product $u^Hu$ has no nonzero isotropic vectors:

$$
u^Hu=0
\qquad\Longrightarrow\qquad
u=0.
$$

This also explains why real symmetric matrices diagonalize. Over $\mathbb R$, the transpose product has no nonzero isotropic vectors:

$$
u^Tu=0
\qquad\Longrightarrow\qquad
u=0.
$$

But after extending to $\mathbb C$, the same transpose product $u^Tv$ gains isotropic vectors, for example $(1,i)^T$. That opens the door for nilpotent symmetric matrices and destroys diagonalization. The Hermitian product is the repair: it kills exactly the escape route used by transpose-normal nilpotents. This is why the Hermitian condition is tied to diagonalization. If a matrix class is going to force diagonalization, it must prevent hidden nilpotent pieces, and preventing those pieces means removing isotropic vectors from the inner-product table.
:::

---

## Part D: Cayley Transform from Skew-Hermitian to Unitary (10 min)

### Problem 5. From a line to a circle

Let $X$ be skew-Hermitian:

$$
X^H=-X.
$$

Define

$$
U=(I+X)(I-X)^{-1}.
$$

Prove that $U$ is unitary.

::: details Solution

First, $I-X$ is invertible. Since $X$ is skew-Hermitian, it is normal and its eigenvalues lie on the imaginary axis. Therefore $1$ is not an eigenvalue of $X$, so $I-X$ is invertible.

We prove unitarity directly. Because

$$
X^H=-X,
$$

we have

$$
(I+X)^H=I-X,
\qquad
(I-X)^H=I+X.
$$

Also $I+X$ and $I-X$ commute because both are polynomials in $X$.

Now compute

$$
U^H
=\left((I+X)(I-X)^{-1}\right)^H
=\left((I-X)^{-1}\right)^H(I+X)^H.
$$

Using $(B^{-1})^H=(B^H)^{-1}$,

$$
U^H=(I+X)^{-1}(I-X).
$$

Therefore

$$
U^HU
=(I+X)^{-1}(I-X)(I+X)(I-X)^{-1}.
$$

Since $I-X$ and $I+X$ commute, this becomes

$$
U^HU=I.
$$

Thus

$$
\boxed{U\text{ is unitary}.}
$$

:::

### Eigenvalue-shape explanation

If $X$ has eigenvalue $\lambda$, then $U$ has eigenvalue

$$
\mu=\frac{1+\lambda}{1-\lambda}.
$$

For skew-Hermitian $X$, $\lambda$ is purely imaginary. Write $\lambda=ib$ with $b\in\mathbb R$. Then

$$
\mu=\frac{1+ib}{1-ib}.
$$

Its absolute value is

$$
|\mu|^2
=\frac{(1+ib)(1-ib)}{(1-ib)(1+ib)}=1.
$$

So the Möbius transformation

$$
\boxed{z\longmapsto\frac{1+z}{1-z}}
$$

sends the imaginary axis to the unit circle.

::: tip
This is the geometric content of the Cayley transform:

$$
\boxed{\text{skew-Hermitian line }\longrightarrow\text{ unitary circle}.}
$$
:::

---

## Part E: Inverse Cayley Transform (8 min)

### Problem 6. From a unitary matrix back to a skew-Hermitian matrix

Let $U$ be unitary and assume $-1$ is not an eigenvalue of $U$. Define

$$
X=(U-I)(U+I)^{-1}.
$$

Prove that $X$ is skew-Hermitian.

::: details Solution

Since $-1$ is not an eigenvalue of $U$, the matrix $U+I$ is invertible.

Because $U$ is unitary,

$$
U^H=U^{-1}.
$$

We want to prove

$$
X^H=-X.
$$

Compute

$$
X^H
=\left((U-I)(U+I)^{-1}\right)^H
=\left((U+I)^{-1}\right)^H(U-I)^H.
$$

So

$$
X^H=(U^H+I)^{-1}(U^H-I).
$$

Substitute $U^H=U^{-1}$:

$$
X^H=(U^{-1}+I)^{-1}(U^{-1}-I).
$$

Now rewrite

$$
U^{-1}+I=U^{-1}(I+U),
\qquad
U^{-1}-I=U^{-1}(I-U).
$$

Thus

$$
X^H=(I+U)^{-1}U\,U^{-1}(I-U).
$$

Hence

$$
X^H=(I+U)^{-1}(I-U).
$$

Since $I+U$ and $I-U$ commute, we get

$$
X^H=-(U-I)(U+I)^{-1}=-X.
$$

Therefore

$$
\boxed{X\text{ is skew-Hermitian}.}
$$

:::

::: remark
The missing eigenvalue condition is necessary. The scalar inverse formula

$$
z=\frac{\mu-1}{\mu+1}
$$

breaks at $\mu=-1$. So the inverse Cayley transform covers unitary matrices whose eigenvalues avoid $-1$.
:::

---

## Part F: Real Skew-Symmetric to Real Orthogonal (7 min)

### Problem 7. The real version

Let $S$ be a real skew-symmetric matrix:

$$
S^T=-S.
$$

Define

$$
Q=(I+S)(I-S)^{-1}.
$$

Prove that $Q$ is a real orthogonal matrix.

::: details Solution

Since $S$ is real, the matrix $Q$ is real whenever it is defined.

A real skew-symmetric matrix satisfies

$$
S^H=S^T=-S.
$$

So $S$ is skew-Hermitian as a complex matrix. By Problem 3, the Cayley transform

$$
Q=(I+S)(I-S)^{-1}
$$

is unitary:

$$
Q^HQ=I.
$$

But $Q$ is real, so

$$
Q^H=Q^T.
$$

Therefore

$$
Q^TQ=I.
$$

Thus

$$
\boxed{Q\text{ is real orthogonal}.}
$$

:::

### Example

Take

$$
S=\begin{pmatrix}0&-a\\a&0\end{pmatrix}.
$$

Then

$$
Q=(I+S)(I-S)^{-1}
=\frac1{1+a^2}
\begin{pmatrix}
1-a^2&-2a\\
2a&1-a^2
\end{pmatrix}.
$$

This is a rotation matrix. If

$$
\cos\theta=\frac{1-a^2}{1+a^2},
\qquad
\sin\theta=\frac{2a}{1+a^2},
$$

then

$$
Q=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
$$

So the Cayley transform turns the real skew-symmetric generator into a real rotation.

---

## Part G: A Non-Trivial Unitary Diagonalization (10 min)

### Problem 8. Diagonalize a normal matrix by spectral projections

Consider

$$
A=\begin{pmatrix}
-2&1&1\\
1&-2&1\\
1&1&-2
\end{pmatrix}.
$$

Use the normal-matrix method from the slides:

1. compute spectral projections;
2. diagonal cross-fill each Hermitian projection;
3. stack the resulting orthonormal eigenvectors into $\Omega$;
4. conclude $\Omega^HA\Omega$ is diagonal.

::: details Solution

The matrix is real symmetric:

$$
A^H=A^T=A.
$$

Therefore $A$ is normal. The advantage is that its spectral projections will be Hermitian projections, so diagonal cross-filling will produce orthonormal vectors.

First compute

$$
\det(tI-A)=t(t+3)^2.
$$

The distinct eigenvalues are

$$
0,
\qquad
-3.
$$

The radical polynomial is

$$
t(t+3).
$$

So the Lagrange spectral projections are

$$
P_0=\frac{A+3I}{3}
=\frac13
\begin{pmatrix}
1&1&1\\
1&1&1\\
1&1&1
\end{pmatrix},
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

Now diagonal cross-fill the projections.

For $P_0$, the rank is $1$, and

$$
P_0=\mathbf u_0\mathbf u_0^H,
\qquad
\mathbf u_0=\frac1{\sqrt3}
\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

For $P_{-3}$, the rank is $2$. One diagonal cross-filling is

$$
P_{-3}=\mathbf u_1\mathbf u_1^H+\mathbf u_2\mathbf u_2^H,
$$

where

$$
\mathbf u_1=\frac1{\sqrt2}
\begin{pmatrix}1\\-1\\0\end{pmatrix},
\qquad
\mathbf u_2=\frac1{\sqrt6}
\begin{pmatrix}1\\1\\-2\end{pmatrix}.
$$

Thus

$$
P_0+P_{-3}=I
$$

becomes

$$
\mathbf u_0\mathbf u_0^H+
\mathbf u_1\mathbf u_1^H+
\mathbf u_2\mathbf u_2^H=I.
$$

Stack the vectors as columns:

$$
\Omega=
\begin{pmatrix}
\mathbf u_0&\mathbf u_1&\mathbf u_2
\end{pmatrix}
=
\begin{pmatrix}
\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\
\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}\\
\frac1{\sqrt3}&0&-\frac2{\sqrt6}
\end{pmatrix}.
$$

The previous identity is exactly

$$
\Omega\Omega^H=I.
$$

Since $\Omega$ is square, the reversal theorem gives

$$
\Omega^H\Omega=I.
$$

So $\Omega$ is unitary.

The columns lie in the eigenspaces:

$$
\mathbf u_0\in E_0,
\qquad
\mathbf u_1,\mathbf u_2\in E_{-3}.
$$

Therefore

$$
A\Omega=
\Omega
\begin{pmatrix}
0&0&0\\
0&-3&0\\
0&0&-3
\end{pmatrix}.
$$

Multiplying by $\Omega^H$ gives

$$
\boxed{
\Omega^HA\Omega=
\begin{pmatrix}
0&0&0\\
0&-3&0\\
0&0&-3
\end{pmatrix}.}
$$

:::

::: remark
This is the slide method. We do not begin by guessing eigenvectors. We first build spectral projections by Lagrange interpolation, then diagonal cross-fill the Hermitian projections, then stack the rank-one pieces. The unitary matrix appears from the identity

$$
P_0+P_{-3}=I.
$$
:::

---

## Final Motivation: Why Normal Matrices Matter

Normal matrices are not just a technical class of matrices. They are the matrices whose spectral decomposition is compatible with Hermitian geometry:

$$
\boxed{\text{normal} = \text{orthogonal spectral decomposition}.}
$$

This is one reason they appear everywhere in quantum mechanics. Observables are modeled by Hermitian matrices, changes of quantum coordinates are modeled by unitary matrices, and the spectral decomposition records the possible measured values and their orthogonal state spaces.

So understanding normal matrices is part of understanding the mathematics used to describe particles, measurements, and large-scale models of the universe.

---

## Suggested Timing for TAs

| Time | Activity | Target |
|---:|---|---|
| 0–6 min | Problem 1 | eigenvalue-shape table |
| 6–13 min | Problem 2 | solve $X^H=X^2$ by scalar eigenvalue equation |
| 13–25 min | Problems 3–4 | transpose counterexample and nilpotent-normal collapse |
| 25–33 min | Problem 5 | Cayley transform gives unitary matrices |
| 33–39 min | Problem 6 | inverse Cayley transform |
| 39–43 min | Problem 7 | real skew-symmetric gives real orthogonal |
| 43–50 min | Problem 8 | unitary diagonalization by projections |

::: tip
The central picture is:

$$
\boxed{\text{imaginary axis}}\xrightarrow{\ z\mapsto(1+z)/(1-z)\ }\boxed{\text{unit circle}}.
$$

This is why skew-Hermitian matrices can be converted into unitary matrices.
:::
