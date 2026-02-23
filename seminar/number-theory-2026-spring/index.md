# Number Theory Learning Seminar: Geometric Satake

<span style="color:red">**The page may experience slight update delays. For the most up-to-date information, please refer to [the github repository](https://github.com/math-postech/math-postech.github.io/tree/main/seminar/number-theory-2026-spring)**</span>

- Organizer: [Qirui Li](http://qirui.li)
- Location: Room 104, Mathematical Science Building, POSTECH (First meeting on 2/24 will be in Room 404)
- Time: 15:30-18:00, Tuesdays (except midterm and final exam weeks)

## About This Seminar

We will hold a number theory learning seminar this semester on **Geometric Satake**. The aim is to deepen our understanding of perverse sheaves and apply this framework to the study of Geometric Satake, a central topic for entering the theory of geometric Langlands and categorical Langlands.

The organizer will outline the schedule and deliver an introductory lecture at the first meeting.

All are welcome to attend.

## 2026 Spring Schedule

| Date       | Speaker | Topic | Notes |
|------------|---------|-------|-------|
| Feb. 24    | Qirui Li | Introduction and Schedule Overview | Room 404 |
|            |         |       |       |

*Schedule will be updated as talks are confirmed. Speakers will be assigned at the first meeting.*

## Tentative Plan

Our learning path follows a logical progression from classical foundations to modern developments, designed to be **compact yet complete** with closed logical structure.

### Part I: Classical Foundations (Weeks 1-2)

**Talk 1: Classical Satake Isomorphism**
- Reductive groups over local fields: $G(\mathbb{Q}_p)$, $G(\mathbb{F}_q((t)))$
- Spherical Hecke algebra: $\mathcal{H}(G, K) = C_c^\infty(K\backslash G/K)$
- Statement: $\mathcal{H} \simeq \mathbb{C}[X_*(T)]^W$
- Connection to unramified representations
- Motivation: First appearance of Langlands dual group

*References: [Gross](#gross), [Conrad](#conrad), Cartier*

**Talk 2: Geometric Motivation**
- Limitations of classical approach (only unramified case)
- From double cosets to moduli spaces: $K\backslash G/K \to \text{Gr}_G$
- Preview: $\text{Perv}_{G[[t]]}(\text{Gr}_G) \simeq \text{Rep}(G^\vee)$
- Core question: Why should this work?
- Brief history: Lusztig → Ginzburg → Mirkovic-Vilonen

*References: [Zhu (2016)](#zhu-intro), [Riche workshop notes](#riche-workshop)*

### Part II: Affine Grassmannian (Weeks 3-5)

**Talk 3: Affine Grassmannian - Construction and Moduli**
- Definition: $\text{Gr}_G = G((t))/G[[t]]$
- Three perspectives:
  - Coset space (algebraic)
  - Moduli of $G$-bundles with trivialization (geometric)
  - Lattices (for $\text{GL}_n$, explicit)
- ind-scheme structure
- $G((t))$-action and $G[[t]]$-equivariance
- Visualization: Points as lattices deforming

*References: [Zhu (2016)](#zhu-intro) §2, [Fang](#fang) §2, [Baumann-Riche](#baumann-riche) §1*

**Talk 4: Schubert Stratification**
- Affine Weyl group $W_{\text{aff}} = X_*(T) \rtimes W$
- Schubert cells: $\text{Gr}_\lambda$ indexed by $\lambda \in X_*(T)^+$
- Closure relations and dimensions
- Convolution diagram: $\text{Gr}_G \times^{G[[t]]} \text{Gr}_G \to \text{Gr}_G$
- Commutativity constraint

*References: [Zhu (2016)](#zhu-intro) §3, [Baumann-Riche](#baumann-riche) §2-3, [Mirkovic-Vilonen](#mv)*

**Talk 5: Examples and Geometry**
- $\text{SL}_2$ case: explicit description
- $\text{GL}_n$ case: lattice chains, determinant line bundle
- Based loop group and based affine Grassmannian
- Relation to affine flag variety
- Key examples without excessive computation

*References: [Zhu (2016)](#zhu-intro) §2.3-2.4, [Fang](#fang) §3*

### Part III: Perverse Sheaves (Weeks 6-7)

**Talk 6: Perverse Sheaves**
- Derived categories: $D^b_c(X, k)$
- t-structures and hearts
- Perverse sheaves = $\text{Perv}(X, k)$
- Key example: IC sheaves on Schubert varieties
- Why "perverse" = "cohomology-like"

*References: [Baumann-Riche](#baumann-riche) Appendix A, BBD: Faisceaux pervers, de Cataldo-Migliorini*

**Talk 7: Convolution of Perverse Sheaves**
- Category $\text{Perv}_{G[[t]]}(\text{Gr}_G, k)$: $G[[t]]$-equivariant perverse sheaves
- Convolution product via correspondence
- Associativity and commutativity constraint
- $(\text{Perv}_{G[[t]]}(\text{Gr}_G, k), \star)$ is a symmetric monoidal category
- Unit object = $\text{IC}_{\text{pt}}$

*References: [Baumann-Riche](#baumann-riche) §4-5, [Zhu (2016)](#zhu-intro) §4.3, [Mirkovic-Vilonen](#mv) §3*

### Part IV: Geometric Satake Equivalence (Weeks 8-10)

**Talk 8: Statement and Tannakian Formalism**
- Main theorem: Functor $\text{Rep}(G^\vee_k) \to \text{Perv}_{G[[t]]}(\text{Gr}_G, k)$ is an equivalence of symmetric monoidal categories
- Tannakian reconstruction: neutral monoidal category → $\text{Rep}(G)$
- Strategy:
  1. Show $\text{Perv}_{G[[t]]}(\text{Gr}_G, k)$ is Tannakian
  2. Identify the group as $G^\vee$
- Weight functors: $w_\lambda: \mathcal{F} \mapsto (i_\lambda)^*\mathcal{F}$

*References: [Baumann-Riche](#baumann-riche) §6, [Deligne-Milne](#deligne-milne), [Zhu (2016)](#zhu-intro) §4*

**Talk 9: Proof Part I - Neutrality**
- Fiber functor construction
- Key technical inputs:
  - Cohomology vanishing theorems
  - Dimension estimates
- Verification of exactness
- Fiber functor commutes with convolution

*References: [Baumann-Riche](#baumann-riche) §7-8, [Mirkovic-Vilonen](#mv)*

**Talk 10: Proof Part II - Identifying the Dual Group**
- Computing weight spaces
- Relating to representations of $G^\vee$
- Verification of commutativity constraint (crucial diagram chase)
- Completion of proof
- Remarks: Works for general coefficients, functoriality in $G$

*References: [Baumann-Riche](#baumann-riche) §9-11, [Zhu (2016)](#zhu-intro) §4.4*

### Part V: Extensions and Applications (Weeks 11-12)

**Talk 11: Beyond Complex Coefficients**
- Geometric Satake for p-adic groups
- Mixed characteristic case
- Affine Grassmannians for group schemes
- Application: Weil restriction and Shimura varieties
- Connection to arithmetic geometry

*References: [Zhu (2018)](#zhu-categorical) §2-3, [Zhu-Pappas](#zhu-pappas), Richarz*

**Talk 12: Categorical Traces and Towards Categorical Langlands**
- What are categorical traces?
- Application to Shimura varieties: Kottwitz conjecture, stabilization
- From geometric Satake to geometric Langlands
- Outlook:
  - Local geometric Langlands (Fargues-Scholze)
  - Categorical local Langlands
  - Current frontiers

*References: [Zhu (2018)](#zhu-categorical) §4-5, Gaitsgory-Lurie, [Fargues-Scholze](#fargues-scholze)*

## References

### Primary References

<span id="zhu-intro"></span>
**[Zhu16]** Xinwen Zhu, *An introduction to affine Grassmannians and the geometric Satake equivalence*, 2016.
📄 [arXiv:1603.05593](https://arxiv.org/abs/1603.05593)

<span id="baumann-riche"></span>
**[BR17]** Pierre Baumann, Simon Riche, *Notes on the geometric Satake equivalence*, 2017.
📄 [arXiv:1703.07288](https://arxiv.org/abs/1703.07288) | [PDF (IRMA)](https://irma.math.unistra.fr/~baumann/Satake-luminy.pdf)

<span id="zhu-categorical"></span>
**[Zhu18]** Xinwen Zhu, *Geometric Satake, categorical traces, and arithmetic of Shimura varieties*, 2018.
📄 [arXiv:1810.07375](https://arxiv.org/abs/1810.07375)

### Supplementary References

<span id="gross"></span>
**[Gro98]** Benedict H. Gross, *On the Satake isomorphism*, 1998.
📄 [PDF (Harvard)](https://people.math.harvard.edu/~gross/preprints/sat.pdf)

<span id="conrad"></span>
**[Con]** Brian Conrad, *Spherical representations and the Satake isomorphism*.
📄 [PDF (Stanford)](http://virtualmath1.stanford.edu/~conrad/JLseminar/Notes/L4.pdf)

<span id="fang"></span>
**[Fan22]** Xingzhu Fang, *An introduction to geometric Satake equivalence*, UChicago REU 2022.
📄 [PDF](http://math.uchicago.edu/~may/REU2022/REUPapers/Fang,Xingzhu.pdf)

<span id="mv"></span>
**[MV07]** Ivan Mirković, Kari Vilonen, *Geometric Langlands duality and representations of algebraic groups over commutative rings*, Ann. of Math. (2) 166 (2007), no. 1, 95–143.
📄 [arXiv:math/0401222](https://arxiv.org/abs/math/0401222) | [Journal](https://doi.org/10.4007/annals.2007.166.95)

<span id="deligne-milne"></span>
**[DM82]** Pierre Deligne, James S. Milne, *Tannakian categories*, Hodge Cycles, Motives, and Shimura Varieties, Lecture Notes in Mathematics, vol. 900, Springer-Verlag, 1982, pp. 101–228.
📄 [PDF (jmilne.org)](https://www.jmilne.org/math/xnotes/tc2022.pdf)

<span id="zhu-pappas"></span>
**[ZP13]** Xinwen Zhu, Georgios Pappas, *Local models of Shimura varieties and a correction of some Shimura varieties*, 2013.
📄 [arXiv:1302.5123](https://arxiv.org/abs/1302.5123)

<span id="riche-workshop"></span>
**[Ric]** Simon Riche, *Workshop on Geometric Satake - Talk 0: Introduction*.
📄 [PDF (CNRS)](https://riche.perso.math.cnrs.fr/Notes-workshop/workshop-Talk0.pdf)

<span id="fargues-scholze"></span>
**[FS21]** Laurent Fargues, Peter Scholze, *Geometrization of the local Langlands correspondence*, 2021.
📄 [arXiv:2102.13459](https://arxiv.org/abs/2102.13459)

## Notes

- **[Introduction](./notes/introduction)** (Feb 24) - Overview of geometric Satake equivalence: motivation, main theorem, key concepts, and learning path

*Additional notes from individual talks will be posted as they become available.*
