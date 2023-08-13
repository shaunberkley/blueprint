import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "Vue Blueprint JS",
            fileName: "blueprint",
        },
        rollupOptions: {
            input: "src/main.ts",
            output: {
                format: "umd",
                name: "Blueprint",
                globals: {
                    vue: "Vue",
                },
            },
            plugins: [],
        },
    },
    optimizeDeps: {
        include: ["@babel/runtime"],
    },
    esbuild: {
        loader: "tsx",
        target: "es2015",
    },
});
