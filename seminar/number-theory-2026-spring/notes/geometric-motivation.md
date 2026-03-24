# Motivation on the Geometric Satake Isomorphism

**Lecture 2 - March 10, 2026**
**Speaker:** Yuchan Lee
**Location:** Room 104

## Notation and Preliminaries

- $G$: split connected reductive group over $F$.
- $F$: non-archimedean local field, with $\mathcal{O} = \mathcal{O}_F$, $t = \pi$, and $k = F/\mathcal{O}$ with $q = |k|$.
- Fix $T \subset B \subset G$, $W := N_G(T)/C_G(T) = N_G(T)/T$, the Weyl group.
- $\Phi = \Phi^+ \sqcup \Phi^-$ by $T \subset B$, and $\Delta \subset \Phi^+$.
- **Dominant coweight** $X_*(T)^+ := \{\mu \in X_*(T) \mid \langle \mu, \alpha\rangle \geq 0 \quad \forall \alpha \in \Delta\}$, and $\rho = \frac{1}{2}\sum_{\alpha \in \Phi^+} \alpha$.

We have several well-known facts:

::: lemma
**Lemma (Cartan Decomposition)**

$$G(F) = \bigsqcup_{\mu \in X_*(T)^+} G(\mathcal{O})\mu(t)G(\mathcal{O})$$
:::

## Motivation

::: remark
**Aim:** motivation of the geometric Satake equivalence, and its ingredients.
:::

Recall that the classical Satake isomorphism is

::: theorem
**Theorem (Classical Satake Isomorphism)**

$$S: \mathcal{H}(G(F), G(\mathcal{O})) \cong \mathbb{C}[X_*(T)]^W \cong K_0(\operatorname{Rep} \hat{G})$$
:::

Then, over the isomorphism, we have two natural bases of the isomorphism.

::: lemma
**Lemma (Two bases)**

1. A basis of $\mathcal{H}(G(F), G(\mathcal{O}))$ is
   $$\{c_\mu := 1_{G(\mathcal{O})\mu(t)G(\mathcal{O})}\}_{\mu \in X_*(T)^+}$$

2. A basis of $\mathbb{C}[X_*(T)]^W$ is
   $$\{\varphi_\mu := q^{\langle \rho, \mu\rangle} \operatorname{tr}(V_\mu)\}_{\mu \in X_*(T)^+}$$
   where $V_\mu$ is the irreducible representation of $\hat{G}$ whose highest weight vector is $\mu$.
:::

This has a comparison.

::: lemma
**Lemma (Kazhdan-Lusztig Polynomial)**

We have
$$S^{-1}\varphi_\mu = c_\mu + \sum_{\lambda \leq \mu} d_{\mu\lambda}(q)c_\lambda$$
where $d_{\mu\lambda}(x)$ is the Kazhdan-Lusztig polynomial for the affine Weyl group of $\hat{G}$.

Surprisingly, each coefficient of $d_{\mu\lambda}(x)$ is positive.
:::

We can classically prove the things, but we want to prove and understand the following things:

1. Semi-simpleness of $\operatorname{Rep} \hat{G}$.
2. Positivity of the coefficients of $d_{\mu\lambda}(x)$.
3. Natural appearance of $\hat{G}$.
4. Generalization into the Iwahori Level.

::: remark
The Geometric Satake Equivalence can explain the four questions.
:::

Then, we need to geometrize it. The geometrization is the goal of the lecture.

| Classical Object | Geometric Object |
|---|---|
| $G(F)/G(\mathcal{O})$ | Affine Grassmannian |
| Cartan Decomposition: $G(\mathcal{O})$-orbit of $G(F)/G(\mathcal{O})$ | Schubert Stratification: $L^+G$-orbit in $\operatorname{Gr}_G$ |
| $\mathcal{H}(G(F), G(\mathcal{O}))$ | $\operatorname{Perv}_{L^+G}(\operatorname{Gr}_G)$ |

## Affine Grassmannian

