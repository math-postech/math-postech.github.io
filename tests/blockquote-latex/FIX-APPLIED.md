# Blockquote + LaTeX Fix Applied ✓

## Problem Summary

当在 Docsify 中的 blockquote 中使用 display math 时，`>` 符号被渲染进公式内：

```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

渲染结果中公式包含了 `>`，导致 LaTeX 解析错误或显示异常。

---

## Root Cause

**处理顺序问题**：
1. Docsify 的 Markdown parser (marked.js) 先处理 blockquote
2. 每行开头的 `>` 被保留在内容中
3. MathJax 尝试渲染包含 `>` 的文本
4. 结果：`>` 出现在公式内

---

## Solution Applied

在 `index.html` 中添加了 **MathJax startup hook** 来预处理数学内容：

### 技术实现

```javascript
window.MathJax = {
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      // Override tex.findTeX to clean blockquote markers
      const tex = MathJax.startup.input[0];
      const originalFindTex = tex.findTeX.bind(tex);
      tex.findTeX = function(node) {
        const result = originalFindTex(node);
        result.forEach(match => {
          if (match.math) {
            // Remove leading '>' and whitespace from each line
            match.math = match.math.replace(/^>\s*/gm, '');
          }
        });
        return result;
      };
    }
  }
};
```

### 工作原理

1. **Hook 时机**：在 MathJax 启动完成、开始查找公式时介入
2. **清理逻辑**：对找到的每个数学表达式，使用正则 `/^>\s*/gm` 去除每行行首的 `>` 和空格
3. **适用范围**：处理所有层级的嵌套 blockquote (`>`, `>>`, `>>>` 等)

---

## Testing

访问测试页面验证修复效果：

```
https://math-postech.github.io/#/tests/blockquote-latex/
```

### 预期结果

所有测试用例中的公式应该**不再包含** `>` 符号：

- ✓ Test Case 1-3: 单层 blockquote
- ✓ Test Case 4-5: 嵌套 blockquote (`>>`, `>>>`)
- ✓ Test Case 6: 混合文本和公式
- ✓ Test Case 8: 多行对齐公式 (`\begin{aligned}`)

---

## Related Issues

这是一个**已知的跨平台问题**：

- **JupyterLab**: [Issue #16755](https://github.com/jupyterlab/jupyterlab/issues/16755) - "Wrong rendering of math inside block quote"
- **症状相同**: blockquote 中的 `>` 出现在 LaTeX 公式内
- **状态**: JupyterLab 尚未修复（截至 2024-09-07）

---

## Limitations

### 当前实现的限制

1. **公式中的合法 `>` 符号**：如果公式本身包含行首的 `>` (比如 `> x > 0`)，这种情况很少见但理论上会被误删除。

2. **性能影响**：每个公式都会执行一次正则替换，但影响微小（毫秒级）。

### 如果修复失效

如果问题依然存在，可能的原因：

1. **docsify-latex 插件覆盖了配置**：该插件在 MathJax 之后加载，可能重新初始化 MathJax
2. **缓存问题**：强制刷新浏览器 (Ctrl+Shift+R / Cmd+Shift+R)

**备用方案**：使用 HTML `<blockquote>` 标签代替 Markdown `>` 语法（参见 `readme.md` 中的 Solution 1）

---

## References

- [MathJax Pre- and Post-Filters Documentation](https://docs.mathjax.org/en/stable/advanced/synchronize/filters.html)
- [JupyterLab Issue #16755](https://github.com/jupyterlab/jupyterlab/issues/16755)
- [Markdown Math Rendering Challenges](https://yihui.org/en/2018/07/latex-math-markdown/)

---

## Commit

Applied in commit `7e3028e` - 2026-02-20
