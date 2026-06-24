import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // The model provider doesn't send CORS headers, so the browser can't call it
      // directly. Proxy same-origin requests through the dev server instead.
      '/api/openai': {
        target: 'https://generativelanguage.googleapis.com/v1beta/openai',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api\/openai/, ''),
      },
    },
  },
});
