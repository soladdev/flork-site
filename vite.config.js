import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    strictPort: true
  },
  server: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    strictPort: true
  }
})
