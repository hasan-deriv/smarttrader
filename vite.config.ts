import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const ALIASES = {
  Components: resolve(__dirname, "./src/components"),
  Constants: resolve(__dirname, "./src/constants"),
  Contexts: resolve(__dirname, "./src/contexts"),
  Hooks: resolve(__dirname, "./src/hooks"),
  Utils: resolve(__dirname, "./src/utils"),
  Styles: resolve(__dirname, "./src/styles"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* Absoloute path */
  resolve: { alias: ALIASES },
  /* vitest configs */
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      reporter: 'lcov',
      provider: 'v8'
    }
  },
});
