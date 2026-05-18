# Lecture 18: The Exponential Function

> **Topics**: §5.8 — Compound Interest Definition of $e$, Binomial Expansion to Power Series, Differential Equation $y'=ky$, Euler's Formula, Exponential of the Derivative as Shift, Matrix Exponential, Spectral Formula for $e^{As}$, Complex Eigenvalues as Rotation
> **Date**: May 14 – May 18, 2026

---

## Overview

Lecture 17 introduced complex numbers so that the eigenvalue pipeline can continue over $\mathbb C$:

$$
\det(tI-A)\quad\longrightarrow\quad
\text{factor into linear factors}\quad\longrightarrow\quad
\text{spectral projections}.
$$

Lecture 18 introduces the exponential function from one principle:

$$
\boxed{e^X=\lim_{n\to\infty}\left(I+\frac{X}{n}\right)^n.}
$$

The input $X$ may be a real number, a complex number, a matrix, or even the derivative operator.

| Input $X$ | Exponential $e^X$ | Meaning |
|---|---|---|
| real number $x$ | $e^x$ | growth or decay |
| complex number $i\theta$ | $e^{i\theta}=\cos\theta+i\sin\theta$ | rotation |
| matrix $A$ | $e^{As}$ | solves $\mathbf y'=A\mathbf y$ |
| derivative $\frac{d}{dx}$ | $e^{s\frac{d}{dx}}$ | shifts functions by $s$ |

The repeated theme is:

::: tip
Repeated tiny multiplicative nudges compound into a smooth transformation.
:::

---

## 1. What Is $e$?

### 1.1 A Money Question

Start with $\$1$ in a bank.

The bank offers **100% interest per year**, computed linearly.

If the money stays untouched:

| Time | Balance |
|---:|---:|
| after $1$ year | $\$2$ |
| after $2$ years | $\$3$ |
| after $1/2$ year | $\$1.50$ |

But there is a trick.

Withdraw after one year and immediately redeposit. Then the second year's interest is computed on $\$2$, not on $\$1$:

$$
\text{after 2 years}=2+1\cdot 2=4.
$$

This beats the linear value $3$.

Now withdraw halfway through the year and redeposit:

$$
\text{after half year}=1+\frac12=1.5,
$$

then after the second half:

$$
1.5+\frac12(1.5)=2.25.
$$

This beats $2$.

### 1.2 Compound More Often

If we compound $n$ times per year, each period has interest rate $1/n$.

Each period multiplies the balance by

$$
1+\frac1n.
$$

After $n$ periods:

$$
\left(1+\frac1n\right)^n.
$$

The values are:

| $n$ | $\left(1+\frac1n\right)^n$ |
|---:|---:|
| $1$ | $2.000$ |
| $2$ | $2.250$ |
| $4$ | $2.441$ |
| $10$ | $2.594$ |
| $100$ | $2.705$ |
| $1000$ | $2.717$ |

The amount grows, but it does not become infinite. It approaches a number.

::: proposition
The number $e$ is defined by

$$
e=\lim_{n\to\infty}\left(1+\frac1n\right)^n=2.71828\ldots.
$$
:::

More generally, if the yearly rate is $x$, then each of $n$ periods has rate $x/n$, so

$$
e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n.
$$

::: attention
This is the definition of the exponential function in this lecture. The series, differential equation, Euler formula, matrix exponential, and Taylor theorem all come from this definition.
:::

---

## 2. From Limit to Power Series

The limit definition explains what $e^x$ is, but it is not convenient for computation.

To compute, expand

$$
\left(1+\frac{x}{n}\right)^n
$$

by the binomial theorem:

$$
\left(1+\frac{x}{n}\right)^n
=1+rac{n}{1!}\frac{x}{n}
+\frac{n(n-1)}{2!}\frac{x^2}{n^2}
+\frac{n(n-1)(n-2)}{3!}\frac{x^3}{n^3}
+\cdots.
$$

Now inspect the coefficients.

The $x$ coefficient is

$$
\frac{n}{n}=1.
$$

The $x^2$ coefficient has the factor

$$
\frac{n(n-1)}{n^2}
=\frac nn\cdot\frac{n-1}{n}
\longrightarrow 1.
$$

The $x^3$ coefficient has the factor

$$
\frac{n(n-1)(n-2)}{n^3}
=\frac nn\cdot\frac{n-1}{n}\cdot\frac{n-2}{n}
\longrightarrow 1.
$$

In general,

$$
\frac{n(n-1)\cdots(n-k+1)}{n^k}\longrightarrow 1.
$$

Therefore:

::: proposition
The exponential function has the power series

$$
\boxed{e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots.}
$$
:::

