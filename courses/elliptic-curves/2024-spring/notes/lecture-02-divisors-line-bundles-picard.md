# Lecture 2: Divisors, Line Bundles, and Picard Groups

> **Student notes**: pp. 5–14  
> **Prep source**: `lecture2.md`  
> **Theme**: Divisors and line bundles are two languages for the same geometry on a smooth projective curve.

---

## Overview

Lecture 2 begins the actual geometry of curves. The student notes show a clear path:

1. define curves and divisors;
2. define principal divisors and rational equivalence;
3. explain rationality over $k$ versus over $\bar k$;
4. classify line bundles on $\mathbb P^1$ by transition functions;
5. construct a line bundle from a divisor;
6. construct a divisor from a line bundle with a rational section;
7. interpret the Picard group as either divisor classes or line-bundle classes.

::: remark
**Main idea**

A divisor is a bookkeeping device for zeros and poles. A line bundle is the geometric object whose sections have those zeros and poles. The lecture's main theorem is that these two languages agree on smooth projective curves.
:::

---

## 1. Curves

::: definition
**Smooth Projective Curve**

A curve $C$ over a field $k$ is a one-dimensional variety over $k$. In this course we focus on projective curves, i.e. closed subschemes of some projective space $\mathbb P^n$ cut out by homogeneous equations.

A curve is smooth if each local ring $\mathcal O_{C,P}$ is regular. For a smooth curve, $\mathcal O_{C,P}$ is a discrete valuation ring.
:::

::: remark
**Why discrete valuation rings matter**

At a point $P$ on a smooth curve, every rational function has a well-defined order:

- positive order means zero;
- negative order means pole;
- zero order means neither zero nor pole.

This is why divisors work so cleanly on curves.
:::

---

## 2. Divisors

::: definition
**Divisor Group**

The divisor group of a smooth projective curve $C$ is

$$
\operatorname{Div}(C)=
\left\{
\sum_{P\in C} n_P(P):n_P\in\mathbb Z,
\ n_P=0\text{ for all but finitely many }P
\right\}.
$$

The degree of

$$
D=\sum n_P(P)
$$

is

$$
\deg D=\sum n_P.
$$
:::

::: definition
**Effective Divisor**

A divisor

$$
D=\sum n_P(P)
$$

is effective, written $D\ge0$, if $n_P\ge0$ for every $P$.
:::

::: example
If $P,Q\in C$, then

$$
3(P)-2(Q)
$$

is a divisor of degree $1$. It is not effective because the coefficient of $Q$ is negative.
:::

---

## 3. Divisor of a Rational Function

Let $k(C)$ be the rational function field of $C$.

::: definition
**Principal Divisor**

For $f\in k(C)^\times$, define

$$
\operatorname{div}(f)=
\sum_{P\in C}\operatorname{ord}_P(f)(P).
$$

Such divisors are called principal divisors.
:::

::: theorem
**Principal Divisors Have Degree Zero**

If $C$ is smooth and projective, then for every nonzero rational function $f\in k(C)^\times$,

$$
\deg\operatorname{div}(f)=0.
$$
:::

**Proof.** The rational function $f$ defines a morphism

$$
f:C\longrightarrow\mathbb P^1
$$

after resolving the usual poles by sending them to $\infty$. The zeros of $f$ are the points mapping to $0$, counted with multiplicity. The poles of $f$ are the points mapping to $\infty$, counted with multiplicity. Since $0$ and $\infty$ are both points of degree $1$ on $\mathbb P^1$, their pullbacks under the same finite map have the same degree. Hence total zeros equal total poles, so

$$
\deg\operatorname{div}(f)=0.
$$

::: remark
**Student-note warning**

Functions need not be compatible with Galois action on individual points. This is why the notes distinguish divisors over $k$ from divisors over $\bar k$.
:::

---

## 4. Rational Equivalence and Picard Group

::: definition
**Rational Equivalence**

Two divisors $D_1,D_2$ are rationally equivalent, written

$$
D_1\sim D_2,
$$

if there exists $f\in k(C)^\times$ such that

$$
D_1-D_2=\operatorname{div}(f).
$$
:::

::: definition
**Picard Group via Divisors**

The Picard group is

$$
\operatorname{Pic}(C)=
\operatorname{Div}(C)/\{\text{principal divisors}\}.
$$

The degree-zero Picard group is

