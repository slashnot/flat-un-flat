import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(() => {
    // Production/Library build mode
    const libConfig = {
        plugins: [
            dts({
                include: ['src/**/*.ts', 'index.ts'],
                outDir: 'dist',
                rollupTypes: true,
            })
        ],
        build: {
            lib: {
                entry: {
                    index: resolve(import.meta.dirname, 'index.ts'),
                },
            },
            rollupOptions: {
                external: ['react', 'react-dom', '@preact/signals-core', '@preact/signals-react', 'mutative'],
                input: {
                    index: resolve(import.meta.dirname, 'index.ts'),
                },
                output: [
                    {
                        format: 'es',
                        entryFileNames: 'flat-un-flat.js',
                        assetFileNames: 'assets/[name][extname]',
                    }
                ]
            },
            sourcemap: true,
        }
    }

    return libConfig;
})