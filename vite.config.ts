import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "Blueprint",
            fileName: "blueprint",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
