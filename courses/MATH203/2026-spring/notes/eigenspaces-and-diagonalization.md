# Lecture 16: Eigenspaces and Diagonalization

> **Topics**: §5.5–5.6 — Eigenspaces as Projection Column Spaces, Compatible Projection Decompositions, Cross-Filling Spectral Projections, Diagonalization $A = PDP^{-1}$, Minimal Polynomial Criterion, Square-Free Practical Test
> **Date**: May 4 – May 7, 2026

---

## Overview

Lecture 15 built the spectral decomposition

$$A = \lambda_1 P_1 + \lambda_2 P_2 + \cdots + \lambda_m P_m$$

using Lagrange interpolation and value tables, under the real requirement:

$$
f(A)=0,\qquad f(t)=(t-\lambda_1)\cdots(t-\lambda_m)
$$

with distinct roots. The characteristic polynomial is only one systematic way to search for such an annihilating polynomial.

The projections $P_i$ were computed as polynomials in $A$, but one question was left open:

::: attention
**What does $P_i$ project onto?**

The answer is the main point of this lecture:

$$\boxed{\operatorname{Col}(P_i)=E_{\lambda_i}}$$

where $E_{\lambda_i}$ is the eigenspace for the eigenvalue $\lambda_i$.
:::

Once this is clear, diagonalization becomes a stacking operation:

1. Spectral projections split every vector into eigenspace pieces.
2. Cross-filling each projection gives right and left eigenvectors.
3. Stacking those eigenvectors gives $A=PDP^{-1}$.
4. Matrix powers become $A^n=PD^nP^{-1}$.

The lecture ends with the real restriction: diagonalization is controlled by the **minimal polynomial**, not by whether $\det(tI-A)$ has repeated roots.

---

## 1. What Does a Spectral Projection Project Onto?

### 1.1 Standing Assumption

For the first part of the lecture, assume we already have a distinct-root annihilating polynomial:

$$
f(A)=0,\qquad f(t)=(t-\lambda_1)(t-\lambda_2)\cdots(t-\lambda_m),
$$

where the roots $\lambda_1,\ldots,\lambda_m$ are distinct.

This includes the familiar case where $\det(tI-A)$ itself has distinct roots. It also includes the important repeated-root case where $\det(tI-A)$ has powers, but deleting the powers still gives an annihilating polynomial.

::: attention
If we do not yet have any annihilating polynomial with distinct roots, then the spectral-projection method is not yet available. In that case, first factor $\det(tI-A)$, delete repeated powers, and test whether the square-free part annihilates $A$.
:::

Then Lecture 15 gives spectral projections $P_1,\ldots,P_m$ such that

$$A=\lambda_1P_1+\lambda_2P_2+\cdots+\lambda_mP_m,$$

and

$$P_1+P_2+\cdots+P_m=I, \qquad P_iP_j=0 \text{ for } i\neq j, \qquad P_i^2=P_i.$$

The value table of $P_i$ is the $i$-th standard basis vector:

| Matrix | $t=\lambda_1$ | $\cdots$ | $t=\lambda_i$ | $\cdots$ | $t=\lambda_m$ |
|---|---:|---:|---:|---:|---:|
| $P_i$ | $0$ | $\cdots$ | $1$ | $\cdots$ | $0$ |

So for every vector $\mathbf v$,

$$\mathbf v=I\mathbf v=(P_1+\cdots+P_m)\mathbf v=P_1\mathbf v+\cdots+P_m\mathbf v.$$

The projections split $\mathbf v$ into pieces. We now identify those pieces.

### 1.2 A Running Example

Let

$$A=\begin{pmatrix}-1&2\\-4&5\end{pmatrix}, \qquad \det(tI-A)=(t-1)(t-3).$$

The eigenvalues are $1$ and $3$. The Lagrange spectral projections are

$$P_1=\frac{A-3I}{1-3}=\begin{pmatrix}2&-1\\2&-1\end{pmatrix}, \qquad
P_3=\frac{A-I}{3-1}=\begin{pmatrix}-1&1\\-2&2\end{pmatrix}.$$

Their value tables are

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $A$ | $1$ | $3$ |
| $P_1$ | $1$ | $0$ |
| $P_3$ | $0$ | $1$ |

Thus

$$A=1\cdot P_1+3\cdot P_3, \qquad P_1+P_3=I.$$

### 1.3 Split a Vector

Take

$$\mathbf v=\begin{pmatrix}2\\3\end{pmatrix}.$$

Apply each projection:

