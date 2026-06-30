# Lecture 8: Isogenies and Group Structure

> **Student notes**: begins around global PDF p. 65  
> **Date in notes**: Mar 14, 2024  
> **Theme**: Determinant line bundles and the theorem of the cube give a structural proof that isogenies respect addition.

---

## Overview

The earlier Picard proof already showed that an origin-preserving nonconstant map of elliptic curves is a group homomorphism. This lecture develops a more flexible line-bundle method, useful later for dual isogenies and Weil pairings.

The pattern is:

$$
\text{point equality}
\quad\Longleftrightarrow\quad
\text{degree-zero line-bundle equality}.
$$

::: remark
**Student-note emphasis**

The notes introduce determinant line bundles here because pushforward of a line bundle under an isogeny is usually a vector bundle, not a line bundle. Taking determinant returns to the Picard group.
:::

---

## 1. Reminder: Cube Relation

::: theorem
For maps $f,g,h:X\to E$ and a line bundle $\mathcal L$ on $E$,

$$
(f+g+h)^*\mathcal L
\otimes f^*\mathcal L
\otimes g^*\mathcal L
\otimes h^*\mathcal L
\cong
(f+g)^*\mathcal L
\otimes(f+h)^*\mathcal L
\otimes(g+h)^*\mathcal L.
$$
:::

::: remark
This identity is repeatedly used by choosing $f,g,h$ to be maps whose sum encodes a desired group-law equality.
:::

---

## 2. Determinant of a Vector Bundle

::: definition
If $\mathcal E$ is a rank-$r$ vector bundle on $X$, its determinant is

$$
\det\mathcal E=\bigwedge^r\mathcal E.
$$
:::

::: lemma
If $\mathcal E$ has transition matrices $g_{ij}$, then $\det\mathcal E$ has transition functions $\det(g_{ij})$.
:::

**Proof.** On overlaps, the top exterior power of a linear map is multiplication by its determinant. Applying this to each transition matrix gives the transition functions for the determinant line bundle. $\square$

::: remark
**Why determinants appear**

Line bundles live in $\operatorname{Pic}$. Pushforwards along finite maps naturally give higher-rank vector bundles. The determinant functor converts these back into line bundles while retaining degree information.
:::

---

## 3. Pushforward Along an Isogeny

Let

$$
\phi:E_1\to E_2
$$

be an isogeny of degree $d$.

::: proposition
For a line bundle $\mathcal L$ on $E_1$, the sheaf $\phi_*\mathcal L$ is a rank-$d$ vector bundle on $E_2$.
:::

**Proof idea.** Since $\phi$ is finite flat in the separable elliptic-curve setting, the pushforward of a locally free rank-one sheaf is locally free of rank equal to the degree of the finite map. Fiberwise, the rank counts the length of a fiber. $\square$

Thus

$$
\det(\phi_*\mathcal L)
$$

is a line bundle on $E_2$.

::: definition
The determinant norm of $\mathcal L$ along $\phi$ is

$$
N_\phi(\mathcal L)=\det(\phi_*\mathcal L).
$$
:::

---

## 4. Translation and Picard Classes

::: lemma
For $P\in E$, translation by $P$ acts on degree-zero line bundles by

$$
t_P^*\mathcal O_E((Q)-(O))
\cong
\mathcal O_E((Q-P)-(-P)).
$$
:::

**Proof.** Pullback of a divisor by translation sends a point $Q$ to the unique point $R$ with $R+P=Q$, namely $Q-P$. It sends $O$ to $-P$. Applying this to the divisor $(Q)-(O)$ gives the displayed formula. $\square$

::: proposition
The map

$$
P\mapsto t_P^*\mathcal L\otimes\mathcal L^{-1}
$$

defines a morphism from $E$ to $\operatorname{Pic}^0(E)$.
:::

**Explanation.** Translation varies algebraically with $P$, and the degree does not change under pullback by automorphism. Tensoring by $\mathcal L^{-1}$ normalizes the class to degree zero.

---

## 5. Additivity of Isogenies via Line Bundles

::: theorem
An isogeny $\phi:E_1\to E_2$ preserving origins satisfies

$$
\phi(P+Q)=\phi(P)+\phi(Q)
$$

for all $P,Q\in E_1$.
:::

**Proof.** Consider the defect map

$$
\delta(P,Q)=\phi(P+Q)-\phi(P)-\phi(Q).
$$

We must prove $\delta=O_2$. Translate this point statement into $\operatorname{Pic}^0(E_2)$:

$$
\delta(P,Q)=O_2
\quad\Longleftrightarrow\quad
\mathcal O_{E_2}((\delta(P,Q))-(O_2))\cong\mathcal O_{E_2}.
$$

Apply the cube relation to the maps $\phi\circ m$, $-\phi\circ p_1$, and $-\phi\circ p_2$ on $E_1\times E_1$, where $m(P,Q)=P+Q$. The restrictions to the coordinate axes are trivial because $\phi(O_1)=O_2$. The cube theorem then forces the associated degree-zero line bundle for the defect to be trivial.

By the identification $E_2\cong\operatorname{Pic}^0(E_2)$, the defect point is $O_2$. Therefore $\phi(P+Q)=\phi(P)+\phi(Q)$. $\square$

::: remark
**Idea**

The proof does not compute coordinates. It proves that the “failure of additivity” has trivial Picard class, and on an elliptic curve trivial Picard class means the point is the identity.
:::

---

## 6. Why This Prepares Dual Isogenies

The determinant norm $N_\phi$ and pullback $\phi^*$ are adjoint-looking operations on Picard groups. This is the line-bundle origin of the dual isogeny

$$
\widehat\phi:E_2\to E_1.
$$

::: tip
**Lecture takeaway**

The determinant construction is a machine:

$$
\text{finite map}+\text{line bundle}
\longrightarrow
\text{Picard class}
\longrightarrow
\text{point on an elliptic curve}.
$$

This machine produces dual isogenies and later controls pairings on torsion.
:::
