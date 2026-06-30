# Lecture 12: The Hom Injection and the Tate Functor

> **Student notes**: global PDF pp. 110–118  
> **Theme**: The Tate module functor is faithful: an isogeny is detected by its action on Tate modules.

---

## Overview

The main theorem of this lecture is the injectivity of the natural map

$$
\operatorname{Hom}(E_1,E_2)\otimes\mathbb Z_\ell
\longrightarrow
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2).
$$

The student notes do not treat this as a black box. They record the proof strategy:

1. first prove that a morphism acting as zero on $T_\ell E$ must be zero after enough divisibility reasoning;
2. use finite generation of Hom groups;
3. use the idea that maps zero on $\ell^m$-torsion factor through $[\ell^m]$;
4. use a divisibility argument to force all coefficients to vanish.

---

## 1. The Natural Map

Given

$$
\phi:E_1\to E_2,
$$

we get compatible maps

$$
E_1[\ell^n]\to E_2[\ell^n]
$$

because

$$
[\ell^n]\phi(P)=\phi([\ell^n]P)=0.
$$

Passing to inverse limits gives

$$
T_\ell\phi:T_\ell E_1\to T_\ell E_2.
$$

Thus we have a group homomorphism

$$
\operatorname{Hom}(E_1,E_2)\to
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2).
$$

Extending scalars gives the map in the theorem.

---

## 2. Key Lemma: Zero on Torsion Implies Factorization

### Lemma

If an isogeny or homomorphism

$$
\phi:E_1\to E_2
$$

is zero on $E_1[\ell^m]$, then $\phi$ factors through $[\ell^m]$:

$$
\phi=\lambda\circ[\ell^m]
$$

for some homomorphism

$$
\lambda:E_1\to E_2.
$$

### Explanation

The quotient of $E_1$ by the finite subgroup $E_1[\ell^m]$ is exactly the target of the isogeny $[\ell^m]$:

$$
E_1/E_1[\ell^m]\cong E_1.
$$

If $\phi$ kills $E_1[\ell^m]$, then it is constant on the fibers of $[\ell^m]$. Therefore it descends to the quotient.

This gives the desired factorization.

---

## 3. Injectivity Before Tensoring

Suppose

$$
T_\ell\phi=0.
$$

Then for every $m$, the map $\phi$ kills $E_1[\ell^m]$. By the lemma,

$$
\phi=\lambda_m\circ[\ell^m]
$$

for every $m$.

Therefore $\phi$ is divisible by $\ell^m$ inside $\operatorname{Hom}(E_1,E_2)$ for every $m$.

But $\operatorname{Hom}(E_1,E_2)$ is a finitely generated free abelian group. The only element divisible by all powers of $\ell$ is zero.

Hence

$$
\phi=0.
$$

This proves injectivity of

$$
\operatorname{Hom}(E_1,E_2)\to
\operatorname{Hom}(T_\ell E_1,T_\ell E_2).
$$

---

## 4. Injectivity After Tensoring

Now suppose

$$
\sum_i a_i\phi_i
$$

maps to zero in the Tate-module Hom space after tensoring with $\mathbb Z_\ell$.

The student notes use the following finite-generation argument. Choose a finitely generated subgroup

$$
M\subset \operatorname{Hom}(E_1,E_2)
$$

containing the relevant $\phi_i$. Let

$$
M^{\operatorname{div}}
=
\{\phi\in M: [\ell^m]\phi\in M\text{ for some }m\}.
$$

The notes observe that $M^{\operatorname{div}}$ is still finitely generated and has the same rank as $M$.

Choose a $\mathbb Z$-basis

$$
\psi_1,\ldots,\psi_r
$$

of such a saturated lattice. If a combination maps to zero mod $\ell^m$ on Tate modules, then it is divisible by $\ell^m$ in the saturated lattice.

Writing

$$
\lambda=b_1\psi_1+\cdots+b_r\psi_r,
$$

divisibility by every $\ell^m$ forces every $b_i$ to be divisible by every $\ell^m$, hence

$$
b_i=0.
$$

Therefore the original element is zero.

This proves the injectivity of

$$
\operatorname{Hom}(E_1,E_2)\otimes\mathbb Z_\ell
\hookrightarrow
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2).
$$

---

## 5. Why Surjectivity Is Harder

The student notes explicitly flag that injectivity is not the full story.

To conclude that a map on Tate modules comes from an isogeny, one needs additional structure. In particular, the target should be restricted to maps compatible with the symplectic/Weil-pairing structure.

This is the beginning of Tate's theorem philosophy:

> homomorphisms of elliptic curves should be recovered from Galois-compatible homomorphisms of Tate modules.

The full theorem requires more arithmetic input. The course notes here only establish the structural mechanism.

---

## 6. Consequence for Endomorphisms

Taking $E_1=E_2=E$, we get

$$
\operatorname{End}(E)\otimes\mathbb Z_\ell
\hookrightarrow
\operatorname{End}_{\mathbb Z_\ell}(T_\ell E).
$$

Therefore every endomorphism can be studied by a $2\times2$ matrix over $\mathbb Z_\ell$.

This is the entry point to trace and determinant.
