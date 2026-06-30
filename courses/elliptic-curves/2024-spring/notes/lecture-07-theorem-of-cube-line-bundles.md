# Lecture 7: Theorem of the Cube and Line Bundles

> **Student notes**: begins around global PDF p. 54  
> **Prep source**: `lecture7.md`  
> **Theme**: The theorem of the cube forces quadratic behavior of pullbacks $[n]^*\mathcal L$.

---

## Overview

The previous lecture showed geometrically that

$$
\deg[n]=n^2.
$$

This lecture proves the line-bundle version: pullback by multiplication-by-$n$ behaves quadratically.

The key tool is the theorem of the cube.

---

## 1. Theorem of the Cube

Let $X,Y,Z$ be varieties over a field $k$, and let $\mathcal L$ be a line bundle on

$$
X\times Y\times Z.
$$

A useful form of the theorem says:

if $\mathcal L$ becomes trivial when restricted to the three coordinate hyperplanes

$$
\{x_0\}\times Y\times Z,
\qquad
X\times\{y_0\}\times Z,
\qquad
X\times Y\times\{z_0\},
$$

then $\mathcal L$ is trivial on all of $X\times Y\times Z$.

The slogan is:

> A line bundle on a cube is determined by its behavior on the three coordinate faces.

---

## 2. Applying the Cube to an Elliptic Curve

Let $C$ be an elliptic curve, and let

$$
\mu:C\times C\times C\longrightarrow C
$$

be the addition map

$$
(x,y,z)\longmapsto x+y+z.
$$

Let $p_i$ and $p_{ij}$ denote the projection and partial-sum maps.

The theorem of the cube gives a relation among pullbacks of a line bundle $\mathcal L$ under sums of variables.

A typical relation has the form

$$
(p_1+p_2+p_3)^*\mathcal L
\otimes
p_1^*\mathcal L
\otimes
p_2^*\mathcal L
\otimes
p_3^*\mathcal L
\cong
(p_1+p_2)^*\mathcal L
\otimes
(p_1+p_3)^*\mathcal L
\otimes
(p_2+p_3)^*\mathcal L,
$$

up to the convention for duals. The important point is that second differences of pullbacks are controlled.

---

## 3. Recurrence for $[n]^*\mathcal L$

Specializing the cube relation gives the recurrence recorded in the prep notes:

$$
[n]^*\mathcal L\otimes[n]^*\mathcal L\otimes\mathcal L\otimes[-1]^*\mathcal L
\cong
[n+1]^*\mathcal L\otimes[n-1]^*\mathcal L.
$$

Let

$$
f(n)=[n]^*\mathcal L
$$

in the Picard group. Then the recurrence says

$$
f(n+1)-2f(n)+f(n-1)
=
\mathcal L+[-1]^*\mathcal L.
$$

---

## 4. Solving the Recurrence

The initial values are:

$$
f(0)=0,
\qquad
f(1)=\mathcal L.
$$

Thus

$$
f(n)-f(n-1)=n\mathcal L+(n-1)[-1]^*\mathcal L.
$$

Summing gives

$$
[n]^*\mathcal L
\cong
\frac{n(n+1)}{2}\mathcal L
+
\frac{n(n-1)}{2}[-1]^*\mathcal L
$$

at the level of Picard classes.

In tensor notation, this means

$$
[n]^*\mathcal L
\cong
\mathcal L^{\otimes n(n+1)/2}
\otimes
([-1]^*\mathcal L)^{\otimes n(n-1)/2}
$$

up to the usual interpretation in $\operatorname{Pic}(C)$.

---

## 5. Symmetric Line Bundles

If $\mathcal L$ is symmetric, meaning

$$
[-1]^*\mathcal L\cong\mathcal L,
$$

then the formula simplifies to

$$
[n]^*\mathcal L\cong\mathcal L^{\otimes n^2}.
$$

This is the line-bundle version of

$$
\deg[n]=n^2.
$$

---

## 6. Bridge to Heights

A line bundle on a projective variety gives a logarithmic height function up to $O(1)$.

Tensor product corresponds to addition of heights:

$$
h_{\mathcal L\otimes\mathcal M}=h_{\mathcal L}+h_{\mathcal M}+O(1).
$$

Therefore, for a symmetric line bundle on an elliptic curve,

$$
h_{\mathcal L}([n]P)=n^2h_{\mathcal L}(P)+O(1).
$$

This is the structural input for canonical heights.
