import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite';
import VueIconsResolver from '@kalimahapps/vue-icons/resolver';

import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },  
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VueIconsResolver],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})



