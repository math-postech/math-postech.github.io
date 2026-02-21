# Content Creation Guidelines for MATH203 Lecture Notes

**Status**: Active
**Author**: Extracted from existing lecture notes analysis
**Date**: 2026-02-21
**Purpose**: Guide AI and human collaborators in creating course content that matches the author's unique pedagogical style

---

## Critical Warning

⚠️ **DO NOT write standard textbook content**

This course uses a **highly distinctive pedagogical approach** that differs fundamentally from standard linear algebra textbooks. Content that follows traditional textbook patterns will be rejected.

---

## 📚 Where to Find Source Materials

### CRITICAL: Use the Author's Original Materials

**DO NOT** start from standard textbooks. The author has created **original teaching materials** that embody the unique pedagogical approach.

### Primary Source Repositories

These repositories contain the author's original LaTeX materials from previous teaching:

#### 1. **Linear-Algebra-Notes** Repository
**Location**: `/home/ubuntu/repositories/Linear-Algebra-Notes/`

**Key directory**: `myoldtextbook/`

This contains the author's **original Chinese-language lecture notes** in LaTeX:

- **ChineseMatrixProduct.tex** — Matrix multiplication with ingredient table metaphor
- **ChineseRowOperations.tex** — Row/column operations with contravariant/covariant logic
- **ChineseSolvingEquation.tex** — Solving systems using cross-filling
- **ChineseLinearEquations.tex** — Linear equations framework
- **CrossFilling.tex** — The core computational method
- **Projection.tex** — Projection theory
- **Diagonalization.tex** — Spectral decomposition approach
- **LagurangePolynomial.tex** — Lagrange interpolation for eigenvalues

**These are the PRIMARY references** — they contain the original pedagogical innovations that differentiate this course from standard textbooks.

#### 2. **Linear-Algebra-Slides** Repository
**Location**: `/home/ubuntu/repositories/Linear-Algebra-Slides/`

**Contains**: Lecture slide decks (LaTeX Beamer format) covering all major topics:

- `computationalStrategies.tex` — Cross-filling method
- `lineartransformation.tex` — Linear transformations
- `compatibleprojections.tex` — Compatible projection families
- `SpectralDecomposition.tex` — Spectral decomposition
- `determinant.tex` — Determinants
- `nullspace.tex` — Null space and column space
- `orthogonalprojections.tex` — Orthogonal projections
- And 50+ more topic-specific slides

**Use these for**: Visual presentation ideas, structured examples, topic flow

#### 3. **Linear-Algebra-Exercises** Repository
**Location**: `/home/ubuntu/repositories/Linear-Algebra-Exercises/`

**Contains**:
- Past exam problems (2023 midterm/final)
- Homework assignments
- Problem sets aligned with the cross-filling approach

**Use these for**: Creating exercises that match the pedagogical style

### How to Use These Materials

#### Step 1: Read the Relevant LaTeX Source

Before writing a new lecture note section, **read the corresponding `.tex` file** from the repositories above.

**Example**: Before writing about row operations, read:
```bash
/home/ubuntu/repositories/Linear-Algebra-Notes/myoldtextbook/ChineseRowOperations.tex
```

**Pay attention to**:
- The logical flow (why before what)
- The metaphors used (ingredient tables, production chains)
- The level of detail (all intermediate steps shown)
- The examples chosen (concrete numbers with semantic meaning)

#### Step 2: Extract the Core Logic

From the LaTeX source, extract:
1. **The motivating question** (why does this matter?)
2. **The concrete scenario** (ingredient table example)
3. **The logical derivation** (step-by-step reasoning)
4. **The general principle** (named after derivation)
5. **The formal statement** (proposition)

#### Step 3: Adapt to Markdown + MathJax

Convert the LaTeX pedagogical approach to the current Markdown format:
- Replace LaTeX environments with `::: proposition`, `::: example`, `::: remark`
- Add emojis to concrete examples (🍃🍋🫘🐄 → 🥛☕🍵 → 🍱🍜)
- Use Mermaid diagrams for production pipelines
- Add color coding with `\color{red}`, `\color{blue}`, etc.

