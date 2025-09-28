import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // SEO optimization plugin
    {
      name: 'seo-prerender',
      generateBundle() {
        // This will be handled by the build process
        console.log('🔍 SEO pre-rendering will be executed after build...');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Ensure proper asset handling for SEO
    assetsDir: 'assets',
    sourcemap: false, // Disable for production
  },
  // Enable static generation
  ssr: {
    noExternal: ['react-helmet-async']
  },
  // SEO-friendly configuration
  define: {
    __SEO_MODE__: JSON.stringify(process.env.NODE_ENV === 'production')
  }
});