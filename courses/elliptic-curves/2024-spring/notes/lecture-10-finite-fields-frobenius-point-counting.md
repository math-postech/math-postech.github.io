# Lecture 10: Finite Fields, Frobenius, and Point Counting

> **Student notes**: begins around global PDF p. 98  
> **Prep source**: `lecture11.md`  
> **Theme**: Frobenius is the endomorphism whose trace controls point counts.

---

## Overview

Let $E/\mathbb F_q$ be an elliptic curve. The arithmetic question is:

$$
\#E(\mathbb F_q)=?
$$

The geometric answer is to use Frobenius:

$$
\operatorname{Frob}_q:E\to E,
\qquad
(x,y)\mapsto(x^q,y^q).
$$

Then

$$
E(\mathbb F_q)=\ker(1-\operatorname{Frob}_q).
$$

---

## 1. Frobenius Fixed Points

::: definition
The $q$-power Frobenius endomorphism is

$$
\operatorname{Frob}_q(P)=P^{(q)}
$$

on coordinates.
:::

::: proposition
A geometric point $P\in E(\overline{\mathbb F}_q)$ lies in $E(\mathbb F_q)$ if and only if

$$
\operatorname{Frob}_q(P)=P.
$$
:::

**Proof.** A coordinate lies in $\mathbb F_q$ exactly when it is fixed by $a\mapsto a^q$. Applying this to the coordinates of $P$ gives the claim. $\square$

::: corollary

$$
E(\mathbb F_q)=\ker(1-\operatorname{Frob}_q).
$$
:::

---

## 2. Counting by Degree

::: proposition
The endomorphism $1-\operatorname{Frob}_q$ is separable, and

$$
\#E(\mathbb F_q)=\deg(1-\operatorname{Frob}_q).
$$
:::

**Proof idea.** The kernel of $1-\operatorname{Frob}_q$ is exactly the rational-point group. The differential of Frobenius is zero in characteristic $p$, while the differential of the identity is the identity. Hence the differential of $1-\operatorname{Frob}_q$ is nonzero, so the map is separable. For a separable isogeny, the number of geometric kernel points equals the degree. $\square$

::: remark
This is the first major point-counting conversion:

$$
\text{count points}
\quad\rightsquigarrow\quad
\text{compute degree of an endomorphism}.
$$
:::

---

## 3. Trace of an Endomorphism

::: definition
For an endomorphism $\phi$ of an elliptic curve, define its trace by

$$
\operatorname{tr}(\phi)=1+\deg\phi-\deg(1-\phi).
$$
:::

::: proposition
For Frobenius,

$$
\#E(\mathbb F_q)=q+1-\operatorname{tr}(\operatorname{Frob}_q).
$$
:::

**Proof.** Frobenius has degree $q$. By definition,

$$
\operatorname{tr}(\operatorname{Frob}_q)
=
1+q-\deg(1-\operatorname{Frob}_q).
$$

Using $\deg(1-\operatorname{Frob}_q)=\#E(\mathbb F_q)$ gives the formula. $\square$

::: remark
**Preparation-note motivation**

This is the elliptic-curve shadow of the Lefschetz trace formula: fixed points are counted by traces of an operator.
:::

---

## 4. Hasse Bound

::: theorem
Let

$$
a_q=\operatorname{tr}(\operatorname{Frob}_q).
$$

Then

$$
|a_q|\le 2\sqrt q.
$$

Equivalently,

$$
\left|\#E(\mathbb F_q)-(q+1)\right|\le2\sqrt q.
$$
:::

**Proof idea.** The degree pairing on $\operatorname{End}(E)$ is positive definite. Applying the Cauchy inequality to $1$ and $\operatorname{Frob}_q$ gives

$$
\operatorname{tr}(\operatorname{Frob}_q)^2\le4\deg(\operatorname{Frob}_q)=4q.
$$

Taking square roots gives the bound. $\square$

::: attention
The proof uses the positivity of degree. This is why the previous lecture’s endomorphism pairing is not optional background.
:::

---

## 5. Zeta Function Motivation

::: definition
The zeta function of $E/\mathbb F_q$ is

$$
Z(E/\mathbb F_q,t)
=
\exp\left(\sum_{n\ge1}\#E(\mathbb F_{q^n})\frac{t^n}{n}\right).
$$
:::

::: proposition
If $\alpha,\beta$ are the Frobenius eigenvalues, then

$$
\#E(\mathbb F_{q^n})=q^n+1-\alpha^n-\beta^n.
$$
:::

**Explanation.** Rational points over $\mathbb F_{q^n}$ are fixed points of $\operatorname{Frob}_q^n$. The trace of $\operatorname{Frob}_q^n$ is $\alpha^n+\beta^n$, while its degree is $q^n$.

::: tip
**Lecture takeaway**

Frobenius packages all finite-field point counts. To make “eigenvalues of Frobenius” rigorous, the course next introduces Tate modules.
:::
