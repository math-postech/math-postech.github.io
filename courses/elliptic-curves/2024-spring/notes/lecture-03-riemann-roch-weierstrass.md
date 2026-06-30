# Lecture 3: Riemann–Roch and Weierstrass Equations

> **Student notes**: pp. 15–24  
> **Prep source**: `lecture3.md`  
> **Theme**: Riemann–Roch explains why a genus-one curve with a point has a cubic equation.

---

## Overview

Lecture 3 completes the first major arc of the course.

Lecture 2 built the dictionary:

$$
\text{divisors modulo rational equivalence}
\longleftrightarrow
\text{line bundles up to isomorphism}.
$$

Lecture 3 uses this dictionary and Riemann–Roch to prove the first structural theorem about elliptic curves:

> A smooth projective genus-one curve with a chosen point can be embedded into $\mathbb P^2$ by three functions $1,x,y$, and the image is a cubic curve in Weierstrass form.

The student notes record the flow:

1. review divisors and sections;
2. compare the two constructions of $\mathcal O(D)$;
3. define differentials by the diagonal;
4. compute $\Omega_{\mathbb P^1}$;
5. state and apply Riemann–Roch;
6. use $L(nO)$ to produce $1,x,y$;
7. derive the cubic relation.

---

## 1. Review: Divisors, Sections, and Effectivity

For a divisor $D$ on a smooth projective curve $C$, define

$$
L(D)=\{f\in k(C):\operatorname{div}(f)+D\ge0\}\cup\{0\}.
$$

This is the space of rational functions whose poles are bounded by $D$.

::: definition
**Dimension notation**

Write

$$
\ell(D)=\dim_k L(D)=\dim_k H^0(C,\mathcal O_C(D)).
$$
:::

::: remark
**How to read $L(D)$**

If $D=nP$, then $L(D)$ consists of rational functions that may have a pole at $P$ of order at most $n$, and no other poles.

So $L(D)$ is a controlled-pole function space.
:::

---

## 2. Two Constructions of $\mathcal O(D)$

The student notes explicitly compare two constructions.

### Method 1: Sheaf from rational functions

Define

$$
\mathcal O(D)(U)=\{f\in k(C):\operatorname{div}(f)|_U+D|_U\ge0\}.
$$

This directly says: a local section is a rational function whose poles are allowed by $D$.

### Method 2: Local gluing

Write

$$
D=\sum m_P(P).
$$

Choose open sets $U_P$ around the points in the support of $D$ and choose rational functions $f_P$ satisfying

$$
\operatorname{div}(f_P)|_{U_P}=m_P(P).
$$

On overlaps, glue trivial line bundles by

$$
\frac{f_Q}{f_P}.
$$

::: proposition
**The two constructions agree**

The sheaf $\mathcal O(D)$ defined by pole conditions is isomorphic to the line bundle obtained by local gluing.
:::

**Proof.** In the gluing construction, a section is a collection of local functions $s_P$ satisfying

$$
s_Q=\frac{f_Q}{f_P}s_P
$$

on overlaps. Equivalently,

$$
\frac{s_Q}{f_Q}=\frac{s_P}{f_P}.
$$

Therefore the local expressions $s_P/f_P$ glue to one rational function $s$. The condition that $s_P$ is regular is exactly the condition that

$$
\operatorname{div}(s)+D\ge0.
$$

Thus the glued line bundle has the same local sections as the pole-condition sheaf.

::: remark
**Idea**

The functions $f_P$ locally realize the prescribed divisor. Dividing by $f_P$ converts “twisted sections” into ordinary rational functions with bounded poles.
:::

---

## 3. Effective Divisors and Sections

::: proposition
**Effective divisors correspond to sections**

An effective divisor $D$ corresponds to a pair

$$
(\mathcal L,s)
$$

where $\mathcal L$ is a line bundle and $s$ is a nonzero global section. The divisor $D$ is the vanishing divisor of $s$.
:::

**Proof.** Given $D\ge0$, take

$$
\mathcal L=\mathcal O(D).
$$

The constant function $1$ lies in $L(D)$ because

$$
\operatorname{div}(1)+D=D\ge0.
$$

Thus $1$ defines a global section of $\mathcal O(D)$ whose zero divisor is $D$ in the line-bundle normalization.

Conversely, if $s$ is a nonzero section of a line bundle, its zeros define an effective divisor. This is local because after trivializing the line bundle, $s$ is an ordinary regular function.

---

## 4. Differentials from the Diagonal

The student notes define differentials geometrically using the diagonal.

Let $C$ be a smooth curve and let

$$
\Delta:C\longrightarrow C\times C
$$

be the diagonal embedding.

Let $\mathcal I$ be the ideal sheaf of $\Delta(C)$ in $C\times C$.

::: definition
**Sheaf of differentials**

The sheaf of differentials is

$$
\Omega_C\cong \mathcal I/\mathcal I^2\big|_{\Delta(C)}.
$$
:::

The expression

$$
f\otimes1-1\otimes f
$$

vanishes on the diagonal, so it is a section of $\mathcal I$. Its class modulo $\mathcal I^2$ is $df$.