#### Step 4: Verify Against Current Notes

Compare your draft against the **existing lecture notes** in this repository:
- `/courses/MATH203/2026-spring/notes/matrix-arithmetic.md` (excellent example)
- `/courses/MATH203/2026-spring/notes/matrix-equations.md` (contravariant/covariant logic)

**Ensure consistency in**:
- Emoji usage (same emojis for same concepts)
- Metaphor extension (coffee shop throughout)
- Alert box types (`::: proposition`, `::: remark`, etc.)
- Forward connections (mention cross-filling)

### What These Materials Are NOT

❌ **These are NOT traditional textbooks**

The materials in `Linear-Algebra-Notes/myoldtextbook/` represent the author's **original pedagogy**:
- Contravariant/covariant logic (not in any standard textbook)
- Cross-filling method (instead of Gaussian elimination)
- Lagrange interpolation for eigenvalues (instead of eigenvector solving)
- Ingredient table metaphor (extended throughout)

**Do NOT** supplement with content from:
- Strang's "Linear Algebra and Its Applications"
- Lay's "Linear Algebra and Its Applications"
- Anton's "Elementary Linear Algebra"
- Any other standard textbook

If the author wanted standard textbook content, they would have assigned a standard textbook.

### Quick Reference: Topic to Source File Mapping

| Topic | Primary Source | Secondary Source |
|-------|---------------|------------------|
| Matrix multiplication | `ChineseMatrixProduct.tex` | `matrix.tex` (slides) |
| Row/column operations | `ChineseRowOperations.tex` | `rowoperation.tex` (slides) |
| Cross-filling method | `CrossFilling.tex` | `computationalStrategies.tex` (slides) |
| Solving equations | `ChineseSolvingEquation.tex` | — |
| Projection theory | `Projection.tex` | `projection.tex`, `compatibleprojections.tex` (slides) |
| Vector spaces | `Maps.tex`, `Transformation.tex` | `vectorspace.tex` (slides) |
| Basis & dimension | `Basis.tex` | — |
| Eigenvalues | `Eigentwo.tex`, `MotivationEigen.tex` | `eigenvalues.tex` (slides) |
| Spectral decomposition | `Diagonalization.tex` | `SpectralDecomposition.tex` (slides) |
| Lagrange interpolation | `LagurangePolynomial.tex` | `LagurangeInterpolationPolynomial.tex` (exercises) |
| Determinants | (check myoldtextbook) | `determinant.tex` (slides) |
| Orthogonality | `Orthogonal.tex` | `orthogonalprojections.tex` (slides) |

---

## The Author's Unique Pedagogical Philosophy

### Core Principles

1. **Concrete before abstract** — Spend 200+ lines on concrete examples before introducing variables
2. **Why before what** — Explain motivation and logic before stating formulas
3. **Logical principles over memorization** — Derive rules from fundamental relationships
4. **Visual richness** — Use emojis, colors, tables, diagrams (not just text and formulas)
5. **Pedagogical transparency** — Explicitly tell students when abstraction level changes
6. **Multiple perspectives** — Present every concept from 3-4 different viewpoints
7. **Forward connections** — Always link to cross-filling method and rank-one decomposition

---

## The Ingredient Table Framework (Central Metaphor)

**DO extend this metaphor throughout the course**:

### Three-Level Production Chain

```
Raw Materials (🍃🍋🫘🐄) → Semi-finished Products (🥛☕🍵) → Final Products (🍱🍜)
        Matrix A                    Matrix B                  Matrix C = AB
```

### Why This Metaphor Works

- **Physical coherence**: Tea uses leaves, milk uses cow (makes real-world sense)
- **Emojis as variables**: 🍃 is easier to track than $x_1$ in complex equations
- **Production relationships**: Naturally explains matrix multiplication as composition
- **Extensibility**: Can extend to linear independence, basis, rank, null space

### DO NOT Replace With

❌ Generic metaphors from other textbooks:
- "Function machines"
- "Coordinate transformations"
- "Socks and shoes" (cliché)
- One-off examples that don't extend

