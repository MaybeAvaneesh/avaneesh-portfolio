/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works at any URL: a custom domain,
  // username.github.io, or username.github.io/<repo>/ on GitHub Pages.
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks: content edits don't bust the library cache.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/](gsap|@gsap|lenis)[\\/]/.test(id)) return "animation";
          if (/[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return "react";
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: { modules: { classNameStrategy: "non-scoped" } },
  },
});
