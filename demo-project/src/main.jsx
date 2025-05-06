import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

window.mount = (container) => {
  console.log("hello")
  createRoot(container).render(<App />);
}