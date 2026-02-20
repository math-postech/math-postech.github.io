# VitePress 是否真的能解决问题？深度分析

## TL;DR

**YES, VitePress 很可能能解决这个问题**，原因：

1. ✅ VitePress 使用 **markdown-it**（不是 marked.js）
2. ✅ markdown-it **更严格、可配置**，有专门的 math 插件
3. ✅ [markdown-it-mathjax3](https://github.com/tani/markdown-it-mathjax3) 明确配置了 **blockquote 兼容性**
4. ✅ GitHub 用的是 **commonmarker** (CommonMark)，VitePress 的 markdown-it 也遵循 CommonMark 但实现更好

但是：**我们需要实际测试来 100% 确认**。

---

## 详细分析

### 1. GitHub 用什么渲染器？

根据 [github/markup](https://github.com/github/markup)：

```ruby
GitHub uses: commonmarker
# https://github.com/gjtorikian/commonmarker
# Ruby wrapper for github/cmark-gfm (GitHub Flavored Markdown)
```

**关键点**：
- GitHub 使用的是 **自己维护的 CommonMark fork** (cmark-gfm)
- 2022年5月添加了[原生 LaTeX 支持](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
- 使用 **MathJax** 作为渲染引擎
- **明确支持** math in blockquotes（文档中提到）

**为什么 GitHub 能工作**：
```
正确的处理顺序：
1. 识别 math blocks ($$...$$)
2. 保护 math 内容不被 Markdown 处理
3. 处理其他 Markdown (blockquotes, lists, etc.)
4. 最后渲染 math
```

---

### 2. Gist 是什么？

**GitHub Gist** = GitHub 的代码片段分享服务

- 网址：https://gist.github.com
- 支持 Markdown 渲染（使用和 GitHub repo 相同的渲染器）
- **也支持 LaTeX math**（从 2022年开始）
- 相当于轻量级的 repo，用来分享代码片段或笔记

**用途**：
- 快速分享代码
- 嵌入到博客/文档中
- 临时文档/笔记

---

### 3. VitePress (markdown-it) vs Docsify (marked.js)

#### marked.js 的问题

| 问题 | 描述 | 状态 |
|------|------|------|
| **[CommonMark Issue #204](https://github.com/commonmark/cmark/issues/204)** | Lazy blockquote continuation bug | Open since 2015 |
| **[marked.js Issue #3375](https://github.com/markedjs/marked/issues/3375)** | 破坏 math delimiters (`\(`, `\)`, `\[`, `\]`) | Closed as "use extensions" |
| **处理顺序** | Markdown 先于 math → 定界符被破坏 | By design |

**marked.js 维护者的态度**：
> "Use a custom extension to preserve delimiters"

翻译：我们不会修，你自己想办法。

---

#### markdown-it 的优势

根据 [markdown-it-mathjax3](https://github.com/tani/markdown-it-mathjax3) 源码：

```javascript
// 源码中明确配置了 blockquote 兼容性
md.block.ruler.after('blockquote', 'math_block', mathBlock);
//                    ^^^^^^^^^^
//                    在 blockquote 处理之后才处理 math
```

**关键发现**：
1. ✅ **markdown-it-mathjax3 明确在 blockquote 之后处理 math**
2. ✅ markdown-it 的规则系统允许精确控制处理顺序
3. ✅ 插件可以访问和修改解析树，而不是直接操作文本
4. ✅ 更严格的 parser → 更可预测的行为

---

### 4. 技术对比：处理流程

#### ❌ Docsify (marked.js) 的流程

```
Markdown 输入:
  > $$
  > x^2 + y^2
  > $$

Step 1: marked.js 处理 blockquote
  → 生成: <blockquote><p>$$<br>&gt; x^2 + y^2<br>$$</p></blockquote>
                              ^^^ 这个 &gt; 会破坏 math

Step 2: MathJax 尝试渲染
  → 看到: $$ &gt; x^2 + y^2 $$
  → 渲染: > x^2 + y^2  (破坏了！)
```

---

#### ✅ VitePress (markdown-it) 的流程

```
Markdown 输入:
  > $$
  > x^2 + y^2
  > $$

Step 1: markdown-it 解析为 token 树
  [
    { type: 'blockquote_open' },
    { type: 'paragraph_open' },
    { type: 'inline', content: '$$\nx^2 + y^2\n$$' },  ← 保留原始内容
    { type: 'paragraph_close' },
    { type: 'blockquote_close' }
  ]

Step 2: markdown-it-mathjax3 插件介入
  → 识别 $$ ... $$ 定界符
  → 提取: x^2 + y^2 (干净的！)
  → 保护 math 内容

Step 3: 生成 HTML
  → <blockquote><div class="math">...</div></blockquote>
  → Math 内容未被 blockquote 处理污染

Step 4: MathJax 渲染
  → 渲染干净的 x^2 + y^2 ✅
```

---

### 5. 证据：markdown-it-mathjax3 的 blockquote 处理

从 [npm 文档](https://www.npmjs.com/package/markdown-it-mathjax3)：

> "The plugin configures the math block renderer to work **after blockquotes** in the markdown parsing rules, with **blockquote listed in the alternatives** for proper parsing."

这直接确认了：**markdown-it-mathjax3 专门设计来处理 blockquote + math 的情况**。

---

### 6. 还有没有更轻便的方案？

你的核心需求：**静态可用**（无构建步骤）

#### Option A: 保持 Docsify + 我们的 Workaround

**优点**：
- ✅ 零构建步骤
- ✅ 纯静态 HTML
- ✅ 无需迁移

**缺点**：
- ❌ Workaround 脆弱（依赖 MathJax 内部 API）
- ❌ 未来可能再次破坏
- ❌ 技术债累积

---

#### Option B: VitePress（推荐）

**"构建"其实不麻烦**：

```bash
# 本地开发（和 Docsify 一样简单）
npm run docs:dev

# 构建一次，生成静态 HTML（部署到 GitHub Pages）
npm run docs:build
# → 输出到 .vitepress/dist/
```

**GitHub Actions 自动化**：
```yaml
# .github/workflows/deploy.yml
- run: npm run docs:build
- uses: peaceiris/actions-gh-pages@v3
  with:
    publish_dir: .vitepress/dist
```

**优点**：
- ✅ **生成的是静态 HTML**（和 Docsify 一样）
- ✅ 比 Docsify 更快（预渲染 vs 客户端渲染）
- ✅ SEO 更好（搜索引擎能看到内容）
- ✅ 正确的 Markdown → Math 处理
- ✅ 一次构建，永久静态

**缺点**：
- ⚠️ 需要 npm/Node.js 环境（但 GitHub Actions 自动处理）
- ⚠️ 初次设置需要配置（估计 1-2 小时）

---

#### Option C: 其他零构建方案

**找不到**。根据 [Static Site Generators 2026](https://hygraph.com/blog/top-12-ssgs) 的调查：

> Docsify is **unique** in offering a no-build-step SPA approach.

所有现代文档工具（VitePress, Docusaurus, MkDocs, Hugo）都需要构建步骤，因为：
1. 预渲染 HTML → 更快的加载速度
2. 插件系统需要 Node.js/Python 环境
3. 优化（代码分割、tree-shaking）需要构建工具

**如果坚持零构建**：只有 Docsify + workarounds。

---

## 结论和建议

### 问题回答

1. **VitePress 会解决 `>` 问题吗？**
   - **很可能是 YES** ✅
   - markdown-it-mathjax3 专门处理了 blockquote 兼容性
   - 但需要实际测试来 100% 确认（见下方测试计划）

2. **GitHub 用什么？**
   - **commonmarker** (GitHub 自己的 CommonMark fork)
   - 原生支持 math in blockquotes
   - 不是 marked.js，所以没有这个问题

3. **Gist 是什么？**
   - GitHub 的代码片段服务
   - 用相同的渲染器（commonmarker + MathJax）
   - 也支持 math

4. **有没有轻便方案？**
   - **没有零构建的替代品**
   - VitePress 的"构建"可以通过 GitHub Actions 自动化
   - 构建后的产物是**纯静态 HTML**（和 Docsify 一样静态）

---

## 测试计划（推荐架构师执行）

### Phase 1: 本地验证（30分钟）

```bash
# 1. 创建 VitePress 测试项目
npm create vitepress@latest test-vitepress

# 2. 安装 math 插件
cd test-vitepress
npm install markdown-it-mathjax3

# 3. 配置 .vitepress/config.ts
import markdownItMathjax3 from 'markdown-it-mathjax3'

export default {
  markdown: {
    config: (md) => {
      md.use(markdownItMathjax3)
    }
  }
}

# 4. 创建测试文件 test.md
> $$
> x^2 + y^2 = z^2
> $$

>> $$
>> \frac{a}{b}
>> $$

# 5. 运行并检查
npm run docs:dev
# → 打开浏览器，检查公式是否包含 >
```

**成功标准**：
- ✅ 公式中**没有** `>` 符号
- ✅ blockquote 样式正确显示
- ✅ 嵌套 blockquote 也工作

---

### Phase 2: 迁移试点（2-4小时）

1. 选择一个小的 section 迁移（如 `colloquium/readme.md`）
2. 配置 VitePress 主题和插件（Mermaid, PlantUML, custom alerts）
3. 对比渲染效果
4. 评估迁移成本

---

### Phase 3: 决策

**如果测试通过** → 全面迁移 VitePress
**如果测试失败** → 调查其他方案或改进 workaround

---

## 参考资料

- [VitePress Markdown Extensions](https://vitepress.dev/guide/markdown)
- [markdown-it-mathjax3 Plugin](https://github.com/tani/markdown-it-mathjax3)
- [GitHub Markup Library](https://github.com/github/markup)
- [GitHub Math Rendering Docs](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions)
- [markdown-it vs marked Comparison](https://npm-compare.com/markdown-it,marked)
- [Top SSGs 2026](https://hygraph.com/blog/top-12-ssgs)