::: lemma
**Product rule**

For rational functions $f,g$,

$$
d(fg)=f\,dg+g\,df.
$$
:::

**Proof.** Compute in $\mathcal I/\mathcal I^2$:

$$
fg\otimes1-1\otimes fg
=(f\otimes1)(g\otimes1)-(1\otimes f)(1\otimes g).
$$

Add and subtract $(f\otimes1)(1\otimes g)$:

$$
=(f\otimes1)(g\otimes1-1\otimes g)+(1\otimes g)(f\otimes1-1\otimes f).
$$

Restricting to the diagonal, $f\otimes1$ and $1\otimes f$ both become $f$, and similarly for $g$. Hence

$$
d(fg)=f\,dg+g\,df.
$$

::: remark
**Why quotient by $\mathcal I^2$?**

First-order differences survive in $\mathcal I/\mathcal I^2$. Products of two first-order differences are second-order small and vanish in the quotient. This is why the product rule appears.
:::

---

## 5. Example: $\Omega_{\mathbb P^1}$

Use coordinate $x$ on

$$
\mathbb A^1=\mathbb P^1\setminus\{\infty\}.
$$

Near $\infty$, use coordinate

$$
t=1/x.
$$

Then

$$
dx=d(t^{-1})=-t^{-2}dt.
$$

::: proposition
**Canonical divisor of $\mathbb P^1$**

On $\mathbb P^1$,

$$
\operatorname{div}(dx)=-2(\infty),
$$

and hence

$$
\Omega_{\mathbb P^1}\cong\mathcal O_{\mathbb P^1}(-2).
$$
:::

**Proof.** On the affine chart $\mathbb A^1$, $dx$ has no zero and no pole. Near $\infty$, write $x=t^{-1}$. Then

$$
dx=-t^{-2}dt.
$$

Since $dt$ is a local generator of differentials near $\infty$, the factor $t^{-2}$ says that $dx$ has a pole of order $2$ at $\infty$. Therefore

$$
\operatorname{div}(dx)=-2(\infty).
$$

---

## 6. Riemann–Roch

::: theorem
**Riemann–Roch for Curves**

Let $C$ be a smooth projective curve of genus $g$, and let $K_C$ be a canonical divisor. For every divisor $D$,

$$
\ell(D)-\ell(K_C-D)=\deg D-g+1.
$$
:::

The lecture uses Riemann–Roch as a computational machine.

::: corollary
**Dimension of global differentials**

$$
\ell(K_C)=g.
$$
:::

**Proof.** Put $D=0$. Then

$$
\ell(0)-\ell(K_C)=0-g+1.
$$

Since $C$ is projective and connected, the only regular functions are constants, so

$$
\ell(0)=1.
$$

Thus

$$
1-
\ell(K_C)=1-g,
$$

so

$$
\ell(K_C)=g.
$$

::: corollary
**Degree of the canonical divisor**

$$
\deg K_C=2g-2.
$$
:::

**Proof.** Put $D=K_C$ in Riemann–Roch:

$$
\ell(K_C)-\ell(0)=\deg K_C-g+1.
$$

Using $\ell(K_C)=g$ and $\ell(0)=1$ gives

$$
g-1=\deg K_C-g+1.
$$

Therefore

$$
\deg K_C=2g-2.
$$

::: corollary
**Large degree formula**

If

$$
\deg D>2g-2,
$$

then

$$
\ell(D)=\deg D-g+1.
$$
:::

**Proof.** Since $\deg K_C=2g-2$,

$$
\deg(K_C-D)<0.
$$

A divisor of negative degree has no nonzero global sections, because an effective divisor must have nonnegative degree. Hence

$$
\ell(K_C-D)=0.
$$

Riemann–Roch gives the formula.

---

## 7. Genus-One Consequences

Now let $C$ be a smooth projective curve of genus $1$.

Then

$$
\deg K_C=0,
\qquad
\ell(K_C)=1.
$$

::: proposition
**Positive-degree divisors on genus-one curves**

If $C$ has genus $1$ and $\deg D>0$, then

$$
\ell(D)=\deg D.
$$
:::

**Proof.** Since $g=1$, Riemann–Roch gives

$$
\ell(D)-\ell(K_C-D)=\deg D.
$$

But

$$
\deg(K_C-D)=-\deg D<0,
$$

so

$$
\ell(K_C-D)=0.
$$

Therefore

$$
\ell(D)=\deg D.
$$

::: remark
**This is the engine of the Weierstrass equation**

For a genus-one curve, pole order at one chosen point directly controls the dimension of the function space. This lets us manufacture coordinates.
:::

---

## 8. Choosing the Point at Infinity

::: definition
**Elliptic Curve**

An elliptic curve over $k$ is a pair

$$
(C,O)
$$

where $C$ is a smooth projective curve of genus $1$ and $O\in C(k)$ is a chosen rational point.
:::

The chosen point $O$ will become the identity element for the group law. At this stage, it is the point where we allow poles.

For $n\ge1$, define