We set $k = \mathbb{F}_q$, with $F = \mathbb{F}_q((t))$ and $\mathcal{O} = \mathbb{F}_q[[t]]$.

1. Define $\operatorname{Aff}_k$ to be the category of affine $k$-schemes, which is the same as the opposite category of $k$-algebras.
2. Endow $\operatorname{Aff}_k$ with the fpqc topology. In other words, for each affine $k$-scheme $X$, there is a covering $\{U_i \rightarrow X\}$ such that $\coprod U_i \rightarrow X$ is flat and surjective.
3. Zhu's notation: category of sheaves on $\operatorname{Aff}_k$ is $\operatorname{Sp}_k$ (also said to be $k$-space), and category of schemes is $\operatorname{Sch}_k$.

::: definition
**Definition (Ind-Scheme)**

An ind-scheme over $k$ is a $k$-space that can be written as a filtered direct limit
$$X = \varinjlim_{i \in I} X_i$$
such that $X_i$ is a scheme and for every arrow $i \rightarrow j$ in $I$, the corresponding $X_i \rightarrow X_j$ is a closed embedding.

Then, an ind-scheme $X$ over $k$ is called ind-affine/projective/of finite type/etc., if there is a representation of $X$ such that each $X_i$ has the structure.
:::

::: remark
Not restricted to the affine scheme for each $X_i$, but regarding $X$ as a sheaf, this must be a sheaf defined over all affine schemes over $k$.

In addition, in terms of points ($R$-points), we can regard the ind-scheme as a union of $X_i(R)$ along with the relation made by $I$.
:::

### Affine Grassmannian of the general linear group

::: definition
**Definition (Affine Grassmannian)** *(restricted to $\operatorname{GL}_n$ case)*

For a $k$-algebra $R$, **an $R$-family of lattices** in $k((t))^n$ is a finitely generated projective $R[[t]]$-submodule $\Lambda$ of $R((t))^n$ such that
$$\Lambda \otimes_{R[[t]]} R((t)) \cong R((t))^n$$

Then, an **affine Grassmannian** $\operatorname{Gr}_{\operatorname{GL}_n}$ is a (pre)sheaf (FACT: this is indeed a sheaf)
$$\operatorname{Aff}_k \rightarrow \operatorname{Sets} \quad R \mapsto \left\{ \text{the set of } R\text{-families of lattices in } k((t))^n \right\}$$
:::

This means, especially
$$\operatorname{Gr}_{\operatorname{GL}_n}(k) = \left\{ \text{finitely generated projective } k[[t]]\text{-modules } \Lambda \subset k((t))^n \text{ such that } \Lambda \otimes_{k[[t]]} k((t)) \cong k((t))^n \right\}$$
Note that projective is free in this case.

In addition, take an element $\Lambda_0 = k[[t]]^n$ then the action $\operatorname{GL}_n(F) \times \operatorname{Gr}_{\operatorname{GL}_n}(k) \rightarrow \operatorname{Gr}_{\operatorname{GL}_n}(k)$ by $g \mapsto g\Lambda_0$ is transitive, with the stabilizer
$$\operatorname{Stab}_{\operatorname{GL}_n(F)}(\Lambda_0) = \operatorname{Aut}_{k[[t]]}(k[[t]]^n) = \operatorname{GL}_n(\mathcal{O})$$
This means
$$\operatorname{Gr}_{\operatorname{GL}_n}(k) \cong \operatorname{GL}_n(F) / \operatorname{GL}_n(\mathcal{O})$$

### Quotient structure

Recall that $R \otimes_k k[[t]] = R[[t]]$ and $R \otimes_k k((t)) = R((t))$, so we can consider the following objects as (pre)sheaves over $k$.

::: definition
**Definition (Jet/Arc/Positive Loop and Loop group)**

For a presheaf $X$ over $\mathcal{O}$ (resp. over $F$), the **jet = arc = positive loop group** $L^+X$ of $X$ is the presheaf over $k$
$$L^+X: R \mapsto X(R \otimes_k k[[t]]) = X(R[[t]])$$
Likewise, the **loop group** $LX$ of $X$ is the presheaf over $k$
$$LX: R \mapsto X(R((t)))$$
:::

