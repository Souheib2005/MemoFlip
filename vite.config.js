import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/memoflip/', // <-- Your repo name here
  plugins: [react()],
})
