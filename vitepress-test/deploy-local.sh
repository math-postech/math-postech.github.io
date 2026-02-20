#!/bin/bash

# VitePress 本地构建 + 部署脚本
# 使用方法: bash deploy-local.sh

set -e

echo "🔨 开始构建 VitePress..."
cd "$(dirname "$0")"

# 构建
npm run docs:build

echo ""
echo "✅ 构建完成！"
echo ""
echo "📦 现在部署到 gh-pages 分支..."

# 回到仓库根目录
cd ..

# 检查当前分支
CURRENT_BRANCH=$(git branch --show-current)
echo "当前分支: $CURRENT_BRANCH"

# 保存当前状态
git add .
git stash

# 切换到 gh-pages（如果不存在则创建）
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "切换到已存在的 gh-pages 分支"
    git checkout gh-pages
else
    echo "创建新的 gh-pages 分支"
    git checkout --orphan gh-pages
    git rm -rf .
fi

# 清理旧的 vitepress-test 目录
rm -rf vitepress-test

# 复制构建产物
echo "复制构建文件..."
mkdir -p vitepress-test
cp -r vitepress-test/docs/.vitepress/dist/* vitepress-test/ 2>/dev/null || {
    # 如果上面失败（因为在 gh-pages 分支上没有源文件），从 stash 恢复
    git checkout $CURRENT_BRANCH -- vitepress-test/docs/.vitepress/dist
    cp -r vitepress-test/docs/.vitepress/dist/* vitepress-test/
    rm -rf vitepress-test/docs
}

# 提交
echo "提交更改..."
git add vitepress-test/
git commit -m "Deploy VitePress: $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有新的更改"

# 推送
echo "推送到 GitHub..."
git push origin gh-pages

echo ""
echo "✅ 部署完成！"
echo ""
echo "切回原分支..."
git checkout $CURRENT_BRANCH
git stash pop || true

echo ""
echo "🎉 全部完成！"
echo ""
echo "访问: https://math-postech.github.io/vitepress-test/"
echo ""
echo "如果看到 404，请确保 GitHub Pages 设置："
echo "  Source: Deploy from a branch"
echo "  Branch: gh-pages / (root)"
