import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Setting to follow Github page requirement.
  // The project is built locally because I don't want to bother with a CI workflow on a demo project
  build: {
    outDir: "docs"
  }
})
