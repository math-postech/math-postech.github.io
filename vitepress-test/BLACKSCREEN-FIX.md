# 黑屏问题修复指南

## 问题原因

你的 GitHub Pages 现在有**两个部署系统在冲突**：

1. **旧系统（Legacy）**：从 `main` 分支根目录部署 Docsify
2. **新系统（GitHub Actions）**：尝试部署 VitePress

当前 GitHub Pages 还在使用旧系统，所以看不到 VitePress 的内容。

---

## 🔧 解决方案 1：启用 GitHub Actions（推荐）

### 步骤：

1. **打开 GitHub Pages 设置**
   ```
   https://github.com/math-postech/math-postech.github.io/settings/pages
   ```

2. **找到 "Build and deployment" 部分**

3. **Source 下拉菜单**，从 `Deploy from a branch` 改为：
   ```
   ⭐ GitHub Actions
   ```

4. **保存**

5. **等待 1-2 分钟**，然后访问：
   ```
   https://math-postech.github.io/vitepress-test/
   ```

### 结果

- ✅ VitePress 测试站点可见
- ✅ Docsify 也继续工作（在根路径）
- ✅ 两者互不干扰

---

## 🔧 解决方案 2：临时测试链接（如果不想改配置）

如果你现在不想改 GitHub Pages 配置，我可以：

1. 修改 workflow，部署到 `gh-pages` 分支
2. 或者提供一个本地预览方式

### 本地预览（立即可用）

```bash
cd vitepress-test
npm install  # 如果还没装
npm run docs:build
npm run docs:preview
```

打开显示的 URL（通常是 `http://localhost:4173/vitepress-test/`）

---

## 📊 验证修复

修改后，访问测试站点：

```
https://math-postech.github.io/vitepress-test/
```

### 应该看到

- ✅ 漂亮的首页（不是黑屏）
- ✅ "POSTECH Math (VitePress Test)" 标题
- ✅ 特性卡片（Math in Blockquotes, Auto Cache Busting, 等）
- ✅ 导航栏（Home, Tests, Colloquium）

### 黑屏调试

如果还是黑屏，打开浏览器开发者工具（F12）：

1. **Console 面板** - 看是否有 JavaScript 错误
2. **Network 面板** - 检查资源加载：
   - `app.DTwm7DaH.js` 应该是 200 状态码（不是 404）
   - `style.WmmODEm8.css` 应该是 200

如果看到 404 错误，说明路径还有问题，告诉我具体的错误信息。

---

## 🚨 如果改配置有顾虑

**担心影响现有的 Docsify 站点？**

不用担心！切换到 GitHub Actions **不会**影响 Docsify：

1. Docsify 在根路径 `/`
2. VitePress 在子路径 `/vitepress-test/`
3. 两者完全独立

**实际效果**：
```
https://math-postech.github.io/           ← Docsify（不变）
https://math-postech.github.io/vitepress-test/  ← VitePress（新增）
```

---

## 需要帮助？

如果修改后还是黑屏，告诉我：

1. 浏览器控制台的错误信息（F12 → Console）
2. Network 面板中哪些文件加载失败（F12 → Network）
3. GitHub Pages 设置的截图

我会帮你调试！