::: proposition
**Proposition (Properties of the Jet and the Loop group)**

1. Let $X$ be a scheme of finite type over $\mathcal{O}$, then $L^+X$ is represented by a scheme over $k$.
2. If $X$ is an affine scheme over $k$, then $L^+X$ is an affine scheme over $k$.
3. Let $X$ be an affine scheme of finite type over $F$, then $LX$ is represented by an ind-affine scheme over $k$. (NOT A SCHEME IN GENERAL)
4. If $\underline{X}$ is affine and of finite type scheme over $\mathcal{O}$ and $\underline{X} \times_\mathcal{O} F \cong F$, then $L^+X \subset LX$ is a closed subscheme. In other words, there is a filtration $LX = \varinjlim_{i \in I} (LX)_i$ of schemes $(LX)_i$ such that $L^+X \subset (LX)_i$ is a closed embedding for each $i$.
:::

Since we know the representability, it suffices for us to use the $R$-points of it.

### Application to the general linear group

Let us consider $\operatorname{GL}_n$ as an affine scheme over $\mathcal{O}$.

- $G := \operatorname{GL}_n$ over $\mathcal{O}$.
- $LG := \operatorname{GL}_n \times_\mathcal{O} F$.

Then, there is a natural action
$$LG \times \operatorname{Gr}_G \rightarrow \operatorname{Gr}_G \quad (g, \Lambda) \mapsto g\Lambda$$
for each $R$-point. (Note that in this case, the affine Grassmannian is a set of lattices, so the general affine Grassmannian comes from this idea.)

::: proposition
The affine Grassmannian $\operatorname{Gr}_G$ is identified with the fpqc quotient $(LG/L^+G)$.
:::

### Affine Grassmannian of the general reductive group

::: definition
For a smooth affine $k$-group $G$, the affine Grassmannian $\operatorname{Gr}_G$ is the fpqc quotient $[LG/L^+G]$.
:::

::: proposition
$\operatorname{Gr}_G$ is represented by an ind-scheme, ind-of finite type over $k$.

If $G$ is reductive, then $\operatorname{Gr}_G$ is an ind-projective scheme.
:::

## Schubert Stratification

In this section, let $k$ be an **algebraically closed field** with finite characteristic.

::: remark
**Motivation:** make a geometrization of the Cartan decomposition, stratified by $X_*(T)^+$, the dominant coweights.
:::

::: definition
For $\mu \in X_*(T)^+$, $\mu(t) \in \operatorname{Gr}_G(k)$. (In general, $t \in R[[t]]$ so $\mu(t) \in \operatorname{Gr}_G(R)$.) Abusing the notation to $[\mu(t)] \in \operatorname{Gr}_G(R)$.

We define a **Schubert cell** $\operatorname{Gr}_\mu$ as the $L^+G$-orbit of $[\mu(t)]$ in $\operatorname{Gr}_G$.

In other words, the image sheaf of
$$a_\mu: L^+G \rightarrow \operatorname{Gr}_G \quad g \mapsto g \cdot [\mu(t)]$$
on fpqc site.

Then, a **Schubert variety** is
$$\operatorname{Gr}_{\leq \mu} := \bigcup_{\lambda \leq \mu} \operatorname{Gr}_\lambda$$
:::

> See the original paper of Zhu - chapter 2, using "inv", to define the $k$-points of the above at first, and making the reduced induced scheme structure on it. Thus, this is the reason for using the algebraically closed field.

::: proposition
**Proposition (Representability)**

1. $\operatorname{Gr}_\mu$ is a smooth quasi-projective variety of dimension $(2\rho, \mu)$.
2. $\operatorname{Gr}_{\leq \mu}$ is a projective variety, and it is a Zariski closure of $\operatorname{Gr}_\mu$. (Not in general, smooth)
:::

Note that $\operatorname{Gr}_{\leq \mu}(k) = \bigsqcup_{\lambda \leq \mu} \operatorname{Gr}_\lambda(k)$ for an algebraically closed field $k$, but in general, this is NOT a disjoint union as a scheme.

