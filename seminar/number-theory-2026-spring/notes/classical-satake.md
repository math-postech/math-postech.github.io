# Classical Satake Isomorphism

**Lecture 1 - March 3, 2026**
**Speaker:** Tom Huh
**Location:** Room 104

## What is the classical Satake transform?

Most general setting: for any case, $\mathbb{A}$ is the algebraic variety over $F$, and $A = \mathbb{A}(F)$ is its $F$-points.

1. $F - \mathcal{O}_F - \pi - k - q$: non-archimedean local field setting.
2. $\mathbb{G}$: connected reductive group over $F$.
3. $\mathbb{S} \subset \mathbb{M} := C_\mathbb{G}(\mathbb{S}) \subset \mathbb{G}$ where $\mathbb{S}$ is a maximal split torus, $\mathbb{M}$ is the centralizer (a Levi subgroup).
4. $W := W(\mathbb{G}, \mathbb{S}) := N_\mathbb{G}(\mathbb{S})(F) / Z_\mathbb{G}(\mathbb{S})(F) = N_G(S)/Z_G(S)$: the relative Weyl group.
5. $K \subset G$: a special maximal compact subgroup (from Bruhat-Tits theory).
6. $M_K := (\mathbb{S}^{an} \cdot D(\mathbb{M}))(F)$ where $\mathbb{S}^{an}$ is the maximal $F$-anisotropic subtorus of $\mathbb{S}$, so that $M_K$ is the unique maximal compact subgroup of $M$. For the unramified case, $M_K = M^\circ = \mathbb{M}(\mathcal{O}_F)$.

::: theorem
**Theorem (Classical Satake Isomorphism)**

There is a canonical isomorphism
$$\mathcal{H}(G, K) \cong \mathcal{H}(M, M_K)^W$$
:::

**Contents:**
1. Review: root system, root datum, equivalence, Weyl chamber, etc.
2. Split case: key structure and several equivalent presentations.
3. Non-split case: reviewing the quasi-split algebraic group, non-split algebraic group with its root system, and giving an example of the above theorem for forms of $\operatorname{GL}_n$.

::: remark
Dual groups: $\operatorname{SO}(2n) \leftrightarrow \operatorname{SO}(2n)$, $\operatorname{SO}(2n+1) \leftrightarrow \operatorname{Sp}(2n)$, $U(n) \leftrightarrow U(n)$, $\operatorname{SU}(n) \leftrightarrow U(n)/U(1)$, $\operatorname{GL}(n) \leftrightarrow \operatorname{GL}(n)$, $\operatorname{SL}(n) \leftrightarrow \operatorname{PGL}(n)$.
:::

There are several generalizations of the Satake isomorphism. The classical Satake isomorphism over a split connected reductive group is the relation between spherical irreducible representations and unramified L-parameters with a trivial $\operatorname{SL}_2(\mathbb{C})$-action.

1. **Split to Non-split**: This requires the Galois group — rationality problem.
2. **Maximal hyperspecial group to Iwahori (or parahoric) group**: This extends the domain from spherical representations to more, for example, parabolically induced ones.

## Review of the reductive group and the root datum

### Split case

::: theorem
**Theorem (Isomorphism and Existence Theorem)**

1. Bijection between isomorphism classes of
$$\left(\text{reduced root system}\right) \Longleftrightarrow \left(\text{connected semisimple } F\text{-groups, up to central isogeny } (\mathbb{G}, \mathbb{T})\right) \Longleftrightarrow \left(\text{Dynkin diagram up to isom.}\right)$$

2. Bijection between isomorphism classes of
$$\left(\text{reduced root datum}\right) \Longleftrightarrow \left(\text{connected reductive } F\text{-algebraic group up to isom. } (\mathbb{G}, \mathbb{T})\right)$$
where we write the root datum by $R(\mathbb{G}, \mathbb{T})$.
:::

::: theorem
**Theorem (Borel Subgroup)**

When $(\mathbb{G}, \mathbb{T})$ pair is given, there is a bijection between
$$\left(\text{set of standard Borel subgroups } \mathbb{T} \subset \mathbb{B} \subset \mathbb{G}\right) \Longleftrightarrow \left(\text{set of positive root systems } \Phi_+ \subset \Phi\right)$$
given by
$$\mathbb{B} \mapsto \Phi_+ := \Phi(\mathbb{B}, \mathbb{T}) \subset \Phi(\mathbb{G}, \mathbb{T}) \quad \text{where} \quad \mathfrak{b} = \mathfrak{t} \oplus \bigoplus_{\alpha \in \Phi(\mathbb{B}, \mathbb{T})} \mathfrak{g}_\alpha$$
In general, there is a bijection between the set of parabolic subgroups containing $\mathbb{T}$ and the set of parabolic subsets $\Phi_\lambda := \{\alpha \in \Phi \mid \langle \lambda, \alpha\rangle \geq 0\}$ for some $\lambda \in V^*$.
:::

For each triple $(\mathbb{G}, \mathbb{T}, \mathbb{B})$, a **pinning** is
$$\{p_\alpha: \mathbb{G}_a \xrightarrow{\sim} U_\alpha \mid \alpha \in \Delta \subset \Phi_+\} \Longleftrightarrow \{0 \neq X_\alpha \in \mathfrak{g}_\alpha \mid \alpha \in \Phi_+\}$$
Then, the automorphism of the pinning root datum (based root datum) is the same as the automorphism of the corresponding Dynkin diagram.

