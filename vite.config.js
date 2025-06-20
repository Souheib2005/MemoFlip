// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/memoflip/',  ← Comment this out for local dev
  plugins: [react()],
})
