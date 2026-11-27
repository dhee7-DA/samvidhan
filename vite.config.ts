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
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-lucide',
              test: /node_modules[\\/]lucide-react/
            },
            {
              name: 'vendor-react',
              test: /node_modules[\\/](react|react-dom)[\\/]/
            },
            {
              name: 'vendor-motion',
              test: /node_modules[\\/](motion|framer-motion|motion-dom|motion-utils)[\\/]/
            },
            {
              name: 'vendor-three',
              test: /node_modules[\\/]three[\\/]/
            },
            {
              name: 'vendor',
              test: /node_modules/
            },
            {
              name: 'bootcamp-days-1-to-3',
              test: /\/data\/bootcamp\/day[1-3]\//
            },
            {
              name: 'bootcamp-days-4-to-6',
              test: /\/data\/bootcamp\/day[4-6]\//
            },
            {
              name: 'bootcamp-days-7-to-9',
              test: /\/data\/bootcamp\/day[7-9]\//
            },
            {
              name: 'bootcamp-days-10-to-12',
              test: /\/data\/bootcamp\/day1[0-2]\//
            },
            {
              name: 'bootcamp-days-13-to-15',
              test: /\/data\/bootcamp\/day1[3-5]\//
            },
            {
              name: 'bootcamp-core',
              test: /\/data\/bootcamp\//
            },
            {
              name: 'constitution-parts',
              test: /\/data\/part.*data/i
            },
            {
              name: 'dictionary-data',
              test: /(legaldictionarydata|forensicvocabularydata)/i
            }
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1500
  }
})