> We use the Schubert variety instead of the Schubert cell, because the former is a projective variety, whereas the latter is not. However, in exchange, we lose the smoothness condition, so stratification is needed.

::: example
In $\operatorname{GL}_n$, we have
$$\operatorname{Gr}_\mu(k) = \left\{ \text{families of } k[[t]]\text{-lattices } \Lambda \text{ in } k((t))^n \text{ s.t. } \exists\, g \in \operatorname{GL}_n(k[[t]]) \text{ with } g\Lambda = \mu(t)\Lambda_0 \right\}$$
This means
$$\operatorname{Gr}_\mu(k) = G(\mathcal{O})\mu(t)G(\mathcal{O})/G(\mathcal{O})$$

Especially, when $G = \operatorname{GL}_2$, with $\mu = (1, 0)$, then $\mu(t) = \operatorname{diag}(t, 1)$ so we have
$$\operatorname{Gr}_\mu(k) = \left\{ \begin{pmatrix} t & a \\ 0 & 1 \end{pmatrix} \mid a \in k \right\} \cup \left\{ \begin{pmatrix} 1 & 0 \\ 0 & t \end{pmatrix} \right\} \cong \mathbb{P}^1(k)$$
In addition, $\lambda \leq \mu$ implies $\lambda = \mu$ in $(1, 0)$ case, so
$$\operatorname{Gr}_{\leq (1, 0)} = \operatorname{Gr}_{(1, 0)} \cong \mathbb{P}^1(k)$$

For $\mu = (2, 0)$, the set of dominant coweights $\lambda$ such that $\lambda \leq \mu$ is $\lambda = (2, 0), (1, 1)$ so
$$\operatorname{Gr}_{\leq (2, 0)} = \operatorname{Gr}_{(2, 0)} \cup \operatorname{Gr}_{(1, 1)}$$
Since
$$\operatorname{Gr}_{(2, 0)} = \left\{ \begin{pmatrix} t^2 & a \\ 0 & 1 \end{pmatrix} \mid a \in k + tk \right\} \cup \left\{ \begin{pmatrix} 1 & 0 \\ a & t^2 \end{pmatrix} \mid a \in kt \right\} \cong k^2 \cup k$$
and
$$\operatorname{Gr}_{(1, 1)} = \left\{ \begin{pmatrix} t & 0 \\ 0 & t \end{pmatrix} \right\} = \{*\}$$
Thus, presumably, $\operatorname{Gr}_{\leq (2, 0)}$ may be a singular quadratic cone, centered on $\operatorname{Gr}_{(1, 1)}$.
:::

::: remark
From the above example, the Schubert variety is, in general, a **singular** projective variety.

In general, in the $\operatorname{Gr}_\mu \subset \operatorname{Gr}_{\leq \mu}$ case, $\operatorname{Gr}_\mu$ is a smooth dense open, so the singular part may occur in the boundary part.

Furthermore, usually $\operatorname{Gr}_\mu$ has a simple structure, like the affine space $\mathbb{A}^n$, so it is an easy way to understand the structure of $\operatorname{Gr}$ in general.
:::

> I think this stratification, or the Schubert Cell idea, is the reason for defining the jet/loop groups and defining the affine Grassmannian over a finite field $k$, not the local field. When we are considering them over a finite field, each Schubert cell (or a variety) is a finite set, so the explicit calculation by point counting is available. In addition, like for the cohomology stuff.

## Perverse Sheaf - Function-Sheaf Dictionary

We have the two variations:

$$\left(\text{$G(\mathcal{O})$-equivariant functions on } G(F)/G(\mathcal{O})\right) \Longleftrightarrow \left(\text{$L^+G$-equivariant perverse sheaves on } \operatorname{Gr}_G\right)$$

The former provides no information at singular points. However, the latter has the information.

**[BLACKBOX]** The Intersection cohomology sheaf, with its stalk cohomology, acts on the singular point (about the Frobenius action).

