import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin(),
        vue()
    ],
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './assets/vue/src'),
            '@images': path.resolve(__dirname, './assets/images'),
        },
    },
    build: {
        outDir: "public/build",
        assetsDir: "assets",
        rollupOptions: {
            input: {
                app: "./assets/vue/src/main.ts"
            },
        }
    },
});
