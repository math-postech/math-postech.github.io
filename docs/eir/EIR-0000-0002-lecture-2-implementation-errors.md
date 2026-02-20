# EIR-0000-0002: Lecture 2 Notes Implementation Errors

**Date**: 2026-02-20
**Agent**: engineer-agent
**Context**: Writing Lecture 2 notes on row/column operations and matrix inverses

---

## Error 1: Lost Track in Example 1.4/1.5 (Finding Inverses)

### What I Wrote (WRONG)

```markdown
Example 1.4:
$$\begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

After r₂ → r₂ - r₁:
$$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$$
```

**Problem**: Both sides changing! Left side says $(2,1; 2,1)^{-1}$, then $(2,1; 1,1)^{-1}$. These are **different values**!

### What I Should Have Written (CORRECT)

```markdown
Example 1.11:
$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

After r₂ → r₂ - r₁:
$$A^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}^{-1} \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$$
```

**Fix**: Left side is **always $A^{-1}$** (the constant value we're solving for). Only the right side representation changes.

### Root Cause

I didn't understand the **invariant principle**. The value $A^{-1}$ never changes - we're just transforming how "$A$" and "$I$" are represented until it becomes obvious.

Compare to Example 1.10 (solving $AB = C$):
- Left side: **always $B$** (constant)
- Right side: $A^{-1}C$ representation changes

Same pattern! But I lost track of this.

---

## Error 2: Critical Notation Error in Example 1.1 (Row Multiplication)

### What I Wrote (WRONG)

```markdown
Material: bean → 2bean (doubles)
Row operation: r₃ → 2r₃
Result: (0, 4) → (0, 2)
```

**Problem**: $2 \times (0, 4) = (0, 8)$, not $(0, 2)$!

Internal contradiction between:
- Notation: "multiply by 2"
- Arithmetic: $4 \to 2$ (division by 2!)

### What I Should Have Written (CORRECT)

```markdown
Material: bean → 2bean (doubles)
Row operation: r₃ → (1/2)r₃
Result: (0, 4) → (0, 2)
```

**Explanation**: $4 \cdot \text{bean} = 2 \cdot (2\text{bean})$ (contravariant!)

### Root Cause

I **fundamentally misunderstood** the contravariant logic:

**Contravariant** means:
- Material changes by factor $k$
- Demand changes by factor $\frac{1}{k}$ (reciprocal!)
- Row operation: $r_i \to \frac{1}{k}r_i$

I kept confusing "what the row operation does" with "how the material changes."

---

## Error 3: Used "Similarly" Shortcut for Column Operations

### What I Wrote (WRONG)

After explaining row operations in detail:

```markdown
> [!RMK]
> Column operations work the same way but apply to products.
```

Then jumped to examples without detailed explanation.

### What I Should Have Done (CORRECT)

**Write out every column operation example in full detail**:
- Example 1.4: Column Multiplication with complete table + arithmetic
- Example 1.5: Column Switching with tables
- Example 1.6: Column Addition with complete derivation

### Root Cause

**Laziness**. I thought "the pattern is obvious" but:
- Readers need **reconfirmation** through repetition
- The contravariant/covariant distinction is subtle
- Seeing both sides fully explained **side by side** helps understanding

User's instruction: "请你不要吝啬把column也写出来，哪怕笔记看起来重复"

---

## Error 4: Didn't Draw Ingredient Tables in This Notes

### What I Wrote (WRONG)

Examples referenced tables from Lecture 1, assuming readers would remember or look back.

### What I Should Have Done (CORRECT)

**Redraw complete ingredient tables with emojis** in Lecture 2:
- Matrix $A$ with 🍃🍋🫘🐄 → 🥛☕🍵
- Matrix $B$ with 🥛☕🍵 → 🍱🍜
- Matrix $C = AB$ with 🍃🍋🫘🐄 → 🍱🍜

Show the **complete context** in each lecture so it's self-contained.

### Root Cause

I didn't **stand in the reader's shoes**.

Assumptions I made:
- "Readers will remember from Lecture 1"
- "It's obvious what the tables look like"
- "I don't need to repeat"

Reality:
- Readers may jump to Lecture 2 directly
- Visual tables with emojis are **essential** for understanding
- Repetition aids learning

---

## Error 5: Used Augmented Matrix Notation

### What I Wrote (WRONG)

```markdown
Write augmented matrix:
$$\left[ A \mid C \right]$$

Perform row operations to transform into:
$$\left[ I \mid C' \right]$$
```

### What I Should Have Written (CORRECT)

```markdown
$$B = A^{-1}C$$

After r₁ ↔ r₂:
$$B = (A')^{-1}C'$$

...

Final:
$$B = I^{-1}C'' = C''$$
```

**Keep equations throughout. Never switch to augmented matrix.**

### Root Cause

I used **standard textbook conventions** without understanding user's requirement:

> "所有的推导必须是等式，不能是叙述"

Augmented matrix is a **notational shorthand**, not an equation. User wants **explicit equations** at every step.

---

## Error 6: Took Too Long to Understand Contravariant/Covariant

### The Struggle

Initial attempts:
1. Version 1: Didn't distinguish row vs column logic at all
2. Version 2: Mentioned "similar" without explaining difference
3. Version 3: Tried to explain but got the notation backwards (Error 2)
4. Final version: Correct after reading ChineseLinearEquations.tex

### What I Missed

The **fundamental difference**:

| | Rows (Materials) | Columns (Products) |
|--|------------------|-------------------|
| **Relationship** | Multiplication: demand × material = constant | Equation: product = recipe |
| **Logic** | **Contravariant** (inverse) | **Covariant** (direct) |

**Rows**: $r \cdot x = \text{constant}$ (multiplication on same side)
- If $x \to kx$, then $r \to \frac{r}{k}$ (reciprocal!)

**Columns**: $y = c$ (equation, opposite sides)
- If $y \to ky$, then $c \to kc$ (same!)

### Root Cause

User said it directly: "你要承认你自己的线性代数知识是残缺不全的"

I thought I understood linear algebra, but I **didn't understand the ingredient table interpretation** deeply. I was stuck in the "standard abstract definition" mindset.

---

## Technical Lessons Learned

### 1. Invariant Principle

When writing $B = A^{-1}C$ and performing row operations:
- **Left side is constant**: always write $B = ...$
- **Right side representation changes**: $A^{-1}C$ transforms
- **Value never changes**: the equality is preserved

### 2. Contravariant vs Covariant

**Not just a terminology difference - a fundamental logic difference:**

**Contravariant** (rows):
- Relationship: $r_i \cdot x_i = \text{total}$ (product relationship)
- Change: $x_i \to kx_i$ implies $r_i \to \frac{r_i}{k}$
- Operation: $r_i \to \frac{1}{k}r_i$

**Covariant** (columns):
- Relationship: $y_j = c_j$ (equation relationship)
- Change: $y_j \to ky_j$ implies $c_j \to kc_j$
- Operation: $c_j \to kc_j$

### 3. Equation-Based Derivation

User's requirement: **"所有的推导必须是等式"**

Means:
- ✅ Write: $B = A^{-1}C \xrightarrow{ops} B = (A')^{-1}C'$
- ❌ Don't write: $[A \mid C] \to [I \mid B]$

Every step must be an **explicit equation**.

### 4. Self-Contained Lectures

Each lecture should be **self-contained**:
- Redraw all necessary context (ingredient tables)
- Don't assume readers remember previous lectures
- Don't assume readers read lectures in order

### 5. No Shortcuts in Pedagogy

User: "不要吝啬"

When teaching:
- ✅ Write both row AND column examples fully
- ✅ Show all arithmetic steps
- ✅ Draw all tables
- ❌ Don't say "similarly" and skip
- ❌ Don't assume "it's obvious"

**Repetition is not waste - it's reinforcement.**

---

## Process Lessons

### When to Ask for Clarification

I should have **stopped and discussed** when:
- I first wrote Example 1.4 and felt confused about the notation
- I noticed the arithmetic didn't match the operation name
- User said "你完全没有懂行变换"

**Don't push forward when confused. Stop and clarify.**

### How to Use Reference Materials

When user says "请仔细阅读我之前的教材":
1. **Read the exact section** pointed to
2. **Understand the pattern** before writing
3. **Ask for confirmation** of understanding
4. **Then write** following that pattern

Don't:
- Skim the reference
- Think "I understand" without checking
- Start writing immediately

---

## Quality Standards Extracted

From this experience, user's quality standards are:

1. **Mathematical rigor**: Every step must be an equation, notation must match arithmetic
2. **Pedagogical completeness**: No shortcuts, full details, self-contained
3. **Conceptual clarity**: Explain WHY (contravariant/covariant logic), not just WHAT
4. **Reader-centric**: Stand in reader's shoes, don't assume knowledge
5. **Consistency**: Follow established patterns from reference materials exactly

---

## Files Changed

- `/courses/MATH203/2026-spring/notes/matrix-equations.md` - Complete rewrite (3 iterations)

## Related Documents

- See `/docs/dr/DR-0000-0001-flexible-alerts-for-math-content.md` for earlier implementation
- ChineseLinearEquations.tex - Reference material that clarified contravariant/covariant
- RowOperations.tex - Reference for equation-based style
