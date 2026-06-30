# Lecture 13: Trace, Determinant, Hasse Bound, and Supersingular Behavior

> **Student notes**: global PDF pp. 117–130  
> **Theme**: Tate modules convert endomorphisms into $2\times2$ linear operators whose trace and determinant recover the arithmetic of elliptic curves.

---

## Overview

This lecture explains the payoff of the Tate-module construction.

For $\phi\in\operatorname{End}(E)$ and $\ell\ne\operatorname{char}k$, the action of $\phi$ on $T_\ell E$ has:

$$
\operatorname{Tr}(T_\ell\phi)=\phi+\widehat\phi,
$$

and

$$
\det(T_\ell\phi)=\deg\phi=\phi\widehat\phi.
$$

This gives the characteristic polynomial

$$
T^2-\operatorname{Tr}(\phi)T+\deg\phi.
$$

For Frobenius, this becomes the source of point-counting and the Hasse bound.

---

## 1. Trace and Determinant from Dual Isogeny

Recall the dual isogeny $\widehat\phi$ satisfies

$$
\widehat\phi\circ\phi=[\deg\phi].
$$

The notes review two identities:

$$
\phi+\widehat\phi=[\operatorname{integer}],
$$

and

$$
\phi\widehat\phi=[\deg\phi].
$$

On the Tate module, $T_\ell\phi$ is a $2\times2$ matrix. Its determinant is characterized by the induced action on the top exterior power:

$$
\bigwedge^2 T_\ell E.
$$

Compatibility with the Weil pairing gives

$$
\det(T_\ell\phi)=\deg\phi.
$$

The trace is the integer represented by

$$
\phi+\widehat\phi.
$$

Thus

$$
\operatorname{Tr}(T_\ell\phi)=\phi+\widehat\phi.
$$

---

## 2. Characteristic Polynomial

The characteristic polynomial of $T_\ell\phi$ is

$$
P_\phi(T)=T^2-(\phi+\widehat\phi)T+\phi\widehat\phi.
$$

Since

$$
\phi\widehat\phi=\deg\phi,
$$

we write

$$
P_\phi(T)=T^2-\operatorname{Tr}(\phi)T+\deg\phi.
$$

The notes then prove the discriminant is nonpositive:

$$
\Delta=\operatorname{Tr}(\phi)^2-4\deg\phi\le0.
$$

---

## 3. Proof of the Discriminant Inequality

Use the positive definite pairing on endomorphisms:

$$
\langle \alpha,\beta\rangle=\deg(\alpha+\beta)-\deg\alpha-\deg\beta.
$$

The Cauchy inequality gives

$$
\langle 1,\phi\rangle^2
\le
\langle 1,1\rangle\langle \phi,\phi\rangle.
$$

But the left side is essentially $\operatorname{Tr}(\phi)^2$, and the right side is $4\deg\phi$. Hence

$$
\operatorname{Tr}(\phi)^2\le4\deg\phi.
$$

So

$$
\Delta\le0.
$$

This means the eigenvalues of $T_\ell\phi$ are either real equal or complex conjugates.

---

## 4. Consequence: Absolute Values of Eigenvalues

Let $\alpha,\beta$ be the complex roots of

$$
T^2-\operatorname{Tr}(\phi)T+\deg\phi.
$$

Then

$$
\alpha\beta=\deg\phi.
$$

Because the discriminant is nonpositive, the roots have the same complex absolute value. Therefore

$$
|\alpha|=|\beta|=\sqrt{\deg\phi}.
$$

The notes state this as an immediate observation:

> eigenvalues of $\phi$ have the same complex absolute value equal to $\sqrt{\deg\phi}$.

---

## 5. Frobenius and the Hasse Bound

Now take

$$
\phi=\operatorname{Frob}_q.
$$

Then

$$
\deg\operatorname{Frob}_q=q.
$$

Let

$$
a_q=\operatorname{Tr}(\operatorname{Frob}_q).
$$

The characteristic polynomial is

$$
T^2-a_qT+q.
$$

The point-count formula is

$$
\#E(\mathbb F_q)=q+1-a_q.
$$

The trace inequality gives

$$
|a_q|\le2\sqrt q.
$$

Therefore

$$
\left|\#E(\mathbb F_q)-(q+1)\right|\le2\sqrt q.
$$

This is the Hasse bound.

---

## 6. Why Frobenius Eigenvalues Count Points Over All Extensions

Let $\alpha,\beta$ be the eigenvalues of Frobenius. Then the eigenvalues of $\operatorname{Frob}_q^n$ are

$$
\alpha^n,\beta^n.
$$

So

$$
\#E(\mathbb F_{q^n})
=q^n+1-\alpha^n-\beta^n.
$$

This is why the student notes say the zeta function captures the eigenvalues of Frobenius.

The zeta function packages these counts:

$$
Z(E/\mathbb F_q,t)
=\exp\left(\sum_{n\ge1}\#E(\mathbb F_{q^n})\frac{t^n}{n}\right).
$$

---

## 7. The Case $\ell=\operatorname{char}k$

The previous arguments assumed $\ell\ne\operatorname{char}k$.

The notes then ask what happens for $\ell=p=\operatorname{char}k$.

This is where ordinary and supersingular behavior appears.

For $E[p^n]$, the reduced part can behave in two ways:

1. **Ordinary case**:

$$
E[p^n]^{\operatorname{red}}\cong\mathbb Z/p^n\mathbb Z.
$$

2. **Supersingular case**:

$$
E[p^n]^{\operatorname{red}}=0.
$$

The notes flag the terminology:

> supersingular elliptic curves are not singular smoothness-wise.

They are smooth curves, but their $p$-torsion group scheme is extremely nonreduced.

---

## 8. Frobenius, Verschiebung, and $p$-torsion

In characteristic $p$, Frobenius has zero differential.

The dual isogeny of Frobenius is called Verschiebung:

$$
\widehat{\operatorname{Frob}}=V.
$$

Their composition satisfies

$$
V\circ\operatorname{Frob}=[p].
$$

The notes draw the picture:

- $\ker(\operatorname{Frob})$ corresponds to infinitesimal connected behavior;
- $\ker(V)$ records the étale/reduced part.

Thus the structure of $E[p]$ is controlled by how Frobenius and Verschiebung split the multiplication-by-$p$ map.

---

## 9. Conceptual Summary

The final lecture sequence shows the full pipeline:

1. Torsion points produce Tate modules.
2. Tate modules turn isogenies into linear maps.
3. Weil pairing supplies the symplectic form.
4. Dual isogeny gives trace and determinant.
5. Frobenius trace gives point counts.
6. The Hasse bound follows from positivity of the degree pairing.
7. In characteristic $p$, $p$-torsion separates ordinary and supersingular elliptic curves.

This is exactly the bridge from elliptic curves to Galois representations, zeta functions, and modularity.