---

## The Crown Jewel: Contravariant vs. Covariant Logic

### This is the Author's Most Important Innovation

**Standard textbooks** say: "Perform row operation $r_i \to r_i + kr_j$" (mechanical rule)

**This author** explains: Row operations are **contravariant** because of the algebraic relationship `demand × material = constant`

### The Complete Framework

| Aspect | Rows (Materials) | Columns (Products) |
|--------|------------------|-------------------|
| **Relationship** | Multiplication: `demand × material = constant` | Equality: `product = recipe` |
| **Logic Type** | **Contravariant** (inverse) | **Covariant** (direct) |
| **Scaling** | Material ×k → Row ×(1/k) | Product ×k → Column ×k |
| **Addition** | Material $x_i → x_i + kx_j$ → Row $r_j → r_j - kr_i$ | Product $y_j → y_j + ky_i$ → Column $c_j → c_j + kc_i$ |

### Key Insight

**Rows work backwards. Columns work forwards.**

This explains the **single most confusing** aspect of linear algebra for beginners—why row operations use reciprocal scaling and opposite signs.

---

## Mandatory Content Structure

### For Every New Concept

#### Step 1: Concrete Scenario (200+ words)

- Use ingredient table metaphor with emojis
- Provide specific numbers (not variables)
- Pose a real-world question

**Example**:
```markdown
Suppose we decide to change our measurement unit for beans from kg to "double-bean" units...

**Original table**:
$$\begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Bean 🫘} & 0 & 4 \\
\end{array}$$
```

#### Step 2: Motivating Question

**Always ask explicitly**:
- "What happens when..."
- "How do we compute..."
- "Why does this work?"

#### Step 3: Work Through Logic

- Show ALL intermediate steps
- Use tables for multi-step calculations
- Color code variables: `\color{red}`, `\color{blue}`, `\color{green}`
- Provide running commentary

**Example**:
```markdown
**What happens to demand?** Original equation for Set 2:
$$2 \cdot \text{🍃} + 4 \cdot \text{🫘}$$

With new material $(2\text{🫘})$:
$$2 \cdot \text{🍃} + r_3 \cdot (2\text{🫘})$$

For equality: $r_3 \cdot (2\text{🫘}) = 4 \cdot \text{🫘}$

Therefore: $r_3 = 2$
```

#### Step 4: Name the Principle

**Only after showing the logic**:
```markdown
**Contravariant logic**: Material doubles → Demand halves
```

#### Step 5: Formal Proposition

```markdown
::: proposition
**Row Multiplication (Contravariant)**

When material $x_i$ changes to $kx_i$, perform row operation $r_i \to \frac{1}{k}r_i$
:::
```

#### Step 6: Worked Example

- Different from motivating example
- Show all steps again
- Multiple representations (table + formula + English)

#### Step 7: Meta-Commentary

```markdown
::: remark
**When to use this**

Use row multiplication when changing units of measurement...

**Connection to cross-filling**: This operation preserves rank...
:::
```

#### Step 8: Visual Summary

Provide a comparison table showing:
- What it computes
- Formula
- When to use it
- Connection to future topics

---

## Required Visual Elements

### Emojis as Semantic Markers

**DO** use emojis in mathematical expressions:
```latex
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} = \text{🍵}$$
```

**Rationale**: Visual pattern matching before symbolic understanding

### Color Coding in Derivations

Track variables through multi-step transformations:
```latex
$$\begin{pmatrix}
\color{red}a_{11} & \color{blue}a_{12} \\
\color{red}a_{21} & \color{blue}a_{22}
\end{pmatrix}$$
```

### Tables with Headers

Bridge concrete and abstract:
```latex
$$A = \begin{array}{c|ccc}
 & \text{🥛} & \text{☕} & \text{🍵} \\
\hline
\text{🍃} & 0 & 0 & 2 \\
\text{🍋} & 0 & 0 & 1 \\
\end{array}$$
```

### Quadruple Encoding

