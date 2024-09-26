// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/html-validator'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    strict: false,
  },
  eslint: {
    config: {
      stylistic: true,
      indent: 2,
      quotes: 'double',
    },
  },
});
