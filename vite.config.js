import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactjs-multistep-form/',
  build: {
    outDir: 'dist',
  },
});
