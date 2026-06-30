# Lecture 6: Isogenies, Hurwitz, and Degree

> **Student notes**: global PDF pp. 44–53  
> **Date in notes**: Mar 7, 2024  
> **Theme**: Nonzero origin-preserving maps between elliptic curves are finite unramified group homomorphisms.

---

## Overview

This lecture studies morphisms between elliptic curves. The main objects are nonconstant maps

$$
f:(E_1,O_1)\longrightarrow(E_2,O_2)
$$

with $f(O_1)=O_2$.

::: definition
An **isogeny** is a nonconstant morphism of elliptic curves preserving the origin.
:::

The lecture proves three structural facts:

1. an isogeny is finite and surjective;
2. an isogeny between elliptic curves is unramified in the separable case;
3. an isogeny is automatically a group homomorphism.

---

## 1. Morphisms of Projective Curves

::: lemma
A nonconstant morphism

$$
f:C_1\to C_2
$$

between irreducible projective curves is surjective and finite.
:::

**Proof.** The image of a projective variety is closed. Since $f$ is nonconstant, the image has dimension $1$. A closed one-dimensional subset of an irreducible curve is the whole curve. Thus $f$ is surjective. A surjective morphism of projective curves has finite generic fiber; properness then implies it is finite. $\square$

::: remark
The constant origin-preserving map is the zero homomorphism

$$
P\mapsto O_2.
$$

The interesting maps are the nonconstant ones.
:::

---

## 2. Hurwitz Formula

::: theorem
Let $f:C_1\to C_2$ be a finite separable morphism of smooth projective curves. Then

$$
2g(C_1)-2
=
(\deg f)(2g(C_2)-2)+\sum_{P\in C_1}(e_P-1),
$$

where $e_P$ is the ramification index at $P$.
:::

::: corollary
Every finite separable morphism between elliptic curves is unramified.
:::

**Proof.** For elliptic curves $g(E_1)=g(E_2)=1$. Substituting into Hurwitz gives

$$
0=\sum_{P\in E_1}(e_P-1).
$$

Each term $e_P-1$ is nonnegative, so every term is zero. Hence $e_P=1$ for all $P$. $\square$

::: remark
**Student-note idea**

The genus-one condition is extremely rigid. A finite separable self-map of an elliptic curve has no room for ramification because both canonical divisors have degree zero.
:::

---

## 3. Pullback of Differentials

Let $\omega_i$ be a nonzero invariant differential on $E_i$.

::: proposition
For any isogeny $f:E_1\to E_2$, there is a scalar $c_f$ such that

$$
f^*\omega_2=c_f\omega_1.
$$
:::

**Proof.** The pullback of a regular differential is regular. Since

$$
\dim H^0(E_1,\Omega_{E_1})=1,
$$

$f^*\omega_2$ is a scalar multiple of $\omega_1$. $\square$

::: lemma
If $f$ is separable, then $c_f\ne0$. If $f$ is purely inseparable, the pullback on differentials can vanish.
:::

**Explanation.** Separability means the induced extension of function fields has nonzero differential. In characteristic $p$, Frobenius sends functions to $p$th powers, so differentials can vanish because $d(a^p)=0$.

---

## 4. Isogenies Preserve Addition

::: theorem
Every isogeny

$$
f:(E_1,O_1)\to(E_2,O_2)
$$

is a group homomorphism.
:::

**Proof.** Use the Picard description of the group law. A point $P\in E_i$ corresponds to

$$
\mathcal O_{E_i}((P)-(O_i)).
$$

For $P,Q\in E_1$, the equality $P+Q=R$ means

$$
(P)+(Q)-2(O_1)\sim (R)-(O_1).
$$

Push this divisor relation forward under $f$. Since $f(O_1)=O_2$, the resulting degree-zero divisor relation on $E_2$ is

$$
(f(P))+(f(Q))-2(O_2)\sim (f(R))-(O_2).
$$

By the Picard description on $E_2$, this says

$$
f(P)+f(Q)=f(R)=f(P+Q).
$$

Thus $f$ preserves addition. $\square$

::: attention
This proof is conceptual. It avoids checking the chord-and-tangent formulas directly.
:::

---

## 5. Multiplication Maps and Torsion

::: definition
For $n\in\mathbb Z$, the multiplication map is

$$
[n]:E\to E,\qquad P\mapsto nP.
$$

The $n$-torsion subgroup is

$$
E[n]=\ker[n].
$$
:::

::: proposition
If $\operatorname{char}k\nmid n$, then

$$
\deg[n]=n^2
$$

and over an algebraically closed field

$$
E[n]\cong(\mathbb Z/n\mathbb Z)^2.
$$
:::

**Proof idea.** The differential of $[n]$ on invariant differentials is multiplication by $n$. If $\operatorname{char}k\nmid n$, this is nonzero, so $[n]$ is separable. The geometric kernel size equals the degree. The line-bundle calculation developed next gives $\deg[n]=n^2$, hence the kernel has $n^2$ points. Compatibility among torsion levels forces the group structure to be $(\mathbb Z/n\mathbb Z)^2$. $\square$

::: example
For $n=2$ in a short Weierstrass equation

$$
y^2=x^3+ax+b,
$$

the nonzero $2$-torsion points are exactly the points with $y=0$, i.e. the roots of the cubic. Together with $O$, this gives four points when the cubic has distinct roots.
:::

---

## 6. Degree by Divisors

::: definition
If $f:C_1\to C_2$ is finite, its degree is

$$
\deg f=[k(C_1):k(C_2)].
$$
:::

::: proposition
For any point $Q\in C_2$,

$$
\deg f^*(Q)=\deg f.
$$
:::

**Proof.** Pullback of a point records the fiber over $Q$ with ramification multiplicities. The sum of these multiplicities is the degree of the finite field extension. $\square$

::: tip
**Lecture takeaway**

Isogenies are simultaneously:

- finite maps of curves;
- homomorphisms of groups;
- maps whose degree can be read from divisors;
- maps whose separability is detected by differentials.
:::