$$P_1\mathbf v=\begin{pmatrix}2&-1\\2&-1\end{pmatrix}\begin{pmatrix}2\\3\end{pmatrix}
=\begin{pmatrix}1\\1\end{pmatrix},$$

$$P_3\mathbf v=\begin{pmatrix}-1&1\\-2&2\end{pmatrix}\begin{pmatrix}2\\3\end{pmatrix}
=\begin{pmatrix}1\\2\end{pmatrix}.$$

Check the partition:

$$P_1\mathbf v+P_3\mathbf v=\begin{pmatrix}1\\1\end{pmatrix}+\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}2\\3\end{pmatrix}=\mathbf v.$$

So the vector has been decomposed into two pieces:

$$\mathbf v=\underbrace{\begin{pmatrix}1\\1\end{pmatrix}}_{P_1\mathbf v}+\underbrace{\begin{pmatrix}1\\2\end{pmatrix}}_{P_3\mathbf v}.$$

### 1.4 Apply $A$ to Each Piece

Now apply $A$ to the first piece:

$$A(P_1\mathbf v)=\begin{pmatrix}-1&2\\-4&5\end{pmatrix}\begin{pmatrix}1\\1\end{pmatrix}
=\begin{pmatrix}1\\1\end{pmatrix}=1\cdot P_1\mathbf v.$$

Apply $A$ to the second piece:

$$A(P_3\mathbf v)=\begin{pmatrix}-1&2\\-4&5\end{pmatrix}\begin{pmatrix}1\\2\end{pmatrix}
=\begin{pmatrix}3\\6\end{pmatrix}=3\cdot P_3\mathbf v.$$

::: success
$A$ does not mix the pieces. It scales the $P_1$-piece by $1$ and the $P_3$-piece by $3$.
:::

Therefore

$$A\mathbf v=A(P_1\mathbf v+P_3\mathbf v)=1\cdot P_1\mathbf v+3\cdot P_3\mathbf v.$$

This is the geometric meaning of spectral decomposition.

---

## 2. Why Does This Work?

### 2.1 Value Table Proof of $AP_i=\lambda_iP_i$

For the running example, multiply value tables entry-wise.

For $P_1$:

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $A$ | $1$ | $3$ |
| $P_1$ | $1$ | $0$ |
| $AP_1$ | $1$ | $0$ |

The value table of $AP_1$ is the same as the value table of $1\cdot P_1$. Hence

$$AP_1=1\cdot P_1.$$

For $P_3$:

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $A$ | $1$ | $3$ |
| $P_3$ | $0$ | $1$ |
| $AP_3$ | $0$ | $3$ |

The value table of $AP_3$ is the same as the value table of $3\cdot P_3$. Hence

$$AP_3=3\cdot P_3.$$

The same argument gives the general identity:

::: proposition
**Spectral Projection Scaling**

For every spectral projection $P_i$,

$$\boxed{AP_i=P_iA=\lambda_iP_i.}$$
:::

The equality $P_iA=\lambda_iP_i$ follows for the same reason: value-table multiplication is entry-wise, so the order does not matter.

### 2.2 Eigenspace Equals Column Space

::: proposition
**Definition (Eigenspace)**

For an eigenvalue $\lambda$, the eigenspace of $A$ is

$$E_\lambda=\{\mathbf x\in\mathbb R^n: A\mathbf x=\lambda\mathbf x\}.$$
:::

We now prove the promised identification.

::: proposition
**Theorem**

For each spectral projection $P_i$,

$$\boxed{\operatorname{Col}(P_i)=E_{\lambda_i}.}$$
:::

**First direction.** Suppose $\mathbf x\in\operatorname{Col}(P_i)$. Since $P_i$ is a projection onto its column space,

$$P_i\mathbf x=\mathbf x.$$

Why? Write $\mathbf x=P_i\mathbf y$. Then

$$
P_i\mathbf x=P_i(P_i\mathbf y)=P_i^2\mathbf y=P_i\mathbf y=\mathbf x.
$$

Then

$$A\mathbf x=A(P_i\mathbf x)=(AP_i)\mathbf x=(\lambda_iP_i)\mathbf x=\lambda_i\mathbf x.$$

So $\mathbf x\in E_{\lambda_i}$.

**Second direction.** Suppose $A\mathbf x=\lambda_i\mathbf x$. Since $P_i=f_i(A)$ for a Lagrange polynomial $f_i$, any polynomial $g$ satisfies

$$g(A)\mathbf x=g(\lambda_i)\mathbf x.$$

This is just repeated use of $A\mathbf x=\lambda_i\mathbf x$:

$$
A^k\mathbf x=\lambda_i^k\mathbf x,
$$

then combine the powers linearly.

