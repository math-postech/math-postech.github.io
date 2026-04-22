# Lecture 11: Linear Regression

> **Topics**: §3.7 Application — Data as Geometry, Error = Distance, Best Fit = Orthogonal Projection, Normal Equation, Cross-Filling Connection
> **Date**: Apr 27 – Apr 30, 2026

---

## Overview

In Lecture 10, we derived the orthogonal projection formula $P = B(B^TB)^{-1}B^T$ and used inner diagonal cross-filling to extract orthogonal bases. Those tools were elegant but abstract.

Today we see them **at work** on a real problem: given noisy measurements, find the straight line that fits the data best. The key insight is a **translation** between two worlds:

| Candle Problem | Geometry in $\mathbb{R}^n$ |
|---|---|
| $n$ measurements | A point $\mathbf{b} \in \mathbb{R}^n$ |
| A linear model $h(t) = a + bt$ | A subspace $W \subseteq \mathbb{R}^n$ |
| Data has errors | $\mathbf{b}$ is not on $W$ |
| Sum of squared errors | Distance$^2$ from $\mathbf{b}$ to $W$ |
| **Find the best line** | **Orthogonal projection of $\mathbf{b}$ onto $W$** |

---

## 1. The Candle Problem

You light a candle and measure its height at three times:

| Time (hours) | Height (cm) |
|---|---|
| $t = 0$ | $30$ |
| $t = 1$ | $22$ |
| $t = 2$ | $8$ |

The candle gets shorter over time. **Can we predict when it burns out?**

Our instinct: draw a straight line through the data. But many lines are possible — which one is the **best**?

### 1.1 What Does "Best" Mean?

Pick any candidate line. At each data point, measure the **vertical gap** between the data and the line.

::: example
**Example 1.1: Measuring Gaps**

For the line $h = 33 - 13t$:

| $t$ | Actual $h$ | Line value | Gap |
|---|---|---|---|
| $0$ | $30$ | $33$ | $-3$ |
| $1$ | $22$ | $20$ | $+2$ |
| $2$ | $8$ | $7$ | $+1$ |

The **error** of this line is the sum of squared gaps:

$$\text{Error} = (-3)^2 + (+2)^2 + (+1)^2 = 9 + 4 + 1 = 14$$
:::

A different line gives different gaps and a different error.

**Goal**: Find the line whose error is the **smallest possible**.

We could try thousands of lines and pick the winner. But there is a **geometric shortcut**: translate the problem into $\mathbb{R}^3$, where the answer becomes an orthogonal projection.

---

## 2. Data as Geometry

### 2.1 Three Measurements = One Point in $\mathbb{R}^3$

Our experiment produced three numbers: $h_1 = 30$, $h_2 = 22$, $h_3 = 8$.

Think of three chopsticks standing upright (one for each measurement time). Place a marble on each chopstick at the measured height. The **positions of all three marbles together** describe our experiment.

Now tilt the three chopsticks into three perpendicular axes. The three marble positions become **one point** in 3-dimensional space:

$$\mathbf{b} = \begin{pmatrix} 30 \\ 22 \\ 8 \end{pmatrix} \in \mathbb{R}^3$$

::: remark
**Two Different Pictures**

Do not confuse the **scatter plot** (3 dots in 2D, each dot = one measurement) with the **data space** (1 dot in 3D, the dot = all measurements together). These are two completely different spaces.
:::

### 2.2 The Model = A Plane in $\mathbb{R}^3$

**What is "perfect data"?** If the candle burns at a perfectly constant rate, the three marble heights would lie exactly on a straight line in the scatter plot. But which straight line?

Any line $h(t) = a + bt$ is determined by two parameters: intercept $a$ and slope $b$. For our measurement times $t = 0, 1, 2$, the perfect data would be:

$$\begin{pmatrix} h(0) \\ h(1) \\ h(2) \end{pmatrix} = \begin{pmatrix} a \\ a + b \\ a + 2b \end{pmatrix} = a\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + b\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$$

Every perfect-data point is a **linear combination** of two fixed vectors. All such linear combinations form a **plane** through the origin in $\mathbb{R}^3$:

$$W = \operatorname{Col}(B), \qquad B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$$

### 2.3 What Is the Matrix $B$? (The Evaluation Matrix)