$$
\operatorname{Pic}^0(C)=
\operatorname{Div}^0(C)/\{\text{principal divisors}\}.
$$
:::

::: proposition
**Rational equivalence preserves degree**

If $D_1\sim D_2$, then

$$
\deg D_1=\deg D_2.
$$
:::

**Proof.** If $D_1-D_2=\operatorname{div}(f)$, then

$$
\deg D_1-
\deg D_2
=
\deg\operatorname{div}(f)=0.
$$

Therefore the degrees are equal.

---

## 5. Example: Rational Equivalence on $\mathbb P^1$

The student notes state that $\mathbb P^1$ is essentially the only curve where divisors are classified just by degree.

::: theorem
**Divisors on $\mathbb P^1$**

For $C=\mathbb P^1$ over an algebraically closed field, two divisors $D_1,D_2$ are rationally equivalent if and only if

$$
\deg D_1=\deg D_2.
$$

Thus

$$
\operatorname{Pic}(\mathbb P^1)\cong\mathbb Z.
$$
:::

**Proof.** It is enough to show that any point $(a)$ is rationally equivalent to $(\infty)$.

Use the coordinate $z$ on $\mathbb A^1\subset\mathbb P^1$. The rational function

$$
f=z-a
$$

has one zero at $a$ and one pole at $\infty$. Hence

$$
\operatorname{div}(z-a)=(a)-(\infty).
$$

So

$$
(a)\sim(\infty).
$$

By additivity, any divisor of degree $d$ is rationally equivalent to $d(\infty)$. Therefore degree completely classifies divisor classes on $\mathbb P^1$.

::: remark
**Why this fails for other curves**

On a general curve, one cannot find a rational function with divisor $(P)-(Q)$ for arbitrary points $P,Q$. This failure is exactly what makes the Picard group interesting.
:::

---

## 6. Line Bundles

::: definition
**Line Bundle**

A line bundle on a scheme or variety $C$ is an $\mathcal O_C$-module $\mathcal L$ such that for every point of $C$, there is an open neighborhood $U$ with

$$
\mathcal L|_U\cong\mathcal O_U.
$$

Equivalently, it is a locally free sheaf of rank $1$.
:::

The student notes emphasize that line bundles are glued from trivial local pieces.

Suppose $\{U_i\}$ is an open cover and

$$
\mathcal L|_{U_i}\cong\mathcal O_{U_i}.
$$

On overlaps $U_i\cap U_j$, two trivializations differ by multiplication by a unit

$$
g_{ij}\in\mathcal O_C^\times(U_i\cap U_j).
$$

These $g_{ij}$ are the transition functions.

::: remark
**Idea**

A line bundle is locally boring but globally may twist. The twisting is exactly measured by transition functions.
:::

---

## 7. Line Bundles on $\mathbb P^1$

Cover

$$
\mathbb P^1=U_0\cup U_\infty
$$

where

$$
U_0=\operatorname{Spec}k[t],
\qquad
U_\infty=\operatorname{Spec}k[t^{-1}],
$$

and

$$
U_0\cap U_\infty=\operatorname{Spec}k[t,t^{-1}].
$$

A line bundle is obtained by gluing two trivial line bundles over $U_0$ and $U_\infty$ by a transition function

$$
g\in k[t,t^{-1}]^\times.
$$

::: lemma
**Units of the Laurent polynomial ring**

The invertible elements of $k[t,t^{-1}]$ are exactly

$$
c t^n,
\qquad c\in k^\times,
\quad n\in\mathbb Z.
$$
:::

**Proof.** Let

$$
f=t^m(a_0+a_1t+
\cdots+a_rt^r)
$$

where $a_0,a_r\ne0$. If $f$ is a unit, then there exists $g$ with $fg=1$. The support exponents of $fg$ are obtained by adding support exponents of $f$ and $g$. If $f$ has more than one term, then the lowest and highest exponent terms cannot both disappear. Hence $f$ must have exactly one term, so $f=ct^n$.

::: theorem
**Classification of line bundles on $\mathbb P^1$**

Every line bundle on $\mathbb P^1$ is isomorphic to exactly one $\mathcal O(n)$, and

$$
\operatorname{Pic}(\mathbb P^1)\cong\mathbb Z.
$$
:::

**Proof.** A line bundle is represented by a transition function $g\in k[t,t^{-1}]^\times$. By the lemma,

$$
g=ct^n.
$$

