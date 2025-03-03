import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'../API/wwwroot'
  },
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
});