Every concept needs:
1. **Concrete table** (with emojis and numbers)
2. **Formula** (LaTeX with labeled variables)
3. **Verbal description** (English sentences)
4. **Visual diagram** (Mermaid flowchart or comparison table)

---

## The Four Perspectives Framework

### All Matrix Operations Presented from Multiple Views

**For matrix multiplication $AB = C$**:

| Perspective | Computes | Best For |
|-------------|----------|----------|
| **0. Entry-by-entry** | Single $c_{ij}$ | Direct calculation |
| **1. Column view** | Columns of $C$ | Solving $Ax=b$ |
| **2. Row view** | Rows of $C$ | Row space analysis |
| **3. Rank-one sum** | Full matrix | **Cross-filling, rank, factorization** |

**Perspective 3 is privileged** — it connects to the course's central method (cross-filling)

### DO Present All Perspectives

- Show concrete examples for each
- Explain when to use each one
- Create summary comparison table
- Emphasize rank-one perspective as foundation for future work

---

## Forbidden Patterns (AI Detection Signals)

### ❌ Abstraction-First

**BAD**:
```markdown
::: proposition
**Definition**: A linear transformation is a function $T: V \to W$ such that...
:::
```

**GOOD**:
```markdown
Consider our coffee shop. What happens when we scale all recipes by factor 2?

[200 words of concrete example]

We call this operation **scalar multiplication**.

::: proposition
**Formal Definition**: ...
:::
```

### ❌ Generic Metaphors

**BAD**: "Think of this like putting on socks then shoes..."

**GOOD**: Extend the ingredient table or use no metaphor

### ❌ Skipped Steps

**BAD**: "Therefore $c_{ij} = \sum_k a_{ik}b_{kj}$"

**GOOD**:
```markdown
For row 2, column 1:
- First beverage contributes: $(a_{21})(b_{11}) = (0)(2) = 0$
- Second beverage contributes: $(a_{22})(b_{21}) = (0)(0) = 0$
- Third beverage contributes: $(a_{23})(b_{31}) = (1)(1) = 1$
- **Total**: $c_{21} = 0 + 0 + 1 = 1$

**General formula**: $c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$
```

### ❌ Words that Signal Missing Explanation

Delete these words:
- "Clearly"
- "Obviously"
- "Trivially"
- "It can easily be shown"
- "It is straightforward to verify"

If something is genuinely clear, students won't need you to say it.

### ❌ Single Representation

**BAD**: Only showing formula

**GOOD**: Table + Formula + Verbal description + Visual diagram

### ❌ No Forward Connections

**BAD**: Section ends after explaining concept

**GOOD**:
```markdown
::: remark
**Looking ahead**

This rank-one perspective will become central when we introduce the **cross-filling method** in Week 2. The decomposition $AB = \sum \mathbf{a}_k \mathbf{b}_k^T$ shows that every matrix product is a sum of simple (rank-one) pieces—this is the foundation for computing rank and solving $Ax=b$.
:::
```

---

## Meta-Commentary (Pedagogical Transparency)

### Explicitly Signal Abstraction Shifts

When moving from concrete to abstract, use `::: remark` box:

```markdown
::: remark
**Change of Perspective**

In the previous sections, we used the ingredient table to understand **why** row operations work backwards. This contravariant logic arises from the multiplication relationship `demand × material = constant`.

**From this point forward**, we will work with abstract matrices $A$, $B$, $C$ without referring back to coffee shops. The logical principles remain the same, but we can now apply them more broadly.

This simplifies notation while preserving the deep understanding we've built.
:::
```

### Benefits

1. **Prevents confusion**: Students know when the metaphor stops
2. **Justifies abstraction**: Explains why we're switching modes
3. **Reinforces learning**: Summarizes what was learned from concrete phase
4. **Reduces cognitive load**: Students don't try to map abstract operations back to emojis

---

## Custom Alert Boxes (Semantic Markup)

### Five Alert Types

