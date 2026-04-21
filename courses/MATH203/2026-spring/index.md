# MATH203: Applied Linear Algebra

## Course Information

- **Course Code**: MATH203-01
- **Credit**: 3.00
- **Semester**: 2026 Spring
- **Category**: Major required
- **Grading Scale**: G (Letter Grade)

### Instructor and Schedule

 **Note**: This course has **3 sections** taught by different instructors:
 - **Section 01** (Li Qirui <qiruili@postech.ac.kr>): MON, WED 12:30-13:45 @ MathBldg[402]
 - **Section 02** (Kim Younjin <younjinkim@postech.ac.kr>): TUE, THU 12:30-13:45 @ MathBldg[206]
 - **Section 03** (Yu Seungook <yso1460@postech.ac.kr>): TUE, THU 15:30-16:45 @ MathBldg[402]

 All sections share the same syllabus and exam schedule. Tutorial sessions: THU 18:00-18:50.

### Office Hours (Section 01)

- **Time**: Tuesdays 14:00–15:00
- **Location**: Room 219, Mathematical Science Building (Instructor's office)
- If you cannot attend, email [qiruili@postech.ac.kr](mailto:qiruili@postech.ac.kr) to arrange an alternative appointment.

### Tutorial Sessions

All tutorial sessions meet on **THU 18:00-18:50**. The first tutorial starts 2026-03-05(Thu). Locations differ by section:

- **Section 01** (Li Qirui): MathBldg [206], [402], [104]
  *TAs: Lee Minsu([104]), Yun Myeongun([402]), Minsu Jeon([206])*
- **Section 02** (Kim Younjin): Science BldgⅢ [109], [111], [113]
  *TAs: Kwon Jaeyoung([109]), Chungjae Jang([111]), Yong Seong Kwon([113])*
- **Section 03** (Yu Seungook): Hogil Kim Building [306], [307], [308]
  *TAs: Heejin Kim([306]), Yunjae Oh([307]), Seunghoon Jeong([308])*

<!--
TA Contact Information (internal reference, not displayed on page)
Updated: 2026-03-21

Section 01 (Q. Li):
  - 이민수 Lee Minsu [104]: crisophy@postech.ac.kr, 010-6390-1764 (통합7, 20232298, 지도교수: 신선영)
  - 윤명운 Yun Myeongun [402]: muyun@postech.ac.kr, 010-2474-6055 (통합2, 20252610, 지도교수: 장진우)
  - 전민수 Minsu Jeon [206]: minsujeon@postech.ac.kr, 010-9077-6093 (통합3, 20252998, 지도교수: 장진우)

Section 02 (Kim Younjin):
  - 권재영 Kwon Jaeyoung [109]: jykwon00@postech.ac.kr, 010-5458-7093 (통합3, 20252043, 지도교수: 장진우)
  - 장충재 Chungjae Jang [111]: jangggg7@postech.ac.kr, 010-2746-0912 (통합13, 20202723, 지도교수: 정재훈)
  - 권용성 Yong Seong Kwon [113]: ky5s27@postech.ac.kr, 010-5655-7433 (통합3, 20252805, 지도교수: 장진우)

Section 03 (Yu Seungook):
  - 김회진 Heejin Kim [306]: hjkim1123@postech.ac.kr, 010-3389-5597 (통합4, 20242432, 지도교수: 김진수)
  - 오윤재 Yunjae Oh [307]: yunoh@postech.ac.kr, 010-7533-5526 (통합14, 20192846, 지도교수: 차재춘)
  - 정승훈 Seunghoon Jeong [308]: jshmth@postech.ac.kr, 010-3315-7009 (통합7, 20232764, 지도교수: 장진우)

TA Changes (2026 Spring):
  - Section 01: 허담 (hertom@postech.ac.kr) → 이민수 (crisophy@postech.ac.kr)
  - Section 02: 김성태 (st0554@postech.ac.kr) → 권재영 (jykwon00@postech.ac.kr)
-->

### Tutorial Lecture Suggestions for TAs

Detailed teaching suggestions to help TAs prepare engaging tutorial sessions aligned with the course's unique pedagogical approach.

| Week | Date | Topics | Link |
|------|------|--------|------|
| **Week 2** | Mar 5 | Block Matrix Multiplication and Rank | [View Details](./tutorials/week02-block-matrix-rank.md) |
| **Week 3** | Mar 12 | Cancellation Properties and Rank Conditions | [View Details](./tutorials/week03-cancellation-rank.md) |
| **Week 4** | Mar 19 | Composition Properties of Cancelable Matrices | [View Details](./tutorials/week04-cancelable-composition.md) |
| **Week 5** | Mar 26 | Geometry of Rank, Inverses, and Subspace Complements | [View Details](./tutorials/week05-geometry-rank-inverse.md) |
| **Week 6** | Apr 2 | Projection Structure | [View Details](./tutorials/week06-projection-structure.md) |
| **Week 7** | Apr 9 | Projections and Left/Right Inverses + Diagonal Cross-Filling Review | [View Details](./tutorials/week07-projection-inverse-review.md) |
| **Week 9** | Apr 23 | Midterm Review + Block Cross-Filling | [View Details](./tutorials/week09-midterm-review-block-crossfilling.md) |

---

## Course Objectives

This course develops linear algebra through a **non-standard pedagogical approach** centered on the **cross-filling method** (rank-one decomposition) generalizing traditional Gaussian elimination. Topics include:

- **Matrix computation strategies**: Cross-filling, sum ↔ product equivalence (A = ΣRᵢ ⟺ A = UV)
- **Vector spaces and subspaces**: Null space, column space, the four fundamental subspaces
- **Projection theory**: Oblique and orthogonal projections, compatible families, spectral projections
- **Determinants**: Axiomatic properties, Laplace expansion, Cayley-Hamilton theorem
- **Eigenvalues and spectral decomposition**: Lagrange interpolation approach to diagonalization
- **Normal matrices and applications**: Hermitian/unitary matrices, positive definiteness, SVD

**Pedagogical note**: This curriculum uses cross-filling and Lagrange interpolation as primary computational methods. Students familiar with traditional row-reduction and eigenvector solving will encounter alternative (and often more elegant) techniques here.

---

## Grading

| Component | Weight | Date/Notes |
|-----------|--------|------------|
| Homework | 10% | Weekly assignments |
| Midterm Exam | 40% | Mon Apr 13, 18:00-22:00, Main Auditorium |
| Final Exam | 50% | Mon Jun 08, 18:00-22:00 |

### Attendance Policy

Students with more than **25% unexcused absences** from lectures will receive an automatic **F grade**.

---

## Textbook
The textbook is only for the reference, we will follow our lecture notes in this website.

**Linear Algebra and its Applications, 4th edition (International Student Edition)**
- Author: Gilbert Strang
- Publisher: Brooks/Cole
- Year: 2006
- ISBN: 0-534-42200-4

---

## Course Plan

> **Important**: This course follows a non-standard pedagogical approach. We use **cross-filling** (rank-one decomposition) instead of Gaussian elimination, and **Lagrange interpolation** for spectral decomposition instead of traditional eigenvector solving. See "Pedagogical note" above.

### Semester Calendar

| Date | Event |
|------|-------|
| Feb 23 | Semester begins |
| Mar 02 | *Holiday — Independence Movement Day* |
| Apr 13 (Mon) | **Midterm Exam** 18:00–22:00, Main Auditorium |
| Apr 13–17 | *Midterm week (no classes)* |
| May 05 | *Children's Day (does not affect Mon/Wed classes)* |
| May 25 | *Holiday — Buddha's Birthday* |
| Jun 08 (Mon) | **Final Exam** 18:00–22:00 |


#### Pre-Midterm: Chapters 1–3 (13 sessions)

| Week | Dates (Mon–Thu) | Topics | Content |
|------|-----------------|--------|---------|
| **Week 1** | 02-23 -- 02-26 | **Ch1 §1.1–1.2**: Matrix Arithmetic | Three views of AB=C (column, row, sum-of-rank-one). Row/column operations. Inverses. Elementary vs. non-invertible operations. |
| **Week 2** | ~~03-02~~ -- 03-05 | **Ch1 §1.3**: Cross-Filling | *~~03-02 Holiday~~*. The core method: rank-one peeling. Sum ↔ product equivalence (A = ΣRᵢ ⟺ A = UV). *Central idea of Chapter 1.* **HW1 assigned.** |
| **Week 3** | 03-09 -- 03-12 | **Ch1 §1.3–1.4, Ch2 §2.1**: Solving Systems, Subspaces | Linear independence, span, basis, dimension (via trace). Rank. Solving Ax=b via cross-filling. Solvability condition. Matrix as linear combination container. Two languages for subspaces. |
| **Week 4** | 03-16 -- 03-19 | **Ch2 §2.1–2.2**: Vector Spaces | Null space (3 views), column space (3 views). Subspaces of AB: Col(AB)⊆Col(A), Null(B)⊆Null(AB). |
| **Week 5** | 03-23 -- 03-26 | **Ch2 §2.3–2.4**: Four Subspaces, Basis & Dimension | Transpose, symmetric matrices. Four fundamental subspaces: Col(Aᵀ)⊥Null(A). **HW2 assigned.** |
| **Week 6** | 03-30 -- 04-02 | **Ch2 §2.4–2.5, Ch3 §3.1**: Full Rank & Projections | Full rank ⟺ invertibility. Linear transformations. **Projection defined**: P²=P. The sunlight-and-floor model. Col(P), Null(P). |
| **Week 7** | 04-06 -- 04-09 | **Ch3 §3.2–3.4**: Projection Theory + Review |  Theorems involving AB and BA. Cross-filling projections → rank-1 projections (automatic). Compatible families.  **Midterm review.** |
| **Week 8** | 04-13 -- 04-16 | **MIDTERM WEEK** | **Midterm Exam: Mon 04-13, 18:00–22:00, Main Auditorium.** No classes this week. |

**Midterm Exam Coverage**: Chapters 1–3 (through §3.4) — cross-filling, subspaces, rank, four fundamental subspaces, projection theory (P²=P, AB-BA theorems, compatible families).

---

#### Post-Midterm: Chapters 3 (finish), 4, 5, 6 (13 sessions)

| Week | Dates (Mon–Thu) | Topics | Content |
|------|-----------------|--------|---------|
| **Week 9** | 04-20 -- 04-23 | **Ch3 §3.5–3.7**: Constructing Projections | Uniqueness of projections. Oblique projection construction: P=B(AB)⁻¹A. Orthogonal projection: P=B(BᵀB)⁻¹Bᵀ. Inner diagonal cross-filling. Least squares. **HW3 assigned.** |
| **Week 10** | 04-27 -- 04-30 | **Ch4 §4.1–4.3**: Determinants | Geometric motivation. Four axioms (multilinear, alternating, normalized). Laplace expansion, cofactors. Adjugate: A\*A=(det A)I. |
| **Week 11** | 05-04 -- 05-07 | **Ch4 §4.4–4.5**: Det Properties & Cayley-Hamilton | det(AB)=det(A)det(B). Inverse formula, Cramer's rule. Annihilating polynomials. **Cayley-Hamilton theorem**: det(tI−A) annihilates A. *(05-05 Children's Day, does not affect Mon/Wed classes)* |
| **Week 12** | 05-11 -- 05-14 | **Ch5 §5.1–5.2**: Eigenvalues & Lagrange Interpolation | Characteristic polynomial, principal minors, eigenvalues. **Lagrange interpolation**: fᵢ(xⱼ)=δᵢⱼ. Value-table philosophy: g(A) depends only on g(λ₁),...,g(λₘ). **HW4 assigned.** |
| **Week 13** | 05-18 -- 05-21 | **Ch5 §5.3–5.4**: Spectral Decomposition | Complex numbers, simple-roots criterion for diagonalizability. **Spectral decomposition**: A=ΣλᵢPᵢ. Spectral formula: g(A)=Σg(λᵢ)Pᵢ. Eigenvectors from Pᵢ. |
| **Week 14** | ~~05-25~~ -- 05-28 | **Ch5 §5.5–5.6**: Diagonalization & Applications | *~~05-25 Holiday~~*. From spectral decomposition to diagonalization (cross-fill Pᵢ). Applications: Aⁿ=ΣλᵢⁿPᵢ, eᴬ=ΣeᵡⁱPᵢ, linear recurrences, similarity. |
| **Week 15** | 06-01 -- 06-04 | **Ch6 §6.1–6.5**: Normal Matrices, PD, SVD + Review | Hermitian transpose A\*=Āᵀ. Normal matrices. Nilpotent-normal lemma → normal⟹diagonalizable. Unitary diagonalization. Positive definite matrices (λᵢ>0, MᵀM form, pivots>0). **SVD**: A=Ω₁ΣΩ₂. **Final review.** |
| **Week 16** | 06-08 -- 06-11 | **FINAL WEEK** | **Final Exam: Mon 06-08, 18:00-22:00.** |

