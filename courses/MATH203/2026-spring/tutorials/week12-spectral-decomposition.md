# Tutorial: Week 12 — The Standard Route to Spectral Decomposition

> **For**: Teaching Assistants conducting tutorial sessions  
> **Related Lectures**: Lecture 14: Cayley–Hamilton, Lecture 15: Spectral Decomposition  
> **Duration**: 50 minutes  
> **Core standard**: Students should not hunt for eigenvectors first. They should follow the polynomial route:
>
> 1. Compute the characteristic polynomial.
> 2. Find an annihilating polynomial with distinct roots.
> 3. Write the division formula
>    $$g(x)=Q(x)f(x)+r(x).$$
> 4. Use the roots of $f$ and the degree condition on $r$ to determine $r$.
> 5. Write $r$ in the Lagrange basis.
> 6. Plug in $A$ to obtain spectral projections and spectral decomposition.

---

## 0. The Algorithm Students Must Learn

The characteristic polynomial

$$
\det(xI-A)
$$

is a uniform way to find an annihilating polynomial. If

$$
p_A(x)=\det(xI-A),
$$

then Cayley–Hamilton says

$$
p_A(A)=0.
$$

That is: expand $\det(xI-A)$ first, then plug in $A$.

But spectral decomposition needs more than “some annihilating polynomial.” It needs an annihilating polynomial with **distinct roots**.

So the real input is:

$$
f(A)=0,\qquad f(x)=(x-\lambda_1)\cdots(x-\lambda_m),
$$

where $\lambda_1,\ldots,\lambda_m$ are distinct.

### How to find such an $f$

First compute and factor the characteristic polynomial:

$$
\det(xI-A)=(x-\lambda_1)^{a_1}\cdots(x-\lambda_m)^{a_m}.
$$

Then delete repeated powers:

$$
q(x)=(x-\lambda_1)\cdots(x-\lambda_m).
$$

Now test:

$$
q(A)=(A-\lambda_1I)\cdots(A-\lambda_mI).
$$

If

$$
q(A)=0,
$$

then $q$ is the distinct-root annihilating polynomial we need, and the value-table/Lagrange method is legal.

If

$$
q(A)\neq 0,
$$

then this matrix is outside today’s spectral-decomposition method. The characteristic polynomial still annihilates $A$, but the square-free part does not.

::: remark
**Important distinction**

- $\det(xI-A)$ is the systematic starting point.
- A distinct-root annihilating polynomial is the actual requirement.
- A matrix may have repeated roots in $\det(xI-A)$ and still be diagonalizable, if the repeated powers can be deleted and the square-free part still annihilates $A$.
:::

### Once we have $f(A)=0$ with distinct roots

For any polynomial $g(x)$:

### Step 1: Divide by the annihilating polynomial

$$
g(x)=Q(x)f(x)+r(x), \qquad \deg r<m.
$$

### Step 2: Evaluate at the roots of $f$

Since $f(\lambda_i)=0$,

$$
g(\lambda_i)=Q(\lambda_i)f(\lambda_i)+r(\lambda_i)=r(\lambda_i).
$$

So the remainder $r$ is the unique polynomial of degree $<m$ with value table

$$
\begin{array}{c|cccc}
x & \lambda_1 & \lambda_2 & \cdots & \lambda_m\\
\hline
r(x) & g(\lambda_1) & g(\lambda_2) & \cdots & g(\lambda_m)
\end{array}
$$

### Step 3: Write the remainder by Lagrange interpolation

Define

$$
L_i(x)=\prod_{j\neq i}\frac{x-\lambda_j}{\lambda_i-\lambda_j}.
$$

Then

$$
r(x)=g(\lambda_1)L_1(x)+\cdots+g(\lambda_m)L_m(x).
$$

### Step 4: Plug in the matrix

By the annihilating-polynomial condition, $f(A)=0$. Therefore

$$
g(A)=Q(A)f(A)+r(A)=r(A).
$$

So

$$
\boxed{g(A)=g(\lambda_1)P_1+\cdots+g(\lambda_m)P_m}
$$

where

$$
\boxed{P_i=L_i(A)}.
$$

For $g(x)=x$:

$$
\boxed{A=\lambda_1P_1+\cdots+\lambda_mP_m}.
$$

For $g(x)=x^n$:

$$
\boxed{A^n=\lambda_1^nP_1+\cdots+\lambda_m^nP_m}.
$$

This is the standard procedure for this course.

---

## Part A: One Complete Example, Done the Standard Way (25 min)

Let

$$
B=\begin{pmatrix}4&-1\\2&1\end{pmatrix}.
$$

### Problem 1. Characteristic polynomial

Compute $f(x)=\det(xI-B)$ and factor it.

::: details Solution

