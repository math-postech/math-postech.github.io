# Lecture 1: Functors, Schemes, and Projective Space

> **Student notes**: pp. 1–4  
> **Prep source**: `lecture1.md`  
> **Theme**: Geometry is described by maps into a space and functions out of it.

---

## Overview

The first lecture explains why the course starts with categories and functors before writing down elliptic curve equations.

The guiding question is:

> How do we describe a space without relying on a particular set of coordinates?

The answer used in this course is the functor-of-points viewpoint:

- a **point** of a space is a morphism from a test object into it;
- a **function** on a space is a morphism from the space to the affine line;
- a space is often best understood by the functor it represents.

The lecture moves through four stages:

1. category theory versus set theory;
2. representable functors;
3. affine schemes as functors;
4. projective space as a functor of lines or rank-one quotients.

::: remark
**Motivation from the student notes**

The student notes say that the “great mathematician's dream” is to describe an abstract structure explicitly. Representable functors are the mechanism: instead of guessing what an object is internally, we record how every test object maps into it.
:::

---

## 1. Categories Remember Morphisms

::: definition
**Category**

A category $\mathcal C$ consists of:

1. a class of objects;
2. for any two objects $A,B$, a set $\operatorname{Hom}_{\mathcal C}(A,B)$ of morphisms;
3. identity morphisms $\operatorname{id}_A\in\operatorname{Hom}_{\mathcal C}(A,A)$;
4. composition maps

$$
\operatorname{Hom}(A,B)\times\operatorname{Hom}(B,C)
\longrightarrow
\operatorname{Hom}(A,C)
$$

that are associative and compatible with identity morphisms.
:::

The key philosophical difference from set theory is this:

- in set theory, objects are compared by equality;
- in category theory, objects are compared by morphisms, especially isomorphisms.

::: definition
**Isomorphism**

A morphism $f:A\to B$ is an isomorphism if there exists $g:B\to A$ such that

$$
gf=\operatorname{id}_A,
\qquad
fg=\operatorname{id}_B.
$$
:::

::: remark
**Why this matters**

The student notes emphasize that there can be more than one way for two objects to be isomorphic. This is not a defect; it is often the structure we care about.

For example, two vector spaces of the same dimension are isomorphic, but choosing an isomorphism is choosing a basis-level identification. Geometry should not pretend that this choice is canonical when it is not.
:::

---

## 2. Functors and Representability

::: definition
**Functor**

A covariant functor $F:\mathcal C\to\mathcal D$ sends:

- each object $A$ of $\mathcal C$ to an object $F(A)$ of $\mathcal D$;
- each morphism $f:A\to B$ to a morphism $F(f):F(A)\to F(B)$;

such that identities and compositions are preserved.

A contravariant functor reverses arrows.
:::

For an object $A\in\mathcal C$, define

$$
h_A(X)=\operatorname{Hom}_{\mathcal C}(X,A).
$$

This is a functor

$$
h_A:\mathcal C^{op}\to\mathrm{Set}.
$$

::: definition
**Representable Functor**

A functor $F:\mathcal C^{op}\to\mathrm{Set}$ is representable if there exists an object $A\in\mathcal C$ and a natural isomorphism

$$
F(X)\cong\operatorname{Hom}_{\mathcal C}(X,A)
$$

for every test object $X$.
:::

::: theorem
**Yoneda Principle, Informal Form**

An object $A$ is determined by the functor

$$
X\longmapsto\operatorname{Hom}(X,A).
$$
:::

**Proof idea.** If two objects $A$ and $B$ have naturally isomorphic functors of points, then the identity element of $\operatorname{Hom}(A,A)$ corresponds to a map $A\to B$, and the identity element of $\operatorname{Hom}(B,B)$ corresponds to a map $B\to A$. Naturality forces the two composites to be identities. Hence $A\cong B$.

::: remark
**How to use this in geometry**

Instead of asking “what are the elements of $A$?”, ask:

$$
\text{For every test object }X,\text{ what are the maps }X\to A?
$$

This is the clean language for schemes, projective space, Picard functors, and elliptic curves.
:::

---

## 3. Affine Schemes as Functors

The student notes ask two basic questions.

1. What is a function on a space?
2. What is a point of a space?

The answer for affine schemes is deliberately algebraic.

::: definition
**Affine Scheme as a Functor of Points**

For a commutative ring $A$, the affine scheme $\operatorname{Spec} A$ has functor of points

$$
\operatorname{Spec} A(R)=\operatorname{Hom}_{\mathrm{Ring}}(A,R).
$$
:::

This convention is contravariant: a map of rings $A\to R$ corresponds to a map of spaces

$$
\operatorname{Spec} R\to\operatorname{Spec} A.
$$

::: proposition
**Functions on $\operatorname{Spec} A$ are elements of $A$**

A morphism

$$
\operatorname{Spec} A\to\mathbb A^1
$$

