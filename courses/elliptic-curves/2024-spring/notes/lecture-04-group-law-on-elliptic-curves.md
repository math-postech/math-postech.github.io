# Lecture 4: Group Law on Elliptic Curves

> **Student notes**: global PDF pp. 25–33  
> **Date in notes**: Feb 29, 2024  
> **Theme**: The group law on an elliptic curve is the Picard group law written in points.

---

## Overview

This lecture turns the previous Riemann–Roch construction into the group structure of an elliptic curve.

The key idea is:

$$
C \cong \operatorname{Pic}^0(C),
\qquad
P\longmapsto \mathcal L((P)-(O)).
$$

For a genus-one curve with base point $O$, every degree-zero line bundle is represented by a unique point. This makes addition in $\operatorname{Pic}^0(C)$ into addition of points on $C$.

---

## 1. Review: Riemann–Roch in Genus One

Let $C$ be a smooth projective curve of genus $1$, and let $O\in C$ be the marked point.

Riemann–Roch gives, for every positive-degree divisor $D$,

$$
\ell(D)=\deg D.
$$

Applying this to $nO$ gives:

$$
\ell(O)=1,
\quad
\ell(2O)=2,
\quad
\ell(3O)=3,
\quad
\ell(6O)=6.
$$

Thus we obtain functions $x,y$ with pole orders $2$ and $3$ at $O$, and the seven functions

$$
1,x,y,x^2,xy,x^3,y^2
$$

satisfy one cubic relation.

---

## 2. Elliptic Curve Equation

An elliptic curve is a pair $(C,O)$ with $C$ smooth projective of genus $1$ and $O\in C$.

Riemann–Roch gives a Weierstrass equation

$$
y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$

The coefficients of $y^2$ and $x^3$ may be normalized to $1$ in the usual Weierstrass form, while smoothness excludes the singular discriminant case.

---

## 3. The Picard Description of Points

Define

$$
\phi:C\longrightarrow \operatorname{Pic}^0(C),
\qquad
P\longmapsto \mathcal L((P)-(O)).
$$

For a genus-one curve this map is an isomorphism.

Surjectivity: every degree-zero divisor class has a representative of the form $(P)-(O)$.

Injectivity: if

$$
(P)-(O)\sim(Q)-(O),
$$

then $(P)\sim(Q)$, hence there is a rational function with divisor $(P)-(Q)$. Riemann–Roch forces $P=Q$.

Thus the curve itself is its degree-zero Picard group.

---

## 4. Definition of Addition

Addition is transported from tensor product of line bundles:

$$
\mathcal L((P)-(O))\otimes\mathcal L((Q)-(O))
\cong
\mathcal L((P+Q)-(O)).
$$

Equivalently,

$$
P+Q
$$

is the unique point such that

$$
(P)-(O)+(Q)-(O)\sim(P+Q)-(O).
$$

The identity element is $O$.

The inverse $-P$ is determined by

$$
(P)+(-P)-2(O)\sim 0.
$$

---

## 5. Chord-and-Tangent Rule

In the plane cubic model, a line intersects the cubic in three points counted with multiplicity.

If the line meets $C$ at $P,Q,R$, then the line function has divisor

$$
(P)+(Q)+(R)-3(O).
$$

Since this divisor is principal,

$$
(P)-(O)+(Q)-(O)+(R)-(O)\sim 0.
$$

Therefore

$$
P+Q+R=O.
$$

So if $R$ is the third intersection of the line through $P,Q$, then

$$
P+Q=-R.
$$

This is the geometric addition law.

---

## 6. Singular Comparisons

The notes compare smooth elliptic curves with singular cubics.

For example:

- a nodal cubic behaves like $\mathbb G_m$ after removing the singular point;
- a cuspidal cubic behaves like $\mathbb G_a$ after removing the singular point.

This comparison explains why smoothness matters. Singular cubics still carry group-like structures on their smooth loci, but they are not elliptic curves.
