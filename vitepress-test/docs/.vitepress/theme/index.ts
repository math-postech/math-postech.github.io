// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CopySource from './components/CopySource.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Add CopySource component to doc-before slot
      'doc-before': () => h(CopySource)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components
    app.component('CopySource', CopySource)
  }
} satisfies Theme
