// @ts-check
import { defineConfig, envField } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
})
