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
    server: {
        host: "localhost",
        port: 5173,
        https: false,
        cors: {
            origin: ["http://localhost:5173", "https://sf8-vue3.com:445", "http://127.0.0.1:8000"],
            credentials: true,
        },
        watch: {
            usePolling: true,
        }
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