For $P_i=f_i(A)$, the value table has $f_i(\lambda_i)=1$. Therefore

$$P_i\mathbf x=f_i(A)\mathbf x=f_i(\lambda_i)\mathbf x=\mathbf x.$$

So $\mathbf x\in\operatorname{Col}(P_i)$.

::: tip
**Meaning**

$P_i$ is not just some projection. It is the projection that extracts the $E_{\lambda_i}$-component of a vector.
:::

### 2.3 Check on the Example

For

$$P_1=\begin{pmatrix}2&-1\\2&-1\end{pmatrix},$$

the columns are multiples of $\binom11$, so

$$E_1=\operatorname{Col}(P_1)=\operatorname{span}\left\{\begin{pmatrix}1\\1\end{pmatrix}\right\}.$$

Indeed,

$$A\begin{pmatrix}1\\1\end{pmatrix}=\begin{pmatrix}1\\1\end{pmatrix}=1\begin{pmatrix}1\\1\end{pmatrix}.$$

For

$$P_3=\begin{pmatrix}-1&1\\-2&2\end{pmatrix},$$

the columns are multiples of $\binom12$, so

$$E_3=\operatorname{Col}(P_3)=\operatorname{span}\left\{\begin{pmatrix}1\\2\end{pmatrix}\right\}.$$

Indeed,

$$A\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}3\\6\end{pmatrix}=3\begin{pmatrix}1\\2\end{pmatrix}.$$

---

## 3. Compatible Projections Revisited

### 3.1 Projection and Compatibility by Value Tables

The value tables of $P_1$ and $P_3$ are standard basis vectors:

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $P_1$ | $1$ | $0$ |
| $P_3$ | $0$ | $1$ |

Squaring each entry gives the same table:

$$P_1^2=P_1, \qquad P_3^2=P_3.$$

Multiplying different tables gives zero:

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $P_1$ | $1$ | $0$ |
| $P_3$ | $0$ | $1$ |
| $P_1P_3$ | $0$ | $0$ |

So

$$P_1P_3=0.$$

Adding the tables gives the table of $I$:

| Matrix | $t=1$ | $t=3$ |
|---|---:|---:|
| $P_1$ | $1$ | $0$ |
| $P_3$ | $0$ | $1$ |
| $P_1+P_3$ | $1$ | $1$ |

Thus

$$P_1+P_3=I.$$

::: success
The Lagrange construction automatically produces compatible projections that partition the identity.
:::

### 3.2 Consequences for Eigenspaces

Since $P_1P_3=0$,

$$\operatorname{Col}(P_3)\subseteq\operatorname{Null}(P_1), \qquad \operatorname{Col}(P_1)\subseteq\operatorname{Null}(P_3).$$

Translated into eigenspaces:

$$E_3\subseteq\operatorname{Null}(P_1), \qquad E_1\subseteq\operatorname{Null}(P_3).$$

Each projection kills the other eigenspace.

### 3.3 Eigenvectors with Different Eigenvalues Are Independent

::: proposition
**Corollary**

Eigenvectors with distinct eigenvalues are linearly independent.
:::

This is exactly the same compatible-projection idea from [Lecture 9: Compatible Projections](./compatible-projections.md#compatible-families-of-projections): each projection extracts one component and kills all the others.

Let $\lambda_1,\ldots,\lambda_m$ be distinct eigenvalues, and let

$$
\mathbf v_i\in E_{\lambda_i},\qquad \mathbf v_i\neq 0.
$$

We prove

$$
\mathbf v_1,\ldots,\mathbf v_m
$$

are linearly independent.

Suppose

$$
c_1\mathbf v_1+c_2\mathbf v_2+\cdots+c_m\mathbf v_m=0.
$$

Call the left side the total vector:

$$
\mathbf w
=c_1\mathbf v_1+c_2\mathbf v_2+\cdots+c_m\mathbf v_m
=0.
$$

Now apply $P_i$. Because $P_i$ is the projection onto $E_{\lambda_i}$ and kills the other eigenspaces,

$$
P_i\mathbf v_i=\mathbf v_i,
\qquad
P_i\mathbf v_j=0 \quad (j\neq i).
$$

Therefore

$$
0=P_i\mathbf w
=P_i(c_1\mathbf v_1+\cdots+c_i\mathbf v_i+\cdots+c_m\mathbf v_m)
=c_i\mathbf v_i.
$$

Since $\mathbf v_i\neq 0$, we get

$$
c_i=0.
$$

This works for every $i$, so

$$
c_1=c_2=\cdots=c_m=0.
$$

Therefore the eigenvectors are linearly independent.

::: tip
**Projection proof pattern**

To prove independence, do not solve a system. Sum the vectors into one total vector, then use the compatible projections to extract each component.
:::

### 3.4 Unique Decomposition

Since

$$P_1+P_3=I,$$

every vector has a decomposition

$$\mathbf v=P_1\mathbf v+P_3\mathbf v, \qquad P_1\mathbf v\in E_1, \quad P_3\mathbf v\in E_3.$$

The compatibility shows this decomposition is unique.

::: tip
**Geometric Meaning**

Spectral decomposition says:

- $P_i$ extracts the $E_{\lambda_i}$-component of a vector.
- $A$ scales that component by $\lambda_i$.
- Different eigenspace components do not interfere with one another.
:::

---

## 4. A Repeated Eigenvalue Example

### 4.1 The Obstruction

Consider

$$B=\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix}.$$

