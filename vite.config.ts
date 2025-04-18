import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@hn': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
