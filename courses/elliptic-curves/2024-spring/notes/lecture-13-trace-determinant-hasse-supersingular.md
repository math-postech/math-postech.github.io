# Lecture 13: Trace, Determinant, Hasse Bound, and Supersingular Behavior

> **Student notes**: global PDF pp. 117–130  
> **Prep sources**: `lecture13.md`, `lecture14.md`  
> **Theme**: Tate modules turn endomorphisms into matrices whose trace and determinant control point counts and supersingular behavior.

---

## Overview

For $\ell\ne\operatorname{char}k$, an endomorphism $\phi\in\operatorname{End}(E)$ acts on

$$
T_\ell E\cong\mathbb Z_\ell^2.
$$

The main identifications are

$$
\det(T_\ell\phi)=\deg\phi,
\qquad
\operatorname{Tr}(T_\ell\phi)=\operatorname{tr}(\phi).
$$

For Frobenius, these become the characteristic polynomial

$$
T^2-a_qT+q
$$

and the point-count formula

$$
\#E(\mathbb F_q)=q+1-a_q.
$$

---

## 1. Determinant Equals Degree

::: theorem
Let $\phi:E\to E$ be an isogeny and $\ell\ne\operatorname{char}k$. Then

$$
\det(T_\ell\phi)=\deg\phi
$$

as an element of $\mathbb Z_\ell$.
:::

**Proof.** The Weil pairing gives a perfect alternating form

$$
T_\ell E\times T_\ell E\to\mathbb Z_\ell(1).
$$

Compatibility with the dual isogeny says

$$
e(T_\ell\phi x,y)=e(x,T_\ell\widehat\phi\, y).
$$

Since

$$
\widehat\phi\circ\phi=[\deg\phi],
$$

the adjoint relation implies that the multiplier on the top exterior power is $\deg\phi$. For a rank-two module, the multiplier on $\bigwedge^2T_\ell E$ is exactly the determinant. Hence $\det(T_\ell\phi)=\deg\phi$. $\square$

::: remark
This is why the student notes emphasize the symplectic form: without the Weil pairing, the determinant-degree equality would look accidental.
:::

---

## 2. Trace and Characteristic Polynomial

::: definition
The trace of an endomorphism $\phi$ is the integer $\operatorname{tr}(\phi)$ characterized by

$$
\deg(1-\phi)=1-\operatorname{tr}(\phi)+\deg\phi.
$$
:::

::: theorem
The characteristic polynomial of $T_\ell\phi$ is

$$
P_\phi(T)=T^2-\operatorname{tr}(\phi)T+\deg\phi.
$$
:::

**Proof.** The determinant term is $\deg\phi$ by the previous theorem. For a $2\times2$ operator $A$,

$$
\det(I-A)=1-\operatorname{Tr}(A)+\det(A).
$$

Apply this to $A=T_\ell\phi$. Since $\det(I-T_\ell\phi)$ matches $\deg(1-\phi)$, comparison with the defining equation for $\operatorname{tr}(\phi)$ gives

$$
\operatorname{Tr}(T_\ell\phi)=\operatorname{tr}(\phi).
$$

Therefore the characteristic polynomial has the displayed form. $\square$

---

## 3. Hasse Inequality from Positivity

::: theorem
For every endomorphism $\phi$,

$$
\operatorname{tr}(\phi)^2\le4\deg\phi.
$$
:::

**Proof.** Use the positive definite pairing

$$
\langle \alpha,\beta\rangle
=
\deg(\alpha+\beta)-\deg\alpha-\deg\beta.
$$

For $\alpha=1$ and $\beta=\phi$, Cauchy's inequality gives

$$
\langle 1,\phi\rangle^2
\le
\langle 1,1\rangle\langle \phi,\phi\rangle.
$$

Now

$$
\langle 1,\phi\rangle=\operatorname{tr}(\phi),
\qquad
\langle 1,1\rangle=2,
\qquad
\langle \phi,\phi\rangle=2\deg\phi
$$

because $\deg[2]=4$ and $\deg(2\phi)=4\deg\phi$. Therefore

$$
\operatorname{tr}(\phi)^2\le4\deg\phi.
$$
$\square$

::: corollary
If $\alpha,\beta$ are the complex roots of