```markdown
::: proposition
**Formal mathematical statements**
:::

::: example
**Worked examples** (often nested in propositions)
:::

::: remark
**Meta-commentary, connections, when-to-use guidance**
:::

::: attention
**Critical concepts requiring special focus** (e.g., contravariant logic)
:::

::: problem
**Exercises**
:::
```

### Usage Guidelines

- **Proposition**: Only for formal statements (definitions, theorems)
- **Example**: Must include specific numbers and step-by-step work
- **Remark**: Use liberally for meta-commentary and connections
- **Attention**: Reserve for genuinely crucial concepts (1-2 per lecture)
- **Problem**: End-of-lecture exercises only

---

## Voice and Tone Requirements

### Active Voice Patterns

**DO**:
- "We now compute..."
- "Consider what happens when..."
- "Notice that the first row..."

**DON'T**:
- "The computation is performed..."
- "It can be shown that..."
- "It is noteworthy that..."

### Question-Driven Narrative

Start sections with questions:
```markdown
### How to Find $A^{-1}$?

From $AA^{-1} = I$, we need to reverse the production process...
```

Use rhetorical questions mid-explanation:
```markdown
**Why contravariant?** Because demand and material multiply to give a constant.
```

### Technical Precision with Conversational Flow

**Good example**:
> "This contravariant logic arises because demand and material have a **multiplication relationship**: the product `demand × material` must stay constant."

Combines:
- Technical term (contravariant)
- Conversational phrasing (arises because)
- Mathematical precision (multiplication relationship)
- Explicit formula (`demand × material = constant`)

---

## Review Checklist

### Before Submitting New Content

- [ ] Does it start with concrete ingredient table example (with emojis)?
- [ ] Are there specific numbers before abstract variables?
- [ ] Is there a motivating "why" question explicitly posed?
- [ ] Are ALL intermediate steps shown (no "clearly" or "obviously")?
- [ ] Is there color coding to track variables?
- [ ] Does formal proposition come **after** intuitive explanation?
- [ ] Are there 3-4 representations (table, formula, verbal, visual)?
- [ ] Is there meta-commentary explaining abstraction shifts?
- [ ] Are there forward connections to cross-filling and rank-one decomposition?
- [ ] Would a student understand this **without** referring to another textbook?

### Red Flags (Rewrite if Present)

1. Abstract definition before concrete example
2. Generic metaphor from standard textbook (socks, machines)
3. Formula without derivation showing where it comes from
4. Only one representation (formula alone)
5. No emojis or visual markers in worked examples
6. Words like "clearly", "obviously", "trivially"
7. No `::: remark` boxes explaining when/why to use this
8. No connection to cross-filling or future topics
9. Following standard textbook chapter ordering
10. No explanation of **why** rules work (just stating procedures)

---

## Special Cases

### When Ingredient Table Cannot Extend

If a concept genuinely cannot map to production (e.g., complex eigenvalues):

1. **Acknowledge the limitation**:
   ```markdown
   ::: remark
   The ingredient table metaphor has served us well for real-valued matrices, but now we encounter a limitation...
   :::
   ```

2. **Create equally rich alternative**:
   - If possible, develop new concrete scenario
   - If not, work with small numerical examples (2×2 matrices)
   - Still show all intermediate steps with color coding

3. **Maintain core principles**:
   - Why before what
   - Multiple perspectives
   - Quadruple encoding
   - Forward connections

### When Covering Traditional Topics

The course may need to cover standard linear algebra topics (determinants, eigenvalues). **Do not use standard textbook presentation**.

**Standard approach**:
1. Define determinant axiomatically
2. Derive properties
3. Apply to inverse computation

**This author's approach**:
1. Geometric motivation (volume scaling)
2. Concrete 2×2 and 3×3 examples
3. **Why** these specific axioms?
4. Connection to cross-filling and rank
5. Formal properties
6. Applications

Always ask: "What is the **logical principle** from which this rule derives?"

---

## Connection to Course Structure

### The Central Narrative Arc

**Week 1**: Four perspectives on matrix multiplication
↓
**Week 2-3**: **Cross-filling method** (rank-one decomposition)
↓
**Week 4-6**: Subspaces, rank, projection
↓
**Week 7+**: Spectral decomposition (A = ΣλᵢPᵢ)