$$
xI-B=
\begin{pmatrix}
x-4&1\\
-2&x-1
\end{pmatrix}
$$

so

$$
f(x)=\det(xI-B)=(x-4)(x-1)+2=x^2-5x+6.
$$

Hence

$$
\boxed{f(x)=(x-2)(x-3)}.
$$

The roots are

$$
\lambda_1=2,\qquad \lambda_2=3.
$$

:::

### Problem 2. Write the division formula

Let $g(x)$ be any polynomial. Write the correct division formula by $f(x)$.

::: details Solution

Since $f(x)$ has degree $2$,

$$
\boxed{g(x)=Q(x)(x-2)(x-3)+r(x)}
$$

where

$$
\boxed{\deg r<2}.
$$

So $r(x)$ must have the form

$$
r(x)=ax+b.
$$

This is the important degree restriction. The remainder is not arbitrary; it is determined by two values.

:::

### Problem 3. Analyze the roots of $f$

Use the roots $2$ and $3$ to determine the values of $r$.

::: details Solution

Plug $x=2$ into

$$
g(x)=Q(x)(x-2)(x-3)+r(x).
$$

The product term vanishes:

$$
g(2)=Q(2)(2-2)(2-3)+r(2)=r(2).
$$

Similarly,

$$
g(3)=r(3).
$$

Therefore the remainder has value table

$$
\begin{array}{c|cc}
x&2&3\\
\hline
r(x)&g(2)&g(3)
\end{array}
$$

This is the whole point of using the roots of the characteristic polynomial.

:::

### Problem 4. Write the remainder in Lagrange form

Find the Lagrange polynomials at $2$ and $3$, then write $r(x)$.

::: details Solution

The polynomial that is $1$ at $2$ and $0$ at $3$ is

$$
L_2(x)=\frac{x-3}{2-3}=3-x.
$$

The polynomial that is $0$ at $2$ and $1$ at $3$ is

$$
L_3(x)=\frac{x-2}{3-2}=x-2.
$$

Value table:

$$
\begin{array}{c|cc}
&x=2&x=3\\
\hline
L_2(x)&1&0\\
L_3(x)&0&1
\end{array}
$$

Therefore

$$
\boxed{r(x)=g(2)L_2(x)+g(3)L_3(x)}.
$$

That is,

$$
\boxed{r(x)=g(2)(3-x)+g(3)(x-2)}.
$$

:::

### Problem 5. Plug in $B$

Define

$$
P_2=L_2(B),\qquad P_3=L_3(B).
$$

Compute $P_2$ and $P_3$, then write $g(B)$.

::: details Solution

Since

$$
L_2(x)=3-x,\qquad L_3(x)=x-2,
$$

we get

$$
P_2=L_2(B)=3I-B
=
\begin{pmatrix}3&0\\0&3\end{pmatrix}
-
\begin{pmatrix}4&-1\\2&1\end{pmatrix}
=
\begin{pmatrix}-1&1\\-2&2\end{pmatrix},
$$

and

$$
P_3=L_3(B)=B-2I
=
\begin{pmatrix}4&-1\\2&1\end{pmatrix}
-
\begin{pmatrix}2&0\\0&2\end{pmatrix}
=
\begin{pmatrix}2&-1\\2&-1\end{pmatrix}.
$$

Now plug $B$ into the Lagrange formula for $r$:

$$
g(B)=r(B)=g(2)L_2(B)+g(3)L_3(B).
$$

Hence

$$
\boxed{g(B)=g(2)P_2+g(3)P_3}.
$$

:::

### Problem 6. Spectral decomposition and powers

Apply the formula to $g(x)=x$ and $g(x)=x^n$.

::: details Solution

For $g(x)=x$,

$$
g(2)=2,\qquad g(3)=3.
$$

So

$$
\boxed{B=2P_2+3P_3}.
$$

This is the spectral decomposition.

For $g(x)=x^n$,

$$
g(2)=2^n,\qquad g(3)=3^n.
$$

So

$$
\boxed{B^n=2^nP_2+3^nP_3}.
$$

Explicitly,

$$
\boxed{
B^n
=
2^n
\begin{pmatrix}-1&1\\-2&2\end{pmatrix}
+
3^n
\begin{pmatrix}2&-1\\2&-1\end{pmatrix}
}.
$$

This is a closed formula. No recurrence for coefficients is needed.

:::

### Problem 7. Check $B^4$

Use the closed formula to compute $B^4$.

::: details Solution

$$
B^4
=
16
\begin{pmatrix}-1&1\\-2&2\end{pmatrix}
+
81
\begin{pmatrix}2&-1\\2&-1\end{pmatrix}.
$$

Therefore

