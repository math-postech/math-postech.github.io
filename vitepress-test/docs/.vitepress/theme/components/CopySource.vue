<template>
  <div class="copy-source-buttons">
    <button @click="copyMarkdownSource" class="copy-btn" title="复制页面源码">
      <span class="icon">📋</span>
      <span class="text">复制 Markdown</span>
    </button>
    <a :href="githubUrl" target="_blank" class="github-btn" title="在 GitHub 上查看">
      <span class="icon">📄</span>
      <span class="text">查看源文件</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const githubUrl = computed(() => {
  const base = 'https://github.com/math-postech/math-postech.github.io/blob/main/vitepress-test/docs'
  return `${base}/${page.value.relativePath}`
})

const copyMarkdownSource = async () => {
  try {
    // 从当前页面的相对路径构造原始 Markdown URL
    const rawUrl = `https://raw.githubusercontent.com/math-postech/math-postech.github.io/main/vitepress-test/docs/${page.value.relativePath}`

    // 获取 Markdown 源码
    const response = await fetch(rawUrl)
    const markdown = await response.text()

    // 复制到剪贴板
    await navigator.clipboard.writeText(markdown)

    // 显示成功消息
    alert('✅ Markdown 源码已复制到剪贴板！')
  } catch (error) {
    console.error('复制失败:', error)
    alert('❌ 复制失败，请直接访问 GitHub 查看源码')
  }
}
</script>

<style scoped>
.copy-source-buttons {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.copy-btn,
.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.copy-btn:hover,
.github-btn:hover {
  background: var(--vp-c-brand);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.copy-btn .icon,
.github-btn .icon {
  font-size: 1.2rem;
}

@media (max-width: 640px) {
  .copy-source-buttons {
    flex-direction: column;
  }

  .copy-btn,
  .github-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
