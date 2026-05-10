# Lecture 17: Complex Numbers

> **Topics**: §5.7 — Why Complex Numbers, Rotation Matrix Obstruction, Cubic Formula Motivation, Complex Plane, Multiplication as Rotation + Scaling, Polar Form, De Moivre's Formula, Roots of Unity, Conjugation and Symmetry, Fundamental Theorem of Algebra, Complex Eigenvalues
> **Date**: May 11 – May 14, 2026

---

## Overview

Lectures 14–16 built a powerful pipeline:

$$	ext{compute } \\det(tI-A) \quad\longrightarrow\quad \text{factor} \quad\longrightarrow\quad \text{eigenvalues}$$

$$\longrightarrow\quad \text{spectral projections} \quad\longrightarrow\quad \text{value tables} \quad\longrightarrow\quad A=PDP^{-1}.$$

But this pipeline still has two restrictions:

| Restriction | Problem | Resolution |
|---|---|---|
| The polynomial may not factor into linear factors over $\mathbb R$ | Some real polynomials have no real roots | Complex numbers $\mathbb C$ |
| The minimal polynomial may have repeated factors | Lagrange interpolation loses information | Jordan canonical form, self-study |

This lecture addresses the first restriction. Complex numbers make every polynomial factor into linear factors, so every matrix has eigenvalues over $\mathbb C$.

::: attention
Complex numbers fix the “no linear factor over $\mathbb R$” problem. They do **not** fix repeated factors in the minimal polynomial.
:::

---

## 1. The Pipeline Breaks Over $\mathbb R$

### 1.1 A Matrix We Understand Perfectly

Consider the $90^\circ$ rotation matrix

$$R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$

Geometrically, this matrix is completely clear:

$$R\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}0\\1\end{pmatrix}, \qquad
R\begin{pmatrix}0\\1\end{pmatrix}=\begin{pmatrix}-1\\0\end{pmatrix}.$$

It rotates every vector counterclockwise by $90^\circ$.

Now compute

$$tI-R=\begin{pmatrix}t&1\\-1&t\end{pmatrix},$$

so

$$\det(tI-R)=t^2+1.$$

### 1.2 The Factorization Step Fails

Over the real numbers,

$$t^2+1$$

has no root. It does not factor into real linear factors.

So the pipeline stops:

$$t^2+1 \quad\not\rightsquigarrow\quad (t-\lambda_1)(t-\lambda_2) \text{ over } \mathbb R.$$

No real eigenvalues. No real spectral projections. No real diagonalization.

::: attention
The matrix is not mysterious. The number system is too small.
:::

The natural question is:

> Can we enlarge the real numbers so that $t^2+1$ has roots, and preferably so that every polynomial factors into linear factors?

The answer is yes: the complex numbers.

---

## 2. Why Complex Numbers Are Not Optional

### 2.1 The Quadratic Formula Is Not Enough Motivation

For

$$ax^2+bx+c=0,$$

the quadratic formula says

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

If

$$b^2-4ac<0,$$

one might simply say: “there is no real solution.”

That makes $\sqrt{-1}$ look optional. But cubic equations show that this attitude is wrong.

### 2.2 The Cubic Formula Forces $\sqrt{-1}$

Cubic equations

$$ax^3+bx^2+cx+d=0$$

also have a formula. Historically, this was discovered in the sixteenth century by Scipione del Ferro, Tartaglia, Cardano, and Bombelli.

The formula is complicated, but the key phenomenon is simple: even when a cubic has real roots, the formula may pass through $\sqrt{-1}$ in the middle of the calculation.

A famous simple example is

$$x^3=x.$$

Obviously,

$$x^3-x=x(x-1)(x+1),$$

so the real solutions are

$$x=0, \quad x=1, \quad x=-1.$$

But when one applies the cubic formula, expressions involving $\sqrt{-1}$ appear. They are not final answers; they occur inside intermediate cube roots.

