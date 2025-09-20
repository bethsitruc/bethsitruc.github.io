import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For user/organization GitHub Pages (bethsitruc.github.io) base can remain '/'
  base: '/',
})
