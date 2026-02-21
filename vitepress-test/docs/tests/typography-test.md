# 排版美观性测试

测试正文与数学公式的混排效果，确保讲义的可读性和美观性。

---

## 1. 微积分基础

### 1.1 极限的定义

函数 $f(x)$ 在点 $a$ 处的极限定义如下：

::: info 定义（极限）
设 $f$ 在点 $a$ 的某个去心邻域内有定义。如果对于任意 $\epsilon > 0$，存在 $\delta > 0$，使得当 $0 < |x - a| < \delta$ 时，有

$$
|f(x) - L| < \epsilon
$$

则称 $L$ 为 $f(x)$ 当 $x \to a$ 时的极限，记作 $\lim_{x \to a} f(x) = L$。
:::

这个定义是数学分析的基础。注意到 $\epsilon$ 和 $\delta$ 的选择是任意的，这体现了极限的**任意性**特征。

---

### 1.2 导数的几何意义

函数 $f(x)$ 在点 $x_0$ 处的导数 $f'(x_0)$ 定义为

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

几何上，这表示曲线 $y = f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。

> **例题**：计算 $f(x) = x^2$ 在 $x = 2$ 处的导数。
>
> **解**：
> $$
> \begin{aligned}
> f'(2) &= \lim_{h \to 0} \frac{(2+h)^2 - 4}{h} \\
> &= \lim_{h \to 0} \frac{4 + 4h + h^2 - 4}{h} \\
> &= \lim_{h \to 0} \frac{4h + h^2}{h} \\
> &= \lim_{h \to 0} (4 + h) = 4
> \end{aligned}
> $$

因此 $f'(2) = 4$。这意味着在 $x = 2$ 处，曲线的切线斜率为 4。

---

## 2. 线性代数应用

### 2.1 向量空间

设 $V$ 是一个向量空间，$\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n \in V$。如果对于任意标量 $c_1, c_2, \ldots, c_n$，等式

$$
c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \cdots + c_n \mathbf{v}_n = \mathbf{0}
$$

只有平凡解 $c_1 = c_2 = \cdots = c_n = 0$，则称这些向量**线性无关**。

::: prop
**命题**：$n$ 维向量空间 $\mathbb{R}^n$ 中，任意 $n+1$ 个向量必线性相关。
:::

**证明思路**：设有 $n+1$ 个向量 $\mathbf{v}_1, \ldots, \mathbf{v}_{n+1}$。构造矩阵

$$
A = [\mathbf{v}_1 | \mathbf{v}_2 | \cdots | \mathbf{v}_{n+1}]
$$

由于 $A$ 是 $n \times (n+1)$ 矩阵，方程 $A\mathbf{x} = \mathbf{0}$ 必有非零解，因此向量组线性相关。

---

### 2.2 特征值和特征向量

给定矩阵 $A \in \mathbb{R}^{n \times n}$，如果存在非零向量 $\mathbf{v}$ 和标量 $\lambda$ 使得

$$
A\mathbf{v} = \lambda \mathbf{v}
$$

则称 $\lambda$ 为 $A$ 的**特征值**，$\mathbf{v}$ 为对应的**特征向量**。

> **例题**：求矩阵 $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ 的特征值。
>
> **解**：特征多项式为
> $$
> \det(A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - 1
> $$
>
> 令其为零：
> $$
> (2-\lambda)^2 - 1 = 0 \implies \lambda^2 - 4\lambda + 3 = 0 \implies (\lambda - 3)(\lambda - 1) = 0
> $$
>
> 因此特征值为 $\lambda_1 = 3$ 和 $\lambda_2 = 1$。

---

## 3. 概率论基础

### 3.1 正态分布

正态分布 $\mathcal{N}(\mu, \sigma^2)$ 的概率密度函数为

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

其中 $\mu$ 是均值，$\sigma^2$ 是方差。标准正态分布对应 $\mu = 0$，$\sigma = 1$。

::: exa
**中心极限定理**：设 $X_1, X_2, \ldots, X_n$ 是独立同分布的随机变量，均值为 $\mu$，方差为 $\sigma^2$。则当 $n \to \infty$ 时，标准化和

$$
Z_n = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}}
$$

