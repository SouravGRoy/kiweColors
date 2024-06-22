import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove external option for react, react-dom, and locomotive-scroll
    },
  },
});
