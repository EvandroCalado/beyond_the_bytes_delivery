import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: `${__dirname}/src/components`,
      pages: `${__dirname}/src/pages`,
      styles: `${__dirname}/src/styles`,
      types: `${__dirname}/src/types`,
      utils: `${__dirname}/src/utils`,
      assets: `${__dirname}/src/assets`,
    },
  },
  define: {
    'process.env': process.env,
    global: 'window',
  },
});
