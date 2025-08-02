import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons', 'lucide-react'],
          
          // Page chunks for better caching
          'home-pages': [
            './src/pages/hero.jsx',
            './src/pages/identity.jsx',
            './src/pages/about-us.jsx'
          ],
          'product-pages': [
            './src/pages/products.jsx',
            './src/pages/industries.jsx',
            './src/pages/manufacturing-process.jsx'
          ],
          'info-pages': [
            './src/pages/quality-certifications.jsx',
            './src/pages/ourteam.jsx',
            './src/pages/projects.jsx'
          ],
          'misc-pages': [
            './src/pages/Sustainability.jsx',
            './src/pages/Resources.jsx',
            './src/pages/Awards.jsx',
            './src/pages/Contact.jsx'
          ]
        }
      }
    },
    
    // Compression and minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // Asset optimization
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    
    // Source maps for production debugging (optional)
    sourcemap: false
  },
  
  // Development server optimizations
  server: {
    hmr: {
      overlay: false
    }
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons/fa',
      'react-icons/si',
      'lucide-react'
    ]
  },
  
  // Asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
})