$$
B^4
=
\begin{pmatrix}
-16+162&16-81\\
-32+162&32-81
\end{pmatrix}
=
\boxed{\begin{pmatrix}146&-65\\130&-49\end{pmatrix}}.
$$

:::

---

## Part B: Value Tables as the Same Standard Method (15 min)

### Problem 8. Repeated root does not automatically stop us

Let

$$
C=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}.
$$

Its characteristic polynomial is

$$
\det(xI-C)=(x-2)(x+1)^2.
$$

Can we use the ordinary value-table/Lagrange method with roots $2$ and $-1$?

::: details Solution

The characteristic polynomial has a repeated root, so we do **not** use it directly for ordinary Lagrange interpolation.

Delete the repeated power:

$$
q(x)=(x-2)(x+1).
$$

Now test whether $q$ annihilates $C$:

$$
C-2I=
\begin{pmatrix}-2&1&1\\1&-2&1\\1&1&-2\end{pmatrix},
\qquad
C+I=
\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
$$

Then

$$
(C-2I)(C+I)
=
\begin{pmatrix}-2&1&1\\1&-2&1\\1&1&-2\end{pmatrix}
\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}
=0.
$$

So $q(C)=0$, and $q$ has distinct roots. Therefore $C$ is legal for today’s method.

For any polynomial $g$,

$$
g(C)=g(2)P_2+g(-1)P_{-1}.
$$

The repeated root in $\det(xI-C)$ is not the problem. The question is whether the square-free part still annihilates the matrix.

:::

Let $A$ be a matrix for which we have already confirmed the distinct-root annihilating polynomial

$$
f(x)=x(x-1)(x-3),
\qquad f(A)=0.
$$

Equivalently, the legal value-table roots are $0,1,3$.

For any polynomial $g(x)$,

$$
g(x)=Q(x)x(x-1)(x-3)+r(x),\qquad \deg r<3.
$$

At the roots:

$$
r(0)=g(0),\qquad r(1)=g(1),\qquad r(3)=g(3).
$$

So $g(A)$ is determined by the value table

$$
\begin{array}{c|ccc}
x&0&1&3\\
\hline
g(x)&g(0)&g(1)&g(3)
\end{array}
$$

### Problem 9. Write $A^n$ by value table

Assume $n\geq 1$. Write the value table of $x^n$, then write $A^n$ using projections.

::: details Solution

For $g(x)=x^n$,

$$
\begin{array}{c|ccc}
x&0&1&3\\
\hline
x^n&0&1&3^n
\end{array}
$$

Let $P_0,P_1,P_3$ be the spectral projections with value tables

$$
P_0:(1,0,0),\qquad P_1:(0,1,0),\qquad P_3:(0,0,1).
$$

Then

$$
\boxed{A^n=P_1+3^nP_3}.
$$

The zero eigenvalue contributes $0^nP_0=0$ for $n\geq 1$.

:::

### Problem 10. Recover one projection from the product of other factors

Compute $(A-I)(A-3I)$ by value table.

::: details Solution

The value table of $(x-1)(x-3)$ at $0,1,3$ is

$$
\begin{array}{c|ccc}
x&0&1&3\\
\hline
(x-1)(x-3)&3&0&0
\end{array}
$$

Therefore

$$
(A-I)(A-3I)=3P_0.
$$

So

$$
\boxed{P_0=\frac{(A-I)(A-3I)}{3}}.
$$

This is not a separate trick. It is the Lagrange polynomial for the root $0$:

$$
L_0(x)=\frac{(x-1)(x-3)}{(0-1)(0-3)}=\frac{(x-1)(x-3)}{3}.
$$

:::

---

### Problem 11. Find projections by solving value-table equations

Return to

$$
B=\begin{pmatrix}4&-1\\2&1\end{pmatrix},
\qquad
\det(xI-B)=(x-2)(x-3).
$$

We already confirmed a distinct-root annihilating polynomial. Instead of writing the Lagrange polynomials first, find $P_2$ and $P_3$ from the two spectral equations:

$$
P_2+P_3=I,
\qquad
2P_2+3P_3=B.
$$

::: details Solution

This is especially efficient for a $2\times 2$ matrix.

Subtract $2(P_2+P_3)=2I$ from the second equation:

$$
(2P_2+3P_3)-(2P_2+2P_3)=B-2I.
$$

So

$$
P_3=B-2I
=
\begin{pmatrix}2&-1\\2&-1\end{pmatrix}.
$$

Then

$$
P_2=I-P_3
=
\begin{pmatrix}-1&1\\-2&2\end{pmatrix}.
$$

Equivalently, subtract the second equation from $3(P_2+P_3)=3I$:

$$
P_2=3I-B.
$$

This is the same answer as Lagrange:

$$
P_2=L_2(B)=\frac{B-3I}{2-3}=3I-B,
\qquad
P_3=L_3(B)=\frac{B-2I}{3-2}=B-2I.
$$

