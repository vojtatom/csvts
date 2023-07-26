import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'tablests/tables.ts'),
            name: 'tablests',
            // the proper extensions will be added
            fileName: 'tablests',
        },
    },
    resolve: {
        alias: {
            '@tablests': resolve(__dirname, './tablests'),
        },
    },
    plugins: [dts()],
});
