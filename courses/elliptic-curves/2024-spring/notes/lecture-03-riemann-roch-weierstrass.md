# Lecture 3: Riemann–Roch and Weierstrass Equations

> **Student notes**: pp. 15–24  
> **Prep source**: `lecture3.md`  
> **Theme**: Riemann–Roch produces enough functions to write a genus-one curve as a cubic.

---

## Overview

Lecture 3 has two jobs.

First, it completes the divisor-line bundle dictionary by discussing differentials, canonical divisors, and Riemann–Roch.

Second, it applies Riemann–Roch to a genus-one curve with a marked point. This explains why an elliptic curve has a Weierstrass equation and why the functions $1,x,y$ appear naturally.

---

## 1. Review: Divisors and Sections

For a divisor $D$ on a smooth projective curve $C$,

$$
L(D)=\{f\in k(C):\operatorname{div}(f)+D\ge 0\}\cup\{0\}.
$$

This is the vector space of rational functions whose poles are bounded by $D$.

The corresponding line bundle is $\mathcal O_C(D)$, and

$$
\ell(D)=\dim_k H^0(C,\mathcal O_C(D)).
$$

Effective divisors correspond to pairs $(\mathcal L,s)$ where $\mathcal L$ is a line bundle and $s$ is a nonzero section. The divisor is the vanishing divisor of $s$.

---

## 2. Differentials

Let $C$ be a smooth projective curve. Consider the diagonal embedding

$$
\Delta:C\longrightarrow C\times C.
$$

Let $\mathcal I$ be the ideal sheaf of the diagonal. The sheaf of differentials can be described as

$$
\Omega_C\cong \mathcal I/\mathcal I^2\big|_{\Delta(C)}.
$$

The expression

$$
f\otimes 1-1\otimes f
$$

is the geometric source of $df$.

The product rule follows from this construction:

$$
d(fg)=f\,dg+g\,df.
$$

---

## 3. Example: Differentials on $\mathbb P^1$

Use the coordinate $x$ on $\mathbb A^1\subset\mathbb P^1$ and the coordinate $t=1/x$ near $\infty$.

Then

$$
dx=d(1/t)=-t^{-2}dt.
$$

Thus $dx$ has a pole of order $2$ at $\infty$ and no finite zeros or poles. Therefore

$$
\operatorname{div}(dx)=-2(\infty),
$$

so

$$
\Omega_{\mathbb P^1}\cong\mathcal O_{\mathbb P^1}(-2).
$$

This agrees with the canonical divisor degree formula for genus $0$:

$$
\deg K_{\mathbb P^1}=2g-2=-2.
$$

---

## 4. Riemann–Roch

Let $C$ be a smooth projective curve of genus $g$, and let $K_C$ be a canonical divisor. Riemann–Roch says

$$
\ell(D)-\ell(K_C-D)=\deg D-g+1.
$$

Important consequences:

1. Taking $D=0$ gives

$$
\ell(K_C)=g.
$$

2. Taking $D=K_C$ gives

$$
\deg K_C=2g-2.
$$

3. If $\deg D>2g-2$, then $\deg(K_C-D)<0$, so

$$
\ell(K_C-D)=0,
$$

and therefore

$$
\ell(D)=\deg D-g+1.
$$

---

## 5. Genus-One Consequences

Now let $C$ be a smooth projective curve of genus $1$.

Then

$$
\deg K_C=0,
\qquad
\ell(K_C)=1.
$$

So the global differentials form a one-dimensional vector space.

If $D$ has positive degree, then Riemann–Roch gives

$$
\ell(D)=\deg D.
$$

This numerical fact is the engine behind the Weierstrass equation.

---

## 6. Choosing a Base Point

An elliptic curve is a pair $(C,O)$ where:

- $C$ is a smooth projective curve of genus $1$;
- $O\in C(k)$ is a chosen rational point.

The point $O$ will become the identity of the group law.

Apply Riemann–Roch to multiples of $O$:

$$
L(nO)=\{f\in k(C):\operatorname{poles}(f)\le nO\}\cup\{0\}.
$$

Since $g=1$, for $n>0$,

$$
\ell(nO)=n.
$$

Therefore:

- $L(O)$ has basis $1$;
- $L(2O)$ has basis $1,x$ for some $x$ with pole order $2$ at $O$;
- $L(3O)$ has basis $1,x,y$ for some $y$ with pole order $3$ at $O$.

---

## 7. The Cubic Relation

The space $L(6O)$ has dimension $6$.

But the seven functions

$$
1,\ x,\ y,\ x^2,\ xy,\ x^3,\ y^2
$$

all lie in $L(6O)$.

Hence they are linearly dependent. After rearranging and normalizing, we obtain a Weierstrass equation

$$
y^2+a_1xy+a_3y
=
x^3+a_2x^2+a_4x+a_6.
$$

This explains why elliptic curves naturally appear as plane cubics.

---

## 8. Embedding into $\mathbb P^2$

The linear system $\{1,x,y\}\subset L(3O)$ defines a map

$$
C\longrightarrow \mathbb P^2,
\qquad
P\longmapsto [1:x(P):y(P)]
$$

away from the point $O$, with the projective extension sending $O$ to the point at infinity.

The image is the cubic curve cut out by the Weierstrass equation above.

Thus Riemann–Roch does not merely say that equations exist; it explains which pole orders force the specific cubic equation.

---

## 9. Toward the Group Law

The local prep notes state the next objective: explain why an elliptic curve has a group structure.

The divisor-class map is

$$
P\longmapsto [(P)-(O)]\in\operatorname{Pic}^0(C).
$$

For genus one, this identifies $C$ with $\operatorname{Pic}^0(C)$.

The chord-and-tangent group law is the plane cubic shadow of this divisor-class addition. A line meets a cubic in three points, and the corresponding line function gives a principal divisor relation.

This is the bridge to the next lecture block: elliptic curves are not just cubic curves; they are genus-one curves whose Picard group gives a natural addition law.
