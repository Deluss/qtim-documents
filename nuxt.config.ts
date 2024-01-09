// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  app: {
    head: {
      script: [{
        src: 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js'
      }]
    }
  },
  build: {
    analyze: {
      projectRoot: '/qtim-documents'
    }
  }
})
