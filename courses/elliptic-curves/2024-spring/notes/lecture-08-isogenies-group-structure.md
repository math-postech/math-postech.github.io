# Lecture 8: Isogenies and Group Structure

> **Student notes**: begins around global PDF p. 65  
> **Date in notes**: Mar 14, 2024  
> **Theme**: Isogenies are group homomorphisms; determinant line bundles give a clean proof mechanism.

---

## Overview

This lecture reviews the theorem of the cube and applies it to isogenies of abelian varieties. The main result is:

> If $\phi:(E_1,O_1)\to(E_2,O_2)$ is an isogeny of elliptic curves, then $\phi$ is a group homomorphism.

The proof is not by chasing chord-and-tangent pictures. It uses line bundles and the behavior of pullback under addition.

---

## 1. Review: The Cube Relation

For a line bundle $\mathcal L$ on an abelian variety, the theorem of the cube gives relations of the form

$$
(f+g+h)^*\mathcal L\otimes f^*\mathcal L\otimes g^*\mathcal L\otimes h^*\mathcal L
\cong
(f+g)^*\mathcal L\otimes(f+h)^*\mathcal L\otimes(g+h)^*\mathcal L.
$$

This identity is the line-bundle form of the statement that addition behaves quadratically.

A previous consequence was

$$
\deg[n]=n^2.
$$

---

## 2. Determinant of a Vector Bundle

For a rank-$n$ vector bundle $\mathcal E$ on a variety $X$, its determinant is the line bundle

$$
\det\mathcal E=\bigwedge^n\mathcal E.
$$

Locally, if transition functions of $\mathcal E$ are matrices $g_{ij}$, then the transition functions of $\det\mathcal E$ are

$$
\det(g_{ij}).
$$

This reduces a vector-bundle problem to a line-bundle problem.

---

## 3. Pushforward Along an Isogeny

Let

$$
\phi:E_1\longrightarrow E_2
$$

be an isogeny. Given a line bundle $\mathcal L$ on $E_1$, the pushforward

$$
\phi_*\mathcal L
$$

is a vector bundle on $E_2$ of rank $\deg\phi$.

Taking determinant gives a line bundle on $E_2$:

$$
\det(\phi_*\mathcal L).
$$

This is the object used to compare translation and addition on $E_2$.

---

## 4. Additivity of the Isogeny

The goal is to prove

$$
\phi(P+Q)=\phi(P)+\phi(Q).
$$

The notes reduce this to a line-bundle identity. The point $P$ corresponds to

$$
\mathcal L((P)-(O)).
$$

The pullback/pushforward behavior of these line bundles under $\phi$ translates the equality of points into an equality of divisor classes.

The theorem of the cube is then applied to the relevant combination of translations:

$$
\psi+\phi,
\qquad
-\psi,
\qquad
-\phi.
$$

The resulting identity gives the desired additivity.

---

## 5. Conceptual Point

The proof illustrates a recurring principle:

> To prove an equality of points on an elliptic curve, translate it into an equality of line bundles in $\operatorname{Pic}^0$.

This is the same philosophy behind the group law, isogeny theory, and later the Weil pairing.
