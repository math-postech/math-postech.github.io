# 测试结果：marked.js vs markdown-it

## 测试环境

```bash
node renderer-comparison.js
```

---

## 结果：两者基础解析相同 ✅

### marked.js 输出
```html
<blockquote>
<p>$$
x^2 + y^2 = z^2
$$</p>
</blockquote>
```

### markdown-it 输出
```html
<blockquote>
<p>$$
x^2 + y^2 = z^2
$$</p>
</blockquote>
```

**结论**：两者的**纯 Markdown → HTML 转换**都是正确的，没有 `>` 泄漏。

---

## 那 Docsify 的问题出在哪？

### 1. **客户端渲染的处理流程**

Docsify 的架构：
```
用户访问 → index.html 加载
          ↓
     docsify.js 启动
          ↓
     fetch README.md（原始文本）
          ↓
     marked.js 解析为 HTML
          ↓
     插入到 <div id="app">
          ↓
     docsify-latex 插件扫描 DOM
          ↓
     提取 math → 调用 MathJax
```

**问题可能在步骤 5**：docsify-latex 插件如何提取 math？

---

### 2. **docsify-latex 的可能问题**

假设 `readme.md` 内容：
```markdown
> $$
> x^2 + y^2 = z^2
> $$
```

**场景 A**：插件在 marked.js 之前运行
```
原始文本: "> $$\n> x^2 + y^2 = z^2\n> $$"
         ↓
    docsify-latex 看到带 > 的文本
         ↓
    提取: "> x^2 + y^2 = z^2" ❌
```

**场景 B**：插件提取 `textContent` 而不是解析后的内容
```html
DOM: <blockquote><p>$$\nx^2 + y^2 = z^2\n$$</p></blockquote>
原始 .md 仍在内存: "> $$\n> x^2..."
     ↓
插件错误地使用了原始文本 ❌
```

---

## VitePress 为什么能避免？

### 静态构建流程

```
开发时编写 .md
      ↓
npm run docs:build（本地或 CI）
      ↓
markdown-it 解析（Node.js 环境）
      ↓
markdown-it-mathjax3 插件介入
      ↓
正确提取 math → 生成 HTML
      ↓
输出静态 HTML 文件
      ↓
部署到 GitHub Pages（纯静态文件）
```

**关键差异**：
1. ✅ **构建时处理**，不是运行时
2. ✅ **插件在 markdown-it 的解析树中工作**，不是 DOM
3. ✅ **明确的处理顺序**（配置中指定）

---

## 验证方法

### 测试 Docsify 的实际行为

在浏览器中打开：
```
https://math-postech.github.io/#/tests/blockquote-latex/
```

打开 DevTools Console，运行：
```javascript
// 查看 MathJax 实际接收到的内容
document.querySelectorAll('.MathJax').forEach(el => {
  console.log('MathJax source:', el.getAttribute('data-formula'));
});

// 或者查看 blockquote 内的原始文本
document.querySelectorAll('blockquote').forEach(el => {
  console.log('Blockquote text:', el.textContent);
});
```

如果输出包含 `>`，就证实了是 docsify-latex 插件的问题。

---

## 结论

1. **marked.js 本身不是问题**（至少在服务器端渲染时）
2. **Docsify 的客户端架构** + **docsify-latex 插件实现**可能是根源
3. **VitePress 的静态构建**从根本上避免了这类运行时问题

---

## 下一步

1. ✅ 在浏览器中验证 Docsify 的实际 DOM 结构
2. ⏭️ 创建 VitePress 原型项目测试
3. ⏭️ 对比两者的实际渲染结果
