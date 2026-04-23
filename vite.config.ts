import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      // Default directives applied to ALL image imports with query params
      defaultDirectives: (url) => {
        // Only apply defaults to images that have query parameters
        if (url.searchParams.has('w') || url.searchParams.has('format')) {
          return new URLSearchParams({
            // Default to WebP if no format specified
            format: url.searchParams.get('format') || 'webp',
            // Default quality
            quality: url.searchParams.get('quality') || '80',
          })
        }
        return new URLSearchParams()
      },
    }),
  ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
})

