import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/images/cities/*.webp', // Шаблон для поиска файлов
                    dest: 'assets/images/cities', // Целевая папка в dist
                },
                {
                    src: 'src/assets/images/skills/*.webp', // Шаблон для поиска файлов
                    dest: 'assets/images/skills', // Целевая папка в dist
                },
            ],
        }),
    ],
});
