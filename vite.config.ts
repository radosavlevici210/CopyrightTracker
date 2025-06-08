
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: 'client',
  base: '/',
  build: {
    outDir: '../dist',
    sourcemap: true,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chart-vendor': ['recharts'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-tabs'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
  },
  server: {
    port: 5000,
    host: '0.0.0.0',
    open: false,
    hmr: true,
  },
  preview: {
    port: 5000,
    host: '0.0.0.0',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'recharts', 'lucide-react'],
  },
});
