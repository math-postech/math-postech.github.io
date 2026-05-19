# Tutorial: Week 13 — Complex Numbers, Exponentials, and Differential Equations

> **For**: Teaching Assistants conducting tutorial sessions  
> **Related Lectures**: Lecture 17: Complex Numbers, Lecture 18: The Exponential Function  
> **Duration**: 50 minutes  
> **Core standard**: Use complex numbers as the language of rotation, and use the course spectral-decomposition method to compute matrix exponentials.

---

## 0. Session Goal

This tutorial has six standard exercises, one for each idea:

| Part | Standard exercise | Main lesson |
|---|---|---|
| A | conjugate formula | complex fractions become real formulas |
| B | geometric motion rule | angle condition becomes a complex differential equation |
| C | $3\times3$ matrix ODE | compute $e^{At}$ by spectral decomposition |
| D | parameter diagonalizability | delete repeated powers and test the radical polynomial |
| E | trace and eigenvalues | diagonalization preserves trace by similarity |
| F | multiplicity and projection trace | characteristic multiplicity equals eigenspace dimension in diagonalizable case |

The common pipeline is:

$$
\text{complex number}
\quad\longrightarrow\quad
\text{rotation/scaling}
\quad\longrightarrow\quad
\text{exponential motion}.
$$

For matrix equations, the required course pipeline is:

$$
\det(tI-A)
\quad\longrightarrow\quad
\text{eigenvalues}
\quad\longrightarrow\quad
\text{spectral projections}
\quad\longrightarrow\quad
\boxed{e^{At}=\sum_\lambda e^{\lambda t}P_\lambda}.
$$

::: attention
Do not solve matrix differential equations by coordinate tricks first. The coordinate solution is only a check. The official method is spectral decomposition.
:::

---

## Part A: Conjugation Formula (10 min)

### Problem 1. Real and imaginary parts of $1/z$

Let

$$
z=a+bi\neq0.
$$

Use conjugation to prove

$$
\operatorname{Re}\left(\frac1z\right)=\frac{\operatorname{Re}(z)}{|z|^2},
\qquad
\operatorname{Im}\left(\frac1z\right)=-\frac{\operatorname{Im}(z)}{|z|^2}.
$$

::: details Solution

First use

$$
z\overline z=|z|^2.
$$

For the real part:

$$
\frac1z+\frac1{\overline z}
=\frac{\overline z}{z\overline z}+\frac{z}{z\overline z}
=\frac{z+\overline z}{z\overline z}
=\frac{2\operatorname{Re}(z)}{|z|^2}.
$$

But

$$
\frac1z+\frac1{\overline z}
=2\operatorname{Re}\left(\frac1z\right),
$$

so

$$
\boxed{\operatorname{Re}\left(\frac1z\right)=\frac{\operatorname{Re}(z)}{|z|^2}.}
$$

For the imaginary part:

$$
\frac1z-\frac1{\overline z}
=\frac{\overline z-z}{z\overline z}
=\frac{-2i\operatorname{Im}(z)}{|z|^2}.
$$

But

$$
\frac1z-\frac1{\overline z}
=2i\operatorname{Im}\left(\frac1z\right),
$$

so

$$
\boxed{\operatorname{Im}\left(\frac1z\right)=-\frac{\operatorname{Im}(z)}{|z|^2}.}
$$

For $z=a+bi$, this says

$$
\boxed{\frac1z=\frac{a}{a^2+b^2}-i\frac{b}{a^2+b^2}.}
$$

:::

---

## Part B: Geometric Motion Rule (15 min)

### Problem 2. Velocity is always $120^\circ$ from position

A particle moves in the plane. Represent its position by a complex number $z(t)$.

Assume:

- the velocity is obtained by rotating the position vector counterclockwise by $120^\circ$;
- the speed is proportional to the distance from the origin, with proportionality constant $c>0$.

