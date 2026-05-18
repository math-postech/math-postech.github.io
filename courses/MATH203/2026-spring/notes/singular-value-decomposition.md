# Lecture 20: Singular Value Decomposition

> **Theme:** A real matrix sends a round ball to an ellipsoid. Singular value decomposition records the input axes, the output axes, and the axis lengths.

---

## 1. The Guiding Question

Start with a real matrix

$$
A:
\mathbb{R}^n\longrightarrow \mathbb{R}^m.
$$

The geometric question is:

$$
\boxed{\text{What does }A\text{ do to the unit ball?}}
$$

The answer is:

$$
\boxed{\text{round ball}\xrightarrow{\ A\ }\text{ellipsoid with orthogonal axes}.}
$$

Singular value decomposition is the algebraic description of this picture.

---

## 2. The Axis Equation

We want special input directions $v_i$ such that their outputs land exactly on the output axes:

$$
Av_i=\sigma_i u_i.
$$

Here:

| Symbol | Meaning |
|---|---|
| $v_i$ | input axis direction, living in the domain |
| $\sigma_i$ | axis length, a nonnegative number |
| $u_i$ | output axis direction, living in the codomain |

The singular values are ordered as

$$
\sigma_1\ge \sigma_2\ge\cdots\ge 0.
$$

They are lengths, so they cannot be negative.

---

## 3. Why We Look at $A^TA$

The matrix $A$ may be rectangular, so we do not diagonalize $A$ directly.

Instead, measure how much $A$ stretches an input vector $x$:

$$
\|Ax\|^2=(Ax)^T(Ax)=x^TA^TAx.
$$

So

$$
G=A^TA
$$

is the stretch-measuring matrix on the input side.

It is real symmetric:

$$
(A^TA)^T=A^TA.
$$

Therefore the real symmetric spectral theorem applies.

---

## 4. Find the Input Axes

Orthogonally diagonalize $A^TA$:

$$
A^TA=V\Sigma^2V^T.
$$

Equivalently, the columns $v_i$ of $V$ satisfy

$$
A^TA v_i=\lambda_i v_i.
$$

Because

$$
\lambda_i
=v_i^TA^TAv_i
=\|Av_i\|^2\ge0,
$$

we write

$$
\lambda_i=\sigma_i^2,
\qquad
\sigma_i=\sqrt{\lambda_i}.
$$

Thus

$$
A^TA v_i=\sigma_i^2v_i.
$$

The vectors $v_i$ are the input axes on the unit circle/ball.

---

## 5. Find the Output Axes

If $\sigma_i>0$, define

$$
\boxed{u_i=\frac{Av_i}{\sigma_i}.}
$$

Then

$$
Av_i=\sigma_i u_i.
$$

Also, $u_i$ has length $1$ because

$$
\|u_i\|=\frac{\|Av_i\|}{\sigma_i}=1.
$$

For $i\ne j$,

$$
 u_i^Tu_j
 =\frac{(Av_i)^T(Av_j)}{\sigma_i\sigma_j}
 =\frac{v_i^TA^TAv_j}{\sigma_i\sigma_j}
 =\frac{\sigma_j^2}{\sigma_i\sigma_j}v_i^Tv_j
 =0.
$$

So the output vectors $u_i$ are orthonormal.

---

## 6. Zero Singular Values

If $\sigma_i=0$, then

$$
\|Av_i\|^2=v_i^TA^TAv_i=0.
$$

Therefore

$$
Av_i=0.
$$

So zero singular values correspond to invisible input directions, i.e. null-space directions.

If the nonzero output vectors $u_1,\ldots,u_r$ do not fill all of $\mathbb{R}^m$, complete them to an orthonormal basis:

$$
u_1,\ldots,u_r,u_{r+1},\ldots,u_m.
$$

This gives the full orthogonal matrix $U$.

---

## 7. Stack the Axis Equations

For each input axis,

$$
Av_i=\sigma_i u_i.
$$

Stack all columns:

$$
A
\underbrace{\begin{pmatrix}
|&|&&|\\
v_1&v_2&\cdots&v_n\\
|&|&&|
\end{pmatrix}}_{V}
=
\underbrace{\begin{pmatrix}
|&|&&|\\
u_1&u_2&\cdots&u_m\\
|&|&&|
\end{pmatrix}}_{U}
\underbrace{\Sigma}_{\text{axis lengths}}.
$$

Thus

$$
AV=U\Sigma.
$$

Since $V$ is orthogonal, $V^{-1}=V^T$, and hence

$$
\boxed{A=U\Sigma V^T.}
$$

---

## 8. The SVD Theorem

For every real $m\times n$ matrix $A$, there exist orthogonal matrices $U,V$ and a rectangular diagonal matrix $\Sigma$ with nonnegative entries such that

$$
\boxed{A=U\Sigma V^T.}
$$

Geometrically:

| Piece | Meaning |
|---|---|
| $V$ | orthonormal input axes |
| $\Sigma$ | axis lengths of the output ellipsoid |
| $U$ | orthonormal output axes |

---

## 9. Method Summary

To compute a singular value decomposition:

1. Compute $A^TA$.
2. Orthogonally diagonalize it:
   $$
   A^TA=V\Sigma^2V^T.
   $$
3. Read singular values from square roots of eigenvalues:
   $$
   \sigma_i=\sqrt{\lambda_i}.
   $$
4. For each $\sigma_i>0$, compute
   $$
   u_i=\frac{Av_i}{\sigma_i}.
   $$
5. Complete the $u_i$'s to an orthonormal basis if needed.
6. Conclude
   $$
   A=U\Sigma V^T.
   $$

---

## 10. Final Picture

SVD is the axis system of a linear transformation:

```text
input vector
   ↓ measure in orthonormal input axes V
coordinates
   ↓ stretch by singular values Σ
ellipsoid coordinates
   ↓ rebuild in orthonormal output axes U
output vector
```

In one line:

$$
\boxed{\text{input axes }v_i\quad\xrightarrow{A}\quad \text{axis lengths }\sigma_i\text{ along output axes }u_i.}
$$
