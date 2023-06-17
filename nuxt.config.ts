export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  runtimeConfig: {
    public: {
      forwardEmailApiKey: process.env.FORWARD_EMAIL_API_KEY,
    },
  },
  css: ["~/layouts/global.css"],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
});