Find the motion $z(t)$ in terms of $z(0)=z_0$.

::: details Solution 1: complex-number solution

Rotation by $120^\circ$ is multiplication by

$$
e^{2\pi i/3}=\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}
=-\frac12+\frac{\sqrt3}{2}i.
$$

The rule says

$$
z'(t)=c e^{2\pi i/3}z(t).
$$

Therefore

$$
z(t)=e^{c e^{2\pi i/3}t}z_0.
$$

Since

$$
c e^{2\pi i/3}=-\frac c2+\frac{\sqrt3c}{2}i,
$$

we get

$$
\boxed{z(t)=e^{-ct/2}e^{i(\sqrt3c/2)t}z_0.}
$$

So the particle spirals toward the origin while rotating counterclockwise with angular speed

$$
\frac{\sqrt3c}{2}.
$$

The decay rate is

$$
\frac c2.
$$

::: 

::: details Solution 2: real matrix differential equation

Write the position as

$$
\mathbf y(t)=\begin{pmatrix}x(t)\\y(t)\end{pmatrix}.
$$

Counterclockwise rotation by $120^\circ$ is the real matrix

$$
R_{120}=
\begin{pmatrix}
\cos\frac{2\pi}{3}&-\sin\frac{2\pi}{3}\\
\sin\frac{2\pi}{3}&\cos\frac{2\pi}{3}
\end{pmatrix}
=
\begin{pmatrix}
-\frac12&-\frac{\sqrt3}{2}\\
\frac{\sqrt3}{2}&-\frac12
\end{pmatrix}.
$$

The motion rule becomes the matrix differential equation

$$
\mathbf y'(t)=cR_{120}\mathbf y(t).
$$

Now decompose

$$
cR_{120}=-\frac c2 I+\frac{\sqrt3c}{2}J,
\qquad
J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
$$

Since $I$ and $J$ commute,

$$
e^{cR_{120}t}=e^{-ct/2}e^{(\sqrt3c/2)Jt}.
$$

From the spectral calculation for the rotation generator $J$,

$$
e^{\theta J}=
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}.
$$

Therefore

$$
\boxed{
\mathbf y(t)=e^{-ct/2}
\begin{pmatrix}
\cos\left(\frac{\sqrt3c}{2}t\right)&-\sin\left(\frac{\sqrt3c}{2}t\right)\\
\sin\left(\frac{\sqrt3c}{2}t\right)&\cos\left(\frac{\sqrt3c}{2}t\right)
\end{pmatrix}
\mathbf y(0).}
$$

This is the same motion as the complex-number solution: inward scaling by $e^{-ct/2}$ and counterclockwise rotation with angular speed $\sqrt3c/2$.

:::

::: remark
The phrase “velocity is $120^\circ$ from position” is not only a picture. After identifying the plane with $\mathbb C$, it directly becomes a differential equation.
:::

---

## Part C: Matrix Differential Equation by Spectral Decomposition (25 min)

### Problem 3. A $3\times3$ system with complex eigenvalues

Let

$$
A=\begin{pmatrix}
0&0&2\\
1&0&-1\\
0&1&2
\end{pmatrix}.
$$

Solve

$$
\mathbf y'(t)=A\mathbf y(t),
\qquad
\mathbf y(0)=
\begin{pmatrix}1\\0\\0\end{pmatrix}
$$

by the spectral-decomposition method.

::: details Solution

First compute

$$
tI-A=
\begin{pmatrix}
t&0&-2\\
-1&t&1\\
0&-1&t-2
\end{pmatrix}.
$$

Then

$$
\det(tI-A)=t^3-2t^2+t-2.
$$

Factor it over $\mathbb C$:

$$
\det(tI-A)=(t-2)(t^2+1)=(t-2)(t-i)(t+i).
$$

The roots are distinct, so the Lagrange spectral-decomposition method applies.

Start with the easy real projection. Since $2$ is the real root,

