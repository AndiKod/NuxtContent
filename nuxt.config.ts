import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true
  },
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css"
  ],
})
