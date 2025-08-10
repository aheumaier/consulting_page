import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Sicherstellen, dass Assets korrekt generiert werden
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
