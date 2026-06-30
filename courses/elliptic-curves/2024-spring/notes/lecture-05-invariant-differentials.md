# Lecture 5: Invariant Differentials

> **Student notes**: global PDF pp. 34–43  
> **Date in notes**: Mar 5, 2024  
> **Theme**: An elliptic curve has a one-dimensional space of global differentials, and it is invariant under translation.

---

## Overview

This lecture studies the canonical differential on an elliptic curve and proves that global differentials are translation-invariant.

The topological picture over $\mathbb C$ is that an elliptic curve is a torus. Translation should preserve the unique holomorphic one-form up to scalar; the algebraic proof shows the scalar is actually $1$.

---

## 1. Review of the Elliptic Curve Setup

Let $(C,O)$ be an elliptic curve. From the previous lecture,

$$
C\cong\operatorname{Pic}^0(C),
\qquad
P\longmapsto \mathcal L((P)-(O)).
$$

This identification gives the group law.

Examples in the notes compare:

$$
y^2=x^3+x
$$

with the cuspidal singular cubic

$$
y^2=x^3.
$$

After removing the singular point, the latter behaves like $\mathbb G_a$ rather than a genuine elliptic curve.

---

## 2. The Sheaf of Differentials

For a smooth projective curve $C$, the sheaf of differentials is

$$
\Omega_C=\mathcal I/\mathcal I^2|_{\Delta(C)},
$$

where $\Delta:C\to C\times C$ is the diagonal.

For an elliptic curve, since $g=1$,

$$
\dim H^0(C,\Omega_C)=1.
$$

So every nonzero global differential is unique up to scalar.

---

## 3. Explicit Differential in Weierstrass Form

Let

$$
C:
 y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$

Differentiate the defining equation:

$$
2y\,dy+a_1x\,dy+a_1y\,dx+a_3\,dy
=
3x^2\,dx+2a_2x\,dx+a_4\,dx.
$$

The standard invariant differential is

$$
\omega=\frac{dx}{2y+a_1x+a_3}.
$$

Equivalently, using the equation above,

$$
\omega=\frac{dy}{3x^2+2a_2x+a_4-a_1y}.
$$

The denominator cancels exactly where $dx$ vanishes. Smoothness ensures that $dx$ and $dy$ do not vanish in the incompatible way that would make this ill-defined.

---

## 4. Translation Pullback

For $P\in C$, let

$$
t_P:C\longrightarrow C,
\qquad
Q\longmapsto Q+P.
$$

Translation is an automorphism of the curve. Therefore it induces an isomorphism

$$
t_P^*\Omega_C\cong\Omega_C.
$$

Since $H^0(C,\Omega_C)$ is one-dimensional, there exists a scalar $\lambda(P)$ such that

$$
t_P^*\omega=\lambda(P)\omega.
$$

This gives a map

$$
\lambda:C\longrightarrow \mathbb G_m.
$$

---

## 5. Why the Scalar is Constant

The image of $\lambda$ is projective because $C$ is projective. But the only connected projective subgroup of $\mathbb G_m$ is the trivial subgroup.

Therefore

$$
\lambda(P)=1
$$

for all $P\in C$.

Thus

$$
t_P^*\omega=\omega.
$$

Every global differential on an elliptic curve is invariant under translation.

---

## 6. Conceptual Meaning

This is the algebraic version of the analytic fact that a complex elliptic curve

$$
\mathbb C/\Lambda
$$

has differential $dz$, and translation preserves $dz$.

The invariant differential is one of the main structural tools in the later study of isogenies and ramification.
