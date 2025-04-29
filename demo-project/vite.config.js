import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.jsx', // Replace with the actual entry file of your project
      name: 'DemoProject',  
      format: 'umd',
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom",
      ],
    }
  }
})