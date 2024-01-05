import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import laravel from 'laravel-vite-plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    laravel({
        input: [
            'resources/css/app.css',
            'resources/js/main.ts',
          ],
        refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