### Non-split case

::: remark
Dynkin diagram, absolute root system, and the absolute root datum are all the same for any form of $\mathbb{G}$. The only difference lies in their Galois actions.

For example, in the split case, the Galois action is trivial for all of them.
:::

::: proposition
Define $\operatorname{Inn}(\mathbb{G}_{\overline{F}}) := \mathbb{G}_{\overline{F}}/Z(\mathbb{G}_{\overline{F}})$, identifying this with its $\overline{F}$-points, this is the inner automorphism group. Then, there is a **split exact sequence**
$$1 \rightarrow \operatorname{Inn}(\mathbb{G}_{\overline{F}}) \rightarrow \operatorname{Aut}(\mathbb{G}_{\overline{F}}) \rightarrow \operatorname{Aut}(\operatorname{Dink}(\mathbb{G}_{\overline{F}})) \rightarrow 1$$
The splitting map is given by the pinning.
:::

Several remarks:
1. $\operatorname{Aut}(\mathbb{G}_{\overline{F}}) / \operatorname{Inn}(\mathbb{G}_{\overline{F}}) \xrightarrow{\sim} \operatorname{Aut}(\operatorname{Dink}(\mathbb{G}_{\overline{F}}))$ is given term-by-term, i.e., when the Dynkin diagram = based root datum is given by $(X, \Delta, X^\vee, \Delta^\vee)$, $a \in \operatorname{Aut}(\mathbb{G}_{\overline{F}})$ acts on each part by
   - $\chi: \mathbb{T} \rightarrow \mathbb{G}_m$ which is an element of $X$, acting by $a \cdot \chi := \chi \circ a^{-1}$.
   - $\lambda: \mathbb{G}_m \rightarrow \mathbb{T}$ which is an element of $X^\vee$, acting by $a \cdot \lambda := a \circ \lambda$.
2. This SES is well-defined: independent of the choice of $(\mathbb{T} \subset \mathbb{B} \subset \mathbb{G})$.
3. The splitting map is unique, up to conjugation by an element of $\operatorname{Inn}(G)$. This naturally yields the equivalence between the definition of quasi-splitness and the existence of a Borel subgroup.

::: proposition
There is a bijection between
$$\{\text{forms of } \mathbb{G}_{\overline{F}}\} \cong H^1(\operatorname{Gal}(\overline{F}/F), \operatorname{Aut}(\mathbb{G}_{\overline{F}}))$$
:::

#### Unitary Group — Quasi-Split

