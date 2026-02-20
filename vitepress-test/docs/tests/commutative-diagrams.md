# 交换图表测试（Commutative Diagrams）

测试 MathJax 的 `amscd` 包，用于绘制交换图表。

---

## Test 1: 基础交换图表

$$
\begin{CD}
A @>f>> B \\
@VVgV @VVhV \\
C @>>k> D
\end{CD}
$$

**Markdown Source**:
```markdown
$$
\begin{CD}
A @>f>> B \\
@VVgV @VVhV \\
C @>>k> D
\end{CD}
$$
```

---

## Test 2: 带标签的箭头

$$
\begin{CD}
X @>\alpha>> Y @>\beta>> Z \\
@V\gamma VV @VV\delta V @VV\epsilon V \\
U @>>\theta> V @>>\eta> W
\end{CD}
$$

---

## Test 3: 同态定理

$$
\begin{CD}
G @>\varphi>> G/\ker(\varphi) \\
@| @VV\cong V \\
G @>>\pi> \text{Im}(\varphi)
\end{CD}
$$

**解释**：
- `@>>>` = 右箭头
- `@VVV` = 下箭头
- `@<<<` = 左箭头
- `@AAA` = 上箭头
- `@=` = 等号

---

## Test 4: 正合列（Exact Sequence）

$$
\begin{CD}
0 @>>> A @>i>> B @>p>> C @>>> 0
\end{CD}
$$

---

## Test 5: 蛇引理示意图

$$
\begin{CD}
@. A @>>> B @>>> C @>>> 0 \\
@. @VVV @VVV @VVV \\
0 @>>> A' @>>> B' @>>> C'
\end{CD}
$$

---

## Test 6: 自然变换

$$
\begin{CD}
F(X) @>F(f)>> F(Y) \\
@V\eta_X VV @VV\eta_Y V \\
G(X) @>>G(f)> G(Y)
\end{CD}
$$

---

## Test 7: Pullback 图表

$$
\begin{CD}
P @>>> X \\
@VVV @VVfV \\
Y @>>g> Z
\end{CD}
$$

---

## Test 8: 复杂的交换图表

$$
\begin{CD}
\mathbb{Z} @>\times 2>> \mathbb{Z} @>\bmod 4>> \mathbb{Z}/4\mathbb{Z} \\
@V\bmod 2VV @VV\bmod 2V @VV\pi V \\
\mathbb{Z}/2\mathbb{Z} @= \mathbb{Z}/2\mathbb{Z} @>>> \mathbb{Z}/2\mathbb{Z}
\end{CD}
$$

---

## 语法说明

### 箭头类型

| 语法 | 效果 | 说明 |
|------|------|------|
| `@>>>` | →(右) | 右箭头 |
| `@<<<` | ←(左) | 左箭头 |
| `@VVV` | ↓(下) | 下箭头 |
| `@AAA` | ↑(上) | 上箭头 |
| `@=` | = | 等号（恒等态射） |
| `@\|` | \| | 垂直线 |
| `@.` | (空) | 占位符（无箭头） |

### 带标签的箭头

```
@>label>>   右箭头带上标签
@VlabelVV   下箭头带左标签
@>>label>   右箭头带下标签
```

---

## Blockquote 中的交换图表

> **引理**：考虑以下交换图表：
>
> $$
> \begin{CD}
> A @>\varphi>> B \\
> @V\psi VV @VVV \\
> C @>>> D
> \end{CD}
> $$
>
> 如果所有态射都是满射，则整个图表交换。

**Expected**: blockquote 中的交换图表正常显示，无 `>` 泄漏。

---

## 与 TikZ-CD 的对比

`amscd` 是简化版的交换图表包，适合基础用法。

**优点**：
- ✅ MathJax 原生支持
- ✅ 轻量，无需额外加载
- ✅ 语法简单

**局限**：
- ❌ 不支持弯曲箭头
- ❌ 不支持自定义箭头样式
- ❌ 布局相对固定

**如需更复杂的图表**，可以考虑：
1. 使用 TikZ（需要服务器端渲染）
2. 使用 xy-pic（MathJax 不支持）
3. 绘制为图片后嵌入

---

## 测试状态

::: tip 交换图表功能
如果上面的图表正常显示，说明 `amscd` 包工作正常 ✅
:::

[返回所有测试](./blockquote-math)