Then

$$\det(tI-B)=(t-2)^2(t-5).$$

There are two distinct eigenvalues, $2$ and $5$, but the root $2$ is repeated in $\det(tI-B)$.

::: attention
We cannot immediately use the Lecture 15 spectral decomposition from $\det(tI-B)$.

The reason is dimension.
:::

Remainders modulo $\det(tI-B)$ have degree $<3$:

$$a+bt+ct^2.$$

This is a 3-dimensional space. Ordinary Lagrange interpolation at the two points $2$ and $5$ gives only two value functions. Two value functions cannot determine a general 3-dimensional remainder.

So repeated roots are not harmless. We need a smaller annihilating polynomial with distinct roots.

::: tip
**The practical question**

When

$$
\det(tI-A)=(t-\lambda_1)^{a_1}\cdots(t-\lambda_k)^{a_k},
$$

try the square-free part

$$
q(t)=(t-\lambda_1)\cdots(t-\lambda_k).
$$

If $q(A)=0$, then Lecture 15 applies using $q$, not the full characteristic polynomial.
:::

### 4.2 Try Deleting the Repeated Power

The repeated factor is

$$\det(tI-B)=(t-2)^2(t-5).$$

Try deleting the extra copy of $(t-2)$:

$$q(t)=(t-2)(t-5).$$

Now test whether this polynomial annihilates $B$:

$$B-2I=\begin{pmatrix}0&0&3\\0&0&3\\0&0&3\end{pmatrix}, \qquad
B-5I=\begin{pmatrix}-3&0&3\\0&-3&3\\0&0&0\end{pmatrix}.$$

Then

$$(B-2I)(B-5I)=\begin{pmatrix}0&0&3\\0&0&3\\0&0&3\end{pmatrix}
\begin{pmatrix}-3&0&3\\0&-3&3\\0&0&0\end{pmatrix}
=0.$$

So

$$q(B)=0.$$

This is the good situation: $q(t)$ has distinct linear factors and annihilates $B$.

### 4.3 Now Lagrange Is Legal

Modulo

$$q(t)=(t-2)(t-5),$$

remainders have degree $<2$:

$$a+bt.$$

This is a 2-dimensional space, and the two value functions at $2$ and $5$ are enough.

The spectral projections are

$$P_5=\frac{B-2I}{5-2}=\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix},$$

and

$$P_2=I-P_5=\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&0\end{pmatrix}.$$

Their value tables are

| Matrix | $t=2$ | $t=5$ |
|---|---:|---:|
| $B$ | $2$ | $5$ |
| $P_2$ | $1$ | $0$ |
| $P_5$ | $0$ | $1$ |

Therefore

$$B=2P_2+5P_5.$$

### 4.4 The Eigenspaces

The projection

$$P_2=\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&0\end{pmatrix}$$

has rank $2$, so $E_2=\operatorname{Col}(P_2)$ is a plane.

The projection

$$P_5=\begin{pmatrix}0&0&1\\0&0&1\\0&0&1\end{pmatrix}$$

has rank $1$, so $E_5=\operatorname{Col}(P_5)$ is a line.

This example is important: a repeated root in $\det(tI-B)$ can produce a higher-dimensional eigenspace, and the matrix can still be diagonalizable.

---

## 5. Cross-Filling the Spectral Projections