::: success
Even when the problem is real and the answer is real, the solution path may force us through complex numbers.
:::

Bombelli’s insight was to compute formally with $\sqrt{-1}$, using the rule

$$(\sqrt{-1})^2=-1.$$

The imaginary parts can appear in the middle and cancel at the end. So $\sqrt{-1}$ is not a meaningless symbol; it is part of the arithmetic needed to make formulas work.

### 2.3 The Lesson

Complex numbers are not a trick added for rare equations. They appear naturally in:

- waves and oscillations;
- electrical engineering and impedance;
- quantum mechanics;
- eigenvalue computations for real matrices.

Even when the measurement or final answer is real, the internal mathematics often lives in $\mathbb C$.

---

## 3. The Complex Numbers

### 3.1 Definition

We introduce a new symbol $i$ satisfying

$$i^2=-1.$$

::: proposition
**Definition (Complex Number)**

A complex number is an expression

$$z=a+bi, \qquad a,b\in\mathbb R.$$

The number $a$ is the **real part**, and $b$ is the **imaginary part**.
:::

The set of all complex numbers is denoted $\mathbb C$:

$$\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R\subset\mathbb C.$$

### 3.2 The Complex Plane

The complex number

$$z=a+bi$$

corresponds to the point

$$(a,b)\in\mathbb R^2.$$

The horizontal axis is the real axis. The vertical axis is the imaginary axis.

For example,

$$1+2i \quad\leftrightarrow\quad (1,2).$$

This is why $\mathbb C$ can be drawn as a plane.

### 3.3 Addition

Addition is componentwise:

$$(a+bi)+(c+di)=(a+c)+(b+d)i.$$

So addition in $\mathbb C$ is exactly vector addition in $\mathbb R^2$.

Example:

$$(1+2i)+(2+i)=3+3i.$$

The new structure is not addition. The new structure is multiplication.

### 3.4 Multiplication

To multiply, expand and use $i^2=-1$:

$$(3+i)(5+i)=15+3i+5i+i^2=14+8i.$$

In general,

$$(a+bi)(c+di)=(ac-bd)+(ad+bc)i.$$

This formula looks algebraic, but it has a geometric meaning: complex multiplication is rotation plus scaling.

---

## 4. Multiplication as Rotation and Scaling

### 4.1 Multiplication by $i$

For any complex number $a+bi$,

$$i(a+bi)=ai+bi^2=-b+ai.$$

In coordinates,

$$(a,b)\mapsto(-b,a).$$

This is exactly counterclockwise rotation by $90^\circ$.

::: success
Multiplication by $i$ is the same operation as the rotation matrix

$$\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$
:::

This connects directly to the obstruction from §1. The matrix whose real characteristic polynomial was $t^2+1$ is simply “multiplication by $i$” written in real coordinates.

### 4.2 Multiplication by a General Complex Number

Let

$$z=a+bi.$$

Multiplication by $z$ is the unique real-linear transformation that sends

$$1\mapsto z$$

and therefore sends

$$i\mapsto zi.$$

Since multiplying by $i$ rotates by $90^\circ$, the two vectors $z$ and $zi$ are perpendicular and have the same length. Thus the unit square with vertices

$$0, \quad 1, \quad i, \quad 1+i$$

is sent to the tilted square with vertices

$$0, \quad z, \quad zi, \quad z(1+i).$$

This means multiplication by $z$ has two geometric effects:

1. rotate by the angle of $z$;
2. scale by the length of $z$.

### 4.3 Absolute Value and Argument

For

$$z=a+bi,$$

define the absolute value

$$|z|=\sqrt{a^2+b^2}.$$

This is the distance from $0$ to $z$ in the complex plane.

Define the argument $\arg(z)$ to be the angle from the positive real axis to the vector $z$.

If

$$z=a+bi=|z|(\cos\theta+i\sin\theta),$$

then

