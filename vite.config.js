import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
    // Production/Library build mode
    const libConfig = {
        build: {
            lib: {
                entry: {
                    index: resolve(import.meta.dirname, 'index.js'),
                },
            },
            rollupOptions: {
                input: {
                    index: resolve(import.meta.dirname, 'index.js'),
                },
                output: [
                    {
                        format: 'es',
                        entryFileNames: 'flattenUnflatten.js',
                        assetFileNames: 'assets/[name][extname]',
                    }
                ]
            },
            sourcemap: true,
        }
    }

    return libConfig;
})