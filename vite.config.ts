import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
  define: {
    "process.env": {}, // Polyfill process.env
  },
  build: {
    lib: {
      entry: "src/arbiter-scoreboard.tsx",
      name: "ArbiterScoreboard", // This ensures the global name is ArbiterScoreboard
      fileName: "arbiter-scoreboard",
      formats: ["iife"], // Builds an Immediately Invoked Function Expression (IIFE)
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});