Cross-filling was developed in [Lecture 8: Cross-Filling Projections](./cross-filling-projections.md) and [Lecture 9: Compatible Projections](./compatible-projections.md#cross-filling-projections-revisited). We use only the output: a projection can be decomposed into compatible rank-1 projections, and the columns/rows of those rank-1 pieces give right/left eigenvectors.

### 5.1 Cross-Fill $P_2$ in One Display

The rank-2 projection $P_2$ decomposes into two rank-1 projections:

$$
\underbrace{\begin{pmatrix}
1&0&-1\\
0&1&-1\\
0&0&0
\end{pmatrix}}_{P_2}
=
\underbrace{
\underbrace{\begin{pmatrix}1\\0\\0\end{pmatrix}}_{\mathbf u_1}
\underbrace{\begin{pmatrix}1&0&-1\end{pmatrix}}_{\mathbf v_1^T}
}_{R_1}
+
\underbrace{
\underbrace{\begin{pmatrix}0\\1\\0\end{pmatrix}}_{\mathbf u_2}
\underbrace{\begin{pmatrix}0&1&-1\end{pmatrix}}_{\mathbf v_2^T}
}_{R_2}
=
\underbrace{\begin{pmatrix}
1&0\\
0&1\\
0&0
\end{pmatrix}}_{U_2=(\mathbf u_1\;\mathbf u_2)}
\underbrace{\begin{pmatrix}
1&0&-1\\
0&1&-1
\end{pmatrix}}_{V_2=\begin{pmatrix}\mathbf v_1^T\\ \mathbf v_2^T\end{pmatrix}}.
$$

Check the inner product condition:

$$
\underbrace{\begin{pmatrix}
1&0&-1\\
0&1&-1
\end{pmatrix}}_{V_2}
\underbrace{\begin{pmatrix}
1&0\\
0&1\\
0&0
\end{pmatrix}}_{U_2}
=
\begin{pmatrix}1&0\\0&1\end{pmatrix}
=I_2.
$$

### 5.2 Cross-Fill $P_5$ in One Display

The rank-1 projection $P_5$ is already one rank-1 piece:

$$
\underbrace{\begin{pmatrix}
0&0&1\\
0&0&1\\
0&0&1
\end{pmatrix}}_{P_5}
=
\underbrace{\begin{pmatrix}1\\1\\1\end{pmatrix}}_{\mathbf u_5=U_5}
\underbrace{\begin{pmatrix}0&0&1\end{pmatrix}}_{\mathbf v_5^T=V_5},
\qquad
\underbrace{\begin{pmatrix}0&0&1\end{pmatrix}}_{V_5}
\underbrace{\begin{pmatrix}1\\1\\1\end{pmatrix}}_{U_5}
=1.
$$

### 5.3 Read Right and Left Eigenvectors

The columns are right eigenvectors, and the rows are left eigenvectors:

| Eigenvalue | Right eigenvectors from columns | Left eigenvectors from rows |
|---|---|---|
| $2$ | $\begin{pmatrix}1\\0\\0\end{pmatrix},\ \begin{pmatrix}0\\1\\0\end{pmatrix}$ | $\begin{pmatrix}1&0&-1\end{pmatrix},\ \begin{pmatrix}0&1&-1\end{pmatrix}$ |
| $5$ | $\begin{pmatrix}1\\1\\1\end{pmatrix}$ | $\begin{pmatrix}0&0&1\end{pmatrix}$ |

For example:

$$
B\begin{pmatrix}1\\0\\0\end{pmatrix}
=2\begin{pmatrix}1\\0\\0\end{pmatrix},
\qquad
\begin{pmatrix}1&0&-1\end{pmatrix}B
=2\begin{pmatrix}1&0&-1\end{pmatrix}.
$$

::: success
Cross-filling a spectral projection gives eigenvectors without solving $(A-\lambda I)\mathbf x=0$.
:::

### 5.4 Rank-1 Spectral Decomposition

Since $P_2=R_1+R_2$, the spectral decomposition becomes one rank-1 sum:

$$
\underbrace{\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix}}_{B}
=
2\underbrace{\begin{pmatrix}1\\0\\0\end{pmatrix}\begin{pmatrix}1&0&-1\end{pmatrix}}_{R_1}
+
2\underbrace{\begin{pmatrix}0\\1\\0\end{pmatrix}\begin{pmatrix}0&1&-1\end{pmatrix}}_{R_2}
+
5\underbrace{\begin{pmatrix}1\\1\\1\end{pmatrix}\begin{pmatrix}0&0&1\end{pmatrix}}_{P_5}.
$$

This is the bridge from spectral projections to diagonalization.

---

## 6. Diagonalization by Stacking

### 6.1 From Sum to Product

The rank-1 decomposition

$$B=2R_1+2R_2+5P_5$$

can be written as one product by stacking columns and rows.

The rule is:

