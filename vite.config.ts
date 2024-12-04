import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue(), vueJsx(), commonjs(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        ...(process.env.NODE_ENV !== 'development'
          ? {
              './runtimeConfig': './runtimeConfig.browser', 
            }
          : {}),
      },
      extensions: ['.js', '.ts', '.vue', '.json', '.mjs']
    },
    define: {
      global: 'globalThis', 
    },
    optimizeDeps: {
      include: ['buffer']
    },
    base: env.VITE_PUBLIC_PATH || '/', 
  };
});