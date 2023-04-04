import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.scss', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    ViteTsconfigPaths({ loose: true }),
    react()
  ],
})
