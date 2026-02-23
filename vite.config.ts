import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './', // project root
  base: '/',  // build base path
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