This is not a separate formula. It is the binomial expansion of the limit definition.

The power series is important because it lets us substitute more than real numbers into the exponential.

---

## 3. The Differential Equation $y'=ky$

### 3.1 The Same Compounding in Time

Consider

$$
y'=2y,
\qquad
y(0)=1.
$$

The speed is always twice the current position.

Break the interval $[0,1]$ into $n$ tiny steps of size $1/n$.

At time $0$, the speed is $2y(0)$, so after one tiny step:

$$
y\left(\frac1n\right)
\approx y(0)+\frac1n\cdot 2y(0)
=y(0)\left(1+\frac2n\right).
$$

After two tiny steps:

$$
y\left(\frac2n\right)
\approx y(0)\left(1+\frac2n\right)^2.
$$

After $n$ steps:

$$
y(1)=\lim_{n\to\infty}y(0)\left(1+\frac2n\right)^n
=y(0)e^2.
$$

For general time $s$, we need $ns$ tiny steps, so

$$
y(s)=\lim_{n\to\infty}y(0)\left(1+\frac2n\right)^{ns}
=y(0)e^{2s}.
$$

Since $y(0)=1$,

$$
y(s)=e^{2s}.
$$

### 3.2 General Pattern

::: proposition
The differential equation

$$
y'=ky,
\qquad
y(0)=c
$$

has solution

$$
y(s)=ce^{ks}.
$$
:::

The reason is the same compounding formula:

$$
y(s)=y(0)\lim_{n\to\infty}\left(1+\frac{k}{n}\right)^{ns}
=y(0)e^{ks}.
$$

| $k$ | Behavior |
|---:|---|
| $k>0$ | exponential growth |
| $k<0$ | exponential decay |
| $k=0$ | constant |

::: remark
Compound interest and $y'=ky$ are the same phenomenon. In both cases, repeated tiny multiplicative nudges compound into $e^{ks}$.
:::

---

## 4. Complex Exponential and Euler's Formula

Lecture 17 introduced complex numbers. Now we use the same exponential definition with a complex input:

$$
e^{i\theta}=\lim_{n\to\infty}\left(1+\frac{i\theta}{n}\right)^n.
$$

Each factor

$$
1+\frac{i\theta}{n}
$$

is a complex number close to $1$ with a tiny imaginary part.

Geometrically:

- its modulus is approximately $1$;
- its argument is approximately $\theta/n$;
- multiplying by it is approximately a tiny rotation by $\theta/n$.

Multiplying $n$ such factors gives total rotation

$$
n\cdot\frac{\theta}{n}=\theta.
$$

So $e^{i\theta}$ is the point on the unit circle at angle $\theta$.

::: proposition
Euler's formula is

$$
\boxed{e^{i\theta}=\cos\theta+i\sin\theta.}
$$
:::

Special cases:

$$
e^{i\pi}=-1,
\qquad
 e^{i\pi/2}=i,
\qquad
 e^{2\pi i}=1.
$$

### 4.1 Differential Equation View

Let

$$
y(t)=e^{it}.
$$

Then

$$
y'=iy.
$$

Multiplying by $i$ rotates a vector by $90^\circ$. Therefore the velocity is always perpendicular to the position vector.

If velocity is always perpendicular to position, the distance from the origin does not change. Starting from $y(0)=1$, the motion stays on the unit circle. The speed is constant, so after time $\theta$, the angle swept is $\theta$.

This is the geometric proof of Euler's formula.

### 4.2 Power Series View

Substitute $x=i\theta$ into the power series:

$$
e^{i\theta}
=1+i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+\frac{(i\theta)^4}{4!}+\cdots.
$$

Using

$$
i^2=-1,
\qquad
 i^3=-i,
\qquad
 i^4=1,
$$

we separate real and imaginary parts:

$$
e^{i\theta}
=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right)
+i\left(\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}-\cdots\right).
$$

These are the Taylor series of cosine and sine, so again

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

::: attention
The geometric proof explains why the exponential is rotation. The series proof verifies the formula algebraically.
:::

For a general complex number $a+bi$,

$$
e^{a+bi}=e^a e^{bi}=e^a(\cos b+i\sin b).
$$

The real part $a$ controls growth or decay. The imaginary part $b$ controls rotation.

---

## 5. Exponentiating the Derivative Operator

Now we substitute an operator into the exponential.

Let

$$
D=\frac{d}{dx}.
$$

Define

$$
e^D=\lim_{n\to\infty}\left(I+\frac1nD\right)^n.
$$

What does this operator do to a function $f(x)$?

First understand one small factor:

$$
\left(I+\frac1nD\right)f(x)
=f(x)+\frac1n f'(x).
$$