$$
L(nO)=\{f\in k(C):\operatorname{div}(f)+n(O)\ge0\}\cup\{0\}.
$$

Equivalently, $L(nO)$ consists of rational functions with no poles except possibly at $O$, and pole order at most $n$.

By the genus-one formula,

$$
\ell(nO)=n.
$$

---

## 9. Constructing $x$ and $y$

::: proposition
**Existence of $x$ and $y$**

There exist functions $x,y\in k(C)$ such that

$$
L(2O)=\langle1,x\rangle,
\qquad
L(3O)=\langle1,x,y\rangle,
$$

where $x$ has pole order exactly $2$ at $O$ and $y$ has pole order exactly $3$ at $O$.
:::

**Proof.** Since $\ell(O)=1$, the space $L(O)$ contains only constants. Thus there is no nonconstant function with a single simple pole at $O$.

Since $\ell(2O)=2$, the space $L(2O)$ has dimension $2$ and contains constants. Choose

$$
x\in L(2O)\setminus L(O).
$$

Then $x$ must have pole order exactly $2$ at $O$.

Similarly, $\ell(3O)=3$. Choose

$$
y\in L(3O)\setminus L(2O).
$$

Then $y$ has pole order exactly $3$ at $O$, and

$$
L(3O)=\langle1,x,y\rangle.
$$

::: remark
**Why pole orders distinguish the basis**

The pole orders of $1,x,y$ at $O$ are respectively $0,2,3$. Since these are different, no nontrivial linear combination can cancel the highest pole unless the corresponding coefficient is zero.
:::

---

## 10. The Cubic Relation

The functions

$$
1,
\quad x,
\quad y,
\quad x^2,
\quad xy,
\quad x^3,
\quad y^2
$$

all lie in $L(6O)$ because their pole orders at $O$ are at most $6$:

| function | pole order at $O$ |
|---|---:|
| $1$ | $0$ |
| $x$ | $2$ |
| $y$ | $3$ |
| $x^2$ | $4$ |
| $xy$ | $5$ |
| $x^3$ | $6$ |
| $y^2$ | $6$ |

But

$$
\ell(6O)=6.
$$

So seven functions lie in a six-dimensional vector space.

::: theorem
**Weierstrass relation**

There is a nontrivial relation of the form

$$
y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$
:::

**Proof.** The seven functions listed above are linearly dependent. Therefore there are coefficients, not all zero, such that

$$
A y^2+B x^3+Cxy+D x^2+Ey+Fx+G=0.
$$

The coefficients of $y^2$ and $x^3$ cannot both vanish, because then all remaining terms have pole order at most $5$, producing a nontrivial relation inside $L(5O)$ among the basis-type functions

$$
1,x,y,x^2,xy,
$$

which is impossible by their distinct pole orders.

After scaling and rearranging, we obtain the Weierstrass equation

$$
y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6.
$$

::: remark
**Student-note point**

The notes explicitly list

$$
L(O),L(2O),L(3O),L(4O),L(5O),L(6O)
$$

and track which monomials appear. This is the concrete reason the equation is cubic rather than arbitrary.
:::

---

## 11. The Map to $\mathbb P^2$

The three sections

$$
1,x,y\in L(3O)
$$

define a morphism

$$
C\longrightarrow\mathbb P^2,
\qquad
P\longmapsto[1:x(P):y(P)]
$$

away from $O$, and the pole-order behavior extends the map to $O$.

::: theorem
**Genus-one curve embeds as a plane cubic**

The map defined by $|3O|$ embeds $C$ into $\mathbb P^2$, and its image is the cubic curve cut out by the Weierstrass relation.
:::

**Proof idea.** The functions $1,x,y$ separate enough points and tangent directions because $\ell(3O)=3$ and the pole orders $0,2,3$ give a complete linear system of degree $3$. The only algebraic relation among the corresponding projective coordinates is the cubic relation found above. Therefore the image is a plane cubic.

::: remark
**What is proved versus what is deferred**

The lecture proves the source of the cubic equation. A fully rigorous proof that $|3O|$ is an embedding requires checking separation of points and tangent vectors. The student notes focus on the dimension count and equation construction, which is the main structural point needed for the course.
:::

---

## 12. Toward the Group Law

The lecture closes by preparing the next topic: the group structure.

For an elliptic curve $(C,O)$, define

$$
C\longrightarrow\operatorname{Pic}^0(C),
\qquad
P\longmapsto[(P)-(O)].
$$

::: theorem
**Genus-one Picard principle**

For a genus-one curve with base point $O$, the map

$$
P\longmapsto[(P)-(O)]
$$

identifies $C$ with $\operatorname{Pic}^0(C)$.
:::

**Proof idea.** Riemann–Roch shows that every degree-zero divisor class has a representative of the form $(P)-(O)$, and that such a representative is unique. This turns addition in $\operatorname{Pic}^0(C)$ into addition of points on $C$.

::: remark
**Geometric picture for next time**

In the plane cubic model, a line meets the cubic in three points. The line function gives a principal divisor relation. This becomes the chord-and-tangent law for adding points.
:::