### Every Section Must Connect to Rank-One Decomposition

The course's **unifying theme** is: **Matrices are sums of simple (rank-one) pieces**

- Matrix multiplication: $AB = \sum \mathbf{a}_k \mathbf{b}_k^T$
- Cross-filling: Peel off rank-one pieces iteratively
- Projection: Special rank-one matrices with $P^2 = P$
- Spectral decomposition: $A = \sum \lambda_i P_i$ (rank-one spectral projections)

**Every new concept** should include a `::: remark` box explaining how it connects to rank-one structure.

---

## Examples of Excellence

### Example 1: Contravariant Explanation

From `matrix-equations.md`:

```markdown
**Material redefinition**: $x_3 \to 2x_3$ (one "double bean" unit = two old bean units)

The new unit is **larger**, so we need **fewer** of them.

**What happens to demand?** Original equation for Set 2:
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} + 4 \cdot \text{🫘} + 1 \cdot \text{🐄}$$

With new material $(2\text{🫘})$:
$$2 \cdot \text{🍃} + 1 \cdot \text{🍋} + r_3 \cdot (2\text{🫘}) + 1 \cdot \text{🐄}$$

For equality: $r_3 \cdot (2\text{🫘}) = 4 \cdot \text{🫘}$

Therefore: $r_3 = 2$

The demand coefficient **decreased** from 4 to 2.

**Contravariant logic**: Material ×2 → Demand ×(1/2)
```

**Why this is excellent**:
- Concrete numbers with emojis
- Explicit algebraic constraint
- Physical intuition
- Step-by-step derivation
- Names principle only after showing logic

### Example 2: Four Perspectives Summary

From `matrix-arithmetic.md`:

| Perspective | What it computes | Formula | Best for |
|-------------|------------------|---------|----------|
| **0. Entry-by-entry** | Individual entries | $c_{ij} = \sum_k a_{ik}b_{kj}$ | Single entry |
| **1. Column view** | Columns of $C$ | $\mathbf{c}_j = A\mathbf{b}_j$ | Solving $Ax=b$ |
| **2. Row view** | Rows of $C$ | $\mathbf{c}_i^T = \mathbf{a}_i^T B$ | Row space |
| **3. Rank-one sum** | Full matrix | $C = \sum_k \mathbf{a}_k \mathbf{b}_k^T$ | **Cross-filling** |

**Why this is excellent**:
- Comparative presentation
- Practical guidance ("Best for")
- Complete formulas (not just verbal)
- Emphasizes connection to cross-filling

### Example 3: Meta-Commentary

From `matrix-equations.md`:

```markdown
::: remark
**Change of Perspective**

In the previous sections, we traced **how row/column operations arise from redefining materials/products**...

**From this point forward**, we **forget about materials/products** and focus only on matrices $A$, $B$, $C$...

This simplifies our work: we only track matrix changes, not material redefinitions.
:::
```

**Why this is excellent**:
- Explicitly signals transition
- Summarizes what was learned
- Justifies abstraction
- Prevents confusion

---

## Common Mistakes and Fixes

### Mistake 1: Using Standard Examples

**Wrong**:
> "Consider a rotation matrix that rotates vectors by angle θ..."

**Fixed**:
> "Consider our coffee shop. What if we want to produce a bundle that contains both Set 1 and Set 2?..."

### Mistake 2: Listing Rules Without Derivation

**Wrong**:
```markdown
**Three row operations**:
1. Swap two rows
2. Multiply a row by constant
3. Add multiple of one row to another
```

**Fixed**:
```markdown
**What happens when we change units of materials?**

[Example with beans doubling]

This leads to the **contravariant scaling rule**: Material ×k → Row ×(1/k)

[Example with bundled materials]

This leads to the **contravariant addition rule**: Material $x_i \to x_i + kx_j$ → Row $r_j \to r_j - kr_i$

::: proposition
**Elementary Row Operations**

The following preserve production relationships:
1. Swap rows (reorder materials)
2. Scale row by $\frac{1}{k}$ (when material scales by $k$)
3. Add $-k \times r_i$ to $r_j$ (when material $x_j$ → $x_j + kx_i$)
:::
```

