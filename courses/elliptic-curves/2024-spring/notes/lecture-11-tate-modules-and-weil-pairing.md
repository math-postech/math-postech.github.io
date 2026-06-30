# Lecture 11: Tate Modules and the Weil Pairing

> **Student notes**: global PDF pp. 105–109, with later references on pp. 116–118  
> **Prep sources**: `lecture12.md`, `lecture13.md`, `lecture14.md`  
> **Theme**: The Tate module is the inverse-limit object that turns torsion points into linear algebra; the Weil pairing supplies the missing symplectic structure.

---

## Overview

The finite-field discussion ended with Frobenius point-counting:

$$
\#E(\mathbb F_q)=\deg(1-\operatorname{Frob}_q).
$$

To understand this degree as a determinant, we need a linear object on which endomorphisms of $E$ act. The Tate module is that object.

The student notes emphasize three questions:

1. What is an inverse limit?
2. What is the structure of $E[\ell^n]$?
3. Why are Tate modules useful?

The answer is that $T_\ell E$ is a stable bookkeeping device for all $\ell^n$-torsion, and it is compatible with isogenies, Frobenius, Galois action, and the Weil pairing.

---

## 1. Inverse Limits: The General Definition

A directed graph or category can be used as an indexing category. A diagram in a category $\mathcal C$ is a functor

$$
D:I\longrightarrow\mathcal C.
$$

The inverse limit is the universal object receiving compatible maps to the objects of the diagram.

For the tower

$$
\cdots \longrightarrow A_3\longrightarrow A_2\longrightarrow A_1,
$$

the inverse limit is concretely

$$
\varprojlim A_n
=
\left\{(a_1,a_2,a_3,\ldots): a_n\in A_n,\ f_n(a_{n+1})=a_n\right\}.
$$

So an element of an inverse limit is a coherent sequence of approximations.

---

## 2. Definition of the Tate Module

Let $E/k$ be an elliptic curve, and let $\ell\ne\operatorname{char}k$ be a prime.

The $\ell^n$-torsion subgroup is

$$
E[\ell^n]=\ker([\ell^n]:E\to E).
$$

The transition maps are multiplication by $\ell$:

$$
E[\ell^{n+1}]\xrightarrow{[\ell]}E[\ell^n].
$$

The $\ell$-adic Tate module is

$$
T_\ell E=\varprojlim_n E[\ell^n].
$$

Thus an element of $T_\ell E$ is a sequence

$$
(P_1,P_2,P_3,\ldots)
$$

where

$$
P_n\in E[\ell^n],
\qquad
[\ell]P_{n+1}=P_n.
$$

---

## 3. Do Not Confuse $T_\ell E$ with $E[\ell^\infty]$

The notes explicitly warn that there is another object:

$$
E[\ell^\infty]=\varinjlim_n E[\ell^n],
$$

where the direct system is given by inclusions

$$
E[\ell]\hookrightarrow E[\ell^2]\hookrightarrow E[\ell^3]\hookrightarrow\cdots.
$$

This is not the Tate module.

- $E[\ell^\infty]$ is a torsion group.
- $T_\ell E$ is an inverse-limit lattice.

The Tate module behaves like a linearized tangent object for the tower of torsion points.

---

## 4. Structure of $E[\ell^n]$

Assume $k$ is algebraically closed and $\ell\ne\operatorname{char}k$.

Then multiplication by $\ell^n$ is separable of degree $\ell^{2n}$, and

$$
E[\ell^n]\cong \mathbb Z/\ell^n\mathbb Z\oplus\mathbb Z/\ell^n\mathbb Z.
$$

Therefore

$$
T_\ell E\cong\mathbb Z_\ell\oplus\mathbb Z_\ell.
$$

So $T_\ell E$ is a free $\mathbb Z_\ell$-module of rank $2$.

### Proof Sketch

Since $\ell\ne\operatorname{char}k$, the differential of $[\ell^n]$ is multiplication by $\ell^n$, hence nonzero. Therefore $[\ell^n]$ is separable.

For an isogeny, separability means the number of geometric kernel points equals the degree. Since

$$
\deg[\ell^n]=\ell^{2n},
$$

we get exactly $\ell^{2n}$ torsion points. The finite abelian group structure compatible with multiplication by $\ell$ is then

$$
(\mathbb Z/\ell^n\mathbb Z)^2.
$$

Passing to the inverse limit gives $\mathbb Z_\ell^2$.

---

## 5. Weil Pairing at Finite Level

For each $n$, the Weil pairing is a nondegenerate alternating pairing

$$
e_{\ell^n}:E[\ell^n]\times E[\ell^n]\longrightarrow \mu_{\ell^n}.
$$

It satisfies:

1. **Bilinearity**:

$$
e_{\ell^n}(P_1+P_2,Q)=e_{\ell^n}(P_1,Q)e_{\ell^n}(P_2,Q),
$$

and similarly in the second variable.

2. **Alternating behavior**:

$$
e_{\ell^n}(P,P)=1.
$$

3. **Nondegeneracy**: if $e_{\ell^n}(P,Q)=1$ for all $Q$, then $P=0$.

4. **Compatibility in $n$**: the pairings commute with the transition maps in the torsion tower.

The student notes record this compatibility as a diagram involving

$$
E[\ell^{n+1}]\times E[\ell^{n+1}]\to \mu_{\ell^{n+1}}
$$

and

$$
E[\ell^n]\times E[\ell^n]\to \mu_{\ell^n}.
$$

---

## 6. Weil Pairing on the Tate Module

Passing to the inverse limit gives a pairing

$$
T_\ell E\times T_\ell E\longrightarrow T_\ell\mathbb G_m\cong\mathbb Z_\ell(1).
$$

After choosing compatible roots of unity, this is a symplectic form on the rank-two $\mathbb Z_\ell$-module $T_\ell E$.

This is why the student notes say:

> To conclude that an injection is also surjective, we need a symplectic structure on $T_\ell E$.

The Tate module is not merely a free module; it carries a nondegenerate alternating form.

---

## 7. Why the Pairing Matters

Suppose an isogeny $\phi:E_1\to E_2$ induces a map

$$
T_\ell\phi:T_\ell E_1\to T_\ell E_2.
$$

The Weil pairing is compatible with dual isogenies:

$$
e_{\ell^n}(\phi P,Q)=e_{\ell^n}(P,\widehat\phi Q).
$$

So the adjoint of $T_\ell\phi$ with respect to the Weil pairing is $T_\ell\widehat\phi$.

This compatibility is the structural reason that determinants and degrees match later:

$$
\det(T_\ell\phi)=\deg\phi.
$$

The next lecture proves the Hom-injection and explains why isogenies can be recovered from their Tate-module actions.
