import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['crypto'],
    },
  },
  optimizeDeps: {
    include: [],
    esbuildOptions: {
    }
  },
});
