import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/').toLowerCase();
          if (normalizedId.includes('node_modules')) {
            if (normalizedId.includes('lucide-react')) return 'vendor-lucide';
            if (normalizedId.includes('react') || normalizedId.includes('react-dom')) return 'vendor-react';
            return 'vendor';
          }
          if (normalizedId.includes('/data/bootcamp/')) {
            if (
              normalizedId.includes('days1to5') ||
              normalizedId.includes('/day1/') ||
              normalizedId.includes('/day2/') ||
              normalizedId.includes('/day3/') ||
              normalizedId.includes('/day4/') ||
              normalizedId.includes('/day5/')
            ) {
              return 'bootcamp-days-1-to-5';
            }
            if (
              normalizedId.includes('days6to10') ||
              normalizedId.includes('/day6/') ||
              normalizedId.includes('/day7/') ||
              normalizedId.includes('/day8/') ||
              normalizedId.includes('/day9/') ||
              normalizedId.includes('/day10/')
            ) {
              return 'bootcamp-days-6-to-10';
            }
            if (
              normalizedId.includes('days11to15') ||
              normalizedId.includes('/day11/') ||
              normalizedId.includes('/day12/') ||
              normalizedId.includes('/day13/') ||
              normalizedId.includes('/day14/') ||
              normalizedId.includes('/day15/')
            ) {
              return 'bootcamp-days-11-to-15';
            }
            return 'bootcamp-core';
          }
          if (normalizedId.includes('/data/part') && normalizedId.includes('data')) {
            return 'constitution-parts';
          }
          if (normalizedId.includes('legaldictionarydata') || normalizedId.includes('forensicvocabularydata')) {
            return 'dictionary-data';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500
  }
})

