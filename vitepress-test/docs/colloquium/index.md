# Colloquium (Example Page)

This is an example of how the existing Docsify content would look in VitePress.

---

## Spring 2026 Schedule

::: info Upcoming Talk
**Date**: March 15, 2026
**Speaker**: Prof. John Doe (MIT)
**Title**: Recent Advances in Algebraic Topology
:::

### Abstract

> In this talk, we discuss recent developments in the theory of homotopy groups.
> The main result is the following:
>
> $$
> \pi_n(S^n) \cong \mathbb{Z}
> $$
>
> for all $n \geq 1$.

::: lemma
**Key Lemma**: For any continuous map $f: S^n \to S^n$, the degree $\deg(f)$ is well-defined.
:::

---

## Past Talks

### February 2026

**Speaker**: Prof. Jane Smith (Stanford)
**Title**: Differential Geometry and Physics

> **Main Theorem**: The Gauss-Bonnet theorem states that for a closed surface $M$,
> $$
> \int_M K \, dA = 2\pi \chi(M)
> $$
> where $K$ is the Gaussian curvature and $\chi(M)$ is the Euler characteristic.

::: exa
**Example**: For a sphere, $\chi(S^2) = 2$ and $K = 1/R^2$, so:
$$
\int_{S^2} \frac{1}{R^2} \, dA = \frac{4\pi R^2}{R^2} = 4\pi = 2\pi \cdot 2 \checkmark
$$
:::

---

## Features Demonstrated

This page shows:
- ✅ Math in blockquotes (working!)
- ✅ Custom blocks (lemma, example)
- ✅ Mixed content (text + math)
- ✅ Clean URL structure (`/colloquium/` not `/colloquium/readme.html`)

---

::: tip Migration Note
This content would be a **direct copy** from Docsify's `colloquium/readme.md` with minimal changes.
:::
