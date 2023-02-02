import { resolve } from "path"
import { defineConfig } from "vite"

// You can add multi HTML Pages to build by adding it on input object
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html")
      }
    }
  }
})