The matrix $B$ is not arbitrary — it has a very specific meaning. We are fitting the model $h(t) = a \cdot f_1(t) + b \cdot f_2(t)$ where $f_1(t) = 1$ (constant function) and $f_2(t) = t$ (linear function) are the **basis functions** of our model.

The matrix $B$ is the **evaluation matrix**: we evaluate each basis function at each measurement point.

$$B_{ij} = f_j(x_i) \qquad \text{(row }i\text{ = measurement point }x_i\text{, column }j\text{ = basis function }f_j\text{)}$$

For our candle with measurement points $x_0 = 0,\; x_1 = 1,\; x_2 = 2$ and basis functions $f_1(t) = 1,\; f_2(t) = t$:

$$B = \begin{pmatrix} f_1(x_0) & f_2(x_0) \\ f_1(x_1) & f_2(x_1) \\ f_1(x_2) & f_2(x_2) \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$$

::: attention
**How to Read $B$**

| | $f_1(t) = 1$ | $f_2(t) = t$ |
|---|---|---|
| $x_0 = 0$ | $1$ | $0$ |
| $x_1 = 1$ | $1$ | $1$ |
| $x_2 = 2$ | $1$ | $2$ |

- **Rows** are indexed by the **measurement points** $x_0, x_1, x_2$ (where you put the chopsticks)
- **Columns** are indexed by the **basis functions** $f_1, f_2$ (what kind of model you chose)
- **Entry** $(i, j)$ is $f_j(x_i)$: evaluate basis function $j$ at measurement point $i$

**You choose two things**: where to measure (the $x_i$'s) and what model to fit (the $f_j$'s). Together they determine $B$.
:::

The first column $(1, 1, 1)^T$ is $f_1$ evaluated at all measurement points — **level marbles** (horizontal line $h = 1$). The second column $(0, 1, 2)^T$ is $f_2$ evaluated at all measurement points — **diagonal marbles** (the line $h = t$). Every line $h = a + bt$ produces perfect data $a \cdot \text{col}_1 + b \cdot \text{col}_2 \in \operatorname{Col}(B)$.

::: remark
**Chopstick Positions Define the Plane**

The same marble heights can be perfect or imperfect depending on **where the chopsticks are**. If we measured at $x_0 = 0,\; x_1 = 1,\; x_2 = 3$ instead of $x_0 = 0,\; x_1 = 1,\; x_2 = 2$, the second column of $B$ would be $(0, 1, 3)^T$ — a **different plane**.

Move the chopsticks → change the rows of $B$ → change the plane $W$.
:::

### 2.4 The Picture

Our data $\mathbf{b} = (30, 22, 8)^T$ is a point in $\mathbb{R}^3$. The set of all perfect data is a plane $W$. Since the candle didn't burn at a perfectly constant rate, $\mathbf{b}$ is **not on** $W$.

Each line in the scatter plot corresponds to one point on the plane $W$. Finding the best line means finding the point on $W$ **closest to $\mathbf{b}$**.

---

## 3. Error = Distance

### 3.1 The Connection

Consider any candidate line $h(t) = a + bt$ with perfect-data vector $\mathbf{p} = (a,\; a+b,\; a+2b)^T \in W$.

The three gaps are the entries of the difference vector $\mathbf{b} - \mathbf{p}$:

$$\mathbf{b} - \mathbf{p} = \begin{pmatrix} 30 - a \\ 22 - (a+b) \\ 8 - (a+2b) \end{pmatrix} = \begin{pmatrix} \text{gap}_1 \\ \text{gap}_2 \\ \text{gap}_3 \end{pmatrix}$$

The sum of squared gaps is:

$$\text{Error} = \text{gap}_1^2 + \text{gap}_2^2 + \text{gap}_3^2 = \|\mathbf{b} - \mathbf{p}\|^2$$

::: proposition
**Error = Distance Squared**

The sum of squared gaps in the scatter plot **equals** the squared distance in data space:

$$\text{Error} = \|\mathbf{b} - \mathbf{p}\|^2$$

Each gap becomes one coordinate of the difference vector. The Pythagorean theorem does the rest.
:::

### 3.2 Minimize Error = Minimize Distance

Finding the **best line** means finding the point $\mathbf{p} \in W$ closest to $\mathbf{b}$, i.e., minimizing $\|\mathbf{b} - \mathbf{p}\|$.