Note that
$$\operatorname{Perv}(X) \subset D_c^b(X) \subset D(\operatorname{Sh}(X))$$
for $X$ a scheme. In general, this can be generalized to the ind-projective schemes. (See **Zhu, Appendix A**)

::: proposition
$\operatorname{Perv}_{L^+G}(\operatorname{Gr}_G, \overline{\mathbb{Q}}_l)$ is a semisimple Abelian category. (For $p \nmid l$)

Its simple object is of the form: for $\mu \in X_*(T)^+$, take $\operatorname{Gr}_\mu \xhookrightarrow{j} \operatorname{Gr}_{\leq \mu} \xhookrightarrow{i} \operatorname{Gr}_G$, for $j$ an open immersion and $i$ a closed immersion. Then, its intersection cohomology sheaves are the simple objects:
$$IC_\mu := i_* j_{!*} (\overline{\mathbb{Q}_l}[-(2\rho, \mu)])$$
(Recall that $(2\rho, \mu)$ is the dimension of $\operatorname{Gr}_\mu$, and $j_{!*}$ is the intermediate extension.)

> For an open immersion $j$, we have two pushforwards: $j_!$ and $j_*$. The former is too small, whereas the latter is too large and contains some trash information. Thus, using the image of the "perverse cohomology" ${}^p\mathcal{H}(j_! f) \rightarrow {}^p\mathcal{H}(j_* f)$, it may contain the right information on the boundary of the open immersion.

In general, for each $f \in \operatorname{Perv}_{L^+G}(\operatorname{Gr}_G, \overline{\mathbb{Q}}_l)$, we can decompose
$$f \cong \bigoplus_{\lambda \in X_*(T)^+} IC_\lambda^{n_\lambda(f)}$$
for the coefficients described by the purity and the parity properties of $IC_\lambda$.
:::

### Purity and parity

::: definition
**Definition (Purity and Parity)**

For an algebraic scheme $X$ over $k$, let $f$ be a $\overline{\mathbb{Q}_l}$-sheaf. For a closed point $x \in X$, the geometric Frobenius $\sigma_x \in \operatorname{Gal}(\overline{k}/k(x))$ induces action on $f_{\overline{x}}$ where $\overline{x}$ is a geometric point over $x$.

Then, **purity and parity** are given by the following.

- Fix $q^{1/2} \in \overline{\mathbb{Q}}_l$.
- Choose an isomorphism $\iota: \overline{\mathbb{Q}}_l \xrightarrow{\sim} \mathbb{C}$ such that $\iota(q^{1/2}) \in \mathbb{R}^{<0}$.

For a complex $K \in D_c^b(X)$:

1. ($\iota$-pure) We say $K$ satisfies $\iota$-pure of weight $k$ if for any closed point $x$ with the geometric point $\overline{x}$ over $x$, all eigenvalues $\alpha$ of $\sigma_x: H_{\overline{x}}^i(K) \rightarrow H_{\overline{x}}^i(K)$ satisfy $|\iota(\alpha)|^2 = |\iota(x)|^{i+k}$. Especially, for $x \in X(k)$, $|\iota(\alpha)|^2 = q^{i+k}$.

2. (Parity) $K$ has even or odd parity if $H_{\overline{x}}^i(K) \neq 0$ only if $i$ is even or odd.
:::

::: proposition
Simple object $IC_\mu$ in $\operatorname{Perv}_{L^+G}(\operatorname{Gr}_G, \overline{\mathbb{Q}}_l)$ has
- pure of weight $-(2\rho, \mu)$
- even parity
:::

### Grothendieck function-sheaf dictionary

This is the reason why we can consider the spherical Hecke operators as the perverse sheaves.

::: definition
**Definition (Dictionary)**

We have the map
$$\operatorname{Perv}_{L^+G}(\operatorname{Gr}_G, \overline{\mathbb{Q}}_l) \rightarrow \{\text{functions on } \operatorname{Gr}_G(k) = G(F)/G(\mathcal{O})\}$$
given by
$$\mathcal{A} \mapsto f_\mathcal{A}: x \mapsto \sum_i (-1)^i \operatorname{tr}(\sigma_x, H_{\overline{x}}^i(\mathcal{A}))$$
:::