So the linear-equation method is not a different theory. It is the value-table identity

$$
A=\lambda_1P_1+\lambda_2P_2,
\qquad
I=P_1+P_2
$$

solved directly for the projections.

:::

---

## Part C: Linear Recurrence as an Application (5 min)

Consider

$$
a_0=0,\qquad a_1=1,\qquad a_{n+1}=5a_n-6a_{n-1}.
$$

Set

$$
w_n=\begin{pmatrix}a_{n+1}\\a_n\end{pmatrix}.
$$

Then

$$
w_n=M^nw_0,\qquad
M=\begin{pmatrix}5&-6\\1&0\end{pmatrix},
\qquad
w_0=\begin{pmatrix}1\\0\end{pmatrix}.
$$

### Problem 12. Apply the same standard method to $M$

Find $M^n$ and $a_n$.

::: details Solution

First compute the characteristic polynomial:

$$
\det(xI-M)
=
\det\begin{pmatrix}x-5&6\\-1&x\end{pmatrix}
=x(x-5)+6
=x^2-5x+6
=(x-2)(x-3).
$$

The roots are again $2$ and $3$.

So the same Lagrange polynomials are

$$
L_2(x)=3-x,\qquad L_3(x)=x-2.
$$

Now plug in $M$:

$$
P_2=L_2(M)=3I-M
=
\begin{pmatrix}-2&6\\-1&3\end{pmatrix},
$$

and

$$
P_3=L_3(M)=M-2I
=
\begin{pmatrix}3&-6\\1&-2\end{pmatrix}.
$$

Therefore

$$
M^n=2^nP_2+3^nP_3.
$$

Apply this to $w_0$:

$$
w_n
=
2^n
\begin{pmatrix}-2&6\\-1&3\end{pmatrix}
\begin{pmatrix}1\\0\end{pmatrix}
+
3^n
\begin{pmatrix}3&-6\\1&-2\end{pmatrix}
\begin{pmatrix}1\\0\end{pmatrix}.
$$

So

$$
w_n
=
2^n\begin{pmatrix}-2\\-1\end{pmatrix}
+
3^n\begin{pmatrix}3\\1\end{pmatrix}.
$$

The second coordinate is $a_n$, hence

$$
\boxed{a_n=3^n-2^n}.
$$

:::

---

## TA Notes

### Main correction to the previous draft

Do not begin by advertising “spectral shortcut” as a clever separate method. The tutorial should force the standard chain:

$$
\boxed{
\text{char poly}
\to
\text{distinct-root annihilating polynomial}
\to
g=Qf+r
\to
\deg r \text{ and roots of } f
\to
\text{Lagrange formula for } r
\to
\text{plug in } A
}.
$$

The projections are not guessed. They are the Lagrange basis polynomials evaluated at the matrix. In $2\times2$ cases, they can also be found by solving $P_1+P_2=I$ and $\lambda_1P_1+\lambda_2P_2=A$.

### Board order

1. Put $B$ on the board and compute $f(x)=\det(xI-B)$.
2. Confirm $f$ has distinct roots, so it is a legal annihilating polynomial.
3. Write $g(x)=Q(x)f(x)+r(x)$ before mentioning projections.
4. Emphasize $\deg r<2$.
5. Plug in $x=2,3$ to get $r(2)=g(2)$ and $r(3)=g(3)$.
6. Write $r(x)=g(2)L_2(x)+g(3)L_3(x)$.
7. Only then define $P_2=L_2(B)$ and $P_3=L_3(B)$.
8. Then specialize to $g(x)=x$ and $g(x)=x^n$.

### Common mistakes to stop immediately

- Students try to find eigenvectors first. Redirect them to the polynomial route.
- Students write Lagrange polynomials without denominators. Make them check the value table.
- Students plug a matrix into a determinant. Remind them: expand $\det(xI-A)$ first, then substitute $A$ into the scalar polynomial.
- Students treat value tables as a shortcut unrelated to the proof. Emphasize: value tables are just the roots-and-remainder step written efficiently.
- Students think repeated roots in $\det(xI-A)$ automatically forbid the method. Correct statement: delete repeated powers and test whether the square-free part annihilates $A$.

### Minimal message students should leave with

If

$$
f(A)=0,
\qquad
f(x)=\prod_i(x-\lambda_i)
$$

has distinct roots, then every polynomial expression $g(A)$ is computed by:

$$
g(A)=\sum_i g(\lambda_i)L_i(A),
\qquad
L_i(x)=\prod_{j\neq i}\frac{x-\lambda_j}{\lambda_i-\lambda_j}.
$$

This one formula gives projections, spectral decomposition, and powers.

---

**Last Updated**: 2026-05-12
