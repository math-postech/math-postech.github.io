# Lecture 9: Dual Isogeny, Weil Pairing, and Endomorphisms

> **Student notes**: begins around global PDF p. 75  
> **Date in notes**: Mar 19, 2024  
> **Theme**: Dual isogenies, the Weil pairing, and the algebraic structure of $\operatorname{End}(E)$.

---

## Overview

This lecture starts from the dual isogeny and develops a positive definite pairing on homomorphism groups. It then explains why the endomorphism algebra of an elliptic curve is highly restricted.

---

## 1. Dual Isogeny

Let

$$
\phi:E_1\longrightarrow E_2
$$

be an isogeny of degree $n$.

The dual isogeny is an isogeny

$$
\widehat\phi:E_2\longrightarrow E_1
$$

such that

$$
\widehat\phi\circ\phi=[n]_{E_1},
\qquad
\phi\circ\widehat\phi=[n]_{E_2}.
$$

The notes interpret $\phi$ by pushforward of line bundles and $\widehat\phi$ by pullback.

---

## 2. A Positive Definite Pairing

For homomorphisms between elliptic curves, define

$$
\langle \phi,\psi\rangle
=
\deg(\phi+\psi)-\deg\phi-\deg\psi.
$$

This is symmetric and positive definite after passing to the appropriate real vector space.

It is the elliptic-curve analogue of an inner product and controls the possible algebraic structure of homomorphism groups.

---

## 3. Endomorphism Algebra

There is an injection

$$
\mathbb Z\hookrightarrow \operatorname{End}(E),
\qquad
n\longmapsto [n].
$$

After tensoring with $\mathbb R$,

$$
\operatorname{End}(E)\otimes_\mathbb Z\mathbb R
$$

is a finite-dimensional real algebra with:

- an involution $\phi\mapsto\widehat\phi$;
- a positive definite symmetric bilinear form.

The notes state the resulting classification shape:

$$
\operatorname{End}(E)\otimes\mathbb R
\in
\{\mathbb R,\ \mathbb C,\ \mathbb H\},
$$

where $\mathbb H$ is the Hamilton quaternion algebra.

---

## 4. Characteristic Dependence

In characteristic zero, the endomorphism algebra is commutative:

$$
\operatorname{End}(E)\otimes\mathbb Q
$$

is either $\mathbb Q$ or an imaginary quadratic field.

In positive characteristic, the quaternionic case can occur, especially for supersingular elliptic curves.

The student notes emphasize using differentials to detect separability. If an endomorphism has zero pullback on invariant differentials, inseparability is present.

---

## 5. Weil Pairing Motivation

For a finite subgroup such as $E[n]$, the Weil pairing packages torsion information as roots of unity:

$$
e_n:E[n]\times E[n]\longrightarrow \mu_n.
$$

The notes build this through rational functions attached to divisors and show that the value is independent of choices after imposing the correct relations.

The conceptual role is that the Weil pairing turns torsion into a symplectic object. This becomes important for Tate modules and Galois representations.