is the same as an element of $A$.
:::

**Proof.** Since

$$
\mathbb A^1=\operatorname{Spec}\mathbb Z[t],
$$

a morphism $\operatorname{Spec} A\to\mathbb A^1$ is the same as a ring map

$$
\mathbb Z[t]\to A.
$$

Such a ring map is determined by the image of $t$, and the image can be any element of $A$. Hence functions on $\operatorname{Spec} A$ are elements of $A$.

::: remark
**This is the student-note slogan**

A function on a space is a morphism to an affine line. For $\operatorname{Spec} A$, this recovers exactly the elements of the ring $A$.
:::

---

## 4. Points of an Affine Scheme

::: proposition
**Field-valued points**

A $k$-valued point of $\operatorname{Spec} A$ is a ring homomorphism

$$
A\to k.
$$
:::

**Proof.** A $k$-valued point is a morphism

$$
\operatorname{Spec} k\to\operatorname{Spec} A.
$$

By contravariance of $\operatorname{Spec}$, this is equivalent to a ring map

$$
A\to k.
$$

::: remark
**Prime ideals appear automatically**

If $A\to k$ is a map to a field, its kernel is a prime ideal. The student notes record this as the bridge between functorial points and the usual topological set of $\operatorname{Spec} A$.
:::

---

## 5. Affine Space

::: proposition
**Affine $n$-space represents $R\mapsto R^n$**

Let

$$
\mathbb A^n=\operatorname{Spec}\mathbb Z[x_1,\ldots,x_n].
$$

Then for every ring $R$,

$$
\mathbb A^n(R)=R^n.
$$
:::

**Proof.** By definition,

$$
\mathbb A^n(R)=\operatorname{Hom}_{\mathrm{Ring}}(\mathbb Z[x_1,
\ldots,x_n],R).
$$

A ring map out of the polynomial ring is determined by the images of the variables $x_1,
\ldots,x_n$. These images can be chosen arbitrarily in $R$. Therefore the set of such maps is $R^n$.

::: example
For $n=1$,

$$
\mathbb A^1(R)=R.
$$

For $n=2$,

$$
\mathbb A^2(R)=R^2.
$$
:::

---

## 6. Zariski Topology from Polynomial Equations

The student notes describe the topology on $\operatorname{Spec} R$ after first describing $\mathbb A^n$.

In affine space, closed sets are cut out by polynomial equations. For example, a closed subset of $\mathbb A^n$ over a field is given by equations

$$
f_1=
\cdots=f_r=0.
$$

::: definition
**Zariski Topology, Operational Version**

The Zariski topology is the topology whose closed sets are solution sets of polynomial equations.
:::

::: remark
**Why this topology is coarse**

The notes point out that the topology is the weakest topology compatible with polynomial functions. This is why it is much coarser than the usual topology over $\mathbb C$.
:::

---

## 7. Projective Space

The lecture then asks:

> What is $\mathbb P^1$?

Over a field, one says that $\mathbb P^1(k)$ is the set of lines in $k^2$.

But over a general ring, the phrase “line in $R^2$” must mean a rank-one locally free direct summand or quotient. Otherwise the definition behaves badly.

::: definition
**Projective Space as a Functor**

For a ring $R$, define $\mathbb P^n(R)$ to be the set of isomorphism classes of rank-one locally free quotients

$$
R^{n+1}\twoheadrightarrow L.
$$
:::

Equivalently, when the quotient is split, we may write an exact sequence

$$
0\longrightarrow K\longrightarrow R^{n+1}\longrightarrow L\longrightarrow0
$$

where $L$ is locally free of rank $1$.

::: proposition
**Agreement with the classical definition over fields**

If $k$ is a field, then $\mathbb P^n(k)$ is the set of one-dimensional subspaces of $k^{n+1}$, equivalently the set of rank-one quotients of $k^{n+1}$.
:::

**Proof.** Over a field, every exact sequence of vector spaces splits. A rank-one quotient

$$
k^{n+1}\twoheadrightarrow L
$$

has kernel a hyperplane. Dually, choosing a one-dimensional quotient is equivalent to choosing a line in the dual vector space. This is canonically the usual projective geometry after choosing the standard duality convention.

::: remark
**Why the quotient convention is useful**

The quotient convention makes $\mathbb P^n$ functorial over arbitrary rings. This is why it is the right definition for schemes, even though over fields one often thinks in terms of lines.
:::

---

## 8. What Carries Forward

The lecture ends by pointing toward the next prerequisites:

- line bundles;
- categorical limits and colimits;
- representable functors.

::: remark
**Course-level role of Lecture 1**

Lecture 1 gives the language for later statements such as:

$$
\operatorname{Pic}_C(S)=\{\text{line bundles on }C\times S\}/\cong.
$$

This is not just abstraction. It is the language in which the Picard group, elliptic curve group law, and duality become natural.
:::
