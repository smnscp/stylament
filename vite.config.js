import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsInlineLimit: 1024,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exampleLayout: resolve(__dirname, "example/layout.html"),
        exampleBodyCopy: resolve(__dirname, "example/body-copy.html"),
        exampleColorTable: resolve(__dirname, "example/color.html"),
        exampleElementsShowcase: resolve(__dirname, "example/elements-showcase.html"),
      },
    },
  },
});