的分布趋于标准正态分布 $\mathcal{N}(0, 1)$。
:::

这个定理解释了为什么正态分布在自然界中如此普遍。

---

### 3.2 贝叶斯定理

设事件 $A$ 和 $B$ 满足 $P(B) > 0$，则

$$
P(A \mid B) = \frac{P(B \mid A) P(A)}{P(B)}
$$

这就是**贝叶斯定理**。它在统计推断中有广泛应用。

> **应用示例**：医学诊断
>
> 假设某种疾病的患病率为 $P(D) = 0.01$（1%）。诊断测试的敏感性为 $P(+ \mid D) = 0.95$，特异性为 $P(- \mid \neg D) = 0.90$。
>
> 如果测试结果为阳性，患病概率为：
> $$
> \begin{aligned}
> P(D \mid +) &= \frac{P(+ \mid D) P(D)}{P(+)} \\
> &= \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.10 \times 0.99} \\
> &= \frac{0.0095}{0.1085} \approx 0.0876 \approx 8.76\%
> \end{aligned}
> $$

即使测试阳性，患病概率仍然不到 10%！这体现了基础概率的重要性。

---

## 4. 复分析简介

### 4.1 柯西-黎曼方程

设 $f(z) = u(x,y) + iv(x,y)$ 是复变函数，其中 $z = x + iy$。如果 $f$ 在点 $z_0$ 可微，则必须满足**柯西-黎曼方程**：

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$

这两个偏微分方程是复可微性的必要条件。

---

### 4.2 留数定理

::: lemma
**留数定理**：设 $f$ 在简单闭曲线 $C$ 内除有限个孤立奇点外解析，则

$$
\oint_C f(z) \, dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)
$$

其中 $z_1, \ldots, z_n$ 是 $C$ 内的所有奇点。
:::

这个定理在计算复杂积分时非常有用。例如，计算

$$
\int_{-\infty}^{\infty} \frac{dx}{1 + x^2}
$$

可以考虑复函数 $f(z) = \frac{1}{1+z^2}$ 在上半平面的积分。奇点为 $z = i$，留数为 $\frac{1}{2i}$，因此积分值为

$$
2\pi i \cdot \frac{1}{2i} = \pi
$$

---

## 5. 混合排版示例

在实际讲义中，我们经常需要在一段话中混合多个公式。例如，考虑二次方程 $ax^2 + bx + c = 0$（其中 $a \neq 0$）的求根公式

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

这个公式的判别式 $\Delta = b^2 - 4ac$ 决定了根的性质：
- 当 $\Delta > 0$ 时，有两个不同的实根
- 当 $\Delta = 0$ 时，有一个重根 $x = -\frac{b}{2a}$
- 当 $\Delta < 0$ 时，有两个共轭复根

这些结论在代数和几何中都有重要应用。例如，抛物线 $y = ax^2 + bx + c$ 与 $x$ 轴的交点个数由 $\Delta$ 的符号决定。

---

## 排版检查清单

请检查以下方面：

- [ ] 正文字体大小合适（不太小也不太大）
- [ ] 行内公式 $x^2$ 与文字高度协调
- [ ] Display 公式 $\displaystyle \int_a^b f(x) dx$ 居中且突出
- [ ] Blockquote 内的文字清晰易读（颜色！）
- [ ] 公式编号和对齐美观
- [ ] 代码块和数学公式区分明显
- [ ] 不同标题层级清晰
- [ ] 链接和强调文字突出

---

## 你觉得如何？

这个页面展示了：
1. ✅ 正文与行内公式混排
2. ✅ Display 公式的展示
3. ✅ Blockquote 中的定理和例题
4. ✅ 自定义容器（info, prop, lemma, exa）
5. ✅ 多级标题结构

**请反馈**：
- 字体大小合适吗？
- 公式是否美观？
- 行间距舒适吗？
- Blockquote 颜色（见配色方案页）你喜欢哪个？

告诉我哪里需要调整！