$$\theta=\arg(z), \qquad a=|z|\cos\theta, \qquad b=|z|\sin\theta.$$

::: proposition
**Geometric Meaning of Multiplication**

Multiplying by $z$ rotates by $\arg(z)$ and scales by $|z|$.
:::

Special case:

$$i=\cos\frac\pi2+i\sin\frac\pi2.$$

So multiplying by $i$ rotates by $\frac\pi2$ and scales by $1$.

---

## 5. Polar Form and De Moivre’s Formula

### 5.1 Polar Form

Every nonzero complex number can be written as

$$z=r(\cos\theta+i\sin\theta),$$

where

$$r=|z|>0, \qquad \theta=\arg(z).$$

This is called the polar form of $z$.

Example:

$$1+i=\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right).$$

### 5.2 Multiplication in Polar Form

Let

$$z_1=r_1(\cos\theta_1+i\sin\theta_1), \qquad
z_2=r_2(\cos\theta_2+i\sin\theta_2).$$

Then

$$z_1z_2=r_1r_2\bigl(\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr).$$

Thus:

$$|z_1z_2|=|z_1||z_2|,$$

and

$$\arg(z_1z_2)=\arg(z_1)+\arg(z_2).$$

This is the formal version of “rotation plus scaling.”

### 5.3 De Moivre’s Formula

Applying the multiplication rule repeatedly gives:

::: proposition
**De Moivre’s Formula**

For every integer $n\ge 1$,

$$\bigl(r(\cos\theta+i\sin\theta)\bigr)^n
=r^n(\cos(n\theta)+i\sin(n\theta)).$$
:::

In particular, if $|z|=1$, then

$$(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta).$$

Raising to the $n$-th power multiplies the angle by $n$.

### 5.4 Roots of Unity

We now solve

$$z^n=1.$$

Write

$$z=r(\cos\theta+i\sin\theta).$$

Then by De Moivre,

$$z^n=r^n(\cos(n\theta)+i\sin(n\theta)).$$

For this to equal $1$, we need

$$r^n=1$$

and

$$n\theta=2\pi k \qquad (k\in\mathbb Z).$$

So

$$r=1, \qquad \theta=\frac{2\pi k}{n}.$$

The $n$-th roots of unity are

$$\boxed{\cos\frac{2\pi k}{n}+i\sin\frac{2\pi k}{n}}, \qquad k=0,1,\ldots,n-1.$$

They are $n$ equally spaced points on the unit circle.

Examples:

- The fourth roots of unity are

$$1, \quad i, \quad -1, \quad -i.$$

- If $\omega$ is a primitive third root of unity, then

$$1+\omega+\omega^2=0.$$

---

## 6. Conjugation and Symmetry

### 6.1 Conjugate

For

$$z=a+bi,$$

the conjugate is

$$\bar z=a-bi.$$

Geometrically, conjugation reflects the complex plane across the real axis.

Example:

$$\overline{1+2i}=1-2i.$$

### 6.2 Basic Identities

The most important identity is

$$z\bar z=(a+bi)(a-bi)=a^2+b^2=|z|^2.$$

This is always real and nonnegative.

We can also recover real and imaginary parts from $z$ and $\bar z$:

$$\operatorname{Re}(z)=\frac{z+\bar z}{2},$$

and

$$\operatorname{Im}(z)=\frac{z-\bar z}{2i}.$$

Conjugation respects addition and multiplication:

$$\overline{z+w}=\bar z+\bar w,$$

$$\overline{zw}=\bar z\bar w.$$

### 6.3 Division

Conjugation makes division possible by converting the denominator into a real number.

Example:

$$\frac{3+4i}{2+i}.$$

Multiply top and bottom by the conjugate of the denominator:

$$\frac{3+4i}{2+i}
=\frac{(3+4i)(2-i)}{(2+i)(2-i)}.$$

The denominator is

$$(2+i)(2-i)=2^2+1^2=5.$$