### 5.1 Linear Functions

If

$$f(x)=kx+b,$$

then

$$
f(x)+\frac1n f'(x)
=kx+b+\frac{k}{n}
=k\left(x+\frac1n\right)+b
=f\left(x+\frac1n\right).
$$

So for a linear function, the operator $I+\frac1nD$ shifts the graph left by $1/n$.

### 5.2 Smooth Functions

On a tiny interval, a smooth function is approximately linear. Therefore

$$
f(x)+\frac1n f'(x)\approx f\left(x+\frac1n\right).
$$

Thus

$$
I+\frac1nD
$$

is approximately the shift-by-$1/n$ operator.

Apply it $n$ times:

$$
f(x)
\longmapsto
f\left(x+\frac1n\right)
\longmapsto
f\left(x+\frac2n\right)
\longmapsto
\cdots
\longmapsto
f(x+1).
$$

Taking the limit gives:

::: proposition
The exponential of the derivative is the shift operator:

$$
\boxed{e^{D} f(x)=f(x+1).}
$$

More generally,

$$
\boxed{e^{sD} f(x)=f(x+s).}
$$
:::

### 5.3 Taylor's Theorem

Use the power series for the exponential:

$$
e^{sD}=I+sD+\frac{s^2}{2!}D^2+\frac{s^3}{3!}D^3+\cdots.
$$

Apply both sides to $f$:

$$
e^{sD} f(x)
=f(x)+s f'(x)+\frac{s^2}{2!}f''(x)+\frac{s^3}{3!}f'''(x)+\cdots.
$$

But $e^{sD} f(x)=f(x+s)$, so

::: proposition
Taylor's theorem is

$$
\boxed{f(x+s)=f(x)+s f'(x)+\frac{s^2}{2!}f''(x)+\frac{s^3}{3!}f'''(x)+\cdots.}
$$
:::

The point of view is:

::: tip
Taylor expansion is the binomial expansion of the exponential applied to the derivative operator.
:::

---

## 6. Matrix Exponential

Now replace the number $x$ by a matrix $A$.

::: proposition
The matrix exponential is defined by

$$
e^A=\lim_{n\to\infty}\left(I+\frac{A}{n}\right)^n.
$$
:::

For a system of differential equations

$$
\mathbf y'=A\mathbf y,
\qquad
\mathbf y(0)=\mathbf y_0,
$$

a tiny time step gives

$$
\mathbf y\left(\frac1n\right)
\approx
\mathbf y(0)+\frac1nA\mathbf y(0)
=\left(I+\frac{A}{n}\right)\mathbf y(0).
$$

After $ns$ steps:

$$
\mathbf y(s)
=\lim_{n\to\infty}\left(I+\frac{A}{n}\right)^{ns}\mathbf y(0).
$$

Therefore:

::: proposition
The solution of

$$
\mathbf y'=A\mathbf y,
\qquad
\mathbf y(0)=\mathbf y_0
$$

is

$$
\boxed{\mathbf y(s)=e^{As}\mathbf y(0).}
$$
:::

The remaining question is how to compute $e^{As}$.

---

## 7. Spectral Formula for $e^{As}$

Assume $A$ has spectral decomposition

$$
A=\lambda_1P_1+\lambda_2P_2+
\cdots+
\lambda_kP_k,
$$

with compatible spectral projections

$$
P_iP_j=0\ (i\neq j),
\qquad
P_i^2=P_i,
\qquad
P_1+
\cdots+P_k=I.
$$

Lecture 15 gave the spectral formula for polynomials:

$$
g(A)=g(\lambda_1)P_1+
\cdots+
g(\lambda_k)P_k.
$$

For each finite $n$,

$$
\left(I+\frac{A}{n}\right)^{ns}
$$

is a polynomial in $A$. Therefore

$$
\left(I+\frac{A}{n}\right)^{ns}
=
\left(1+\frac{\lambda_1}{n}\right)^{ns}P_1
+
\cdots+
\left(1+\frac{\lambda_k}{n}\right)^{ns}P_k.
$$

Taking $n\to\infty$ gives

$$
\left(1+\frac{\lambda_i}{n}\right)^{ns}\longrightarrow e^{\lambda_i s}.
$$

So:

::: proposition
If $A$ has spectral projections $P_1,\ldots,P_k$, then

$$
\boxed{e^{As}=e^{\lambda_1s}P_1+
\cdots+
e^{\lambda_ks}P_k.}
$$
:::

This is the payoff of the spectral projection method: to compute an exponential of a matrix, compute exponentials of eigenvalues.

### 7.1 Concrete Calculation

Let

$$
A=\begin{pmatrix}0&-1\\2&3\end{pmatrix}.
$$

