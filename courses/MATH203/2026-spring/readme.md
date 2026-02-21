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

### Tutorial Sessions

All tutorial sessions meet on **THU 18:00-18:50**. Locations differ by section:

- **Section 01** (Li Qirui): MathBldg [206], [402], [104]
  *TAs: Tom Huh, Yun Myeongun, Minsu Jeon*
- **Section 02** (Kim Younjin): Science BldgⅢ [109], [111], [113]
  *TAs: Kim Seongtae, Chungjae Jang, Yong Seong Kwon*
- **Section 03** (Yu Seungook): Hogil Kim Building [306], [307], [308]
  *TAs: Yunjae Oh, Seunghoon Jeong, Hoejin Kim*

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
| Midterm Exam | 40% | Mon Apr 13, 18:00-22:00 |
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
| Apr 13 (Mon) | **Midterm Exam** 18:00–22:00 |
| Apr 13–17 | *Midterm week (no classes)* |
| May 05 | *Children's Day (does not affect Mon/Wed classes)* |
| May 25 | *Holiday — Buddha's Birthday* |
| Jun 08 (Mon) | **Final Exam** 18:00–22:00 |


#### Pre-Midterm: Chapters 1–3 (13 sessions)

| Week | Dates (Mon–Thu) | Topics | Content |
|------|-----------------|--------|---------|
| **Week 1** | 02-23 -- 02-26 | **Ch1 §1.1–1.2**: Matrix Arithmetic | Three views of AB=C (column, row, sum-of-rank-one). Row/column operations. Inverses. Elementary vs. non-invertible operations. |
| **Week 2** | ~~03-02~~ -- 03-05 | **Ch1 §1.3**: Cross-Filling | *~~03-02 Holiday~~*. The core method: rank-one peeling. Sum ↔ product equivalence (A = ΣRᵢ ⟺ A = UV). *Central idea of Chapter 1.* |
| **Week 3** | 03-09 -- 03-12 | **Ch1 §1.3–1.4, Ch2 §2.1**: Solving Systems, Subspaces | Solving Ax=b via cross-filling. Solvability condition. Matrix as linear combination container. Two languages for subspaces. **HW1 assigned.** |
| **Week 4** | 03-16 -- 03-19 | **Ch2 §2.1–2.2**: Vector Spaces | Null space (3 views), column space (3 views). Subspaces of AB: Col(AB)⊆Col(A), Null(B)⊆Null(AB). |
| **Week 5** | 03-23 -- 03-26 | **Ch2 §2.3–2.4**: Four Subspaces, Basis & Dimension | Transpose, symmetric matrices. Four fundamental subspaces: Col(Aᵀ)⊥Null(A). Linear independence, span, basis, dimension (via trace). Rank. |
| **Week 6** | 03-30 -- 04-02 | **Ch2 §2.4–2.5, Ch3 §3.1**: Full Rank & Projections | Full rank ⟺ invertibility. Linear transformations. **Projection defined**: P²=P. The sunlight-and-floor model. Col(P), Null(P). **HW2 assigned.** |
| **Week 7** | 04-06 -- 04-09 | **Ch3 §3.2–3.4**: Projection Theory + Review |  Theorems involving AB and BA. Cross-filling projections → rank-1 projections (automatic). Compatible families.  **Midterm review.** |
| **Week 8** | 04-13 -- 04-16 | **MIDTERM WEEK** | **Midterm Exam: Mon 04-13, 18:00-22:00.** No classes this week. |

**Midterm Exam Coverage**: Chapters 1–3 (through §3.4) — cross-filling, subspaces, rank, four fundamental subspaces, projection theory (P²=P, AB-BA theorems, compatible families).

---

#### Post-Midterm: Chapters 3 (finish), 4, 5, 6 (13 sessions)

