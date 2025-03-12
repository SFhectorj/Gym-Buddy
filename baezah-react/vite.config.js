import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Forward requests to /excercises running on port 3000
  server: {
    proxy: {
      '/excercises': 'http://localhost:3000',
    },
  },
});