### Mistake 3: No Visual Markers

**Wrong**:
```latex
$$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$$
```

**Fixed**:
```latex
$$A = \begin{array}{c|cc}
 & \text{Set 1 🍱} & \text{Set 2 🍜} \\
\hline
\text{Leaf 🍃} & 2 & 1 \\
\text{Bean 🫘} & 0 & 3
\end{array}$$
```

---

## Final Checklist

### Essential Elements (Must Have All)

1. ✅ Concrete scenario with ingredient table and emojis
2. ✅ Motivating "why" question explicitly stated
3. ✅ All intermediate steps shown (no "clearly")
4. ✅ Color coding or visual markers in derivations
5. ✅ Formal proposition **after** intuitive explanation
6. ✅ Multiple representations (table, formula, verbal, visual)
7. ✅ Meta-commentary on abstraction level (`::: remark`)
8. ✅ Forward connection to cross-filling and rank-one decomposition
9. ✅ Active voice and question-driven narrative
10. ✅ Would work as standalone reference (no external textbook needed)
11. ✅ **Link added to course index page** (`courses/MATH203/2026-spring/index.md`)

### Quality Standards

- **Concrete before abstract**: At least 200 words of concrete examples before variables
- **Visual richness**: At least 3 visual elements per major concept (emojis, colors, tables, diagrams)
- **Logical depth**: Every rule derives from fundamental principles (contravariant/covariant logic)
- **Multiple perspectives**: Every major concept shown from 3+ viewpoints
- **Forward integration**: Every section connects to course narrative arc

### Post-Creation Checklist

::: attention
**CRITICAL: Update Course Index Page**

After creating a new lecture note, you MUST update the course index page to add a link to it:

**File to update**: `/courses/MATH203/2026-spring/index.md`

**Location**: Under "## Lecture Notes" → "### Chapter X: ..."

**Format**:
```markdown
- [Lecture N: Title](./notes/filename.md) — Brief description
```

**Example**:
```markdown
- [Lecture 3: Cross-Filling Method](./notes/cross-filling.md) — Rank-one decomposition, cross-filling algorithm, sum ↔ product equivalence
```

**Why this matters**: Students access course content through the index page. A lecture note without a link is invisible to users.
:::

---

## Emergency Recovery: When AI Generates Standard Content

### Detection

If reviewing AI-generated content and it feels "textbook-ish", check for:
1. Abstraction before examples
2. Generic metaphors (socks, machines, transformations)
3. No emojis or colors
4. Single-representation explanations
5. No meta-commentary

### Recovery Process

**Do NOT** attempt to patch. **Rewrite from scratch** following the 8-step process:

1. Concrete scenario (ingredient table)
2. Motivating question
3. Work through logic (show all steps)
4. Name principle
5. Formal proposition
6. Worked example
7. Meta-commentary
8. Visual summary

**Time estimate**: Rewriting is faster than patching. Budget 2-3 hours per concept.

---

## Conclusion

This is not "standard linear algebra pedagogy".

This is a **unique pedagogical philosophy** that requires:
- Deep understanding of mathematical logic
- Commitment to the course narrative arc (cross-filling, rank-one)
- Patience with concrete examples (200+ words before abstraction)
- Visual creativity (emojis, colors, tables)
- Pedagogical transparency (meta-commentary)

**If you find yourself copying patterns from standard textbooks, stop and restart.**

The author has spent years developing this approach. Respect it by following the guidelines exactly.

---

**Last Updated**: 2026-02-21
**Related Documents**:
- `/pedagogical-style-analysis.md` — Full 10,000-word analysis
- `/courses/MATH203/2026-spring/notes/matrix-arithmetic.md` — Reference implementation
- `/courses/MATH203/2026-spring/notes/matrix-equations.md` — Reference implementation (contravariant/covariant)