The closest point on a plane is always the **foot of the perpendicular**: the orthogonal projection of $\mathbf{b}$ onto $W$.

::: attention
**We Already Know How to Do This!**

From Lecture 10: the orthogonal projection onto $\operatorname{Col}(B)$ is $P = B(B^TB)^{-1}B^T$.

The candle problem is **solved by a projection**.
:::

---

## 4. Solving the Candle Problem

### 4.1 The Normal Equation

The best-fitting data is $P_W\mathbf{b} = B\hat{\mathbf{x}}$, where

$$\hat{\mathbf{x}} = (B^TB)^{-1}B^T\mathbf{b}$$

Writing $\hat{\mathbf{x}} = \begin{pmatrix} a \\ b \end{pmatrix}$, we get:

$$B\hat{\mathbf{x}} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a \\ a + b \\ a + 2b \end{pmatrix} = \begin{pmatrix} h(0) \\ h(1) \\ h(2) \end{pmatrix}$$

**Finding $\hat{\mathbf{x}}$ gives us the intercept $a$ and the slope $b$ directly.** We never need the $3 \times 3$ projection matrix $P_W$ — only the $2 \times 2$ system $B^TB\hat{\mathbf{x}} = B^T\mathbf{b}$.

::: proposition
**Theorem 4.1 (Normal Equation)**

Given data $\mathbf{b} \in \mathbb{R}^n$ and a model matrix $B$ ($n \times r$, full column rank), the least squares solution $\hat{\mathbf{x}}$ satisfies:

$$B^TB\,\hat{\mathbf{x}} = B^T\mathbf{b}$$

The best approximation is $B\hat{\mathbf{x}} = P_W\mathbf{b}$ where $P_W = B(B^TB)^{-1}B^T$.
:::

### 4.2 Step-by-Step Computation

::: example
**Example 4.1: Solving the Candle Problem**

**Our ingredients:**

$$B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}, \qquad \mathbf{b} = \begin{pmatrix} 30 \\ 22 \\ 8 \end{pmatrix}$$

**Step 1: Compute $B^TB$.**

$$B^TB = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 1+1+1 & 0+1+2 \\ 0+1+2 & 0+1+4 \end{pmatrix} = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$$

**Step 2: Compute $B^T\mathbf{b}$.**

$$B^T\mathbf{b} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix}\begin{pmatrix} 30 \\ 22 \\ 8 \end{pmatrix} = \begin{pmatrix} 30 + 22 + 8 \\ 0 + 22 + 16 \end{pmatrix} = \begin{pmatrix} 60 \\ 38 \end{pmatrix}$$

Entry 1 is the sum of all measurements. Entry 2 is the weighted sum (by measurement times).

**Step 3: Solve $B^TB\,\hat{\mathbf{x}} = B^T\mathbf{b}$ by simultaneous row operations.**

$$\hat{\mathbf{x}} = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}^{-1}\begin{pmatrix} 60 \\ 38 \end{pmatrix}$$

$r_2 \to r_2 - r_1$:

$$= \begin{pmatrix} 3 & 3 \\ 0 & 2 \end{pmatrix}^{-1}\begin{pmatrix} 60 \\ -22 \end{pmatrix}$$

$r_2 \to \frac{1}{2}r_2$:

$$= \begin{pmatrix} 3 & 3 \\ 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 60 \\ -11 \end{pmatrix}$$

$r_1 \to r_1 - 3r_2$:

$$= \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 93 \\ -11 \end{pmatrix}$$

$r_1 \to \frac{1}{3}r_1$:

$$= \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 31 \\ -11 \end{pmatrix} = \begin{pmatrix} 31 \\ -11 \end{pmatrix}$$

**The answer:**

$$\hat{\mathbf{x}} = \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 31 \\ -11 \end{pmatrix}$$

The best-fitting line is:

$$\boxed{h(t) = 31 - 11t}$$

- $a = 31$: predicted height at $t = 0$
- $b = -11$: the candle loses $11$ cm per hour
:::

### 4.3 Checking the Answer

::: example
**Example 4.2: Predicted vs. Actual**

| $t$ | Actual $h$ | Predicted $31 - 11t$ | Error |
|---|---|---|---|
| $0$ | $30$ | $31$ | $-1$ |
| $1$ | $22$ | $20$ | $+2$ |
| $2$ | $8$ | $9$ | $-1$ |

