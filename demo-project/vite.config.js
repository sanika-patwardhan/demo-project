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
      fileName: (format) => `demo-project.${format}.js`, // Output file name
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom",
        "react/jsx-runtime"
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
      },
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})