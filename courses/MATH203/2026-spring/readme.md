# MATH203-01: Applied Linear Algebra

## Course Information

- **Course Code**: MATH203-01
- **Credit**: 3.00
- **Semester**: 2026 Spring
- **Category**: Major required
- **Grading Scale**: G (Letter Grade)

### Instructor

- **Name**: Qirui Li
- **Department**: Department of Mathematics
- **Email**: qiruili@postech.ac.kr
- **Office Hours**: MON 13:00-13:50

### Schedule

- **Lectures**: MON, WED 12:30-13:45 @ MathBldg[402] Lecture Room
- **Recitations**: THU 18:00-18:50 @ MathBldg[206], [402], [104] Lecture Rooms

---

## Course Objectives

This course develops linear algebra through a **non-standard pedagogical approach** centered on the **cross-filling method** (rank-one decomposition) rather than traditional Gaussian elimination. Topics include:

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

### Weekly Schedule (26 sessions × 75 min)

#### Pre-Midterm: Chapters 1–3 (13 sessions)

| Week | Dates | Topics | Content |
|------|-------|--------|---------|
| **Week 1** | Feb 23, 25 | **Ch1 §1.1–1.2**: Matrix Arithmetic | Three views of AB=C (column, row, sum-of-rank-one). Row/column operations. Inverses. Elementary vs. non-invertible operations. |
| **Week 2** | ~~Mar 02~~, Mar 04 | **Ch1 §1.3**: Cross-Filling | The core method: rank-one peeling. Sum ↔ product equivalence (A = ΣRᵢ ⟺ A = UV). *Central idea of Chapter 1.* |
| **Week 3** | Mar 09, 11 | **Ch1 §1.3–1.4, Ch2 §2.1**: Solving Systems, Subspaces | Solving Ax=b via cross-filling. Solvability condition. Matrix as linear combination container. Two languages for subspaces. |
| **Week 4** | Mar 16, 18 | **Ch2 §2.1–2.2**: Vector Spaces | Null space (3 views), column space (3 views). Subspaces of AB: Col(AB)⊆Col(A), Null(B)⊆Null(AB). |
| **Week 5** | Mar 23, 25 | **Ch2 §2.3–2.4**: Four Subspaces, Basis & Dimension | Transpose, symmetric matrices. Four fundamental subspaces: Col(Aᵀ)⊥Null(A). Linear independence, span, basis, dimension (via trace). Rank. |
| **Week 6** | Mar 30, Apr 01 | **Ch2 §2.4–2.5, Ch3 §3.1**: Full Rank & Projections | Full rank ⟺ invertibility. Linear transformations. **Projection defined**: P²=P. The sunlight-and-floor model. Col(P), Null(P). |
| **Week 7** | Apr 06, 08 | **Ch3 §3.2–3.4**: Projection Theory + Review | AB-BA theorems. Cross-filling projections → rank-1 projections (automatic). Compatible families. The Grand Equivalence. **Midterm review.** |

**Midterm Exam Coverage**: Chapters 1–3 (through §3.4) — cross-filling, subspaces, rank, four fundamental subspaces, projection theory (P²=P, AB-BA theorems, compatible families).

---

#### Post-Midterm: Chapters 3 (finish), 4, 5, 6 (13 sessions)

