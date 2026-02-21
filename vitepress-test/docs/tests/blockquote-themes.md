# Blockquote 配色方案

当前 blockquote 的灰色字体不够醒目。以下提供 5 种配色方案供选择。

---

## 方案 1：经典蓝（当前默认，灰色）

> 这是当前的默认样式（灰色字体）。
>
> $$
> \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
> $$
>
> 字体颜色：`#6a737d`（灰色），边框：`#42b983`（绿色）

---

## 方案 2：深色清晰（推荐）⭐

<style scoped>
.theme-dark-clear blockquote {
  color: #2c3e50 !important;
  background-color: rgba(66, 185, 131, 0.05);
  border-left: 4px solid #42b983;
  padding: 1rem;
  font-weight: 450;
}
</style>

<div class="theme-dark-clear">

> **高斯积分**
>
> 考虑以下重要积分：
> $$
> \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
> $$
>
> 这在概率论和量子力学中有广泛应用。

</div>

**配色**：
- 字体：深灰色 `#2c3e50`（清晰）
- 背景：浅绿色 `rgba(66, 185, 131, 0.05)`
- 边框：绿色 `#42b983`
- 字重：稍粗 `450`

---

## 方案 3：深蓝学术风

<style scoped>
.theme-academic-blue blockquote {
  color: #1e3a8a !important;
  background-color: rgba(59, 130, 246, 0.08);
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  font-weight: 500;
}
</style>

<div class="theme-academic-blue">

> **费马大定理**
>
> 对于 $n > 2$，方程
> $$
> x^n + y^n = z^n
> $$
> 没有正整数解。
>
> 这个定理由怀尔斯在 1995 年证明。

</div>

**配色**：
- 字体：深蓝 `#1e3a8a`
- 背景：浅蓝 `rgba(59, 130, 246, 0.08)`
- 边框：蓝色 `#3b82f6`
- 字重：中等 `500`

---

## 方案 4：温暖棕色

<style scoped>
.theme-warm-brown blockquote {
  color: #78350f !important;
  background-color: rgba(251, 191, 36, 0.08);
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  font-weight: 500;
}
</style>

<div class="theme-warm-brown">

> **欧拉公式**
>
> 数学中最美的公式：
> $$
> e^{i\pi} + 1 = 0
> $$
>
> 它连接了五个最重要的数学常数。

</div>

**配色**：
- 字体：深棕 `#78350f`
- 背景：浅黄 `rgba(251, 191, 36, 0.08)`
- 边框：橙色 `#f59e0b`
- 字重：中等 `500`

---

## 方案 5：紫色优雅

<style scoped>
.theme-elegant-purple blockquote {
  color: #581c87 !important;
  background-color: rgba(168, 85, 247, 0.06);
  border-left: 4px solid #a855f7;
  padding: 1rem;
  font-weight: 500;
}
</style>

<div class="theme-elegant-purple">

> **黎曼猜想**
>
> 所有非平凡零点都位于临界线上：
> $$
> \zeta(s) = 0 \implies \Re(s) = \frac{1}{2}
> $$
>
> 这是数学中最著名的未解问题之一。

</div>

**配色**：
- 字体：深紫 `#581c87`
- 背景：浅紫 `rgba(168, 85, 247, 0.06)`
- 边框：紫色 `#a855f7`
- 字重：中等 `500`

---

## 方案 6：黑色高对比（超清晰）

<style scoped>
.theme-high-contrast blockquote {
  color: #000000 !important;
  background-color: rgba(66, 185, 131, 0.1);
  border-left: 5px solid #10b981;
  padding: 1.2rem;
  font-weight: 550;
}
</style>

<div class="theme-high-contrast">

> **柯西-施瓦茨不等式**
>
> 对于任意向量 $\mathbf{u}, \mathbf{v}$：
> $$
> |\mathbf{u} \cdot \mathbf{v}| \leq \|\mathbf{u}\| \|\mathbf{v}\|
> $$
>
> 等号成立当且仅当 $\mathbf{u}$ 和 $\mathbf{v}$ 线性相关。

</div>

**配色**：
- 字体：纯黑 `#000000`（最清晰）
- 背景：浅绿 `rgba(66, 185, 131, 0.1)`
- 边框：绿色加粗 `5px solid #10b981`
- 字重：较粗 `550`

---

## 正文 + 公式混排示例

### 示例 1：定理证明

在微积分中，我们经常需要计算极限。例如，考虑经典的极限

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

这个结果可以用洛必达法则证明。设 $f(x) = \sin x$ 和 $g(x) = x$，则

$$
\lim_{x \to 0} \frac{f(x)}{g(x)} = \lim_{x \to 0} \frac{f'(x)}{g'(x)} = \lim_{x \to 0} \frac{\cos x}{1} = 1
$$

因此原极限为 1。这个结果在三角函数的微分中非常重要。

---

### 示例 2：带引用的证明

> **定理**（中值定理）
>
> 设 $f: [a,b] \to \mathbb{R}$ 连续且在 $(a,b)$ 上可微，则存在 $c \in (a,b)$ 使得
> $$
> f'(c) = \frac{f(b) - f(a)}{b - a}
> $$

**证明**：构造辅助函数

$$
g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)
$$

显然 $g(a) = g(b) = 0$。由罗尔定理，存在 $c \in (a,b)$ 使得 $g'(c) = 0$。计算得

$$
g'(c) = f'(c) - \frac{f(b) - f(a)}{b - a} = 0
$$

因此 $f'(c) = \frac{f(b) - f(a)}{b - a}$。证毕。

---

### 示例 3：行内公式

设 $\epsilon > 0$ 为任意小的正数。根据极限定义，存在 $\delta > 0$ 使得当 $0 < |x - a| < \delta$ 时，有 $|f(x) - L| < \epsilon$。这意味着 $f(x)$ 可以任意接近 $L$。

特别地，如果 $f(x) = x^2$，则当 $x \to 2$ 时，$f(x) \to 4$。我们可以取 $\delta = \min\{1, \epsilon/5\}$ 来满足 $\epsilon$-$\delta$ 条件。

---

## 投票：你喜欢哪个方案？

请告诉我你喜欢的方案编号（1-6），我会应用到全站！

**推荐**：
- **方案 2**：深色清晰（平衡美观和清晰度）
- **方案 6**：黑色高对比（最清晰，但可能太重）
- **方案 3**：学术蓝（传统学术风格）

你也可以要求微调任何方案的颜色！