$$
\lambda_1\mathbf u_1\mathbf v_1^T+\cdots+\lambda_n\mathbf u_n\mathbf v_n^T
=
\underbrace{\begin{pmatrix}|&|&&|\\ \mathbf u_1&\mathbf u_2&\cdots&\mathbf u_n\\ |&|&&|\end{pmatrix}}_{P}
\underbrace{\begin{pmatrix}
\lambda_1&&\\
&\ddots&\\
&&\lambda_n
\end{pmatrix}}_{D}
\underbrace{\begin{pmatrix}
-\mathbf v_1^T-\\
-\mathbf v_2^T-\\
\vdots\\
-\mathbf v_n^T-
\end{pmatrix}}_{Q}.
$$

The columns go into $P$. The rows go into $Q$. The eigenvalues go into the diagonal matrix $D$.

Let

$$P=\begin{pmatrix}1&0&1\\0&1&1\\0&0&1\end{pmatrix}, \qquad
D=\begin{pmatrix}2&0&0\\0&2&0\\0&0&5\end{pmatrix}, \qquad
Q=\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&1\end{pmatrix}.$$

Then

$$B=PDQ.$$

But the partition of identity gives

$$R_1+R_2+P_5=I.$$

The same stacking with every eigenvalue replaced by $1$ gives

$$PQ=I.$$

Therefore

$$Q=P^{-1}.$$

So

$$\boxed{B=PDP^{-1}.}$$

::: attention
**Why is $Q=P^{-1}$?**

This is not a separate calculation. It comes from the projection partition:

$$
I=R_1+R_2+P_5
=
P
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
Q
=PQ.
$$

So the same row/column data that decomposes $I$ gives the inverse relationship.
:::

### 6.2 Meaning of the Three Matrices

In

$$B=PDP^{-1},$$

- columns of $P$ are right eigenvectors;
- rows of $P^{-1}$ are left eigenvectors;
- diagonal entries of $D$ are eigenvalues, repeated according to the chosen eigenvector basis.

For this example,

$$\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix}
=
\begin{pmatrix}1&0&1\\0&1&1\\0&0&1\end{pmatrix}
\begin{pmatrix}2&0&0\\0&2&0\\0&0&5\end{pmatrix}
\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&1\end{pmatrix}.$$

### 6.3 Powers and Functions

The reason diagonalization is useful is cancellation:

$$B^2=(PDP^{-1})(PDP^{-1})=PD(P^{-1}P)DP^{-1}=PD^2P^{-1}.$$

Thus

$$B^n=PD^nP^{-1},$$

where

$$D^n=\begin{pmatrix}2^n&0&0\\0&2^n&0\\0&0&5^n\end{pmatrix}.$$

More generally, for any polynomial $g$,

$$g(B)=Pg(D)P^{-1},$$

where

$$g(D)=\begin{pmatrix}g(2)&0&0\\0&g(2)&0\\0&0&g(5)\end{pmatrix}.$$

::: tip
**Connection to Value Tables**

The spectral formula

$$g(B)=g(2)P_2+g(5)P_5$$

and the diagonalization formula

$$g(B)=Pg(D)P^{-1}$$

are the same machine written in two notations.

The value table computes the diagonal entries of $g(D)$.
:::

---

## 7. Eigenspace Geometry and Long-Term Behavior

Return to the $2\times2$ example

$$A=\begin{pmatrix}-1&2\\-4&5\end{pmatrix}, \qquad \det(tI-A)=(t-1)(t-3).$$

The eigenspaces are

$$E_1=\operatorname{span}\left\{\begin{pmatrix}1\\1\end{pmatrix}\right\}, \qquad
E_3=\operatorname{span}\left\{\begin{pmatrix}1\\2\end{pmatrix}\right\}.$$

For

$$\mathbf v=\begin{pmatrix}2\\3\end{pmatrix},$$

we found

$$\mathbf v=\begin{pmatrix}1\\1\end{pmatrix}+\begin{pmatrix}1\\2\end{pmatrix}.$$

Therefore

$$A^n\mathbf v=1^n\begin{pmatrix}1\\1\end{pmatrix}+3^n\begin{pmatrix}1\\2\end{pmatrix}.$$

The $E_1$ component stays fixed. The $E_3$ component grows like $3^n$.

::: success
The dominant eigenvalue wins: for large $n$, most vectors point almost in the dominant eigenspace direction.
:::

Eigenvalues tell us **how much** each direction scales. Eigenspaces tell us **which directions** are being scaled.

---

## 8. The Minimal Polynomial Is the Real Restriction

### 8.1 Eigenvalues of Annihilating Polynomials

::: proposition
**Theorem**

If $p(A)=0$ and $\lambda$ is an eigenvalue of $A$, then $p(\lambda)=0$.
:::

