# Lecture 4: Group Law on Elliptic Curves

> **Student notes**: global PDF pp. 25–33  
> **Date in notes**: Feb 29, 2024  
> **Theme**: The group law on an elliptic curve is the Picard group law written in points.

---

## Overview

The previous lecture constructed a plane cubic model from a genus-one curve with a marked point. This lecture explains why that marked point turns the curve into an abelian group.

The central identification is

$$
C \cong \operatorname{Pic}^0(C),
\qquad
P\longmapsto \mathcal O_C((P)-(O)).
$$

The group law is not guessed from the cubic picture. It is first defined in $\operatorname{Pic}^0(C)$, then translated back to points.

::: remark
**Student-note emphasis**

The student notes spend time on the Picard interpretation before drawing the chord-and-tangent rule. This matters: the picture is a consequence of divisor theory, not the definition.
:::

---

## 1. Genus-One Riemann--Roch Review

Let $C$ be a smooth projective curve of genus $1$, and let $O\in C$.

::: theorem
For every divisor $D$ on $C$ with $\deg D>0$,

$$
\ell(D)=\deg D.
$$
:::

**Proof.** Riemann--Roch gives

$$
\ell(D)-\ell(K-D)=\deg D+1-g.
$$

Since $g=1$, this becomes

$$
\ell(D)-\ell(K-D)=\deg D.
$$

The canonical divisor has degree $2g-2=0$. If $\deg D>0$, then $\deg(K-D)<0$, hence no nonzero rational function can have divisor at least $D-K$. Thus $\ell(K-D)=0$, so $\ell(D)=\deg D$. $\square$

::: corollary
For the marked point $O$,

$$
\ell(O)=1,\qquad \ell(2O)=2,\qquad \ell(3O)=3.
$$

Hence there exist functions $x,y$ with pole orders $2$ and $3$ at $O$, and they satisfy a Weierstrass relation.
:::

::: remark
**Idea**

The point $O$ is the place where the affine coordinates are allowed to have poles. The functions $x$ and $y$ should be read as controlled poles at $O$, not as arbitrary coordinates.
:::

---

## 2. The Picard Map

::: definition
Let $(C,O)$ be a genus-one curve with marked point. Define

$$
\phi:C\longrightarrow \operatorname{Pic}^0(C),
\qquad
P\longmapsto [\mathcal O_C((P)-(O))].
$$
:::

::: theorem
The map $\phi$ is a bijection.
:::

**Proof.**

First prove surjectivity. Let $\mathcal L$ be a degree-zero line bundle. It is represented by a divisor $D$ with $\deg D=0$. Then $D+O$ has degree $1$, so Riemann--Roch gives

$$
\ell(D+O)=1.
$$

Thus there is a nonzero section of $\mathcal O_C(D+O)$, equivalently an effective divisor $P$ of degree $1$ linearly equivalent to $D+O$. Therefore

$$
D+O\sim P,
\qquad
D\sim P-O.
$$

So $\mathcal L\cong \mathcal O_C((P)-(O))$.

For injectivity, suppose

$$
\mathcal O_C((P)-(O))\cong \mathcal O_C((Q)-(O)).
$$

Then $(P)\sim(Q)$. If $P\ne Q$, there is a rational function $f$ with

$$
\operatorname{div}(f)=(P)-(Q).
$$

This would give a nonconstant function with at most one pole, namely at $Q$. Hence $\ell(Q)\ge2$. But $\deg Q=1$, so Riemann--Roch gives $\ell(Q)=1$, a contradiction. Hence $P=Q$. $\square$

::: remark
**Why this is the group law source**

The group structure already exists on $\operatorname{Pic}^0(C)$ by tensor product. The theorem says every degree-zero line bundle has a unique point representative, so tensor product becomes an operation on points.
:::

---

## 3. Definition of Addition

::: definition
For $P,Q\in C$, define $P+Q$ to be the unique point satisfying

$$
\mathcal O_C((P)-(O))\otimes \mathcal O_C((Q)-(O))
\cong
\mathcal O_C((P+Q)-(O)).
$$

Equivalently,

$$
(P)+(Q)-2(O)\sim (P+Q)-(O).
$$
:::

::: proposition
The point $O$ is the identity element and every point has an inverse.
:::

**Proof.** For the identity,

$$
\mathcal O_C((P)-(O))\otimes\mathcal O_C((O)-(O))
\cong
\mathcal O_C((P)-(O)).
$$

Thus $P+O=P$.

For the inverse, the inverse of $\mathcal O_C((P)-(O))$ in $\operatorname{Pic}^0(C)$ is $\mathcal O_C((O)-(P))$. By the bijection $C\cong\operatorname{Pic}^0(C)$, there is a unique point $Q$ such that

$$
\mathcal O_C((Q)-(O))\cong \mathcal O_C((O)-(P)).
$$

Then $P+Q=O$, and $Q$ is denoted $-P$. $\square$

::: theorem
With this operation, $C$ is an abelian group.
:::

**Proof.** The operation is transported from tensor product in $\operatorname{Pic}^0(C)$. Tensor product of line bundles is associative and commutative up to canonical isomorphism, and $\mathcal O_C$ is the identity. Transporting this structure through the bijection $\phi$ gives associativity, commutativity, identity, and inverses on $C$. $\square$

::: attention
The group law is intrinsic. The plane cubic picture depends on the chosen Weierstrass embedding, but the Picard definition does not.
:::

---

## 4. Chord-and-Tangent Rule

Now suppose $C$ is embedded as a smooth plane cubic with $O$ the point at infinity.

::: lemma
If a line $L$ meets $C$ at $P,Q,R$ counted with multiplicity, then

$$
(P)+(Q)+(R)-3(O)
$$

is a principal divisor on $C$.
:::

**Proof.** The linear equation defining $L$ restricts to a rational function on $C$. Its zeros are exactly the intersection points $P,Q,R$, counted with intersection multiplicity. Since $L$ has degree $1$, it has a pole of order $3$ at the point at infinity in the cubic embedding. Hence

$$
\operatorname{div}(L|_C)=(P)+(Q)+(R)-3(O).
$$
$\square$

::: theorem
If a line meets $C$ in $P,Q,R$, then

$$
P+Q+R=O.
$$

Equivalently,

$$
P+Q=-R.
$$
:::

**Proof.** The lemma says

$$
(P)+(Q)+(R)-3(O)\sim0.
$$

Rewrite this as

$$
((P)-(O))+((Q)-(O))+((R)-(O))\sim0.
$$

Under $C\cong\operatorname{Pic}^0(C)$, addition of divisor classes is addition of points. Therefore $P+Q+R=O$. $\square$

::: remark
**Tangent case**

If $P=Q$, the line is the tangent line at $P$. The same divisor computation still works because intersection multiplicity records the repeated point. Thus doubling is obtained by tangent-and-reflect.
:::

---

## 5. Singular Comparisons

::: example
For a nodal cubic, the smooth locus behaves like $\mathbb G_m$.
:::

The line-through-points construction still produces a group law on the smooth locus, but the identity and inverse structure reflect the normalization of the nodal curve, not a smooth genus-one Picard variety.

::: example
For a cuspidal cubic, the smooth locus behaves like $\mathbb G_a$.
:::

This explains why smoothness is essential in the definition of an elliptic curve. Singular cubics have group-like smooth loci, but they do not have the same Picard/Riemann--Roch geometry as a smooth genus-one curve.

::: tip
**Lecture takeaway**

The chord-and-tangent rule is the visible shadow of one algebraic fact:

$$
C \cong \operatorname{Pic}^0(C).
$$
:::