Then

$$
\det(tI-A)=(t-1)(t-2).
$$

The eigenvalues are $1$ and $2$. The spectral projections are

$$
P_1=\frac{A-2I}{1-2}
=\begin{pmatrix}2&1\\-2&-1\end{pmatrix},
$$

and

$$
P_2=\frac{A-I}{2-1}
=\begin{pmatrix}-1&-1\\2&2\end{pmatrix}.
$$

Therefore

$$
e^{As}
=e^s\begin{pmatrix}2&1\\-2&-1\end{pmatrix}
+e^{2s}\begin{pmatrix}-1&-1\\2&2\end{pmatrix}.
$$

For an initial vector

$$
\mathbf y(0)=\begin{pmatrix}y_1(0)\\y_2(0)\end{pmatrix},
$$

the solution is

$$
\mathbf y(s)=e^{As}\mathbf y(0).
$$

The eigenspace component in $\operatorname{Im}(P_1)$ grows like $e^s$. The eigenspace component in $\operatorname{Im}(P_2)$ grows like $e^{2s}$.

The larger eigenvalue dominates as $s\to\infty$.

---

## 8. Complex Eigenvalues Produce Rotation

From Lecture 17, the $90^\circ$ rotation matrix

$$
R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
$$

has eigenvalues

$$
i,
\qquad
-i.
$$

The spectral projections are

$$
P_i=\frac{R-(-i)I}{i-(-i)}
=\frac{R+iI}{2i}
=\frac12\begin{pmatrix}1&i\\-i&1\end{pmatrix},
$$

and

$$
P_{-i}=\frac{R-iI}{-2i}
=\frac12\begin{pmatrix}1&-i\\i&1\end{pmatrix}.
$$

They are conjugate to each other, matching the conjugate-pair symmetry from Lecture 17.

Now use the spectral formula:

$$
e^{R\theta}=e^{i\theta}P_i+e^{-i\theta}P_{-i}.
$$

By Euler's formula,

$$
e^{i\theta}=\cos\theta+i\sin\theta,
\qquad
 e^{-i\theta}=\cos\theta-i\sin\theta.
$$

Substitution gives

$$
\boxed{
e^{R\theta}=
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}.}
$$

Thus the matrix exponential of the $90^\circ$ rotation generator produces rotation by angle $\theta$.

::: tip
Real eigenvalues produce growth or decay. Imaginary eigenvalues produce rotation or oscillation.
:::

More generally, if

$$
\lambda=a+bi,
$$

then

$$
e^{\lambda s}=e^{as}e^{ibs}.
$$

The real part $a$ gives growth or decay. The imaginary part $b$ gives rotation.

---

## 9. Summary

One definition has several faces:

$$
e^X=\lim_{n\to\infty}\left(I+\frac{X}{n}\right)^n.
$$

| $X$ | Output | Meaning |
|---|---|---|
| $x\in\mathbb R$ | $e^x$ | compound growth or decay |
| $i\theta$ | $\cos\theta+i\sin\theta$ | rotation on the unit circle |
| $s\frac{d}{dx}$ | shift by $s$ | Taylor theorem |
| $As$ | $e^{As}$ | solves $\mathbf y'=A\mathbf y$ |

The computational bridge is the power series:

$$
e^X=I+X+\frac{X^2}{2!}+\frac{X^3}{3!}+\cdots.
$$

For matrices, the spectral projection formula makes this computable:

$$
e^{As}=\sum_i e^{\lambda_i s}P_i.
$$

The philosophy is:

$$
\boxed{\text{tiny repeated changes }\longrightarrow\text{ exponential transformation}.}
$$

---

## Exercises

1. Compute
   $$
   \left(1+\frac{2}{n}\right)^n
   $$
   for $n=1,2,10,100$ and compare with $e^2$.

2. Starting from the binomial theorem, derive the first four terms of
   $$
   e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots.
   $$

3. Solve
   $$
   y'=-3y,
   \qquad
   y(0)=5.
   $$

4. Use Euler's formula to compute
   $$
   e^{i\pi/3},
   \qquad
   e^{-i\pi/2}.
   $$

5. Let $D=\frac{d}{dx}$. Verify directly on $f(x)=x^3$ that
   $$
   e^{sD} f(x)=f(x+s)
   $$
   matches Taylor's theorem.

6. Let
   $$
   A=\begin{pmatrix}0&-1\\2&3\end{pmatrix}.
   $$
   Use the projections in §7.1 to compute $e^{A}$.

7. For
   $$
   R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
   $$
   verify by direct multiplication that
   $$
   \frac{d}{d\theta}e^{R\theta}=R e^{R\theta}.
   $$
