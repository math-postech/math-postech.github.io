import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import markdownItPlantuml from 'markdown-it-plantuml'
import container from 'markdown-it-container'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "POSTECH Math",
  description: "POSTECH Mathematics Department - Academic Announcements",

  // Deploy to root path (no base needed)
  // base: '/',

  // Exclude project documentation from VitePress build
  srcExclude: [
    'docs/**',      // Project docs (ADR, DR, EIR, etc.)
    'test/**',      // Test files
    'tests/**',     // Test files
    'vitepress-test/**',  // Old test directory
    'README.md'     // Old Docsify homepage (replaced by index.md)
  ],

  // Cache busting: VitePress automatically adds content hash to assets
  // No need for manual cache control like Docsify!

  themeConfig: {
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Colloquium', link: '/colloquium/' }
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Colloquium',
        items: [
          { text: '2026 Spring', link: '/colloquium/2026-spring/' },
          { text: '2024 Fall', link: '/colloquium/2024-fall/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/math-postech/math-postech.github.io' }
    ],

    // Edit link - Jump to GitHub editor
    editLink: {
      pattern: 'https://github.com/math-postech/math-postech.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    // Footer navigation
    docFooter: {
      prev: 'Previous',
      next: 'Next'
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
    // Docsify hash URL to VitePress clean URL redirect
    // This makes old QR codes (e.g., /#/colloquium/2026-spring/readme.md) work
    ['script', {}, `
      (function() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#/')) {
          // Extract path: #/colloquium/2026-spring/readme.md -> /colloquium/2026-spring/
          let path = hash.slice(2); // Remove '#/'

          // Remove .md extension
          path = path.replace(/\\.md$/, '');

          // Remove trailing /readme
          path = path.replace(/\\/readme$/, '');

          // Ensure path starts with /
          if (!path.startsWith('/')) {
            path = '/' + path;
          }

          // Add trailing slash if not present and not root (VitePress convention)
          if (path !== '/' && !path.endsWith('/')) {
            path += '/';
          }

          // Redirect using replace (don't create browser history entry)
          window.location.replace(path);
        }
      })();
    `],
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
