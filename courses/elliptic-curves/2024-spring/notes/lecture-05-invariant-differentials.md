# Lecture 5: Invariant Differentials

> **Student notes**: global PDF pp. 34–43  
> **Date in notes**: Mar 5, 2024  
> **Theme**: The one-dimensional space of global differentials on an elliptic curve is fixed by translations.

---

## Overview

This lecture studies the canonical differential on an elliptic curve. The concrete formula is

$$
\omega=\frac{dx}{2y+a_1x+a_3}
=
\frac{dy}{3x^2+2a_2x+a_4-a_1y}.
$$

The structural result is

$$
t_P^*\omega=\omega
\qquad\text{for every }P\in E.
$$

::: remark
**Student-note emphasis**

The notes compare smooth elliptic curves with cuspidal singular cubics. The smooth case has a nowhere-vanishing regular differential; singular curves reveal why the smoothness hypothesis is not cosmetic.
:::

---

## 1. Differentials on a Smooth Curve

::: definition
Let $C$ be a smooth curve. The sheaf of differentials $\Omega_C$ can be defined from the diagonal embedding

$$
\Delta:C\hookrightarrow C\times C
$$

by

$$
\Omega_C=\mathcal I_\Delta/\mathcal I_\Delta^2.
$$
:::

::: theorem
For a smooth projective curve $C$ of genus $g$,

$$
\dim H^0(C,\Omega_C)=g.
$$
:::

::: corollary
If $E$ is an elliptic curve, then

$$
\dim H^0(E,\Omega_E)=1.
$$

Thus every nonzero global differential is unique up to scalar.
:::

::: remark
**Idea**

For $E(\mathbb C)\cong\mathbb C/\Lambda$, the differential is $dz$. Algebraically, $H^0(E,\Omega_E)$ is the replacement for the one-dimensional space spanned by $dz$.
:::

---

## 2. The Explicit Weierstrass Differential

Let

$$
E:\quad
y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$

::: lemma
On $E$, the differentials $dx$ and $dy$ satisfy

$$
(2y+a_1x+a_3)dy
=
(3x^2+2a_2x+a_4-a_1y)dx.
$$
:::

**Proof.** Differentiate the defining equation:

$$
2y\,dy+a_1x\,dy+a_1y\,dx+a_3\,dy
=
3x^2\,dx+2a_2x\,dx+a_4\,dx.
$$

Move the $a_1y\,dx$ term to the right. $\square$

::: proposition
The differential

$$
\omega=\frac{dx}{2y+a_1x+a_3}
$$

is a regular global differential on $E$. Equivalently,

$$
\omega=
\frac{dy}{3x^2+2a_2x+a_4-a_1y}.
$$
:::

**Proof.** The displayed lemma shows the two local formulas agree wherever both denominators make sense. If the denominator $2y+a_1x+a_3$ vanishes, then the equation forces $dx$ to vanish to the same order unless the curve is singular. The alternate $dy$ expression covers this locus. Similarly, if the second denominator vanishes, the first expression covers it. Smoothness says the two partial derivatives of the Weierstrass equation cannot vanish simultaneously on $E$. Therefore the formulas glue to a regular differential. $\square$

::: attention
The denominator is not an arbitrary trick. It is exactly the partial derivative of the defining equation with respect to $y$.
:::

---

## 3. Translation Pullback

For $P\in E$, let

$$
t_P:E\to E,
\qquad
Q\mapsto Q+P.
$$

::: lemma
For every $P\in E$, there is a scalar $\lambda(P)\in k^\times$ such that

$$
t_P^*\omega=\lambda(P)\omega.
$$
:::

**Proof.** Translation is an automorphism of the smooth curve $E$, so it pulls regular differentials to regular differentials. Since $H^0(E,\Omega_E)$ is one-dimensional and $\omega\ne0$, the pullback must be a scalar multiple of $\omega$. $\square$

::: proposition
The function $P\mapsto\lambda(P)$ is a morphism

$$
\lambda:E\to\mathbb G_m.
$$
:::

**Explanation.** Translation depends algebraically on $P$. Pulling back $\omega$ along the addition map

$$
m:E\times E\to E
$$

and comparing with a chosen basis of the one-dimensional vector space $H^0(E,\Omega_E)$ gives a regular invertible scalar function on $E$.

---

## 4. Translation Invariance

::: theorem
For every $P\in E$,

$$
t_P^*\omega=\omega.
$$
:::

**Proof.** From the previous section, $\lambda:E\to\mathbb G_m$ is a morphism. Because $E$ is projective, the image of $E$ under any morphism to an affine variety is complete. The only complete connected subvariety of $\mathbb G_m$ is a point. Hence $\lambda$ is constant.

At $P=O$, translation is the identity, so

$$
\lambda(O)=1.
$$

Therefore $\lambda(P)=1$ for all $P$, and $t_P^*\omega=\omega$. $\square$

::: remark
**Idea**

Over $\mathbb C$, this is just the statement that translation on $\mathbb C/\Lambda$ preserves $dz$. The algebraic proof replaces analytic coordinates by projectivity plus the one-dimensionality of global differentials.
:::

---

## 5. Smooth vs Singular Behavior

::: example
For the cuspidal cubic

$$
y^2=x^3,
$$

the smooth locus is closer to $\mathbb G_a$ than to a compact torus.
:::

At the cusp, the differential behavior degenerates. This is why the canonical differential story belongs to smooth elliptic curves, not arbitrary cubic equations.

::: tip
**Lecture takeaway**

The invariant differential is the bridge from geometry to isogeny theory:

$$
f^*\omega_2=c\,\omega_1.
$$

Later, the scalar $c$ detects separability and Frobenius behavior.
:::