Proof: choose a nonzero eigenvector $\mathbf x$ with

$$A\mathbf x=\lambda\mathbf x.$$

Then

$$0=p(A)\mathbf x=p(\lambda)\mathbf x.$$

Since $\mathbf x\neq0$, we get

$$p(\lambda)=0.$$

So every annihilating polynomial must contain all eigenvalues as roots.

### 8.2 Minimal Polynomial

::: proposition
**Definition (Minimal Polynomial)**

The minimal polynomial $m(t)$ of $A$ is the lowest-degree monic polynomial satisfying

$$m(A)=0.$$
:::

It divides every annihilating polynomial, including $\det(tI-A)$.

For the matrix

$$B=\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix},$$

we had

$$\det(tI-B)=(t-2)^2(t-5),$$

but

$$(B-2I)(B-5I)=0.$$

Thus the minimal polynomial is

$$m(t)=(t-2)(t-5),$$

which has distinct linear factors.

### 8.3 A Repeated Root That Is Fine

Let

$$A=3I_2=\begin{pmatrix}3&0\\0&3\end{pmatrix}.$$

Then

$$\det(tI-A)=(t-3)^2.$$

But

$$A-3I=0.$$

So the minimal polynomial is

$$m(t)=t-3.$$

This matrix is diagonalizable. In fact, it is already diagonal. The whole space is the eigenspace $E_3$.

### 8.4 A Repeated Root That Is Not Fine

Let

$$J=\begin{pmatrix}2&1\\0&2\end{pmatrix}.$$

Then

$$\det(tI-J)=(t-2)^2.$$

Now

$$J-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\neq0,$$

but

$$(J-2I)^2=0.$$

So the minimal polynomial is

$$m(t)=(t-2)^2.$$

This has a repeated factor. The matrix has only one eigenspace direction:

$$E_2=\operatorname{span}\left\{\begin{pmatrix}1\\0\end{pmatrix}\right\}.$$

Vectors off this line are sheared, not merely scaled. This matrix is not diagonalizable.

### 8.5 Criterion for Diagonalizability

::: proposition
**Theorem (Minimal Polynomial Criterion)**

A matrix $A$ is diagonalizable if and only if its minimal polynomial factors into distinct linear factors:

$$m(t)=(t-\lambda_1)(t-\lambda_2)\cdots(t-\lambda_k), \qquad \lambda_i \text{ distinct}.$$
:::

**Reason for $\Leftarrow$.** If $m(t)$ has distinct linear factors and annihilates $A$, then Lagrange interpolation applies to $m(t)$. This produces compatible spectral projections, and stacking their cross-fillings gives diagonalization.

**Reason for $\Rightarrow$.** If $A=PDP^{-1}$, and the distinct diagonal entries of $D$ are $\lambda_1,\ldots,\lambda_k$, then

$$(A-\lambda_1I)\cdots(A-\lambda_kI)=P(D-\lambda_1I)\cdots(D-\lambda_kI)P^{-1}=0.$$

So $A$ has an annihilating polynomial with distinct linear factors. Therefore the minimal polynomial also has distinct linear factors.

---

## 9. A Practical Diagonalizability Test

The minimal polynomial criterion is clean, but in practice students usually compute $\det(tI-A)$, not the minimal polynomial.

So we use a test based on deleting repeated powers.

::: proposition
**Practical Diagonalizability Test**

A matrix $A$ is diagonalizable if and only if both conditions hold:

1. $\det(tI-A)$ factors into linear factors:

$$\det(tI-A)=(t-\lambda_1)^{a_1}\cdots(t-\lambda_k)^{a_k}.$$

2. After deleting repeated powers, the remaining polynomial annihilates $A$:

$$(A-\lambda_1I)(A-\lambda_2I)\cdots(A-\lambda_kI)=0.$$
:::

The polynomial

$$q(t)=(t-\lambda_1)(t-\lambda_2)\cdots(t-\lambda_k)$$

is called the **square-free part** of $\det(tI-A)$. Some books also call it the radical of $\det(tI-A)$, but the computational instruction is simple:

::: tip
Factor $\det(tI-A)$, delete all repeated powers, then plug $A$ into what remains.
:::

### 9.1 Why the Test Works

If

$$q(A)=0,$$

then $q(t)$ is an annihilating polynomial with distinct linear factors. The minimal polynomial divides $q(t)$, so the minimal polynomial also has distinct linear factors. Therefore $A$ is diagonalizable.

Conversely, if $A$ is diagonalizable, then the product of the distinct eigenvalue factors annihilates $A$. That product is exactly the square-free part of $\det(tI-A)$. Therefore

