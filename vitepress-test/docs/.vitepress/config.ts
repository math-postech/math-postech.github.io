import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import markdownItPlantuml from 'markdown-it-plantuml'
import container from 'markdown-it-container'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "POSTECH Math (VitePress Test)",
  description: "Testing VitePress as Docsify replacement",

  // GitHub Pages deployment base
  base: '/vitepress-test/',

  // Cache busting: VitePress automatically adds content hash to assets
  // No need for manual cache control like Docsify!

  themeConfig: {
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tests', link: '/tests/' },
      { text: 'Colloquium', link: '/colloquium/' }
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Tests',
        items: [
          { text: 'Blockquote + Math', link: '/tests/blockquote-math' },
          { text: 'Custom Alerts', link: '/tests/custom-alerts' },
          { text: 'Diagrams', link: '/tests/diagrams' },
          { text: 'Commutative Diagrams', link: '/tests/commutative-diagrams' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/math-postech/math-postech.github.io' }
    ],

    // Edit link - 直接跳转到 GitHub 编辑
    editLink: {
      pattern: 'https://github.com/math-postech/math-postech.github.io/edit/main/vitepress-test/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // Footer with copy source button
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },

  // Markdown configuration
  markdown: {
    math: true,  // Enable math support

    config: (md) => {
      // MathJax plugin
      md.use(markdownItMathjax3)

      // PlantUML plugin
      md.use(markdownItPlantuml, {
        server: 'https://www.plantuml.com/plantuml'
      })

      // Custom containers for mathematical blocks
      // Lemma
      md.use(container, 'lemma', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="custom-block lemma">\n<p class="custom-block-title">Lemma</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      // Proposition
      md.use(container, 'prop', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="custom-block prop">\n<p class="custom-block-title">Proposition</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      // Example
      md.use(container, 'exa', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="custom-block exa">\n<p class="custom-block-title">Example</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      // Remark
      md.use(container, 'rmk', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="custom-block rmk">\n<p class="custom-block-title">Remark</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })
    }
  },

  // Add MathJax script to head with CD package support
  head: [
    // MathJax configuration for commutative diagrams
    ['script', {}, `
      window.MathJax = {
        tex: {
          packages: {'[+]': ['amscd']},  // Enable amscd for commutative diagrams
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
        },
        loader: {load: ['[tex]/amscd']}
      };
    `],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
      async: true
    }],
    // Cache busting meta tags (VitePress handles this better than Docsify)
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }]
  ],

  // Better caching strategy
  cleanUrls: true,  // Remove .html from URLs
  lastUpdated: true,  // Show last updated time

  // Mermaid configuration
  mermaid: {
    // Refer to https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  }
}))
