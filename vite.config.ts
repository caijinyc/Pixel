/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
