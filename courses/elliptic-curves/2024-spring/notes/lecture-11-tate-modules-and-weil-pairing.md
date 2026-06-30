# Lecture 11: Tate Modules and the Weil Pairing

> **Student notes**: global PDF pp. 105–109, with later references on pp. 116–118  
> **Prep sources**: `lecture12.md`, `lecture13.md`, `lecture14.md`  
> **Theme**: The Tate module turns the compatible tower of torsion points into rank-two linear algebra.

---

## Overview

The finite-field lectures need a linear space on which Frobenius acts. The Tate module supplies this object:

$$
T_\ell E=\varprojlim_n E[\ell^n].
$$

For $\ell\ne\operatorname{char}k$ and $k$ algebraically closed,

$$
T_\ell E\cong\mathbb Z_\ell^2.
$$

The Weil pairing adds the symplectic structure:

$$
T_\ell E\times T_\ell E\to\mathbb Z_\ell(1).
$$

---

## 1. Inverse Limits

::: definition
For a tower

$$
\cdots\to A_3\to A_2\to A_1,
$$

the inverse limit is

$$
\varprojlim A_n
=
\{(a_1,a_2,\ldots):a_n\in A_n,\ f_n(a_{n+1})=a_n\}.
$$
:::

::: remark
**Student-note explanation**

An element of an inverse limit is not one torsion point. It is a compatible choice of torsion points at every level.
:::

::: example
The standard tower

$$
\cdots\to\mathbb Z/\ell^3\mathbb Z
\to\mathbb Z/\ell^2\mathbb Z
\to\mathbb Z/\ell\mathbb Z
$$

has inverse limit $\mathbb Z_\ell$.
:::

---

## 2. Tate Module of an Elliptic Curve

::: definition
Let $E/k$ be an elliptic curve and $\ell\ne\operatorname{char}k$. Define

$$
E[\ell^n]=\ker([\ell^n]:E\to E).
$$

The $\ell$-adic Tate module is

$$
T_\ell E=\varprojlim_n E[\ell^n],
$$

where the transition maps are multiplication by $\ell$.
:::

Thus an element is a sequence

$$
(P_1,P_2,\ldots),
\qquad
P_n\in E[\ell^n],
\qquad
[\ell]P_{n+1}=P_n.
$$

::: attention
Do not confuse $T_\ell E$ with

$$
E[\ell^\infty]=\varinjlim_n E[\ell^n].
$$

The first is an inverse-limit $\mathbb Z_\ell$-module. The second is a torsion group.
:::

---

## 3. Structure of $\ell^n$-Torsion

::: theorem
If $k$ is algebraically closed and $\ell\ne\operatorname{char}k$, then

$$
E[\ell^n]\cong
\mathbb Z/\ell^n\mathbb Z\oplus
\mathbb Z/\ell^n\mathbb Z.
$$
:::

**Proof.** Since $\ell\ne\operatorname{char}k$, the differential of $[\ell^n]$ is multiplication by $\ell^n$, hence nonzero. Therefore $[\ell^n]$ is separable. Its degree is

$$
\deg[\ell^n]=\ell^{2n}.
$$

For a separable isogeny, the number of geometric kernel points equals the degree, so $E[\ell^n]$ has $\ell^{2n}$ points. The compatibility of the multiplication tower and the fact that $E[\ell]$ has rank two over $\mathbb F_\ell$ force the full group to be

$$
(\mathbb Z/\ell^n\mathbb Z)^2.
$$
$\square$

::: corollary

$$
T_\ell E\cong\mathbb Z_\ell^2.
$$
:::

**Proof.** Taking inverse limits of

$$
(\mathbb Z/\ell^n\mathbb Z)^2
$$

under reduction maps gives $\mathbb Z_\ell^2$. $\square$

---

## 4. Functoriality

::: proposition
Every homomorphism $\phi:E_1\to E_2$ induces a $\mathbb Z_\ell$-linear map

$$
T_\ell\phi:T_\ell E_1\to T_\ell E_2.
$$
:::

**Proof.** If $P\in E_1[\ell^n]$, then

$$
[\ell^n]\phi(P)=\phi([\ell^n]P)=0.
$$

So $\phi(P)\in E_2[\ell^n]$. These maps commute with the transition maps $[\ell]$, hence pass to the inverse limit. $\square$

::: remark
This is the key linearization step:

$$
\text{elliptic curve homomorphism}
\quad\mapsto\quad
2\times2\ \ell\text{-adic matrix}.
$$
:::

---

## 5. Weil Pairing at Finite Level

::: theorem
For $\ell\ne\operatorname{char}k$, the Weil pairing gives a perfect alternating pairing

$$
e_{\ell^n}:E[\ell^n]\times E[\ell^n]\to\mu_{\ell^n}.
$$
:::

It satisfies:

$$
e_{\ell^n}(P_1+P_2,Q)=e_{\ell^n}(P_1,Q)e_{\ell^n}(P_2,Q),
$$

$$
e_{\ell^n}(P,P)=1,
$$

and if $e_{\ell^n}(P,Q)=1$ for all $Q$, then $P=0$.

::: proposition
The Weil pairing is compatible with dual isogenies:

$$
e_{\ell^n}(\phi P,Q)=e_{\ell^n}(P,\widehat\phi Q).
$$
:::

**Proof idea.** Construct the pairing using functions whose divisors are multiples of torsion divisors. Pullback by $\phi$ and pushforward by $\widehat\phi$ are adjoint on divisors. Weil reciprocity then gives the displayed identity. $\square$

---

## 6. Tate-Module Pairing

::: theorem
Passing to inverse limits gives a nondegenerate alternating pairing

$$
T_\ell E\times T_\ell E\to T_\ell\mathbb G_m\cong\mathbb Z_\ell(1).
$$
:::

**Proof.** The finite pairings $e_{\ell^n}$ are compatible with the transition maps in both torsion and roots of unity. Therefore compatible sequences of torsion points pair to compatible sequences of roots of unity. Nondegeneracy at every finite level gives nondegeneracy in the inverse limit. $\square$

::: tip
**Lecture takeaway**

The Tate module is not just $\mathbb Z_\ell^2$. It is $\mathbb Z_\ell^2$ equipped with a canonical alternating form. This is why determinants, dual isogenies, and degrees match.
:::
