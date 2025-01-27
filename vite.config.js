import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // "process.env": process.env,
    // // By default, Vite doesn't include shims for NodeJS/
    // // necessary for segment analytics lib to work
    global: {},
  },
  plugins: [react()],
  resolve: {
    alias: {
      stream: 'stream-browserify', // Alias stream to stream-browserify
    },
  },
  optimizeDeps: {
    include: ['stream'], // Ensure stream is bundled during development
  },
  preview: {
    port: process.env.PORT || 4173,
    host: "0.0.0.0",
    strictPort: true,
  },
  server: {
    port: process.env.PORT || 4173,
    host: "0.0.0.0",
    strictPort: true,
  },
  publicDir: "public",
  assetsInclude: ["**/*.cur"],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".cur")) {
            return "cursors/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
