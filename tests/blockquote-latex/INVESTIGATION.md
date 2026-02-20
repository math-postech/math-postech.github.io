# Blockquote + LaTeX Investigation

## Problem Description

当在 Docsify 中使用引用块（blockquote）包含 display math 时：

```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

`>` 符号可能被渲染到公式内部，导致 LaTeX 解析错误或显示异常。

## Root Cause Analysis

### Processing Pipeline

1. **Docsify** 使用 **marked.js** 作为 Markdown 解析器
2. **marked.js** 将 Markdown 转换为 HTML
3. **docsify-latex** 插件调用 **MathJax 3** 来渲染数学公式

### The Issue

**处理顺序问题**:
```
Markdown Source → marked.js → HTML → MathJax → Final Render
```

当 marked.js 处理：
```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

它生成的 HTML 可能是：
```html
<blockquote>
<p>$$
&gt; x^2 + y^2 = z^2
$$</p>
</blockquote>
```

或者：
```html
<blockquote>
<p>$$<br>
x^2 + y^2 = z^2<br>
$$</p>
</blockquote>
```

关键问题：**marked.js 可能将每行开头的 `>` 保留为文本内容**，而 MathJax 随后会尝试渲染包含这些 `>` 的内容。

## Current Configuration

从 `index.html` (lines 34-37):

```javascript
latex: {
    inlineMath   : [['$', '$'], ['\\(', '\\)']], // default
    displayMath  : [['$$', '$$']],               // default
}
```

MathJax 配置是标准的，问题不在这里。

## Potential Solutions

### Option 1: Use HTML blockquote tags

**Instead of**:
```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

**Use**:
```html
<blockquote>

$$
x^2 + y^2 = z^2
$$

</blockquote>
```

**Pros**: 完全绕过 Markdown blockquote 处理
**Cons**: 失去 Markdown 的简洁性

### Option 2: Custom MathJax Preprocessor

在 `index.html` 中添加自定义的 MathJax 配置来清理 `>` 符号：

```javascript
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    renderActions: {
      find: [10, function (doc) {
        // Custom preprocessing to remove leading > from math blocks
        for (const math of doc.math) {
          math.math = math.math.replace(/^>\s*/gm, '');
        }
      }, '']
    }
  }
};
```

**Pros**: 自动修复问题
**Cons**: 需要修改 MathJax 配置，可能影响其他功能

### Option 3: Custom Docsify Plugin

创建一个 Docsify plugin 在 marked.js 之后、MathJax 之前运行：

```javascript
window.$docsify = {
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(content) {
        // Regex to find $$ blocks within blockquotes and clean them
        return content.replace(
          /^(>+)\s*\$\$\s*\n((?:^>.*\n?)*?)^(>+)\s*\$\$/gm,
          function(match, start, body, end) {
            // Remove leading > from body lines
            const cleaned = body.replace(/^>\s*/gm, '');
            return '$$\n' + cleaned + '$$';
          }
        );
      });
    }
  ]
};
```

**Pros**: 在 Markdown 解析前修复问题
**Cons**: 需要维护正则表达式逻辑

### Option 4: Restructure Content

**避免在 blockquote 中使用 display math**：

```markdown
> Consider the Pythagorean theorem:

$$
x^2 + y^2 = z^2
$$
```

**Pros**: 最简单，无需配置更改
**Cons**: 限制了内容结构的灵活性

### Option 5: Use Indented Code Blocks

如果 blockquote 只是为了视觉缩进：

```markdown
>     x² + y² = z²
```

使用纯文本而非 LaTeX，或者用 CSS 实现缩进。

**Pros**: 避免解析冲突
**Cons**: 失去 LaTeX 渲染能力

## Recommended Approach

### Short-term (Immediate fix)

**Option 4**: 重构现有内容，将 display math 移出 blockquote。

示例模式：
```markdown
> **Theorem**: The following holds:

$$
\text{equation here}
$$

> where $x$ represents...
```

### Medium-term (If problem persists)

**Option 1 + Option 3 组合**:
1. 对于新内容，使用 HTML `<blockquote>` 标签
2. 添加自定义 Docsify plugin 来自动修复旧内容

### Long-term (If widely needed)

**Option 2**: 配置 MathJax preprocessor 来自动清理，并将此配置文档化。

## Testing Strategy

1. 访问 `/tests/blockquote-latex/readme.md` 查看所有测试用例
2. 记录哪些测试用例失败（显示 `>` 在公式内）
3. 尝试每个解决方案，验证是否修复问题
4. 选择最适合项目需求的方案

## Next Steps

- [ ] 运行测试并记录结果
- [ ] 确认问题的确切表现形式
- [ ] 决定采用哪个解决方案
- [ ] 如果需要，修改 `index.html` 配置
- [ ] 更新现有内容中受影响的 blockquote
- [ ] 在 CLAUDE.md 中记录最佳实践