Reference: [Buzzard - Unitary](https://www.ma.imperial.ac.uk/~buzzard/maths/research/notes/unitary_groups_basic_definitions.pdf). Also see [Conrad - Relative Root](https://virtualmath1.stanford.edu/~conrad/249BW16Page/handouts/relroots.pdf).

Fix the hermitian matrix $H = H_q = \begin{pmatrix} 0 & I_q & 0 \\ I_q & 0 & 0 \\ 0 & 0 & H_0 \end{pmatrix}$ with $H_0 = \operatorname{diag}(c_{2q+1}, \cdots, c_n)$, and consider $G = \operatorname{SU}(n, H) \subset \operatorname{Res}_{E/F}\operatorname{SL}_n$, for $n \geq 2q$ and $E/F$ a separable quadratic extension.

::: example

1. A maximal split torus has the form $S = \operatorname{diag}(t_q, t_q^{-1}, 1_{n-2q})$ for $t_q \in \mathbb{G}_m^q(F)$ (not $E$).
2. Roots are: $e_i - e_j$ ($Y$-block), $e_i + e_j$ ($X$-block), $-e_i - e_j$ ($X'$-block), $-e_i + e_j$ ($Y'$-block), $e_i$ ($CU$-block), $-e_i$ ($CV$-block). Every root space is $1$-dimensional, except for $\pm 2e_i$, which is $2$-dimensional.
3. $Z_G(S) = M = (S_0 \cdot S) \times \operatorname{SU}(H_0)$ where $S_0 = \{(t_1, \cdots, t_q, t_1^{-1}, \cdots, t_q^{-1}, 1_{n-2q}) \mid \prod t_i = 1\}$.
4. $Z_G(S)$ is a torus if and only if $G$ is quasi-split, which is equivalent to $n = 2q$ or $n = 2q+1$. In this case:
   - $n = 2q$: $\Phi(G, S)$ is of type $C_q$.
   - $n = 2q+1$: $\Phi(G, S)$ is of type $BC_q$.

   In both cases, the Weyl group $W = S_q \ltimes (\mathbb{Z}/2\mathbb{Z})^q$. The dual root data is the same as $\operatorname{Sp}_{2n}$.
:::

#### Weil Restriction — Quasi-Split

For example, $G' = \operatorname{Res}_{E/F} \operatorname{GL}_2$ is quasi-split, having the standard Borel $B := \operatorname{Res}_{E/F} B_0$. Its maximal "split" torus is $F^\times \times F^\times \subset G'$. On the other hand, its maximal torus is $\operatorname{Res}_{E/F}\mathbb{G}_m^2 \subset G'$.

::: remark
**Why is this not split?**

If the maximal torus is $F$-split, the Galois action on the character lattice is trivial. In general,
$$\left(\text{Tori over } F\right) \Longleftrightarrow \left(\text{Character group and the Galois action}\right)$$

$\operatorname{Res}_{E/F} \mathbb{G}_m^2 \times_F \overline{F} \cong \prod_{E \hookrightarrow \overline{F}} \mathbb{G}_{m, \overline{F}}^2$ and the Galois action permutes the embeddings, which means the character group has a nontrivial Galois action.
:::

::: example
$k'/k$ a finite separable extension, $G'$ a connected unramified reductive group over $k'$. Let $S' \subset M' \subset P' \subset G'$ be fixed.

- There is a maximal $F$-split subtorus of $G = \operatorname{Res}_{k'/k}G'$ contained in $S \subset \operatorname{Res}_{k'/k}S'$. When $\operatorname{rank}_{k'} S' = r$ and $[k': k] = d$, $\dim \operatorname{Res}_{k'/k}S' = rd$ but $\operatorname{rank}_k S = r$.
- The restriction map of roots, coroots, etc., is a bijection: $\theta: \Phi(G', S') \rightarrow \Phi(G, S)$, and each root space of $\Phi(G, S)$ has dimension $[k': k]\dim\mathfrak{g}'_{\alpha'}$.
:::

#### Division Algebra — Inner Form

Let $G = \operatorname{GL}_d(D)$ for $\deg D = [D: k]^{1/2} = m$.

- There is a unique maximal subfield $k \subset l \subset D$ of $[l:k] = m$ and $D \otimes_k l \cong M_m(l)$.
- Let $S \subset \operatorname{GL}_d(k)$ be the split maximal $k$-torus (diagonal), then via $\operatorname{GL}_d(k) \subset G$, $S$ is a maximal split $k$-torus of $G$.
- $\theta: \Phi(G, S) \rightarrow \Phi(\operatorname{GL}_d, S)$ is a bijection. For each $\alpha_{ij} = e_i - e_j$, it corresponds to the root space of $(i, j)$-entry with elements in $D$. However, this is not isomorphic to $\mathbb{G}_a^K$ since $D$ is not commutative.
- $Z_G(S) = M \subset (D^\times)^m$ consists of $(\xi_1, \cdots, \xi_m)$ such that $\prod \operatorname{Nrd}(\xi_i) = 1$.

For example, $G = \operatorname{SL}_1(D)$ is not quasi-split because its maximal split torus is trivial (it is anisotropic), meaning $C_G(S) = M = G$ and the corresponding minimal $F$-parabolic is $G$.

### Hyperspecial subgroup

::: proposition
For any smooth reductive $\mathcal{O}_F$-model of $G$, $\mathfrak{G}(\mathcal{O}_F)$ is a maximal compact open subgroup.

Existence of the smooth reductive $\mathcal{O}_F$-model is equivalent to $G$ being quasi-split and $G \times_F E$ being split for some finite unramified extension $E/F$. (In other words, $G$ is unramified.)
:::

::: example
- $\operatorname{SL}_1(D)$: its $F$-group is $F$-anisotropic, so this is not quasi-split, and there is no $\mathcal{O}_F$-reductive model.
- $\operatorname{SU}_n(E/F)$ for $E/F$ a ramified separable quadratic extension: it is quasi-split but not split over an unramified extension, so it has no reductive $\mathcal{O}_F$-model.
:::

### Archimedean Case

::: remark
Unlike the non-archimedean case, in the Archimedean case the category of **algebraic = rational** representations of $G$ is semisimple (in the reductive case), and every irreducible representation is **finite-dimensional**.

Note that this is different from Lie group (both real and complex) representations.
:::

Let $G$ be a complex algebraic group (connected).

1. $G$ is reductive if and only if $\operatorname{Rep}_{\text{alg}}(G)$ is semisimple.
2. $G$ has a unique $\mathbb{R}$-form which is a compact Lie group, say $K$. For example, $G = \operatorname{GL}_n$, $K = U_n$.
3. Every complex real Lie group has a unique way to make it algebraic. Thus, $K$ is also a real algebraic group.
4. **Borel-Weil Theorem** says that the natural inclusions $\operatorname{Rep}(G) \subset \operatorname{Rep}(K) \subset \mathbb{Z}[X^*(T)]^W$ are all equalities.
5. A highest weight of a $G$-representation $V$ is an element $\lambda \in X^*(T)$ such that for any other weight $\mu$, $\mu < \lambda$. This is unique.
6. For each $\lambda$, there is a unique irreducible highest weight representation $V_\lambda$, and its character is $\operatorname{ch}(V_\lambda) = \operatorname{tr}_T(\rho, V_\lambda) = e^\lambda + \sum_{\mu < \lambda} m_\lambda(\mu) e^\mu$, so induction on the partial order gives the result.
7. $K$ is compact, so the category of finite-dimensional representations of $K$ is semisimple.

## Satake Isomorphism — Split Case

Let $T \subset B \subset G$ for this case. Fix $\Delta \subset \Phi^+ \subset \Phi$.

### Notations

1. **Positive Weyl chamber** (dominant coweights): $P_+ := \{\lambda \in X_* \mid \langle \lambda, \alpha\rangle \geq 0 \; \forall \alpha \in \Delta\}$. Partial ordering: $\lambda \leq \mu$ iff $\mu - \lambda \in \mathbb{Z}^{\geq 0}\Delta^\vee$.
2. $2\rho = \sum_{\Phi^+} \alpha$, the **most orthogonal vertex in the root space**, or the normal vector corresponding to the polarization $\Phi^+ \sqcup \Phi^-$.
3. Dual groups $\hat{T} \subset \hat{B} \subset \hat{G}$, with an isomorphism $X^*(\hat{T}) \cong X_*(T)$ that maps $\hat{\Phi}^+ \mapsto \Phi^\vee$.

   > Since we already fixed $T \subset B \subset G$, the based root datum is also fixed. Thus, the dual group (Langlands dual) is the triple $\hat{T} \subset \hat{B} \subset \hat{G}$ by "letting" $X^*(\hat{T}) := X_*(T)$. Note that $\hat{T} := \hat{T}(\mathbb{C}) := \operatorname{Hom}(X_*(T)(\overline{F}), \mathbb{C}^\times)$.

4. **Cartan Decomposition:** $G = \bigsqcup_{\lambda \in P^+} K \lambda(\pi) K$.

::: example
**$G = \operatorname{GL}_n$:** $\Delta = \{e_i - e_{i+1}\}$ and $\mathbb{Z}\Delta \subsetneq X^* = \operatorname{Hom}(\mathbb{G}_m^n, \mathbb{G}_m)$. For each $\lambda = (c_1, \cdots, c_n) \in X_*$, $\langle \lambda, e_i - e_{i+1}\rangle = c_i - c_{i+1} \geq 0$, so $c_1 \geq \cdots \geq c_n$ is the element in the cone above.
:::

::: example
**$G = \operatorname{SL}_n$:** $\alpha_i = e_i - e_{i+1}$, so $\lambda = (c_1, \cdots, c_n) \in X_*$ with $\sum c_i = 0$ and $c_1 \geq \cdots \geq c_n$.

**$G = \operatorname{Sp}_4$ (type C):** with $J = \begin{pmatrix} 0 & I_2 \\ -I_2 & 0 \end{pmatrix}$. Then $T = \operatorname{diag}(a, b, a^{-1}, b^{-1})$, base roots are $\alpha = e_1 - e_2$ (short), $\beta = 2e_2$ (long), and the positive roots are $\{\alpha, \beta, \alpha + \beta, 2\alpha + \beta\}$. The simple coroots are $\alpha^\vee = e_1 - e_2 + e_3 - e_4$ and $\beta^\vee = e_2 - e_3$. A cocharacter $\lambda = a\alpha^\vee + b\beta^\vee \in P_+$ iff $a \leq b \leq 2a$. In terms of $e_1, e_2$: $ae_1 + be_2$ for $a \geq b \geq 0$.
:::

::: theorem
**Theorem (Representations)**

Let $R(\hat{G})$ be the Grothendieck ring of finite-dimensional algebraic representations of $\hat{G} = \hat{G}(\mathbb{C})$. There is a natural isomorphism
$$\operatorname{Rep}_{\text{alg}}(\hat{G}) \cong \mathbb{Z}[X^*(\hat{T})]^W \quad V \mapsto \chi_V^T: t \mapsto \operatorname{Tr}(\rho(t)) \quad \chi_V^T = \sum_{\mu \in X^*(\hat{T})} \dim V_\mu \, e^\mu$$
The converse is given by the highest weight representation, for each unique $\lambda \in P_+ \cong \hat{P}^+$.
:::

### Important SES

We have the SES
$$1 \rightarrow \mathbb{T}(\mathcal{O}_F) \rightarrow \mathbb{T}(F) \rightarrow X_*(\mathbb{T}) \rightarrow 1$$
which is split, by the choice of the uniformizing parameter $\pi$ such that $\lambda \mapsto \lambda(\pi)$. For $\mathbb{T} = \mathbb{G}_m$, we have $F/\mathcal{O}_F^\times \cong \mathbb{Z}$ via the valuation. In general, $t \in \mathbb{T}(F) \mapsto (\gamma(t): \chi \mapsto \operatorname{ord}(\chi(t)))$.

Then, $1_{\mathbb{T}(\mathcal{O}_F) \lambda(\pi)\mathbb{T}(\mathcal{O}_F)} = 1_{\mathbb{T}(\mathcal{O}_F)\lambda(\pi)}$ so $1_{\mathbb{T}(\mathcal{O}_F) \lambda(\pi)\mathbb{T}(\mathcal{O}_F)} * 1_{\mathbb{T}(\mathcal{O}_F) \mu(\pi)\mathbb{T}(\mathcal{O}_F)} = 1_{\mathbb{T}(\mathcal{O}_F) (\lambda+\mu)(\pi)\mathbb{T}(\mathcal{O}_F)}$, yielding
$$\mathcal{H}(\mathbb{T}(F), \mathbb{T}(\mathcal{O}_F)) \cong \mathbb{Z}[X_*(\mathbb{T})]$$
as a ring isomorphism.

### Modular Character

::: definition
**Definition (Modular Character)**

$$\delta_G: G \rightarrow \mathbb{R}^{>0} \quad \text{is given by } \quad d\mu_G(xg) = \delta_G(g)d\mu_G(x)$$
Equivalently, for all $f \in C_c^\infty(G)$,
$$\delta_G(g)\int_G f(xg)\,d\mu_G(x) = \int_G f(x)\, d\mu_G(x)$$
:::

::: example
**$G = B_n$ with Levi $T_n U_n$** (see [Exercise 2.6](https://www.math.iitb.ac.in/%7Edprasad/ictp2.pdf)):

The left Haar measure is $db = \prod_i d^*y_i \prod dx_{ij}$ for $b = \operatorname{diag}(y_1, \cdots, y_n) \cdot u$.

Explicitly,
$$\delta_B(\operatorname{diag}(a_1, \cdots, a_n)) = |a_1|_F^{n-1}|a_2|_F^{n-3}\cdots|a_n|_F^{1-n}$$

**BLACKBOX:** $\delta_B(b) = |\det(\operatorname{Ad}(b)\mid_{\operatorname{Lie}(U)})|_F = |\det(\operatorname{Ad}(t)\mid_{\operatorname{Lie}(U)})|_F$.

When $G$ is split, $\operatorname{Ad}(t)$ acts on $\operatorname{Lie}(U)$ by the set of positive roots, so
$$\delta_B(t) = \left| \prod_{\alpha \in \Phi^+} \alpha(t) \right| = \left| \prod_{\alpha \in \Phi^+} \pi^{\langle \alpha, \lambda \rangle} \right| = q^{-2\langle \lambda, \rho\rangle}$$
:::

::: example
**$\operatorname{SL}_3$:** $\alpha = e_1 - e_2$, $\beta = e_2 - e_3$. For $t = \operatorname{diag}(a, b, c)$ with $abc = 1$: $\delta_B(t) = |\alpha(t)\beta(t)(\alpha+\beta)(t)| = |a^4||b^2|$.

**$\operatorname{Sp}_4$:** $t = \operatorname{diag}(a, b, a^{-1}, b^{-1})$, positive roots $\{\alpha, \beta, \alpha+\beta, 2\alpha+\beta\}$: $\delta_B(t) = |a/b||b^2||ab||a^2| = |a|^4|b|^2$.
:::

### Satake Transform

::: definition
**Definition (Satake Transform)**

$$S: \mathcal{H}(G, K) \rightarrow \mathcal{H}(\mathbb{T}(F), \mathbb{T}(\mathcal{O}_F))[q^{\pm 1/2}] = \mathbb{Z}[q^{\pm 1/2}][X_*(\mathbb{T})]$$
taking
$$(Sf)(t) := \delta(t)^{1/2}\int_U f(tu)\,du$$
:::

::: theorem
**Theorem (Classical Satake Isomorphism)**

$$\mathcal{H}(G, K)[q^{\pm 1/2}] \xrightarrow{S} \mathcal{H}(\mathbb{T}(F), \mathbb{T}(\mathcal{O}_F))^W[q^{\pm 1/2}] = R(\hat{G})\otimes \mathbb{Z}[q^{\pm 1/2}]$$
This is a ring isomorphism, where the left-hand side uses convolution and the right-hand side uses the Grothendieck ring multiplication (tensor product).
:::

::: remark
Rough idea: Cartan decomposition is $W$-part, i.e., $P_+$ is a Weyl chamber, whereas $\mathcal{H}(T, T')$ is the whole $X_*(T)$.
:::

Explicitly, $\mathcal{H}(\mathbb{T}(F), \mathbb{T}(\mathcal{O}_F))^W \cong \mathbb{Z}[X_*(\mathbb{T})]^W \cong \mathbb{Z}[X^*(\hat{T})]^W \cong R(\hat{G})$.

**Proof sketch:**

1. $(Sf) \in \mathcal{H}(\mathbb{T}(F), \mathbb{T}(\mathcal{O}_F))$ since $\mathbb{T}(\mathcal{O}_F) \subset K$ and the definition.

2. **Coefficient calculation:** Let $K\lambda(\pi)K = \bigsqcup x_i K$ for finitely many $\{x_i\} \subset G$, and using the Iwasawa decomposition $G = BK$, let $x_i = t_i u_i$ uniquely. We have
   $$(S1_{K\lambda(\pi)K})(\mu(\pi)) = q^{-\langle \mu, \rho\rangle}\#\{i \mid t_i \equiv \mu(\pi) \bmod \mathbb{T}(\mathcal{O}_F)\}$$

3. **Case $\mu = \lambda$:** $a_\lambda(\lambda) \geq \delta(\lambda(\pi))^{1/2}$, by taking one representative $x_0 = t_0 = \lambda(\pi) = \mu(\pi)$.

4. **Other cases:** the value is nonzero only if $\mu \leq \lambda$. This gives injectivity and surjectivity via comparison with the highest weight basis.

5. **$W$-invariant:** Via the orbital integral. [Cartier79] gives
   $$(Sf)(t) = D(t)\int_{G/T}f(gmg^{-1})\,d\overline{g}$$
   where $D(t) = |\det(\operatorname{Ad}(t)-1) \mid \operatorname{Lie}(G)/\operatorname{Lie}(T)|^{1/2}$. This is $W$-invariant.

6. **Surjectivity and injectivity:** $S1_{K\lambda(\pi)K}$ form a basis of the Weyl group invariant. The uniqueness of the highest weight representation and its multiplicity $1$ gives the bijection.

7. **Ring homomorphism:** Via the adjunction $\langle Sf, \chi\rangle = \langle f, \pi_\chi\rangle$ where $\chi$ is an unramified character of $T$, and $\pi_\chi$ is the unique irreducible spherical subquotient of $\operatorname{Ind}_B^G(\delta^{1/2}\chi)$. Using $\chi(xy) = \chi(x)\chi(y)$, one shows $Sf * Sg = S(f*g)$. $\square$

### Summary

$$\mathcal{H}(G, K) \xLeftrightarrow{\delta_B\int_U} \mathbb{C}[X_*(\mathbb{T})]^W \xLeftrightarrow{V \mapsto \operatorname{Tr}(V)} \mathbb{C}[X^*(\hat{T})]^W \cong \operatorname{Rep}_{\text{alg}}(\hat{G}) \otimes_\mathbb{Z} \mathbb{C}$$

This leads to

$$\left(\text{irred. spherical reps of } G\right) \xleftrightarrow{V\mapsto V^K} \left(\text{simple } \mathcal{H}(G,K)\text{-modules}\right) \xleftrightarrow{\text{Satake}} \left(\text{characters of } \mathbb{C}[X_*(\mathbb{T})]^W\right) \xleftrightarrow{} \left(\text{unramified characters of } T \text{ up to } W\right)$$

Furthermore, via the Chevalley restriction theorem $\mathbb{C}[G]^G = \mathbb{C}[T]^W$:

$$\left(\text{irred. spherical reps of }G\right) \xleftrightarrow{} \hat{T}/W \xleftrightarrow{\text{Chevalley}} \left(\hat{G}\text{-conj. classes of semisimple elements of }\hat{G}\right)$$

::: corollary
Given embedding $\hat{T} \subset \hat{G}$, there is a bijection between isomorphism classes of irreducible spherical representations of $G$ and **semisimple unramified Galois representations** $\phi: W_F \rightarrow \hat{G}$ up to $\hat{G}$-conjugacy. (This is called the L-parameter, for the basic case — without adding $\operatorname{SL}_2(\mathbb{C})$.)
:::

*Proof.* $W_F/I_F \cong \mathbb{Z}$ with the generator $\operatorname{Frob}_q$, so taking $\phi(\operatorname{Frob}_q) := s_\pi \in \hat{G}$, the Satake parameter, gives the map. The converse is $\phi(\operatorname{Frob}_q) \in \hat{G}/\hat{G}\text{-conjugacy}$. $\square$

Reasons for using $\delta^{1/2}$:
1. $I(\chi) := \operatorname{Ind}_B^G(\delta^{1/2}\chi)$ makes $\widetilde{I(\chi)} \cong I(\chi^{-1})$.
2. $\chi$ unitary implies $I(\chi)$ unitary.
3. The image of the Satake transform is $W$-invariant.

### Examples

::: example
**$G = \operatorname{GL}_n$:**

1. $T = D_n$ (diagonal torus).
2. $P_+ = \{(c_1 \geq \cdots \geq c_n)\}$.
3. $\mathbb{C}[X_*(T)]^W = \mathbb{C}[x_1^\pm, \cdots, x_n^\pm]^W$ where $W = S_n$ permutes $x_i$.
4. $\delta_B(\operatorname{diag}(t_1, \cdots, t_n)) = |t_1|^{n-1}|t_2|^{n-3}\cdots|t_n|^{-n+1}$.
5. For $\lambda = (n, 0) \in P_+$ and $n = 2$: representatives for $K\lambda(\pi)K = \bigsqcup_i Kg_i$ are parametrized by $\mathbb{P}^1(\mathcal{O}_F/\pi^n\mathcal{O}_F)$. The coset counting gives $q^n$-many for $\operatorname{diag}(\pi^n, 1)$, $(q^{n-1}-q^{n-2})$-many for $\operatorname{diag}(\pi^{n-1}, \pi)$, etc. Then
   $$S1_{K\lambda(\pi)K} = q^{n/2}(1_{\operatorname{diag}(\pi^n, 1)T(K)} + 1_{\operatorname{diag}(1, \pi^n)T(K)}) + (q^{n/2}-q^{n/2-1})(\cdots) + \cdots$$
   which is obviously $W$-invariant.
6. $\hat{T} = D_n \subset \operatorname{GL}_n = \hat{G}$. Each irreducible spherical representation corresponds to a Satake parameter, giving the local L-function $\prod_{i=1}^n (1 - \chi(d_i\pi)q^{-s})^{-1}$.
:::

::: example
**$G = \operatorname{Sp}_4$:**

1. $T = \operatorname{diag}(a, b, a^{-1}, b^{-1})$.
2. $P_+ = \{a\epsilon_1 + b\epsilon_2 \mid a \geq b \geq 0\}$. From simple roots $\alpha = e_1 - e_2$, $\beta = 2e_2$, and coroots $\alpha^\vee = \epsilon_1 - \epsilon_2$, $\beta^\vee = \epsilon_2$: $P_+ = \{a\alpha^\vee + b\beta^\vee \mid a \leq b \leq 2a\}$.
3. $\Phi = \{\pm e_1 \pm e_2, \pm 2e_1, \pm 2e_2\}$ and $\Phi^\vee = \{\pm \epsilon_1 \pm \epsilon_2, \pm \epsilon_1, \pm \epsilon_2\}$. Weyl group $W = S_2 \ltimes (\mathbb{Z}/2\mathbb{Z})^2$. $\mathbb{C}[X_*(T)]^W = \mathbb{C}[x^\pm, y^\pm]^W$ where $x = \alpha^\vee$, $y = \beta^\vee$.

   > Note: (1) $\operatorname{Sp}_4$ is simply connected, so $\alpha^\vee$ and $\beta^\vee$ span $X_*(T)$. (2) The "minus" convention is, in reality, inverse.

4. $\delta_B(\operatorname{diag}(a, b, a^{-1}, b^{-1})) = |a|^4|b|^2$.
5. For $\lambda = (1, 0) = \epsilon_1$:
   $$S1_{K\lambda(\pi)K} = q^2(x + x^{-1} + y + y^{-1}) + (q^2 - 1)$$
6. $\hat{T} \subset \hat{G} = \operatorname{SO}(5)(\mathbb{C})$.
:::

## Quasi-Split Case: Satake Isomorphism

Setting: (reductive model exists) [Cartier](http://cm2vivi2002.free.fr/PC-biblio/PC-44.pdf) and [Casselman](https://personal.math.ubc.ca/~cass/research/pdf/miyake.pdf).

### Notations

Most general setting (1–6), and from 7, the unramified case only:

1. $\mathbb{S} \subset \mathbb{M} \subset \mathbb{P} \subset \mathbb{G}$: maximal split torus, $\mathbb{M} = C_\mathbb{G}(\mathbb{S})$, $\mathbb{P}$ is the minimal parabolic with $\mathbb{P} = \mathbb{M}\mathbb{U}$.
2. $\delta_P: m \mapsto |\det \operatorname{Ad}_{\operatorname{Lie} U}(m)|_F$ and $u \mapsto 1$.
3. $(G, S)$ construct roots $\Phi \subset X^*(S)$, and $P$ constructs $\Delta \subset \Phi$.
4. $S^\circ := \mathbb{S}(\mathcal{O}_F)$, $M^\circ := \mathbb{M}(\mathcal{O}_F)$, $K = \mathbb{G}(\mathcal{O}_F)$.
5. $\Lambda(M) := \operatorname{Im}(M \xrightarrow{\operatorname{ord}} X_*(M))$ so that $1 \rightarrow M^\circ \rightarrow M \rightarrow \Lambda(M) \rightarrow 1$ and $X_*(S) \subset \Lambda(M) \subset X_*(M)$.
6. $\mathbb{T} := \operatorname{Spec} \mathbb{C}[\Lambda(M)]$ so $\mathbb{T}(\mathbb{C}) = \operatorname{Hom}(\Lambda(M), \mathbb{C}^\times) = \operatorname{Hom}(M/M^\circ, \mathbb{C}^\times)$: the unramified characters of $M$.
7. $F'/F$ a finite unramified extension (minimal) such that $\mathbb{G}$ splits, and $\sigma \in \Gamma = \operatorname{Gal}(F'/F)$ the Frobenius. ${}^L G := \hat{G}(\mathbb{C}) \rtimes \operatorname{Gal}(F'/F)$.
8. $W := N_G(S)/Z_G(S) = N_G(S)/M$: the relative Weyl group.

::: remark
When $\mathbb{G}$ is unramified over $F$, $\Lambda(M) = X_*(S)$.

$\mathbb{G}$ being quasi-split implies $Z_\mathbb{G}(\mathbb{S}) = \mathbb{M}$ is a maximal torus (defined over $F$, but not $F$-split).
:::

::: remark
**Semidirect product and the Galois action on $\hat{G}$.**

The Galois group action $\operatorname{Gal}(\overline{F}/F) \rightarrow \operatorname{Aut}(\hat{G})$ comes from:
- The $F$-structure action on $\mathbb{G}(F)$ naturally gives $\operatorname{Gal} \rightarrow \operatorname{Aut}(\operatorname{Dink}(\mathbb{G}_{\overline{F}}))$.
- The pinning elements give a splitting map, and taking the dual root datum yields $\operatorname{Aut}(\operatorname{Dink}^\vee) \rightarrow \operatorname{Aut}(\hat{G})$.
:::

::: definition
**Definition (Weil group)**

The Weil group of a local field $F$, $W_F$, is the extension
$$1 \rightarrow I_F \rightarrow W_F \rightarrow \mathbb{Z} \cong \langle \operatorname{Frob}_q\rangle \rightarrow 1$$
with a subspace topology of $\operatorname{Gal}(\overline{F}/F)$.

For $F = \mathbb{R}$: $W_\mathbb{R} = \mathbb{C}^\times \sqcup j\mathbb{C}^\times$ for $j^2 = 1$ and $jcj^{-1} = \overline{c}$. For $F = \mathbb{C}$: $W_\mathbb{C} := \mathbb{C}^\times$.
:::

### Satake Transform (Quasi-Split)

$$\mathcal{H}(G, K) \xLeftrightarrow{\int_U} \mathcal{H}(M, M^\circ)^W \cong \mathbb{C}[\Lambda(M)]^W$$

For the unramified case:
1. **FACT:** $S/S^\circ \cong M/M^\circ$, thus $\mathcal{H}(G, K) \cong \mathcal{H}(S, S^\circ)^W$.
2. $S \hookrightarrow M \hookrightarrow G$ induces $\hat{M} \twoheadrightarrow \hat{S}$, giving $\operatorname{Hom}(M/M^\circ, \mathbb{C}^\times)/W \cong \operatorname{Hom}(S/S^\circ, \mathbb{C}^\times)/W \cong (W\text{-orbits of } \hat{S})$.
3. **Twisted $\hat{G}$-action** by $\sigma = \operatorname{Frob}_q$ on $\hat{G} \rtimes \{\sigma\}$: $(h^{-1}, 1)(g, \sigma)(h, 1) = (h^{-1}g\sigma(h), \sigma)$.
4. **Langlands' Lemma:** bijection between semisimple $\hat{G}$-conjugacy classes in $\hat{G} \rtimes \{\operatorname{Frob}_q\}$ and $W$-orbits in $\hat{S}$.

::: corollary
There is a bijection between isomorphism classes of irreducible spherical representations of $G$ and **${}^L G$-conjugacy classes of unramified L-parameters** $\phi: W_F \rightarrow {}^L G$ such that $\phi(\lambda) = (*, \overline{\lambda}) \in \hat{G} \rtimes \operatorname{Gal}(F'/F)$ for all $\lambda \in W_F$.
:::

::: remark
L-parameter is the same as the $1$-cocycle of $W_F \rightarrow \hat{G}$.
:::

### Examples

::: example
**$G = \operatorname{SU}_3$:** Take $H = \begin{pmatrix} 0 & 0 & 1 \\ 0 & -1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$ and $G = \operatorname{SU}(3, H)$.

- $S = \operatorname{diag}(y, y^{-1}, 1)$ and $M = (y, \overline{y}^{-1}, \overline{y}y^{-1})$.
- Type $BC_1$, with roots $\{\pm e_1\} \cong A_1$. Weyl group $W = \mathbb{Z}/2\mathbb{Z}$.
- $\widehat{\operatorname{SU}_3} = \operatorname{PGL}_3$, with Galois group $\{1, \sigma\}$ acting on the $A_2$ Dynkin diagram by swapping vertices.
- $\hat{M} := \mathbb{G}_m^3/\Delta(\mathbb{G}_m) \twoheadrightarrow \hat{S} \cong \mathbb{C}^\times$ given by $[\operatorname{diag}(t_1, t_2, t_3)] \mapsto t_1/t_2$.
- **Explicit description:** $X_*(M)(\overline{F}) = \mathbb{Z}\langle e_1, e_2 \rangle$ with $\sigma e_i = e_j$ (Galois action). The inclusion $X_*(S) \rightarrow X_*(M)$ sends $\lambda \mapsto e_1 + e_2$ (Galois-invariant), and $\hat{M} \rightarrow \hat{S}$ is $(z_1, z_2) \mapsto z_1 z_2$.
- $\sigma: \hat{G} \rightarrow \hat{G}$ acts by $X \mapsto H^T X^{-1} H^{-1}$, which on $\hat{M}$ gives $(a, b, c) \mapsto (b^{-1}, a^{-1}, c^{-1})$. However, Langlands' lemma says we only need to consider elements of $\hat{S}$.
- For each unramified character $\chi: S(F)/S(\mathcal{O}_F) \cong \mathbb{Z} \rightarrow \mathbb{C}^\times$, the corresponding element in $\hat{S}$ is $\chi(\pi)$, which corresponds to any $(t_1, t_2, t_3) \in \hat{M}$ with $t_1/t_2 = \chi(\pi)$.
:::

::: example
**$D^\times$ (Division algebra)** ([Short reference](https://ymsc.tsinghua.edu.cn/__local/D/8A/9F/D08C08396179733DFF0502E2E24_345E7462_4F161.pdf))

$D$ is a central division algebra over $F$ with $[D:F] = n^2$ and $G = D^\times$, then $G \times_F \breve{F} \cong \operatorname{GL}_n \times_F \breve{F}$.

Now, $A = Z_G = \mathbb{G}_m$ and $M = Z_G(A) = G$, so $W = 1$. In addition, $K = \mathcal{O}_D^\times$ and $\Lambda(M) = \Lambda(G) = D/\mathcal{O}_D^\times \cong \mathbb{Z}$. This concludes
$$\mathcal{H}(D^\times, \mathcal{O}_D^\times) \cong \mathbb{C}[\mathbb{Z}]$$
This is direct, as $\mathcal{O}_D^\times \backslash D^\times / \mathcal{O}_D^\times \cong \mathbb{Z}$ and $\int_U = \int_1$, so this is the identity map. (Since $P = M = G$ is unimodular, $\delta_P = 1$.)
:::

---

*Notes taken from the seminar talk. See [Gross (1998)](https://people.math.harvard.edu/~gross/preprints/sat.pdf), [Conrad](http://virtualmath1.stanford.edu/~conrad/JLseminar/Notes/L4.pdf), and [Cartier (1979)](http://cm2vivi2002.free.fr/PC-biblio/PC-44.pdf) for references.*