$$
P_2=\frac{(A-iI)(A+iI)}{(2-i)(2+i)}
=\frac{A^2+I}{5}.
$$

For this matrix,

$$
\boxed{
P_2=
\begin{pmatrix}
\frac15&\frac25&\frac45\\
0&0&0\\
\frac15&\frac25&\frac45
\end{pmatrix}.}
$$

Now avoid multiplying the complex projection formula directly. Let

$$
P_i=C+iD,
\qquad
P_{-i}=C-iD,
$$

where $C,D$ are real matrices. Because the original matrix is real, the projections for $i$ and $-i$ are conjugate.

Use the two value-table identities coming from $g(x)=1$ and $g(x)=x$:

$$
P_i+P_{-i}+P_2=I,
$$

$$
iP_i-iP_{-i}+2P_2=A.
$$

Substitute $P_i=C+iD$ and $P_{-i}=C-iD$. The first identity gives

$$
2C+P_2=I,
\qquad
\boxed{C=\frac12(I-P_2)}.
$$

The second identity gives

$$
-2D+2P_2=A,
\qquad
\boxed{D=P_2-\frac12A}.
$$

Therefore

$$
\boxed{P_i=\frac12(I-P_2)+i\left(P_2-\frac12A\right)},
\qquad
\boxed{P_{-i}=\frac12(I-P_2)-i\left(P_2-\frac12A\right)}.
$$

This is the useful trick: compute the easy real projection $P_2$, then recover the complex conjugate pair from the value-table identities.

::: remark
**The real meaning of the conjugate pair**

The two complex projections $P_i$ and $P_{-i}$ are not real separately, but their sum is real:

$$
P_i+P_{-i}=2C=I-P_2.
$$

So

$$
\boxed{I-P_2}
$$

is a real projection onto a $2$-dimensional invariant space. On this real plane, the matrix $A$ has only the conjugate eigenvalues $i$ and $-i$. Therefore the exponential action on this plane is rotation:

$$
e^{At}(I-P_2)=e^{it}P_i+e^{-it}P_{-i}.
$$

After combining conjugates by Euler's formula, this becomes a real rotation motion on the $2$-dimensional invariant space. The remaining projection $P_2$ gives the one-dimensional growth direction with factor $e^{2t}$.
::: 

For this matrix,

$$
P_i=
\begin{pmatrix}
\frac25+\frac15i&-\frac15+\frac25i&-\frac25-\frac15i\\
-\frac12i&\frac12&\frac12i\\
-\frac1{10}+\frac15i&-\frac15-\frac1{10}i&\frac1{10}-\frac15i
\end{pmatrix},
$$

$$
P_{-i}=
\begin{pmatrix}
\frac25-\frac15i&-\frac15-\frac25i&-\frac25+\frac15i\\
\frac12i&\frac12&-\frac12i\\
-\frac1{10}-\frac15i&-\frac15+\frac1{10}i&\frac1{10}+\frac15i
\end{pmatrix}.
$$

Now use the value table for $g(x)=e^{tx}$:

$$
\begin{array}{c|ccc}
x&i&-i&2\\
\hline
g(x)&e^{it}&e^{-it}&e^{2t}
\end{array}
$$

Therefore

$$
e^{At}=e^{it}P_i+e^{-it}P_{-i}+e^{2t}P_2.
$$

Since

$$
\mathbf y(0)=\begin{pmatrix}1\\0\\0\end{pmatrix},
$$

we only need the first column of each projection:

$$
P_i\mathbf y(0)=
\begin{pmatrix}
\frac25+\frac15i\\
-\frac12i\\
-\frac1{10}+\frac15i
\end{pmatrix},
\quad
P_{-i}\mathbf y(0)=
\begin{pmatrix}
\frac25-\frac15i\\
\frac12i\\
-\frac1{10}-\frac15i
\end{pmatrix},
\quad
P_2\mathbf y(0)=
\begin{pmatrix}
\frac15\\
0\\
\frac15
\end{pmatrix}.
$$

