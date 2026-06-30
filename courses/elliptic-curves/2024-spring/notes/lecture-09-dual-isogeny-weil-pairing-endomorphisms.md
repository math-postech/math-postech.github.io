# Lecture 9: Dual Isogeny, Weil Pairing, and Endomorphisms

> **Student notes**: begins around global PDF p. 75  
> **Date in notes**: Mar 19, 2024  
> **Theme**: Dual isogenies produce a positive degree form, which strongly restricts endomorphism algebras.

---

## Overview

This lecture has three linked goals:

1. construct and use the dual isogeny;
2. turn degree into a positive definite quadratic form;
3. explain why $\operatorname{End}(E)$ is highly restricted.

The Weil pairing enters as the torsion-level refinement of the same duality.

---

## 1. Dual Isogeny

::: theorem
Let $\phi:E_1\to E_2$ be an isogeny of degree $n$. There exists a unique isogeny

$$
\widehat\phi:E_2\to E_1
$$

such that

$$
\widehat\phi\circ\phi=[n]_{E_1},
\qquad
\phi\circ\widehat\phi=[n]_{E_2}.
$$
:::

**Proof idea.** Use the Picard identification $E\simeq\operatorname{Pic}^0(E)$. Pullback gives

$$
\phi^*:\operatorname{Pic}^0(E_2)\to\operatorname{Pic}^0(E_1).
$$

Transporting this map through the identifications with $E_2$ and $E_1$ defines $\widehat\phi$. The norm-pullback identity for divisors gives

$$
\widehat\phi\circ\phi=[\deg\phi],
$$

and symmetry gives the other composition identity. $\square$

::: remark
**Idea**

The dual isogeny is not an inverse unless $\deg\phi=1$. It is an inverse up to multiplication by the degree.
:::

---

## 2. Degree as a Quadratic Form

::: definition
For $\phi,\psi\in\operatorname{Hom}(E_1,E_2)$, define

$$
\langle \phi,\psi\rangle
=
\deg(\phi+\psi)-\deg\phi-\deg\psi.
$$
:::

::: proposition
This pairing is symmetric and bilinear after extending scalars to $\operatorname{Hom}(E_1,E_2)\otimes\mathbb Q$.
:::

**Proof idea.** The degree function satisfies a parallelogram identity because it comes from a symmetric line bundle and the cube theorem:

$$
\deg(\phi+\psi)+\deg(\phi-\psi)=2\deg\phi+2\deg\psi.
$$

The polarization identity then gives a symmetric bilinear form. $\square$

::: theorem
The form $\langle-,-\rangle$ is positive definite on $\operatorname{Hom}(E_1,E_2)\otimes\mathbb R$.
:::

**Proof.** If $\phi\ne0$, then $\phi$ is an isogeny onto its image and has positive degree. Thus the quadratic form $q(\phi)=\deg\phi$ is positive away from zero. The associated bilinear form is positive definite because $q$ satisfies the parallelogram law. $\square$

---

## 3. Endomorphism Algebra Restrictions

::: proposition
The natural map

$$
\mathbb Z\to\operatorname{End}(E),
\qquad
n\mapsto[n],
$$

is injective.
:::

**Proof.** If $[n]=0$ for $n\ne0$, then $\deg[n]=n^2>0$, contradiction because the zero morphism has degree $0$. $\square$

::: theorem
The real algebra

$$
\operatorname{End}(E)\otimes_\mathbb Z\mathbb R
$$

is isomorphic to one of

$$
\mathbb R,\qquad \mathbb C,\qquad \mathbb H,
$$

where $\mathbb H$ is the Hamilton quaternion algebra.
:::

**Explanation.** The positive definite degree form rules out nilpotents and indefinite behavior. The dual isogeny gives a positive involution. Finite-dimensional real division algebras with such positivity are restricted to $\mathbb R$, $\mathbb C$, and $\mathbb H$.

::: remark
In characteristic zero, only the commutative cases occur:

$$
\operatorname{End}(E)\otimes\mathbb Q
=
\mathbb Q
\quad\text{or an imaginary quadratic field}.
$$

In positive characteristic, the quaternionic case occurs for supersingular elliptic curves.
:::

---

## 4. Differential Test for Separability

::: lemma
Let $\phi:E\to E'$ be an isogeny. If

$$
\phi^*\omega_{E'}=0,
$$

then $\phi$ is inseparable. If $\phi$ is separable, then $\phi^*\omega_{E'}\ne0$.
:::

**Proof.** A separable map induces a nonzero map on differentials of function fields. A purely inseparable map in characteristic $p$ behaves locally like $u\mapsto u^p$, whose differential is zero. Since invariant differentials span the global differential space, the displayed condition detects the inseparable part. $\square$

::: remark
This is why Frobenius behaves differently from multiplication by $\ell\ne p$ on Tate modules and torsion.
:::

---

## 5. Weil Pairing Motivation

::: definition
For $n$ prime to the characteristic, the Weil pairing is a map

$$
e_n:E[n]\times E[n]\to\mu_n.
$$
:::

::: theorem
The Weil pairing is bilinear, alternating, nondegenerate, and compatible with isogeny duals:

$$
e_n(\phi P,Q)=e_n(P,\widehat\phi Q).
$$
:::

**Proof idea.** For $P\in E[n]$, choose a divisor $D_P$ representing $(P)-(O)$ and a rational function $f_P$ with

$$
\operatorname{div}(f_P)=nD_P.
$$

Evaluating such functions against divisors representing the second torsion point gives a root of unity. Weil reciprocity proves independence of choices and bilinearity. Compatibility with $\widehat\phi$ follows from the pullback/pushforward relation for divisors. $\square$

::: tip
**Lecture takeaway**

Duality appears in three forms:

$$
\widehat\phi\circ\phi=[\deg\phi],
\qquad
\deg(\phi)\text{ is positive},
\qquad
e_n(\phi P,Q)=e_n(P,\widehat\phi Q).
$$
:::