$$\text{Minimum error} = (-1)^2 + 2^2 + (-1)^2 = 1 + 4 + 1 = 6$$

The line doesn't pass through any data point — but no line can achieve error less than $6$.
:::

### 4.4 Prediction

Set $h(t) = 0$: $\quad 31 - 11t = 0 \implies t = \frac{31}{11} \approx 2.82$ hours.

**The candle burns out in about 2 hours 49 minutes.**

---

## 5. Cross-Filling Connection

### 5.1 Orthogonal Basis for the Perfect-Data Plane

From Lecture 10 (§6), we can diagonally cross-fill $(B^TB)^{-1}$ to find an orthogonal basis for $\operatorname{Col}(B)$.

::: example
**Example 5.1: Inner Diagonal Cross-Filling (Continuing the Candle Problem)**

We computed:

$$(B^TB)^{-1} = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$$

**Cross-fill at diagonal pivot $(1,1)$**, value $= \frac{5}{6}$. Read off column 1: $\mathbf{d}_1 \propto \begin{pmatrix} 5 \\ -3 \end{pmatrix}$.

$$B\mathbf{d}_1 = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ -3 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix}$$

**Remainder pivot at $(2,2)$**: $\mathbf{d}_2 \propto \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

$$B\mathbf{d}_2 = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$$

**Verify orthogonality:**

$$\begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix}^T\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} = 0 + 2 - 2 = 0 \quad ✓$$

The set $\left\{\begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix},\; \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\right\}$ is an **orthogonal basis** for the perfect-data plane $W$.
:::

---

## 6. The General Framework

### 6.1 Arbitrary Measurement Times

The candle example used $t = 0, 1, 2$, but the method works for any measurement times $t_1, t_2, \ldots, t_n$. The model matrix becomes:

$$B = \begin{pmatrix} 1 & t_1 \\ 1 & t_2 \\ \vdots & \vdots \\ 1 & t_n \end{pmatrix}$$

Different chopstick positions → different column 2 → different plane $W$.

### 6.2 Beyond Straight Lines

The same framework handles any model that is **linear in parameters**:

| Model | Basis functions | Parameters | Evaluation matrix $B$ columns |
|---|---|---|---|
| $h = a + bt$ | $f_1 = 1,\; f_2 = t$ | $a, b$ | $(1,\ldots,1)^T$, $(t_1,\ldots,t_n)^T$ |
| $h = a + bt + ct^2$ | $f_1 = 1,\; f_2 = t,\; f_3 = t^2$ | $a, b, c$ | $(1,\ldots,1)^T$, $(t_1,\ldots,t_n)^T$, $(t_1^2,\ldots,t_n^2)^T$ |
| $h = a\cos t + b\sin t$ | $f_1 = \cos t,\; f_2 = \sin t$ | $a, b$ | $(\cos t_1,\ldots,\cos t_n)^T$, $(\sin t_1,\ldots,\sin t_n)^T$ |

In every case: $B_{ij} = f_j(x_i)$, the model's perfect data forms a subspace $W = \operatorname{Col}(B)$, and the best fit is the orthogonal projection onto $W$.

### 6.3 Worked Example: Polynomial Regression

Fitting a **polynomial** $P(x) = a_0 + a_1 x + a_2 x^2$ is linear regression with basis functions $f_1(x) = 1$, $f_2(x) = x$, $f_3(x) = x^2$. The evaluation matrix $B$ becomes a **Vandermonde-type matrix**.

::: example
**Example 6.1: Fitting a Quadratic to Four Data Points**

Given data:

| $x_i$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y_i$ | $1$ | $5$ | $1$ | $9$ |

We want the polynomial $P(x) = a_0 + a_1 x + a_2 x^2$ of degree $\leq 2$ that minimizes the sum of squared errors $\sum_{i=1}^4 (P(x_i) - y_i)^2$.

**Step 1: Build the evaluation matrix $B$.**

Three basis functions, four measurement points → $B$ is $4 \times 3$:

$$B_{ij} = f_j(x_i) = x_i^{\,j-1}$$

