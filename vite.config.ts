import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/pdf-converter-app-landing-page/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