Thus

$$
\mathbf y(t)=e^{it}P_i\mathbf y(0)+e^{-it}P_{-i}\mathbf y(0)+e^{2t}P_2\mathbf y(0).
$$

Using Euler's formula to combine the conjugate terms gives

$$
\boxed{
\mathbf y(t)=
\begin{pmatrix}
\frac45\cos t-\frac25\sin t+\frac15e^{2t}\\
\sin t\\
-\frac15\cos t-\frac25\sin t+\frac15e^{2t}
\end{pmatrix}.}
$$

::: remark
This example is deliberately not a visible rotation block. The rotation appears only after computing $\det(tI-A)$, constructing spectral projections, and applying the value table for $e^{tx}$.
::: 

::: 

---

## Part D: Diagonalizability with a Parameter (10 min)

### Problem 4. When is this matrix diagonalizable?

For a real parameter $c$, let

$$
A_c=\begin{pmatrix}
1&c&0\\
0&1&0\\
0&0&2
\end{pmatrix}.
$$

Determine for which values of $c$ the matrix $A_c$ is diagonalizable.

::: details Solution

Compute

$$
tI-A_c=\begin{pmatrix}
t-1&-c&0\\
0&t-1&0\\
0&0&t-2
\end{pmatrix}.
$$

Hence

$$
\det(tI-A_c)=(t-1)^2(t-2).
$$

The roots are $1$ and $2$, but the root $1$ is repeated. Therefore we cannot conclude diagonalizability just from the factorization of $\det(tI-A_c)$.

Use the square-free polynomial obtained by deleting repeated powers:

$$
r(t)=(t-1)(t-2).
$$

The diagonalizability criterion says that $A_c$ is diagonalizable exactly when

$$
r(A_c)=(A_c-I)(A_c-2I)=0.
$$

Now compute

$$
A_c-I=\begin{pmatrix}
0&c&0\\
0&0&0\\
0&0&1
\end{pmatrix},
\qquad
A_c-2I=\begin{pmatrix}
-1&c&0\\
0&-1&0\\
0&0&0
\end{pmatrix}.
$$

Thus

$$
(A_c-I)(A_c-2I)=\begin{pmatrix}
0&-c&0\\
0&0&0\\
0&0&0
\end{pmatrix}.
$$

Therefore

$$
r(A_c)=0\quad\Longleftrightarrow\quad c=0.
$$

So

$$
\boxed{A_c\text{ is diagonalizable exactly when }c=0.}
$$

When $c=0$, the matrix is already diagonal. When $c\neq0$, the repeated root $1$ still carries leftover nilpotent information, detected by $r(A_c)\neq0$.

::: 

---

## Part E: Trace and Eigenvalues (10 min)

### Problem 5. Sum of eigenvalues for diagonalizable matrices

Prove that if an $n\times n$ matrix $A$ is diagonalizable with eigenvalues

$$
\lambda_1,\ldots,\lambda_n
$$

listed with multiplicity, then

$$
\boxed{\operatorname{tr}(A)=\lambda_1+\cdots+\lambda_n.}
$$

::: details Solution

Since $A$ is diagonalizable, there is an invertible matrix $S$ such that

$$
A=SDS^{-1},
$$

where

$$
D=\begin{pmatrix}
\lambda_1&0&\cdots&0\\
0&\lambda_2&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&\lambda_n
\end{pmatrix}.
$$

Use the cyclic property of trace:

$$
\operatorname{tr}(XY)=\operatorname{tr}(YX).
$$

Then

$$
\operatorname{tr}(A)
=\operatorname{tr}(SDS^{-1})
=\operatorname{tr}(DS^{-1}S)
=\operatorname{tr}(D).
$$

But the trace of a diagonal matrix is the sum of its diagonal entries, so

