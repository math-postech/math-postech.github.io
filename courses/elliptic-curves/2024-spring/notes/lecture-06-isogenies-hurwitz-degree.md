# Lecture 6: Isogenies, Hurwitz, and Degree

> **Student notes**: global PDF pp. 44–53  
> **Date in notes**: Mar 7, 2024  
> **Theme**: Nonconstant morphisms between elliptic curves are isogenies; Hurwitz controls their ramification and degree.

---

## Overview

This lecture asks: what are morphisms between elliptic curves?

For elliptic curves $(C_1,O_1)$ and $(C_2,O_2)$, a morphism preserving the identity point is either the zero morphism or a finite surjective group homomorphism. The nonzero ones are called isogenies.

---

## 1. Morphisms of Projective Curves

A map between irreducible projective curves is either constant or surjective.

For elliptic curves, a constant map preserving origins must be

$$
O:C_1\longrightarrow C_2,
\qquad
P\longmapsto O_2.
$$

A nonconstant origin-preserving morphism

$$
f:(C_1,O_1)\longrightarrow(C_2,O_2)
$$

is called an isogeny.

---

## 2. Hurwitz Formula

Let

$$
f:C_1\longrightarrow C_2
$$

be a finite morphism of smooth projective curves. The Hurwitz formula is

$$
2g(C_1)-2
=
(\deg f)(2g(C_2)-2)+\sum_{P\in C_1}(e_P-1),
$$

where $e_P$ is the ramification index at $P$.

For elliptic curves, $g(C_1)=g(C_2)=1$, so

$$
0=\sum_{P\in C_1}(e_P-1).
$$

Hence every ramification index is $1$.

Conclusion: a nonzero isogeny between elliptic curves is unramified, hence étale when the base assumptions allow this interpretation.

---

## 3. Pullback of Differentials

Let $\omega_2$ be a nonzero invariant differential on $C_2$. Then

$$
f^*\omega_2
$$

is a global differential on $C_1$.

Since $H^0(C_1,\Omega_{C_1})$ is one-dimensional,

$$
f^*\omega_2=c\omega_1
$$

for some scalar $c$.

For separable isogenies, $c\neq0$. Inseparability is detected by the pullback of differentials vanishing.

---

## 4. Isogenies are Group Homomorphisms

A nonconstant origin-preserving morphism of elliptic curves is automatically compatible with the group law.

One way to see this is to use the Picard description. A point $P\in C$ corresponds to

$$
\mathcal L((P)-(O)).
$$

The induced map on Picard groups respects tensor products, so the morphism respects addition.

Thus an isogeny is not just a morphism of curves; it is a finite group homomorphism.

---

## 5. Multiplication-by-$n$

The multiplication map is

$$
[n]:C\longrightarrow C,
\qquad
P\longmapsto nP.
$$

The notes first analyze $[2]$.

The kernel $C[2]$ consists of points satisfying

$$
2P=O.
$$

In a Weierstrass model, these correspond to the point at infinity together with the points where the tangent is vertical, equivalently the roots of the cubic in the simplified equation.

Generically there are four $2$-torsion points, so

$$
\deg[2]=4.
$$

The same philosophy gives

$$
\deg[n]=n^2.
$$

---

## 6. Degree via Divisors and Pullback

If $f:C_1\to C_2$ is finite and $P\in C_2$, then

$$
f^*(P)
$$

is a divisor on $C_1$ of degree $\deg f$.

For a line bundle $\mathcal L=\mathcal O(P)$ of degree $1$,

$$
\deg(f^*\mathcal L)=\deg f.
$$

This is the systematic replacement for counting points fiber-by-fiber: use pullback of divisors or line bundles.

---

## 7. Why This Matters

The degree calculation for $[n]$ is the first appearance of a key pattern:

$$
[n]^*\mathcal L
$$

should grow quadratically in $n$.

The next lecture proves the corresponding line-bundle identity using the theorem of the cube.