| Week | Dates | Topics | Content |
|------|-------|--------|---------|
| **Week 9** | Apr 20, 22 | **Ch3 §3.5–3.7**: Constructing Projections | Oblique projection construction: P=B(AB)⁻¹A. Orthogonal projection: P=B(BᵀB)⁻¹Bᵀ. Least squares. Diagonal cross-filling → UUᵀ. Orthogonal diagonalization. |
| **Week 10** | Apr 27, 29 | **Ch4 §4.1–4.3**: Determinants | Geometric motivation. Four axioms (multilinear, alternating, normalized). Laplace expansion, cofactors. Adjugate: A\*A=(det A)I. |
| **Week 11** | May 04, 06 | **Ch4 §4.4–4.5**: Det Properties & Cayley-Hamilton | det(AB)=det(A)det(B). Inverse formula, Cramer's rule. Annihilating polynomials. **Cayley-Hamilton theorem**: det(tI−A) annihilates A. |
| **Week 12** | May 11, 13 | **Ch5 §5.1–5.2**: Eigenvalues & Lagrange Interpolation | Characteristic polynomial, principal minors, eigenvalues. **Lagrange interpolation**: fᵢ(xⱼ)=δᵢⱼ. Value-table philosophy: g(A) depends only on g(λ₁),...,g(λₘ). |
| **Week 13** | May 18, 20 | **Ch5 §5.3–5.4**: Spectral Decomposition | Complex numbers, simple-roots criterion for diagonalizability. **Spectral decomposition**: A=ΣλᵢPᵢ. Spectral formula: g(A)=Σg(λᵢ)Pᵢ. Eigenvectors from Pᵢ. |
| **Week 14** | ~~May 25~~, May 27 | **Ch5 §5.5–5.6**: Diagonalization & Applications | From spectral decomposition to diagonalization (cross-fill Pᵢ). Applications: Aⁿ=ΣλᵢⁿPᵢ, eᴬ=ΣeᵡⁱPᵢ, linear recurrences, similarity. |
| **Week 15** | Jun 01, 03 | **Ch6 §6.1–6.5**: Normal Matrices, PD, SVD + Review | Hermitian transpose A\*=Āᵀ. Normal matrices. Nilpotent-normal lemma → normal⟹diagonalizable. Unitary diagonalization. Positive definite matrices (λᵢ>0, MᵀM form, pivots>0). **SVD**: A=Ω₁ΣΩ₂. **Final review.** |

**Final Exam Coverage**: Chapters 1–6 (full course). Emphasis on Ch4–6 for new material.

---

## Homework

Weekly homework assignments will be posted here as the semester progresses. Assignments are worth **10% of your final grade**.

### Submission Guidelines

- Homework is typically due **one week after assignment**
- Submit via the course management system (details TBA)
- Late submissions may incur penalties

### Assignments

| Week | Due Date | Topics | Assignment |
|------|----------|--------|------------|
| Week 1 | TBA | Matrix arithmetic, inverses | TBA |
| Week 2 | TBA | Cross-filling decomposition | TBA |
| Week 3 | TBA | Solving linear systems | TBA |
| Week 4 | TBA | Vector spaces and subspaces | TBA |
| Week 5 | TBA | Basis, dimension, four subspaces | TBA |
| Week 6 | TBA | Full rank and projections | TBA |
| Week 7 | — | *Midterm review (no new homework)* | — |
| Week 9 | TBA | Constructing projections, least squares | TBA |
| Week 10 | TBA | Determinants and computation | TBA |
| Week 11 | TBA | Cayley-Hamilton theorem | TBA |
| Week 12 | TBA | Eigenvalues and Lagrange interpolation | TBA |
| Week 13 | TBA | Spectral decomposition | TBA |
| Week 14 | TBA | Matrix powers and exponentials | TBA |
| Week 15 | — | *Final review (no new homework)* | — |

*Homework problems will be posted weekly and may include textbook exercises, custom problems, and computational tasks.*

---

## Lecture Notes

Lecture notes will be added here as topics are covered.

<!-- Example structure:
- [Systems of Linear Equations](notes/systems-of-linear-equations.md)
- [Vector Spaces](notes/vector-spaces.md)
- [Eigenvalues and Eigenvectors](notes/eigenvalues-eigenvectors.md)
-->

---

## Support for Students with Disabilities

- **Taking Course**: interpreting services (for hearing impairment), mobility and preferential seating assistances (for developmental disability), note taking (for all kinds of disabilities), etc.
- **Taking Exam**: extended exam period (for all kinds of disabilities, if needed), magnified exam papers (for sight disability), etc.
- Please contact **Center for Students with Disabilities** at (279-2434) for additional assistance.

---

*Last updated: 2026-02-20*
