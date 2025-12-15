import { resolve } from "path";
import { defineConfig } from "vite";
import { NodePackageImporter } from "sass";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      context: {
        isDev: process.env.NODE_ENV == "development",
        propPrefix: "🎟",
        atomPrefix: "⚛️",
        color: {
          steps: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          palettes: ["grey", "primary", "secondary", "tertiary"],
        },
      },
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exampleIndex: resolve(__dirname, "example/index.html"),
        exampleLayout: resolve(__dirname, "example/layout.html"),
        exampleBodyCopy: resolve(__dirname, "example/body-copy.html"),
        exampleElements: resolve(__dirname, "example/elements-showcase.html"),
        exampleColor: resolve(__dirname, "example/color.html"),
        exampleLength: resolve(__dirname, "example/length.html"),
        exampleShadow: resolve(__dirname, "example/shadow.html"),
        mainSheet: resolve(__dirname, "css/index.scss"),
        fontsSheet: resolve(__dirname, "css/fonts.scss"),
        optionalSheet: resolve(__dirname, "css/opt.scss"),
        schemeDark: resolve(__dirname, "css/dark.scheme.scss"),
        schemeLight: resolve(__dirname, "css/light.scheme.scss"),
        utilsDev: resolve(__dirname, "css/dev.utils.scss"),
      },
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.originalFileNames[0]?.endsWith(".scss")
            ? assetInfo.originalFileNames[0].replace(".scss", ".css") // keep original names for stylesheets
            : "assets/[name]-[hash][extname]", // use the default pattern
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        importers: [new NodePackageImporter()],
      },
    },
  },
});