Changing trivialization on one open set removes the scalar $c$, so the isomorphism class depends only on $n$. The bundle corresponding to $t^n$ is denoted $\mathcal O(n)$. Tensor product adds exponents:

$$
\mathcal O(m)\otimes\mathcal O(n)\cong\mathcal O(m+n).
$$

Thus the Picard group is $\mathbb Z$.

---

## 8. Constructing a Line Bundle from a Divisor

Let

$$
D=\sum n_P(P)
$$

be a divisor on a smooth curve $C$.

::: definition
**The line bundle $\mathcal O_C(D)$**

Define

$$
L(D)=
\{f\in k(C):\operatorname{div}(f)+D\ge0\}\cup\{0\}.
$$

This is the space of rational sections of the line bundle $\mathcal O_C(D)$.
:::

The student notes describe the local construction.

Choose small open sets $U_P$ around each point in the support of $D$, and choose rational functions $f_P$ such that locally

$$
\operatorname{div}(f_P)=n_P(P).
$$

On overlaps, glue by

$$
\frac{f_Q}{f_P}.
$$

::: proposition
**Divisors define line bundles**

The above gluing construction defines a line bundle $\mathcal O_C(D)$.
:::

**Proof.** On each $U_P$ we take a trivial rank-one module. On an overlap $U_P\cap U_Q$, the transition function $f_Q/f_P$ has no zeros or poles because the local divisor contributions agree away from the prescribed points. Hence it is a unit on the overlap. The cocycle condition holds because

$$
\frac{f_Q}{f_P}\cdot\frac{f_R}{f_Q}=\frac{f_R}{f_P}.
$$

Therefore the local trivial bundles glue to a global line bundle.

---

## 9. Constructing a Divisor from a Line Bundle

Conversely, let $\mathcal L$ be a line bundle and let $s$ be a nonzero rational section.

::: definition
**Divisor of a Rational Section**

The divisor of $s$ is

$$
\operatorname{div}(s)=
\sum_P \operatorname{ord}_P(s)(P),
$$

where $\operatorname{ord}_P(s)$ is measured after choosing a local trivialization of $\mathcal L$.
:::

::: proposition
**Changing section changes divisor by a principal divisor**

If $s_1$ and $s_2$ are two nonzero rational sections of the same line bundle $\mathcal L$, then

$$
\operatorname{div}(s_1)-\operatorname{div}(s_2)
=
\operatorname{div}(f)
$$

for some rational function $f\in k(C)^\times$.
:::

**Proof.** Since $s_1$ and $s_2$ are rational sections of the same one-dimensional object, their ratio

$$
f=\frac{s_1}{s_2}
$$

is a rational function. Locally, zeros and poles of $s_1$ differ from those of $s_2$ exactly by zeros and poles of $f$. Hence

$$
\operatorname{div}(s_1)-\operatorname{div}(s_2)=\operatorname{div}(f).
$$

---

## 10. Main Correspondence

::: theorem
**Divisor-Line Bundle Correspondence**

For a smooth projective curve $C$, the map

$$
D\longmapsto\mathcal O_C(D)
$$

induces an isomorphism

$$
\operatorname{Div}(C)/\text{principal divisors}
\cong
\operatorname{Pic}(C).
$$
:::

**Proof idea.** We have constructed a line bundle from each divisor. If $D'=D+\operatorname{div}(f)$, multiplication by $f$ identifies

$$
\mathcal O_C(D)\cong\mathcal O_C(D').
$$

So the construction descends to divisor classes.

Conversely, a line bundle plus a rational section gives a divisor, and changing the section changes that divisor only by a principal divisor. These two constructions undo each other.

::: remark
**Student-note summary**

The notes record the conclusion as:

$$
\text{rational equivalence classes of divisors}
\cong
\text{isomorphism classes of line bundles}.
$$

Forget the section; keep the line bundle.
:::

---

## 11. Picard Functor Viewpoint

The lecture ends by upgrading the Picard group to a functor.

::: definition
**Picard Functor**

For a curve $C/k$, define

$$
\operatorname{Pic}_C(S)=
\{\text{line bundles on }C\times_k S\}/\cong.
$$
:::

::: remark
**Why this matters for elliptic curves**

For an elliptic curve $E$, the degree-zero Picard functor $\operatorname{Pic}_E^0$ is represented by an elliptic curve. In fact, $E$ is canonically isomorphic to its own degree-zero Picard variety after choosing the origin.

This is the conceptual source of the group law in later lectures.
:::
