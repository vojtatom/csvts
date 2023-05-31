import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'csvts/csvts.ts'),
            name: 'csvts',
            // the proper extensions will be added
            fileName: 'csvts',
        },
    },
    resolve: {
        alias: {
            '@csvts': resolve(__dirname, './csvts'),
        },
    },
    plugins: [dts()],
});
