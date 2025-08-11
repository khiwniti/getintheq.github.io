import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion"],
          markdown: ["@uiw/react-md-editor"],
          "code-editor": ["@uiw/react-textarea-code-editor"],
        },
      },
    },
  },
  plugins: [react(), tempo()],
});