The numerator is

$$(3+4i)(2-i)=6-3i+8i-4i^2=10+5i.$$

So

$$\frac{3+4i}{2+i}=\frac{10+5i}{5}=2+i.$$

### 6.4 Symmetry Principle

Conjugation is not just a formula. It is the fundamental symmetry of $\mathbb C$ over $\mathbb R$.

A complex number is fixed by conjugation exactly when it is real:

$$\bar z=z \quad\Longleftrightarrow\quad z\in\mathbb R.$$

So the real numbers are the symmetric elements inside the complex numbers.

::: proposition
**Symmetry Principle**

If a symmetric system produces an asymmetric solution, then applying the symmetry to that solution produces another valid solution. The collection of all such solutions recovers the symmetry.
:::

For complex numbers, the symmetry is conjugation.

### 6.5 Real Polynomials Have Conjugate Roots

Let $p(t)$ be a polynomial with real coefficients. If

$$p(z)=0,$$

then

$$p(\bar z)=0.$$

Reason:

$$p(\bar z)=\overline{p(z)}=\overline{0}=0.$$

Thus complex roots of real polynomials come in conjugate pairs.

Example:

$$t^2-2t+5=0$$

has roots

$$1+2i, \qquad 1-2i.$$

The polynomial is real and symmetric under conjugation; the roots appear as a conjugate pair.

---

## 7. Complex Eigenvalues

### 7.1 Fundamental Theorem of Algebra

::: proposition
**Fundamental Theorem of Algebra**

Every degree-$n$ polynomial with complex coefficients has exactly $n$ complex roots, counted with multiplicity.

Equivalently,

$$p(t)=(t-z_1)(t-z_2)\cdots(t-z_n), \qquad z_i\in\mathbb C.$$
:::

Therefore every polynomial factors into linear factors over $\mathbb C$.

This removes the first obstruction from our spectral pipeline.

### 7.2 Every Matrix Has Complex Eigenvalues

For any $n\times n$ matrix $A$,

$$\det(tI-A)$$

is a degree-$n$ polynomial. By the Fundamental Theorem of Algebra, it has $n$ complex roots counted with multiplicity.

So every matrix has eigenvalues over $\mathbb C$.

If $A$ is real, then $\det(tI-A)$ has real coefficients. Therefore non-real eigenvalues appear in conjugate pairs.

### 7.3 Rotation Matrix Revisited

Return to

$$R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$

We found

$$\det(tI-R)=t^2+1.$$

Over $\mathbb C$,

$$t^2+1=(t-i)(t+i).$$

So the eigenvalues are

$$i, \qquad -i.$$

They are a conjugate pair, as expected for a real matrix.

The spectral projections are

$$P_i=\frac{R-(-i)I}{i-(-i)}=\frac{R+iI}{2i},$$

and

$$P_{-i}=\frac{R-iI}{-2i}.$$

Thus

$$R=iP_i+(-i)P_{-i}.$$

Over $\mathbb R$, the rotation matrix had no eigenvalues. Over $\mathbb C$, the full spectral machinery runs.

### 7.4 Another Real Matrix with Complex Eigenvalues

Let

$$A=\begin{pmatrix}1&2\\-2&1\end{pmatrix}.$$

Then

$$tI-A=\begin{pmatrix}t-1&-2\\2&t-1\end{pmatrix},$$

so

$$\det(tI-A)=(t-1)^2+4=t^2-2t+5.$$

Over $\mathbb C$,

$$t^2-2t+5=\bigl(t-(1+2i)\bigr)\bigl(t-(1-2i)\bigr).$$

The eigenvalues are

$$1+2i, \qquad 1-2i.$$

Corresponding eigenvectors are

$$\begin{pmatrix}1\\i\end{pmatrix} \quad \text{for } \lambda=1+2i,$$

and

$$\begin{pmatrix}1\\-i\end{pmatrix} \quad \text{for } \lambda=1-2i.$$