Then, it has a basic property:

::: proposition
$\mathcal{A}$ is $L^+G$-equivariant implies $\mathcal{A}_x = \mathcal{A}_y$ when $x$ and $y$ belong to the same $L^+G$-orbit, which means $f_\mathcal{A}$ is $G(\mathcal{O})$-equivariant.
:::

In addition, we have the following basic facts:

::: proposition
**Proposition (Properties)**

1. For $\mathcal{A}_1$ and $\mathcal{A}_2$, we have
   $$f_{\mathcal{A}_1 * \mathcal{A}_2} = f_{\mathcal{A}_1} * f_{\mathcal{A}_2}$$
   where the former operation is defined later. (Fusion product)
2. $f_{IC_\mu} \in \mathcal{H}(G(F), G(\mathcal{O}))$, which matches with $V_\mu \in \operatorname{Rep}(\hat{G})$ under the classical Satake isomorphism, up to sign and $q^{1/2}$ power.
3. (Basic FACT) For $p \in \operatorname{Perv}_{L^+G}(\operatorname{Gr}_G, \overline{\mathbb{Q}}_l)$, we have $f_{p[d]} = (-1)^d f_p$.
:::

*Proof of part 2.*

For $x = \lambda(t)$ (it suffices to consider this case, as $f_{IC_\mu}$ is $G(\mathcal{O})$-invariant), we want to calculate the value $f_{IC_\mu[(2\rho, \mu)]}(x)$.

- **$\lambda \not\leq \mu$:** the definition of the intersection cohomology gives that $IC_\mu[(2\rho, \mu)]$ has support only on $\operatorname{Gr}_{\leq \mu}$, so $f_{IC_\mu[(2\rho, \mu)]}(x) = 0$.

- **$\lambda = \mu$:** as the intersection cohomology comes from $\operatorname{Gr}_\mu$, we have $IC_\mu[(2\rho, \mu)] \mid_{\operatorname{Gr}_\lambda} = \overline{\mathbb{Q}_l}$ which is a constant sheaf, centered at the level $0$, thus $f_{IC_\mu[(2\rho, \mu)]}(x) = \operatorname{tr}(\sigma_x, \overline{\mathbb{Q}_l}) = 1$.

- **$\lambda < \mu$:** we know that this is pure with even parity, it suffices to consider the even cohomology, so (see Zhu, Sec 5.6)
  $$f_{IC_\mu[(2\rho, \mu)]}(x) = \sum_i \operatorname{tr}(\sigma_x, H_{\overline{x}}^{2i}(IC_\mu[(2\rho, \mu)])) = \sum_i \operatorname{tr}(\sigma_x, H_{\overline{x}}^{2i-(2\rho, \mu)}(IC_\mu))$$
  $$= \text{(using the purity)} \sum_i q^i \dim H_{\overline{x}}^{2i-(2\rho, \mu)}(IC_\mu)$$

- We know the FACT: $d_{\lambda\mu}(q) = \sum_i q^i \dim H_{\overline{x}}^{2i-(2\rho, \mu)}(IC_\mu)$.

- Therefore, the function-sheaf dictionary reproduces the Kazhdan-Lusztig polynomials. $\square$

## Conclusion

We described:

1. **Semisimplicity of $\operatorname{Rep} \hat{G}$**: by using the fact that the Perverse sheaf category is a semisimple abelian category.
2. **Positivity of $d_{\lambda\mu}$**: comes from the fact that it is described by the sum of the dimensions of the cohomology of the intersection cohomology, and the parity condition ensures only positive terms survive.
3. **Appearance of $\hat{G}$**: comes from the Tannakian formalism.
4. **Generalization into the Iwahori-fixed part?** — Not covered.

---

*Notes taken from the seminar talk. See [Zhu (2016)](https://arxiv.org/abs/1603.05593) for the primary reference.*