| | $f_1(x) = 1$ | $f_2(x) = x$ | $f_3(x) = x^2$ |
|---|---|---|---|
| $x_1 = -1$ | $1$ | $-1$ | $1$ |
| $x_2 = 0$ | $1$ | $0$ | $0$ |
| $x_3 = 1$ | $1$ | $1$ | $1$ |
| $x_4 = 2$ | $1$ | $2$ | $4$ |

$$B = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}, \qquad \mathbf{b} = \begin{pmatrix} 1 \\ 5 \\ 1 \\ 9 \end{pmatrix}$$

**Step 2: Compute $B^TB$ and $B^T\mathbf{b}$.**

$$B^TB = \begin{pmatrix} 4 & 2 & 6 \\ 2 & 6 & 8 \\ 6 & 8 & 18 \end{pmatrix}, \qquad B^T\mathbf{b} = \begin{pmatrix} 1+5+1+9 \\ -1+0+1+18 \\ 1+0+1+36 \end{pmatrix} = \begin{pmatrix} 16 \\ 18 \\ 38 \end{pmatrix}$$

**Step 3: Solve $B^TB\,\hat{\mathbf{a}} = B^T\mathbf{b}$ by simultaneous row operations.**

$R_2 \to 2R_2 - R_1$, $\;R_3 \to 2R_3 - 3R_1$:

$$\hat{\mathbf{a}} = \begin{pmatrix} 4 & 2 & 6 \\ 0 & 10 & 10 \\ 0 & 10 & 18 \end{pmatrix}^{-1}\begin{pmatrix} 16 \\ 20 \\ 28 \end{pmatrix}$$

$R_3 \to R_3 - R_2$, $\;R_3 \to \frac{1}{8}R_3$:

$$\hat{\mathbf{a}} = \begin{pmatrix} 4 & 2 & 6 \\ 0 & 10 & 10 \\ 0 & 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 16 \\ 20 \\ 1 \end{pmatrix}$$

$R_1 \to R_1 - 6R_3$, $\;R_2 \to R_2 - 10R_3$, $\;R_2 \to \frac{1}{10}R_2$:

$$\hat{\mathbf{a}} = \begin{pmatrix} 4 & 2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 10 \\ 1 \\ 1 \end{pmatrix}$$

$R_1 \to R_1 - 2R_2$, $\;R_1 \to \frac{1}{4}R_1$:

$$\hat{\mathbf{a}} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}^{-1}\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$$

**The answer:**

$$\boxed{P(x) = 2 + x + x^2}$$
:::

::: remark
**Check: Is the Residual Orthogonal to $\operatorname{Col}(B)$?**

The predicted values are $B\hat{\mathbf{a}} = (2, 2, 4, 8)^T$. The residual is:

$$\mathbf{e} = \mathbf{b} - B\hat{\mathbf{a}} = \begin{pmatrix} 1 \\ 5 \\ 1 \\ 9 \end{pmatrix} - \begin{pmatrix} 2 \\ 2 \\ 4 \\ 8 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \\ -3 \\ 1 \end{pmatrix}$$

Verify: $B^T\mathbf{e} = \begin{pmatrix} -1+3-3+1 \\ 1+0-3+2 \\ -1+0-3+4 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ ✓

The residual is orthogonal to every column of $B$, confirming $B\hat{\mathbf{a}}$ is the orthogonal projection of $\mathbf{b}$ onto $\operatorname{Col}(B)$.
:::

::: attention
**"Linear" Regression Fits Non-Linear Curves**

The polynomial $P(x) = 2 + x + x^2$ is a parabola — not a straight line! Yet we call this "linear regression" because the model is **linear in the parameters** $(a_0, a_1, a_2)$:

$$P(x) = a_0 \cdot 1 + a_1 \cdot x + a_2 \cdot x^2$$

Each basis function $f_j(x)$ can be any function of $x$ — polynomial, trigonometric, exponential. As long as the model is $\sum a_j f_j(x)$, the perfect-data set is a subspace $\operatorname{Col}(B)$ and the method applies.
:::

::: remark
**The Unified Picture**

Linear regression is **not** a new technique. It is orthogonal projection applied to the data-fitting problem. The entire theory from Lectures 7–10 (projections, compatible families, construction formula, inner diagonal cross-filling) powers the solution.

The mathematical content is the same — only the **language** changes.
:::

---

## 7. Summary

::: success
**Key Results from This Lecture**