$$
\operatorname{tr}(D)=\lambda_1+\cdots+\lambda_n.
$$

Therefore

$$
\boxed{\operatorname{tr}(A)=\lambda_1+\cdots+\lambda_n.}
$$

::: remark
This statement is actually true even when $A$ is not diagonalizable. In full generality, it follows from comparing the coefficient of $t^{n-1}$ in $\det(tI-A)$. For this tutorial, the diagonalizable case is enough and follows immediately from similarity and trace.
::: 

::: 

---

## Part F: Multiplicity and Spectral Projection Trace (10 min)

### Problem 6. Multiplicity in $\det(tI-A)$ and dimension of eigenspaces

Assume $A$ is diagonalizable and has spectral decomposition

$$
A=\lambda_1P_1+\cdots+\lambda_kP_k,
$$

where $\lambda_1,\ldots,\lambda_k$ are the distinct eigenvalues and $P_j$ is the spectral projection onto the $\lambda_j$-eigenspace.

Prove that if

$$
\det(tI-A)=(t-\lambda_1)^{m_1}\cdots(t-\lambda_k)^{m_k},
$$

then

$$
\boxed{\operatorname{tr}(P_j)=m_j.}
$$

Equivalently, the multiplicity of $\lambda_j$ in $\det(tI-A)$ equals the dimension of the $\lambda_j$-eigenspace.

::: details Solution

Since $A$ is diagonalizable, choose a basis in which

$$
A=SDS^{-1},
$$

where $D$ is diagonal. In this basis, each eigenvalue $\lambda_j$ appears exactly $m_j$ times on the diagonal:

$$
D=\begin{pmatrix}
\lambda_1&&&&\\
&\ddots&&&\\
&&\lambda_1&&\\
&&&\lambda_2&\\
&&&&\ddots
\end{pmatrix}.
$$

The spectral projection $P_j$ becomes the diagonal matrix that keeps the coordinates belonging to $\lambda_j$ and kills all other coordinates. Therefore, in the diagonal basis,

$$
P_j \sim
\begin{pmatrix}
0&&&&\\
&1&&&\\
&&\ddots&&\\
&&&1&\\
&&&&0
\end{pmatrix},
$$

with exactly $m_j$ entries equal to $1$.

Hence

$$
\operatorname{tr}(P_j)=m_j.
$$

Since $P_j$ is a projection, we also have

$$
\operatorname{tr}(P_j)=\operatorname{rank}(P_j)=\dim\operatorname{Im}(P_j).
$$

But $\operatorname{Im}(P_j)$ is the $\lambda_j$-eigenspace. Therefore

$$
\boxed{m_j=\operatorname{tr}(P_j)=\dim E_{\lambda_j}.}
$$

:::

::: remark
This statement is also true for non-diagonalizable matrices if the eigenspace is replaced by the generalized eigenspace. In that setting, the exponent $m_j$ in $\det(tI-A)$ is the dimension of the generalized $\lambda_j$-space, not necessarily the ordinary eigenspace.
:::


---

## Suggested Timing for TAs

| Time | Activity | Target |
|---:|---|---|
| 0–10 min | Problem 1 | conjugation formulas |
| 10–25 min | Problem 2 | geometric rule $\Rightarrow$ differential equation |
| 25–40 min | Problem 3 | $3\times3$ system by spectral decomposition |
| 40–44 min | Problem 4 | diagonalizability criterion |
| 44–47 min | Problem 5 | trace equals sum of eigenvalues |
| 47–50 min | Problem 6 | multiplicity equals projection trace |

::: tip
The key message for students:

$$
\boxed{e^{(a+bi)t}=e^{at}(\cos bt+i\sin bt)}
$$

means

$$
\boxed{\text{growth/decay} + \text{rotation}.}
$$

For matrices, the same idea is computed through spectral projections:

$$
\boxed{e^{At}=\sum_\lambda e^{\lambda t}P_\lambda.}
$$
:::
