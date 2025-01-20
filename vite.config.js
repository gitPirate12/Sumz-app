import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the react plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html', // Make sure this matches your main HTML entry point
        popup: 'popup.html', // Your popup HTML entry point
      }
    }
  }
});