The eigenvectors also form a conjugate pair.

### 7.5 Symmetry of Eigenstructure

If $A$ is real and

$$A\mathbf v=\lambda\mathbf v,$$

then conjugating both sides gives

$$A\bar{\mathbf v}=\bar\lambda\bar{\mathbf v}.$$

So for real matrices:

- complex eigenvalues come in conjugate pairs;
- complex eigenvectors come in conjugate pairs;
- spectral projections also respect conjugation.

This is the symmetry principle applied to eigenstructure.

---

## 8. What We Have Gained

Complex numbers solve the factorization problem:

::: success
Over $\mathbb C$, every polynomial factors into linear factors.
:::

Therefore the pipeline

$$\det(tI-A) \longrightarrow \text{eigenvalues} \longrightarrow \text{spectral projections} \longrightarrow A=PDP^{-1}$$

can now be applied to matrices whose eigenvalues are not real.

But the repeated-factor restriction remains:

::: attention
If the minimal polynomial has repeated factors, Lagrange interpolation still fails. Complex numbers do not fix that. This is the territory of Jordan canonical form.
:::

So the current usable criterion is:

- work over $\mathbb C$ so that factorization into linear factors is always possible;
- then check whether the minimal polynomial, or equivalently the square-free part test from Lecture 16, has distinct factors that annihilate the matrix.

---

## 9. Summary

::: success
**Key Results from This Lecture**

1. The real spectral pipeline can fail because $\det(tI-A)$ may not factor over $\mathbb R$.

2. Complex numbers enlarge $\mathbb R$ by adding $i$ with $i^2=-1$.

3. A complex number $a+bi$ is a point in the plane, but with multiplication.

4. Multiplication by a complex number means rotation by its argument and scaling by its absolute value.

5. Polar form:

$$z=r(\cos\theta+i\sin\theta).$$

6. De Moivre’s formula:

$$z^n=r^n(\cos(n\theta)+i\sin(n\theta)).$$

7. Conjugation is the symmetry of $\mathbb C$ over $\mathbb R$.

8. Real polynomials and real matrices have non-real roots/eigenvalues in conjugate pairs.

9. By the Fundamental Theorem of Algebra, every matrix has eigenvalues over $\mathbb C$.
:::

---

## Exercises

::: problem
**Exercise 1: Complex Arithmetic**

Compute:

(a) $(2+3i)+(4-i)$

(b) $(2+3i)(4-i)$

(c) $i(5-2i)$

(d) $\dfrac{1+2i}{3-i}$
:::

::: problem
**Exercise 2: Rotation by Multiplication**

Let $z=2+i$.

(a) Compute $iz$.

(b) Draw $z$ and $iz$ in the complex plane.

(c) Verify geometrically that multiplication by $i$ rotates by $90^\circ$.
:::

::: problem
**Exercise 3: Polar Form**

Write each complex number in polar form:

(a) $1+i$

(b) $-1+i$

(c) $-2$

(d) $\sqrt3+i$
:::

::: problem
**Exercise 4: De Moivre**

Use De Moivre’s formula to compute:

(a) $(1+i)^4$

(b) $\left(\cos\frac\pi6+i\sin\frac\pi6\right)^6$

(c) all solutions of $z^4=1$
:::

::: problem
**Exercise 5: Conjugate Pairs**

Let

$$p(t)=t^2-4t+13.$$

(a) Find the roots of $p(t)$.

(b) Verify that they are conjugates.

(c) Explain why this had to happen before computing the roots.
:::

::: problem
**Exercise 6: Complex Eigenvalues**

Let

$$A=\begin{pmatrix}0&-2\\2&0\end{pmatrix}.$$

(a) Compute $\det(tI-A)$.

(b) Factor it over $\mathbb C$.

(c) Find the complex eigenvalues.

(d) Interpret the matrix geometrically as rotation plus scaling.
:::