**Final Exam Coverage**: Chapters 1–6 (full course). Emphasis on Ch4–6 for new material.

---

## Homework

There are **4 homework assignments** worth **10% of your final grade** (2.5% each).

### Submission Guidelines

- Homework assignments are released on **Thursdays at 00:00 KST** and due **two weeks later on Thursdays at 18:00 KST** (before tutorial sessions)
- Preview versions will be shared on the **Monday before release** for instructor review
- **Submit to your assigned TA** — Each student will be assigned to one TA's tutorial section. Follow your TA's instructions for submission
- Late submissions may incur penalties

### Assignments

| No. | Preview (Monday) | Released (Thursday 00:00 KST) | Due Date (Thursday 18:00 KST) | Topics | PDF |
|-----|------------------|-------------------------------|----------------------------|--------|-----|
| **HW1** | Week 1 (Feb 23) | Week 2 (Mar 5) | Week 4 (Mar 19) | Ch1: Matrix computation, cross-filling, solving systems | [PDF](files/hw01.pdf) · [Solutions](files/hw01-sol.pdf) |
| **HW2** | Week 4 (Mar 16) | Week 5 (Mar 26) | Week 7 (Apr 9) | Ch2-3: Subspaces, basis & dimension, projections | [PDF](files/hw02.pdf) · [Solutions](files/hw02-sol.pdf) |
| **HW3** | Week 8 (Apr 20) | Week 9 (Apr 23) | Week 11 (May 7) | Ch4: Determinants, Cayley-Hamilton theorem | [PDF](files/hw03.pdf) (TBA) |
| **HW4** | Week 11 (May 4) | Week 12 (May 14) | Week 14 (May 28) | Ch5-6: Spectral decomposition, normal matrices, SVD | [PDF](files/hw04.pdf) (TBA) |

