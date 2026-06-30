# Lecture 1: Functors, Schemes, and Projective Space

> **Student notes**: pp. 1–4  
> **Prep source**: `lecture1.md`  
> **Theme**: Use functors to define geometric spaces by what their points and functions do.

---

## Overview

The first lecture sets the language for the course. The point is not to start elliptic curves from plane cubic equations, but to first clarify the geometric grammar:

1. categories remember morphisms, not just elements;
2. spaces are understood by their functor of points;
3. affine schemes and projective spaces can be described by functors;
4. line bundles and representability will become the language of Picard groups and elliptic curves.

---

## 1. Categories vs Sets

A category $\mathcal C$ consists of:

- objects $A,B,C,\ldots$;
- morphism sets $\operatorname{Hom}_{\mathcal C}(A,B)$;
- identity morphisms $\operatorname{id}_A$;
- associative composition

$$
\operatorname{Hom}(A,B)\times \operatorname{Hom}(B,C)
\longrightarrow \operatorname{Hom}(A,C).
$$

In set theory, equality is rigid: either $X=Y$ or not. In category theory, the natural comparison is not equality but isomorphism.

A morphism $f:A\to B$ is an isomorphism if there exists $g:B\to A$ such that

$$
gf=\operatorname{id}_A,\qquad fg=\operatorname{id}_B.
$$

The student notes emphasize the key warning: there can be more than one meaningful way for two objects to be isomorphic.

---

## 2. Representable Functors

A functor is a rule that sends objects and morphisms in one category to objects and morphisms in another category.

For an object $A\in\mathcal C$, define the functor

$$
h_A(X)=\operatorname{Hom}_{\mathcal C}(X,A).
$$

This is the functor represented by $A$.

A functor $F:\mathcal C^{op}\to\mathrm{Set}$ is representable if there exists an object $A$ such that

$$
F(X)\cong \operatorname{Hom}_{\mathcal C}(X,A)
$$

naturally in $X$.

Interpretation: to describe a geometric object $A$, describe the functor of all maps into $A$.

---

## 3. Affine Schemes as Functors

The student notes ask: what is a space? A function on a space should be a morphism to the affine line.

For a commutative ring $R$, the affine scheme $\operatorname{Spec} R$ is the space whose functions are elements of $R$.

A point of $\operatorname{Spec} R$ with values in a field $k$ corresponds to a morphism

$$
\operatorname{Spec} k\longrightarrow \operatorname{Spec} R,
$$

which is equivalently a ring map

$$
R\longrightarrow k.
$$

For example,

$$
\mathbb A^n=\operatorname{Spec}\mathbb Z[x_1,\ldots,x_n]
$$

has functor of points

$$
\mathbb A^n(R)=R^n.
$$

Thus affine $n$-space is the functor

$$
R\longmapsto R^n.
$$

---

## 4. Zariski Topology from the Functorial Viewpoint

The handwritten notes describe the topology on $\operatorname{Spec} R$ by requiring maps into affine space to be continuous.

For affine space, closed sets are cut out by polynomial equations. The Zariski topology is the weakest topology making polynomial functions continuous.

Example:

$$
\mathbb A^n=\operatorname{Spec}\mathbb Z[x_1,\ldots,x_n].
$$

A point $\operatorname{Spec} k\to\mathbb A^n$ is a choice of $n$ elements of $k$.

---

## 5. Projective Space as a Functor

The lecture then asks: what is $\mathbb P^1$?

Over a field, one may say that $\mathbb P^1(k)$ is the set of lines in $k^2$. Over a general ring, the correct formulation is subtler.

A good functorial description is:

$$
\mathbb P^n(R)=
\left\{
\text{rank-one quotients } R^{n+1}\twoheadrightarrow L
\right\}/\cong.
$$

Equivalently, in favorable cases, one can think of exact sequences

$$
0\longrightarrow K\longrightarrow R^{n+1}\longrightarrow L\longrightarrow 0
$$

where $L$ is locally free of rank $1$.

For $\mathbb P^1$, this recovers the idea of lines in $R^2$ without relying on coordinates that fail over general rings.

---

## 6. What Carries Forward

This lecture prepares three ideas used repeatedly later:

1. **Functor of points**: elliptic curves are group-valued functors.
2. **Representability**: Picard functors and moduli questions ask whether a functor is represented by a geometric object.
3. **Line bundles**: projective space itself is already controlled by rank-one locally free modules.

The next lecture uses these ideas to define divisors, line bundles, and the Picard group of a curve.