1. **Data = Point** (§2.1): $n$ measurements become one point $\mathbf{b} \in \mathbb{R}^n$.

2. **Model = Subspace** (§2.2): The set of all perfect data (from lines $h = a + bt$) is a subspace $W = \operatorname{Col}(B)$, where $B$'s columns are determined by the measurement times.

3. **Error = Distance** (§3): Sum of squared gaps $=$ $\|\mathbf{b} - \mathbf{p}\|^2$. Minimizing error $=$ minimizing distance $=$ orthogonal projection.

4. **Normal Equation** (§4): The least squares solution satisfies $B^TB\,\hat{\mathbf{x}} = B^T\mathbf{b}$, giving the regression coefficients directly.

5. **Cross-Filling Connection** (§5): Inner diagonal cross-filling of $(B^TB)^{-1}$ produces an orthogonal basis for the model subspace — the same technique from Lecture 10.
:::

### Looking Ahead

With projection theory and its applications complete, we now turn to **determinants** (Chapter 5). The determinant will be connected to cross-filling through a striking formula:

$$\det(A) = a_1 \cdot a_2 \cdots a_n \cdot \det(S)$$

where $a_1, \ldots, a_n$ are cross-centers and $S$ is a switching matrix.

---

## Exercises

::: problem
**Exercise 1: Different Measurement Times**

You measure a candle at $t = 0, 2, 5$ and get heights $40, 28, 10$.

(a) Write down the model matrix $B$ and data vector $\mathbf{b}$.

(b) Compute $B^TB$ and $B^T\mathbf{b}$.

(c) Solve the normal equation to find the best-fitting line $h(t) = a + bt$.

(d) When does the candle burn out?
:::

::: problem
**Exercise 2: Quadratic Fit**

Using the original data ($t = 0, 1, 2$; heights $30, 22, 8$), fit a **quadratic** model $h(t) = a + bt + ct^2$.

(a) Write down the $3 \times 3$ model matrix $B$.

(b) Is $B$ invertible? What does this mean about the quadratic fit?

(c) Find $a, b, c$. Does the quadratic pass through all three data points?
:::

::: problem
**Exercise 3: Projection Interpretation**

Let $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 30 \\ 22 \\ 8 \end{pmatrix}$.

(a) Compute the residual $\mathbf{r} = \mathbf{b} - B\hat{\mathbf{x}}$ where $\hat{\mathbf{x}} = \begin{pmatrix} 31 \\ -11 \end{pmatrix}$.

(b) Verify that $\mathbf{r} \perp \operatorname{Col}(B)$ by checking $B^T\mathbf{r} = \mathbf{0}$.

(c) What projection does $\mathbf{r}$ correspond to? (Hint: $\mathbf{r} = (I - P_W)\mathbf{b}$.)
:::

::: problem
**Exercise 4: Weighted Data**

Suppose you trust the measurement at $t = 1$ more than the others. You want to minimize:

$$\text{Weighted Error} = 1 \cdot \text{gap}_1^2 + 4 \cdot \text{gap}_2^2 + 1 \cdot \text{gap}_3^2$$

(a) Show that this equals $\|D(\mathbf{b} - B\mathbf{x})\|^2$ where $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.

(b) Rewrite this as $\|D\mathbf{b} - (DB)\mathbf{x}\|^2$ and apply the normal equation with $\tilde{B} = DB$ and $\tilde{\mathbf{b}} = D\mathbf{b}$.

(c) Compute the weighted best-fit line.
:::

::: problem
**Exercise 5: Orthogonal Basis and Projection**

Using the orthogonal basis $\left\{\begin{pmatrix} 5 \\ 2 \\ -1 \end{pmatrix},\; \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\right\}$ for $W$:

(a) Compute $P_W\mathbf{b}$ using the rank-1 orthogonal projection formula for each basis vector:

$$P_W\mathbf{b} = \frac{\mathbf{v}_1^T\mathbf{b}}{\mathbf{v}_1^T\mathbf{v}_1}\mathbf{v}_1 + \frac{\mathbf{v}_2^T\mathbf{b}}{\mathbf{v}_2^T\mathbf{v}_2}\mathbf{v}_2$$

(b) Verify that $P_W\mathbf{b} = B\hat{\mathbf{x}} = \begin{pmatrix} 31 \\ 20 \\ 9 \end{pmatrix}$.
:::
