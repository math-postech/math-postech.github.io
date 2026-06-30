# Lecture 7: Theorem of the Cube and Line Bundles

> **Student notes**: begins around global PDF p. 54  
> **Prep source**: `lecture7.md`  
> **Theme**: The theorem of the cube forces quadratic behavior of $[n]^*\mathcal L$.

---

## Overview

The previous lecture introduced the degree of multiplication maps. This lecture proves the line-bundle identity behind the quadratic formula

$$
\deg[n]=n^2.
$$

The main result is:

$$
[n]^*\mathcal L
\cong
\mathcal L^{\otimes n(n+1)/2}
\otimes
([-1]^*\mathcal L)^{\otimes n(n-1)/2}
$$

in $\operatorname{Pic}(E)$.

If $\mathcal L$ is symmetric, this becomes

$$
[n]^*\mathcal L\cong\mathcal L^{\otimes n^2}.
$$

---

## 1. Theorem of the Cube

::: theorem
Let $X,Y,Z$ be complete varieties over $k$, with chosen points $x_0,y_0,z_0$. Let $\mathcal M$ be a line bundle on $X\times Y\times Z$. If $\mathcal M$ is trivial on the three coordinate faces

$$
\{x_0\}\times Y\times Z,\qquad
X\times\{y_0\}\times Z,\qquad
X\times Y\times\{z_0\},
$$

then $\mathcal M$ is trivial on all of $X\times Y\times Z$.
:::

::: remark
**Idea**

A line bundle on a product has finite-difference behavior. The theorem of the cube says that if the first three boundary restrictions vanish, then the whole third difference vanishes.
:::

---

## 2. The Cube Relation on an Elliptic Curve

Let $E$ be an elliptic curve and let $\mathcal L$ be a line bundle on $E$. For maps $f,g,h:X\to E$, write $f+g+h$ for pointwise addition.

::: theorem
The theorem of the cube implies

$$
(f+g+h)^*\mathcal L
\otimes f^*\mathcal L
\otimes g^*\mathcal L
\otimes h^*\mathcal L
\cong
(f+g)^*\mathcal L
\otimes(f+h)^*\mathcal L
\otimes(g+h)^*\mathcal L.
$$
:::

**Proof idea.** Apply the theorem of the cube to the line bundle

$$
(p_1+p_2+p_3)^*\mathcal L
\otimes p_1^*\mathcal L
\otimes p_2^*\mathcal L
\otimes p_3^*\mathcal L
\otimes
(p_1+p_2)^*\mathcal L^{-1}
\otimes
(p_1+p_3)^*\mathcal L^{-1}
\otimes
(p_2+p_3)^*\mathcal L^{-1}
$$

on $E^3$. Its restrictions to the coordinate faces are trivial by cancellation. Therefore the bundle itself is trivial. Pull back along $(f,g,h)$ to obtain the formula. $\square$

::: attention
This is the rigorous replacement for saying “addition is quadratic.” The identity is an exact equality in the Picard group.
:::

---

## 3. Recurrence for Pullback by $[n]$

Set

$$
f(n)=[n]^*\mathcal L
$$

as a class in $\operatorname{Pic}(E)$.

::: proposition
The classes $f(n)$ satisfy

$$
[n+1]^*\mathcal L\otimes[n-1]^*\mathcal L
\cong
[n]^*\mathcal L\otimes[n]^*\mathcal L
\otimes\mathcal L\otimes[-1]^*\mathcal L.
$$
:::

**Proof.** In the cube relation, take the three maps to be

$$
[n],\qquad [1],\qquad [-1].
$$

Then

$$
[n]+[1]+[-1]=[n],
$$

while the pairwise sums are $[n+1]$, $[n-1]$, and $[0]$. Since $[0]^*\mathcal L$ is trivial, the cube relation becomes exactly the displayed recurrence. $\square$

In additive notation in $\operatorname{Pic}(E)$, the recurrence is

$$
f(n+1)-2f(n)+f(n-1)=\mathcal L+[-1]^*\mathcal L.
$$

---

## 4. Solving the Recurrence

::: lemma
With $f(0)=0$ and $f(1)=\mathcal L$,

$$
f(n)-f(n-1)=n\mathcal L+(n-1)[-1]^*\mathcal L.
$$
:::

**Proof.** The recurrence says the first difference increases by

$$
\mathcal L+[-1]^*\mathcal L
$$

each time. Since

$$
f(1)-f(0)=\mathcal L,
$$

induction gives

$$
f(n)-f(n-1)
=
\mathcal L+(n-1)(\mathcal L+[-1]^*\mathcal L)
=
n\mathcal L+(n-1)[-1]^*\mathcal L.
$$
$\square$

::: theorem
For every $n\ge1$,

$$
[n]^*\mathcal L
\cong
\mathcal L^{\otimes n(n+1)/2}
\otimes
([-1]^*\mathcal L)^{\otimes n(n-1)/2}.
$$
:::

**Proof.** Sum the first differences:

$$
f(n)=\sum_{i=1}^n (f(i)-f(i-1)).
$$

Using the lemma,

$$
f(n)
=
\sum_{i=1}^n \bigl(i\mathcal L+(i-1)[-1]^*\mathcal L\bigr)
=
\frac{n(n+1)}2\mathcal L+\frac{n(n-1)}2[-1]^*\mathcal L.
$$

Translating additive Picard notation back to tensor notation gives the formula. $\square$

---

## 5. Symmetric Line Bundles and Degree

::: definition
A line bundle $\mathcal L$ on $E$ is **symmetric** if

$$
[-1]^*\mathcal L\cong\mathcal L.
$$
:::

::: corollary
If $\mathcal L$ is symmetric, then

$$
[n]^*\mathcal L\cong\mathcal L^{\otimes n^2}.
$$
:::

**Proof.** Substitute $[-1]^*\mathcal L\cong\mathcal L$ into the theorem:

$$
\frac{n(n+1)}2+\frac{n(n-1)}2=n^2.
$$
$\square$

::: example
The line bundle $\mathcal O_E(O)$ is not symmetric in the strongest literal form, but the divisor $(O)+(-O)=2(O)$ shows why degree-one and degree-two symmetric choices naturally appear in height theory.
:::

::: tip
**Lecture takeaway**

The cube theorem is the mechanism behind quadratic growth:

$$
h([n]P)\sim n^2h(P),
\qquad
\deg[n]=n^2.
$$
:::
