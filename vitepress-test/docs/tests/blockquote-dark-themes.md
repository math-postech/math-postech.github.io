# Blockquote 深色模式配色（白色字体）

针对深色背景优化，blockquote 内外字体颜色一致（都是白色），仅用背景色区分。

---

## 方案 1：纯背景区分（最简洁）⭐

<style scoped>
.theme-bg-only blockquote {
  color: inherit !important;  /* 继承正文颜色（白色）*/
  background-color: rgba(66, 185, 131, 0.08);
  border-left: 4px solid #42b983;
  padding: 1rem;
  margin: 1rem 0;
}

.theme-bg-only blockquote p,
.theme-bg-only blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-bg-only">

> **高斯积分**
>
> 考虑以下重要积分：
> $$
> \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
> $$
>
> 这在概率论和量子力学中有广泛应用。文字与正文完全一致，仅用背景色区分。

正文字体（对比）：这是正常的段落文字，与 blockquote 内的字体颜色应该完全相同。

</div>

**特点**：
- 字体：与正文一致（白色/浅色）
- 背景：浅绿色半透明 `rgba(66, 185, 131, 0.08)`
- 边框：绿色 `#42b983`
- **视觉**：低对比，温和

---

## 方案 2：稍深背景（更明显）

<style scoped>
.theme-deeper-bg blockquote {
  color: inherit !important;
  background-color: rgba(66, 185, 131, 0.15);
  border-left: 4px solid #42b983;
  padding: 1rem;
  margin: 1rem 0;
}

.theme-deeper-bg blockquote p,
.theme-deeper-bg blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-deeper-bg">

> **费马大定理**
>
> 对于 $n > 2$，方程
> $$
> x^n + y^n = z^n
> $$
> 没有正整数解。
>
> 这个定理由怀尔斯在 1995 年证明。背景色稍深一些，区分更明显。

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：稍深的绿色 `rgba(66, 185, 131, 0.15)`
- 边框：绿色
- **视觉**：适中对比

---

## 方案 3：蓝色背景

<style scoped>
.theme-blue-bg blockquote {
  color: inherit !important;
  background-color: rgba(59, 130, 246, 0.12);
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  margin: 1rem 0;
}

.theme-blue-bg blockquote p,
.theme-blue-bg blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-blue-bg">

> **欧拉公式**
>
> 数学中最美的公式：
> $$
> e^{i\pi} + 1 = 0
> $$
>
> 它连接了五个最重要的数学常数。

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：蓝色半透明 `rgba(59, 130, 246, 0.12)`
- 边框：蓝色 `#3b82f6`
- **视觉**：学术风格

---

## 方案 4：橙色暖调

<style scoped>
.theme-orange-bg blockquote {
  color: inherit !important;
  background-color: rgba(251, 146, 60, 0.10);
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  margin: 1rem 0;
}

.theme-orange-bg blockquote p,
.theme-orange-bg blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-orange-bg">

> **黎曼猜想**
>
> 所有非平凡零点都位于临界线上：
> $$
> \zeta(s) = 0 \implies \Re(s) = \frac{1}{2}
> $$
>
> 这是数学中最著名的未解问题之一。

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：橙色半透明 `rgba(251, 146, 60, 0.10)`
- 边框：橙色 `#f59e0b`
- **视觉**：温暖醒目

---

## 方案 5：紫色优雅

<style scoped>
.theme-purple-bg blockquote {
  color: inherit !important;
  background-color: rgba(168, 85, 247, 0.10);
  border-left: 4px solid #a855f7;
  padding: 1rem;
  margin: 1rem 0;
}

.theme-purple-bg blockquote p,
.theme-purple-bg blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-purple-bg">

> **柯西-施瓦茨不等式**
>
> 对于任意向量 $\mathbf{u}, \mathbf{v}$：
> $$
> |\mathbf{u} \cdot \mathbf{v}| \leq \|\mathbf{u}\| \|\mathbf{v}\|
> $$
>
> 等号成立当且仅当 $\mathbf{u}$ 和 $\mathbf{v}$ 线性相关。

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：紫色半透明 `rgba(168, 85, 247, 0.10)`
- 边框：紫色 `#a855f7`
- **视觉**：优雅独特

---

## 方案 6：深色高对比背景

<style scoped>
.theme-high-contrast-bg blockquote {
  color: inherit !important;
  background-color: rgba(66, 185, 131, 0.20);
  border-left: 5px solid #10b981;
  padding: 1.2rem;
  margin: 1rem 0;
}

.theme-high-contrast-bg blockquote p,
.theme-high-contrast-bg blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-high-contrast-bg">

> **中值定理**
>
> 设 $f: [a,b] \to \mathbb{R}$ 连续且在 $(a,b)$ 上可微，则存在 $c \in (a,b)$ 使得
> $$
> f'(c) = \frac{f(b) - f(a)}{b - a}
> $$

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：较深的绿色 `rgba(66, 185, 131, 0.20)`
- 边框：加粗绿色 `5px solid #10b981`
- **视觉**：最明显的区分

---

## 方案 7：极简灰色

<style scoped>
.theme-minimal-gray blockquote {
  color: inherit !important;
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 3px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
  margin: 1rem 0;
}

.theme-minimal-gray blockquote p,
.theme-minimal-gray blockquote strong {
  color: inherit !important;
}
</style>

<div class="theme-minimal-gray">

> **极限定义**
>
> 对于任意 $\epsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - a| < \delta$ 时，有
> $$
> |f(x) - L| < \epsilon
> $$

正文字体（对比）：这是正常的段落文字。

</div>

**特点**：
- 字体：与正文一致
- 背景：极浅的白色 `rgba(255, 255, 255, 0.05)`
- 边框：半透明白色
- **视觉**：极简风格

---

## 对比测试

### 正常段落（无背景）

这是正常的段落文字，没有任何背景色。行内公式示例：设 $f(x) = x^2 + 2x + 1$，则其导数为 $f'(x) = 2x + 2$。

Display 公式示例：

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

### Blockquote（有背景）

> 这是 blockquote 中的文字，应该与上面的正文**颜色完全一致**（都是白色）。
>
> 行内公式：$g(x) = \sin x + \cos x$
>
> Display 公式：
> $$
> \int_0^{2\pi} \sin x \, dx = 0
> $$

**重点**：文字颜色应该完全一样，只有背景色不同！

---

## 配色参数说明

所有方案的 CSS 配置：

```css
blockquote {
  color: inherit !important;           /* 继承正文颜色（白色） */
  background-color: rgba(R, G, B, A);  /* 半透明背景 */
  border-left: 4px solid #HEX;         /* 彩色左边框 */
  padding: 1rem;
}
```

**调整参数**：
- `rgba(...)` 的 `A` 值：控制背景深浅（0.05-0.20）
- 边框颜色：`#42b983`（绿）、`#3b82f6`（蓝）、`#f59e0b`（橙）等
- 边框粗细：`3px` - `5px`

---

## 投票：你喜欢哪个？

1. **纯背景区分**（浅绿，最简洁）
2. **稍深背景**（绿色，适中）
3. **蓝色背景**（学术风格）
4. **橙色暖调**（醒目）
5. **紫色优雅**（独特）
6. **深色高对比**（最明显）
7. **极简灰色**（极简风格）

**或者告诉我**：
- 想要更深/更浅的背景
- 想要其他颜色的边框
- 想要调整透明度

我会立即应用到全站！
