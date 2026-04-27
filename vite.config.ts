import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import prerender from 'vite-plugin-prerender'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), prerender({
    staticDir: resolve(__dirname, 'dist'),
    routes: ['/', '/dormitorio', '/chat'], // As rotas que você quer que o Google leia
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
