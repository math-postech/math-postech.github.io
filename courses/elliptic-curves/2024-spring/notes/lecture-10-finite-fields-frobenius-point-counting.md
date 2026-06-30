# Lecture 10: Finite Fields, Frobenius, and Point Counting

> **Student notes**: begins around global PDF p. 98  
> **Prep source**: `lecture11.md`  
> **Theme**: Frobenius is the operator whose eigenvalues control point counts over finite fields.

---

## Overview

The course shifts to elliptic curves over finite fields. The central operator is Frobenius.

For $E/\mathbb F_q$,

$$
\operatorname{Frob}_q:E\longrightarrow E,
\qquad
(x,y)\longmapsto(x^q,y^q).
$$

The fixed points of Frobenius are exactly the rational points.

---

## 1. Frobenius and Rational Points

A point $P\in E(\overline{\mathbb F}_q)$ lies in $E(\mathbb F_q)$ exactly when

$$
\operatorname{Frob}_q(P)=P.
$$

Thus

$$
E(\mathbb F_q)=\ker(1-\operatorname{Frob}_q).
$$

For an isogeny, the size of the kernel is measured by degree, so

$$
\#E(\mathbb F_q)=\deg(1-\operatorname{Frob}_q).
$$

---

## 2. Trace of Frobenius

For an endomorphism $\phi$ of an elliptic curve, define its trace by the relation

$$
\deg(1-\phi)=1-\operatorname{tr}(\phi)+\deg\phi.
$$

For Frobenius, $\deg(\operatorname{Frob}_q)=q$, hence

$$
\#E(\mathbb F_q)=q+1-\operatorname{tr}(\operatorname{Frob}_q).
$$

This is the elliptic-curve form of the Lefschetz trace formula.

---

## 3. Hasse Bound

The notes record the estimate

$$
\left|\#E(\mathbb F_q)-(q+1)\right|\le 2\sqrt q.
$$

Equivalently, if

$$
a_q=q+1-\#E(\mathbb F_q),
$$

then

$$
|a_q|\le 2\sqrt q.
$$

The eigenvalues of Frobenius should have complex absolute value $\sqrt q$.

---

## 4. Motivation for the Zeta Function

Counting points over all finite extensions gives a generating function:

$$
Z(E/\mathbb F_q,t)
=
\exp\left(\sum_{n\ge1}\#E(\mathbb F_{q^n})\frac{t^n}{n}\right).
$$

The motivating question is:

> How does Frobenius package all the numbers $\#E(\mathbb F_{q^n})$?

The answer is via the characteristic polynomial of Frobenius.

---

## 5. Why Tate Modules Enter

To speak about eigenvalues of Frobenius, we need a linear representation of endomorphisms.

The Tate module provides exactly this:

$$
T_\ell E
$$

turns torsion points into a free $\mathbb Z_\ell$-module on which Frobenius acts linearly.
