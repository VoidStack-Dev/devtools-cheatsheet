import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/devtools-cheatsheet/', // 👈 Add this line
  plugins: [react()],
});
