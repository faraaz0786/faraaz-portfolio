// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isGh = mode === 'gh'       // when deploying to GitHub Pages
  return {
    plugins: [react()],
    base: isGh ? '/faraaz-portfolio/' : '/', // <-- CHANGE repo name accordingly
  }
})
