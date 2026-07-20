import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Must match the GitHub repo name for GitHub Pages asset URLs to resolve.
  base: '/react-component/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
  },
})