*Homework PDFs will be posted as they become available.*

---

## Lecture Notes

Lecture notes are organized by topic and will be added throughout the semester.

### Chapter 1: Matrix Computation Strategies

- [Lecture 1: Matrix Arithmetic](./notes/matrix-arithmetic.md) — Three views of $AB=C$, ingredient table interpretation
- [Lecture 2: Matrix Equations and Row Operations](./notes/matrix-equations.md) — Concept redefinition, row/column operations, solving equations, matrix inverses
- [Lecture 3: Cross-Filling Method](./notes/cross-filling.md) — Rank-one decomposition, cross-filling algorithm, sum ↔ product equivalence (A = ΣRᵢ ⟺ A = UV), rank definition (not yet well-defined) — **[📺 Video](https://youtu.be/HvFnAyk-Qtk)**

### Chapter 2: Vector Spaces and Subspaces

- [Lecture 4: Subspace and Linear Independence](./notes/subspace-and-linear-independence.md) — Two languages (descriptive vs constructive), subspaces, column space, linear independence, basis, dimension, well-definedness of rank
- [Lecture 5: Solving Linear Equations and Null Space](./notes/solving-equations-null-space.md) — Cross-filling method for solving $Ax=b$, null space (descriptive ↔ constructive), existence and uniqueness criteria, rank-nullity theorem preview
- [Lecture 6: Four Fundamental Subspaces](./notes/four-fundamental-subspaces.md) — Subspaces of matrix products, transpose and symmetric matrices, orthogonality relationships ($\operatorname{Col}(A^T) \perp \operatorname{Null}(A)$, $\operatorname{Col}(A) \perp \operatorname{Null}(A^T)$), rank = row rank = column rank

### Chapter 3: Linear Transformations and Projections

- [Lecture 7: Linear Transformation and Projection](./notes/linear-transformation-and-projection.md) — Linear transformations, projection operators ($P^2=P$), sunlight-floor geometric model, interchanging property ($\operatorname{Col}(P) = \operatorname{Null}(I-P)$), disjoint property, orthogonal projections ($P^2=P, P=P^T \Leftrightarrow \operatorname{Col}(P) \perp \operatorname{Null}(P)$) — **[Slides](files/lecture07-slides.pdf)**
- [Lecture 8: Cross-Filling Projections](./notes/cross-filling-projections.md) — **[Slides](files/lecture08-slides.pdf)** — Cross-filling a projection produces rank-1 projections automatically, $P=UV$ implies $VU=I$, rank(P) = trace(P), rank-1 characterization (any two of {rank=1, trace=1, $P^2=P$} imply third), $UV=I$ forces square matrices, full rank $\Leftrightarrow$ invertible
- [Lecture 9: Compatible Projections](./notes/compatible-projections.md) — **[Slides](files/lecture09-slides.pdf)** — Compatible families ($P_iP_j=0$), projection decomposition theorem (rank condition $\Rightarrow$ automatic compatibility), cross-filling and inner cross-filling methods, diagonal cross-filling for orthogonal projections
- [Lecture 10: Constructing Projections](./notes/constructing-projections.md) — **[Slides](files/lecture10-slides.pdf)** — Uniqueness theorem, construction formula $P = B(AB)^{-1}A$, orthogonal projection formula $P=B(B^TB)^{-1}B^T$, inner diagonal cross-filling, least squares

### Chapter 4: Applications

- Lecture 11: Linear Regression — **[Slides](files/lecture11-slides.pdf)** — Data as geometry (measurements → point in $\mathbb{R}^n$, model → subspace), error = distance, best fit = orthogonal projection, normal equation via simultaneous row operations, cross-filling connection

### Chapter 5: Determinants

- Lecture 12: Determinant — **[Slides](files/lecture12-slides.pdf)** — Cross-filling formula ($\det = a_1 \cdots a_n \cdot \det(S)$), zigzag loops and switching matrices, $\det(A^T) = \det(A)$, $\det(AB) = \det(A)\det(B)$ via block matrix deformation

---

## Support for Students with Disabilities

- **Taking Course**: interpreting services (for hearing impairment), mobility and preferential seating assistances (for developmental disability), note taking (for all kinds of disabilities), etc.
- **Taking Exam**: extended exam period (for all kinds of disabilities, if needed), magnified exam papers (for sight disability), etc.
- Please contact **Center for Students with Disabilities** at (279-2434) for additional assistance.

---

*Last updated: 2026-02-20*
