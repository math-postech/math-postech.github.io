# Lecture 12: The Hom Injection and the Tate Functor

> **Student notes**: global PDF pp. 110–118  
> **Theme**: The Tate-module functor is faithful: a homomorphism of elliptic curves is detected by its action on Tate modules.

---

## Overview

The main theorem is the injectivity of

$$
\operatorname{Hom}(E_1,E_2)\otimes\mathbb Z_\ell
\longrightarrow
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2).
$$

The proof recorded in the student notes has a concrete mechanism:

1. if a map kills $\ell^m$-torsion, it factors through $[\ell^m]$;
2. if it kills all Tate-level data, it is divisible by all powers of $\ell$;
3. finite generation of Hom groups forces such an element to be zero.

---

## 1. The Natural Map

::: proposition
Every homomorphism $\phi:E_1\to E_2$ induces a $\mathbb Z_\ell$-linear map

$$
T_\ell\phi:T_\ell E_1\to T_\ell E_2.
$$
:::

**Proof.** For $P\in E_1[\ell^n]$,

$$
[\ell^n]\phi(P)=\phi([\ell^n]P)=0.
$$

Thus $\phi(P)\in E_2[\ell^n]$. Compatibility with the transition maps $[\ell]$ gives a map on inverse limits. $\square$

This defines

$$
\operatorname{Hom}(E_1,E_2)\to
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2).
$$

Tensoring with $\mathbb Z_\ell$ gives the stated map.

---

## 2. Factorization Through Multiplication

::: lemma
If a homomorphism

$$
\phi:E_1\to E_2
$$

kills $E_1[\ell^m]$, then there exists a homomorphism $\lambda:E_1\to E_2$ such that

$$
\phi=\lambda\circ[\ell^m].
$$
:::

**Proof.** The isogeny $[\ell^m]:E_1\to E_1$ has kernel $E_1[\ell^m]$. If $\phi$ kills this kernel, then $\phi$ is constant on the fibers of $[\ell^m]$. Therefore $\phi$ descends to the quotient

$$
E_1/E_1[\ell^m].
$$

But this quotient is canonically the target of $[\ell^m]$, again isomorphic to $E_1$. Hence there is a map $\lambda:E_1\to E_2$ with $\phi=\lambda\circ[\ell^m]$. $\square$

::: remark
**Student-note idea**

This is the algebraic version of “a function constant on fibers factors through the quotient.”
:::

---

## 3. Injectivity Before Tensoring

::: theorem
The map

$$
\operatorname{Hom}(E_1,E_2)\to
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2)
$$

is injective.
:::

**Proof.** Suppose $T_\ell\phi=0$. Then for every $m$, $\phi$ kills $E_1[\ell^m]$. By the factorization lemma,

$$
\phi=\lambda_m\circ[\ell^m]
$$

for every $m$. Thus $\phi$ is divisible by $\ell^m$ inside $\operatorname{Hom}(E_1,E_2)$ for every $m$.

The group $\operatorname{Hom}(E_1,E_2)$ is a finitely generated torsion-free abelian group. In such a group, the only element divisible by all powers of $\ell$ is zero. Hence $\phi=0$. $\square$

::: lemma
If $M$ is a finitely generated free abelian group, then

$$
\bigcap_{m\ge0}\ell^m M=\{0\}.
$$
:::

**Proof.** Choose a $\mathbb Z$-basis. If a nonzero vector has coordinates with greatest common divisor $d$, it cannot be divisible by $\ell^m$ for $m>v_\ell(d)$. $\square$

---

## 4. Injectivity After Tensoring

::: theorem
The scalar-extended map

$$
\operatorname{Hom}(E_1,E_2)\otimes\mathbb Z_\ell
\hookrightarrow
\operatorname{Hom}_{\mathbb Z_\ell}(T_\ell E_1,T_\ell E_2)
$$

is injective.
:::

**Proof.** Let

$$
x\in\operatorname{Hom}(E_1,E_2)\otimes\mathbb Z_\ell
$$

map to zero. Choose a $\mathbb Z$-basis $\psi_1,\ldots,\psi_r$ of the finitely generated group $\operatorname{Hom}(E_1,E_2)$. Write

$$
x=\sum_i a_i\psi_i,\qquad a_i\in\mathbb Z_\ell.
$$

Modulo $\ell^m$, the vanishing of $T_\ell x$ implies that the corresponding integral combination acts trivially on $E_1[\ell^m]$. By the factorization lemma, that combination is divisible by $\ell^m$ in the Hom group. In coordinates, every coefficient is divisible by $\ell^m$.

This holds for every $m$, so every $a_i=0$ in $\mathbb Z_\ell$. Hence $x=0$. $\square$

::: attention
This proves faithfulness, not fullness. Not every $\mathbb Z_\ell$-linear map between Tate modules comes from an elliptic-curve homomorphism.
:::

---

## 5. Why Surjectivity Is Harder

The student notes flag the missing condition: maps on Tate modules must respect additional structures.

At minimum, the Weil pairing imposes a symplectic constraint:

$$
e_\ell(T_\ell\phi x,y)=e_\ell(x,T_\ell\widehat\phi y).
$$

Over finite fields, the full Tate theorem says one must also impose Galois compatibility.

::: theorem
**Tate philosophy**

Arithmetic homomorphisms of elliptic curves should be recovered from Galois-compatible homomorphisms of Tate modules.
:::

::: tip
**Lecture takeaway**

The injection lets us study endomorphisms as matrices:

$$
\operatorname{End}(E)\otimes\mathbb Z_\ell
\hookrightarrow
M_2(\mathbb Z_\ell).
$$

The next step is to read trace and determinant from these matrices.
:::
