import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { viteGlobalPlugin } from 'vite-plugin-global';

export default defineConfig({
  plugins: [
    react(),
    // viteGlobalPlugin({
    //   '$': 'jquery',
    //   'jQuery': 'jquery',
    //   'window.jQuery': 'jquery'
    // })
  ]
});