$$
T^2-\operatorname{tr}(\phi)T+\deg\phi,
$$

then

$$
|\alpha|=|\beta|=\sqrt{\deg\phi}.
$$
:::

**Proof.** The discriminant is nonpositive by the theorem, so the roots are either equal real roots or complex conjugates. Their product is $\deg\phi$, hence both have absolute value $\sqrt{\deg\phi}$. $\square$

---

## 4. Frobenius and the Hasse Bound

::: theorem
Let $E/\mathbb F_q$ and let

$$
a_q=\operatorname{tr}(\operatorname{Frob}_q).
$$

Then

$$
\#E(\mathbb F_q)=q+1-a_q
$$

and

$$
|a_q|\le2\sqrt q.
$$
:::

**Proof.** The fixed-point formula gives

$$
\#E(\mathbb F_q)=\deg(1-\operatorname{Frob}_q).
$$

By definition of trace and $\deg\operatorname{Frob}_q=q$,

$$
\deg(1-\operatorname{Frob}_q)=1-a_q+q.
$$

The inequality follows from

$$
a_q^2\le4\deg(\operatorname{Frob}_q)=4q.
$$
$\square$

::: remark
This is the Hasse bound:

$$
\left|\#E(\mathbb F_q)-(q+1)\right|\le2\sqrt q.
$$
:::

---

## 5. Counts Over Extensions and Zeta Function

::: proposition
If $\alpha,\beta$ are the Frobenius eigenvalues, then

$$
\#E(\mathbb F_{q^n})=q^n+1-\alpha^n-\beta^n.
$$
:::

**Proof.** Points over $\mathbb F_{q^n}$ are fixed by $\operatorname{Frob}_q^n$. The degree of this endomorphism is $q^n$, and the trace on the Tate module is $\alpha^n+\beta^n$. Therefore

$$
\#E(\mathbb F_{q^n})
=
\deg(1-\operatorname{Frob}_q^n)
=
1-(\alpha^n+\beta^n)+q^n.
$$
$\square$

::: definition

$$
Z(E/\mathbb F_q,t)
=
\exp\left(\sum_{n\ge1}\#E(\mathbb F_{q^n})\frac{t^n}{n}\right).
$$
:::

::: remark
The preparation notes say “log of determinant gives trace.” This is the reason the zeta function is written with an exponential generating series: traces of Frobenius powers become logarithms of characteristic-polynomial factors.
:::

---

## 6. The Case $\ell=p$

Let $p=\operatorname{char}k$. The previous Tate-module construction used $\ell\ne p$. The $p$-power torsion behaves differently.

::: theorem
Over an algebraically closed field of characteristic $p$, the reduced $p^n$-torsion of an elliptic curve has one of two forms:

$$
E[p^n]^{\operatorname{red}}\cong\mathbb Z/p^n\mathbb Z
$$

for ordinary curves, or

$$
E[p^n]^{\operatorname{red}}=0
$$

for supersingular curves.
:::

**Explanation.** The multiplication-by-$p$ map factors into Frobenius and Verschiebung:

$$
[p]=V\circ F.
$$

Frobenius has zero differential. The behavior of Verschiebung determines whether there is an étale part in $E[p]$. If the étale part survives, the curve is ordinary; if not, the curve is supersingular.

::: definition
An elliptic curve in characteristic $p$ is **supersingular** if its geometric $p$-torsion has no nontrivial reduced points:

$$
E[p](\bar k)=0.
$$
:::

::: remark
This matches the preparation-note slogan: supersingularity is detected by the interaction of Frobenius, Verschiebung, and differentials.
:::

---

## 7. Endomorphism Consequences

::: theorem
For a supersingular elliptic curve in characteristic $p$,

$$
\operatorname{End}(E)\otimes\mathbb Q
$$

is a quaternion algebra.
:::

**Explanation.** Supersingularity creates extra endomorphisms coming from Frobenius and inseparable structure. The positive involution from dual isogeny still restricts the algebra, and the noncommutative possibility in the classification is the quaternion case.

::: tip
**Lecture takeaway**

The final course picture is:

$$
\text{geometry of }E
\to
\text{endomorphisms}
\to
\text{Tate-module matrices}
\to
\text{trace/determinant}
\to
\text{point counts}.
$$
:::