$$q(A)=0.$$

### 9.2 Example: Repeated Root, Still Diagonalizable

For

$$B=\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix},$$

we have

$$\det(tI-B)=(t-2)^2(t-5).$$

Delete repeated powers:

$$q(t)=(t-2)(t-5).$$

Test:

$$(B-2I)(B-5I)=0.$$

Therefore $B$ is diagonalizable.

### 9.3 Example: Scalar Matrix

For

$$A=3I_2,$$

we have

$$\det(tI-A)=(t-3)^2.$$

Delete repeated powers:

$$q(t)=t-3.$$

Test:

$$A-3I=0.$$

Therefore $A$ is diagonalizable.

### 9.4 Example: Same Repeated Shape, Not Diagonalizable

For

$$J=\begin{pmatrix}2&1\\0&2\end{pmatrix},$$

we have

$$\det(tI-J)=(t-2)^2.$$

Delete repeated powers:

$$q(t)=t-2.$$

Test:

$$q(J)=J-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix}\neq0.$$

Therefore $J$ is not diagonalizable.

::: attention
A repeated root in $\det(tI-A)$ is not the problem by itself.

The problem is whether deleting the repeated powers still gives an annihilating polynomial.
:::

---

## 10. Summary

::: success
**Key Results from This Lecture**

1. **Eigenspace = projection column space**:

$$E_{\lambda_i}=\operatorname{Col}(P_i).$$

2. **Projection scaling**:

$$AP_i=P_iA=\lambda_iP_i.$$

3. **Vector decomposition**:

$$\mathbf v=P_1\mathbf v+\cdots+P_m\mathbf v,$$

where each $P_i\mathbf v$ lies in $E_{\lambda_i}$.

4. **Cross-filling spectral projections** gives right and left eigenvectors.

5. **Diagonalization** is stacking:

$$A=PDP^{-1}, \qquad g(A)=Pg(D)P^{-1}.$$

6. **Real criterion**:

$$A\text{ diagonalizable} \iff m(t)\text{ factors into distinct linear factors}.$$

7. **Practical criterion**: factor $\det(tI-A)$, delete repeated powers, and test whether the square-free part annihilates $A$.
:::

---

## Exercises

::: problem
**Exercise 1: Projection Column Spaces**

Let

$$A=\begin{pmatrix}-1&2\\-4&5\end{pmatrix}, \qquad
P_1=\begin{pmatrix}2&-1\\2&-1\end{pmatrix}, \qquad
P_3=\begin{pmatrix}-1&1\\-2&2\end{pmatrix}.$$

(a) Verify $P_1^2=P_1$, $P_3^2=P_3$, and $P_1P_3=0$.

(b) Find $\operatorname{Col}(P_1)$ and $\operatorname{Col}(P_3)$.

(c) Verify directly that these column spaces are eigenspaces of $A$.
:::

::: problem
**Exercise 2: Decompose and Iterate**

For the same matrix $A$, decompose

$$\mathbf w=\begin{pmatrix}5\\8\end{pmatrix}$$

as

$$\mathbf w=P_1\mathbf w+P_3\mathbf w.$$

Then write a closed formula for $A^n\mathbf w$.
:::

::: problem
**Exercise 3: Cross-Fill a Projection**

Let

$$P=\begin{pmatrix}1&0&-1\\0&1&-1\\0&0&0\end{pmatrix}.$$

(a) Cross-fill $P$ into two rank-1 projections.

(b) Write $P=UV$ with $V U=I_2$.

(c) Identify a basis for $\operatorname{Col}(P)$.
:::

::: problem
**Exercise 4: Practical Diagonalizability Test**

For each matrix, compute $\det(tI-A)$, delete repeated powers, and test whether the resulting polynomial annihilates the matrix.

(a) $\begin{pmatrix}4&0\\0&4\end{pmatrix}$

(b) $\begin{pmatrix}4&1\\0&4\end{pmatrix}$

(c) $\begin{pmatrix}1&0&0\\0&1&2\\0&0&3\end{pmatrix}$
:::

::: problem
**Exercise 5: Diagonalization from Eigenvectors**

For

$$B=\begin{pmatrix}2&0&3\\0&2&3\\0&0&5\end{pmatrix},$$

use the eigenvectors

$$\begin{pmatrix}1\\0\\0\end{pmatrix}, \qquad
\begin{pmatrix}0\\1\\0\end{pmatrix}, \qquad
\begin{pmatrix}1\\1\\1\end{pmatrix}$$

to build $P$ and $D$. Verify that $B=PDP^{-1}$.
:::