| Week | Dates (Mon–Thu) | Topics | Content |
|------|-----------------|--------|---------|
| **Week 9** | 04-20 -- 04-23 | **Ch3 §3.5–3.7**: Constructing Projections | Oblique projection construction: P=B(AB)⁻¹A. Orthogonal projection: P=B(BᵀB)⁻¹Bᵀ. Least squares. Diagonal cross-filling → UUᵀ. Orthogonal diagonalization. |
| **Week 10** | 04-27 -- 04-30 | **Ch4 §4.1–4.3**: Determinants | Geometric motivation. Four axioms (multilinear, alternating, normalized). Laplace expansion, cofactors. Adjugate: A\*A=(det A)I. **HW3 assigned.** |
| **Week 11** | 05-04 -- 05-07 | **Ch4 §4.4–4.5**: Det Properties & Cayley-Hamilton | det(AB)=det(A)det(B). Inverse formula, Cramer's rule. Annihilating polynomials. **Cayley-Hamilton theorem**: det(tI−A) annihilates A. *(05-05 Children's Day, does not affect Mon/Wed classes)* |
| **Week 12** | 05-11 -- 05-14 | **Ch5 §5.1–5.2**: Eigenvalues & Lagrange Interpolation | Characteristic polynomial, principal minors, eigenvalues. **Lagrange interpolation**: fᵢ(xⱼ)=δᵢⱼ. Value-table philosophy: g(A) depends only on g(λ₁),...,g(λₘ). |
| **Week 13** | 05-18 -- 05-21 | **Ch5 §5.3–5.4**: Spectral Decomposition | Complex numbers, simple-roots criterion for diagonalizability. **Spectral decomposition**: A=ΣλᵢPᵢ. Spectral formula: g(A)=Σg(λᵢ)Pᵢ. Eigenvectors from Pᵢ. **HW4 assigned.** |
| **Week 14** | ~~05-25~~ -- 05-28 | **Ch5 §5.5–5.6**: Diagonalization & Applications | *~~05-25 Holiday~~*. From spectral decomposition to diagonalization (cross-fill Pᵢ). Applications: Aⁿ=ΣλᵢⁿPᵢ, eᴬ=ΣeᵡⁱPᵢ, linear recurrences, similarity. |
| **Week 15** | 06-01 -- 06-04 | **Ch6 §6.1–6.5**: Normal Matrices, PD, SVD + Review | Hermitian transpose A\*=Āᵀ. Normal matrices. Nilpotent-normal lemma → normal⟹diagonalizable. Unitary diagonalization. Positive definite matrices (λᵢ>0, MᵀM form, pivots>0). **SVD**: A=Ω₁ΣΩ₂. **Final review.** |
| **Week 16** | 06-08 -- 06-11 | **FINAL WEEK** | **Final Exam: Mon 06-08, 18:00-22:00.** |

**Final Exam Coverage**: Chapters 1–6 (full course). Emphasis on Ch4–6 for new material.

---

## Homework

There are **4 homework assignments** worth **10% of your final grade** (2.5% each).

### Submission Guidelines

- Homework assignments are released on **Thursdays at 00:00 KST** and due **two weeks later on Fridays at 23:59 KST**
- Preview versions will be shared on the **Monday before release** for instructor review
- Submit via the course management system (PLMS)
- Late submissions may incur penalties

### Assignments

| No. | Preview (Monday) | Released (Thursday 00:00 KST) | Due Date (Friday 23:59 KST) | Topics | PDF |
|-----|------------------|-------------------------------|----------------------------|--------|-----|
| **HW1** | Week 1 (Feb 23) | Week 2 (Mar 5) | Week 4 (Mar 19) | Ch1: Matrix computation, cross-filling, solving systems | [PDF](files/hw01.pdf) (TBA) |
| **HW2** | Week 4 (Mar 16) | Week 5 (Mar 26) | Week 7 (Apr 9) | Ch2-3: Subspaces, basis & dimension, projections | [PDF](files/hw02.pdf) (TBA) |
| **HW3** | Week 8 (Apr 20) | Week 9 (Apr 23) | Week 11 (May 7) | Ch4: Determinants, Cayley-Hamilton theorem | [PDF](files/hw03.pdf) (TBA) |
| **HW4** | Week 11 (May 4) | Week 12 (May 14) | Week 14 (May 28) | Ch5-6: Spectral decomposition, normal matrices, SVD | [PDF](files/hw04.pdf) (TBA) |

*Homework PDFs will be posted as they become available.*

---

## Lecture Notes

Lecture notes are organized by topic and will be added throughout the semester.

### Chapter 1: Matrix Computation Strategies

- [Lecture 1: Matrix Arithmetic](./notes/matrix-arithmetic.md) — Three views of $AB=C$, ingredient table interpretation
- [Lecture 2: Matrix Equations and Row Operations](./notes/matrix-equations.md) — Concept redefinition, row/column operations, solving equations, matrix inverses

<!--
Upcoming notes:
 [Week 2-3: Cross-Filling Method](notes/cross-filling-method.md)
 [Week 3-4: Solving Linear Systems](notes/solving-linear-systems.md)
-->

---

## Support for Students with Disabilities

- **Taking Course**: interpreting services (for hearing impairment), mobility and preferential seating assistances (for developmental disability), note taking (for all kinds of disabilities), etc.
- **Taking Exam**: extended exam period (for all kinds of disabilities, if needed), magnified exam papers (for sight disability), etc.
- Please contact **Center for Students with Disabilities** at (279-2434) for additional assistance.

---

*Last updated: 2026-02-20*
