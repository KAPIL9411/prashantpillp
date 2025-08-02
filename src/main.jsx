import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import performanceMonitor from './utils/performanceMonitor.js'

// Initialize performance monitoring
if (process.env.NODE_ENV === 'development') {
  // Log performance summary after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logSummary();
    }, 2000);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
