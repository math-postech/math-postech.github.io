# VitePress 部署步骤（解决 404 问题）

## 🎯 完整修复流程

你看到 404 错误是因为 **GitHub Pages 还在用旧配置**。按以下步骤操作：

---

## Step 1: 等待新的 workflow 运行（5分钟后）

我刚刚更新了部署脚本，它会将 VitePress 部署到 `gh-pages` 分支。

**操作**：
1. 这个文件会触发新的部署
2. 等待 5 分钟（GitHub Actions 需要时间）
3. 检查 GitHub Actions 状态：
   ```
   https://github.com/math-postech/math-postech.github.io/actions
   ```
   看到绿色的 ✓ 就说明成功了

---

## Step 2: 修改 GitHub Pages 设置

**重要**：必须改成从 `gh-pages` 分支部署！

### 操作步骤：

1. **打开设置页面**：
   ```
   https://github.com/math-postech/math-postech.github.io/settings/pages
   ```

2. **找到 "Build and deployment" 区域**

3. **Source 下拉菜单**，选择：
   ```
   Deploy from a branch  ← 选这个
   ```

4. **Branch 设置**：
   ```
   Branch: gh-pages  ← 选这个
   Folder: / (root)  ← 选这个
   ```

5. **点击 Save 按钮**

6. **等待 1-2 分钟**让 GitHub Pages 重新部署

---

## Step 3: 测试访问

访问以下 URL：

### VitePress 测试站
```
https://math-postech.github.io/vitepress-test/
```

**应该看到**：
- ✅ 蓝绿色主题的首页
- ✅ "POSTECH Math (VitePress Test)" 标题
- ✅ 6 个特性卡片
- ✅ 导航栏可用

### Docsify 原站
```
https://math-postech.github.io/
```

**应该仍然正常**：
- ✅ Docsify 继续工作
- ✅ 不受影响

---

## 🔍 如果还是 404

### 检查 GitHub Actions

1. 打开：https://github.com/math-postech/math-postech.github.io/actions
2. 找到 "Deploy VitePress (Simple)" workflow
3. 点击最新的运行
4. 检查是否有错误

### 检查 gh-pages 分支

1. 打开：https://github.com/math-postech/math-postech.github.io/tree/gh-pages
2. 应该看到 `vitepress-test/` 目录
3. 里面应该有：
   - `index.html`
   - `assets/` 目录
   - 其他文件

### 检查浏览器控制台

F12 → Console，看具体的错误信息，告诉我。

---

## 🤔 为什么之前不work？

### 旧方案的问题

之前的 workflow 使用 `actions/deploy-pages`，这需要：
- GitHub Pages 设置为 "GitHub Actions" 模式
- 但你的仓库用的是 "Deploy from a branch" 模式
- **冲突！**

### 新方案

现在改用 `peaceiris/actions-gh-pages`：
- 部署到 `gh-pages` 分支
- 兼容 "Deploy from a branch" 模式
- **不需要改太多设置！**

---

## 📊 部署架构

```
main 分支（你的代码）
    ↓
GitHub Actions 构建
    ↓
gh-pages 分支（构建产物）
    ├── index.html（Docsify，可选）
    └── vitepress-test/（VitePress）
        ├── index.html
        ├── assets/
        └── ...
    ↓
GitHub Pages 部署
    ↓
https://math-postech.github.io/
    ├── /（Docsify）
    └── /vitepress-test/（VitePress）
```

---

## ⏱️ 时间线

| 时间 | 操作 |
|------|------|
| **现在** | 提交这个文件 → 触发 workflow |
| **+5分钟** | GitHub Actions 完成构建 |
| **改设置** | 你：修改 Pages 设置为 gh-pages 分支 |
| **+2分钟** | GitHub Pages 重新部署 |
| **测试** | 访问 URL，应该能看到了！ |

---

## 🆘 还是不行？

告诉我：

1. **GitHub Actions 状态**：成功还是失败？
2. **gh-pages 分支**：有 vitepress-test/ 目录吗？
3. **Pages 设置截图**：确认配置正确
4. **浏览器错误**：F12 Console 的具体错误

我会继续帮你调试！
